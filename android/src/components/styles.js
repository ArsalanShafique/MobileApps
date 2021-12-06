import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  AppbtnmainView: {
    height: hp('10%'),
    width: wp('100%'),
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  AppBtn: {
    height: hp('5.5%'),
    width: wp('60%'),
    backgroundColor: '#4c54c7',
    borderWidth: hp('0.3%'),
    borderRadius: hp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:hp('0%'),
  },
  Appbtnstyling: {
    fontSize: hp('3%'),
    // fontWeight: 'bold',
    color: 'white',
  },
});
