import {Slider} from '@miblanchard/react-native-slider';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SText from '../../Elements/SText';

type MyLocationSliderProps = {
  radius: number;
  setRadius: (radius: number) => void;
};

const MyLocationSlider = ({radius, setRadius}: MyLocationSliderProps) => {
  const locationTextList = [
    {id: 1, title: '1km', content: '도보 15분'},
    {id: 2, title: '2km', content: '도보 30분'},
    {id: 3, title: '3km', content: '도보 45분'},
  ];

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <SText
          fStyle="BlgSb"
          text={`선택 범위 ${radius / 1000}km`}
          color={colors.text.interactive.primary}
        />
      </View>
      <View
        style={{
          position: 'relative',
        }}>
        {/* <TrackBackground location={location} /> */}
        <Slider
          value={radius}
          containerStyle={styles.sliderContainer}
          onValueChange={value => setRadius(value[0])}
          renderTrackMarkComponent={() => null}
          minimumValue={1000}
          maximumValue={3000}
          step={1000}
          minimumTrackTintColor={colors.bg.interactive.primary}
          thumbStyle={styles.thumbStyle}
          trackStyle={styles.trackStyle}
        />
      </View>
      <View style={styles.buttonContainer}>
        {locationTextList.map(item => (
          <View key={item.id} style={styles.buttonStyle}>
            <SText
              fStyle="BlgMd"
              text={item.title}
              color={colors.text.secondary}
            />
            <SText
              fStyle="BmdMd"
              text={item.content}
              color={colors.text.tertiary}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default MyLocationSlider;

const styles = StyleSheet.create({
  container: {
    paddingTop: SWidth * 20,
    paddingHorizontal: SWidth * 16,
    // borderTopWidth: 1,
    // borderColor: colors.border.secondary,
  },

  sliderContainer: {
    marginTop: SWidth * 22,
    height: SWidth * 24,
  },

  thumbStyle: {
    width: SWidth * 24,
    height: SWidth * 24,
    borderWidth: 1,
    borderColor: colors.border.interactive.primaryHovered,
    borderRadius: 999,
    backgroundColor: colors.bg.interactive.primary,
    zIndex: 2,
  },

  trackStyle: {
    width: '100%',
    height: SWidth * 12,
    backgroundColor: colors.bg.tertiary,
    borderWidth: 1,
    borderColor: colors.border.secondary,
    borderRadius: SWidth * 4,
  },

  buttonContainer: {
    width: '100%',
    marginTop: SWidth * 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonStyle: {
    alignItems: 'center',
    gap: SWidth * 2,
  },
});
