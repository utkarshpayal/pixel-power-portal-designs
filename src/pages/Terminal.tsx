
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Terminal as TerminalIcon, Play, Square, Upload, Download, Settings, Monitor, Activity, Cpu, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terminal = () => {
  const [commands, setCommands] = useState([
    { type: 'system', content: 'DecentraGPU Terminal v2.1.0 - Decentralized GPU Marketplace CLI' },
    { type: 'system', content: 'Type "help" for available commands' },
    { type: 'prompt', content: 'decentragpu@terminal:~$ ' }
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const systemCommands = {
    help: () => [
      'Available commands:',
      '  list-gpus           - List available GPUs',
      '  rent <gpu-id>       - Rent a specific GPU',
      '  status             - Check rental status',
      '  balance            - Check wallet balance',
      '  deploy <script>    - Deploy compute job',
      '  logs               - View job logs',
      '  providers          - List providers',
      '  benchmark <gpu-id> - Run GPU benchmark',
      '  clear              - Clear terminal',
      '  exit               - Exit terminal'
    ],
    'list-gpus': () => [
      'Available GPUs:',
      '┌─────────┬──────────────────┬──────────┬───────────┬────────────┐',
      '│ GPU ID  │ Model            │ Provider │ Price/hr  │ Status     │',
      '├─────────┼──────────────────┼──────────┼───────────┼────────────┤',
      '│ gpu-001 │ NVIDIA RTX 4090  │ TechProv │ $2.50     │ Available  │',
      '│ gpu-002 │ NVIDIA A100 80GB │ CloudMin │ $4.20     │ Available  │',
      '│ gpu-003 │ NVIDIA H100      │ SuperCom │ $6.80     │ Limited    │',
      '│ gpu-004 │ AMD MI250X       │ OpenComp │ $3.90     │ Available  │',
      '└─────────┴──────────────────┴──────────┴───────────┴────────────┘',
      '',
      'Use "rent <gpu-id>" to rent a specific GPU'
    ],
    status: () => [
      'Current Rentals:',
      '• gpu-001 (RTX 4090) - Active - 2h 34m remaining',
      '• Job: training_model_v2.py - Running on gpu-001',
      '• Resource usage: GPU 87%, Memory 18.2/24GB',
      '',
      'Recent transactions:',
      '• Rental payment: -$5.00 (2 hours ago)',
      '• Deposit refund: +$2.30 (1 day ago)'
    ],
    balance: () => [
      'Wallet Balance: $127.45 ETH',
      'Locked in rentals: $12.50 ETH',
      'Available: $114.95 ETH',
      '',
      'Address: 0x742d35Cc1c4312ACE1F2C9B2E6Ea2F5A8D9C1B4A',
      'Network: Ethereum Mainnet'
    ],
    providers: () => [
      'Registered Providers:',
      '• TechProvider    - 47 GPUs - 99.8% uptime - ⭐ 4.9',
      '• CloudMiner      - 23 GPUs - 99.9% uptime - ⭐ 4.8',
      '• SuperCompute    - 12 GPUs - 100% uptime  - ⭐ 5.0',
      '• OpenCompute     - 34 GPUs - 99.2% uptime - ⭐ 4.7',
      '• GameRigs        - 89 GPUs - 98.5% uptime - ⭐ 4.6',
      '',
      'Total network capacity: 205 GPUs'
    ],
    logs: () => [
      '[2024-01-25 14:32:15] Job started: training_model_v2.py',
      '[2024-01-25 14:32:16] Loading dataset... 1.2GB',
      '[2024-01-25 14:32:18] Initializing model architecture',
      '[2024-01-25 14:32:20] Starting training loop...',
      '[2024-01-25 14:45:33] Epoch 1/50 - Loss: 0.8234 - Accuracy: 0.7821',
      '[2024-01-25 14:58:42] Epoch 2/50 - Loss: 0.6891 - Accuracy: 0.8156',
      '[2024-01-25 15:11:51] Epoch 3/50 - Loss: 0.5987 - Accuracy: 0.8434',
      '[2024-01-25 15:24:59] Checkpoint saved to /models/checkpoint_003.pth',
      '[2024-01-25 15:25:01] Training in progress... ETA: 3h 45m'
    ],
    clear: () => {
      setCommands([
        { type: 'system', content: 'DecentraGPU Terminal v2.1.0 - Decentralized GPU Marketplace CLI' },
        { type: 'system', content: 'Type "help" for available commands' }
      ]);
      return [];
    }
  };

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    setCommands(prev => [...prev, { type: 'input', content: `decentragpu@terminal:~$ ${cmd}` }]);
    setIsProcessing(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
    
    let response: string[] = [];
    
    if (trimmedCmd === '') {
      response = [];
    } else if (trimmedCmd.startsWith('rent ')) {
      const gpuId = trimmedCmd.split(' ')[1];
      response = [
        `Initiating rental for ${gpuId}...`,
        '🔐 Connecting to wallet...',
        '✅ Wallet connected',
        '💰 Checking balance...',
        '✅ Sufficient funds available',
        '📝 Creating smart contract...',
        '✅ Contract deployed',
        `🚀 GPU ${gpuId} successfully rented!`,
        '',
        `Access details:`,
        `• SSH: ssh user@${gpuId}.decentragpu.net`,
        `• Jupyter: https://${gpuId}.jupyter.decentragpu.net`,
        `• Duration: 1 hour (extendable)`,
        `• Cost: $2.50/hour`
      ];
    } else if (trimmedCmd.startsWith('deploy ')) {
      const script = trimmedCmd.split(' ').slice(1).join(' ');
      response = [
        `Deploying script: ${script}`,
        '📁 Uploading files...',
        '✅ Upload complete (2.3MB)',
        '🐳 Building container...',
        '✅ Container built successfully',
        '🚀 Starting execution on gpu-001...',
        '✅ Job started with ID: job-7a8b9c2d',
        '',
        'Monitor progress with: logs'
      ];
    } else if (trimmedCmd.startsWith('benchmark ')) {
      const gpuId = trimmedCmd.split(' ')[1];
      response = [
        `Running benchmark on ${gpuId}...`,
        '🧪 Matrix multiplication test... 87.3 TFLOPS',
        '🧪 Memory bandwidth test... 1,008 GB/s',
        '🧪 AI inference test... 12,847 inferences/sec',
        '🧪 Training throughput... 423 samples/sec',
        '',
        '📊 Benchmark Results:',
        `• Overall Score: 9.4/10`,
        `• Compute Performance: ⭐⭐⭐⭐⭐`,
        `• Memory Performance: ⭐⭐⭐⭐⭐`,
        `• Thermal Stability: ⭐⭐⭐⭐⭐`
      ];
    } else if (trimmedCmd === 'exit') {
      response = ['Goodbye! Thanks for using DecentraGPU Terminal.'];
    } else if (systemCommands[trimmedCmd as keyof typeof systemCommands]) {
      response = systemCommands[trimmedCmd as keyof typeof systemCommands]();
    } else {
      response = [`Command not found: ${cmd}. Type "help" for available commands.`];
    }
    
    setIsProcessing(false);
    
    if (trimmedCmd !== 'clear') {
      setCommands(prev => [
        ...prev,
        ...response.map(line => ({ type: 'output', content: line })),
        { type: 'prompt', content: 'decentragpu@terminal:~$ ' }
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCommand.trim() && !isProcessing) {
      handleCommand(currentCommand);
      setCurrentCommand('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  const stats = [
    { label: 'Active Jobs', value: '1', icon: Activity, color: 'text-neon-green' },
    { label: 'GPU Hours', value: '127', icon: Cpu, color: 'text-neon-blue' },
    { label: 'Network Speed', value: '2.3 GB/s', icon: Zap, color: 'text-neon-purple' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 pt-24 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center">
            <TerminalIcon className="mr-4 h-10 w-10 text-neon-blue" />
            DecentraGPU <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Terminal</span>
          </h1>
          <p className="text-gray-300 text-lg">Command-line interface for advanced GPU marketplace operations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Terminal */}
          <div className="lg:col-span-3">
            <Card className="glass glow-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="p-6 h-[600px] flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-gray-400 text-sm font-mono">decentragpu-terminal</span>
                  </div>
                </div>
                
                <div 
                  ref={terminalRef}
                  className="flex-1 overflow-y-auto font-mono text-sm space-y-1 bg-black/30 rounded p-4 border border-white/10"
                >
                  {commands.map((command, index) => (
                    <div key={index} className={`
                      ${command.type === 'system' ? 'text-neon-blue' : ''}
                      ${command.type === 'input' ? 'text-white' : ''}
                      ${command.type === 'output' ? 'text-gray-300' : ''}
                      ${command.type === 'prompt' ? 'text-neon-green' : ''}
                    `}>
                      {command.content}
                    </div>
                  ))}
                  {isProcessing && (
                    <div className="text-neon-purple animate-pulse">Processing...</div>
                  )}
                </div>
                
                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-neon-green font-mono">decentragpu@terminal:~$</span>
                    <input
                      type="text"
                      value={currentCommand}
                      onChange={(e) => setCurrentCommand(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-white font-mono"
                      placeholder="Enter command..."
                      disabled={isProcessing}
                      autoFocus
                    />
                  </div>
                </form>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="glass glow-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="p-6">
                <h3 className="text-white font-semibold mb-4">System Status</h3>
                <div className="space-y-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon className={`h-5 w-5 ${stat.color}`} />
                          <span className="text-gray-400">{stat.label}</span>
                        </div>
                        <span className="text-white font-medium">{stat.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="glass glow-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="p-6">
                <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-neon-blue text-neon-blue hover:bg-neon-blue/10"
                    onClick={() => handleCommand('list-gpus')}
                  >
                    List Available GPUs
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-neon-purple text-neon-purple hover:bg-neon-purple/10"
                    onClick={() => handleCommand('status')}
                  >
                    Check Status
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-neon-green text-neon-green hover:bg-neon-green/10"
                    onClick={() => handleCommand('balance')}
                  >
                    Check Balance
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-white/30 text-white hover:bg-white/10"
                    onClick={() => handleCommand('help')}
                  >
                    Show Help
                  </Button>
                </div>
              </div>
            </Card>

            {/* Documentation */}
            <Card className="glass glow-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="p-6">
                <h3 className="text-white font-semibold mb-4">Documentation</h3>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-neon-blue hover:text-neon-purple transition-colors">API Reference</a>
                  <a href="#" className="block text-neon-blue hover:text-neon-purple transition-colors">CLI Guide</a>
                  <a href="#" className="block text-neon-blue hover:text-neon-purple transition-colors">Examples</a>
                  <a href="#" className="block text-neon-blue hover:text-neon-purple transition-colors">Troubleshooting</a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terminal;
