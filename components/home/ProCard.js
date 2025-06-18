const ProServiceCard = ({ iconClass, title }) => (
  <div className="flex items-center space-x-4 bg-[#1B1B1B] p-12 rounded-lg hover:bg-[#252525] transition-colors duration-300">
    <div className="bg-[#DFFF4E] p-3 rounded-lg">
      <i className={`${iconClass} text-[#1B1B1B] text-2xl`} />
    </div>
    <h3 className="text-[#F6F6F6] font-inter-tight-medium text-xl">{title}</h3>
  </div>
);

export default ProServiceCard;
