import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'My Counter Title',
  }),
  getters: {
    oddOrEven: (state) => {
      return state.count % 2 === 1 ? 'odd' : 'even';
    },
  },
  actions: {
    modifyCount(value: number) {
      this.count += value;
    },
  },
});
