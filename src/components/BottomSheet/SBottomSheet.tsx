import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';

import {SWidth} from '../../../globalStyle';
import BottomSheetHeader from './BottomSheetHeader';
import BottomSheetItemList from './BottomSheetItemList';

const SBottomSheet = () => {
  const bottomRef = useRef<BottomSheetModal>(null);
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.present();
    }
  }, []);
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomRef}
        enableDynamicSizing={true}
        enableDismissOnClose={false}
        enablePanDownToClose={false}
        overDragResistanceFactor={0}
        handleStyle={{
          borderTopLeftRadius: SWidth * 16,
          borderTopRightRadius: SWidth * 16,
          elevation: 0,
        }}
        handleComponent={() => <BottomSheetHeader />}
        onChange={() => {}}
        backgroundStyle={{
          backgroundColor: '#FFFFFF',
        }}
        index={0}
        style={[styles.contentContainer]}>
        {/* <BottomSheetScrollView showsVerticalScrollIndicator={false}> */}
        {/* <MapMenu /> */}
        <BottomSheetItemList />
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
