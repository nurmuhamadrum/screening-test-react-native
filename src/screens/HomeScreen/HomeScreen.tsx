import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/StackParamList';
import {useDispatch, useSelector} from 'react-redux';
import {getPostsFetch} from '../../redux/actions';
import {Post} from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = (props: Props) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {posts, loading} = useSelector((state: any) => state.data);
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);

  useEffect(() => {
    setData(posts);
  }, [posts]);

  const handlerNavigateDetail = useCallback(
    (dataDetail: Post) => {
      navigation.navigate('Detail', {data: dataDetail});
    },
    [navigation],
  );

  const handlerSearch = useCallback(
    (text: string) => {
      const filtered = posts.filter((val: Post) =>
        val?.title.toLowerCase().includes(text.toLowerCase()),
      );
      setData(filtered);
    },
    [posts],
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => handlerSearch(text)}
        placeholder="Search"
      />
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.containerField}
              onPress={() => handlerNavigateDetail(item)}>
              <Text style={styles.titleId}>{item?.id}.</Text>
              <Text>{item?.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  containerField: {
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleId: {
    marginRight: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreen;
