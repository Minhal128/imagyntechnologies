import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Shield, Brain, Code, Users, ArrowRight } from "lucide-react"

export default function WhyUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-100 py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">What Sets Us Apart</h1>
              <p className="text-gray-600 max-w-3xl md:text-lg">
                Discover why leading businesses trust Imagyn Technologies as their technology partner.
              </p>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-black">Why Choose Imagyn Technologies?</h2>
                <div className="w-20 h-1.5 bg-orange-600 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed">
                  At Imagyn Technologies, we don't just deliver tech solutions — we build partnerships that drive real
                  results. Our approach combines deep technical expertise with a genuine commitment to understanding
                  your business challenges and goals.
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
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-black/30 z-10 rounded-xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Our Advantages
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What Makes Us Different</h2>
              <p className="text-gray-600 max-w-3xl">
                Our unique approach and capabilities create exceptional value for our clients.
              </p>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Advantage 1 */}
              <div className="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-orange-600 border-2 border-transparent">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <Brain className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">AI-Powered Innovation</h3>
                <p className="text-gray-600 mb-4">
                  Our AI expertise allows us to develop intelligent solutions that adapt, learn, and deliver
                  unprecedented efficiency and insights.
                </p>
                <p className="text-gray-600 mb-4">
                  From computer vision to natural language processing, we leverage the latest AI technologies to solve
                  complex business challenges.
                </p>
                <div className="mt-4">
                  <Link
                    href="/why-us/ai-innovation"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Advantage 2 */}
              <div className="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-orange-600 border-2 border-transparent">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <Shield className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Security-First Approach</h3>
                <p className="text-gray-600 mb-4">
                  Security is built into everything we do, with rigorous standards and practices that protect your data
                  and applications.
                </p>
                <p className="text-gray-600 mb-4">
                  Our security protocols exceed industry standards, providing peace of mind for businesses in regulated
                  industries.
                </p>
                <div className="mt-4">
                  <Link
                    href="/why-us/security"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Advantage 3 */}
              <div className="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-orange-600 border-2 border-transparent">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <Code className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Full-Spectrum Expertise</h3>
                <p className="text-gray-600 mb-4">
                  Our multidisciplinary team brings together expertise in software development, AI, security, and
                  business strategy.
                </p>
                <p className="text-gray-600 mb-4">
                  This comprehensive knowledge base allows us to address all aspects of your technology needs with a
                  single trusted partner.
                </p>
                <div className="mt-4">
                  <Link
                    href="/why-us/expertise"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Success Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Client Success Stories</h2>
              <p className="text-gray-600 max-w-3xl">
                See how we've helped businesses across industries achieve remarkable results.
              </p>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Case Study 1 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">Global Restaurant Chain</h3>
                      <p className="text-orange-600">AI Monitoring Implementation</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4 py-2 mb-4 bg-orange-50 italic text-gray-700">
                    "Imagyn Technologies transformed our operations with their AI monitoring solution. We've seen a 30%
                    increase in operational efficiency and significant improvements in customer satisfaction."
                  </div>
                  <p className="text-gray-600 mb-4">
                    We implemented an AI-powered monitoring system across 200+ locations, enabling real-time insights
                    into operational compliance and staff performance.
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

              {/* Case Study 2 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">Multinational Retailer</h3>
                      <p className="text-orange-600">Anti-Counterfeit Solutions</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4 py-2 mb-4 bg-orange-50 italic text-gray-700">
                    "The anti-counterfeit solution from Imagyn has protected our brand integrity and increased consumer
                    trust. Counterfeit incidents have decreased by 85% since implementation."
                  </div>
                  <p className="text-gray-600 mb-4">
                    We developed a comprehensive anti-counterfeit system using AI and blockchain technology to verify
                    product authenticity and protect brand reputation.
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

            <div className="flex justify-center mt-12">
              <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="/testimonials">View All Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                By the Numbers
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Impact</h2>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Stat 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">40+</div>
                <p className="text-lg font-medium text-black mb-2">Global Clients</p>
                <p className="text-gray-600 text-sm">
                  Across multiple industries and regions, delivering tailored solutions.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
                <p className="text-lg font-medium text-black mb-2">Client Retention</p>
                <p className="text-gray-600 text-sm">Our partnerships endure because we consistently deliver value.</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">200+</div>
                <p className="text-lg font-medium text-black mb-2">Completed Projects</p>
                <p className="text-gray-600 text-sm">
                  From custom software to AI implementation and system integration.
                </p>
              </div>

              {/* Stat 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">30%</div>
                <p className="text-lg font-medium text-black mb-2">Avg. Efficiency Gain</p>
                <p className="text-gray-600 text-sm">
                  Our clients experience significant improvements in operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Ready to Experience the Imagyn Difference?
              </h2>
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

