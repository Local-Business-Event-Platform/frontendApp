import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useEffect, useRef} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../../globalStyle';
import {
  useArrayBottomSheetTitle,
  useBottomSheetRef,
} from '../../store/arrayBottomSheetRoute';
import {bottomSheetNames} from '../../utils/listData';
import FilterBottomSheet from './FilterBottomSheet/FilterBottomSheet';
import SubArraySheet from './SubArraySheet/SubArraySheet';

const SBottomSheetSub = () => {
  const bottomRef = useRef<BottomSheetModal>(null);
  const {bottomSheetTitle} = useArrayBottomSheetTitle();
  const {setBottomSheetRef} = useBottomSheetRef();

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  const bottomScreen = () => {
    switch (bottomSheetTitle) {
      case bottomSheetNames.FILTER_LIST:
        return <FilterBottomSheet />;
      case bottomSheetNames.ARRAY_MENU:
        return <SubArraySheet />;
    }
  };

  useEffect(() => {
    setBottomSheetRef(bottomRef);
    if (bottomRef.current) {
      StatusBar.setBackgroundColor('transparent');
    }
  }, []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomRef}
        enableDynamicSizing={true}
        // enableDismissOnClose={false}
        enablePanDownToClose={false}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
        backdropComponent={renderBackdrop}
        // overDragResistanceFactor={0}
        backgroundStyle={{
          backgroundColor: colors.white,
        }}
        handleComponent={() => null}
        style={[styles.contentContainer]}>
        {bottomScreen()}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default SBottomSheetSub;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});
