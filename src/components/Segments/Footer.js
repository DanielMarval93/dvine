import {  Segment, Container, Grid, List } from "semantic-ui-react";
import {
    FaInstagram,
    FaRegEnvelope,
    FaPhone,
  } from "react-icons/fa";



const Footer = () =>{
    return(
      <div>
        <Segment inverted vertical style={{ padding: "1.6em 0em" }}>
        <Container>
          <Grid divided inverted centered>
            <Grid.Row>
              <Grid.Column width={4} centered style={{ textAlign: "center" }}>
                <List link inverted style={{ fontSize: "0.9em" }}>
                  <List.Item as="a" style={{ wordWrap: "break-word" }}>
                    <FaRegEnvelope size="1.3em" />
                    <br /> info@dvinemodels.com
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4} centered style={{ textAlign: "center" }}>
                <List link inverted style={{ fontSize: "0.9em" }}>
                  <List.Item as="a" href="https://www.instagram.com/dvinemodels/">
                    <FaInstagram size="1.3em" /> <br /> dvinemodels
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4} centered style={{ textAlign: "center" }}>
                <List link inverted style={{ fontSize: "0.9em" }}>
                  <List.Item as="a">
                    <FaPhone size="1.3em" /> <br /> (+34) 613 56 53 98
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </div>
    )
  }

  export default Footer;