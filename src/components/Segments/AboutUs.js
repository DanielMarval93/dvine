import { Segment, Grid,Header, Image } from "semantic-ui-react"

const AboutUs = () =>{return (<div>
    <Segment style={{ padding: "6.7em 0em" }} vertical>
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
        </div>
    )}

    export default AboutUs;