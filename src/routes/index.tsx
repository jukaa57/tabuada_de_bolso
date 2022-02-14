import React from "react";
import { NavigationContainer,  } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Personalizada from "../pages/Personalizada/indes";
import Tabuada from "../pages/Tabuada";
import Home from "../pages/Home";

const Rotas = createNativeStackNavigator();

export default function StackPages() {
    return (
        <NavigationContainer>
            <Rotas.Navigator screenOptions = {{ headerShown: false }}>
                <Rotas.Screen name="Home" component={Home} />
                <Rotas.Screen name="Tabuada" component={Tabuada} />
            </Rotas.Navigator>
        </NavigationContainer>
    )
}


