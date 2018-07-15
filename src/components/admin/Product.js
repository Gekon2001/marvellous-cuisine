import React from 'react';

import ImageUploader from 'Components/image-uploader/ImageUploader';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {};

  handleSubmit = (e) => {};

  render() {
    const { name, category, price, amount, description } = this.props;
    const { handleChange, handleSubmit } = this;

    return (
      <form onSubmit={handleSubmit}>
        <div className={'form-group'}>
          <label htmlFor='nameInput'>Name</label>
          <input
            type={'text'}
            id={'nameInput'}
            placeholder={'Product Name'}
            className={'form-control'}
            name={'name'}
            value={name}
            onChange={handleChange} />
        </div>
        <div className={'form-group'}>
          <label htmlFor={'categorySelect'}>Last Name</label>
          <select id={'categorySelect'} value={category} onChange={handleChange}>
            <option value={'cakes'}>Cakes</option>
            <option value={'drinks'}>Drinks</option>
          </select>
        </div>
        <div className={'form-group'}>
          <label htmlFor={'priceInput'}>Price</label>
          <input
            type={'number'}
            id={'priceInput'}
            placeholder={'Price'}
            className={'form-control'}
            name={'price'}
            value={price}
            onChange={handleChange} />
        </div>
        <div className={'form-group'}>
          <label htmlFor={'descriptionInput'}>Description</label>
          <textarea
            id={'descriptionInput'}
            placeholder={'Description'}
            className={'form-control'}
            name={'description'}
            value={description}
            onChange={handleChange} />
        </div>
        <div className={'form-group'}>
          <label htmlFor={'amountInput'}>Password</label>
          <input
            type={'number'}
            id={'amountInput'}
            placeholder={'Amount'}
            className={'form-control'}
            name={'amount'}
            value={amount}
            onChange={handleChange} />
        </div>

        <div className={'form-group'}>
          <ImageUploader />
        </div>

        <button type={'submit'} className={'btn action-button'}>Save</button>
      </form>
    );
  }
}