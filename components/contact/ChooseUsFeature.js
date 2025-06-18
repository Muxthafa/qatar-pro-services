export default function ChooseUsFeature({ title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <i className="fas fa-check-circle text-[#DFFF4E] text-xl mt-1"></i>
      <div>
        <h3 className="text-[#F6F6F6] font-inter-tight-medium text-xl mb-2">
          {title}
        </h3>
        <p className="text-[#B1B1B1]">{description}</p>
      </div>
    </div>
  );
}
