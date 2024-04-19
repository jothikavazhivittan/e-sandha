import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screen/SplashScreen';

const MainStackNavigation=()=>{
    const Stack=createStackNavigator()
    return(
        <Stack.Navigator
        initialRouteName='splash-Screen'
        screenOptions={{headerShown:false}}>
            <Stack.Screen name='splash-Screen' component={SplashScreen}/>
        </Stack.Navigator>
    )
}
export default MainStackNavigation