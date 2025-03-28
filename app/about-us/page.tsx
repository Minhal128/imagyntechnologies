import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lightbulb, Target, Users, Brain, ArrowRight } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* About Us Hero */}
        <section className="relative bg-gray-100 py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Innovation Partners for the Digital Age
              </h1>
              <p className="text-gray-600 max-w-3xl md:text-lg">
                We're more than just an IT company — we're your innovation partner in building a digital-first future.
              </p>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-black/30 z-10 rounded-xl"></div>
                <Image src="/placeholder.svg?height=400&width=600" alt="Our Story" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-black">Our Story</h2>
                <div className="w-20 h-1.5 bg-orange-600 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed">
                  Imagyn Technologies was founded in 2015 with a vision to transform how businesses leverage technology.
                  What began as a small team of passionate innovators has grown into a global technology partner serving
                  clients across multiple industries.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our journey has been defined by a relentless pursuit of excellence, a commitment to understanding our
                  clients' unique challenges, and a drive to deliver solutions that create lasting value.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, we're proud to be at the forefront of technological innovation, helping businesses navigate the
                  complexities of digital transformation with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values and Principles */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Guiding Principles</h2>
              <p className="text-gray-600 max-w-3xl">
                At Imagyn Technologies, our values are the foundation of everything we do. They guide our decisions,
                shape our culture, and define our relationships with clients and partners.
              </p>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {/* Value 1 */}
              <div className="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-orange-600 border-2 border-transparent">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <Lightbulb className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We embrace creativity and forward-thinking to develop solutions that push boundaries and create new
                  possibilities.
                </p>
                <div className="mt-4">
                  <Link
                    href="/about-us/innovation"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Value 2 */}
              <div className="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-orange-600 border-2 border-transparent">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <Target className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We are committed to delivering the highest quality in everything we do, with meticulous attention to
                  every detail.
                </p>
                <div className="mt-4">
                  <Link
                    href="/about-us/excellence"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Value 3 */}
              <div className="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-orange-600 border-2 border-transparent">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <Users className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Partnership</h3>
                <p className="text-gray-600">
                  We believe in building deep, collaborative relationships with our clients to understand their unique
                  challenges and goals.
                </p>
                <div className="mt-4">
                  <Link
                    href="/about-us/partnership"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Value 4 */}
              <div className="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-orange-600 border-2 border-transparent">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <Brain className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Intelligence</h3>
                <p className="text-gray-600">
                  We leverage data, expertise, and insight to develop smart solutions that address complex challenges
                  effectively.
                </p>
                <div className="mt-4">
                  <Link
                    href="/about-us/intelligence"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">The Minds Behind Imagyn</h2>
              <p className="text-gray-600 max-w-3xl">
                Our team combines deep technical expertise with creative thinking to deliver powerful results for our
                clients.
              </p>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mt-6"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {/* Team Member 1 */}
              <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-1">Sarah Johnson</h3>
                  <p className="text-orange-600 mb-3">Chief Executive Officer</p>
                  <p className="text-gray-600 text-sm mb-4">
                    With over 15 years of experience in technology leadership, Sarah drives the vision and strategy for
                    Imagyn Technologies.
                  </p>
                  <div className="flex space-x-3">
                    <Link href="#" className="text-gray-400 hover:text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-1">Michael Rodriguez</h3>
                  <p className="text-orange-600 mb-3">Chief Technology Officer</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Michael leads our technical strategy and innovation initiatives, bringing 12+ years of engineering
                    expertise.
                  </p>
                  <div className="flex space-x-3">
                    <Link href="#" className="text-gray-400 hover:text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-1">Priya Patel</h3>
                  <p className="text-orange-600 mb-3">Head of AI Research</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Priya spearheads our AI initiatives, combining academic research with practical applications for
                    client solutions.
                  </p>
                  <div className="flex space-x-3">
                    <Link href="#" className="text-gray-400 hover:text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-1">David Kim</h3>
                  <p className="text-orange-600 mb-3">Director of Client Solutions</p>
                  <p className="text-gray-600 text-sm mb-4">
                    David works closely with clients to understand their needs and ensure our solutions deliver
                    exceptional value.
                  </p>
                  <div className="flex space-x-3">
                    <Link href="#" className="text-gray-400 hover:text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="/about-us/team">View Full Team</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Join Our Team</h2>
              <p className="text-gray-600 mb-8">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Link href="/careers">Explore Careers</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

