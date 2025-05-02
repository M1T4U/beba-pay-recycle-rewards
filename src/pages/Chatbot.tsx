
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
      content: 'Hello! I am zvcBebaPay AI, your assistant for all things related to BebaPay. How can I help you with recycling tokens, rewards, or the BebaPay platform today?',
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
          content: generateBebapayResponse(input),
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

  // BebaPay-specific response generation
  const generateBebapayResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    // BebaPay-specific responses
    if (lowerQuestion.includes('token') || lowerQuestion.includes('bebapay token')) {
      return 'BebaPay tokens are digital rewards you earn for recycling plastic waste. They can be redeemed for airtime, M-Pesa cash, or other digital services. Each token has a value determined by the weight and type of plastic recycled.';
    } else if (lowerQuestion.includes('recycle') || lowerQuestion.includes('recycling')) {
      return 'To recycle with BebaPay, bring your plastic bottles to any of our designated recycling centers. Scan the bottle barcode using our app, deposit it in the smart bin, and receive tokens automatically in your connected wallet.';
    } else if (lowerQuestion.includes('reward') || lowerQuestion.includes('redeem')) {
      return 'You can redeem your BebaPay tokens for various rewards including airtime, M-Pesa cash transfers, discounts at partner stores, or even convert them to other cryptocurrencies. Check the Rewards section of our app to see all available options.';
    } else if (lowerQuestion.includes('smart bin') || lowerQuestion.includes('bin')) {
      return 'BebaPay smart bins are IoT-enabled recycling containers that can verify, weigh, and process your recyclable materials. They use sensors and barcode verification to confirm authenticity and quantity before sending the data to the blockchain for token issuance.';
    } else if (lowerQuestion.includes('wallet') || lowerQuestion.includes('connect wallet')) {
      return 'To connect your wallet to BebaPay, click on the "Connect Wallet" button in the navigation bar. We support various wallet providers. Once connected, your earned tokens will automatically be sent to your wallet after each successful recycling transaction.';
    } else if (lowerQuestion.includes('m-pesa') || lowerQuestion.includes('mpesa')) {
      return 'BebaPay integrates seamlessly with M-Pesa, Kenya\'s popular mobile payment system. You can convert your BebaPay tokens to M-Pesa cash through our app. The conversion is processed quickly and the funds are sent directly to your registered M-Pesa account.';
    } else if (lowerQuestion.includes('location') || lowerQuestion.includes('center') || lowerQuestion.includes('where')) {
      return "BebaPay recycling centers are located across Nairobi. You can find the nearest location by visiting the Dashboard section of our app or website. We're constantly expanding our network to make recycling more accessible to all Nairobi residents.";
    } else if (lowerQuestion.includes('how it works') || lowerQuestion.includes('process')) {
      return 'BebaPay works in 4 simple steps: 1) Scan & Deposit - bring plastic bottles to our recycling centers and scan them, 2) Verify & Weigh - our smart bins verify the materials, 3) Earn BebaPay Tokens - tokens are automatically sent to your wallet, 4) Redeem Tokens - exchange for various rewards including airtime and M-Pesa cash.';
    } else if (lowerQuestion.includes('blockchain') || lowerQuestion.includes('web3')) {
      return 'BebaPay uses blockchain technology to ensure transparency and security in the recycling reward process. Each transaction is recorded on the blockchain, creating a verifiable record of recycling activities. This prevents fraud and provides a reliable mechanism for token distribution.';
    } else if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi')) {
      return 'Hello! Welcome to BebaPay. I\'m zvcBebaPay AI, here to help you with any questions about our recycling rewards platform. What would you like to know about earning tokens through recycling?';
    } else if (lowerQuestion.includes('thank')) {
      return 'You\'re welcome! Thank you for using BebaPay and contributing to a cleaner environment. If you have any more questions about our recycling rewards platform, feel free to ask anytime.';
    } else {
      return `I understand you're asking about "${question}". While I'm focused on BebaPay-related topics, I might not have specific information on this query. Would you like to know more about our recycling process, token rewards, or how to redeem your BebaPay tokens?`;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center gradient-text">zvcBebaPay AI Assistant</h1>
          
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
                  placeholder="Ask about BebaPay, recycling, or rewards..."
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
              zvcBebaPay AI is your assistant for all BebaPay recycling and rewards questions. 
              Ask about tokens, recycling centers, or how to redeem your rewards.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chatbot;
