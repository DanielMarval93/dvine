import { Divider, Segment, Grid, Container, Header } from "semantic-ui-react";
import {
  FaChartLine,
  FaCrown,
  FaUserTie,
  FaCamera,
  FaFilm,
} from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <Segment style={{ padding: "5em 0em 0em 0em" }} vertical>
        <Container text>
          <Divider
            as="h2"
            className="header"
            horizontal
            style={{ margin: "0em 0em 2em", textTransform: "uppercase" }}
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
                  style={{ fontSize: "1.5em", color: "rgba(207, 160, 18, 1)" }}
                >
                  Marca
                </Header>
                <FaCrown size="2em" />
                <p style={{ fontSize: "1.33em" }}>
                  Creación y gestión de la marca personal.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Header
                  as="h4"
                  style={{ fontSize: "1.5em", color: "rgba(207, 160, 18, 1)" }}
                >
                  Marketing
                </Header>
                <FaChartLine size="2em" />
                <p style={{ fontSize: "1.33em" }}>
                  Marketing en redes sociales y aumento de notoriedad.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Header
                  as="h4"
                  style={{ fontSize: "1.5em", color: "rgba(207, 160, 18, 1)" }}
                >
                  Gestoria
                </Header>
                <FaUserTie size="2em" />
                <p style={{ fontSize: "1.33em" }}>
                  Asesoramiento y acompañamiento gestor.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header
                  as="h4"
                  style={{ fontSize: "1.5em", color: "rgba(207, 160, 18, 1)" }}
                >
                  Fotografia
                </Header>
                <FaCamera size="2em" />
                <p style={{ fontSize: "1.33em" }}>
                  Sesiones de fotografía con fotógrafos profesionales en
                  exterior y estudio.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Header
                  as="h4"
                  style={{ fontSize: "1.5em", color: "rgba(207, 160, 18, 1)" }}
                >
                  Video
                </Header>
                <FaFilm size="2em" />
                <p style={{ fontSize: "1.33em" }}>
                  Rodajes con film-makers profesionales para producciones en
                  video.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default Services;
