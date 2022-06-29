import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "../constants/Colors";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";
import { RootStackParamList } from "../types";
import Onboarding from "../screens/Onboarding";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
        animation: "fade",
        headerShown: true,
        headerTransparent: true,
        headerShadowVisible: false,
        headerTintColor: Colors.primary.regular,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
