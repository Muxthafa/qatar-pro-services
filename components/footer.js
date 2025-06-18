const footer = () => {
  return (
    <footer className="bg-[#1B1B1B] border-t border-[#4B4B4B] py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-[#DFFF4E] font-inter-tight-medium text-xl mb-3 md:mb-4">
              Contact
            </h3>
            <p className="text-[#B1B1B1] font-inter-tight-regular">
              its.qatar@outlook.com
            </p>
            <p className="text-[#B1B1B1] font-inter-tight-regular">
              +974 70604042
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-[#DFFF4E] font-inter-tight-medium text-xl mb-3 md:mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-[#B1B1B1] hover:text-[#DFFF4E]">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-[#B1B1B1] hover:text-[#DFFF4E]">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-[#B1B1B1] hover:text-[#DFFF4E]">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-[#DFFF4E] font-inter-tight-medium text-xl mb-3 md:mb-4">
              Location
            </h3>
            <p className="text-[#B1B1B1] font-inter-tight-regular">
              Building no.14, Matar Qadeem PO Box 22200
            </p>
            <p className="text-[#B1B1B1] font-inter-tight-regular">
              Doha, Qatar
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-[#B1B1B1] font-inter-tight-regular text-sm md:text-base">
            © 2024 ITS Business Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
