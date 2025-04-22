import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
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

  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);

  const handlerNavigateDetail = useCallback(
    (data: Post) => {
      navigation.navigate('Detail', { data });
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.containerField}
              onPress={() => handlerNavigateDetail(item)}>
              <Text style={styles.titleId}>{item?.id}.</Text>
              <Text>{item?.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
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
});

export default HomeScreen;
