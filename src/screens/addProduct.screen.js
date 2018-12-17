import React, { Component } from 'react';
import { KeyboardAvoidingView, View, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { addProduct } from 'actions';

import { Header } from 'common';
import { propHeight } from 'Utils';


class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      img: '',
      id: '2',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.main}>
        <Header title="Aggiungi un prodotto" icon="cancel" navigate={() => this.props.navigation.goBack()}/>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Titolo"
            value={this.state.name}
            onChangeText={value => this.setState({ name: value })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Immagine"
            value={this.state.img}
            onChangeText={value => this.setState({ img: value })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Prezzo"
            value={this.state.price}
            onChangeText={value => this.setState({ price: parseFloat(value) })}
          />

        </View>
        <Button
          small
          raised
          icon={{ name: 'squirrel', type: 'octicon' }}
          title="Inserisci prodotto"
          onPress={() => this.props.addProduct(this.state)}
        />
        <Text>{`Numero prodotti ${this.props.numberOfProducts}`}</Text>
      </KeyboardAvoidingView>
    );
  }
}

AddProduct.propTypes = {
  numberOfProducts: PropTypes.number.isRequired,
  addProduct: PropTypes.func.isRequired,
};

AddProduct.defaultProps = {
};

const styles = {
  main: {
    flex: 1,
    paddingVertical: propHeight(30),
    paddingHorizontal: propHeight(15),
  },
  inputContainer: {
    marginTop: 100,
    flex: 0.6,
  },
  textInput: {
    marginTop: 20,
    height: 40,
    fontSize: 25,
  },
};

const mapStateToProps = ({ products }) => ({
  numberOfProducts: products.list.length,
});

export default connect(mapStateToProps, {
  addProduct,
})(AddProduct);

