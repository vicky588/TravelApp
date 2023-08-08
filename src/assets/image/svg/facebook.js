import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const FaceBook = ({ color = '#000000', size = 10 }) => {
  return (
    <View>
      <Svg width={size} height={size} viewBox="0 0 16 16">
        <Path
          opacity="0.8"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.111 15.9937C15.5984 15.9937 15.9936 15.5984 15.9936 15.111V0.882697C15.9936 0.395086 15.5983 0 15.111 0H0.882697C0.395086 0 0 0.395146 0 0.882697V15.111C0 15.5984 0.395086 15.9936 0.882697 15.9936H15.111V15.9937ZM11.0353 15.9937V9.80009H13.1142L13.4255 7.38631H11.0353V5.84521C11.0353 5.14637 11.2293 4.67014 12.2315 4.67014L13.5096 4.66954V2.51068C13.2886 2.48132 12.5298 2.41558 11.6472 2.41558C9.80428 2.41558 8.54262 3.54043 8.54262 5.60623V7.38631H6.45837V9.80009H8.54262V15.9936H11.0353V15.9937Z"
          fill={color} // Set the fill color based on the color prop
        />
      </Svg>
    </View>
  );
};

export default FaceBook;