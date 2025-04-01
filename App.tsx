import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainStackScreen from './src/components/BottomTebScreen/MainStackScreen';
import SModal from './src/components/Elements/SModal';
import ReactQueryProvider from './src/ReactQuery/Provider';
import {locationSettings} from './src/service/locationSettings';
import {useModalOpen} from './src/store/modalRoute';
function App() {
  const {modalOpen} = useModalOpen();
  useEffect(() => {
    const getLocation = async () => {
      try {
        await locationSettings();
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
      {modalOpen && <SModal />}
    </GestureHandlerRootView>
  );
}

export default App;
