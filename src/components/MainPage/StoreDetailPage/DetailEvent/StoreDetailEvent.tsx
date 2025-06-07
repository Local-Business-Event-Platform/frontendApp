import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import useCustomNavigation from '../../../../hooks/useCustomNavigation';
import Calendar24 from '../../../../utils/svgs/businessPage/Calendar24';
import Heart24 from '../../../../utils/svgs/myPage/Heart24';
import {StoreDetailEventProps} from '../../../../utils/types/StoreDetailType';
import SText from '../../../Elements/SText';

const StoreDetailEvent = ({data}: StoreDetailEventProps) => {
  const navigation = useCustomNavigation();

  return (
    <View style={styles.container}>
      {/* <SFlatList
        data={data}
        gap={SWidth * 16}
        paddingHorizontal={SWidth * 24}
        paddingBottom={SWidth * 24}
        horizontal
        skeleton={<EventItemLoading count={4} />}
        dataItem={({item}) => (
          <StoreDetailEventItem
            item={item}
            onPress={() =>
              navigation.navigate(screenNames.EVENT_DETAIL_PAGE, {
                id: item.id,
                itemImgs: item.img,
              })
            }
          />
        )}
      /> */}
      <View style={styles.itemContainer}>
        {data.map(item => (
          <Pressable key={item.id} style={styles.itemBox} onPress={() => {}}>
            <View style={styles.itemTitleContainer}>
              <SText fStyle="BlgSb" text={item.title} />
              <Pressable style={styles.itemIconBox} onPress={() => {}}>
                <Heart24 color={colors.icon.interactive.primary} />
              </Pressable>
            </View>
            <View style={styles.itemContentBox}>
              <Calendar24 color={colors.icon.interactive.primary} />
              <SText
                fStyle="BmdMd"
                text={item.content}
                color={colors.text.secondary}
              />
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default StoreDetailEvent;

const styles = StyleSheet.create({
  container: {
    paddingTop: SWidth * 24,
  },
  listItem: {
    width: SWidth * 304,
    borderRadius: SWidth * 8,
    overflow: 'hidden',
    boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.05)',
  },

  imgContainer: {
    width: '100%',
    height: SWidth * 140,
  },

  itemContentContainer: {
    padding: SWidth * 16,
    gap: SWidth * 16,
  },

  contentText: {
    gap: SWidth * 8,
  },

  //dddd
  itemContainer: {
    gap: SWidth * 16,
    marginHorizontal: SWidth * 16.5,
  },

  itemBox: {
    width: '100%',
    padding: SWidth * 16,
    borderRadius: SWidth * 8,
    borderWidth: 1.5,
    borderColor: colors.border.infoSubtle,
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.12)',
  },

  itemTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemIconBox: {
    width: SWidth * 32,
    height: SWidth * 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemContentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },
});
