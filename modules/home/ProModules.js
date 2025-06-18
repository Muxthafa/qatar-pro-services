import { proData } from "@/data/home";
import ProCard from "@/components/home/ProCard";

const QatarProServices = () => (
  <section className="max-w-6xl mx-auto py-16">
    <div className="bg-[#2C2C2C] rounded-xl p-8 md:p-12">
      <h2 className="text-[#DFFF4E] font-inter-tight-medium text-3xl mb-6 text-center">
        Qatar PRO Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {proData.map((service, index) => (
          <ProCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default QatarProServices;
