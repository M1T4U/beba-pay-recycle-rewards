
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Recycle, 
  Wallet, 
  CircleDollarSign, 
  Upload, 
  Download 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background py-20">
          <div className="container px-4 mx-auto">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Get Rewarded for <span className="gradient-text">Recycling</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  BebaPay is a Web3-powered recycling platform that rewards Nairobi citizens 
                  with digital tokens for properly recycling plastic waste.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" className="bg-beba-green hover:bg-beba-dark-green text-white">
                    Start Recycling
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-beba-light-green/30 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-beba-light-blue/30 rounded-full filter blur-3xl"></div>
                <div className="relative z-10 flex justify-center items-center h-full">
                  <div className="bg-white p-4 rounded-full shadow-lg animate-float">
                    <Recycle className="w-24 h-24 text-beba-green" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Our simple 4-step process makes recycling rewarding and easy
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white/50 backdrop-blur border border-border hover:border-beba-green transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-beba-light-green text-beba-green">
                    <Upload size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Scan & Deposit</h3>
                  <p className="text-muted-foreground">
                    Bring plastic bottles to recycling centers and scan barcodes with the BebaPay app.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 backdrop-blur border border-border hover:border-beba-blue transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-beba-light-blue text-beba-blue">
                    <Recycle size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Verify & Weigh</h3>
                  <p className="text-muted-foreground">
                    Smart bins verify and weigh your recyclables, sending data to the blockchain.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 backdrop-blur border border-border hover:border-beba-orange transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-beba-light-orange text-beba-orange">
                    <Wallet size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Earn Tokens</h3>
                  <p className="text-muted-foreground">
                    Receive BebaPay tokens based on weight and plastic type, stored in your wallet.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 backdrop-blur border border-border hover:border-beba-yellow transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-beba-yellow/30 text-beba-orange">
                    <CircleDollarSign size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Redeem Rewards</h3>
                  <p className="text-muted-foreground">
                    Exchange tokens for airtime, M-Pesa cash, or other digital services.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/how-it-works">
                <Button variant="outline" className="border-beba-green text-beba-green hover:bg-beba-green hover:text-white">
                  Learn More About The Process
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Key Benefits</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                BebaPay offers unique advantages for users and our environment
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4 p-6 bg-white/50 backdrop-blur rounded-lg border border-border">
                <h3 className="text-xl font-semibold">For Citizens</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-beba-green/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-beba-green"></div>
                    </div>
                    <span>Earn tokens for everyday recycling activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-beba-green/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-beba-green"></div>
                    </div>
                    <span>Redeem for valuable services like airtime and M-Pesa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-beba-green/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-beba-green"></div>
                    </div>
                    <span>Track your environmental impact in real-time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-beba-green/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-beba-green"></div>
                    </div>
                    <span>Participate in a transparent, trustworthy system</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4 p-6 bg-white/50 backdrop-blur rounded-lg border border-border">
                <h3 className="text-xl font-semibold">For Environment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-beba-blue/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-beba-blue"></div>
                    </div>
                    <span>Reduces plastic pollution in Nairobi streets and waterways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-beba-blue/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-beba-blue"></div>
                    </div>
                    <span>Decreases illegal dumping by providing proper disposal incentives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-beba-blue/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-beba-blue"></div>
                    </div>
                    <span>Boosts recycling rates and circular economy initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-beba-blue/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-beba-blue"></div>
                    </div>
                    <span>Creates data for environmental impact measurement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-beba-green/10 to-beba-blue/10">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Earning While Recycling?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join the BebaPay ecosystem today and transform how you recycle. 
              Every bottle counts towards a cleaner Nairobi and your digital wallet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-beba-green hover:bg-beba-dark-green text-white">
                Download App
              </Button>
              <Button size="lg" variant="outline" className="border-beba-green text-beba-green hover:bg-beba-green hover:text-white">
                Find Recycling Centers
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
