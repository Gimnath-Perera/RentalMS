import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import OrdedItemList from '../screens/OrdedItemList';
import OrdersList from '../screens/OrdersList';
import AccountScreen from '../screens/AccountScreen';
import TabBarLabel from '../components/TabBarLabel';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function CustomerBottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} name='Home' />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-home' />
          )
        }}
      />
      <BottomTab.Screen
        name='Items'
        component={OrdedItemList}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} name='Items' />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-cube' />
          )
        }}
      />
      <BottomTab.Screen
        name='Orders'
        component={OrdersList}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} name='Orders' />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-cube' />
          )
        }}
      />
      <BottomTab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} name='Account' />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-person' />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return '';
    case 'ScreenB':
      return 'ScreenB';
    case 'Account':
      return 'User Account';
    case 'ScreenA':
      return 'ScreenA';
  }
}
