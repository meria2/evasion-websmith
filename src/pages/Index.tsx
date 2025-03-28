
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Database, Code, FileCode, Server, ArrowRight, BookOpen } from 'lucide-react';

const Index = () => {
  const techniques = [
    {
      id: 'obfuscation',
      title: 'Obfuscation',
      icon: <Code className="h-6 w-6 text-primary" />,
      description: 'Techniques to make malware code unreadable or difficult to analyze.'
    },
    {
      id: 'anti-vm',
      title: 'Anti-VM Detection',
      icon: <Server className="h-6 w-6 text-primary" />,
      description: 'Methods to detect and evade virtualized analysis environments.'
    },
    {
      id: 'packing',
      title: 'Packing & Crypters',
      icon: <FileCode className="h-6 w-6 text-primary" />,
      description: 'Compression and encryption techniques to hide malicious code.'
    },
    {
      id: 'in-memory',
      title: 'In-Memory Execution',
      icon: <Database className="h-6 w-6 text-primary" />,
      description: 'Running code entirely in memory to avoid file system detection.'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute inset-0 bg-cyber-gradient opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text animate-text-shimmer">Malware Evasion</span>
                <br />Techniques & Countermeasures
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Understand how malware evades detection and how to build more effective defenses.
                Educational content for cybersecurity professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-border animate-pulse-glow">
                  <span className="mr-2">Explore Techniques</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Why Learn This?</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Defensive Security Through Education</h2>
                <p className="text-muted-foreground mb-6">
                  Understanding how malware evades detection is crucial for building effective
                  defense mechanisms. Our platform provides detailed, educational content about
                  various evasion techniques employed by modern malware.
                </p>
                <p className="text-muted-foreground mb-6">
                  This knowledge is essential for security professionals, malware analysts, and
                  anyone involved in cybersecurity defense strategies.
                </p>
                <div className="flex items-center space-x-2 text-primary">
                  <Shield className="h-5 w-5" />
                  <span className="font-medium">For educational purposes only</span>
                </div>
              </div>
              <div className="md:w-1/2 border border-muted rounded-lg overflow-hidden neon-border animate-pulse-glow">
                <div className="bg-muted/20 p-6 aspect-video flex items-center justify-center">
                  <Eye className="h-20 w-20 text-primary/50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Techniques Preview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Evasion Techniques</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the most prevalent techniques malware authors use to evade security controls
                and analysis tools.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techniques.map((technique) => (
                <Card key={technique.id} className="cyber-card">
                  <CardContent className="p-6">
                    <div className="mb-4">{technique.icon}</div>
                    <h3 className="text-xl font-medium mb-2">{technique.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{technique.description}</p>
                    <Link 
                      to={`/techniques/${technique.id}`} 
                      className="text-primary hover:text-primary/80 text-sm inline-flex items-center"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/techniques">
                <Button variant="outline" size="lg" className="neon-border">
                  View All Techniques
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Resources & Tools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Curated resources to help you understand, detect, and defend against evasive malware.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card">
                <h3 className="text-xl font-medium mb-3">Research Papers</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Academic research and papers on malware evasion and detection techniques.
                </p>
                <Link to="/resources#papers" className="text-primary hover:text-primary/80 text-sm inline-flex items-center">
                  <span>Browse papers</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
              
              <div className="cyber-card">
                <h3 className="text-xl font-medium mb-3">Analysis Tools</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Tools for analyzing and understanding malware evasion capabilities.
                </p>
                <Link to="/resources#tools" className="text-primary hover:text-primary/80 text-sm inline-flex items-center">
                  <span>Explore tools</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
              
              <div className="cyber-card">
                <h3 className="text-xl font-medium mb-3">Best Practices</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Defense strategies and best practices against evasive malware.
                </p>
                <Link to="/resources#practices" className="text-primary hover:text-primary/80 text-sm inline-flex items-center">
                  <span>Read guides</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute inset-0 bg-cyber-gradient opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Stay Updated on Emerging Techniques</h2>
              <p className="text-muted-foreground mb-8">
                Join our community to receive the latest updates on evolving malware evasion techniques
                and countermeasures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-border animate-pulse-glow">
                  Join the Community
                </Button>
                <Button variant="outline" size="lg">
                  Subscribe to Newsletter
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

export default Index;
