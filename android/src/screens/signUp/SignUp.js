/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View as V,
  Text,
  TouchableOpacity,
  ImageBackground,
  Modal,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppBtn, AppInput, NavHeader, IconAppInput} from '../../components';
import {styles} from './styles';
import {AppLogo} from '../../components/Applogo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loading} from '../../components';
import {valueToNode} from '@babel/types';

export class SignUp extends React.Component {
  state = {
    name: '',
    fname: '',
    address: '',
    phone: '+92',
    isLoading: false,
    modalVisible: true,
    //
    inName: '',
    inPassword: '',
  };

  userData = () => {
    this.controlLoading(true);
    const {name, fname, address, phone} = this.state;
    if (name === '' || fname === '' || address === '' || phone === '') {
      alert('all feild are required');
      this.controlLoading(false);
    } else {
      if (phone.length < 11) {
        alert('invalid phone number');
        this.controlLoading(false);
      } else {
        const data = {
          userName: name,
          fatherName: fname,
          userAddress: address,
          userPhone: phone,
        };
        // }
        // eslint-disable-next-line no-undef
        AsyncStorage.setItem('userData', JSON.stringify(data), () => {
          this.props.navigation.navigate('Dashboard');
        });
      }
    }
  };
  controlLoading = (value) => {
    this.setState({isLoading: value});
  };

  render() {
    <bar />;
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 2}}>
        <ImageBackground
          source={require('../../assets/new.jpg')}
          resizeMode={'stretch'}
          style={styles.imgeBackground}>
          <Loading showLoading={this.state.isLoading} />
          <NavHeader
            title={'React Native Starter '}
            leftIC={'wifi-outline'}
            leftIcPressed={() => this.setState({modalVisible: true})}
          />
          <V
            style={{
              width: wp('100%'),
              alignItems: 'center',
            }}>
            <V
              style={{
                height: hp('64%'),
                width: wp('80%'),
                // backgroundColor: '#0005',
                marginTop: hp('8%'),
                alignItems: 'center',
              }}>
              <AppLogo />

              <IconAppInput
                onChangeText={(name) => this.setState({name})}
                placeholder={'username'}
                usernameIc="people-outline"
              />

              <V style={styles.spacer} />
              <IconAppInput
                onChangeText={(fname) => this.setState({fname})}
                placeholder={'password'}
                usernameIc="lock-closed-outline"
              />
              <V style={styles.spacer} />
              <IconAppInput
                onChangeText={(address) => this.setState({address})}
                placeholder={'address'}
                usernameIc={'home-outline'}
                keyboardType={'email-address'}
              />
              <V style={styles.spacer} />
              <IconAppInput
                onChangeText={(phone) => this.setState({phone})}
                placeholder={'phone number'}
                usernameIc={'call-outline'}
                keyboardType={'phone-pad'}
                maxLength={13}
                secureTextEntry={true}
              />
              <V style={styles.spacer} />
            </V>
            <AppBtn btnPressed={() => this.userData()} title={'Register'} />
          </V>
        </ImageBackground>
        {/* SignIn */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <ImageBackground
            source={require('../../assets/imgback.jpg')}
            style={design.main}>
            <NavHeader
              title={'Client Login '}
              color="black"
              leftIC={'wifi-outline'}
              leftIcPressed={() => this.setState({modalVisible: false})}
            />
            <V style={design.centerSet}>
              <AppLogo />
              <V style={design.centerView}>
                <IconAppInput
                  onChangeText={(inName) => this.setState({inName})}
                  usernameIc="people-outline"
                />

                <V style={design.spacer} />
                <IconAppInput
                  usernameIc="lock-closed-outline"
                  onChangeText={(inPassword) => this.setState({inPassword})}
                />
              </V>
              <AppBtn title={'Login Here'} />
            </V>
          </ImageBackground>
        </Modal>
      </KeyboardAwareScrollView>
    );
  }
}

// SignIn
const design = StyleSheet.create({
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
