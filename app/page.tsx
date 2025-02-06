"use client";
import Interests from "@/components/Interests";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Testimonial } from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const session = useSession();

  return (
    <main className="flex flex-col justify-center font-[family-name:var(--font-geist-sans)] text-black">
      <BlurFade delay={0.25} inView>
        {" "}
        {!session.data?.user._id ? (
          <div>
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-20 text-center space-y-8 animate-fadeIn">
              <h1 className="text-6xl font-bold tracking-tight">
                Welcome to <span className="text-gray-800">ECOMMERCE</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Discover a new way to shop with our next-generation marketplace.
                Join thousands of satisfied customers who trust us for their
                shopping needs.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="text-lg px-8 hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <Link href="/signin">Sign In</Link>
                </Button>
              </div>
            </div>

            {/* Features Section */}
            <section className="py-20 bg-white text-black animate-slideUp">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-semibold mb-10">
                  Why Shop With Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Fast Delivery",
                      desc: "Get your products delivered in record time with our premium logistics.",
                    },
                    {
                      title: "Secure Payments",
                      desc: "All transactions are encrypted for maximum security.",
                    },
                    {
                      title: "24/7 Support",
                      desc: "Our customer support is available anytime, anywhere.",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="px-10 py-20 border bg-gray-50 shadow-lg border-gray-300 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <h3 className="text-4xl font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-800 text-xl">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Trending Products */}
            <section className="py-20 bg-gray-100">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-semibold mb-10">
                  Trending Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {Array(4)
                    .fill("")
                    .map((_, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        <div className="h-40 bg-gray-300 rounded-lg animate-pulse"></div>
                        <h3 className="text-2xl font-semibold mt-4">
                          Product {index + 1}
                        </h3>
                        <p className="text-gray-700">$99.99</p>
                        <Button size="sm" className="mt-4 w-full">
                          Shop Now
                        </Button>
                      </div>
                    ))}
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="testimonial-section">
              <Testimonial />
            </section>

            {/* Call to Action */}
            <section className="py-20 border bg-gray-50 border-gray-200 text-center animate-slideUp">
              <h2 className="text-4xl font-semibold mb-6">Join Us Today</h2>
              <p className="text-gray-800 text-lg max-w-2xl mx-auto mb-8">
                Sign up now and enjoy exclusive discounts, fast delivery, and a
                seamless shopping experience.
              </p>
              <Button
                size="lg"
                className="text-lg px-8 bg-black hover:bg-gray-800 hover:scale-105 transition-transform duration-300"
                asChild
              >
                <Link href="/signup">Get Started</Link>
              </Button>
            </section>

            {/* Footer */}
            <footer className="py-10 text-center text-gray-500">
              <p>
                &copy; {new Date().getFullYear()} ECOMMERCE. All rights
                reserved.
              </p>
            </footer>
          </div>
        ) : (
          <Interests />
        )}
      </BlurFade>
    </main>
  );
}
