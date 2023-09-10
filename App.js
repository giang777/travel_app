import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import TabsNavigation from "./src/router/tab-route-config";
import Store from "./src/redux/store";
import { Provider } from "react-redux";
import { LogBox } from "react-native";
export default function App() {
  // Ignore log notification by message
  LogBox.ignoreLogs(['new NativeEventEmitter']); 
  //tủn off all log
  // LogBox.ignoreAllLogs();
  return (
      <Provider store={Store}>
        <NavigationContainer>
          <TabsNavigation />
        </NavigationContainer>
      </Provider>
  );
}
