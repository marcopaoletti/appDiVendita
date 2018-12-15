import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


const BillItem = ({ item }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{`€ ${item.price.toFixed(2)}`}</Text>
    </View>
  );
};

BillItem.propTypes = {
  item: PropTypes.shape().isRequired,
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
