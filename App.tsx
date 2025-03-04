import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainStackScreen from './src/components/BottomTebScreen/MainStackScreen';
import ReactQueryProvider from './src/ReactQuery/Provider';
import {LocationSettings} from './src/service/LocationSettings';
function App() {
  useEffect(() => {
    const getLocation = async () => {
      try {
        await LocationSettings();
      } catch (error) {
        console.error('위치 정보 가져오기 중 오류 발생:', error);
      }
    };
    getLocation();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ReactQueryProvider>
        <NavigationContainer>
          <MainStackScreen />
        </NavigationContainer>
      </ReactQueryProvider>
    </GestureHandlerRootView>
  );
}

export default App;
