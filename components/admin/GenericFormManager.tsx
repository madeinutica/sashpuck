"use client";

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

interface FormEntry {
  id: number;
  submitted_at: string;
  created_at: string;
  [key: string]: any; // Dynamic fields based on form type
}

interface FormManagerProps {
  formType: string;
  formName: string;
  tableName: string;
  fields: Array<{
    key: string;
    label: string;
    type: 'text' | 'email' | 'textarea' | 'date';
    searchable?: boolean;
  }>;
  exportFields: string[];
}

export default function GenericFormManager({ 
  formType, 
  formName, 
  tableName, 
  fields, 
  exportFields 
}: FormManagerProps) {
  const [entries, setEntries] = useState<FormEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name'>('newest');

  const fetchEntries = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/admin/forms?type=${formType}`);
      
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setEntries(result.data || []);
          return;
        }
      }

      // Fallback to direct Supabase query
      const { data, error: fetchError } = await supabase
        .from(tableName)
        .select('*')
        .order('submitted_at', { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setEntries(data || []);
    } catch (err) {
      console.error(`Error fetching ${formName} entries:`, err);
      setError(err instanceof Error ? err.message : 'Failed to fetch entries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, [formType, tableName]);

  const filteredAndSortedEntries = entries
    .filter(entry => {
      if (searchTerm) {
        const search = searchTerm.toLowerCase();
        return fields.some(field => {
          if (field.searchable !== false) {
            const value = entry[field.key];
            return value && value.toString().toLowerCase().includes(search);
          }
          return false;
        });
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime();
        case 'oldest':
          return new Date(a.submitted_at).getTime() - new Date(b.submitted_at).getTime();
        case 'name':
          const nameField = fields.find(f => f.key.includes('name'));
          if (nameField) {
            return (a[nameField.key] || '').localeCompare(b[nameField.key] || '');
          }
          return 0;
        default:
          return 0;
      }
    });

  const exportToCSV = () => {
    const headers = exportFields;
    const csvContent = [
      headers.join(','),
      ...filteredAndSortedEntries.map(entry => 
        exportFields.map(field => {
          const value = entry[field];
          if (field === 'submitted_at' && value) {
            return `"${new Date(value).toLocaleString()}"`;
          }
          return `"${value || ''}"`;
        }).join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${formType}-entries-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const deleteEntry = async (id: number, displayName: string) => {
    if (!confirm(`Are you sure you want to delete this ${formName.toLowerCase()} entry from ${displayName}? This action cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/forms?type=${formType}&id=${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setEntries(entries.filter(entry => entry.id !== id));
      } else {
        const result = await response.json();
        alert(`Failed to delete entry: ${result.message}`);
      }
    } catch (error) {
      console.error('Error deleting entry:', error);
      alert('Failed to delete entry. Please try again.');
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.2rem', color: '#666' }}>Loading {formName.toLowerCase()}...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '2rem' }}>
        <div style={{ 
          background: '#fef2f2', 
          border: '1px solid #ef4444', 
          borderRadius: '8px',
          padding: '1rem',
          color: '#b91c1c'
        }}>
          <h3>Error Loading {formName}</h3>
          <p>{error}</p>
          <button 
            onClick={fetchEntries}
            style={{
              background: '#ef4444',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>
          {formName}
        </h1>
        <p style={{ color: '#6b7280', fontSize: '1rem' }}>
          Manage and view all {formName.toLowerCase()}
        </p>
      </div>

      {/* Stats */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{ 
          background: 'white', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: '0 0 0.5rem 0' }}>
            Total Entries
          </h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937' }}>
            {entries.length}
          </div>
        </div>

        <div style={{ 
          background: 'white', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: '0 0 0.5rem 0' }}>
            This Month
          </h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#059669' }}>
            {entries.filter(entry => {
              const entryDate = new Date(entry.submitted_at);
              const now = new Date();
              return entryDate.getMonth() === now.getMonth() && entryDate.getFullYear() === now.getFullYear();
            }).length}
          </div>
        </div>

        <div style={{ 
          background: 'white', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: '0 0 0.5rem 0' }}>
            Latest Entry
          </h3>
          <div style={{ fontSize: '1rem', fontWeight: '500', color: '#1f2937' }}>
            {entries.length > 0 ? new Date(entries[0].submitted_at).toLocaleDateString() : 'None yet'}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ 
        background: 'white', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        marginBottom: '1rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <input
              type="text"
              placeholder="Search entries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '0.875rem'
              }}
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            style={{
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '0.875rem'
            }}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name">Name A-Z</option>
          </select>

          <button
            onClick={exportToCSV}
            style={{
              background: '#059669',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            Export CSV
          </button>

          <button
            onClick={fetchEntries}
            style={{
              background: '#6b7280',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Entries Table */}
      {filteredAndSortedEntries.length === 0 ? (
        <div style={{ 
          background: 'white', 
          padding: '3rem', 
          borderRadius: '8px', 
          textAlign: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: '0 0 0.5rem 0', color: '#1f2937' }}>
            {searchTerm ? 'No matching entries found' : 'No entries yet'}
          </h3>
          <p style={{ color: '#6b7280' }}>
            {searchTerm ? 'Try adjusting your search terms' : `${formName} will appear here when people submit the form`}
          </p>
        </div>
      ) : (
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f9fafb' }}>
                  {fields.map(field => (
                    <th key={field.key} style={{ 
                      padding: '0.75rem', 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      color: '#374151', 
                      borderBottom: '1px solid #e5e7eb' 
                    }}>
                      {field.label}
                    </th>
                  ))}
                  <th style={{ 
                    padding: '0.75rem', 
                    textAlign: 'left', 
                    fontWeight: '600', 
                    color: '#374151', 
                    borderBottom: '1px solid #e5e7eb' 
                  }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedEntries.map((entry) => (
                  <tr key={entry.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                    {fields.map(field => (
                      <td key={field.key} style={{ padding: '0.75rem', color: '#1f2937' }}>
                        {field.type === 'email' ? (
                          <a 
                            href={`mailto:${entry[field.key]}`}
                            style={{ color: '#2563eb', textDecoration: 'none' }}
                            onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                            onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                          >
                            {entry[field.key]}
                          </a>
                        ) : field.type === 'date' ? (
                          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                            <div>{new Date(entry[field.key]).toLocaleDateString()}</div>
                            <div style={{ opacity: 0.7 }}>{new Date(entry[field.key]).toLocaleTimeString()}</div>
                          </div>
                        ) : field.type === 'textarea' ? (
                          <div style={{ maxWidth: '300px', wordWrap: 'break-word', color: '#6b7280' }}>
                            {entry[field.key]}
                          </div>
                        ) : (
                          <div style={{ fontWeight: field.key.includes('name') ? '500' : 'normal' }}>
                            {entry[field.key]}
                          </div>
                        )}
                      </td>
                    ))}
                    <td style={{ padding: '0.75rem' }}>
                      <button
                        onClick={() => {
                          const nameField = fields.find(f => f.key.includes('name'));
                          const displayName = nameField ? entry[nameField.key] : 'this entry';
                          deleteEntry(entry.id, displayName);
                        }}
                        style={{
                          background: '#ef4444',
                          color: 'white',
                          border: 'none',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = '#dc2626'}
                        onMouseOut={(e) => e.currentTarget.style.background = '#ef4444'}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Footer info */}
      <div style={{ marginTop: '2rem', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>
        Showing {filteredAndSortedEntries.length} of {entries.length} entries
      </div>
    </div>
  );
}