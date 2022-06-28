import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
// import {WebView} from 'react-native-webview';
// import {enableLatestRenderer} from 'react-native-maps';

// enableLatestRenderer();

const App = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  useEffect(() => {
    const test = async () => {
      await Camera.requestCameraPermission();
      await Camera.requestMicrophonePermission();
    };
    test();
  }, []);

  if (device == null) return <></>;
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
  // return <WebView source={{uri: 'https://reactnative.dev/'}} />;
};

export default App;
