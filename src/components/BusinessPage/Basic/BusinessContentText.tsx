import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {BusinessContentTextProps} from '../../../utils/types/businessType';
import SInput from '../../Elements/SInput';
import SListButton from '../../Elements/SListButton';
import SText from '../../Elements/SText';
import STextArea from '../../Elements/STextArea';
import JoinInputButton from '../../Join/JoinUser/JoinInputButton';
import EventDateButton from '../Event/EventDateButton';

const BusinessContentText = ({
  title,
  content,
  color,
  underline,
  onClick,
  placeholder,
  listButtonTitle,
  listButtonOnPress,
}: BusinessContentTextProps) => {
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
        title === '사업자 등록번호' ? (
          <JoinInputButton
            value={''}
            onChangeText={() => {}}
            placeholder={'123-45-67890'}
            buttonTitle="인증"
            textDecorationLine="underline"
            onPress={() => {}}
          />
        ) : title === '대표자명' || title === '혜택' ? (
          <SInput
            value={''}
            onChangeText={text => {}}
            placeholder={placeholder}
          />
        ) : title === '가게 분류' || title === '세부 분류' ? (
          <SListButton title={listButtonTitle!} onPress={listButtonOnPress} />
        ) : title === '기간' ? (
          <View style={styles.dateContainer}>
            <EventDateButton title="시작일" onPress={() => {}} />
            <EventDateButton title="종료일" onPress={() => {}} />
          </View>
        ) : title === '이벤트 설명' ? (
          <STextArea placeholder="상세 설명 (200자 내외)" />
        ) : (
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
        )
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

export default BusinessContentText;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
    gap: SWidth * 8,
  },

  listButton: {
    borderWidth: 1.25,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    borderRadius: SWidth * 8,
    paddingHorizontal: SWidth * 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: SWidth * 48,
  },

  addressContainer: {
    gap: SWidth * 8,
  },

  dateContainer: {
    flexDirection: 'row',
    gap: SWidth * 8,
  },

  textAreaStyle: {
    width: '100%',
    minHeight: SWidth * 104,
    borderWidth: 1.25,
    borderColor: '#E5E5E5',
    borderRadius: SWidth * 8,
    padding: SWidth * 12,
  },
});
