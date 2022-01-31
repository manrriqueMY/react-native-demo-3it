import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Encuesta from "./src/screens/Encuesta";
import Resultados from "./src/screens/Resultados";
import Acerca from "./src/screens/Acerca";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="ENCUESTA" component={Encuesta} />
        <Drawer.Screen name="RESULTADOS" component={Resultados} />
        <Drawer.Screen name="ACERCA DE" component={Acerca} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
