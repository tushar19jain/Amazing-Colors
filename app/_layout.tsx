import store from "@/redux/Store/SearchStore";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Provider } from "react-redux";

export default function RootLayout() {
  useFonts({
    'bold':require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium':require('../assets/fonts/Poppins-Medium.ttf'),  
    'Light':require('../assets/fonts/Poppins-Light.ttf')  
  })
  return (
    <Provider store={store}>
    <Stack>
      <Stack.Screen options={{headerShown:false}} name="(tabs)" />
    </Stack>
    </Provider>
  );
}
