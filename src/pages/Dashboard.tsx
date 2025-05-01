
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Wallet, Recycle, Upload, CircleDollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Demo data
const activityData = [
  { date: 'May 1', tokens: 4 },
  { date: 'May 2', tokens: 0 },
  { date: 'May 3', tokens: 5 },
  { date: 'May 4', tokens: 2 },
  { date: 'May 5', tokens: 0 },
  { date: 'May 6', tokens: 3 },
  { date: 'May 7', tokens: 7 },
];

const transactionHistory = [
  { id: 1, type: 'deposit', date: 'May 7, 2025', amount: 5, location: 'Westlands Recycling Center' },
  { id: 2, type: 'deposit', date: 'May 3, 2025', amount: 3, location: 'CBD Recycling Hub' },
  { id: 3, type: 'redeem', date: 'May 2, 2025', amount: -10, reward: 'Safaricom Airtime (100 KES)' },
  { id: 4, type: 'deposit', date: 'Apr 30, 2025', amount: 6, location: 'Kilimani Drop Zone' },
];

const BarcodeScanner = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-video bg-gray-900 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 h-1 bg-beba-green opacity-75 animate-pulse"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="font-medium">Scan Barcode</p>
          <p className="text-sm text-white/70 mt-1">Position the barcode within the frame</p>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
          
          {/* Stats Overview */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">0</span>
                  <span className="ml-2 text-muted-foreground">Tokens</span>
                </div>
                <Button className="w-full mt-4 bg-beba-green hover:bg-beba-dark-green">
                  <Wallet className="w-4 h-4 mr-2" /> Connect Wallet
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Recycled</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">0</span>
                  <span className="ml-2 text-muted-foreground">kg</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Connect your wallet to view stats</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">0</span>
                  <span className="ml-2 text-muted-foreground">CO₂ saved</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Connect your wallet to view impact</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Rewards Redeemed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">0</span>
                  <span className="ml-2 text-muted-foreground">Rewards</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Connect your wallet to view rewards</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Dashboard Content */}
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              {/* Activity Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Recycling Activity</CardTitle>
                  <CardDescription>Your token earnings from the past 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="tokens" 
                          stroke="#2BAC76" 
                          strokeWidth={2} 
                          activeDot={{ r: 8 }} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Transaction History */}
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>Recent recycling deposits and reward redemptions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactionHistory.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-full ${transaction.type === 'deposit' ? 'bg-green-100' : 'bg-blue-100'}`}>
                            {transaction.type === 'deposit' ? (
                              <Upload className="w-4 h-4 text-beba-green" />
                            ) : (
                              <CircleDollarSign className="w-4 h-4 text-beba-blue" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">
                              {transaction.type === 'deposit' ? 'Recycling Deposit' : 'Reward Redemption'}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {transaction.type === 'deposit' ? transaction.location : transaction.reward}
                            </p>
                            <p className="text-xs text-muted-foreground">{transaction.date}</p>
                          </div>
                        </div>
                        <div className={`font-semibold ${transaction.amount > 0 ? 'text-beba-green' : 'text-beba-blue'}`}>
                          {transaction.amount > 0 ? '+' : ''}{transaction.amount} Tokens
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              {/* Barcode Scanner */}
              <Card>
                <CardHeader>
                  <CardTitle>Scan & Recycle</CardTitle>
                  <CardDescription>Scan plastic bottle barcodes to register them</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarcodeScanner />
                  <Button className="w-full mt-6" disabled>
                    <Recycle className="w-4 h-4 mr-2" /> Start Scanning
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Connect your wallet to use the scanner
                  </p>
                </CardContent>
              </Card>
              
              {/* Nearest Recycling Centers */}
              <Card>
                <CardHeader>
                  <CardTitle>Nearby Recycling Centers</CardTitle>
                  <CardDescription>Find the closest places to deposit recyclables</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Westlands Recycling Center</h4>
                        <Badge className="bg-beba-green">Open</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        2.3 km away · Open until 6:00 PM
                      </p>
                      <Progress className="mt-2" value={75} />
                      <p className="text-xs text-muted-foreground mt-1">
                        Bin capacity: 75%
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between">
                        <h4 className="font-medium">CBD Recycling Hub</h4>
                        <Badge className="bg-beba-green">Open</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        3.8 km away · Open until 7:00 PM
                      </p>
                      <Progress className="mt-2" value={45} />
                      <p className="text-xs text-muted-foreground mt-1">
                        Bin capacity: 45%
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Kilimani Drop Zone</h4>
                        <Badge variant="outline">Closed</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        5.1 km away · Opens tomorrow at 8:00 AM
                      </p>
                      <Progress className="mt-2" value={20} />
                      <p className="text-xs text-muted-foreground mt-1">
                        Bin capacity: 20%
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    View All Locations
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
