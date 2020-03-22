import * as React from 'react';
import {Text} from 'react-native';

export function CourierText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'courier-prime' }]} />;
}
