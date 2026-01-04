import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "paulabakada@gmail.com",
      href: "mailto:paulabakada@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+234 812 515 7424",
      href: "tel:08125157424",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Lagos State, Nigeria",
      href: "#",
    },
  ];

  return (
    <section
      className="py-32 bg-black dark:bg-[#1b4444] text-white dark:text-white transition-colors duration-500"
      id="contact"
    >
      <div className="max-w-4xl px-6 mx-auto text-center">
        <div className="mb-16">
          <h2 className="mb-6 text-6xl font-black text-white dark:text-white">
            Let's Build
            <span className="block text-[#A3F323] dark:text-[#A3F323]">
              Something Great
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-400 dark:text-gray-200">
            With 3+ years of experience in HR tech, eCommerce, LMS, Food Tech,
            and SaaS products, plus expertise in AI systems development and job
            search automation, I'm ready to help bring your next project to life
            with modern, intelligent solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3 sm:gap-8 sm:mb-16">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#A3F323] dark:bg-[#A3F323] rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent
                    size={20}
                    className="text-black sm:text-2xl dark:text-black"
                  />
                </div>
                <p className="mb-2 text-xs font-medium text-gray-400 sm:text-sm dark:text-gray-300">
                  {item.label}
                </p>
                {item.href !== "#" ? (
                  <a
                    href={item.href}
                    className="text-white dark:text-white hover:text-[#A3F323] dark:hover:text-[#A3F323] transition-colors duration-300 font-medium text-sm sm:text-base"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-white dark:text-white sm:text-base">
                    {item.value}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 mb-8 sm:gap-6 sm:mb-12">
          <a
            href="https://github.com/paulynson"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 rounded-2xl flex items-center justify-center hover:bg-[#A3F323] dark:hover:bg-[#A3F323] hover:text-black dark:hover:text-black transition-all duration-300 group"
          >
            <FaGithub
              size={20}
              className="transition-transform duration-300 sm:text-2xl group-hover:scale-110"
            />
          </a>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400 dark:text-gray-300">
            Crafted with passion.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
