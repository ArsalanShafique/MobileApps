/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View as V,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {useTheme} from 'react-navigation';
import {AppBtn, NavHeader} from '../../components';
export class List extends React.Component {
  state = {
    data: [
      {
        name: 'Arsalan',
        age: '20',
        clr: 'white',
        email: 'miyah.myles@gmail.com',
        img: require('../../assets/row1.jpeg'),
      },
      {
        name: 'Usman',
        age: '20',
        clr: 'white',
        email: 'female',
        img: require('../../assets/row2.png'),
      },
      {
        name: 'Azhar',
        age: '20',
        clr: 'white',
        email: 'female',
        img: require('../../assets/row3.png'),
      },
      {
        name: 'Umer',
        age: '20',
        clr: 'white',
        gender: 'Male',
        img: require('../../assets/row4.jpeg'),
      },
      {
        name: 'Ahsan',
        age: '20',
        clr: 'white',
        gender: 'Male',
        img: require('../../assets/row5.jpeg'),
      },
      {
        name: 'Sami',
        age: '20',
        clr: 'white',
        gender: 'Male',
        img: require('../../assets/row1.jpeg'),
      },
      {
        name: 'Waseem',
        age: '20',
        clr: 'white',
        gender: 'Male',
        img: require('../../assets/row4.jpeg'),
      },
      {
        name: 'Robot',
        age: '20',
        clr: 'white',
        gender: 'Male',
        img: require('../../assets/row2.png'),
      },
      {
        name: 'Kashif',
        age: '20',
        clr: 'white',
        gender: 'Male',
        img: require('../../assets/row5.jpeg'),
      },
      {
        name: 'Horse',
        age: '20',
        clr: 'white',
        gender: 'Male',
        img: require('../../assets/row2.png'),
      },
    ],
    selectedItem: '',
    // refreshing: false,
  };
  design = (item, index) => (
    <TouchableOpacity
      onPress={() => {
        this.setState({selectedItem: item}, () => {
          // this.removeByIndex();
          // this.searchAndRemove();
          this.incrementByPreviousState(item);
        });
      }}
      style={{
        height: h('12%'),
        backgroundColor:
          item.name === this.state.selectedItem.name ? 'pink' : item.clr,

        // backgroundColor:
        // item.name === this.state.selectedItem.name ? 'purple' : item.clr,

        // backgroundColor: item.clr === undefined ? 'blue' : item.clr,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderWidth: h('0.1%'),
        borderRadius: h('0.8%'),
        flexDirection: 'row',
      }}>
      <V
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '20%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            height: h('12%'),
            width: w('12%'),
            borderRadius: h('6%'),
          }}
          source={item.img}
          resizeMode={'cover'}
        />
      </V>
      <V
        style={{
          width: '50%',
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: 'black',
          }}>
          Name:{'  '}
          {item.name}
        </Text>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: 'black',
          }}>
          {''}
          {item.email}
        </Text>
      </V>
      <V
        style={{
          width: '30%',
          // backgroundColor: 'yellow',
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
          }}>
          Age: {item.age}
        </Text>
      </V>
    </TouchableOpacity>
  );
  removeByIndex = (index) => {
    const arr = this.state.data;
    arr.splice(index, 1);
  };
  searchAndRemove = (item) => {
    const arr = this.state.data;
    const index = arr.indexOf(item);

    arr.splice(index, 1);
    this.setState({data: arr});
  };
  addByConcat = () => {
    const MainArr = this.state.data;
    const newItem = [
      {
        name: 'new',
        age: '22',
        clr: 'white',
        email: 'miyah.myles@gmail.com',
        img: require('../../assets/row1.jpeg'),
      },
    ];
    const newArray = newItem.concat(MainArr);
    this.setState({data: newArray});
  };
  addByPreviousState = () => {
    const newItem = {
      name: 'Sami',
      age: '20',
      clr: 'white',
      gender: 'Male',
      img: require('../../assets/row1.jpeg'),
    };
    this.setState((PreviousState) => ({
      data: [...PreviousState, newItem],
    }));
  };
  incrementByPreviousState = (item) => {
    const arr = this.state.data;
    const index = arr.indexOf(item);

    if (index === -1) {
      console.warn('error');
    } else {
      const newItem = {
        name: arr[index].name,
        age: +arr[index].age + 1,
        clr: arr[index].clr,
        img: arr[index].img,
      };
      arr.splice(index, 1);
      this.setState({data: arr}, () => {
        this.setState((previousState) => ({
          data: [...previousState.data, newItem],
        }));
      });
    }
  };

  separator = () => (
    <V
      style={{
        height: h('1%'),
      }}
    />
  );
  header = () => (
    <V
      style={{
        height: h('10%'),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: h('3%'),
        }}>
        List of all Users
      </Text>
    </V>
  );
  // controlRefreshing = () => {
  //   this.setState({refreshing: true});
  // };

  render() {
    return (
      <V style={styles.Main}>
        <NavHeader
          title={' Client Information'}
          RightIc={'ellipsis-vertical-outline'}
          RightIcPressed={() => {
            // this.removeByIndex();
          }}
        />
        <FlatList
          data={this.state.data}
          renderItem={({item, index}) => this.design(item, index)}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={() => this.separator()}
          ListHeaderComponent={() => this.header()}
          // onRefresh={() => {
          //   this.controlRefreshing();
          // }}
        />
      </V>
    );
  }
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
