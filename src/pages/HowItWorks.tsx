
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Upload, Recycle, Wallet, CircleDollarSign } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-16 bg-accent/30">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">How BebaPay Works</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our blockchain-powered recycling rewards system is simple, transparent, 
              and designed to make recycling a rewarding habit.
            </p>
          </div>
        </section>
        
        {/* Process Steps */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="grid gap-16">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <span className="inline-block text-sm font-medium text-beba-green mb-2">STEP 1</span>
                  <h2 className="text-2xl font-bold mb-4">Scan & Deposit</h2>
                  <div className="space-y-4">
                    <p>
                      The BebaPay journey begins when you collect your plastic waste and 
                      bring it to one of our designated recycling centers across Nairobi.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-beba-green mt-1"></div>
                        <span>Open the BebaPay mobile or web app on your device</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-beba-green mt-1"></div>
                        <span>Scan the barcode on each plastic bottle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-beba-green mt-1"></div>
                        <span>Place the items in our IoT-enabled smart recycling bins</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-beba-light-green rounded-full filter blur-2xl opacity-70"></div>
                    <div className="relative bg-white p-6 rounded-full shadow-lg">
                      <Upload size={100} className="text-beba-green animate-ping-slow" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-beba-light-blue rounded-full filter blur-2xl opacity-70"></div>
                    <div className="relative bg-white p-6 rounded-full shadow-lg">
                      <Recycle size={100} className="text-beba-blue animate-ping-slow" />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="inline-block text-sm font-medium text-beba-blue mb-2">STEP 2</span>
                  <h2 className="text-2xl font-bold mb-4">Verify & Weigh</h2>
                  <div className="space-y-4">
                    <p>
                      Our advanced smart bins use multiple verification mechanisms to ensure 
                      the authenticity and accurate measurement of your recyclables.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-beba-blue mt-1"></div>
                        <span>Weight sensors accurately measure your recycling contribution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-beba-blue mt-1"></div>
                        <span>Barcode verification confirms eligible plastic types</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-beba-blue mt-1"></div>
                        <span>All data is securely transmitted to our blockchain ledger</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <span className="inline-block text-sm font-medium text-beba-orange mb-2">STEP 3</span>
                  <h2 className="text-2xl font-bold mb-4">Earn BebaPay Tokens</h2>
                  <div className="space-y-4">
                    <p>
                      Once your recyclables are verified, our smart contracts automatically calculate 
                      and distribute BebaPay tokens to your connected digital wallet.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-beba-orange mt-1"></div>
                        <span>Token amounts are calculated based on weight and plastic type</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-beba-orange mt-1"></div>
                        <span>Rewards are instantly deposited to your connected wallet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-beba-orange mt-1"></div>
                        <span>Track your token balance and history in the app dashboard</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-beba-light-orange rounded-full filter blur-2xl opacity-70"></div>
                    <div className="relative bg-white p-6 rounded-full shadow-lg">
                      <Wallet size={100} className="text-beba-orange animate-ping-slow" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-beba-yellow/70 rounded-full filter blur-2xl opacity-70"></div>
                    <div className="relative bg-white p-6 rounded-full shadow-lg">
                      <CircleDollarSign size={100} className="text-beba-orange animate-ping-slow" />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="inline-block text-sm font-medium text-beba-orange mb-2">STEP 4</span>
                  <h2 className="text-2xl font-bold mb-4">Redeem Tokens</h2>
                  <div className="space-y-4">
                    <p>
                      Your earned BebaPay tokens have real value and can be exchanged for a variety of
                      digital services and products that are relevant to daily life in Nairobi.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-beba-yellow mt-1"></div>
                        <span>Convert tokens to mobile airtime from major providers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-beba-yellow mt-1"></div>
                        <span>Transfer value to M-Pesa for cash equivalent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-beba-yellow mt-1"></div>
                        <span>Access other digital services through our partners</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Technology</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                BebaPay leverages cutting-edge technologies to create a secure, 
                transparent, and efficient recycling rewards ecosystem
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white/50 backdrop-blur p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Blockchain</h3>
                <p className="text-muted-foreground">
                  Our blockchain backbone ensures transparent token distribution and 
                  immutable record-keeping of all recycling activities and rewards.
                </p>
              </div>
              
              <div className="bg-white/50 backdrop-blur p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">IoT Smart Bins</h3>
                <p className="text-muted-foreground">
                  Advanced bins with weight sensors, barcode scanners, and secure 
                  communication modules verify and quantify recycling contributions.
                </p>
              </div>
              
              <div className="bg-white/50 backdrop-blur p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Smart Contracts</h3>
                <p className="text-muted-foreground">
                  Automated contracts handle token calculations and distributions based on 
                  predefined rules, eliminating the need for manual intervention.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Recycling Journey?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Download the BebaPay app today and join thousands of Nairobi residents 
              who are earning while keeping our city clean.
            </p>
            <Button className="bg-beba-green hover:bg-beba-dark-green text-white">
              Get Started
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
