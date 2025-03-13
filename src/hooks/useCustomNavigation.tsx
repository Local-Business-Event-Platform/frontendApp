import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const useCustomNavigation = () => {
  return useNavigation<NativeStackNavigationProp<ParamListBase>>();
};

export default useCustomNavigation;
