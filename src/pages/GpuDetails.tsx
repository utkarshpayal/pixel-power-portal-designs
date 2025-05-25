import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Cpu, Zap, Clock, Star, MapPin, Shield, Activity, Users, Heart, MessageCircle, Share2 } from 'lucide-react';
import Navigation from '@/components/Navigation';

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <div className="pt-20 px-4 max-w-7xl mx-auto pb-12">
        {/* Simple Back Button */}
        <Link 
          to="/marketplace" 
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <CardTitle className="text-2xl lg:text-3xl text-gray-900 dark:text-white font-semibold">
                        {gpu.name}
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsFavorited(!isFavorited)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Heart className={`h-5 w-5 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                      Provided by <span className="font-medium text-blue-600 dark:text-blue-400">{gpu.provider}</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(gpu.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-gray-900 dark:text-white font-medium">{gpu.rating}</span>
                        <span className="text-gray-500">({gpu.reviews} reviews)</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {gpu.availability}
                      </Badge>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <MapPin className="h-4 w-4" />
                        <span>{gpu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      ${gpu.price}
                    </div>
                    <div className="text-gray-500 text-sm">per hour</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Simple Tabs */}
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-gray-800">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">About This GPU</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{gpu.description}</p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                      <div className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{gpu.uptime}</div>
                      <div className="text-gray-500 text-sm">Uptime</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <Users className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                      <div className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{gpu.totalRentals}</div>
                      <div className="text-gray-500 text-sm">Total Rentals</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                      <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{gpu.compute}</div>
                      <div className="text-gray-500 text-sm">Compute Power</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <Shield className="h-8 w-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Verified</div>
                      <div className="text-gray-500 text-sm">Provider</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specs" className="space-y-6 mt-6">
                <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Technical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">Architecture</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{gpu.specs.architecture}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">Memory</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{gpu.memory}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">CUDA Cores</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{gpu.cores}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">RT Cores</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{gpu.specs.rtCores}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">Base Clock</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{gpu.specs.baseClock}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">Boost Clock</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{gpu.specs.boostClock}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">Memory Bandwidth</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{gpu.bandwidth}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">Tensor Cores</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{gpu.specs.tensorCores}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4 mt-6">
                {reviews.map((review, index) => (
                  <Card key={index} className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                              {review.user.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{review.user}</div>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rental Options */}
            <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Choose Duration</CardTitle>
                <p className="text-gray-500 text-sm">Select your rental period</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {durations.map((duration) => (
                  <div 
                    key={duration.value}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedDuration === duration.value 
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedDuration(duration.value)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 dark:text-white font-medium">{duration.label}</span>
                      <div className="text-right">
                        <div className="text-gray-900 dark:text-white font-semibold">${duration.price}</div>
                        {duration.discount && (
                          <div className="text-green-600 dark:text-green-400 text-sm">Save {duration.discount}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardContent className="p-6 space-y-4">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    Total: ${selectedPrice}
                  </div>
                  <div className="text-gray-500 text-sm">
                    for {durations.find(d => d.value === selectedDuration)?.label}
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium">
                  <Zap className="h-4 w-4 mr-2" />
                  Rent GPU Now
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                    onClick={() => setIsFavorited(!isFavorited)}
                  >
                    <Heart className={`h-4 w-4 mr-2 ${isFavorited ? 'fill-current text-red-500' : ''}`} />
                    Save
                  </Button>
                  <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
                <Button variant="outline" className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Provider
                </Button>
              </CardContent>
            </Card>

            {/* Provider Info */}
            <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Provider Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">Reputation</span>
                  <div className="flex items-center space-x-3">
                    <Progress value={89} className="w-20 h-2" />
                    <span className="text-gray-900 dark:text-white text-sm font-medium">89%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">Response Time</span>
                  <span className="text-gray-900 dark:text-white font-medium">&lt; 5 minutes</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">Member Since</span>
                  <span className="text-gray-900 dark:text-white font-medium">March 2023</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">Total GPUs</span>
                  <span className="text-gray-900 dark:text-white font-medium">47</span>
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
