import {Slider} from '@miblanchard/react-native-slider';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SText from '../../Elements/SText';

type MyLocationSliderProps = {
  location: number;
  setLocation: React.Dispatch<React.SetStateAction<number>>;
};

const MyLocationSlider = ({location, setLocation}: MyLocationSliderProps) => {
  const locationTextList = [
    {id: 1, title: '1km', content: '도보 15분'},
    {id: 2, title: '2km', content: '도보 30분'},
    {id: 3, title: '3km', content: '도보 45분'},
  ];

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <SText
          fStyle="BlgMd"
          text={`선택 범위 ${location / 1000}km`}
          color={colors.interactive.primary}
        />
      </View>
      <View
        style={{
          position: 'relative',
        }}>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            bottom: SWidth * 6.5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              height: SWidth * 12,
              borderTopLeftRadius: SWidth * 4,
              borderBottomLeftRadius: SWidth * 4,
              borderWidth: 1,
              borderColor: location <= 1000 ? '#E5E5E5' : '#1447E6',
            }}
          />
          <View
            style={{
              flex: 1,
              height: SWidth * 12,
              borderTopRightRadius: SWidth * 4,
              borderBottomRightRadius: SWidth * 4,
              borderWidth: 1,
              borderColor: location <= 2000 ? '#E5E5E5' : '#1447E6',
            }}
          />
        </View>
        <Slider
          value={location}
          containerStyle={styles.sliderContainer}
          onValueChange={value => setLocation(value[0])}
          renderTrackMarkComponent={() => null}
          minimumValue={1000}
          maximumValue={3000}
          step={1000}
          minimumTrackTintColor={colors.interactive.primary}
          thumbStyle={styles.thumbStyle}
          trackStyle={styles.trackStyle}
        />
      </View>
      <View style={styles.buttonContainer}>
        {locationTextList.map(item => (
          <View key={item.id} style={styles.buttonStyle}>
            <SText fStyle="BlgMd" text={item.title} color={colors.secondary} />
            <SText fStyle="BmdMd" text={item.content} color={colors.tertiary} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default MyLocationSlider;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
    paddingTop: SWidth * 20,
    paddingHorizontal: SWidth * 16,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
  },

  sliderContainer: {
    marginTop: SWidth * 22,
    height: SWidth * 24,
  },

  thumbStyle: {
    width: SWidth * 24,
    height: SWidth * 24,
    borderWidth: 1,
    borderColor: '#1447E6',
    borderRadius: 999,
    backgroundColor: colors.interactive.primary,
    zIndex: 2,
  },

  trackStyle: {
    width: '100%',
    height: SWidth * 11,
    backgroundColor: '#F5F5F5',
    // borderWidth: 1,
    // borderColor: '#E5E5E5',
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
