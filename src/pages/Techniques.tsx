
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Code, FileCode, Server, Database, Timer, Fingerprint, Lock, Search, 
  Terminal, AlertTriangle, Shield, CircleSlash, FileJson, FileLock2 
} from 'lucide-react';

const techniques = [
  {
    id: 'code-obfuscation',
    title: 'Code Obfuscation',
    icon: <Code />,
    category: 'obfuscation',
    difficulty: 'medium',
    description: 'Transforming code to make it difficult to understand while preserving its functionality.',
    details: 'Techniques include variable/function renaming, dead code insertion, and control flow obfuscation.',
    countermeasures: 'Advanced static analysis, behavior-based detection, and machine learning pattern recognition.'
  },
  {
    id: 'packing',
    title: 'Packers & Crypters',
    icon: <FileCode />,
    category: 'obfuscation',
    difficulty: 'medium',
    description: 'Compression or encryption of the original executable to hide its actual code.',
    details: 'Packers compress the original code and add a stub to decompress it at runtime, while crypters encrypt the code.',
    countermeasures: 'Dynamic analysis, memory dump analysis, unpacking tools, and entropy analysis.'
  },
  {
    id: 'anti-vm',
    title: 'Anti-VM Detection',
    icon: <Server />,
    category: 'environment',
    difficulty: 'hard',
    description: 'Techniques to detect if malware is running in a virtual/sandbox environment to evade analysis.',
    details: 'Checks for VM artifacts, hardware characteristics, sandboxing tools, or analysis software.',
    countermeasures: 'VM hardening, bare-metal analysis, and stealthy monitoring techniques.'
  },
  {
    id: 'in-memory',
    title: 'In-Memory Execution',
    icon: <Database />,
    category: 'persistence',
    difficulty: 'hard',
    description: 'Running malicious code entirely in memory without touching the disk to avoid file-based detection.',
    details: 'Uses techniques like reflective DLL injection, process hollowing, and living-off-the-land binaries.',
    countermeasures: 'Memory scanning, behavioral analysis, and monitoring of process injection techniques.'
  },
  {
    id: 'timing-attacks',
    title: 'Timing-Based Evasions',
    icon: <Timer />,
    category: 'environment',
    difficulty: 'medium',
    description: 'Using delays or timing checks to evade sandbox analysis.',
    details: 'Includes sleep timers, user interaction requirements, and time acceleration detection.',
    countermeasures: 'Time compression in analysis environments and longer analysis periods.'
  },
  {
    id: 'api-hooking',
    title: 'API Hooking Evasion',
    icon: <Fingerprint />,
    category: 'anti-analysis',
    difficulty: 'hard',
    description: 'Techniques to detect or circumvent API hooks used by security products.',
    details: 'Direct system calls, detecting hook patterns, or using alternative APIs for critical functions.',
    countermeasures: 'Kernel-level monitoring, behavioral analysis, and advanced hooking techniques.'
  },
  {
    id: 'encryption',
    title: 'Encryption',
    icon: <Lock />,
    category: 'obfuscation',
    difficulty: 'hard',
    description: 'Using encryption to hide communication or payload content.',
    details: 'Includes custom encryption algorithms, encrypted payloads, and secure communication channels.',
    countermeasures: 'TLS inspection, behavior analysis, and decryption of captured payloads when possible.'
  },
  {
    id: 'anti-debugging',
    title: 'Anti-Debugging',
    icon: <Search />,
    category: 'anti-analysis',
    difficulty: 'medium',
    description: 'Techniques to detect and evade debuggers and analysis tools.',
    details: 'Checks for debugger presence through API calls, timing inconsistencies, or execution environment signs.',
    countermeasures: 'Stealthy debugging techniques and instrumentation at a lower level.'
  },
  {
    id: 'rootkit',
    title: 'Rootkit Techniques',
    icon: <Terminal />,
    category: 'persistence',
    difficulty: 'expert',
    description: 'Sophisticated methods to hide malware presence at the operating system level.',
    details: 'Includes kernel modifications, hooking system calls, or direct manipulation of system structures.',
    countermeasures: 'Integrity checking, secure boot mechanisms, and specialized rootkit detection tools.'
  },
];

const Techniques = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute inset-0 bg-cyber-gradient opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">Malware Evasion Techniques</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A comprehensive catalog of techniques used by malware to evade detection,
                analysis, and prevention systems.
              </p>
              
              <Alert variant="default" className="bg-card border-primary/40 mb-8">
                <AlertTriangle className="h-4 w-4 text-primary" />
                <AlertTitle>Educational Use Only</AlertTitle>
                <AlertDescription>
                  This information is provided for educational and defensive purposes. 
                  Understanding these techniques helps in building better detection and prevention mechanisms.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row md:items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold">Browse Techniques:</h2>
              <TabsList className="bg-muted/50">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="obfuscation">Obfuscation</TabsTrigger>
                <TabsTrigger value="environment">Environment</TabsTrigger>
                <TabsTrigger value="anti-analysis">Anti-Analysis</TabsTrigger>
                <TabsTrigger value="persistence">Persistence</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techniques.map((technique) => (
                  <Card key={technique.id} className="cyber-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-muted/50 rounded-md text-primary">
                          {technique.icon}
                        </div>
                        <Badge 
                          variant={
                            technique.difficulty === 'expert' ? 'destructive' : 
                            technique.difficulty === 'hard' ? 'secondary' : 'default'
                          }
                          className="text-xs"
                        >
                          {technique.difficulty}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-medium mb-2">{technique.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{technique.description}</p>
                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium flex items-center gap-1 mb-1">
                            <FileJson className="h-3 w-3 text-primary" /> Details
                          </h4>
                          <p className="text-xs text-muted-foreground">{technique.details}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium flex items-center gap-1 mb-1">
                            <Shield className="h-3 w-3 text-primary" /> Countermeasures
                          </h4>
                          <p className="text-xs text-muted-foreground">{technique.countermeasures}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="obfuscation" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techniques
                  .filter(t => t.category === 'obfuscation')
                  .map((technique) => (
                    <Card key={technique.id} className="cyber-card">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-2 bg-muted/50 rounded-md text-primary">
                            {technique.icon}
                          </div>
                          <Badge 
                            variant={
                              technique.difficulty === 'expert' ? 'destructive' : 
                              technique.difficulty === 'hard' ? 'secondary' : 'default'
                            }
                            className="text-xs"
                          >
                            {technique.difficulty}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-medium mb-2">{technique.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{technique.description}</p>
                        
                        <Separator className="my-4" />
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-medium flex items-center gap-1 mb-1">
                              <FileJson className="h-3 w-3 text-primary" /> Details
                            </h4>
                            <p className="text-xs text-muted-foreground">{technique.details}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium flex items-center gap-1 mb-1">
                              <Shield className="h-3 w-3 text-primary" /> Countermeasures
                            </h4>
                            <p className="text-xs text-muted-foreground">{technique.countermeasures}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="environment" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techniques
                  .filter(t => t.category === 'environment')
                  .map((technique) => (
                    <Card key={technique.id} className="cyber-card">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-2 bg-muted/50 rounded-md text-primary">
                            {technique.icon}
                          </div>
                          <Badge 
                            variant={
                              technique.difficulty === 'expert' ? 'destructive' : 
                              technique.difficulty === 'hard' ? 'secondary' : 'default'
                            }
                            className="text-xs"
                          >
                            {technique.difficulty}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-medium mb-2">{technique.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{technique.description}</p>
                        
                        <Separator className="my-4" />
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-medium flex items-center gap-1 mb-1">
                              <FileJson className="h-3 w-3 text-primary" /> Details
                            </h4>
                            <p className="text-xs text-muted-foreground">{technique.details}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium flex items-center gap-1 mb-1">
                              <Shield className="h-3 w-3 text-primary" /> Countermeasures
                            </h4>
                            <p className="text-xs text-muted-foreground">{technique.countermeasures}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="anti-analysis" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techniques
                  .filter(t => t.category === 'anti-analysis')
                  .map((technique) => (
                    <Card key={technique.id} className="cyber-card">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-2 bg-muted/50 rounded-md text-primary">
                            {technique.icon}
                          </div>
                          <Badge 
                            variant={
                              technique.difficulty === 'expert' ? 'destructive' : 
                              technique.difficulty === 'hard' ? 'secondary' : 'default'
                            }
                            className="text-xs"
                          >
                            {technique.difficulty}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-medium mb-2">{technique.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{technique.description}</p>
                        
                        <Separator className="my-4" />
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-medium flex items-center gap-1 mb-1">
                              <FileJson className="h-3 w-3 text-primary" /> Details
                            </h4>
                            <p className="text-xs text-muted-foreground">{technique.details}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium flex items-center gap-1 mb-1">
                              <Shield className="h-3 w-3 text-primary" /> Countermeasures
                            </h4>
                            <p className="text-xs text-muted-foreground">{technique.countermeasures}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="persistence" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techniques
                  .filter(t => t.category === 'persistence')
                  .map((technique) => (
                    <Card key={technique.id} className="cyber-card">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-2 bg-muted/50 rounded-md text-primary">
                            {technique.icon}
                          </div>
                          <Badge 
                            variant={
                              technique.difficulty === 'expert' ? 'destructive' : 
                              technique.difficulty === 'hard' ? 'secondary' : 'default'
                            }
                            className="text-xs"
                          >
                            {technique.difficulty}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-medium mb-2">{technique.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{technique.description}</p>
                        
                        <Separator className="my-4" />
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-medium flex items-center gap-1 mb-1">
                              <FileJson className="h-3 w-3 text-primary" /> Details
                            </h4>
                            <p className="text-xs text-muted-foreground">{technique.details}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium flex items-center gap-1 mb-1">
                              <Shield className="h-3 w-3 text-primary" /> Countermeasures
                            </h4>
                            <p className="text-xs text-muted-foreground">{technique.countermeasures}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Techniques;
