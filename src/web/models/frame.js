
const initialState = {
};

export default {
  namespace: 'frame',
  state: initialState,
  effects: {
  },
  reducers: {
    update(state, { payload: data }) {
      return { ...state, ...data };
    },
  },
};
