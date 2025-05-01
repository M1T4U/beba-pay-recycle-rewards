
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CircleDollarSign, Wallet, Upload } from 'lucide-react';

const Rewards = () => {
  const [selectedTab, setSelectedTab] = useState('mobile');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-16 bg-accent/30">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Redeem Your Rewards</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Turn your recycling efforts into valuable rewards with BebaPay tokens.
              Choose from mobile airtime, M-Pesa cash, or other digital services.
            </p>
          </div>
        </section>
        
        {/* Available Balance */}
        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="bg-gradient-to-r from-beba-green to-beba-blue rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap gap-8 items-center justify-between">
                  <div className="text-white">
                    <h2 className="text-2xl font-semibold mb-2">Your BebaPay Balance</h2>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">0.00</span>
                      <span className="ml-2 text-white/80">Tokens</span>
                    </div>
                    <p className="mt-2 text-white/80">Connect your wallet to view your balance</p>
                  </div>
                  <Button className="bg-white text-beba-green hover:bg-white/90 flex items-center gap-2">
                    <Wallet size={18} />
                    Connect Wallet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Rewards Categories */}
        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Available Rewards</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Choose from a variety of rewards to redeem your BebaPay tokens
              </p>
            </div>
            
            <Tabs defaultValue="mobile" className="w-full" value={selectedTab} onValueChange={setSelectedTab}>
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 w-full max-w-md">
                  <TabsTrigger value="mobile">Mobile</TabsTrigger>
                  <TabsTrigger value="mpesa">M-Pesa</TabsTrigger>
                  <TabsTrigger value="other">Other</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="mobile">
                <div className="grid gap-6 md:grid-cols-3">
                  {['Safaricom', 'Airtel', 'Telkom'].map((provider) => (
                    <Card key={provider} className="overflow-hidden border border-border hover:border-beba-green transition-colors">
                      <CardHeader className="bg-muted/30">
                        <CardTitle>{provider} Airtime</CardTitle>
                        <CardDescription>Convert tokens to mobile airtime</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">50 KES Airtime</span>
                            <span className="font-medium">5 Tokens</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">100 KES Airtime</span>
                            <span className="font-medium">10 Tokens</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">500 KES Airtime</span>
                            <span className="font-medium">45 Tokens</span>
                          </div>
                          <Button className="w-full mt-4" disabled>Redeem</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="mpesa">
                <Card className="max-w-md mx-auto overflow-hidden border border-border hover:border-beba-blue transition-colors">
                  <CardHeader className="bg-muted/30">
                    <CardTitle>M-Pesa Cash</CardTitle>
                    <CardDescription>Send tokens directly to your M-Pesa account</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">100 KES</span>
                        <span className="font-medium">12 Tokens</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">250 KES</span>
                        <span className="font-medium">28 Tokens</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">500 KES</span>
                        <span className="font-medium">55 Tokens</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">1000 KES</span>
                        <span className="font-medium">105 Tokens</span>
                      </div>
                      <Button className="w-full mt-4" disabled>Redeem to M-Pesa</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="other">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="overflow-hidden border border-border hover:border-beba-orange transition-colors">
                    <CardHeader className="bg-muted/30">
                      <CardTitle>Internet Bundles</CardTitle>
                      <CardDescription>Convert tokens to mobile data bundles</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">1GB Data</span>
                          <span className="font-medium">15 Tokens</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">3GB Data</span>
                          <span className="font-medium">40 Tokens</span>
                        </div>
                        <Button className="w-full mt-4" disabled>Redeem</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden border border-border hover:border-beba-yellow transition-colors">
                    <CardHeader className="bg-muted/30">
                      <CardTitle>Shopping Vouchers</CardTitle>
                      <CardDescription>Redeem tokens for shopping vouchers</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Supermarket Voucher</span>
                          <span className="font-medium">50 Tokens</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Food Delivery</span>
                          <span className="font-medium">35 Tokens</span>
                        </div>
                        <Button className="w-full mt-4" disabled>Redeem</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* How to Redeem */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">How to Redeem</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Follow these simple steps to convert your BebaPay tokens into rewards
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-beba-light-green text-beba-green">
                  <Wallet size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect Wallet</h3>
                <p className="text-muted-foreground">
                  First, connect your digital wallet to access your BebaPay tokens
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-beba-light-blue text-beba-blue">
                  <CircleDollarSign size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Select Reward</h3>
                <p className="text-muted-foreground">
                  Choose which reward you'd like to redeem from our available options
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-beba-light-orange text-beba-orange">
                  <Upload size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Confirm Redemption</h3>
                <p className="text-muted-foreground">
                  Confirm the transaction and receive your reward instantly
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rewards;
