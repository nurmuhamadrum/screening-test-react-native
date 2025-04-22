export interface Action {
  type: string;
  payload?: Post[];
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface InitialState {
  posts: Post[];
  loading: boolean;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
