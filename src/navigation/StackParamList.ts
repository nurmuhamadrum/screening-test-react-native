import {Post} from '../types';

export type RootStackParamList = {
  Home: undefined;
  Detail: {
    data: Post;
  };
};
