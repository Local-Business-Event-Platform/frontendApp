import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {BContentListProps} from '../../utils/types/businessType';
import SListButton from '../Elements/SListButton';
import SText from '../Elements/SText';

const BContentList = ({
  title,
  content,
  color,
  underline,
  onClick,
  listButtonTitle,
  onPress,
}: BContentListProps) => {
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
        <SListButton title={listButtonTitle} onPress={onPress} />
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

export default BContentList;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
    gap: SWidth * 8,
  },
});
