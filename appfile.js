import React from "react";
import AppNavigator from "./navigations/AppNavigator";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider as StyleProvider } from "styled-components";
import storage from "@react-native-community/async-storage";
import axios from "axios";
import auth from "@react-native-firebase/auth";
import Orientation from "react-native-orientation-locker";
import { typography } from "./src/utils/typography";
import { theme } from "./constants/themes/theme";
import { url } from "./constants/url";
import { store, persistor } from "./redux/store";
import "react-native-gesture-handler";


// curVersion is optional if you don't provide it will automatically take from the app using react-native-device-info



typography();

const App = () => {
  Orientation.lockToPortrait();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MixpanelProvider>
          <PaperProvider theme={theme}>
            <StyleProvider theme={theme}>
              <AppNavigator />
            </StyleProvider>
          </PaperProvider>
        </MixpanelProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
