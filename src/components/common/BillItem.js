import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';


const BillItem = ({ item, removeItem }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={() => removeItem()}>
      <Text style={styles.productName}>{item.name}</Text >
      <Text style={styles.productPrice}>{`€ ${item.price.toFixed(2)}`}</Text>
    </TouchableOpacity>
  );
};

BillItem.propTypes = {
  item: PropTypes.shape().isRequired,
  removeItem: PropTypes.func.isRequired,
};

const styles = {
  row: {
    width: '100%',
    paddingHorizontal: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
  },
  productName: {
    fontSize: 15,
  },
  productPrice: {
    fontSize: 15,
    color: 'grey',
  },
};


export { BillItem };
