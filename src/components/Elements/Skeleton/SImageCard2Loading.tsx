// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import SkeletonContent from 'react-native-skeleton-content';
// import {colors, SWidth} from '../../../../globalStyle';
// import {SkeletonProps} from '../../../utils/types/type';
// const SImageCard2Loading = ({count}: SkeletonProps) => {
//   return Array.from({length: count}).map((_, index) => (
//     <View
//       key={index}
//       style={{
//         borderRadius: SWidth * 8,
//         overflow: 'hidden',
//         boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.05)',
//         backgroundColor: colors.white,
//       }}>
//       <SkeletonContent isLoading={true}>
//         <View style={{flexDirection: 'row'}}>
//           <View style={{width: SWidth * 110, height: SWidth * 110}} />
//           <View
//             style={{
//               flex: 1,
//               paddingTop: SWidth * 8,
//               paddingHorizontal: SWidth * 12,
//               gap: SWidth * 12,
//             }}>
//             <View style={{borderRadius: SWidth * 8}}>
//               <View style={{height: SWidth * 32, justifyContent: 'center'}}>
//                 <View style={{width: '85%', height: SWidth * 24}} />
//               </View>
//               <View style={{width: '50%', height: SWidth * 22}} />
//             </View>
//             <View
//               style={{
//                 width: '60%',
//                 height: SWidth * 24,
//                 borderRadius: SWidth * 8,
//               }}
//             />
//           </View>
//         </View>
//       </SkeletonContent>
//     </View>
//   ));
// };

// export default SImageCard2Loading;

// const styles = StyleSheet.create({});
