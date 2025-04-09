import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';

import {colors, SWidth} from '../../../globalStyle';
import {useBottomSheetTitle} from '../../store/mapRoute';
import BottomSheetHeader from './BottomSheetHeader';
import BottomSheetItemList from './BottomSheetItemList';
import MapMenu from './MapMenu';

const SBottomSheet = () => {
  const bottomRef = useRef<BottomSheetModal>(null);
  const {bottomSheetTitle} = useBottomSheetTitle();

  const bottomScreen = () => {
    switch (bottomSheetTitle) {
      case 'menuSelect':
        return <MapMenu />;
      case 'itemList':
        return <BottomSheetItemList />;
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.present();
    }
  }, []);
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomRef}
        enableDynamicSizing={bottomSheetTitle === 'menuSelect'}
        snapPoints={
          bottomSheetTitle === 'menuSelect' ? undefined : [SWidth * 376]
        }
        enableDismissOnClose={false}
        enablePanDownToClose={false}
        enableContentPanningGesture={false}
        overDragResistanceFactor={0}
        handleStyle={{
          borderTopLeftRadius: SWidth * 16,
          borderTopRightRadius: SWidth * 16,
          elevation: 0,
        }}
        handleComponent={() => <BottomSheetHeader />}
        onChange={() => {}}
        backgroundStyle={{
          backgroundColor: colors.white,
        }}
        index={0}
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
