import { searchLocation, fetchState } from '@/services/home';

const HomeModel = {
  namespace: 'home',
  state: {
    location: {},
  },
  effects: {
    *fetchState({ payload }, { call, put }) {
      const response = yield call(fetchState, payload);
      yield put({
        type: 'save',
        payload: { location: response },
      });
    },
    *fetchSearch({ payload }, { call, put }) {
      const response = yield call(searchLocation, payload);
      yield put({
        type: 'save',
        payload: { location: response },
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default HomeModel;
