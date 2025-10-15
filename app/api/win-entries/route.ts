import { supabase } from '../../../lib/supabase';

export async function POST(request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.howDidYouHear) {
      return Response.json({
        success: false,
        message: 'Missing required fields'
      }, { status: 400 });
    }

    // Save to Supabase
    const { data: entry, error } = await supabase
      .from('win_entries')
      .insert([{
        name: data.name,
        email: data.email,
        how_did_hear: data.howDidYouHear,
        submitted_at: new Date().toISOString()
      }])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return Response.json({
        success: false,
        message: 'Failed to save entry to database'
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