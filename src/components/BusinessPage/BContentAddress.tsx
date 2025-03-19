import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {BContentAddressProps} from '../../utils/types/businessType';
import SInput from '../Elements/SInput';
import SText from '../Elements/SText';
import JoinInputButton from '../Join/JoinUser/JoinInputButton';

const BContentAddress = ({
  title,
  content,
  color,
  underline,
  onClick,
}: BContentAddressProps) => {
  const navigation = useCustomNavigation();
  return (
    <View style={styles.container}>
      <SText
        fStyle="BmdMd"
        text={title}
        color={color}
        textDecorationLine={underline}
        lineColor={color}
      />
      {onClick ? (
        <View style={styles.addressContainer}>
          <JoinInputButton
            value={''}
            onChangeText={() => {}}
            editable={false}
            buttonTitle="우편번호 검색"
            onPress={() => navigation.navigate('address')}
          />
          <SInput value={''} onChangeText={() => {}} editable={false} />
          <SInput value={''} onChangeText={text => {}} />
        </View>
      ) : (
        <SText
          nLine={10}
          flexShrink={1}
          lineHeight={SWidth * 24}
          fStyle="BxlSb"
          text={content}
          color={'#404040'}
        />
      )}
    </View>
  );
};

export default BContentAddress;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
    gap: SWidth * 8,
  },

  addressContainer: {
    gap: SWidth * 8,
  },
});
