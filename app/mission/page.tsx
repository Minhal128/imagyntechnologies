import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Brain, Code, Smartphone, Target, Users, Clock, Globe } from "lucide-react"

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                Our Mission
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                Building the Future of Technology
              </h1>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8">
                We build intelligent, secure, and scalable digital solutions that simplify complexity and power
                progress. From AI-driven insights to fintech innovation, we create tech that protects, connects, and
                transforms businesses for the connected world.
              </p>
              <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="/contact-us">Join Our Journey</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Core Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What Drives Us</h2>
              <p className="text-gray-600 max-w-3xl">
                Our core values guide every decision we make and every solution we build.
              </p>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {/* Value 1 */}
              <div className="group p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-orange-600 border-2 border-transparent">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <Shield className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Security</h3>
                <p className="text-gray-600">
                  We prioritize the protection of our clients' data and systems, implementing rigorous security measures
                  at every level.
                </p>
              </div>

              {/* Value 2 */}
              <div className="group p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-orange-600 border-2 border-transparent">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <Brain className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Intelligence</h3>
                <p className="text-gray-600">
                  We leverage data, AI, and human expertise to create smart solutions that solve complex business
                  challenges.
                </p>
              </div>

              {/* Value 3 */}
              <div className="group p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-orange-600 border-2 border-transparent">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <Code className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously explore new technologies and approaches to create breakthrough solutions for our
                  clients.
                </p>
              </div>

              {/* Value 4 */}
              <div className="group p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-orange-600 border-2 border-transparent">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <Smartphone className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Connectivity</h3>
                <p className="text-gray-600">
                  We bring systems and people together, creating seamless connections that enable collaboration and
                  drive efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-black/30 z-10 rounded-xl"></div>
                <Image src="/placeholder.svg?height=400&width=600" alt="Future Vision" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium">
                  Our Vision
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">Creating Intelligent Tomorrow</h2>
                <div className="w-20 h-1.5 bg-orange-600 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed">
                  We envision a future where technology seamlessly enhances human potential, where AI and automation
                  empower organizations to focus on innovation and growth, and where digital solutions create positive
                  impacts for businesses and society.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our vision is to be at the forefront of this transformation, developing technologies that are not just
                  smart, but thoughtfully designed to address real human needs and business challenges.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Purpose-Driven</h4>
                      <p className="text-sm text-gray-600">Technology with meaning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Future-Ready</h4>
                      <p className="text-sm text-gray-600">Prepared for tomorrow</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Human-Centered</h4>
                      <p className="text-sm text-gray-600">People at the core</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Global Impact</h4>
                      <p className="text-sm text-gray-600">Worldwide reach</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Goals */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Strategic Goals
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Path Forward</h2>
              <p className="text-gray-600 max-w-3xl">
                We're committed to these strategic priorities as we build the future of technology.
              </p>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Goal 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Enhance Security Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Develop next-generation security solutions that protect businesses from evolving cyber threats.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <p className="text-gray-700">Advanced threat detection systems</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <p className="text-gray-700">Zero-trust architecture implementation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <p className="text-gray-700">AI-powered security analytics</p>
                  </div>
                </div>
              </div>

              {/* Goal 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Advance AI Innovation</h3>
                <p className="text-gray-600 mb-4">
                  Push the boundaries of AI technology to create more intelligent, efficient, and adaptable solutions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <p className="text-gray-700">Expand computer vision capabilities</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <p className="text-gray-700">Develop more sophisticated NLP models</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <p className="text-gray-700">Create industry-specific AI solutions</p>
                  </div>
                </div>
              </div>

              {/* Goal 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Expand Global Impact</h3>
                <p className="text-gray-600 mb-4">
                  Extend our reach to bring transformative technology solutions to more businesses worldwide.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <p className="text-gray-700">Establish strategic global partnerships</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <p className="text-gray-700">Develop region-specific solutions</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <p className="text-gray-700">Cultivate diverse, global talent</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Join Us On Our Mission</h2>
              <p className="text-gray-600 mb-8">
                Partner with Imagyn Technologies to be part of building the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Link href="/contact-us">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Link href="/about-us">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

