
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Cpu, Zap, Clock, Star, MapPin, Shield, Activity, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';

const GpuDetails = () => {
  const { id } = useParams();
  const [selectedDuration, setSelectedDuration] = useState('1h');

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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        {/* Back Button */}
        <Link to="/marketplace" className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors mb-6 animate-fade-in">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <Card className="glass glow-border animate-fade-in">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl text-white mb-2">{gpu.name}</CardTitle>
                    <p className="text-gray-400 text-lg">Provided by {gpu.provider}</p>
                    <div className="flex items-center space-x-4 mt-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-medium">{gpu.rating}</span>
                        <span className="text-gray-400">({gpu.reviews} reviews)</span>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        {gpu.availability}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-neon-blue">${gpu.price}</div>
                    <div className="text-gray-400">per hour</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <TabsList className="grid w-full grid-cols-3 bg-black/20">
                <TabsTrigger value="overview" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">Overview</TabsTrigger>
                <TabsTrigger value="specs" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">Specifications</TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="glass glow-border">
                  <CardHeader>
                    <CardTitle className="text-white">Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{gpu.description}</p>
                  </CardContent>
                </Card>

                <Card className="glass glow-border">
                  <CardHeader>
                    <CardTitle className="text-white">Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <Activity className="h-8 w-8 text-neon-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{gpu.uptime}</div>
                      <div className="text-gray-400 text-sm">Uptime</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-8 w-8 text-neon-purple mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{gpu.totalRentals}</div>
                      <div className="text-gray-400 text-sm">Total Rentals</div>
                    </div>
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-neon-green mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">US-East</div>
                      <div className="text-gray-400 text-sm">Location</div>
                    </div>
                    <div className="text-center">
                      <Shield className="h-8 w-8 text-neon-pink mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">Verified</div>
                      <div className="text-gray-400 text-sm">Provider</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specs" className="space-y-6">
                <Card className="glass glow-border">
                  <CardHeader>
                    <CardTitle className="text-white">Technical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Architecture</span>
                        <span className="text-white">{gpu.specs.architecture}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Memory</span>
                        <span className="text-white">{gpu.memory}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">CUDA Cores</span>
                        <span className="text-white">{gpu.cores}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">RT Cores</span>
                        <span className="text-white">{gpu.specs.rtCores}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Base Clock</span>
                        <span className="text-white">{gpu.specs.baseClock}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Boost Clock</span>
                        <span className="text-white">{gpu.specs.boostClock}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Memory Bandwidth</span>
                        <span className="text-white">{gpu.bandwidth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Tensor Cores</span>
                        <span className="text-white">{gpu.specs.tensorCores}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                {reviews.map((review, index) => (
                  <Card key={index} className="glass glow-border">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
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
                        <span className="text-gray-400 text-sm">{review.date}</span>
                      </div>
                      <p className="text-gray-300">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rental Options */}
            <Card className="glass glow-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-white">Rental Duration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {durations.map((duration) => (
                  <div 
                    key={duration.value}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedDuration === duration.value 
                        ? 'border-neon-blue bg-neon-blue/10' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    onClick={() => setSelectedDuration(duration.value)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{duration.label}</span>
                      <div className="text-right">
                        <div className="text-white font-bold">${duration.price}</div>
                        {duration.discount && (
                          <div className="text-green-400 text-sm">-{duration.discount}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="glass glow-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6 space-y-4">
                <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-lg py-3">
                  Rent GPU Now
                </Button>
                <Button variant="outline" className="w-full border-neon-green text-neon-green hover:bg-neon-green/10">
                  Add to Favorites
                </Button>
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                  Contact Provider
                </Button>
              </CardContent>
            </Card>

            {/* Provider Info */}
            <Card className="glass glow-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <CardTitle className="text-white">Provider Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Reputation</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={89} className="w-20 h-2" />
                    <span className="text-white text-sm">89%</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Time</span>
                  <span className="text-white">< 5 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Member Since</span>
                  <span className="text-white">March 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total GPUs</span>
                  <span className="text-white">47</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GpuDetails;
