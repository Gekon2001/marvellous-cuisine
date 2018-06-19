import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Grid,
  Row,
  Col
} from 'react-bootstrap';

function ImagePreview(props) {
  return(
    <div className={'container'}>
      <div className={'row'}>
        <div className={'col-sm-4'}>
          <img src={props.url} />
        </div>
      </div>
    </div>
  );
}

export default class EditProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    if (!acceptedFiles.length)
      return;

    const url = `//localhost:3000/upload`;

    var images = this.state.product.gallery || [];
    images.push({});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert('NOT IMPLEMENTED');
    const url = e.target.getAttribute('action');
    const method = this.state.product._id ? 'PATCH' : 'POST';
    console.log(url,  method);
    return false;
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col smOffset={2} sm={10}>
            <form onSubmit={this.handleSubmit} action={'api/product'}>
              <FormGroup controlId={'name'} name={'name'}>
                <ControlLabel>Name</ControlLabel>
                <FormControl type={'text'}/>
              </FormGroup>
              <FormGroup controlId="description" name={'description'}>
                <ControlLabel>Description</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" />
              </FormGroup>
              <FormGroup controlId="categorySelect" name={'category'}>
                <ControlLabel>Category</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="fruits">fruits</option>
                  <option value="vegs">vegs</option>
                  <option value="sweets">sweets</option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId={'price'} name={'price'}>
                <ControlLabel>price</ControlLabel>
                <FormControl type={'text'}/>
              </FormGroup>
              <FormGroup controlId={'gallery'} name={'pictures'}>
                <ControlLabel>Gallery</ControlLabel>
                <Dropzone onDrop={this.onDrop} accept={'image/*'}/>
              </FormGroup>
              <FormGroup controlId={'preview-container'}>
                {this.state.product.gallery.map((img) => {
                  return <ImagePreview url={img.url}/>
                })}
              </FormGroup>
              <Button type={'submit'}>Save Changes</Button>
            </form>
          </Col>
        </Row>
      </Grid>


    );
  }

}
