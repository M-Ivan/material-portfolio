import { AnimationContext, SectionData } from "context/animations.context";
import React, { useRef, useState } from "react";

const AnimationProvider: React.FC = (props) => {
  const [headerAnimation, setHeaderAnimation] = useState<boolean>(false);
  const [aboutAnimation, setAboutAnimation] = useState<boolean>(false);
  const [portfolioAnimation, setPortfolioAnimation] = useState<boolean>(false);
  const [contactAnimation, setContactAnimation] = useState<boolean>(false);

  const header = useRef<SectionData | null>(null);
  const about = useRef<SectionData | null>(null);
  const folio = useRef<SectionData | null>(null);
  const contact = useRef<SectionData | null>(null);

  return (
    <AnimationContext.Provider
      value={{
        header,
        about,
        folio,
        contact,
        headerAnimation,
        setHeaderAnimation,
        aboutAnimation,
        setAboutAnimation,
        portfolioAnimation,
        setPortfolioAnimation,
        contactAnimation,
        setContactAnimation,
      }}
    >
      {props.children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
