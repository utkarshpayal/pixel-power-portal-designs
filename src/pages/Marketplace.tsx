import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Cpu, Search, Filter, Star, Clock, MapPin, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price-low');
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [selectedProvider, setSelectedProvider] = useState('all');

  const gpuListings = [
    {
      id: 1,
      name: 'NVIDIA RTX 4090',
      provider: 'TechProvider',
      location: 'US-East',
      price: '2.50',
      memory: '24GB GDDR6X',
      compute: '83 TFLOPS',
      availability: 'Available',
      rating: 4.9,
      reviews: 127,
      uptime: '99.8%'
    },
    {
      id: 2,
      name: 'NVIDIA A100 80GB',
      provider: 'CloudMiner',
      location: 'EU-Central',
      price: '4.20',
      memory: '80GB HBM2e',
      compute: '312 TFLOPS',
      availability: 'Available',
      rating: 4.8,
      reviews: 89,
      uptime: '99.9%'
    },
    {
      id: 3,
      name: 'NVIDIA H100',
      provider: 'SuperCompute',
      location: 'US-West',
      price: '6.80',
      memory: '80GB HBM3',
      compute: '989 TFLOPS',
      availability: 'Limited',
      rating: 5.0,
      reviews: 45,
      uptime: '100%'
    },
    {
      id: 4,
      name: 'NVIDIA RTX 3080',
      provider: 'GameRigs',
      location: 'Asia-Pacific',
      price: '1.80',
      memory: '10GB GDDR6X',
      compute: '29.8 TFLOPS',
      availability: 'Available',
      rating: 4.6,
      reviews: 203,
      uptime: '98.5%'
    },
    {
      id: 5,
      name: 'AMD MI250X',
      provider: 'OpenCompute',
      location: 'EU-West',
      price: '3.90',
      memory: '128GB HBM2e',
      compute: '383 TFLOPS',
      availability: 'Available',
      rating: 4.7,
      reviews: 67,
      uptime: '99.2%'
    },
    {
      id: 6,
      name: 'NVIDIA A6000',
      provider: 'ProRender',
      location: 'US-Central',
      price: '3.20',
      memory: '48GB GDDR6',
      compute: '38.7 TFLOPS',
      availability: 'Available',
      rating: 4.8,
      reviews: 94,
      uptime: '99.6%'
    }
  ];

  const filteredListings = gpuListings.filter(gpu => 
    gpu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gpu.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 pt-24 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-4">
            GPU <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Marketplace</span>
          </h1>
          <p className="text-gray-300 text-lg">Discover and rent high-performance GPUs from providers worldwide</p>
        </div>

        {/* Search and Filters */}
        <Card className="glass glow-border mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search GPUs or providers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-black/20 border-white/20 text-white"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48 bg-black/20 border-white/20 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/20">
                  <SelectItem value="price-low">Price (Low to High)</SelectItem>
                  <SelectItem value="price-high">Price (High to Low)</SelectItem>
                  <SelectItem value="performance">Performance</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="availability">Availability</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                <SelectTrigger className="w-full md:w-48 bg-black/20 border-white/20 text-white">
                  <Filter className="h-4 w-4" />
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/20">
                  <SelectItem value="all">All GPUs</SelectItem>
                  <SelectItem value="nvidia">NVIDIA</SelectItem>
                  <SelectItem value="amd">AMD</SelectItem>
                  <SelectItem value="available">Available Only</SelectItem>
                </SelectContent>
              </Select>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                className="w-full md:w-48 bg-black/20 border-white/20 text-white"
              />
            </div>
          </CardContent>
        </Card>

        {/* GPU Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredListings.map((gpu, index) => (
            <Card key={gpu.id} className="glass glow-border hover:bg-white/10 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white group-hover:text-neon-blue transition-colors">
                      {gpu.name}
                    </CardTitle>
                    <p className="text-gray-400 text-sm">by {gpu.provider}</p>
                  </div>
                  <Badge 
                    variant={gpu.availability === 'Available' ? 'default' : 'secondary'}
                    className={gpu.availability === 'Available' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }
                  >
                    {gpu.availability}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-4 w-4 text-neon-blue" />
                    <span className="text-gray-300">{gpu.memory}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-neon-purple" />
                    <span className="text-gray-300">{gpu.compute}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-neon-green" />
                    <span className="text-gray-300">{gpu.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-neon-pink" />
                    <span className="text-gray-300">{gpu.uptime}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-medium">{gpu.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm">({gpu.reviews} reviews)</span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <div>
                    <span className="text-2xl font-bold text-neon-blue">${gpu.price}</span>
                    <span className="text-gray-400 text-sm">/hour</span>
                  </div>
                  <Link to={`/gpu/${gpu.id}`}>
                    <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue">
                      Rent Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12 mb-8">
          <Button variant="outline" size="lg" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
            Load More GPUs
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Marketplace;
