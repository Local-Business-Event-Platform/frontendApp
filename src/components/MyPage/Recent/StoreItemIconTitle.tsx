import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SText from '../../Elements/SText';

type StoreItemIconTitleProps = {
  icon: React.JSX.Element;
  title: string;
  category?: string;
  km?: string;
};

const StoreItemIconTitle = ({
  icon,
  title,
  category,
  km,
}: StoreItemIconTitleProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowTitleContainer}>
        {icon}
        <SText fStyle="BmdMd" text={title} color={colors.text.secondary} />
        {category && (
          <SText
            fStyle="BmdMd"
            text={`(${category})`}
            color={colors.text.secondary}
          />
        )}
      </View>

      {km && (
        <>
          <SText fStyle="BmdMd" text={'·'} color={colors.text.secondary} />
          <SText fStyle="BmdMd" text={km} color={colors.text.secondary} />
        </>
      )}
    </View>
  );
};

export default StoreItemIconTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },

  rowTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },
});
