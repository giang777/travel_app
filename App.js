import React, { useEffect } from "react";
import {
  updateWidth,
  updateHeight,
} from "./src/redux/actions/dimensionsActions";

import { NavigationContainer } from "@react-navigation/native";
import TabsNavigation from "./src/routes/tabs-navigation";
import { Dimensions } from "react-native";
import { Provider, useDispatch } from "react-redux";
import { Store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={Store}>
      <AppWrapper />
    </Provider>
  );
}

const AppWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { width, height } = Dimensions.get("window");
    dispatch(updateWidth(width));
    dispatch(updateHeight(height));
  }, [dispatch]);

  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  );
};