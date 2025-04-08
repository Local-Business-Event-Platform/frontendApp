import React from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {SWidth} from '../../../globalStyle';

type SFlatListProps = {
  data: any[];
  gap?: number;
  paddingBottom?: number;
  skeleton: React.ReactNode;
  dataItem: ListRenderItem<any>;
  horizontal?: boolean;
};

const SFlatList = ({
  data,
  gap,
  paddingBottom,
  skeleton,
  horizontal,
  dataItem,
}: SFlatListProps) => {
  return (
    <FlatList
      data={data}
      overScrollMode="never"
      horizontal={horizontal}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{
        paddingHorizontal: SWidth * 16,
        paddingBottom: paddingBottom,
        gap: gap,
      }}
      ListEmptyComponent={() => skeleton}
      renderItem={dataItem}
    />
  );
};

export default SFlatList;

const styles = StyleSheet.create({});
