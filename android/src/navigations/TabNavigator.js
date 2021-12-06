import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerNavigator} from './DrawerNavigator';
import {Home} from '../screens/home/Home';
import {Calender} from '../screens/learnCalender';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {List} from '../screens/list';
import {SignUp} from '../screens/signUp';
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'pink',
        labelStyle: {
          fontSize: hp('2.5%'),
        },
      }}>
      <Tab.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="logo-python" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          // tabBarLabel: 'List',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          headerShown: false,
          tabBarLabel: 'List',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
