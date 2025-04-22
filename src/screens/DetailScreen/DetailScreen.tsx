import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/StackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = (props: Props) => {
  const {route} = props;
  const dataDetail = route?.params?.data;
  return (
    <View>
      <Text>{dataDetail?.userId}</Text>
      <Text>{dataDetail?.id}</Text>
      <Text>{dataDetail?.title}</Text>
      <Text>{dataDetail?.body}</Text>
    </View>
  );
};

export default DetailScreen;
