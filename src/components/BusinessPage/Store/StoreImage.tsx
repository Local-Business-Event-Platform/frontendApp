import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {multipleImageSelected} from '../../../service/imagePicker';
import BusinessCamera from '../../../utils/svgs/businessPage/BusinessCamera';
import BusinessCirclePlus from '../../../utils/svgs/businessPage/BusinessCirclePlus';
import SCarousel from '../../Elements/SCarousel';
import SText from '../../Elements/SText';

type StoreImageProps = {
  storeAdd?: boolean;
  storeImages: {url: string; name: string; type: string}[];
  setStoreImages: (images: {url: string; name: string; type: string}[]) => void;
};
const StoreImage = ({
  storeAdd,
  storeImages,
  setStoreImages,
}: StoreImageProps) => {
  const [containerWidth, setContainerWidth] = useState(0);
  return (
    <Pressable
      style={styles.container}
      disabled={!storeAdd || storeImages.length > 0}
      onPress={() =>
        multipleImageSelected({
          width: containerWidth,
          height: SWidth * 200,
          setImages: setStoreImages,
        })
      }
      onLayout={onLayout => {
        setContainerWidth(onLayout.nativeEvent.layout.width);
      }}>
      {storeImages && storeImages.length > 0 ? (
        <View style={styles.carouselContainer}>
          <SCarousel
            images={storeImages}
            width={containerWidth}
            height={SWidth * 200}
          />
          <Pressable
            style={styles.addButton}
            onPress={() =>
              multipleImageSelected({
                width: containerWidth,
                height: SWidth * 200,
                setImages: setStoreImages,
              })
            }>
            <SText fStyle="BmdSb" text={'이미지 변경'} color={'#155DFC'} />
            <BusinessCamera />
          </Pressable>
        </View>
      ) : (
        <View style={styles.imageContainer}>
          <View style={styles.rowLine}>
            <BusinessCirclePlus />
            <SText
              fStyle="BlgSb"
              text={'이미지 등록하기 (최대 6장)'}
              color={'#525252'}
            />
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default StoreImage;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
  },

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
  },

  addButton: {
    flexDirection: 'row',
    position: 'absolute',
    top: SWidth * 8,
    right: SWidth * 7,
    height: SWidth * 40,
    borderWidth: 1.25,
    borderRadius: SWidth * 8,
    borderColor: '#155DFC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SWidth * 16,
    backgroundColor: '#FFFFFFE6',
    gap: SWidth * 8,
  },

  rowLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },
});
