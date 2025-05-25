
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Code, 
  Zap, 
  Shield, 
  Users, 
  DollarSign, 
  Search,
  BookOpen,
  ExternalLink,
  Copy,
  CheckCircle
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Documentation = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const quickStartSteps = [
    {
      title: "Create Account",
      description: "Sign up and connect your wallet to get started",
      icon: Users
    },
    {
      title: "Browse GPUs",
      description: "Explore available GPU resources in the marketplace",
      icon: Search
    },
    {
      title: "Rent & Deploy",
      description: "Select your GPU and deploy your workload",
      icon: Zap
    },
    {
      title: "Monitor Progress",
      description: "Track your jobs in the dashboard",
      icon: FileText
    }
  ];

  const apiExamples = [
    {
      title: "List Available GPUs",
      language: "curl",
      code: `curl -X GET "https://api.decentragpu.com/v1/gpus" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
    },
    {
      title: "Rent a GPU",
      language: "javascript",
      code: `const response = await fetch('https://api.decentragpu.com/v1/rentals', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    gpu_id: 'gpu_123',
    duration: '24h',
    instance_type: 'ml.training'
  })
});`
    },
    {
      title: "Deploy Workload",
      language: "python",
      code: `import requests

response = requests.post(
  'https://api.decentragpu.com/v1/jobs',
  headers={'Authorization': 'Bearer YOUR_API_KEY'},
  json={
    'rental_id': 'rental_456',
    'image': 'pytorch/pytorch:latest',
    'command': 'python train.py',
    'resources': {'memory': '16GB'}
  }
)`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 pt-24 px-4 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center">
            <BookOpen className="mr-4 h-12 w-12 text-neon-blue" />
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Everything you need to know about using DecentraGPU platform for your computing needs
          </p>
        </div>

        <Tabs defaultValue="getting-started" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-black/20 max-w-2xl mx-auto">
            <TabsTrigger value="getting-started" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">
              Getting Started
            </TabsTrigger>
            <TabsTrigger value="api" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">
              API Reference
            </TabsTrigger>
            <TabsTrigger value="guides" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">
              Guides
            </TabsTrigger>
            <TabsTrigger value="faq" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">
              FAQ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started" className="space-y-8">
            {/* Quick Start */}
            <Card className="glass glow-border animate-fade-in">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="mr-2 h-6 w-6 text-neon-blue" />
                  Quick Start Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {quickStartSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Platform Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass glow-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-neon-green" />
                    Security & Trust
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="text-white font-medium">Encrypted Communication</h4>
                      <p className="text-gray-400 text-sm">All data transfers are encrypted end-to-end</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="text-white font-medium">Smart Contracts</h4>
                      <p className="text-gray-400 text-sm">Blockchain-based escrow and payment system</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="text-white font-medium">Provider Verification</h4>
                      <p className="text-gray-400 text-sm">All GPU providers are vetted and verified</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass glow-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-neon-blue" />
                    Pricing Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pay-per-use</span>
                      <span className="text-white">No upfront costs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Bulk discounts</span>
                      <span className="text-white">Up to 20% off</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Transaction fee</span>
                      <span className="text-white">2.5%</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple">
                    View Pricing Calculator
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card className="glass glow-border">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Code className="mr-2 h-6 w-6 text-neon-purple" />
                  API Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {apiExamples.map((example, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-medium">{example.title}</h3>
                      <Badge variant="outline" className="border-neon-blue text-neon-blue">
                        {example.language}
                      </Badge>
                    </div>
                    <div className="relative">
                      <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto text-sm text-gray-300 border border-white/10">
                        <code>{example.code}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 h-8 w-8 p-0"
                        onClick={() => copyToClipboard(example.code, `code-${index}`)}
                      >
                        {copiedCode === `code-${index}` ? (
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guides" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Setting Up Your First GPU Rental",
                  description: "Complete walkthrough for renting your first GPU",
                  time: "5 min read",
                  difficulty: "Beginner"
                },
                {
                  title: "Optimizing Costs for Long-Running Jobs",
                  description: "Best practices for cost-effective GPU usage",
                  time: "8 min read",
                  difficulty: "Intermediate"
                },
                {
                  title: "Advanced Terminal Usage",
                  description: "Power user tips for the DecentraGPU terminal",
                  time: "12 min read",
                  difficulty: "Advanced"
                },
                {
                  title: "Becoming a GPU Provider",
                  description: "How to list your GPUs on the marketplace",
                  time: "10 min read",
                  difficulty: "Intermediate"
                }
              ].map((guide, index) => (
                <Card key={index} className="glass glow-border animate-fade-in cursor-pointer hover:scale-105 transition-transform" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge 
                        variant="outline" 
                        className={`
                          ${guide.difficulty === 'Beginner' ? 'border-green-400 text-green-400' : ''}
                          ${guide.difficulty === 'Intermediate' ? 'border-yellow-400 text-yellow-400' : ''}
                          ${guide.difficulty === 'Advanced' ? 'border-red-400 text-red-400' : ''}
                        `}
                      >
                        {guide.difficulty}
                      </Badge>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{guide.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{guide.description}</p>
                    <span className="text-neon-blue text-sm">{guide.time}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <Card className="glass glow-border">
              <CardContent className="p-6 space-y-6">
                {[
                  {
                    question: "How do I get started with GPU rentals?",
                    answer: "Simply create an account, connect your wallet, browse available GPUs in the marketplace, and rent the one that suits your needs. You can deploy your workload directly through our terminal interface."
                  },
                  {
                    question: "What payment methods are accepted?",
                    answer: "We accept cryptocurrency payments through connected wallets, including ETH, USDC, and other major tokens. All transactions are secured by smart contracts."
                  },
                  {
                    question: "How is pricing calculated?",
                    answer: "Pricing is based on GPU type, usage duration, and market demand. We offer competitive rates with bulk discounts for longer rentals. Check our pricing calculator for estimates."
                  },
                  {
                    question: "What happens if there's an issue with my rental?",
                    answer: "Our platform includes built-in dispute resolution and escrow mechanisms. Contact our support team, and we'll work with you and the provider to resolve any issues quickly."
                  },
                  {
                    question: "Can I cancel my rental early?",
                    answer: "Yes, you can terminate rentals early. Unused time may be refunded based on the provider's cancellation policy, which is clearly stated before booking."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-white/10 pb-4 last:border-b-0">
                    <h3 className="text-white font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;
