import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-elements';


const ProductItem = ({ name, price, img, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card title={`${name}, ${price} euro`}>
        <Image
          style={{ width: '100%', height: 150 }}
          source={{ uri: img }}
        />
      </Card>
    </TouchableOpacity>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

ProductItem.defaultProps = {
  onPress: null,
};

export { ProductItem };
