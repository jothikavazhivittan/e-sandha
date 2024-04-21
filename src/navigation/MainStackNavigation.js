import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screen/SplashScreen';
import languageScreen from '../screen/languageScreen';
import LoginScreen from '../screen/LoginScreen';

const MainStackNavigation=()=>{
    const Stack=createStackNavigator()
    return(
        <Stack.Navigator
        initialRouteName='splash-Screen'
        screenOptions={{headerShown:false}}>
            <Stack.Screen name='splash-Screen' component={SplashScreen}/>
            <Stack.Screen name='language' component={languageScreen}/>
            <Stack.Screen name='login' component={LoginScreen}/>
        </Stack.Navigator>
    )
}
export default MainStackNavigation