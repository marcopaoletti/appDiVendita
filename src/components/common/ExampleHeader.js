import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const ExampleHeader = ({ headerText }) => {
  return (
    <View>
      <Text>{headerText}</Text>
    </View>
  );
};

ExampleHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export { ExampleHeader };
