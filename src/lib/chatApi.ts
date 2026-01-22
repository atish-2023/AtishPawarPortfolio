import { Message } from '../types/chat';

interface ChatResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// Mock API function that simulates calling OpenAI
export const sendMessageToAI = async (message: string, context: Message[]): Promise<ChatResponse> => {
  // In a real implementation, this would call your backend API
  // that connects to OpenAI's API
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  try {
    // This is where you would make the actual API call to your backend
    // Example:
    /*
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        context,
        apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Securely accessed environment variable
      }),
    });
    
    const data = await response.json();
    return data;
    */
    
    // For now, return a simulated successful response
    // In reality, this would be handled by your backend
    return {
      success: true,
      message: "This would be the AI response in a real implementation. The actual API call would connect to OpenAI's GPT model."
    };
  } catch (error) {
    console.error('Error calling AI API:', error);
    return {
      success: false,
      error: 'Failed to get response from AI service. Using predefined answers instead.'
    };
  }
};

// Backend API endpoint (this would be in a separate backend service)
// Export the handler for use with your preferred backend framework
export const chatHandler = async (req: any, res: any) => {
  try {
    const { message, context } = req.body;
    
    // Validate input
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    // In a real backend, you would:
    // 1. Validate the API key
    // 2. Call OpenAI API with the message and context
    // 3. Return the response
    
    // Example OpenAI API call (would need server-side implementation):
    /*
    const { Configuration, OpenAIApi } = require("openai");
    
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    const completion = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: [
        { 
          role: "system", 
          content: "You are Atish Pawar's portfolio assistant. Respond professionally and concisely about Atish's background, skills, experience, and projects." 
        },
        ...context.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text
        })),
        { role: "user", content: message }
      ],
    });
    
    return res.status(200).json({ message: completion.data.choices[0].message.content });
    */
    
    // Mock response for demonstration
    return res.status(200).json({ 
      message: "This is a mock response. In a real backend, this would connect to OpenAI API." 
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};