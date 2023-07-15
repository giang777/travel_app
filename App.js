import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import TabsNavigation from "./src/routes/tabs-navigation";
import Store from "./src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
    </Provider>
  );
}


