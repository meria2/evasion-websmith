
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, AlertTriangle, Code, FileCode, Server, Database, Lock } from 'lucide-react';

const availableTechniques = [
  {
    id: 'code-obfuscation-pro',
    title: 'Code Obfuscation Pro',
    icon: <Code />,
    description: 'Advanced code transformation techniques with multi-layered obfuscation',
    price: '$199',
    features: ['Variable/function renaming', 'Dead code insertion', 'Control flow flattening', 'String encryption']
  },
  {
    id: 'packer-crypter-bundle',
    title: 'Packer & Crypter Bundle',
    icon: <FileCode />,
    description: 'Professional-grade payload protection with custom encryption',
    price: '$249',
    features: ['Custom encryption algorithms', 'Multi-layer packing', 'Anti-debugging features', 'Memory-only execution']
  },
  {
    id: 'anti-vm-suite',
    title: 'Anti-VM Suite',
    icon: <Server />,
    description: 'Comprehensive virtual environment detection and evasion techniques',
    price: '$299',
    features: ['VM artifact detection', 'Sandbox timer evasion', 'Hardware fingerprinting', 'Advanced anti-analysis']
  },
  {
    id: 'memory-evasion-toolkit',
    title: 'Memory Evasion Toolkit',
    icon: <Database />,
    description: 'Advanced in-memory execution techniques to avoid disk-based detection',
    price: '$349',
    features: ['Process hollowing', 'Reflective DLL injection', 'Thread execution hijacking', 'AMSI bypass methods']
  },
  {
    id: 'enterprise-protection',
    title: 'Enterprise Protection Bundle',
    icon: <Lock />,
    description: 'Complete protection suite for enterprise security testing',
    price: '$499',
    features: ['All techniques combined', 'Custom integration support', 'Regular updates', 'Technical consultation']
  }
];

const AvailableTechniques = () => {
  const navigate = useNavigate();

  const handleSelectTechnique = (techniqueId: string) => {
    // In a real app, you might store this in context, redux, or sessionStorage
    sessionStorage.setItem('selectedTechnique', techniqueId);
    navigate('/payload-form');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 md:py-20 relative">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute inset-0 bg-cyber-gradient opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">Select Evasion Technique</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Choose from our premium collection of security testing tools
              </p>
              
              <Alert variant="default" className="bg-card border-primary/40 mb-10">
                <AlertTriangle className="h-4 w-4 text-primary" />
                <AlertTitle>Security Professionals Only</AlertTitle>
                <AlertDescription>
                  These tools are intended for legitimate security testing and educational purposes only.
                  You will be required to agree to our terms of service before generating any files.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {availableTechniques.map((technique) => (
                  <Card key={technique.id} className="cyber-card hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="p-2 bg-muted/50 rounded-md text-primary">
                          {technique.icon}
                        </div>
                        <Badge variant="secondary" className="text-lg">{technique.price}</Badge>
                      </div>
                      <CardTitle className="mt-4">{technique.title}</CardTitle>
                      <CardDescription>{technique.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {technique.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-primary" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        onClick={() => handleSelectTechnique(technique.id)}
                      >
                        Select & Continue
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AvailableTechniques;
