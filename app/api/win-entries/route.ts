import { supabase } from '../../../lib/supabase';
import { emailService } from '../../../lib/emailService';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.howDidYouHear) {
      return Response.json({
        success: false,
        message: 'Missing required fields'
      }, { status: 400 });
    }

    const submittedAt = new Date().toISOString();

    // Save to Supabase
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
        message: 'Failed to save entry to database'
      }, { status: 500 });
    }

    console.log('Form submission saved to Supabase:', entry);

    // Send email notification
    try {
      const emailSent = await emailService.sendWinEntryNotification({
        name: data.name,
        email: data.email,
        howDidYouHear: data.howDidYouHear,
        submittedAt: submittedAt
      });

      if (emailSent) {
        console.log('Email notification sent successfully');
      } else {
        console.warn('Email notification failed to send');
      }
    } catch (emailError) {
      console.error('Email service error:', emailError);
      // Don't fail the entire request if email fails
    }

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