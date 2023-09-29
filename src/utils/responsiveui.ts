import { Dimensions, PixelRatio } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const baseWidth = 414;
const baseHeight = 896;

const widthToDp = (widthPercentage:any) => {
  const widthValue =
    typeof widthPercentage === 'number'
      ? widthPercentage
      : parseFloat(widthPercentage);
  return PixelRatio.roundToNearestPixel(
    (windowWidth * (widthValue / baseWidth))
  );
};

const heightToDp = (heightPercentage:any) => {
  const heightValue =
    typeof heightPercentage === 'number'
      ? heightPercentage
      : parseFloat(heightPercentage);
  return PixelRatio.roundToNearestPixel(
    (windowHeight * (heightValue / baseHeight))
  );
};



const fontToDp = (fontSize:any) => {
  const fontValue = typeof fontSize === 'number' ? fontSize : parseFloat(fontSize);

  const widthScalingFactor = windowWidth / baseWidth;
  const heightScalingFactor = windowHeight / baseHeight;
  const scalingFactor = Math.min(widthScalingFactor, heightScalingFactor);

  const responsiveFontSize = fontValue * scalingFactor;

  return PixelRatio.roundToNearestPixel(responsiveFontSize);
};




export { widthToDp as wp, heightToDp as hp , fontToDp as fp };