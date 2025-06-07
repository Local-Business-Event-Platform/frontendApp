import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {multipleImageSelected} from '../../../service/imagePicker';
import Camera20 from '../../../utils/svgs/businessPage/Camera20';
import CirclePlus24 from '../../../utils/svgs/businessPage/CirclePlus24';
import SCarousel from '../../Elements/SCarousel';
import SText from '../../Elements/SText';

type StoreImageProps = {
  storeAdd?: boolean;
  storeImages: string[];
  setStoreImages: (images: {url: string; name: string; type: string}[]) => void;
};
const StoreImage = ({
  storeAdd,
  storeImages,
  setStoreImages,
}: StoreImageProps) => {
  const [containerWidth, setContainerWidth] = useState(0);

  const handleLayout = (onLayout: any) => {
    const {width} = onLayout.nativeEvent.layout;
    setContainerWidth(width);
  };

  return (
    <Pressable
      style={styles.container}
      disabled={!storeAdd || storeImages.length > 0}
      onPress={() => {
        console.log('이미지 선택');
        multipleImageSelected({
          width: containerWidth || 0,
          height: SWidth * 200,
          setImages: setStoreImages,
        });
      }}
      onLayout={handleLayout}>
      {storeImages && storeImages[0] ? (
        <View style={styles.carouselContainer}>
          {containerWidth > 0 && (
            <SCarousel
              images={storeImages}
              width={containerWidth}
              height={SWidth * 200}
            />
          )}
          <Pressable
            style={styles.addButton}
            onPress={() =>
              multipleImageSelected({
                width: containerWidth || 0,
                height: SWidth * 200,
                setImages: setStoreImages,
              })
            }>
            <SText
              fStyle="BmdSb"
              text={'이미지 변경'}
              color={colors.text.interactive.primary}
            />
            <Camera20 />
          </Pressable>
        </View>
      ) : (
        <View style={styles.imageContainer}>
          <View style={styles.rowLine}>
            <CirclePlus24 />
            <SText
              fStyle="BlgSb"
              text={'이미지 등록하기 (최대 6장)'}
              color={colors.text.interactive.secondary}
            />
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default StoreImage;

const styles = StyleSheet.create({
  container: {},

  imageContainer: {
    width: '100%',
    height: SWidth * 200,
    backgroundColor: '#F5F5F5',
    borderRadius: SWidth * 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  carouselContainer: {
    position: 'relative',
    borderRadius: SWidth * 8,
    overflow: 'hidden',
  },

  addButton: {
    flexDirection: 'row',
    position: 'absolute',
    top: SWidth * 8,
    right: SWidth * 7,
    height: SWidth * 40,
    borderWidth: 1.25,
    borderRadius: SWidth * 8,
    borderColor: colors.border.interactive.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SWidth * 16,
    backgroundColor: `${colors.bg.primary}E6`,
    gap: SWidth * 8,
  },

  rowLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },
});
