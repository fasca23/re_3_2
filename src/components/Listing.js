import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function Listing({items = []}) {
  return (
    <div className="item-list">
      {items.map((item) => <Item item={item} key={item.listing_id}/>)}
    </div>
  );
}

Listing.propTypes = {
  items: PropTypes.array.isRequired,
}
  
export default Listing;