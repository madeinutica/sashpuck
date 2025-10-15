import { NextRequest } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function GET() {
  console.log('=== WIN ENTRIES API GET CALLED ===');
  return Response.json({ 
    success: true, 
    message: 'Win entries API is working',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request: NextRequest) {
  console.log('=== WIN ENTRIES API CALLED ===');
  console.log('Request method:', request.method);
  console.log('Request URL:', request.url);
  
  try {
    const data = await request.json();
    console.log('Request data received:', data);

    // Validate required fields
    if (!data.name || !data.email || !data.howDidYouHear) {
      console.log('❌ Validation failed - missing fields');
      return Response.json({
        success: false,
        message: 'Missing required fields'
      }, { status: 400 });
    }

    console.log('✅ Validation passed');

    const submittedAt = new Date().toISOString();

    // Save to Supabase using the original client
    const { data: entry, error } = await supabase
      .from('win_entries')
      .insert([{
        name: data.name,
        email: data.email,
        how_did_hear: data.howDidYouHear,
        submitted_at: submittedAt
      }])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return Response.json({
        success: false,
        message: 'Failed to save entry to database',
        error: error.message
      }, { status: 500 });
    }

    console.log('Form submission saved to Supabase:', entry);

    return Response.json({
      success: true,
      message: 'Entry received and saved successfully'
    }, { status: 200 });

  } catch (error) {
    console.error('Error processing win form submission:', error);
    return Response.json({
      success: false,
      message: 'Failed to process entry'
    }, { status: 500 });
  }
}