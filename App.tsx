import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';

import GameScreen from "./screens/GameScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import SettingsScreen from "./screens/SettingsScreen";
import AboutScreen from "./screens/AboutScreen";
import RuleScreen from "./screens/RuleScreen";

const Drawer = createDrawerNavigator();

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const containerRef = React.useRef();

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHide();

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    'courier-prime': require('./assets/fonts/CourierPrime.ttf'),
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hide();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return null;
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <NavigationContainer ref={containerRef}>
                    <Drawer.Navigator>
                        <Drawer.Screen name="Game" component={GameScreen}/>
                        <Drawer.Screen name="Settings" component={SettingsScreen}/>
                        <Drawer.Screen name="Rules" component={RuleScreen}/>
                        <Drawer.Screen name="About" component={AboutScreen}/>
                    </Drawer.Navigator>
                </NavigationContainer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBB969',
    },
});
