import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';

const ActivityIndicatorLoadingView = () => {
  return (
    <ActivityIndicator
      color='#009688'
      size='large'
      style={styles.ActivityIndicatorStyle}
    />
  );
}

export default function RenderScreen ({ route }) {
  const jsInject = `
window.self.document.body.style.backgroundColor = 'red';
setTimeout(function() { window.alert('hi') }, 2000);
  true;
`

  return (
    <View style={{ flex: 1 }}>
      <WebView 
        originWhitelist={['*']}
        source={{ uri: 'https://github.com/react-native-community/react-native-webview' }}
        renderLoading={ActivityIndicatorLoadingView} 
        startInLoadingState={true}
        injectedJavaScript={jsInject}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'

  }
});