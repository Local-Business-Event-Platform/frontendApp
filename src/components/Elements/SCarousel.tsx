import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {SWidth} from '../../../globalStyle';

type SCarouselProps = {
  images: {url: string; name?: string; type?: string}[];
  width?: number;
  height: number;
};

const SCarousel = ({
  width = Dimensions.get('window').width,
  images,
  height,
}: SCarouselProps) => {
  const progress = useSharedValue<number>(0);

  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        vertical={false}
        height={height}
        width={width}
        loop={true}
        onProgressChange={progress}
        data={images}
        renderItem={item => (
          <FastImage
            source={{uri: item.item.url}}
            style={{width: '100%', height: height}}
            resizeMode={FastImage.resizeMode.cover}
          />
        )}
      />
      <View style={styles.indicatorContainer}>
        <Pagination.Basic
          progress={progress}
          data={images}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          containerStyle={{gap: SWidth * 8, marginBottom: SWidth * 16}}
          onPress={onPressPagination}
        />
      </View>
    </View>
  );
};

export default SCarousel;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  indicatorContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  dotStyle: {
    backgroundColor: '#FFFFFFA6',
    borderRadius: 999,
  },

  activeDotStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
  },
});
