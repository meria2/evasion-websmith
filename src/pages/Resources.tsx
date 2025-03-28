import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BookOpen, FileText, ExternalLink, Github, Download, 
  Code, Wrench, ChevronRight, ScrollText, Link as LinkIcon,
  BookMarked, ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const Resources = () => {
  const papers = [
    {
      id: 1,
      title: "Advanced Malware Evasion Techniques: A Comprehensive Survey",
      authors: "Johnson et al.",
      year: 2023,
      journal: "Journal of Cybersecurity Research",
      url: "#",
      type: "survey"
    },
    {
      id: 2,
      title: "Detection of Anti-VM Techniques in Modern Malware",
      authors: "Zhang and Smith",
      year: 2022,
      journal: "IEEE Symposium on Security and Privacy",
      url: "#",
      type: "research"
    },
    {
      id: 3,
      title: "Evading Memory Analysis: Techniques and Countermeasures",
      authors: "Patel et al.",
      year: 2021,
      journal: "USENIX Security Symposium",
      url: "#",
      type: "research"
    },
    {
      id: 4,
      title: "Modern Obfuscation Methods in Malicious Software",
      authors: "Rodriguez and Chen",
      year: 2023,
      journal: "Computers & Security",
      url: "#",
      type: "survey"
    },
    {
      id: 5,
      title: "The Evolution of Rootkit Techniques: From Ring 3 to Ring 0",
      authors: "Karim and Lee",
      year: 2022,
      journal: "ACM Conference on Computer and Communications Security",
      url: "#",
      type: "research"
    }
  ];

  const tools = [
    {
      id: 1,
      name: "YARA",
      description: "Pattern matching tool designed for malware researchers and security professionals.",
      url: "https://virustotal.github.io/yara/",
      category: "analysis"
    },
    {
      id: 2,
      name: "Cuckoo Sandbox",
      description: "Automated malware analysis system that monitors behavior of suspicious files.",
      url: "https://cuckoosandbox.org/",
      category: "sandbox"
    },
    {
      id: 3,
      name: "Ghidra",
      description: "Software reverse engineering framework for analyzing compiled code.",
      url: "https://ghidra-sre.org/",
      category: "reverse-engineering"
    },
    {
      id: 4,
      name: "x64dbg",
      description: "Open-source debugger for Windows that can help analyze malware behavior.",
      url: "https://x64dbg.com/",
      category: "debugging"
    },
    {
      id: 5,
      name: "Process Monitor",
      description: "Advanced monitoring tool for Windows that shows real-time file system, registry, and process activity.",
      url: "https://learn.microsoft.com/en-us/sysinternals/downloads/procmon",
      category: "monitoring"
    },
    {
      id: 6,
      name: "Volatility",
      description: "Memory forensics framework for incident response and malware analysis.",
      url: "https://www.volatilityfoundation.org/",
      category: "memory-analysis"
    }
  ];

  const resources = [
    {
      id: 1,
      title: "MITRE ATT&CK® Framework",
      description: "Comprehensive matrix of tactics and techniques used by threat actors, including evasion methods.",
      url: "https://attack.mitre.org/",
      type: "framework"
    },
    {
      id: 2,
      title: "OWASP Malicious Code Analysis",
      description: "Guide for analyzing malicious code and understanding evasion techniques.",
      url: "https://owasp.org/",
      type: "guide"
    },
    {
      id: 3,
      title: "Awesome Malware Analysis",
      description: "A curated list of malware analysis tools and resources.",
      url: "https://github.com/rshipp/awesome-malware-analysis",
      type: "repository"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute inset-0 bg-cyber-gradient opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">Resources & Tools</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Curated collection of resources, tools, and research papers for understanding
                and defending against malware evasion techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Research Papers Section */}
        <section id="papers" className="py-12 container mx-auto px-4">
          <div className="flex items-center mb-8">
            <FileText className="text-primary mr-3 h-6 w-6" />
            <h2 className="text-2xl font-bold">Research Papers</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {papers.map((paper) => (
              <Card key={paper.id} className="cyber-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">{paper.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {paper.type === 'survey' ? 'Survey' : 'Research'}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <ScrollText className="h-3 w-3 mr-1" />
                    <span className="mr-2">{paper.authors}</span>
                    <span>({paper.year})</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    Published in <span className="italic">{paper.journal}</span>
                  </p>
                  
                  <a 
                    href={paper.url} 
                    className="text-primary hover:text-primary/80 inline-flex items-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View paper</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="outline" size="sm" className="neon-border">
              <span>Browse More Papers</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </section>
        
        <Separator className="mx-auto max-w-5xl" />

        {/* Tools Section */}
        <section id="tools" className="py-12 container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Wrench className="text-primary mr-3 h-6 w-6" />
            <h2 className="text-2xl font-bold">Analysis Tools</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Card key={tool.id} className="cyber-card flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-medium">{tool.name}</h3>
                    <Badge>{tool.category}</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {tool.description}
                  </p>
                  
                  <a 
                    href={tool.url} 
                    className="text-primary hover:text-primary/80 inline-flex items-center text-sm mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Visit website</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <Separator className="mx-auto max-w-5xl" />

        {/* Other Resources Section */}
        <section id="practices" className="py-12 container mx-auto px-4">
          <div className="flex items-center mb-8">
            <BookOpen className="text-primary mr-3 h-6 w-6" />
            <h2 className="text-2xl font-bold">Best Practices & Frameworks</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Card key={resource.id} className="cyber-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-medium">{resource.title}</h3>
                    <Badge variant="secondary">{resource.type}</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  
                  <a 
                    href={resource.url} 
                    className="text-primary hover:text-primary/80 inline-flex items-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Access resource</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className="py-12 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Join Our Cybersecurity Community</h2>
              <p className="text-muted-foreground mb-8">
                Connect with cybersecurity professionals, malware researchers, and defenders
                to share knowledge and stay updated on the latest evasion techniques and countermeasures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="neon-border animate-pulse-glow">
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub Discussions</span>
                </Button>
                <Button variant="outline">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  <span>Discord Community</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
