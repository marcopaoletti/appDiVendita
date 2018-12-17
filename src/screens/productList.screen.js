import React, { Component } from 'react';
import { View, Dimensions, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ProductItem, Cashier, Header } from 'common';
import { addProductToBill, getProducts } from 'actions';
import { propHeight } from 'Utils';


class ProductsList extends Component {
  constructor(props) {
    super(props);
    const { width, height } = Dimensions.get('window');
    this.isLandscape = width > height;
    props.getProducts();
  }

  render() {
    return (
      <View style={styles.main}>
        <Header style={styles.header} title="Mia applicazione" icon="plus" navigate={() => this.props.navigation.navigate('AddProduct')} />
        <View style={styles.container(this.isLandscape)}>
          <View style={styles.list}>
            <FlatList
              data={this.props.productsList}
              renderItem={({ item }) =>
                <ProductItem {...item} onPress={() => this.props.addProductToBill(item)} />
              }
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <Cashier />
        </View>
      </View>
    );
  }
}

ProductsList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addProductToBill: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
};

ProductsList.defaultProps = {
};

const styles = {
  main: {
    flex: 1,
    paddingVertical: propHeight(30),
  },
  container: isLandscape => ({
    flex: 1,
    flexDirection: isLandscape ? 'row' : 'column',
  }),
  list: {
    flex: 0.7,
  },
  cassa: {
    flex: 0.3,
  },
  billContainer: {
    flex: 0.8,
  },
  buttonContainer: {
    flex: 0.2,
  },
  header: {
    flex: 0.1,
  },
};

const mapStateToProps = ({ products }) => ({
  productsList: products.list,
});

export default connect(mapStateToProps, {
  addProductToBill,
  getProducts,
})(ProductsList);

