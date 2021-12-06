import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Settings} from '../screens/dashboard';
import {List} from '.././screens/list';
import { SignUp } from '../screens/signUp';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Settings {...props} />}>
      <Drawer.Screen name="SignUp" component={SignUp} />
    </Drawer.Navigator>
  );
};
