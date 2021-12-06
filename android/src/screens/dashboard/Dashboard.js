import React from 'react';
import {View as V, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AppBtn, AppInput, NavHeader, Loading} from '../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Dashboard extends React.Component {
  state = {
    name: '',
    fname: '',
    phone: '',
    address: '',
    isLoading: false,
  };
  componentDidMount = () => {
    this.retrieveData();
  };

  retrieveData = () => {
    AsyncStorage.getItem('userData', (error, result) => {
      if (!error && result !== null) {
        const data = JSON.parse(result);
        this.setState({
          name: data.userName,
          fname: data.fatherName,
          address: data.userAddress,
          phone: data.userPhone,
        });
      }
    });
  };

  render() {
    return (
      <V style={styles.mainView}>
        <NavHeader
          title={'Dashboard'}
          // leftIc={'arrow-undo-outline'}
          // leftIcPressed={() => this.props.navigation.openDrawer()}
        />
        {/* Name */}
        <V style={styles.textSet}>
          <V style={styles.textName}>
            <Text>Name</Text>
          </V>
          <V style={styles.textOutput}>
            <Text>{this.state.name}</Text>
          </V>
        </V>
        {/* fathername */}
        <V style={styles.textSet}>
          <V style={styles.textName}>
            <Text>FatherName</Text>
          </V>
          <V style={styles.textOutput}>
            <Text>{this.state.fname}</Text>
          </V>
        </V>
        {/* Adress */}
        <V style={styles.textSet}>
          <V style={styles.textName}>
            <Text>Address</Text>
          </V>
          <V style={styles.textOutput}>
            <Text>{this.state.address}</Text>
          </V>
        </V>
        {/* phone */}
        <V style={styles.textSet}>
          <V style={styles.textName}>
            <Text>Phone</Text>
          </V>
          <V style={styles.textOutput}>
            <Text>{this.state.phone}</Text>
          </V>
        </V>
        {/* buttonMain */}
        <V style={styles.btnMain}>
          <AppBtn
            title={'Go to List'}
            btnPressed={() => this.props.navigation.navigate('List')}
          />
          {/* <TouchableOpacity
        style={styles.btnTouch}
        ></TouchableOpacity> */}
        </V>
      </V>
    );
  }
}

const styles = StyleSheet.create({
  textSet: {
    height: hp('5%'),
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingLeft: hp('3%'),
    borderWidth: hp('0.2%'),
    marginTop: hp('4%'),
  },
  textName: {
    height: '100%',
    width: '50%',

    // backgroundColor: 'red',

    // height:hp('15%'),
  },
  textOutput: {
    height: '100%',
    width: '50%',
    // backgroundColor: 'blue',
  },
  mainView: {
    flex: 1,
    backgroundColor: 'pink',
  },
  btnMain: {
    height: hp('10%'),
    width: wp('100%'),
    // backgroundColor: 'red',
    marginTop: hp('10%'),
    alignItems: 'center',
  },
  btnTouch: {
    height: hp('10%'),
    width: wp('50%'),
    backgroundColor: 'blue',
  },
});
