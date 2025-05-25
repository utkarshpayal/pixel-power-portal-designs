
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Cpu, Zap, Clock, Star, MapPin, Shield, Activity, Users, Heart, Share2, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GpuDetails = () => {
  const { id } = useParams();
  const [selectedDuration, setSelectedDuration] = useState('1h');
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock GPU data
  const gpu = {
    id: 1,
    name: 'NVIDIA RTX 4090',
    provider: 'TechProvider',
    location: 'US-East-1 (Virginia)',
    price: '2.50',
    memory: '24GB GDDR6X',
    compute: '83 TFLOPS',
    cores: '16,384 CUDA Cores',
    bandwidth: '1,008 GB/s',
    availability: 'Available',
    rating: 4.9,
    reviews: 127,
    uptime: '99.8%',
    totalRentals: '1,247',
    description: 'High-performance GPU perfect for AI training, 3D rendering, and scientific computing. Features the latest Ada Lovelace architecture with exceptional performance per watt.',
    specs: {
      architecture: 'Ada Lovelace',
      baseClock: '2,230 MHz',
      boostClock: '2,520 MHz',
      memorySpeed: '21 Gbps',
      memoryBus: '384-bit',
      rtCores: '128 (3rd gen)',
      tensorCores: '512 (4th gen)'
    }
  };

  const durations = [
    { label: '1 Hour', value: '1h', price: 2.50 },
    { label: '6 Hours', value: '6h', price: 14.40, discount: '4%' },
    { label: '24 Hours', value: '24h', price: 55.20, discount: '8%' },
    { label: '7 Days', value: '7d', price: 378.00, discount: '12%' },
    { label: '30 Days', value: '30d', price: 1512.00, discount: '20%' },
  ];

  const reviews = [
    {
      user: 'Alex Chen',
      rating: 5,
      comment: 'Excellent performance for my AI training workloads. Zero downtime during my 48-hour training session.',
      date: '2 days ago'
    },
    {
      user: 'Sarah Kim',
      rating: 5,
      comment: 'Lightning fast setup and great value. Will definitely use again for my next project.',
      date: '1 week ago'
    },
    {
      user: 'Mike Rodriguez',
      rating: 4,
      comment: 'Good GPU but had some minor connectivity issues. Support was quick to resolve.',
      date: '2 weeks ago'
    }
  ];

  const selectedPrice = durations.find(d => d.value === selectedDuration)?.price || 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 pt-24 px-4 max-w-7xl mx-auto">
        {/* Improved Back Button */}
        <Link 
          to="/marketplace" 
          className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-all duration-300 mb-8 group animate-fade-in hover:bg-white/5 px-3 py-2 rounded-lg"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enhanced Header */}
            <Card className="glass glow-border animate-fade-in border-2 border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <CardTitle className="text-3xl lg:text-4xl text-white font-bold">
                        {gpu.name}
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsFavorited(!isFavorited)}
                        className={`hover:bg-white/10 ${isFavorited ? 'text-red-400' : 'text-gray-400'}`}
                      >
                        <Heart className={`h-5 w-5 ${isFavorited ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                    <p className="text-gray-300 text-lg mb-4">
                      Provided by <span className="text-neon-blue font-semibold">{gpu.provider}</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(gpu.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-white font-semibold">{gpu.rating}</span>
                        <span className="text-gray-400">({gpu.reviews} reviews)</span>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50 px-3 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        {gpu.availability}
                      </Badge>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <MapPin className="h-4 w-4 text-neon-green" />
                        <span>{gpu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                      ${gpu.price}
                    </div>
                    <div className="text-gray-400 text-sm">per hour</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Enhanced Tabs */}
            <Tabs defaultValue="overview" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <TabsList className="grid w-full grid-cols-3 bg-black/30 border border-white/10 p-1 rounded-xl">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue data-[state=active]:border data-[state=active]:border-neon-blue/30 rounded-lg transition-all duration-300"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="specs" 
                  className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue data-[state=active]:border data-[state=active]:border-neon-blue/30 rounded-lg transition-all duration-300"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews" 
                  className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue data-[state=active]:border data-[state=active]:border-neon-blue/30 rounded-lg transition-all duration-300"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <Card className="glass glow-border hover:bg-white/5 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">About This GPU</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed text-lg">{gpu.description}</p>
                  </CardContent>
                </Card>

                <Card className="glass glow-border hover:bg-white/5 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <Activity className="h-10 w-10 text-neon-blue mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">{gpu.uptime}</div>
                      <div className="text-gray-400 text-sm">Uptime</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <Users className="h-10 w-10 text-neon-purple mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">{gpu.totalRentals}</div>
                      <div className="text-gray-400 text-sm">Total Rentals</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <Zap className="h-10 w-10 text-neon-green mx-auto mb-3" />
                      <div className="text-xl font-bold text-white mb-1">{gpu.compute}</div>
                      <div className="text-gray-400 text-sm">Compute Power</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <Shield className="h-10 w-10 text-neon-pink mx-auto mb-3" />
                      <div className="text-lg font-bold text-white mb-1">Verified</div>
                      <div className="text-gray-400 text-sm">Provider</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specs" className="space-y-6 mt-6">
                <Card className="glass glow-border hover:bg-white/5 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Technical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                        <span className="text-gray-400 font-medium">Architecture</span>
                        <span className="text-white font-semibold">{gpu.specs.architecture}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                        <span className="text-gray-400 font-medium">Memory</span>
                        <span className="text-white font-semibold">{gpu.memory}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                        <span className="text-gray-400 font-medium">CUDA Cores</span>
                        <span className="text-white font-semibold">{gpu.cores}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                        <span className="text-gray-400 font-medium">RT Cores</span>
                        <span className="text-white font-semibold">{gpu.specs.rtCores}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                        <span className="text-gray-400 font-medium">Base Clock</span>
                        <span className="text-white font-semibold">{gpu.specs.baseClock}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                        <span className="text-gray-400 font-medium">Boost Clock</span>
                        <span className="text-white font-semibold">{gpu.specs.boostClock}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                        <span className="text-gray-400 font-medium">Memory Bandwidth</span>
                        <span className="text-white font-semibold">{gpu.bandwidth}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                        <span className="text-gray-400 font-medium">Tensor Cores</span>
                        <span className="text-white font-semibold">{gpu.specs.tensorCores}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6 mt-6">
                {reviews.map((review, index) => (
                  <Card key={index} className="glass glow-border hover:bg-white/5 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {review.user.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-white">{review.user}</div>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-gray-400 text-sm">{review.date}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Rental Options */}
            <Card className="glass glow-border animate-fade-in border-2 border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-white text-xl">Choose Duration</CardTitle>
                <p className="text-gray-400 text-sm">Select your rental period</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {durations.map((duration) => (
                  <div 
                    key={duration.value}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                      selectedDuration === duration.value 
                        ? 'border-neon-blue bg-neon-blue/20 shadow-lg shadow-neon-blue/20' 
                        : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                    }`}
                    onClick={() => setSelectedDuration(duration.value)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{duration.label}</span>
                      <div className="text-right">
                        <div className="text-white font-bold text-lg">${duration.price}</div>
                        {duration.discount && (
                          <div className="text-green-400 text-sm font-medium">Save {duration.discount}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Enhanced Action Buttons */}
            <Card className="glass glow-border animate-fade-in border-2 border-green-500/20 hover:border-green-500/40 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6 space-y-4">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-white mb-1">
                    Total: ${selectedPrice}
                  </div>
                  <div className="text-gray-400 text-sm">
                    for {durations.find(d => d.value === selectedDuration)?.label}
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <Zap className="h-5 w-5 mr-2" />
                  Rent GPU Now
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="border-neon-green text-neon-green hover:bg-neon-green/10 transition-all duration-300"
                    onClick={() => setIsFavorited(!isFavorited)}
                  >
                    <Heart className={`h-4 w-4 mr-2 ${isFavorited ? 'fill-current' : ''}`} />
                    Save
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-all duration-300">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
                <Button variant="outline" className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue/10 transition-all duration-300">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Provider
                </Button>
              </CardContent>
            </Card>

            {/* Enhanced Provider Info */}
            <Card className="glass glow-border animate-fade-in hover:bg-white/5 transition-all duration-300" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <CardTitle className="text-white text-xl">Provider Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-gray-400 font-medium">Reputation</span>
                  <div className="flex items-center space-x-3">
                    <Progress value={89} className="w-20 h-2" />
                    <span className="text-white text-sm font-semibold">89%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                  <span className="text-gray-400 font-medium">Response Time</span>
                  <span className="text-white font-semibold">&lt; 5 minutes</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                  <span className="text-gray-400 font-medium">Member Since</span>
                  <span className="text-white font-semibold">March 2023</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                  <span className="text-gray-400 font-medium">Total GPUs</span>
                  <span className="text-white font-semibold">47</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GpuDetails;
