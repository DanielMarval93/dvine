import { Divider, Segment, Grid, Image } from "semantic-ui-react";

const Gallery = () => {
  return (
    <div>
      <Segment style={{ padding: "0em" }} vertical>
        <Divider
          as="h2"
          className="header"
          horizontal
          style={{ margin: "0em 0em 0.5em", textTransform: "uppercase" }}
        >
          <p>Galeria</p>
        </Divider>
        <Grid celled="internally" columns="equal" centered stackable>
          <Grid.Row textAlign="center" >
            <Grid.Column width={7}style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Image bordered rounded src="https://i.imgur.com/MUWPCqK.jpg" />
            </Grid.Column>
            <Grid.Column width={7} style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Image bordered rounded src="https://i.imgur.com/ulFiruB.jpg" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Image
                bordered
                rounded
                src="https://i.imgur.com/6I53fht.jpg"
                style={{ maxHeight: "35em", margin: "auto" }}
              />
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Image
                bordered
                rounded
                src="https://i.imgur.com/fE6mEw7.jpg"
                style={{ maxHeight: "35em", margin: "auto" }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default Gallery;
