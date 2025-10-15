"use client";

import GenericFormManager from './GenericFormManager';

export default function WinEntriesManager() {
  return (
    <GenericFormManager
      formType="win-contest"
      formName="🎉 Win Contest Entries"
      tableName="win_entries"
      fields={[
        { key: 'name', label: 'Name', type: 'text', searchable: true },
        { key: 'email', label: 'Email', type: 'email', searchable: true },
        { key: 'how_did_hear', label: 'How Did You Hear', type: 'textarea', searchable: true },
        { key: 'submitted_at', label: 'Submitted', type: 'date', searchable: false }
      ]}
      exportFields={['name', 'email', 'how_did_hear', 'submitted_at']}
    />
  );
}