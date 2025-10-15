import { supabase } from '../../../../lib/supabase';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // For now, we'll allow any authenticated request
    // In production, you might want to add proper admin authentication
    
    const { data: entries, error } = await supabase
      .from('win_entries')
      .select('*')
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
      data: entries
    }, { status: 200 });

  } catch (error) {
    console.error('Error fetching win entries:', error);
    return Response.json({
      success: false,
      message: 'Failed to fetch entries'
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return Response.json({
        success: false,
        message: 'Entry ID is required'
      }, { status: 400 });
    }

    const { error } = await supabase
      .from('win_entries')
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
    console.error('Error deleting win entry:', error);
    return Response.json({
      success: false,
      message: 'Failed to delete entry'
    }, { status: 500 });
  }
}