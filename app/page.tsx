import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">L</span>
              </div>
              <span className="font-bold text-xl">Launch</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Button asChild variant="ghost">
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
                Welcome to your new digital experience
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                Discover a platform designed to simplify your digital life. Join thousands of users who already trust us.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button asChild size="lg" className="px-8 py-6 text-lg font-semibold">
                <Link href="/signup">Create Account</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold">
                <Link href="/signin">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why choose us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer the tools and features you need to succeed in today's digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 bg-primary/10 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-primary text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold">Fast & Reliable</h3>
              <p className="text-muted-foreground">
                Lightning-fast performance with 99.9% uptime guarantee. Your data is always accessible when you need it.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 bg-primary/10 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-primary text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold">Secure by Design</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security with end-to-end encryption. Your privacy and data protection are our priority.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 bg-primary/10 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-primary text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold">Smart Solutions</h3>
              <p className="text-muted-foreground">
                AI-powered features that adapt to your workflow and help you accomplish more with less effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Built for the future</h2>
              <p className="text-lg text-muted-foreground">
                Our platform combines cutting-edge technology with intuitive design to deliver an experience 
                that grows with your needs. Whether you're a startup or an enterprise, we have the tools 
                to help you succeed.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-primary">✓</span>
                  <span>Advanced analytics and reporting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-primary">✓</span>
                  <span>Seamless integrations with popular tools</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-primary">✓</span>
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-primary">✓</span>
                  <span>Scalable infrastructure</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 text-center">
              <div className="bg-background rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Join thousands of users</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">150+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
            <p className="text-xl text-muted-foreground">
              Join our community today and experience the difference. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="px-8 py-6 text-lg font-semibold">
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold">
                <Link href="#contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">L</span>
                </div>
                <span className="font-bold text-xl">Launch</span>
              </div>
              <p className="text-muted-foreground">
                Building the future of digital experiences, one user at a time.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">API</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Press</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact Us</Link></li>
                <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Launch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
