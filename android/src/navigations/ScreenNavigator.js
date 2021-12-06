import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../screens/splash';
import {SignUp} from '../screens/signUp';
import {AppInput} from '../components';
import {AppBtn} from '../components';
import {Dashboard} from '../screens/dashboard';
import {DrawerNavigator} from './DrawerNavigator';
import {IconAppInput} from '../components/IconAppInput';
import {Loading} from '../components';
import {List} from '../screens/list';
import {TabNavigator} from './TabNavigator';
import {Calender} from '../screens/learnCalender';
import {SignIn} from '../screens/signIn';
import {ModalDropdown} from '../screens/modal-dropdown';

const Stack = createNativeStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="ModalDropdown"
          component={ModalDropdown}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />  */}
        {/* <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        /> */}
        {/*
        <Stack.Screen
          name="IconAppInput"
          component={IconAppInput}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
         */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
