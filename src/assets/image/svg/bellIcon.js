import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const BellIcon = ({color="#8E8E93",size=18}) => {
  return (
    <View>
      <Svg width={size} height={size} viewBox="0 0 17 20" fill="none">
        <Path
          d="M8.49999 20C9.59999 20 10.5 19.1 10.5 18H6.49999C6.49999 19.1 7.38999 20 8.49999 20ZM14.5 14V9.00002C14.5 5.93002 12.86 3.36002 9.99999 2.68002V2.00002C9.99999 1.17002 9.32999 0.500015 8.49999 0.500015C7.66999 0.500015 6.99999 1.17002 6.99999 2.00002V2.68002C4.12999 3.36002 2.49999 5.92002 2.49999 9.00002V14L1.20999 15.29C0.57999 15.92 1.01999 17 1.90999 17H15.08C15.97 17 16.42 15.92 15.79 15.29L14.5 14Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default BellIcon;