import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Format the data simply for the prompt chain
    const promptInput = `
New Financial Insights Client Intake:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Industry: ${formData.industry}
Business Valuation: $${parseFloat(formData.businessValue || 0).toLocaleString()}
Ownership Percentage: ${formData.ownershipPercentage}%
Exit Timeline: ${formData.exitTimeline}

Total Net Worth: $${parseFloat(formData.netWorth || 0).toLocaleString()}
Annual Income: $${parseFloat(formData.annualIncome || 0).toLocaleString()}
Annual Tax Burden: $${parseFloat(formData.annualTaxBurden || 0).toLocaleString()}

Primary Goal:
${formData.primaryGoal}

---
Submission Date: ${new Date().toLocaleString()}
`;

    // Email subject
    const emailSubject = `New Financial Insights Intake: ${formData.name} - ${formData.industry}`;
    
    // Email body for Terry
    const emailBody = `
NEW FINANCIAL INSIGHTS INTAKE SUBMISSION
========================================

${promptInput}

NEXT STEPS:
----------
1. Copy the client information above
2. Feed into your prompt chain for detailed analysis
3. The system will gather additional information through the prompt chain
4. Generate the comprehensive financial report
5. Follow up with ${formData.name} at ${formData.email}

This is initial intake data only - your prompt chain will expand on this information.
`;

    // Log to console for backup
    console.log('='.repeat(80));
    console.log('NEW FINANCIAL INTAKE SUBMISSION');
    console.log('='.repeat(80));
    console.log(emailBody);
    console.log('='.repeat(80));

    // Send email using Resend
    try {
      await resend.emails.send({
        from: 'Financial Insights <onboarding@resend.dev>',
        to: ['terry@wrigitail.com'],
        subject: emailSubject,
        text: emailBody,
        reply_to: formData.email
      });
      console.log('✅ Email sent successfully to terry@wrigitail.com');
    } catch (emailError) {
      console.error('⚠️ Email sending failed:', emailError);
      // Continue anyway - don't block the user
    }

    // Return formatted output to display in the form
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      formattedOutput: promptInput
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process submission',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}