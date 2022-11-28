import {
  Segment,
  Container,
  Divider,
  List,
  Grid,
  Image,
} from "semantic-ui-react";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { SlPhone } from "react-icons/sl"

const Contact = () => {
  return (
    <div>
      <Segment style={{ padding: "1em 0em 0em 0em" }} vertical>
        <Container text>
          <Divider
            as="h2"
            className="header"
            horizontal
            style={{ margin: "1em 0em 2em", textTransform: "uppercase" }}
          >
            <p>Contacto</p>
          </Divider>
          <Grid centered>
            <Grid.Row>
              <Grid.Column width={5} centered style={{ textAlign: "center" }}>
                <List link style={{ fontSize: "0.9em" }}>
                  <List.Item
                    style={{
                      wordWrap: "break-word",
                      color: "rgba(207, 160, 18, 1)",
                    }}
                  >
                    <FaRegEnvelope size="3.3em" />
                    <br /> info@dvinemodels.com
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={5} centered style={{ textAlign: "center" }}>
                <List link style={{ fontSize: "0.9em" }}>
                  <List.Item
                    as="a"
                    style={{ color: "rgba(207, 160, 18, 1)" }}
                    href="https://www.instagram.com/dvinemodels/"
                  >
                    <FaInstagram size="3.3em" /> <br /> dvinemodels
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={5} centered style={{ textAlign: "center" }}>
                <List link style={{ fontSize: "0.9em" }}>
                  <List.Item  style={{ color: "rgba(207, 160, 18, 1)" }}>
                    <SlPhone size="3.3em" /> <br /> (+34) 613 56 53 98
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Image src="https://i.imgur.com/vGf9MDu.jpg" />
      </Segment>
    </div>
  );
};

export default Contact;
