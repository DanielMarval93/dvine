/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";

import {
  Container,
  Header,
  Image,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

import AboutUs from "./Segments/AboutUs";
import Gallery from "./Segments/Gallery";
import Services from "./Segments/Services";
import JoinUs from "./Segments/JoinUs";
import Contact from "./Segments/Contact";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image
      className="logo"
      src="https://i.imgur.com/0K4iZGu.png"
      style={{
        margin: "auto",
        marginTop: mobile ? "8.6em" : "12.4em",
        maxHeight: mobile ? "5em" : "20em",
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

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented
 easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
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
                  src="https://i.imgur.com/0K4iZGu.png"
                  style={{ maxHeight: "2.6em", margin: "0.5em" }}
                />
                <Menu.Item position="right" style={{ padding: "0px" }}>
                  <Menu.Item as="a" active>
                    Home
                  </Menu.Item>
                  <Menu.Item as="a">Nosotros</Menu.Item>
                  <Menu.Item as="a">Galeria</Menu.Item>
                  <Menu.Item as="a">Servicios</Menu.Item>   
                  <Menu.Item as="a">Contacto</Menu.Item>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    return (
      <Media as={Sidebar.Pushable} at="mobile" fixed="top">
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
              <Menu
              fixed={"top"}
              inverted={true}

              size="large"
              style={{ backgroundColor: "black" }}
            >
              <Container>
                <Image
                  src="https://i.imgur.com/0K4iZGu.png"
                  style={{ maxHeight: "2.6em", margin: "0.5em" }}
                />
                <Menu.Item position="right" style={{ padding: "0px" }}>
                  <Menu.Item as="a">Galeria</Menu.Item>
                  <Menu.Item as="a">Servicios</Menu.Item>
                  <Menu.Item as="a">Contacto</Menu.Item>
                </Menu.Item>
              </Container>
            
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <AboutUs />
    <Gallery />
    <Services />
    <JoinUs />
    <Contact />
  </ResponsiveContainer>
);

export default HomepageLayout;