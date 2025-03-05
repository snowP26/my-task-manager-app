import { Tabs } from "expo-router";
import { House, ListChecks } from "lucide-react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";



export default function TabsLayout() {

return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#FFFFFF",
            tabBarInactiveTintColor: "#818589",
            tabBarStyle: {
                backgroundColor: "#343633"
            },
            headerStyle: {
                backgroundColor: "#343633",
            },
            headerTintColor: "#5CC8FF",
        }}
        
    >
        <Tabs.Screen 
            name="index" 
            options={{
                headerTitle: "My Task Manager App",
                tabBarIcon: ({ color }) => <House color={color} size={30} strokeWidth={1.6} />,
                tabBarLabel: "Home",
                // headerLeft: () => <></> 
                // This code ^ makes it so that there is no back button on the left of the header.
            }} />

            <Tabs.Screen 
            name="tasks"
            options={{
                headerTitle: "To Do List",
                tabBarIcon: ({ color }) => <ListChecks color={color} size={30} strokeWidth={1.6} />,
                tabBarLabel: "Tasks"
            }}
            /> 

    </Tabs>
);
}