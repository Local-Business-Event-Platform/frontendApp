import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useEffect, useMemo, useRef} from 'react';
import {StyleSheet} from 'react-native';

import {colors, SWidth} from '../../../globalStyle';
import {useBottomSheetTitle} from '../../store/mapRoute';
import {bottomSheetNames} from '../../utils/listData';
import BottomSheetHeader from './BottomSheetHeader';
import BottomSheetItemList from './BottomSheetItemList';
import MapMenu from './MapMenu';

const SBottomSheet = () => {
  const bottomRef = useRef<BottomSheetModal>(null);
  const {bottomSheetTitle, index, setIndex} = useBottomSheetTitle();

  const snapPoints = useMemo(() => {
    switch (bottomSheetTitle) {
      case bottomSheetNames.MENU_SELECT:
        return [SWidth * 30, SWidth * 168];
      case bottomSheetNames.ITEM_LIST:
        return [SWidth * 30, SWidth * 376, '95%'];
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
      requestAnimationFrame(() => {
        bottomRef.current?.snapToIndex(1);
      });
    }
  }, []);

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
        index={index}
        style={[styles.contentContainer]}>
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
  contentContainer: {
    flex: 1,
  },
});
