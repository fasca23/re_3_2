import React from 'react';
import PropTypes from 'prop-types';

function Item({item}) {
  if (item?.title && item.title.length > 50) item.title = item.title.substr(0, 49) + '...';
  if (!item?.title) item.title = 'Нет данных';

  switch (item.currency_code) {
    case 'USD':
      item.currency_code = '$';
      break;
    case 'EUR':
      item.currency_code = '€';
      break;
    default:
      break;
  }

  if (item.quantity < 10) {
    item.level = 'level-low';
  } else if (item.quantity > 20) {
    item.level = 'level-medium';
  } else {
    item.level = 'level-high';
  }

let prise = undefined
if (item.currency_code === '$' || item.currency_code === '€') {
  prise = <p className="item-price">{item.currency_code || 'Нет данных'} {item.price || 'Нет данных'}</p>
} else {
  prise = <p className="item-price">{item.price || 'Нет данных'} {item.currency_code || 'Нет данных'}</p>
}

let quantity = undefined
if (item.currency_code) {
    quantity = <p className={item.level + ' item-quantity'}>{item.quantity || 'Нет данных'} шт. в наличии</p>
} else {
    quantity = <p className={item.level + ' item-quantity'}>Тавара нет в наличии</p>
}

let image = undefined
if (item.currency_code) {
    image = <a href={item.url}>
                <img alt='Product' src={item.MainImage?.url_570xN}></img>
            </a>
} else {
    image = <p> Изображение отсутствует</p>
}


  return (
    <div className="item">
      <div className="item-image">

        {image}

      </div>
      <div className="item-details">
        <p className="item-title">{item.title}</p>

        {prise}
        {quantity}
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Item;