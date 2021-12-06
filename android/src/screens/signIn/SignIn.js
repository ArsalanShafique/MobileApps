import React from 'react';
import {View as V, StyleSheet, ImageBackground} from 'react-native';
import {AppBtn, AppInput, IconAppInput, NavHeader} from '../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {AppLogo} from '../../components/Applogo';
export class SignIn extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 2}}>
        <ImageBackground
          source={require('../../assets/imgback.jpg')}
          style={styles.main}>
          <NavHeader title={'Client Login '} color="black" />
          <V style={styles.centerSet}>
            <AppLogo />
            <V style={styles.centerView}>
              <IconAppInput
              
              usernameIc="people-outline"/>
              
              <V style={styles.spacer} />
              <IconAppInput
                 usernameIc="lock-closed-outline" />
            </V>
            <AppBtn title={'Login Here'} />
          </V>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: hp('96.5%'),
    width: wp('100%'),
  },
  centerView: {
    height: hp('50%'),
    width: wp('80%'),
    backgroundColor: '#0004',
  },
  centerSet: {
    width: '100%',
    alignItems: 'center',
  },
});
