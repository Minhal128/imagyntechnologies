import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Brain, BarChart3, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-100 py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Success Stories
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Client Success Stories</h1>
              <p className="text-gray-600 max-w-3xl md:text-lg">
                Discover how Imagyn Technologies has helped businesses across industries achieve remarkable results.
              </p>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-600 transition-colors duration-300">
                      <Shield className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">Global Restaurant Chain</h3>
                      <p className="text-orange-600">AI Monitoring Implementation</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4 py-3 mb-4 bg-orange-50 italic text-gray-700">
                    "Imagyn Technologies transformed our operations with their AI monitoring solution. We've seen a 30%
                    increase in operational efficiency and significant improvements in customer satisfaction."
                  </div>
                  <p className="text-gray-700 mb-4">
                    <span className="font-medium">Challenge:</span> The client needed a system to monitor staff
                    compliance with operational procedures across 200+ locations.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-medium">Solution:</span> We implemented an AI-powered monitoring system that
                    provided real-time insights into operational compliance and staff performance.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-medium">Results:</span> 30% increase in operational efficiency, 25% reduction
                    in compliance issues, and significant improvements in customer satisfaction scores.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      AI Monitoring
                    </span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      Computer Vision
                    </span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      Real-time Analytics
                    </span>
                  </div>
                  <Link
                    href="/case-studies/restaurant-chain"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-600 transition-colors duration-300">
                      <Code className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">Multinational Retailer</h3>
                      <p className="text-orange-600">Anti-Counterfeit Solutions</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4 py-3 mb-4 bg-orange-50 italic text-gray-700">
                    "The anti-counterfeit solution from Imagyn has protected our brand integrity and increased consumer
                    trust. Counterfeit incidents have decreased by 85% since implementation."
                  </div>
                  <p className="text-gray-700 mb-4">
                    <span className="font-medium">Challenge:</span> The client was facing significant losses and brand
                    damage due to counterfeit products in the market.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-medium">Solution:</span> We developed a comprehensive anti-counterfeit system
                    using AI and blockchain technology to verify product authenticity.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-medium">Results:</span> 85% reduction in counterfeit incidents, increased
                    consumer trust, and protection of brand reputation and revenue.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      Anti-Counterfeit
                    </span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      Blockchain
                    </span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      Brand Protection
                    </span>
                  </div>
                  <Link
                    href="/case-studies/multinational-retailer"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Testimonials */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">More Client Stories</h2>
              <p className="text-gray-600 max-w-3xl">
                See how we've helped businesses across different industries achieve their goals with our technology
                solutions.
              </p>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Case Study 1 */}
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Case Study" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Dining Establishment</h3>
                  <p className="text-gray-600 mb-4">
                    Implemented AI monitoring for staff compliance with operational procedures, ensuring high standards
                    in customer service and food safety.
                  </p>
                  <div className="border-l-4 border-orange-600 pl-4 py-2 mb-4 bg-orange-50 italic text-gray-700 text-sm">
                    "The technology has revolutionized how we manage quality control across all our locations."
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-orange-600" />
                      </div>
                      <span className="ml-2 text-sm font-medium">AI Monitoring</span>
                    </div>
                    <Link
                      href="/case-studies/dining-establishment"
                      className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                    >
                      View Case Study
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Case Study 2 */}
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Case Study" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Logistics Provider</h3>
                  <p className="text-gray-600 mb-4">
                    Integrated AI-based monitoring systems to provide comprehensive insights into shelf activity across
                    various stores, empowering clients with constant visibility.
                  </p>
                  <div className="border-l-4 border-orange-600 pl-4 py-2 mb-4 bg-orange-50 italic text-gray-700 text-sm">
                    "The visibility we now have across our supply chain has transformed our decision-making
                    capabilities."
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <BarChart3 className="h-5 w-5 text-orange-600" />
                      </div>
                      <span className="ml-2 text-sm font-medium">Analytics</span>
                    </div>
                    <Link
                      href="/case-studies/logistics-provider"
                      className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                    >
                      View Case Study
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Case Study 3 */}
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Case Study" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Food Chain</h3>
                  <p className="text-gray-600 mb-4">
                    Implemented AI-based technology to optimize in-store operations, ensure order accuracy, enhance
                    staff productivity, and maintain superior customer service standards.
                  </p>
                  <div className="border-l-4 border-orange-600 pl-4 py-2 mb-4 bg-orange-50 italic text-gray-700 text-sm">
                    "Our operations are more efficient and our customer satisfaction scores have never been higher."
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <Brain className="h-5 w-5 text-orange-600" />
                      </div>
                      <span className="ml-2 text-sm font-medium">AI Solutions</span>
                    </div>
                    <Link
                      href="/case-studies/food-chain"
                      className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                    >
                      View Case Study
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Client Quotes */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                What Our Clients Say
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Client Testimonials</h2>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="border-l-4 border-orange-600 pl-4 py-3 mb-4 bg-orange-50 italic text-gray-700">
                  "Imagyn Technologies has been an invaluable partner in our digital transformation journey. Their
                  team's expertise and commitment to our success have exceeded our expectations at every turn."
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 relative overflow-hidden">
                    <Image src="/placeholder.svg?height=50&width=50" alt="Client" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Robert Chen</h4>
                    <p className="text-sm text-gray-600">CTO, Global Financial Services</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="border-l-4 border-orange-600 pl-4 py-3 mb-4 bg-orange-50 italic text-gray-700">
                  "The AI solutions provided by Imagyn have revolutionized our approach to data analysis. We're now able
                  to make faster, more informed decisions that have directly impacted our bottom line."
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 relative overflow-hidden">
                    <Image src="/placeholder.svg?height=50&width=50" alt="Client" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">Director of Operations, Retail Group</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="border-l-4 border-orange-600 pl-4 py-3 mb-4 bg-orange-50 italic text-gray-700">
                  "Working with Imagyn Technologies has been a game-changer for our security infrastructure. Their
                  expertise in both AI and cybersecurity created a solution that has dramatically reduced our risk
                  profile."
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 relative overflow-hidden">
                    <Image src="/placeholder.svg?height=50&width=50" alt="Client" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Michael Rodriguez</h4>
                    <p className="text-sm text-gray-600">CISO, Healthcare Provider</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="border-l-4 border-orange-600 pl-4 py-3 mb-4 bg-orange-50 italic text-gray-700">
                  "The team at Imagyn doesn't just deliver technology – they deliver results. Their understanding of our
                  business challenges and their innovative approach to solving them has made them a trusted partner."
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 relative overflow-hidden">
                    <Image src="/placeholder.svg?height=50&width=50" alt="Client" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Emily Wong</h4>
                    <p className="text-sm text-gray-600">CEO, Technology Startup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-gray-600 mb-8">
                Let's discuss how our technology solutions can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Link href="/contact-us">Contact Us Today</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

