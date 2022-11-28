import { Divider, Segment, Grid, Header, Image } from "semantic-ui-react";

const AboutUs = () => {
  return (
    <div>
      <Segment style={{ padding: "6.7em 0em 2em" }} vertical>
      <Divider
                as="h2"
                className="header"
                horizontal
                style={{ margin: "0em 0em 1em", textTransform: "uppercase" }}
              >
                <p>A cerca de nosotros</p>
              </Divider>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
              <Grid.Column width={16}>
              <Header
                as="h3"
                style={{
                  fontSize: "1.6em",
                  margin: "1em 2.5em",
                  textAlign: "center",
                }}
              >
                Nos esforzamos para hacer crecer tu audiencia
              </Header>
              <p
                style={{
                  fontSize: "1.33em",
                  margin: "1em 3em",
                  textAlign: "center",
                }}
              >
                Dvine models es una agencia de representación de modelos en
                plataformas de contenido para adultos como Only fans. Nos
                esforzamos para hacer crecer tu audiencia y así obtener el
                máximo de resultados. Utilizando nuestros conocimientos,
                experiencia y contactos, generamos tráfico online, gestionamos
                las cuentas y la marca personal de cada modelo.
              </p>
              </Grid.Column>
              <Grid.Column width={16}>
              <Image
                className="aboutUsImage"
                rounded
                size="big"
                centered
                src="https://i.imgur.com/Plp71HY.jpeg"
                
              />
              </Grid.Column>
              
              <Grid.Column width={16}>
              <Header
                as="h3"
                style={{
                  fontSize: "1.6em",
                  margin: "1em 2.5em",
                  textAlign: "center",
                }}
              >
                Te damos la posibilidad de que solo tengas que crear el
                contenido
              </Header>
              <p
                style={{
                  fontSize: "1.33em",
                  margin: "1em 3em",
                  textAlign: "center",
                }}
              >
                Nos encargamos de la creación, gestión y promoción de la cuenta
                para que tu solamente tengas que crear el contenido con nuestro
                asesoramiento. Contamos con un equipo profesional, canales
                propios de difusión y múltiples casos de éxito. Deja que Dvine
                models haga todo el trabajo por ti y empieza a vivir de los
                ingresos generados.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default AboutUs;
