import { Stack } from "expo-router";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
      name="(tabs)" // Makes the folder named (tabs) the entry point of the app
      options={{
        // headerTitle: "My Task Manager App"
        // headerLeft: () => <></> 
        // This code ^ makes it so that there is no back button on the left of the header.
        headerShown: false,
      }}
      />
    
    </Stack>
  );
}