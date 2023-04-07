import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import { disabledColor, introBlue } from '../constants/colors';
import { font } from '../constants/fonts';
import imagePaths from '../constants/imagePaths';
import styles from '../styles/LoggedInNavigation';
import BudgetNavigation from './BudgetNavigation';
import HomeNavigation from './HomeNavigation';
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
        component={HomeNavigation}
        options={{
          tabBarActiveTintColor: introBlue,
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.homeTabIcon}
              style={[
                styles.iconImg,
                { tintColor: focused ? introBlue : disabledColor },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionNavigation}
        options={{
          tabBarActiveTintColor: introBlue,
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.transactionIcon}
              style={[
                styles.iconImg,
                { tintColor: focused ? introBlue : disabledColor },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Plan"
        component={PlanNavigation}
        options={{
          tabBarActiveTintColor: introBlue,
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.planIcon}
              style={[
                styles.iconImg,
                { tintColor: focused ? introBlue : disabledColor },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Budget"
        component={BudgetNavigation}
        options={{
          tabBarActiveTintColor: introBlue,
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.budgetIcon}
              style={[
                styles.iconImg,
                { tintColor: focused ? introBlue : disabledColor },
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default LoggedInNavigation;
