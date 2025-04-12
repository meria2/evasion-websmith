
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Download, CheckCircle, ArrowLeft, FileCheck, Code, FileCode, Server, Database, Lock, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Summary = () => {
  const [payloadData, setPayloadData] = useState<any>(null);
  const [generatedFileName, setGeneratedFileName] = useState<string>('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Get payload data from session storage
    const data = sessionStorage.getItem('payloadData');
    if (!data) {
      navigate('/payload-form');
      return;
    }
    
    const parsedData = JSON.parse(data);
    setPayloadData(parsedData);
    
    // Generate a realistic filename
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomStr = Math.random().toString(36).substring(2, 8);
    setGeneratedFileName(`protected_payload_${dateStr}_${randomStr}.${parsedData.fileType}`);
  }, [navigate]);

  // Get technique icon based on ID
  const getTechniqueIcon = (id: string) => {
    switch (id) {
      case 'code-obfuscation-pro':
        return <Code className="h-6 w-6" />;
      case 'packer-crypter-bundle':
        return <FileCode className="h-6 w-6" />;
      case 'anti-vm-suite':
        return <Server className="h-6 w-6" />;
      case 'memory-evasion-toolkit':
        return <Database className="h-6 w-6" />;
      case 'enterprise-protection':
        return <Lock className="h-6 w-6" />;
      default:
        return <Shield className="h-6 w-6" />;
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

  const handleDownload = () => {
    // In a real app, this would trigger an actual file download
    toast({
      title: "Download started",
      description: `${generatedFileName} is being downloaded to your device.`,
    });
    
    // Simulate download completion
    setTimeout(() => {
      toast({
        title: "Download complete",
        description: "Your protected payload is ready to use.",
      });
    }, 2500);
  };

  const handleNewPayload = () => {
    navigate('/available-techniques');
  };

  if (!payloadData) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 container mx-auto px-4">
        <Card className="max-w-3xl mx-auto cyber-card">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-3xl">Generation Complete</CardTitle>
            <CardDescription>
              Your protected payload has been successfully generated
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-medium">{generatedFileName}</h3>
                </div>
                <Badge variant="outline">{(Math.random() * 100 + 150).toFixed(1)} KB</Badge>
              </div>
              
              <Button className="w-full gap-2" onClick={handleDownload}>
                <Download className="h-4 w-4" /> Download Protected Payload
              </Button>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Generation Summary</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getTechniqueIcon(payloadData.techniqueId)}
                    <span>Technique</span>
                  </div>
                  <span className="font-medium">{getTechniqueName(payloadData.techniqueId)}</span>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCode className="h-5 w-5" />
                    <span>Output Format</span>
                  </div>
                  <span className="font-medium">{payloadData.fileType.toUpperCase()} file</span>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    <span>Protection Features</span>
                  </div>
                  <span className="font-medium">5 active layers</span>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/20 rounded-lg p-4 mt-4">
              <h4 className="text-sm font-medium mb-2">What happens next?</h4>
              <p className="text-sm text-muted-foreground">
                Download and use your protected payload for your security testing purposes.
                Remember to follow responsible disclosure practices and only test systems you have permission to access.
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="flex gap-4 pt-2">
            <Button variant="outline" className="w-1/2" onClick={handleNewPayload}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Create New Payload
            </Button>
            <Button className="w-1/2" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
          </CardFooter>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Summary;
