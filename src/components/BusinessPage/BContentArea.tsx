import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import {BContentAreaProps} from '../../utils/types/businessType';
import SText from '../Elements/SText';
import STextArea from '../Elements/STextArea';

const BContentArea = ({
  title,
  color,
  underline,
  onClick,
  content,
  contentColor = colors.disabled,
  value,
  onChangeText,
}: BContentAreaProps) => {
  const [TextCount, setTextCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.rowLine}>
        <SText
          fStyle="BmdMd"
          text={title}
          color={color}
          textDecorationLine={underline}
          lineColor={color}
        />
        {onClick && <SText fStyle="BmdMd" text={`${TextCount} / 200`} />}
      </View>
      {onClick ? (
        <STextArea
          value={value}
          onChangeText={text => {
            onChangeText(text);
            setTextCount(text.length);
          }}
          placeholder={`${
            title === '이벤트 설명'
              ? '상세 설명 (200자 내외)'
              : '가게 상세 설명 (200자 내외)'
          }`}
        />
      ) : (
        <SText
          nLine={10}
          flexShrink={1}
          lineHeight={SWidth * 24}
          fStyle="BxlSb"
          text={content}
          color={contentColor}
        />
      )}
    </View>
  );
};

export default BContentArea;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
    gap: SWidth * 8,
  },

  rowLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
