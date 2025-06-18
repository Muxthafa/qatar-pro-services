// components/ServiceSection.jsx
export default function ServiceSection({ title, description, features }) {
  return (
    <div className="bg-[#2C2C2C] rounded-xl p-8 md:p-12 mb-12">
      <h2 className="text-[#DFFF4E] font-inter-tight-medium text-3xl mb-6">
        {title}
      </h2>
      <div className="text-[#B1B1B1] space-y-6">
        {description.map((text, index) => (
          <p className="text-lg" key={index}>
            {text}
          </p>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <i className="fas fa-check-circle text-[#DFFF4E] text-xl mt-1"></i>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
