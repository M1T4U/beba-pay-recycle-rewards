
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from "@/components/ui/sonner";

// Message type definition
type Message = {
  id: string;
  content: string;
  isUser: boolean;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I am zvcN3extgen, your AI assistant. How can I help you today?',
      isUser: false,
    },
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Simulate AI response with a short delay
      setTimeout(() => {
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          content: generateResponse(input),
          isUser: false,
        };
        
        setMessages((prev) => [...prev, botReply]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error getting response:', error);
      toast.error('Failed to get a response. Please try again.');
      setIsLoading(false);
    }
  };

  // Very simple response generation - in a real app, you would connect to an AI API
  const generateResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi')) {
      return 'Hello there! How can I assist you today?';
    } else if (lowerQuestion.includes('name')) {
      return 'My name is zvcN3extgen. I\'m an AI assistant designed to help answer your questions.';
    } else if (lowerQuestion.includes('weather')) {
      return 'I don\'t have access to real-time weather data. You might want to check a weather service for that information.';
    } else if (lowerQuestion.includes('help')) {
      return 'I can answer questions, provide information, or just chat with you. Just type your question or topic!';
    } else if (lowerQuestion.includes('thank')) {
      return 'You\'re welcome! Feel free to ask if you need anything else.';
    } else {
      return `I understand you're asking about "${question}". While I'm a basic demo version, in a production environment I would connect to an AI service like OpenAI's GPT or Google's Gemini to provide detailed answers.`;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center gradient-text">zvcN3extgen AI Assistant</h1>
          
          <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden h-[600px] flex flex-col">
            {/* Chat messages container */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg max-w-[80%] ${
                      message.isUser
                        ? 'bg-beba-green text-white rounded-br-none'
                        : 'bg-muted text-foreground rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-muted text-foreground px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-beba-green animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-beba-green animate-pulse delay-150"></div>
                      <div className="w-2 h-2 rounded-full bg-beba-green animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input area */}
            <div className="border-t p-4 bg-background">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading || !input.trim()}
                  className="bg-beba-green hover:bg-beba-dark-green"
                >
                  <SendIcon className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>
              This is a demonstration of zvcN3extgen AI. In a production environment, 
              it would connect to AI APIs for more sophisticated responses.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chatbot;
