import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../components/home';
import Profile from '../components/profile';
import SubscriptiontHistory from '../components/subscriptionHistory';
import AddSubscription from '../components/addSubscription';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const UserTab = () => {
  const Tab = createBottomTabNavigator();
  const { userId } = useContext(AuthContext);

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: 'black',
        borderTopColor: 'gray',
      },
      sceneContainerStyle: {
        backgroundColor: 'black',
      },
    }}>

      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" color={focused ? '#B0B0B0' : 'gray'} size={24} />
          ),
        }}
      />

      <Tab.Screen name="SubscriptiontHistory" component={SubscriptiontHistory}
        initialParams={{ userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="cart" color={focused ? '#B0B0B0' : 'gray'} size={24} />
          ),
        }}
      />

      <Tab.Screen name="AddSubscription" component={AddSubscription}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="add-circle-sharp" color={focused ? '#B0B0B0' : 'gray'}
              size={24} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person" color={focused ? '#B0B0B0' : 'gray'} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default UserTab