import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useColorScheme from '../hooks/useColorScheme';
import { RootTabParamList, RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import ProfilePicture from '../components/ProfilePicture';
import { Pressable } from 'react-native';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          headerTitle: () => <TabBarIcon name='twitter' color='#4D9FEC' />,
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialCommunityIcons
                name="star-four-points-outline"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 10 }}
              />
            </Pressable>
          ),
          headerLeft: () => (
            <ProfilePicture 
              size={40} 
              image={'https://miro.medium.com/max/1400/1*jDIj2SKAE-Bp32owLoHDjw.png'} 
              marginLeft={10}
            />
          )
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={TabThreeScreen}
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={TabFourScreen}
        options={{
          title: 'Messages',
          tabBarIcon: ({ color }) => <TabBarIcon name="envelope" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
}

export default BottomTabNavigator 