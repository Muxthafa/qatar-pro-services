const ComprehensiveCard = ({ iconClass, title, description }) => (
  <div className="bg-[#1B1B1B] p-6 rounded-lg hover:bg-[#252525] transition-colors duration-300">
    <i className={`${iconClass} text-[#DFFF4E] text-2xl mb-4`}></i>
    <h3 className="text-[#F6F6F6] font-inter-tight-medium text-lg mb-3">
      {title}
    </h3>
    <p className="text-[#B1B1B1]">{description}</p>
  </div>
);

export default ComprehensiveCard;
