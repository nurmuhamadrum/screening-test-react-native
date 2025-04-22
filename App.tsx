import React from 'react';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation';
import myFirstReducer from './src/redux/reducers';
import mySaga from './src/redux/sagas';

const rootReducer = combineReducers({
  data: myFirstReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
  devTools: true,
});

sagaMiddleware.run(mySaga);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
