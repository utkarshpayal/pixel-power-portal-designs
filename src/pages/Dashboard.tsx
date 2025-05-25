import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Cpu, Clock, TrendingUp, Wallet, Activity, Calendar, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const rentalHistory = [
    {
      id: 'rent-001',
      gpu: 'NVIDIA RTX 4090',
      provider: 'TechProvider',
      duration: '6 hours',
      cost: '$15.00',
      status: 'Active',
      startTime: '2024-01-25 14:30',
      endTime: '2024-01-25 20:30'
    },
    {
      id: 'rent-002',
      gpu: 'NVIDIA A100 80GB',
      provider: 'CloudMiner',
      duration: '24 hours',
      cost: '$100.80',
      status: 'Completed',
      startTime: '2024-01-24 09:00',
      endTime: '2024-01-25 09:00'
    },
    {
      id: 'rent-003',
      gpu: 'AMD MI250X',
      provider: 'OpenCompute',
      duration: '2 hours',
      cost: '$7.80',
      status: 'Completed',
      startTime: '2024-01-23 16:15',
      endTime: '2024-01-23 18:15'
    }
  ];

  const activeJobs = [
    {
      id: 'job-001',
      name: 'training_model_v2.py',
      gpu: 'RTX 4090',
      progress: 67,
      eta: '2h 15m',
      status: 'Running'
    },
    {
      id: 'job-002',
      name: 'inference_batch.py',
      gpu: 'RTX 4090',
      progress: 100,
      eta: 'Complete',
      status: 'Completed'
    }
  ];

  const stats = [
    { label: 'Total Spent', value: '$1,247.30', icon: Wallet, change: '+12%' },
    { label: 'GPU Hours', value: '342', icon: Clock, change: '+8%' },
    { label: 'Active Rentals', value: '1', icon: Cpu, change: '0%' },
    { label: 'Avg Rating', value: '4.9', icon: Star, change: '+0.1' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 pt-24 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center">
            <User className="mr-4 h-10 w-10 text-neon-blue" />
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Dashboard</span>
          </h1>
          <p className="text-gray-300 text-lg">Monitor your GPU rentals, jobs, and account activity</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="glass glow-border animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-gray-400'}`}>
                        {stat.change} from last month
                      </p>
                    </div>
                    <Icon className="h-8 w-8 text-neon-blue" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Jobs */}
            <Card className="glass glow-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-neon-green" />
                  Active Jobs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeJobs.map((job) => (
                  <div key={job.id} className="p-4 rounded-lg border border-white/10 bg-black/20">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-white font-medium">{job.name}</h4>
                        <p className="text-gray-400 text-sm">Running on {job.gpu}</p>
                      </div>
                      <Badge 
                        variant={job.status === 'Running' ? 'default' : 'secondary'}
                        className={job.status === 'Running' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                        }
                      >
                        {job.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white">{job.progress}%</span>
                      </div>
                      <Progress value={job.progress} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">ETA</span>
                        <span className="text-white">{job.eta}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Rental History */}
            <Tabs defaultValue="recent" className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <TabsList className="grid w-full grid-cols-2 bg-black/20">
                <TabsTrigger value="recent" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">Recent Rentals</TabsTrigger>
                <TabsTrigger value="all" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">All History</TabsTrigger>
              </TabsList>

              <TabsContent value="recent" className="space-y-4">
                <Card className="glass glow-border">
                  <CardHeader>
                    <CardTitle className="text-white">Recent GPU Rentals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {rentalHistory.map((rental) => (
                        <div key={rental.id} className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-black/20">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-white font-medium">{rental.gpu}</h4>
                              <Badge 
                                variant={rental.status === 'Active' ? 'default' : 'secondary'}
                                className={rental.status === 'Active' 
                                  ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                                  : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
                                }
                              >
                                {rental.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <span className="text-gray-400">Provider</span>
                                <p className="text-white">{rental.provider}</p>
                              </div>
                              <div>
                                <span className="text-gray-400">Duration</span>
                                <p className="text-white">{rental.duration}</p>
                              </div>
                              <div>
                                <span className="text-gray-400">Cost</span>
                                <p className="text-white">{rental.cost}</p>
                              </div>
                              <div>
                                <span className="text-gray-400">Started</span>
                                <p className="text-white">{rental.startTime}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="all">
                <Card className="glass glow-border">
                  <CardContent className="p-6">
                    <p className="text-gray-400 text-center">Full history view coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Info */}
            <Card className="glass glow-border animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <CardTitle className="text-white">Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">John Doe</h3>
                  <p className="text-gray-400 text-sm">Premium Member</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Member Since</span>
                    <span className="text-white">March 2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Rentals</span>
                    <span className="text-white">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Reputation</span>
                    <span className="text-white">4.9/5.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wallet */}
            <Card className="glass glow-border animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Wallet className="mr-2 h-5 w-5 text-neon-green" />
                  Wallet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$127.45</div>
                  <div className="text-gray-400 text-sm">Available Balance</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Locked</span>
                    <span className="text-white">$12.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Network</span>
                    <span className="text-white">Ethereum</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue">
                  Top Up Wallet
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass glow-border animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start border-neon-blue text-neon-blue hover:bg-neon-blue/10">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Rental
                </Button>
                <Button variant="outline" className="w-full justify-start border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/30 text-white hover:bg-white/10">
                  <User className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
