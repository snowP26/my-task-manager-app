import { Tabs } from "expo-router";
import { House } from "lucide-react-native";

export default function TabsLayout() {
return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#FFF202" // Changes the active tab color to something red
        }}
    >
        <Tabs.Screen 
            name="index" 
            options={{
                headerTitle: "My Task Manager App",
                tabBarIcon: () => <House color="black" size={30} strokeWidth="1.6"/>
                // headerLeft: () => <></> 
                // This code ^ makes it so that there is no back button on the left of the header.
            }} />

            <Tabs.Screen 
            name="tasks" 
            options={{
                headerTitle: "To do List"
            }}
            /> 

    </Tabs>
);
}