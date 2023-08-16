import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = ( {color='#8E8E93',size=17}) => {
  return (
    <View>
     <Svg width={size} height={size} viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M7.3 0.649941L1.3 5.14994C0.8 5.52994 0.5 6.11994 0.5 6.74994V15.7499C0.5 16.8499 1.4 17.7499 2.5 17.7499H14.5C15.6 17.7499 16.5 16.8499 16.5 15.7499V6.74994C16.5 6.11994 16.2 5.52994 15.7 5.14994L9.7 0.649941C8.99 0.119941 8.01 0.119941 7.3 0.649941ZM8.5 11C7.39543 11 6.5 11.8954 6.5 13V14C6.5 15.1046 7.39543 16 8.5 16C9.60457 16 10.5 15.1046 10.5 14V13C10.5 11.8954 9.60457 11 8.5 11Z" fill={color}/>
</Svg>

    </View>
  );
};

export default HomeIcon;