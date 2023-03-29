import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import { disabledColor } from '../constants/colors';
import { font } from '../constants/fonts';
import imagePaths from '../constants/imagePaths';
import Home from '../screens/Home';
import styles from '../styles/LoggedInNavigation';
import BudgetNavigation from './BudgetNavigation';
import PlanNavigation from './PlanNavigation';
import TransactionNavigation from './TransactionNavigation';

const Tab = createBottomTabNavigator();

const LoggedInNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontFamily: font.semiBold.fontFamily },
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
        component={TransactionNavigation}
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
        component={PlanNavigation}
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
        component={BudgetNavigation}
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
