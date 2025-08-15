export default async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formsubmit = await fetch("https://formsubmit.co/ajax/YOUR_EMAIL@example.com", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const data = await formsubmit.json();
    return res.status(200).json({ success: true, data });
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}