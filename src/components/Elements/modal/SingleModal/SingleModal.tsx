import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import useCustomNavigation from '../../../../hooks/useCustomNavigation';
import {
  screenNames,
  singleModalList,
  singleModalTypes,
} from '../../../../utils/listData';
import ErrorTwo56 from '../../../../utils/svgs/auth/ErrorTwo56';
import IdError56 from '../../../../utils/svgs/auth/IdError56';
import Kakao24 from '../../../../utils/svgs/auth/Kakao24';
import Success56 from '../../../../utils/svgs/auth/Success56';
import Warning56 from '../../../../utils/svgs/modal/Warning56';
import {SingleModalProps} from '../../../../utils/types/modalType';
import SButton56 from '../../SButton56';
import SText from '../../SText';

const SingleModal = ({
  content,
  userID,
  idType,
  setModalOpen,
}: SingleModalProps) => {
  const navigation = useCustomNavigation();
  const modalData = singleModalList.find(item => item.type === content);
  const modalIcon = () => {
    switch (content) {
      case singleModalTypes.PASSWORD:
        return <Success56 />;
      case singleModalTypes.AUTH:
        return <ErrorTwo56 />;
      case singleModalTypes.LOGIN_ERROR:
      case singleModalTypes.SERVER:
        return <Warning56 />;
      case singleModalTypes.ID_ERROR:
        return <IdError56 />;
    }
  };

  const buttonColor = () => {
    switch (content) {
      case singleModalTypes.PASSWORD:
        return colors.bg.interactive.primary;
      case singleModalTypes.LOGIN_ERROR:
      case singleModalTypes.AUTH:
      case singleModalTypes.SERVER:
      case singleModalTypes.ID_ERROR:
        return colors.bg.interactive.subtle;
    }
  };

  const buttonText = () => {
    switch (content) {
      case singleModalTypes.PASSWORD:
      case singleModalTypes.LOGIN_ERROR:
      case singleModalTypes.AUTH:
      case singleModalTypes.SERVER:
      case singleModalTypes.ID_ERROR:
        return '확인';
    }
  };

  const buttonTextColor = () => {
    switch (content) {
      case singleModalTypes.PASSWORD:
        return colors.text.interactive.inverse;
      case singleModalTypes.LOGIN_ERROR:
      case singleModalTypes.AUTH:
      case singleModalTypes.SERVER:
      case singleModalTypes.ID_ERROR:
        return colors.text.danger;
    }
  };

  const buttonOnPress = () => {
    switch (content) {
      case singleModalTypes.PASSWORD:
        return () => {
          navigation.reset({
            index: 0,
            routes: [{name: screenNames.LOGIN}],
          });
          setModalOpen(false);
        };
      case singleModalTypes.AUTH:
      case singleModalTypes.LOGIN_ERROR:
      case singleModalTypes.SERVER:
      case singleModalTypes.ID_ERROR:
        return () => {
          setModalOpen(false);
        };
    }
  };

  return (
    <View style={styles.container}>
      {modalIcon()}
      <View style={styles.textContainer}>
        <View style={{alignItems: 'center'}}>
          <SText fStyle="BxlSb" text={modalData?.title!} />
          {modalData?.title2 && (
            <SText fStyle="BxlSb" text={modalData?.title2} />
          )}
        </View>
        <View>
          <SText
            flexShrink={1}
            nLine={10}
            lineHeight={SWidth * 24}
            fStyle="BlgRg"
            textAlign="center"
            text={modalData?.content!}
            color={colors.text.secondary}
          />
          {modalData?.content2 && (
            <SText
              flexShrink={1}
              nLine={10}
              lineHeight={SWidth * 24}
              fStyle="BlgRg"
              textAlign="center"
              text={modalData?.content2}
              color={colors.text.secondary}
            />
          )}
        </View>
      </View>
      {userID && (
        <View style={styles.idContainer}>
          <SText fStyle="BlgMd" text={userID} />
          {idType === 'kakao' && <Kakao24 />}
        </View>
      )}
      <View style={{width: '100%', height: SWidth * 56}}>
        <SButton56
          title={buttonText()!}
          textColor={buttonTextColor()!}
          onPress={buttonOnPress()!}
          ButtonColor={buttonColor()}
        />
      </View>
    </View>
  );
};

export default SingleModal;

const styles = StyleSheet.create({
  container: {
    paddingTop: SWidth * 24,
    padding: SWidth * 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: SWidth * 28,
  },

  textContainer: {
    gap: SWidth * 4,
    alignItems: 'center',
  },

  idContainer: {
    width: '100%',
    height: SWidth * 48,
    paddingHorizontal: SWidth * 12,
    borderWidth: 1.25,
    flexDirection: 'row',
    borderColor: colors.border.secondary,
    backgroundColor: colors.bg.primary,
    borderRadius: SWidth * 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
