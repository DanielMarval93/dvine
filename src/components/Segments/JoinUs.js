import { Divider, Segment, Container, Header } from "semantic-ui-react";

const JoinUs = () => {
  return (
    <div>
      <Segment style={{ padding: "1em 0em 0em 0em" }} vertical>
        <Container text>
          <Divider
            as="h2"
            className="header"
            horizontal
            style={{ margin: "3.5em 0em 1em", textTransform: "uppercase" }}
          >
            <p>Únete a Nosotros</p>
          </Divider>

          <Header
            as="h3"
            style={{
              fontSize: "1.5em",
              margin: "0em 1em 0em 1em",
              textAlign: "center",
              color: "rgba(207, 160, 18, 1)"
            }}
          >
            ¿Quieres ser parte de nuestro equipo?
          </Header>
          <p
            style={{
              fontSize: "1.33em",
              margin: "1em 3em",
              textAlign: "center",
            }}
          >
            Buscamos perfil entre 18 y 50 años sin importar nacionalidad.
            Modelos comprometidas y con ganas de ganar ingresos altos.
          </p>
        </Container>
      </Segment>
    </div>
  );
};

export default JoinUs;
