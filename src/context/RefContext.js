import { createContext, useState } from "react";

const RefContext = createContext();

function Provider({ children }) {
  const [gallerySection, setGallerySection] = useState(null);
  const [contactSection, setContactSection] = useState(null);
  const [joinUsSection, setJoinUsSection] = useState(null);
  const [servicesSection, setServicesSection] = useState(null);
  const [aboutSection, setAboutSection] = useState(null);

  const refs = {
    aboutSection,
    setAboutSection,
    gallerySection,
    setGallerySection,
    contactSection,
    setContactSection,
    joinUsSection,
    setJoinUsSection,
    servicesSection,
    setServicesSection,
    scrollDown: (ref, yValue) => {
      window.scrollTo({
        top: ref.current.offsetTop - yValue,
        behavior: "smooth",
      });
    },
    goToTop: () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  };

  return <RefContext.Provider value={refs}>{children}</RefContext.Provider>;
}

export { Provider };
export default RefContext;
