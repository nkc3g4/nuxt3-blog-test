import { acceptHMRUpdate, defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      id: Number,
      token: JSON.parse(JSON.stringify(window.sessionStorage.getItem("token"))),
    };
  },

  getters: {
    getId: (state) => state.id,
    getToken: (state) => state.token,
  },

  actions: {
    setAccountId(key: number) {},
    setToken(key: string) {
      this.token = key;
      window.sessionStorage.setItem("token", this.token);
    },
  },
  // state 数据持久化
  /* persist: {
        enabled: true
    } */
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
