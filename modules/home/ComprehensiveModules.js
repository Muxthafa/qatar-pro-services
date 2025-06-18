import { servicesCardContent } from "@/data/home";
import ComprehensiveCard from "@/components/home/ComprehensiveCard";

const ComprehensiveGridSection = () => (
  <section className="max-w-6xl mx-auto py-16 bg-[#2C2C2C] rounded-xl px-8">
    <h2 className="text-[#DFFF4E] font-inter-tight-medium text-3xl mb-12 text-center">
      Our Comprehensive Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicesCardContent.map((service, idx) => (
        <ComprehensiveCard
          key={idx}
          iconClass={service.iconClass}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </section>
);

export default ComprehensiveGridSection;
