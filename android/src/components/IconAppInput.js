import React from 'react';
import {View as V , StyleSheet,Text,TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
export class IconAppInput extends React.Component {
  render() {
    return (
      <V
      style={{
        height:h('8%'),
        width:('95%'),
        // borderWidth:h('0.4%'),
        borderBottomWidth:h('0.4%'),
        flexDirection:"row",
      //  borderRadius:h('7%'),
      //  borderTopLeftRadius:h('5%'),
      //  borderBottomLeftRadius:h('4%'),
      //  borderTopRightRadius:h('5%'),
      //  borderBottomRightRadius:h('4%'),
      borderColor:"black",
      justifyContent:"center",
      // backgroundColor:"white"
     
     
        
        // justifyContent:"center",
}}>
  <V
  style={{
    height:('100%'),
    // width:('15%'),
    // borderRightWidth:h('0.2%'),
    borderColor:"white",
justifyContent:'center',
  
  }}
  >
    {/* <Ionicons name="people-outline" size={h('4%')}/> */}
    <Ionicons name={this.props.usernameIc} size={h('4%')} color={'black'}/>
  </V>
   <V
  style={{
    height:('100%'),
    width:('70%'),
    // backgroundColor:"white"
    // borderRightWidth:h('0.2%'),
  
 
    
  }}
  >
<TextInput
{...this.props}
style={{
  height:'100%',
  width:"100%",
  color:'black',
  fontSize:h('2%'),
  // color:'red',
  // paddingStart:h('3%'),
  paddingLeft:h('3%'),

}}



/>

  </V>


  
</V>
    );
  }
}