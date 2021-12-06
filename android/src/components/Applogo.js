/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View as V, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export class AppLogo extends React.Component {
  render() {
    return (
      <V
        styles={{
          width: '100%',
        }}>
        <V
          style={{
            // backgroundColor: 'red',
            height: hp('10%'),
            width: wp('80%'),
            alignItems: 'center',
            marginBottom: hp('7%'),
            // justifyContent:"center",
            // flexDirection:'row',
          }}>
          <V
            style={{
              height: hp('10%'),
              //   backgroundColor: 'green',
              width: wp('35%'),
              alignItems: 'center',
              // marginTop: hp('1%'),
            }}>
            <Image
              style={{
                height: hp('12%'),
              
                width: '50%',
                borderRadius:hp('3%'),
              }}
              source={require('../assets/images.jpg')}
            />
          </V>
        </V>
      </V>
    );
  }
}
