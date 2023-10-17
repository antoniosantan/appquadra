import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListarAmigos from "./views/ListarAmigos";
import DetalharAmigo from "./views/DetalharAmigo";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListarAmigos" screenOptions={screenOptions} >
                <Stack.Screen name="ListarAmigos" component={ListarAmigos}
                    options={() => {
                        return {
                            title: "Vitinho Arenas"
                        }
                    }}
                />
                <Stack.Screen name="DetalharAmigo" component={DetalharAmigo}
                    options={() => {
                        return {
                            title: "Perfil do Amigo Quadras"
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: 'green'
    },
    headerTintColor: 'white',
    headerTintStyle: {
        fontWeight: 'bold'
    }

}