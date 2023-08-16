import React from 'react';
import { View } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

const Profile = ({color="#8E8E93",size=24}) => {
  return (
    <View>
      <Svg width={size} height={size}viewBox="0 0 25 24" fill="none">
        <G clipPath="url(#clip0_1_505)">
          <Path
            d="M12.5 1.99998C6.98 1.99998 2.5 6.47999 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.47999 18.02 1.99998 12.5 1.99998ZM12.5 4.99999C14.16 4.99999 15.5 6.33999 15.5 7.99999C15.5 9.65999 14.16 11 12.5 11C10.84 11 9.5 9.65999 9.5 7.99999C9.5 6.33999 10.84 4.99999 12.5 4.99999ZM12.5 19.2C10 19.2 7.79 17.92 6.5 15.98C6.53 13.99 10.5 12.9 12.5 12.9C14.49 12.9 18.47 13.99 18.5 15.98C17.21 17.92 15 19.2 12.5 19.2Z"
            fill={color}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1_505">
            <Rect width={24} height={24} fill="white" transform="translate(0.5)" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default Profile;