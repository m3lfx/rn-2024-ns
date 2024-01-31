import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductContainer from './Screens/Product/ProductContainer';
import Header from './Shared/Header';
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider, extendTheme, } from "native-base";
import Main from './Navigators/Main'
import { Provider } from "react-redux";
import store from "./Redux/store";
import Toast from "react-native-toast-message";

const theme = extendTheme({ colors: newColorTheme });
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast />

        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
