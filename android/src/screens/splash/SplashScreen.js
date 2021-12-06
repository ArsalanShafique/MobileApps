import React from 'react';
import {ImageBackground, View, Text, AnimatedText} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';

export class SplashScreen extends React.Component {
  // componentDidMount = () => {
  //   setTimeout(() => {
  //     this.props.navigation.navigate('SignUp');
  //   }, 3000);
  // };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            height: h('20%'),
            width: w('100%'),
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'royalblue',
              fontWeight: 'bold',
              fontSize: h('4%'),
            }}>
            Mobilo Series
          </Text>
        </View>

        <View
          style={{
            height: h('80%'),
            width: w('100%'),
            backgroundColor: 'white',
          }}>
          <LottieView
            source={require('../../assets/Splashnew.json')}
            autoPlay
            loop={false}
            speed={3}
            onAnimationFinish={() => {
              setTimeout(() => {
                this.props.navigation.navigate('SignUp');
              }, 3000);
            }}
          />
        </View>
      </View>
    );
  }
}
