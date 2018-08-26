import React from 'react';

class ProductThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
    this.props.onClick(this.props.code);
  }

  render() {
    const { price, url, label, title, description } = this.props;
    const priceText = `Price: ${price}$`;

    return (
      <div className={'product-thumbnail'}>
        <figure style={{width: '100%'}} onClick={this.handleClick}>
          <img src={url}
               style={{width: '100%'}}
               alt=""/>
          <div className={'overlay-image'}>
            <span className={'label-image'}>{label}</span>
          </div>
        </figure>
        <div className={'info'}>
          <p className={'title'}>{title}</p>
          <p>{priceText}</p>
          <p>{description}</p>
        </div>

      </div>
    );
  }
}

export default ProductThumbnail;
