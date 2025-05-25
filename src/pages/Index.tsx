
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Shield, TrendingUp, Users, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Index = () => {
  const features = [
    {
      icon: Cpu,
      title: 'High-Performance GPUs',
      description: 'Access NVIDIA A100, H100, and RTX 4090 GPUs for your computational needs'
    },
    {
      icon: Shield,
      title: 'Decentralized Security',
      description: 'Blockchain-secured transactions with smart contract automation'
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Deploy your workloads in seconds across our global network'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description: 'Market-driven pricing ensures you get the best value for your compute'
    }
  ];

  const stats = [
    { label: 'Active GPUs', value: '12,847', icon: Cpu },
    { label: 'Total Users', value: '8,392', icon: Users },
    { label: 'Countries', value: '47', icon: Globe }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Decentralized
              </span>
              <br />
              <span className="text-white">GPU Marketplace</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Rent and provide GPU computing power on the world's first fully decentralized marketplace.
              Powered by blockchain technology for maximum security and transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace">
                <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-lg px-8 py-3 animate-glow">
                  Browse GPUs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 text-lg px-8 py-3">
                List Your GPU
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="glass glow-border text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 text-neon-blue mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">DecentraGPU</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of distributed computing with our cutting-edge platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass glow-border hover:bg-white/10 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-neon-blue mb-4 group-hover:animate-float" />
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass glow-border p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers and researchers already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace">
                <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue">
                  Get Started Now
                </Button>
              </Link>
              <Link to="/terminal">
                <Button size="lg" variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                  Try Terminal
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
