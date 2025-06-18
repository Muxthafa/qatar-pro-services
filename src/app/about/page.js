import Image from "next/image";
import StepCard from "@/components/about/StepCard";
import FeatureSection from "@/components/about/FeaturesSection";
import StatBox from "@/components/about/StatBox";
import { stats, steps, features } from "@/data/about";

function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
      {stats.map((stat, index) => (
        <StatBox key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}

function FeaturesList() {
  return (
    <div className="space-y-12">
      {features.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}
    </div>
  );
}

function StepsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {steps.map((step, index) => (
        <StepCard
          key={index}
          icon={step.icon}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#1B1B1B] px-4 md:px-8 flex flex-col animate-fade-in">
      <div className="pt-[100px] md:pt-[160px] px-4 md:px-8 flex-grow">
        <div className="max-w-6xl mx-auto opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_forwards]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <Image
              src="https://ucarecdn.com/378d4e13-6b43-46d9-8ad6-f70aa1dc8768/-/format/auto/"
              alt="ITS Trading and Services"
              width={1500}
              height={600}
              className="w-full h-[400px] md:h-[600px] object-contain rounded-lg"
            />
            <div>
              <h1 className="text-[#F6F6F6] font-inter-tight-medium text-3xl md:text-5xl mb-6">
                International Trading and Services
              </h1>
              <p className="text-[#B1B1B1] font-inter-tight-regular text-lg mb-6">
                ITS Trading and Services is a leading business solutions
                provider in Qatar, specializing in comprehensive business setup
                and PRO services. We offer end-to-end solutions for companies
                looking to establish and grow their presence in Qatar&#39;s
                dynamic market.
              </p>
              <p className="text-[#B1B1B1] font-inter-tight-regular text-lg mb-6">
                Our services include 100% foreign ownership company formation,
                business consulting, PRO services, legal translation, document
                attestation, and complete visa assistance. We pride ourselves on
                providing expert guidance through Qatar&#39;s business landscape
                with quick processing times and comprehensive support.
              </p>
              <p className="text-[#B1B1B1] font-inter-tight-regular text-lg mb-12">
                With our deep understanding of Qatar&#39;s business regulations
                and years of experience, we ensure a smooth and efficient
                process for all your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Why Choose Us Section */}
      <div className="mb-16">
        <h2 className="text-[#DFFF4E] font-inter-tight-medium text-3xl mb-8 text-center">
          Why Choose ITS Trading and Services?
        </h2>
        <p className="text-[#B1B1B1] font-inter-tight-regular text-lg text-center mb-12 max-w-3xl mx-auto">
          We simplify the complex process of business establishment in Qatar,
          providing end-to-end solutions with expertise and efficiency.
        </p>

        {/* Achievement Numbers */}
        <StatsGrid />

        {/* Our Process */}
        <h2 className="text-[#DFFF4E] font-inter-tight-medium text-3xl mb-8 text-center">
          How We Work
        </h2>
        <StepsSection />

        {/* Services Overview with new image-based layout */}
        <h2 className="text-[#DFFF4E] font-inter-tight-medium text-3xl mb-12 text-center">
          Why Consult ITS?
        </h2>
        <FeaturesList />
      </div>
    </div>
  );
}
