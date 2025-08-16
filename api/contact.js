export default async function handler(req, res) {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      allowedMethods: ['POST'] 
    });
  }

  try {
    console.log("Incoming submission:", req.body);

    // Enhanced payload with FormSubmit-specific fields
    const payload = {
      ...req.body,
      _subject: "New Contact Form Submission",
      _template: "table",
      _captcha: "false",
      _autoresponse: "We've received your message!",
      _replyto: req.body.email || "noreply@example.com",
      _honeypot: "" // Anti-spam field
    };

    // Critical headers for FormSubmit
    const formsubmitHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Origin": "https://go-black-beta.vercel.app",
      "Referer": "https://go-black-beta.vercel.app/contact"
    };

    const response = await fetch("https://formsubmit.co/ajax/malkanshaheenit@gmail.com", {
      method: "POST",
      headers: formsubmitHeaders,
      body: JSON.stringify(payload)
    });

    const responseData = await response.json();
    console.log("FormSubmit response:", responseData);

    if (!response.ok) {
      console.error("FormSubmit error:", responseData);
      throw new Error(responseData.message || 'Form submission failed');
    }

    return res.status(200).json({ 
      success: true,
      data: responseData 
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}