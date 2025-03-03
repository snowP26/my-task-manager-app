import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
      name="index" 
      options={{
        headerTitle: "My Task Manager App"
        // headerLeft: () => <></> 
        // This code ^ makes it so that there is no back button on the left of the header.
      }} />

      <Stack.Screen 
      name="tasks" 
      options={{
        headerTitle: "To do List"
      }}
      /> 
      
      <Stack.Screen
      name= "+not-found" 
      options={{
        headerTitle: "Oops page not found!"
      }}
      />
    </Stack>
  );
}