import React from 'react';
import {SafeAreaView} from 'react-native';
import TESTING_MODULE1 from './CustomModule';

const App = () => {
  console.log(TESTING_MODULE1);
  TESTING_MODULE1.show();
  return <></>;
};

export default App;
