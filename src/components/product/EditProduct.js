import React from 'react';
import {
  Grid,
  Row,
  Col,
  Label,
} from 'react-bootstrap';


export default class EditProduct extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col smOffset={1} sm={}>
            <Label>Name</Label>
          </Col>
        </Row>
        <Row>

        </Row>
        <form method={'POST'} action={'/api/product'}>

        </form>
      </Grid>
    );
  }

}