import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const FIGMA_FRAME_HEIGHT = 926;
const FIGMA_FRAME_WIDTH = 428;

export const perfectHeight = (height: number) => {
  const calculatedHeightPercent = (100 / FIGMA_FRAME_HEIGHT) * height;
  return responsiveScreenHeight(calculatedHeightPercent);
};

export const perfectWidth = (width: number) => {
  const calculatedWidthPercent = (100 / FIGMA_FRAME_WIDTH) * width;
  return responsiveScreenWidth(calculatedWidthPercent);
};

export const perfectFontSize = (size: number) => {
  const calculatedFontSizePercent = (100 / FIGMA_FRAME_HEIGHT) * size;
  return responsiveScreenFontSize(calculatedFontSizePercent);
};
