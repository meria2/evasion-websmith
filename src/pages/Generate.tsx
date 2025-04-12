
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileCode, Code, Server, Shield, Database, Lock } from 'lucide-react';

const Generate = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('Initializing');
  const [payloadData, setPayloadData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get payload data from session storage
    const data = sessionStorage.getItem('payloadData');
    if (!data) {
      navigate('/payload-form');
      return;
    }
    
    setPayloadData(JSON.parse(data));
    
    // Simulate generation process with progress updates
    const steps = [
      { name: 'Initializing', duration: 2000 },
      { name: 'Analyzing payload', duration: 3000 },
      { name: 'Applying obfuscation layers', duration: 4000 },
      { name: 'Integrating evasion techniques', duration: 3500 },
      { name: 'Building output file', duration: 3000 },
      { name: 'Finalizing and verifying', duration: 2500 }
    ];
    
    let currentProgress = 0;
    let stepIndex = 0;
    
    const incrementProgress = () => {
      if (stepIndex < steps.length) {
        const step = steps[stepIndex];
        setCurrentStep(step.name);
        
        const progressIncrements = 100 / steps.length;
        const incrementsPerStep = 10;
        const stepIncrement = progressIncrements / incrementsPerStep;
        let stepProgress = 0;
        
        const interval = setInterval(() => {
          if (stepProgress < incrementsPerStep) {
            currentProgress += stepIncrement;
            setProgress(Math.min(Math.round(currentProgress), 100));
            stepProgress++;
          } else {
            clearInterval(interval);
            stepIndex++;
            if (stepIndex < steps.length) {
              setTimeout(incrementProgress, 500);
            } else {
              // Generation complete, navigate to summary
              setTimeout(() => {
                navigate('/summary');
              }, 1000);
            }
          }
        }, step.duration / incrementsPerStep);
      }
    };
    
    // Start the progress simulation
    setTimeout(incrementProgress, 1000);
  }, [navigate]);

  // Get technique icon based on ID
  const getTechniqueIcon = (id: string) => {
    switch (id) {
      case 'code-obfuscation-pro':
        return <Code className="h-8 w-8 text-primary" />;
      case 'packer-crypter-bundle':
        return <FileCode className="h-8 w-8 text-primary" />;
      case 'anti-vm-suite':
        return <Server className="h-8 w-8 text-primary" />;
      case 'memory-evasion-toolkit':
        return <Database className="h-8 w-8 text-primary" />;
      case 'enterprise-protection':
        return <Lock className="h-8 w-8 text-primary" />;
      default:
        return <Shield className="h-8 w-8 text-primary" />;
    }
  };

  // Get technique name from ID
  const getTechniqueName = (id: string) => {
    const techniques = {
      'code-obfuscation-pro': 'Code Obfuscation Pro',
      'packer-crypter-bundle': 'Packer & Crypter Bundle',
      'anti-vm-suite': 'Anti-VM Suite',
      'memory-evasion-toolkit': 'Memory Evasion Toolkit',
      'enterprise-protection': 'Enterprise Protection Bundle'
    };
    
    return techniques[id as keyof typeof techniques] || 'Selected Technique';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 container mx-auto px-4">
        <Card className="max-w-3xl mx-auto cyber-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Generating Protected Payload</CardTitle>
            <CardDescription>
              Please wait while we apply security techniques to your payload
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {payloadData && (
              <div className="mb-8 flex flex-col items-center">
                <div className="p-4 bg-muted/30 rounded-full mb-4">
                  {getTechniqueIcon(payloadData.techniqueId)}
                </div>
                <h3 className="text-xl font-semibold mb-1">
                  {getTechniqueName(payloadData.techniqueId)}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Output format: {payloadData.fileType.toUpperCase()} file
                </p>
              </div>
            )}
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{currentStep}</span>
                  <span className="text-sm font-medium">{progress}%</span>
                </div>
                <Progress value={progress} className="h-4" />
              </div>
              
              <div className="bg-muted/30 border border-border/50 rounded-md p-4">
                <div className="font-mono text-xs h-24 space-y-1 overflow-hidden">
                  {progress >= 5 && <p className="text-green-500">[+] Initializing protection engine...</p>}
                  {progress >= 15 && <p className="text-green-500">[+] Loading payload components...</p>}
                  {progress >= 25 && <p className="text-green-500">[+] Scanning code structure...</p>}
                  {progress >= 35 && <p className="text-green-500">[+] Applying primary obfuscation layer...</p>}
                  {progress >= 45 && <p className="text-green-500">[+] Encrypting string constants...</p>}
                  {progress >= 55 && <p className="text-green-500">[+] Implementing control flow obfuscation...</p>}
                  {progress >= 65 && <p className="text-green-500">[+] Adding anti-analysis protections...</p>}
                  {progress >= 75 && <p className="text-green-500">[+] Compiling protected payload...</p>}
                  {progress >= 85 && <p className="text-green-500">[+] Building final executable...</p>}
                  {progress >= 95 && <p className="text-green-500">[+] Finalizing output file...</p>}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Generate;
