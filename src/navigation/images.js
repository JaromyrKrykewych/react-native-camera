import { Home, Images } from '../screens/index'

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const ImageNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Images" component={Images}/>
    </Stack.Navigator>
  )
}

export default ImageNavigator