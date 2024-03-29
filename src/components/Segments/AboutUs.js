import { Divider, Segment, Grid, Header, Image } from "semantic-ui-react";

const AboutUs = () => {
  return (
    <div>
      <Segment style={{ padding: "3.7em 0em 0em" }} vertical>
        <Divider
          as="h2"
          className="header"
          horizontal
          style={{ margin: "0em 0em 1em", textTransform: "uppercase" }}
        >
          <p>Acerca de nosotros</p>
        </Divider>
        <Grid container centered stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={12}>
              <Image
                className="aboutUsImage"
                rounded
                size="big"
                centered
                src="https://i.imgur.com/Plp71HY.jpeg"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row divided>
            <Grid.Column width={8}>
              <Header
                as="h3"
                style={{
                  fontSize: "1.6em",
                  margin: "1em 1em",
                  textAlign: "center",
                  color: "rgba(207, 160, 18, 1)",
                }}
              >
                Nos esforzamos para hacer crecer tu audiencia
              </Header>
              <p
                style={{
                  fontSize: "1.33em",
                  margin: "1em 1.5em",
                  textAlign: "justify",
                }}
              >
                Dvine models es una agencia de markedting y publicidad para
                modelos que trabajan en plataformas de contenido para adultos
                como Only fans. Nos esforzamos para hacer crecer tu audiencia y
                así obtener el máximo de resultados. Utilizando nuestros
                conocimientos, experiencia y contactos, generamos tráfico
                online, gestionamos las cuentas y la marca personal de cada
                modelo.
              </p>
            </Grid.Column>

            <Grid.Column width={8}>
              <Header
                as="h3"
                style={{
                  fontSize: "1.6em",
                  margin: "1em 1em",
                  textAlign: "center",
                  color: "rgba(207, 160, 18, 1)",
                }}
              >
                Haz crecer tu alcance y llega a tu público objetivo
              </Header>
              <p
                style={{
                  fontSize: "1.33em",
                  margin: "1em 1.5em",
                  textAlign: "justify",
                }}
              >
                Nos encargamos de la creación, gestión y promoción de la cuenta
                y la marca personal de cada modelo. Contamos con un equipo
                profesional, canales propios de difusión y múltiples casos de
                éxito. Deja que Dvine models haga todo el trabajo por ti y
                empieza a vivir de los ingresos generado
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default AboutUs;
