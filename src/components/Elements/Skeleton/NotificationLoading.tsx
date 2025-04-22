// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import SkeletonContent from 'react-native-skeleton-content';
// import {colors, SWidth} from '../../../../globalStyle';
// import {SkeletonProps} from '../../../utils/types/type';

// const NotificationLoading = ({count}: SkeletonProps) => {
//   return Array.from({length: count}).map((_, index) => (
//     <SkeletonContent key={index} isLoading={true}>
//       <View style={styles.container}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{width: SWidth * 130, height: SWidth * 24}} />
//           <View style={{width: SWidth * 50, height: SWidth * 24}} />
//         </View>
//         <View style={{width: SWidth * 250, height: SWidth * 24}} />
//       </View>
//     </SkeletonContent>
//   ));
// };

// export default NotificationLoading;

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: SWidth * 24,
//     paddingVertical: SWidth * 20,
//     backgroundColor: colors.white,
//     gap: SWidth * 8,
//   },
// });
