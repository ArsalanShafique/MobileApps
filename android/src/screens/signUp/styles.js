import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
  },
  imgeBackground: {
    height: hp('96.6%'),
    width: wp('100%'),
   
  // borderLeftWidth:hp('1%'),
  // borderRightWidth:hp('1%'),

  },
  spacer: {
    height: hp('3%'),
  },
});
