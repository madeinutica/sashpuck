import { supabase } from '../../../../lib/supabase';
import { NextRequest } from 'next/server';

// Form configurations mapping
const FORM_CONFIGS = {
  'win-contest': {
    tableName: 'win_entries',
    fields: ['id', 'name', 'email', 'how_did_hear', 'submitted_at', 'created_at']
  },
  // Future forms can be added here:
  // 'contact': {
  //   tableName: 'contact_submissions',
  //   fields: ['id', 'name', 'email', 'message', 'submitted_at']
  // },
  // 'quote-request': {
  //   tableName: 'quote_requests',
  //   fields: ['id', 'name', 'email', 'phone', 'project_type', 'description', 'submitted_at']
  // }
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const formType = searchParams.get('type');

    if (!formType) {
      // Return summary of all forms
      const summary = {};
      
      for (const [type, config] of Object.entries(FORM_CONFIGS)) {
        try {
          const { count, error } = await supabase
            .from(config.tableName)
            .select('*', { count: 'exact', head: true });

          if (!error) {
            summary[type] = { count: count || 0 };
          }
        } catch (err) {
          summary[type] = { count: 0, error: 'Unable to fetch' };
        }
      }

      return Response.json({
        success: true,
        data: summary
      }, { status: 200 });
    }

    // Get specific form data
    const config = FORM_CONFIGS[formType as keyof typeof FORM_CONFIGS];
    if (!config) {
      return Response.json({
        success: false,
        message: 'Invalid form type'
      }, { status: 400 });
    }

    const { data: entries, error } = await supabase
      .from(config.tableName)
      .select(config.fields.join(','))
      .order('submitted_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return Response.json({
        success: false,
        message: 'Failed to fetch entries from database'
      }, { status: 500 });
    }

    return Response.json({
      success: true,
      data: entries,
      formType: formType
    }, { status: 200 });

  } catch (error) {
    console.error('Error fetching form entries:', error);
    return Response.json({
      success: false,
      message: 'Failed to fetch entries'
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const formType = searchParams.get('type');
    const id = searchParams.get('id');

    if (!formType || !id) {
      return Response.json({
        success: false,
        message: 'Form type and entry ID are required'
      }, { status: 400 });
    }

    const config = FORM_CONFIGS[formType as keyof typeof FORM_CONFIGS];
    if (!config) {
      return Response.json({
        success: false,
        message: 'Invalid form type'
      }, { status: 400 });
    }

    const { error } = await supabase
      .from(config.tableName)
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      return Response.json({
        success: false,
        message: 'Failed to delete entry'
      }, { status: 500 });
    }

    return Response.json({
      success: true,
      message: 'Entry deleted successfully'
    }, { status: 200 });

  } catch (error) {
    console.error('Error deleting form entry:', error);
    return Response.json({
      success: false,
      message: 'Failed to delete entry'
    }, { status: 500 });
  }
}