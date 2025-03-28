import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Shield, Smartphone, CreditCard, ChevronRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* Services Hero */}
        <section className="relative bg-gray-100 py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Our Expertise
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Comprehensive Technology Solutions</h1>
              <p className="text-gray-600 max-w-3xl md:text-lg">
                We deliver intelligent, secure, and scalable technologies that transform businesses and drive innovation
                in today's digital landscape.
              </p>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section id="services-list" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-2 bg-orange-600 w-full"></div>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                    <Code className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Software Integration</h3>
                  <p className="text-gray-600 mb-4">
                    Unify your systems with seamless, scalable software solutions built for efficiency and performance.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our integration services ensure your business systems work together harmoniously, eliminating data
                    silos and streamlining workflows across your organization.
                  </p>
                  <Link
                    href="/services/software-integration"
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
                    Enhance security with intelligent video analytics and real-time threat detection systems.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our AI surveillance technology provides comprehensive monitoring with advanced pattern recognition,
                    automated alerts, and forensic capabilities.
                  </p>
                  <Link
                    href="/services/ai-surveillance"
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
                  <p className="text-gray-600 mb-4">
                    We build scalable, resilient applications that leverage cutting-edge technologies to deliver
                    exceptional user experiences and business value.
                  </p>
                  <Link
                    href="/services/next-gen-applications"
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
                  <p className="text-gray-600 mb-4">
                    Our financial applications ensure compliance, enhance security, and provide actionable insights
                    through intuitive dashboards and reporting tools.
                  </p>
                  <Link
                    href="/services/financial-applications"
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
                  <p className="text-gray-600 mb-4">
                    Our solutions combine machine learning with secure verification methods to safeguard your products
                    and maintain consumer trust.
                  </p>
                  <Link
                    href="/services/anti-counterfeit"
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
                  <p className="text-gray-600 mb-4">
                    Our fintech applications combine security, compliance, and innovation to streamline payments,
                    enhance customer experiences, and drive financial growth.
                  </p>
                  <Link
                    href="/services/fintech-applications"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-600 mb-8">
                Our team of experts is ready to develop tailored technology solutions that address your unique business
                challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Link href="/contact-us">Contact Us Today</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Link href="/why-us">Why Choose Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

