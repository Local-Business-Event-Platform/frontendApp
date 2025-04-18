import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainStackScreen from './src/components/BottomTabScreen/MainStackScreen';
import SModal from './src/components/Elements/SModal';
import ReactQueryProvider from './src/ReactQuery/Provider';
import {locationSettings} from './src/service/locationSettings';
import {getLocation} from './src/service/myLocation';
import {useMyLocation} from './src/store/mapRoute';
import {useModalOpen} from './src/store/modalRoute';
function App() {
  const {modalOpen} = useModalOpen();
  const {setMyLocation} = useMyLocation();
  useEffect(() => {
    const getLocationAuth = async () => {
      try {
        await locationSettings();
      } catch (error) {
        console.error('위치 정보 가져오기 중 오류 발생:', error);
      }
    };
    getLocationAuth();
    getLocation({setMyLocation});
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <ReactQueryProvider>
            <MainStackScreen />
          </ReactQueryProvider>
          {modalOpen && <SModal />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
