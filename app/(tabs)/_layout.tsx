import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "coral"}}>
      <Tabs.Screen name="index" options={{title: "Home", tabBarIcon: ({color}) => (
        <FontAwesome name="home" size={24} color={color} />
      )}} />
      <Tabs.Screen name="login" options={{title: "Login" , tabBarIcon: ({color}) => (
        <MaterialCommunityIcons name="login" size={24} color={color} />
      )}} />
     </Tabs>
  )
}
