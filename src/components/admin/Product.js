import React from 'react';

import ImageUploader from 'Components/image-uploader/ImageUploader';
import utils from 'Utils';

export default class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state  = {
      name: '',
      category: '',
      description: '',
      price: 0,
      amount: 0,
      published: false,
      pictures: []
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleGalleryChange = this.handleGalleryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleFieldChange(e) {
    const name = e.target.getAttribute('name');
    const value = e.target.value;
    this.setState({
      [name]: value,
      changed: true,
    });
  }

  handleGalleryChange({ id, url, changeType }) {
    const { pictures } = this.state;
    let updatedPictures = null;

    switch(changeType) {
      case 'ADD':{
        updatedPictures = [...pictures, { id, url }];
      }
      case 'DELETE': {
        updatedPictures = pictures.filter(p => p.id !== id);
      }
    }

    updatedPictures && this.setState({
      ...this.state,
      pictures: updatedPictures,
      changed: true,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, category, price, amount, description, pictures, code } = this.state;

    const requestData = {
      name,
      category,
      price,
      amount,
      description,
      pictures,
    };

    (code ? utils.request.patch : utils.request.post)('/api/product', requestData).then((response) => {
      if (response.error)
        return console.error(response.error);

      alert('Product saved. IMPLEMENT');

    });

    return false;

  }

  handleCancel(e) {
    const { changed } = this.state;
    if (!changed || confirm('Are you sure?')) {
      this.props.history.push('/admin/products');
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  render() {
    const { name, category, price, amount, description, changed } = this.state;
    const { handleFieldChange, handleSubmit, handleCancel, handleGalleryChange } = this;

    return (
      <div className={'col'}>
        <form onSubmit={handleSubmit}>
          <div className={'row form-controls-row'}>
            <div className={'col-sm-3'}>
              <label htmlFor='nameInput'>Name</label>
            </div>
            <div className={'col-sm'}>
              <input
                type={'text'}
                id={'nameInput'}
                placeholder={'Product Name'}
                className={'input-control'}
                name={'name'}
                value={name}
                onChange={handleFieldChange} />
            </div>
          </div>
          <div className={'row form-controls-row'}>
            <div className={'col-sm-3'}>
              <label htmlFor={'categorySelect'}>Category</label>
            </div>
            <div className={'col-sm-3'}>
              <select id={'categorySelect'} value={category} onChange={handleFieldChange}>
                <option value={'cakes'}>Cakes</option>
                <option value={'drinks'}>Drinks</option>
              </select>
            </div>
          </div>
          <div className={'row form-controls-row'}>
            <div className={'col-sm-3'}>
              <label htmlFor={'priceInput'}>Price</label>
            </div>
            <div className={'col'}>
              <input
                type={'number'}
                id={'priceInput'}
                placeholder={'Price'}
                className={'form-control'}
                name={'price'}
                value={price}
                onChange={handleFieldChange} />
            </div>

          </div>
          <div className={'row form-controls-row'}>
            <div className={'col-sm-3'}>
              <label htmlFor={'descriptionInput'}>Description</label>
            </div>
            <div className={'col'}>
              <textarea
                id={'descriptionInput'}
                placeholder={'Description'}
                className={'form-control'}
                name={'description'}
                value={description}
                onChange={handleFieldChange} />
            </div>

          </div>
          <div className={'row form-controls-row'}>
            <div className={'col-sm-3'}>
              <label htmlFor={'amountInput'}>Amount</label>
            </div>
            <div className={'col'}>
              <input
                type={'number'}
                id={'amountInput'}
                placeholder={'Amount'}
                className={'form-control'}
                name={'amount'}
                value={amount}
                onChange={handleFieldChange} />
            </div>

          </div>

          <div className={'row form-controls-row'}>
            <div className={'col'}>
              <ImageUploader onChange={handleGalleryChange}/>
            </div>
          </div>
          <div className={'row form-buttons-row'}>
            <button disabled={ !changed} type={'submit'} className={'action-button'}>Save</button>
            <button type={'button'} className={'action-button'} onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }

}