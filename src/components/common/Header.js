import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { propWidth } from 'Utils';

const Header = ({ title, icon, navigate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}> {title} </Text>
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigate()}>
        <Icon
          name={icon}
          type="material-community"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  navigate: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: 'App di vendita',
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: propWidth(10),
  },
  textContainer: {
  },
  text: {
    fontSize: 25,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export { Header };
