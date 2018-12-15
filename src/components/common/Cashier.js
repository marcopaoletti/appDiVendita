import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { BillItem } from 'common';
import { resetBill } from 'actions';

class Cashier extends Component {
  render() {
    return (
      <View style={styles.cassa}>
        <View style={styles.billContainer}>
          <FlatList
            data={this.props.billItems}
            renderItem={({ item }) => <BillItem item={item} />}
            ListEmptyComponent={() =>
              <Text style={styles.emptyItem}>Non ci sono elementi nel carrello</Text>
            }
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            small
            raised
            icon={{ name: 'squirrel', type: 'octicon' }}
            title={`Paga ${this.props.amount.toFixed(2)} euro`}
            onPress={() => this.props.resetBill()}
          />
        </View>
      </View>
    );
  }
}

Cashier.propTypes = {
  billItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  resetBill: PropTypes.func.isRequired,
  amount: PropTypes.number,
};

Cashier.defaultProps = {
  amount: 0,
};

const styles = {
  cassa: {
    flex: 0.3,
    paddingTop: 15,
  },
  billContainer: {
    flex: 0.8,
  },
  buttonContainer: {
    flex: 0.2,
  },
  emptyItem: {
    flex: 1,
    textAlign: 'center',
  },
};

const mapStatetoProps = ({ bill }) => ({
  billItems: bill.list,
  amount: bill.list.reduce((total, product) => total + product.price, 0),
});

export default connect(mapStatetoProps, {
  resetBill,
})(Cashier);
