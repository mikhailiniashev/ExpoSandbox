import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <View style={{height: 600, width: 400,overflow:'hidden',marginTop: 15 }}>

        <WebView
            source={{uri: 'https://apptest.mathkang.ru'}}
            scalesPageToFit={true}
            domStorageEnabled={true}
            javaScriptEnabled={true}
            startInLoadingState={true}

        />
          <Text>Open up App.js to start working on your app!</Text>
      </View>
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
