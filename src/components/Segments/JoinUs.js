import { Divider, Segment, Container, Header,Image } from "semantic-ui-react";

const JoinUs = () =>{
    return(
      <div>
          <Segment style={{ padding: "5em 0em 0em 0em" }} vertical>
        <Container text>
          <Divider
            as="h2"
            className="header"
            horizontal
            style={{ margin: "3em 0em 2em", textTransform: "uppercase" }}
          >
            <p>Unete a Nosotros</p>
          </Divider>
  
          <Header as="h3" style={{  fontSize: "1.5em",
                    margin: "1em 2.5em",
                    textAlign: "center"}}>
            Quieres ser parte de nuestro equipo?
          </Header>
          <p style={{ fontSize: "1.33em",
                    margin: "1em 3em",
                    textAlign: "center"
                    }}>
            Buscamos perfil entre 18 y 50 anos sin importar nacionalidad. 
            Modelos comprometidas y con ganas de ganar ingresos altos.
          </p>
        </Container>
        <Image src="https://i.imgur.com/n4B2ntK.jpg" />
      </Segment>
      </div>
    )
  }

  export default JoinUs;