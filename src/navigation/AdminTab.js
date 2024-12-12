import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../components/home';
import Profile from '../components/profile';
import AdminNestedUser from './AdminNestedUser';
import Subscriptions from '../components/subscriptions';

const AdminTab = () => {
    const Tab = createBottomTabNavigator();

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

            <Tab.Screen name="subscriptions" component={Subscriptions}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="wallet-outline" color={focused ? '#B0B0B0' : 'gray'} size={24} />
                    ),
                }}
            />

            <Tab.Screen name="users" component={AdminNestedUser}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="people-outline" color={focused ? '#B0B0B0' : 'gray'} size={24} />
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

export default AdminTab