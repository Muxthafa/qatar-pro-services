import ServiceSection from "@/components/home/ServiceSection";
import { servicesData } from "@/data/home/index";
const ServicesModules = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 md:px-8">
      {servicesData.map((service, idx) => (
        <ServiceSection
          key={idx}
          title={service.title}
          description={service.description}
          features={service.features}
        />
      ))}
    </section>
  );
};

export default ServicesModules;
