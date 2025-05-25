
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Zap, Shield, Globe, ArrowRight, Star, Users, Clock, DollarSign } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Zap,
      title: "Instant Access",
      description: "Deploy GPU workloads in seconds with our streamlined platform",
      color: "text-neon-blue"
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "Blockchain-secured transactions with verified providers",
      color: "text-neon-green"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Access GPUs worldwide with low-latency connections",
      color: "text-neon-purple"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Pay only for what you use with competitive pricing",
      color: "text-neon-pink"
    }
  ];

  const stats = [
    { label: "Active GPUs", value: "2,847", icon: Cpu },
    { label: "Happy Users", value: "15,230", icon: Users },
    { label: "Hours Computed", value: "1.2M", icon: Clock },
    { label: "Average Rating", value: "4.9", icon: Star }
  ];

  const gpuTypes = [
    {
      name: "NVIDIA RTX 4090",
      price: "$2.50/hr",
      performance: "83 TFLOPS",
      memory: "24GB",
      available: 47,
      popular: true
    },
    {
      name: "NVIDIA A100 80GB",
      price: "$4.20/hr",
      performance: "312 TFLOPS",
      memory: "80GB",
      available: 23,
      popular: false
    },
    {
      name: "AMD MI250X",
      price: "$3.80/hr",
      performance: "383 TFLOPS", 
      memory: "128GB",
      available: 15,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 text-center grid-bg">
          <div className="max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Decentralized
                <span className="block bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                  GPU Computing
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Access high-performance GPU resources on-demand. Train AI models, render graphics, 
                and run compute-intensive workloads on a global decentralized network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-lg px-8 py-6"
                >
                  <Link to="/marketplace">
                    Browse GPUs <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 text-lg px-8 py-6"
                >
                  <Link to="/docs">
                    View Documentation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Icon className="h-8 w-8 text-neon-blue mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose DecentraGPU?
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Experience the future of distributed computing with our innovative platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index}
                    className="glass glow-border animate-fade-in cursor-pointer transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                        hoveredFeature === index 
                          ? 'bg-gradient-to-r from-neon-blue to-neon-purple scale-110' 
                          : 'bg-white/10'
                      }`}>
                        <Icon className={`h-8 w-8 ${hoveredFeature === index ? 'text-white' : feature.color}`} />
                      </div>
                      <h3 className="text-white font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular GPUs Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Popular GPU Models
              </h2>
              <p className="text-gray-300 text-lg">
                High-performance computing resources ready for your workloads
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gpuTypes.map((gpu, index) => (
                <Card key={index} className="glass glow-border animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">{gpu.name}</CardTitle>
                      {gpu.popular && (
                        <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
                          Popular
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Price</span>
                      <span className="text-white font-semibold">{gpu.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Performance</span>
                      <span className="text-white">{gpu.performance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Memory</span>
                      <span className="text-white">{gpu.memory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Available</span>
                      <Badge variant="outline" className="border-green-400 text-green-400">
                        {gpu.available} units
                      </Badge>
                    </div>
                    <Button asChild className="w-full bg-gradient-to-r from-neon-blue to-neon-purple">
                      <Link to="/marketplace">
                        Rent Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="glass glow-border animate-fade-in">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of developers and researchers using DecentraGPU for their 
                  compute-intensive workloads. Start with just a few clicks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-lg px-8 py-6"
                  >
                    <Link to="/marketplace">
                      Start Computing
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
                  >
                    <Link to="/docs">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
