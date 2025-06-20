import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import BAddButton from '../../components/BusinessPage/BAddButton';
import EventAdd from '../../components/BusinessPage/Event/EventAdd';
import EventList from '../../components/BusinessPage/Event/EventList';
import {BDataProps} from '../../utils/types/businessType';

type BasicInformationProps = {
  data: BDataProps;
};

const EventInformation = ({data}: BasicInformationProps) => {
  const [eventAdd, setEventAdd] = useState(false);

  return (
    <View style={styles.container}>
      <BAddButton title="이벤트 추가" onPress={() => setEventAdd(!eventAdd)} />
      {!eventAdd ? (
        <EventList data={data} setEventUpdate={setEventAdd} />
      ) : (
        <EventAdd setEventUpdate={setEventAdd} />
      )}
    </View>
  );
};

export default EventInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 24,
  },
});
