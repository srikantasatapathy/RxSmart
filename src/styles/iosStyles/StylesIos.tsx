import { Dimensions, Platform } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const PRIMARY_COLOR = '';
const SECOND_PRIMARY_COLOR = '';

const ERROR = '#E83333';
const LIGHT_ERROR = '#fceded';
const SUCCESS = '#2BBE2B';
const LIGHT_SUCCESS = '#C9E9C9';
const INFO = '#1e8dd6';
const LIGHT_INFO = '#c1e9f5';
const PENDING_STATUS = '#DBAE1C';
const LIGHT_PENDING_STATUS = '#F3E1A8FF';

const TEXT_XXX_SMALL = 9;
const TEXT_XX_SMALL = 10;
const TEXT_X_SMALL = 12;
const TEXT_SM_MEDIUM = 15;
const TEXT_M_SMALL = 13;
const TEXT_SMALL = 14;
const TEXT_MEDIUM = 16;
const TEXT_LARGE = 18;
const TEXT_X_LARGE = 20;
const TEXT_HEADER = 24;

// fonts
const font = {
  Poppins_300Light: 'Poppins-Light',
  Poppins_400Regular: 'Poppins-Regular',
  Poppins_500Medium: 'Poppins-Medium',
  Poppins_600SemiBold: 'Poppins-SemiBold',
  Poppins_700Bold: 'Poppins-Bold',
};

// theme color
const lightColors = {
  LIGHT: '#fff',
  DARK: '#000',
  GRAY: '#666666',
  LIGHT_GRAY: '#B5B5B5',
  LIGHTER_GRAY: '#f9f9f9',
  CARD_BACKGROUND: '#f9f9f9',
  // PRIMARY_COLOR_LIGHT: secondaryColor,
  // PRIMARY_COLOR_LIGHTER: primaryColorLighter,
  MODAL_BG_TRANSPARENT: 'rgba(0,0,0,0.3)',
  INPUT_FIELD: '#f9f9f9',
  SKELETON: '#DCDCDCFF',
  LIGHT_TEXT: '#fff',
};

const darkColors = {
  LIGHT: '#111111',
  DARK: '#fff', // Dark background
  GRAY: '#B3B3B3',
  LIGHT_GRAY: '#666666',
  LIGHTER_GRAY: '#444444',
  CARD_BACKGROUND: '#1d1d1d',
  PRIMARY_COLOR_LIGHT: '#1d1d1d',
  PRIMARY_COLOR_LIGHTER: '#1d1d1d',
  MODAL_BG_TRANSPARENT: 'rgba(255,255,255,0.1)',
  INPUT_FIELD: '#1d1d1d',
  SKELETON: '#5D5C5CFF',
  LIGHT_TEXT: '#fff',
};

export const StylesIos = (value: any) => {
  const theme = value === 'dark' ? darkColors : lightColors;
  return {
    // colors
    DARK: theme.DARK,
    LIGHT: theme.LIGHT,
    GRAY: theme.GRAY,
    LIGHT_GRAY: theme.LIGHT_GRAY,
    LIGHTER_GRAY: theme.LIGHTER_GRAY,
    CARD_BACKGROUND: theme.CARD_BACKGROUND,
    PRIMARY_COLOR: PRIMARY_COLOR,
    SECOND_PRIMARY_COLOR: SECOND_PRIMARY_COLOR,
    // PRIMARY_COLOR_LIGHT: theme.PRIMARY_COLOR_LIGHT,
    // PRIMARY_COLOR_LIGHTER: theme.PRIMARY_COLOR_LIGHTER,
    SUCCESS: SUCCESS,
    LIGHT_SUCCESS: LIGHT_SUCCESS,
    ERROR: ERROR,
    LIGHT_ERROR: LIGHT_ERROR,
    INFO: INFO,
    LIGHT_INFO: LIGHT_INFO,
    PENDING_STATUS: PENDING_STATUS,
    LIGHT_PENDING_STATUS: LIGHT_PENDING_STATUS,
    MODAL_BG_TRANSPARENT: theme.MODAL_BG_TRANSPARENT,
    INPUT_FIELD: theme.INPUT_FIELD,
    LIGHT_TEXT: theme.LIGHT_TEXT,

    // texts
    TEXT_XX_SMALL: TEXT_XX_SMALL,
    TEXT_X_SMALL: TEXT_X_SMALL,
    TEXT_SMALL: TEXT_SMALL,
    TEXT_MEDIUM: TEXT_MEDIUM,
    TEXT_LARGE: TEXT_LARGE,
    TEXT_X_LARGE: TEXT_X_LARGE,
    TEXT_HEADER: TEXT_HEADER,
    TEXT_M_SMALL: TEXT_M_SMALL,
    TEXT_XXX_SMALL: TEXT_XXX_SMALL,
    TEXT_SM_MEDIUM: TEXT_SM_MEDIUM,

    // fonts
    Poppins_300Light: 'Poppins-Light',
    Poppins_400Regular: 'Poppins-Regular',
    Poppins_500Medium: 'Poppins-Medium',
    Poppins_700Bold: 'Poppins-Bold',
    Poppins_600SemiBold: 'Poppins-SemiBold',

    Skeleton: {
      skeletonBG: {
        backgroundColor: theme.CARD_BACKGROUND,
        borderRadius: 4,
      },
    },
  };
};
