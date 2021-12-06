import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  View as V,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import ImagePicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-picker';

export class Settings extends React.Component {
  state = {
    img: '',
  };

  logout = () => {
    console.warn('logout');
    // AsyncStorage.removeItem('userData', () => {
    //   this.props.navigation.replace('SignUp');
    // });
  };
  show = () => {
    const options = {
      title: 'Select The Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        console.warn(source);

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          img: source,
        });
      }
    });
  };

  render() {
    return (
      <V style={styles.mainView}>
        <V style={styles.MainTouchbtn}>
          <TouchableOpacity onPress={() => this.show()}>
            <Image
              style={styles.TouchImage}
              source={
                this.state.img === ''
                  ? require('../../assets/imgPicker.jpg')
                  : this.state.img
              }
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontSize: hp('2%'),
              fontWeight: 'bold',
            }}>
            Select Image
          </Text>
        </V>
        {/* logout */}
        <V
          style={{
            height: hp('10%'),
            flexDirection: 'row',
            borderTopWidth: hp('0.1%'),
            borderBottomWidth: hp('0.1%'),
          }}>
          <V
            style={{
              height: '100%',
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',

              // backgroundColor:"red",
            }}>
            <Ionicons
              name={'arrow-undo-outline'}
              size={hp('5%')}
              color={'red'}
            />
          </V>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Alert',
                'Do you want to logOut?',
                [
                  {
                    text: 'No',
                    onPress: () => console.log('cancel pressed'),
                    style: 'cancel',
                  },
                  {text: 'yes', onPress: () => this.logout()},
                ],

                {cancelable: false},
              );
            }}
            style={{
              height: '100%',
              width: '80%',
              // backgroundColor:"red",
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </V>
      </V>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  MainTouchbtn: {
    height: hp('20%'),
    backgroundColor: '#0001',
    justifyContent: 'flex-end',
    paddingStart: hp('1%'),
    paddingBottom: hp('1%'),
  },
  TouchImage: {
    height: hp('10%'),
    width: wp('18%'),
    borderRadius: hp('7%'),
    backgroundColor: 'blue',
  },
});
