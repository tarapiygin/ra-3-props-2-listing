import './Listing.css';
import PropTypes from 'prop-types';

export default function Listing(props) {
  const priceView = (currencyCode, price) => {
    switch (currencyCode) {
      case 'USD':
        return '$' + price;
      case 'EUR':
        return '€' + price;
      default:
        return price + ' ' + currencyCode;
    }
  }
  const quantityClassNameView = (quantity) => {
    let name = '';
    if (quantity <= 10) {
      name = 'low';
    } else if (quantity <= 20) {
      name = 'medium';
    } else {
      name = 'high';
    }
    return 'item-quantity level-' + name;
  }
  const itemsView = props.items.map((item) => {
    if (item.state !== 'removed') {
      return (<div className="item" key={item.listing_id}>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} alt={item.title} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{item.title}</p>
          <p className="item-price">{priceView(item.currency_code, item.price)}</p>
          <p className={quantityClassNameView(item.quantity)}>{item.quantity} left</p>
        </div>
      </div>)
    }
  });
  return (
    <div className="item-list">
      {itemsView}
    </div>
  )
}


Listing.defaultProps = {
  items: []
};

Listing.propTypes = {
  items: PropTypes.array.isRequired,
}