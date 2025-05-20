import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useEffect, useMemo, useRef} from 'react';
import {StyleSheet} from 'react-native';

import {colors, SWidth} from '../../../globalStyle';
import {useBottomSheetTitle, useMyLocation} from '../../store/mapRoute';
import {bottomSheetNames} from '../../utils/listData';
import BottomSheetHeader from './BottomSheetHeader';
import BottomSheetItemList from './BottomSheetItemList/BottomSheetItemList';
import MapMenu from './MapMenu';

const SBottomSheet = () => {
  const bottomRef = useRef<BottomSheetModal>(null);
  const {bottomSheetTitle, setIndex} = useBottomSheetTitle();
  const {myLocation} = useMyLocation();
  const snapPoints = useMemo(() => {
    switch (bottomSheetTitle) {
      case bottomSheetNames.MENU_SELECT:
        return [SWidth * 39, SWidth * 168];
      case bottomSheetNames.ITEM_LIST:
        if (myLocation.latitude !== 0) {
          return [SWidth * 39, SWidth * 344, SWidth * 685];
        } else {
          return [SWidth * 39, SWidth * 344];
        }
    }
  }, [bottomSheetTitle]);

  const bottomScreen = () => {
    switch (bottomSheetTitle) {
      case bottomSheetNames.MENU_SELECT:
        return <MapMenu />;
      case bottomSheetNames.ITEM_LIST:
        return <BottomSheetItemList />;
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.present();
    }
  }, []);
  console.log('bottomSheetTitle', bottomSheetTitle);
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomRef}
        // enableDynamicSizing={bottomSheetTitle === 'menuSelect'}
        snapPoints={snapPoints}
        enableDismissOnClose={false}
        enablePanDownToClose={false}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
        overDragResistanceFactor={0}
        handleStyle={{
          borderTopLeftRadius: SWidth * 16,
          borderTopRightRadius: SWidth * 16,
          elevation: 0,
        }}
        handleComponent={() => <BottomSheetHeader />}
        onChange={index => setIndex(index)}
        backgroundStyle={{
          backgroundColor: colors.white,
        }}
        index={0}
        style={[styles.container]}>
        {/* <BottomSheetScrollView showsVerticalScrollIndicator={false}> */}
        {bottomScreen()}
        {/* <BottomSheetItemList /> */}
        {/* </BottomSheetScrollView> */}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default SBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
