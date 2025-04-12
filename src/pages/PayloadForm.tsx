
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, ArrowRight, FileCode, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  payload: z.string().min(10, {
    message: "Payload must be at least 10 characters",
  }),
  fileType: z.string({
    required_error: "Please select a file type",
  }),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

const fileTypes = [
  { value: "exe", label: "Executable (.exe)" },
  { value: "dll", label: "Dynamic Link Library (.dll)" },
  { value: "ps1", label: "PowerShell Script (.ps1)" },
  { value: "vbs", label: "VBScript (.vbs)" },
  { value: "js", label: "JavaScript (.js)" },
  { value: "hta", label: "HTML Application (.hta)" },
  { value: "zip", label: "Compressed Archive (.zip)" },
];

const PayloadForm = () => {
  const [selectedTechnique, setSelectedTechnique] = useState<string | null>(null);
  const [techniqueName, setTechniqueName] = useState<string>("");
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    const technique = sessionStorage.getItem('selectedTechnique');
    if (!technique) {
      navigate('/available-techniques');
      return;
    }
    setSelectedTechnique(technique);
    
    // Get technique name from ID
    const availableTechniques = [
      { id: 'code-obfuscation-pro', name: 'Code Obfuscation Pro' },
      { id: 'packer-crypter-bundle', name: 'Packer & Crypter Bundle' },
      { id: 'anti-vm-suite', name: 'Anti-VM Suite' },
      { id: 'memory-evasion-toolkit', name: 'Memory Evasion Toolkit' },
      { id: 'enterprise-protection', name: 'Enterprise Protection Bundle' },
    ];
    
    const found = availableTechniques.find(t => t.id === technique);
    setTechniqueName(found ? found.name : "Selected Technique");
  }, [navigate]);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      payload: "",
      agreeTerms: false,
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, store form values in context, redux, or sessionStorage
    sessionStorage.setItem('payloadData', JSON.stringify({
      ...values,
      techniqueId: selectedTechnique
    }));
    
    navigate('/generate');
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 container mx-auto px-4">
        <Card className="max-w-4xl mx-auto cyber-card">
          <CardHeader>
            <div className="flex items-center gap-2 text-primary mb-2">
              <FileCode className="h-5 w-5" />
              <span className="text-sm font-medium">{techniqueName}</span>
            </div>
            <CardTitle className="text-3xl">Configure Your Payload</CardTitle>
            <CardDescription>
              Provide your payload code and select output file format
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Alert variant="default" className="bg-muted/30 border-amber-500/30 mb-6">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <AlertTitle>Security Notice</AlertTitle>
              <AlertDescription>
                This service is for legitimate security testing only. 
                Ensure you have proper authorization to test the target systems.
              </AlertDescription>
            </Alert>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="payload"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payload Code</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your payload code here..." 
                          className="font-mono h-40 resize-y"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the code or script you want to obfuscate/protect
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="fileType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Output File Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select file type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {fileTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Choose the output format for your protected payload
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="agreeTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Terms and Conditions
                        </FormLabel>
                        <FormDescription>
                          I agree to use this tool for security testing purposes only, with proper authorization, 
                          and in compliance with all applicable laws and regulations. I understand misuse of this 
                          tool may result in legal consequences.
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-between pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate('/available-techniques')}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  
                  <Button type="submit">
                    Generate <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default PayloadForm;
