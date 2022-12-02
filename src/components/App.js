/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { useRef, useState, useEffect, useContext } from "react";
import RefContext from "../context/RefContext";
import "../style/App.css";

import "../style/navbar.css";



import {
  Container,
  Header,
  Image,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

import { FaAngleUp } from "react-icons/fa";

import AboutUs from "./Segments/AboutUs";
import Gallery from "./Segments/Gallery";
import Services from "./Segments/Services";
import JoinUs from "./Segments/JoinUs";
import Contact from "./Segments/Contact";

import Navbar from "./NavBar";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image
      className="logo"
      src="https://i.imgur.com/kL8oZz6.png"
      style={{
        margin: "auto",
        marginTop: mobile ? "8.6em" : "12.4em",
        maxHeight: mobile ? "4.5em" : "20em",
        maxWidth: "100%"
      }}
    />
    <Header
      as="h3"
      content="Agency & Management"
      inverted
      style={{
        fontSize: mobile ? "1.2em" : "2.0em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "0.8em",
        fontFamily: "LEMONMILK-Light",
      }}
    />
    {/*
    <Button
      style={{
        marginTop: mobile ? "0.6em" : "1em",
      }}
    >
      Conocenos
    </Button>
    */}
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

const DesktopContainer = (props) => {
  const [fixed, setFixed] = useState(null);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  const {
    gallerySection,
    servicesSection,
    contactSection,
    joinUsSection,
    aboutSection,
    scrollDown,
    goToTop
  } = useContext(RefContext);

  const { children } = props;

  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 610, padding: "1em 0em" }}
          vertical
        >
          <Menu
            fixed={"top"}
            inverted={true}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
            style={{ backgroundColor: "black" }}
          >
            <Container>
              
                <Image
                  src="https://i.imgur.com/2tEjfCo.png"
                  style={{ maxHeight: "2.6em", margin: "0.5em" }}
                />
              
              <Menu.Item position="right" style={{ padding: "0px" }}>
                <Menu.Item as="a" active onClick={goToTop}>
                  Home
                </Menu.Item>
                <Menu.Item
                  as="a"
                  onClick={() => scrollDown(aboutSection, 20)}
                >
                  Conocenos
                </Menu.Item>
                <Menu.Item
                  as="a"
                  onClick={() => scrollDown(gallerySection, 70)}
                >
                  Galeria
                </Menu.Item>
                <Menu.Item
                  as="a"
                  onClick={() => scrollDown(servicesSection, 50)}
                >
                  Servicios
                </Menu.Item>
                <Menu.Item
                  as="a"
                  onClick={() => scrollDown(joinUsSection, -20)}
                >
                  Unete
                </Menu.Item>
                <Menu.Item
                  as="a"
                  onClick={() => scrollDown(contactSection, 50)}
                >
                  Contacto
                </Menu.Item>
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
      </Visibility>

      {children}
    </Media>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

const MobileContainer = (props) => {
  const { children } = props;

  return (
    <Media as={Sidebar.Pushable} at="mobile" fixed="top">
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 350, padding: "1em 0em" }}
        vertical
      >
          <Navbar/> 
        <HomepageHeading mobile />
      </Segment>

      {children}
    </Media>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const App = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    document.title = 'Dvine Models';
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const ScrollToTop = () => {
    return (
      <div className="top-to-btm">
        {" "}
        {showTopBtn && (
          <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
        )}{" "}
      </div>
    );
  };

  const {
    aboutSection,
    setAboutSection,
    setGallerySection,
    gallerySection,
    contactSection,
    setContactSection,
    joinUsSection,
    setJoinUsSection,
    servicesSection,
    setServicesSection,
    goToTop
  } = useContext(RefContext);

  setGallerySection(useRef(null));
  setContactSection(useRef(null));
  setServicesSection(useRef(null));
  setJoinUsSection(useRef(null));
  setAboutSection(useRef(null));

  return (
    <ResponsiveContainer>
      <ScrollToTop />
      <div ref={aboutSection}>
        <AboutUs />
      </div>
      <div ref={gallerySection}>
        <Gallery/>
      </div>
      <div ref={servicesSection}>
        <Services />
      </div>
      <div ref={joinUsSection}>
        <JoinUs />
      </div>
      <div ref={contactSection}>
        <Contact />
      </div>
    </ResponsiveContainer>
  );
};

export default App;
