export default async function handler(req, res) {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Set CORS headers for all responses
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ 
      error: 'Method not allowed',
      allowedMethods: ['POST'] 
    });
  }

  try {
    const formsubmitResponse = await fetch("https://formsubmit.co/ajax/malkanshaheen45@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (!formsubmitResponse.ok) {
      const errorData = await formsubmitResponse.text();
      throw new Error(`FormSubmit error: ${errorData}`);
    }

    const data = await formsubmitResponse.json();
    return res.status(200).json({ 
      success: true,
      data 
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
}