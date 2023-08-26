import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ size=30, color='black', }) => {
  return (
    <TouchableOpacity>
        <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <Path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10, // Adjust the margin as needed
  },
});

export default BackButton;