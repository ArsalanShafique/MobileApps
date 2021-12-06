/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View as V,
  Text,
  TouchableOpacity,
  ImageBackground,
  DatePickerAndroid,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Ionicons from 'react-native-vector-icons/Ionicons';
export class NavHeader extends React.Component {
  render() {
    return (
      <V
        style={{
          height: hp('7%'),
          width: wp('100%'),
          backgroundColor: 'white',
          flexDirection: 'row',
        }}>
        {/* left Icon BUtton  */}
        <TouchableOpacity
          onPress={this.props.leftIcPressed}
          style={{
            height: hp('7%'),
            width: wp('15%'),
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'green',
          }}>
          <Ionicons name={this.props.leftIC} size={hp('4%')} color={'black'} />
          {/* <Ionicons name="wifi-outline" /> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: hp('7%'),
            width: wp('70%'),
            // backgroundColor: 'pink',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: hp('3%'),
            }}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
        {/* right Icon */}
        <TouchableOpacity
          onPress={this.props.RightIcPressed}
          style={{
            height: hp('7%'),
            width: wp('15%'),
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'green',
          }}>
          <Ionicons name={this.props.RightIc} size={hp('4%')} color={'white'} />
          {/* <Ionicons name="wifi-outline" /> */}
        </TouchableOpacity>
      </V>
    );
  }
}
