import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./screens/Login";
import Language from "./screens/Language";
import Welcome from './screens/Welcome'
import QrCodePage from './screens/qrcode'
import Approved from './screens/Approved'
import EnterQuotation from "./screens/Enter_quotation";
import Quatation from "./screens/Quatation";
import AvailableJobs from "./screens/AvailableJobs";
import AcceptedJobs from "./screens/Accept";
import OngoingJobs from "./screens/Ongoing";
import PaymentJobs from "./screens/PaymentJobs";

//const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
  
      <NavigationContainer>
        <StatusBar backgroundColor="#212A3E" />
        <Stack.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="StartScreen" component={PaymentJobs} />
          {/* <Stack.Screen name="Login" component={Login} /> */}
          {/* <Stack.Screen name="Language" component={Language} /> */}
        </Stack.Navigator>
      </NavigationContainer>
 
  );
}
