import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-background text-foreground py-20">
      <div className="container mx-auto text-center px-4">
        {/* Tag */}
        <div className="inline-block font-bold bg-purple-100 text-purple-700 text-sm px-2  rounded-full mb-6">
          Made for Homes and Businesses across Africa
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
          Choose Your Solar Package. <br />
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Get a Custom Quote in Minutes.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Solar made simple: Pick a standardized package, request a quote, and
          we&apos;ll tailor it to your exact needs.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            href="/#power-in-action"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
          >
            Explore Packages →
          </Link>
          <Link
            href="/#success-storie"
            className="border-gray-400 hover:bg-gray-400 font-semibold py-2 px-4 rounded"
          >
            See Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}
