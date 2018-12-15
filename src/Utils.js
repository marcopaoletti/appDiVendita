import { Dimensions } from 'react-native';

import { PROPS } from 'data/init.data';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const propHeight = height => ((height * SCREEN_HEIGHT) / PROPS.height);

export const propWidth = width => ((width * SCREEN_WIDTH) / PROPS.width);
