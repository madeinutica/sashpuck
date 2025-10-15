"use client";

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

interface WinEntry {
  id: number;
  name: string;
  email: string;
  how_did_hear: string;
  submitted_at: string;
  created_at: string;
}

export default function WinEntriesManager() {
  const [entries, setEntries] = useState<WinEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name'>('newest');

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      setError(null);

      // Try admin API first, fallback to direct Supabase if needed
      const response = await fetch('/api/admin/win-entries');
      
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setEntries(result.data || []);
          return;
        }
      }

      // Fallback to direct Supabase query
      const { data, error: fetchError } = await supabase
        .from('win_entries')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setEntries(data || []);
    } catch (err) {
      console.error('Error fetching win entries:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch entries');
    } finally {
      setLoading(false);
    }
  };

  const filteredAndSortedEntries = entries
    .filter(entry => {
      if (searchTerm) {
        const search = searchTerm.toLowerCase();
        return (
          entry.name.toLowerCase().includes(search) ||
          entry.email.toLowerCase().includes(search) ||
          entry.how_did_hear.toLowerCase().includes(search)
        );
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
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'How Did You Hear', 'Submitted At'];
    const csvContent = [
      headers.join(','),
      ...filteredAndSortedEntries.map(entry => [
        `"${entry.name}"`,
        `"${entry.email}"`,
        `"${entry.how_did_hear}"`,
        `"${new Date(entry.submitted_at).toLocaleString()}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `win-entries-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const deleteEntry = async (id: number, name: string) => {
    if (!confirm(`Are you sure you want to delete the entry from ${name}? This action cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/win-entries?id=${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // Remove from local state
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
          <div style={{ fontSize: '1.2rem', color: '#666' }}>Loading win entries...</div>
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
          <h3>Error Loading Entries</h3>
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
          🎉 Win Contest Entries
        </h1>
        <p style={{ color: '#6b7280', fontSize: '1rem' }}>
          Manage and view all contest form submissions
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
          {/* Search */}
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

          {/* Sort */}
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

          {/* Export */}
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

          {/* Refresh */}
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: '0 0 0.5rem 0', color: '#1f2937' }}>
            {searchTerm ? 'No matching entries found' : 'No entries yet'}
          </h3>
          <p style={{ color: '#6b7280' }}>
            {searchTerm ? 'Try adjusting your search terms' : 'Contest entries will appear here when people submit the form'}
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
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151', borderBottom: '1px solid #e5e7eb' }}>
                    Name
                  </th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151', borderBottom: '1px solid #e5e7eb' }}>
                    Email
                  </th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151', borderBottom: '1px solid #e5e7eb' }}>
                    How Did You Hear
                  </th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151', borderBottom: '1px solid #e5e7eb' }}>
                    Submitted
                  </th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#374151', borderBottom: '1px solid #e5e7eb' }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedEntries.map((entry, index) => (
                  <tr key={entry.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                    <td style={{ padding: '0.75rem', color: '#1f2937' }}>
                      <div style={{ fontWeight: '500' }}>{entry.name}</div>
                    </td>
                    <td style={{ padding: '0.75rem', color: '#1f2937' }}>
                      <a 
                        href={`mailto:${entry.email}`}
                        style={{ color: '#2563eb', textDecoration: 'none' }}
                        onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                      >
                        {entry.email}
                      </a>
                    </td>
                    <td style={{ padding: '0.75rem', color: '#6b7280' }}>
                      <div style={{ maxWidth: '300px', wordWrap: 'break-word' }}>
                        {entry.how_did_hear}
                      </div>
                    </td>
                    <td style={{ padding: '0.75rem', color: '#6b7280', fontSize: '0.875rem' }}>
                      <div>{new Date(entry.submitted_at).toLocaleDateString()}</div>
                      <div style={{ opacity: 0.7 }}>{new Date(entry.submitted_at).toLocaleTimeString()}</div>
                    </td>
                    <td style={{ padding: '0.75rem' }}>
                      <button
                        onClick={() => deleteEntry(entry.id, entry.name)}
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