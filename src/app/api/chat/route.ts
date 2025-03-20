import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { message } = await request.json()
    
    // Demo mode - return a predefined response without calling external API
    // Later you can replace this with a real AI API implementation
    const demoResponses: Record<string, string> = {
      'hello': 'Hello! Welcome to Bharat Diary. How can I assist you with information about India today?',
      'who are you': 'I am the Bharat Diary AI assistant, designed to provide information about India\'s culture, history, regions, and current affairs.',
      'what can you do': 'I can help you find information about India\'s history, culture, travel destinations, festivals, cuisine, and more. I can also assist with questions about Indian government services, regulations, and general knowledge about India.',
    };
    
    // Check if message contains any of the keys in demoResponses
    const matchingKey = Object.keys(demoResponses).find(key => 
      message.toLowerCase().includes(key.toLowerCase())
    );
    
    let response = matchingKey 
      ? demoResponses[matchingKey]
      : `Thank you for your question about "${message}". This is a demo response. To implement a real AI backend, you'll need to connect to an AI service API.`;
      
    // Simulate delay to make it feel more natural
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({ reply: response });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: 'Failed to get response from AI' },
      { status: 500 }
    );
  }
} 