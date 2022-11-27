/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  FaChartLine,
  FaInstagram,
  FaCrown,
  FaUserTie,
  FaCamera,
  FaFilm,
  FaRegEnvelope,
  FaPhone
} from "react-icons/fa";

import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

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
    <Header
      className="gradient"
      as="h1"
      content="Dvine Models"
      inverted
      style={{
        fontSize: mobile ? "4em" : "8em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "0.9em" : "0.55em",
        fontFamily: "australiaCustom",
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
    {/*<Button
      style={{
        marginTop: mobile ? "0.6em" : "1em",
      }}
    >
      Conocenos
    </Button>*/}
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
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
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">About Us</Menu.Item>
                <Menu.Item as="a">Gallery</Menu.Item>
                <Menu.Item as="a">Services</Menu.Item>
                <Menu.Item as="a">Contact</Menu.Item>
                <Menu.Item position="right">
                  {/*                <Image className='logo' src='https://i.imgur.com/JnmIas6.png' /> */}{" "}
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
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">About Us</Menu.Item>
            <Menu.Item as="a">Gallery</Menu.Item>
            <Menu.Item as="a">Contact</Menu.Item>
            <Menu.Item as="a">Services</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right"></Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
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
    <Segment style={{ padding: "5.7em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16}>
            <Header
              as="h1"
              style={{
                fontSize: "2.6em",
                textAlign: "center",
                padding: "0em 0em 0.8em 0em",
              }}
            >
              A cerca de nosotros
            </Header>
            <Image
              className="aboutUsImage"
              rounded
              size="big"
              src="https://i.imgur.com/Plp71HY.jpeg"
              floated="right"
            />
            <Header as="h3" style={{ fontSize: "2em" }}>
              Nos esforzamos para hacer crecer tu audiencia
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Dvine models es una agencia de representación de modelos en
              plataformas de contenido para adultos como Only fans. Nos
              esforzamos para hacer crecer tu audiencia y así obtener el máximo
              de resultados. Utilizando nuestros conocimientos, experiencia y
              contactos, generamos tráfico online, gestionamos las cuentas y la
              marca personal de cada modelo.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Te damos la posibilidad de que solo tengas que crear el contenido
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Nos encargamos de la creación, gestión y promoción de la cuenta
              para que tu solamente tengas que crear el contenido con nuestro
              asesoramiento. Contamos con un equipo profesional, canales propios
              de difusión y múltiples casos de éxito. Deja que Dvine models haga
              todo el trabajo por ti y empieza a vivir de los ingresos
              generados.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Image bordered rounded src="https://i.imgur.com/MUWPCqK.jpg" />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Image bordered rounded src="https://i.imgur.com/ulFiruB.jpg" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Image bordered rounded src="https://i.imgur.com/6I53fht.jpg" />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Image
              bordered
              rounded
              src="https://i.imgur.com/fE6mEw7.jpg"
              style={{ margin: "0px auto" }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "5em 0em 0em 0em" }} vertical>
      <Container text>
      <Divider
          as="h3"
          className="header"
          horizontal
          style={{ margin: "0em 0em 3em", textTransform: "uppercase" }}
        >
          <p>Servicios</p>
        </Divider>

        <Grid
          container
          columns="equal"
          stackable
          style={{ textAlign: "center" }}
        >
          <Grid.Row>
            <Grid.Column>
              <Header
                as="h4"
                style={{ fontSize: "1.6em", color: "rgba(207, 160, 18, 1)" }}
              >
                Marca
              </Header>
              <FaCrown size='2em'/>
              <p style={{ fontSize: "1.33em" }}>
                Creacion y gestion de la marca personal.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header
                as="h4"
                style={{ fontSize: "1.6em", color: "rgba(207, 160, 18, 1)" }}
              >
                Marketing
              </Header>
              <FaChartLine size='2em'/>
              <p style={{ fontSize: "1.33em" }}>
                Marketing en redes sociales y aumento de notoriedad
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header
                as="h4"
                style={{ fontSize: "1.6em", color: "rgba(207, 160, 18, 1)" }}
              >
                Gestoria
              </Header>
              <FaUserTie size='2em'/>
              <p style={{ fontSize: "1.33em" }}>
                Asesoramiento y acompanamiento gestor.
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header
                as="h4"
                style={{ fontSize: "1.6em", color: "rgba(207, 160, 18, 1)" }}
              >
                Fotografia
              </Header>
              <FaCamera size='2em'/>
              <p style={{ fontSize: "1.33em" }}>
                Sesiones de fotografia con fotografos profeisonales en exterios
                y estudio.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header
                as="h4"
                style={{ fontSize: "1.6em", color: "rgba(207, 160, 18, 1)" }}
              >
                Video
              </Header>
              <FaFilm size='2em'/>
              <p style={{ fontSize: "1.33em" }}>
                Rodajes con filmmakers profesionales para producciones en video.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider
          as="h3"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <p>Unete a Nosotros</p>
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          Quieres ser parte de nuestro equipo?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Buscamos perfil entre 18 y 50 anos sin importar nacionalidad. Modelos
          comprometidas y con ganas de ganar ingresos altos.
        </p>
      </Container>
      <Image src="https://i.imgur.com/n4B2ntK.jpg" />
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row></Grid.Row>
          <Grid.Row>
            <Grid.Column width={6} centered >
              <Header inverted as="h4" content="Contacto" />
              <List link inverted>
                <List.Item as="a"><FaRegEnvelope/> info@dvinemodels.com</List.Item>
                <List.Item as="a"><FaInstagram/> @dvinemodels</List.Item>
                <List.Item as="a"><FaPhone/> (+34) 613 56 53 98</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
