import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Brain,
  Code,
  Shield,
  Smartphone,
  CreditCard,
  ChevronRight,
  CheckCircle2,
  Users,
  Target,
  Lightbulb,
} from "lucide-react"
import { LogoMarquee } from "@/components/logo-marquee"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-100 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black">
                  Technology That Moves You Forward
                </h1>
                <p className="text-2xl md:text-3xl font-medium text-orange-600">Vision. Precision. Intelligence.</p>
                <p className="text-gray-600 text-lg">
                  Transforming businesses by delivering seamless software integration, AI-powered next-gen application
                  services—driving real results through smart, technology-driven solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white rounded-md">
                    <Link href="/services" className="flex items-center">
                      Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 rounded-md"
                  >
                    <Link href="/testimonials">View Case Studies</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-black/30 z-10 rounded-xl"></div>
                <video
                  src="/video.mp4"
                  title="Technology Innovation"
                  aria-label="Technology Innovation"
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos Marquee */}
        <section className="py-8 bg-gray-50 border-y">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-6">
              <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">Trusted by industry leaders</p>
            </div>
            <LogoMarquee />
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  At Imagyn Technologies, we're more than just an IT company — we're your innovation partner. We
                  specialize in crafting smart, forward-thinking solutions that help businesses grow, adapt, and lead in
                  a digital-first world.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  With a deep passion for technology and a drive for excellence, our team blends technical expertise
                  with creative thinking to deliver powerful results. Whether it's leveraging the latest in Artificial
                  Intelligence or building scalable systems, we're here to help you stay ahead of the curve.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">Let's build the future, together.</p>
                <div className="pt-4">
                  <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white rounded-md">
                    <Link href="/about-us">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-600 border-2 border-transparent group">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Innovation</h3>
                  <p className="text-gray-600">Pioneering solutions that push boundaries</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-600 border-2 border-transparent group">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Precision</h3>
                  <p className="text-gray-600">Meticulous attention to every detail</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-600 border-2 border-transparent group">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Partnership</h3>
                  <p className="text-gray-600">Building lasting relationships</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-600 border-2 border-transparent group">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Intelligence</h3>
                  <p className="text-gray-600">Smart solutions for complex challenges</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Comprehensive Solutions for Your Business
              </h2>
              <p className="text-gray-600 max-w-3xl">
                We build smart, reliable tech solutions that help your business run smoother, stay secure, and grow with
                confidence.
              </p>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Service 1 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-2 bg-orange-600 w-full"></div>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                    <Code className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Software Integration</h3>
                  <p className="text-gray-600 mb-4">
                    Unify your systems with seamless, scalable software solutions built for efficiency.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Service 2 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-2 bg-orange-600 w-full"></div>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                    <Shield className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">AI-Powered Surveillance Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Enhance security with intelligent video analytics and real-time threat detection.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Service 3 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-2 bg-orange-600 w-full"></div>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                    <Brain className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Next-Gen Application Services</h3>
                  <p className="text-gray-600 mb-4">
                    Accelerate innovation with future-ready, high-performance applications tailored to your needs.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Service 4 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-2 bg-orange-600 w-full"></div>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                    <CreditCard className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Advanced Financial Applications</h3>
                  <p className="text-gray-600 mb-4">
                    Streamline operations with secure, data-driven financial tools built for modern businesses.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Service 5 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-2 bg-orange-600 w-full"></div>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                    <Shield className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Anti-Counterfeit Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Protect your brand with advanced AI-based anti-counterfeit technology that ensures product
                    authenticity.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Service 6 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-2 bg-orange-600 w-full"></div>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                    <Smartphone className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Fintech-Based Applications</h3>
                  <p className="text-gray-600 mb-4">
                    Deliver smarter financial experiences with cutting-edge fintech platforms and custom solutions.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-black/30 z-10 rounded-xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium">
                  Why Choose Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">Why Choose Imagyn Technologies?</h2>
                <div className="w-20 h-1.5 bg-orange-600 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed">
                  At Imagyn Technologies, we don't just deliver tech solutions — we build partnerships that drive real
                  results.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With experience working alongside 40+ companies across Pakistan, the Middle East and USA, we've helped
                  businesses of all sizes navigate the digital shift with confidence. Our approach is rooted in
                  understanding your goals, tailoring solutions that fit, and delivering with precision.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're a start-up looking to scale or an enterprise aiming to innovate, our blend of
                  creativity, technical expertise, and commitment to excellence sets us apart. We're not here to sell
                  you services — we're here to solve problems, create value, and grow together.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Expertise</h4>
                      <p className="text-sm text-gray-600">Specialized technical knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Innovation</h4>
                      <p className="text-sm text-gray-600">Cutting-edge solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Reliability</h4>
                      <p className="text-sm text-gray-600">Consistent, dependable service</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Partnership</h4>
                      <p className="text-sm text-gray-600">Long-term collaboration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-16 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="mb-8">
              <div className="inline-block bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Our Mission
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Building the Future of Technology</h2>
                <div className="w-20 h-1.5 bg-orange-600 rounded-full"></div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We build intelligent, secure, and scalable digital solutions that simplify complexity and power
                  progress. From AI-driven insights to fintech innovation, we create tech that protects, connects, and
                  transforms businesses for the connected world.
                </p>
                <div className="pt-4">
                  <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white rounded-md">
                    <Link href="/mission">Join Our Journey</Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-900 p-6 rounded-lg border-2 border-transparent hover:border-orange-600 transition-all duration-300">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Security</h3>
                  <p className="text-gray-400">Building trust through robust protection</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border-2 border-transparent hover:border-orange-600 transition-all duration-300">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Intelligence</h3>
                  <p className="text-gray-400">Smart solutions for complex challenges</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border-2 border-transparent hover:border-orange-600 transition-all duration-300">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-400">Pioneering solutions that drive growth</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border-2 border-transparent hover:border-orange-600 transition-all duration-300">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Connectivity</h3>
                  <p className="text-gray-400">Bringing systems and people together</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-600 mb-8">
                Let's discuss how our technology solutions can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white rounded-md">
                  <Link href="/contact-us">Contact Us Today</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 rounded-md"
                >
                  <Link href="/services">Schedule a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

