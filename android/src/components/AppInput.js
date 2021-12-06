import React from 'react';
import {TextInput, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export class AppInput extends React.Component {
  render() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          alignItems: 'center',

          marginTop: hp('4%'),
          // padding: hp('1%'),
        }}>
        <TextInput
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: hp('7.5%'),
            width: wp('80%'),
            backgroundColor: 'white',
            borderBottomWidth: hp('0.4%'),
            borderColor: '#5C7AEA',
            borderRadius: hp('2%'),
          }}
        />
      </View>
    );
  }
}
