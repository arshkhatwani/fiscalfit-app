import { Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Transaction from '../screens/Transaction';
import Plan from '../screens/Plan';
import Budget from '../screens/Budget';
import imagePaths from '../constants/imagePaths';
import styles from '../styles/LoggedInNavigation';
import { disabledColor } from '../constants/colors';

const Tab = createBottomTabNavigator();

const LoggedInNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontFamily: 'Quicksand-SemiBold' },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: '#000000',
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.homeTabIcon}
              style={[
                styles.iconImg,
                { tintColor: focused ? '#000000' : disabledColor },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarActiveTintColor: '#000000',
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.transactionIcon}
              style={[
                styles.iconImg,
                { tintColor: focused ? '#000000' : disabledColor },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Plan"
        component={Plan}
        options={{
          tabBarActiveTintColor: '#000000',
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.planIcon}
              style={[
                styles.iconImg,
                { tintColor: focused ? '#000000' : disabledColor },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Budget"
        component={Budget}
        options={{
          tabBarActiveTintColor: '#000000',
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.budgetIcon}
              style={[
                styles.iconImg,
                { tintColor: focused ? '#000000' : disabledColor },
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default LoggedInNavigation;
