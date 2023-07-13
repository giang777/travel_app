import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import TabsNavigation from "./src/routes/tabs-navigation";
import store from "./src/redux/store";
import { Provider } from "react-redux";


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
    </Provider>
  );
}


