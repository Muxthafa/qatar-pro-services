import Image from "next/image";
import ServicesModules from "@/modules/home/ServicesModules";
import QatarProServices from "@/modules/home/ProModules";
import ComprehensiveGridSection from "@/modules/home/ComprehensiveModules";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1B1B1B] flex flex-col">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/home-bg.jpg" // Path relative to public/images
            alt="Background Image"
            layout="fill" // Fills the entire parent container
            objectFit="cover" // Ensures the image covers the container while maintaining aspect ratio
            objectPosition="center" // Centers the image
            quality={75} // Optional: control the image quality for optimization
            priority // Optional: prioritize loading of this background image
            style={{
              filter: "grayscale(100%) brightness(40%)", // Apply grayscale and brightness filter
            }}
          />
        </div>
        <div className="relative pt-[100px] md:pt-[160px] px-4 md:px-8 h-full flex items-center">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-[#dbf46a] font-inter-tight-medium text-3xl md:text-5xl lg:text-7xl mb-4">
              Your Gateway to Business Success in Qatar
            </h1>
            <p className="text-[#F6F6F6] font-inter-tight-regular text-lg md:text-xl max-w-3xl mx-auto">
              Professional business setup and PRO services to help you establish
              and grow your presence in Qatar
            </p>
          </div>
        </div>
      </div>

      {/* Mission, Values, and Vision Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/business.jpg"
              alt="Business in Qatar"
              fill // This replaces layout="fill" in Next.js 13+
              className="object-cover"
              priority // Optional: speeds up loading for hero images
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-[#DFFF4E] font-inter-tight-medium text-3xl mb-4">
                Our Mission
              </h2>
              <p className="text-[#B1B1B1] text-lg">
                To empower businesses with seamless company formation and PRO
                services in Qatar, ensuring their success through expert
                guidance and comprehensive support at every step of their
                journey.
              </p>
            </div>
            <div>
              <h2 className="text-[#DFFF4E] font-inter-tight-medium text-3xl mb-4">
                Our Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-star text-[#DFFF4E] mt-1"></i>
                  <p className="text-[#B1B1B1]">Integrity & Transparency</p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-star text-[#DFFF4E] mt-1"></i>
                  <p className="text-[#B1B1B1]">Excellence in Service</p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-star text-[#DFFF4E] mt-1"></i>
                  <p className="text-[#B1B1B1]">Client-Centric Approach</p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-star text-[#DFFF4E] mt-1"></i>
                  <p className="text-[#B1B1B1]">Professional Expertise</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[#DFFF4E] font-inter-tight-medium text-3xl mb-4">
                Our Vision
              </h2>
              <p className="text-[#B1B1B1] text-lg">
                To be the leading business solutions provider in Qatar,
                recognized for our commitment to excellence, innovation, and
                creating lasting value for our clients in their business
                establishment journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Detailed Services Sections */}
      <ServicesModules />

      {/* Updated Comprehensive Services Section */}
      <ComprehensiveGridSection />

      {/* Qatar PRO Services Section */}
      <QatarProServices />
    </div>
  );
}
