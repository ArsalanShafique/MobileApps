import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
export class Loading extends React.Component {
  render() {
    return (
      <View>
        {this.props.showLoading === true ?(
             <View style={[styles.container, styles.horizontal]}>
             {this.props.showLoading}
             <ActivityIndicator size="large" color="#0000ff" />
             <Text>Please Wait</Text>
           </View>
        ):null}
      
   




      </View>
       );
 
       }
      }
     

const styles = StyleSheet.create({
  container: {
    height: h('100%'),
    width: w('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf7',
    position: 'absolute',
    zIndex: 1,
  },
  horizontal: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // padding: 10,
  },
});
