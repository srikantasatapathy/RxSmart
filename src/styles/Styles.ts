import { Platform } from 'react-native';
import { StylesAndroid } from './androidStyles/StylesAndroid';
import { StylesIos } from './iosStyles/StylesIos';

const getStyles: any = (theme: any) => {
  return Platform.OS === 'ios' ? StylesIos(theme) : StylesAndroid(theme);
};

export default getStyles;
