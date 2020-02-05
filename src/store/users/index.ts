import { Module } from "vuex";
import { actions } from "./user.actions";
import { mutations } from "./user.mutations";
import { getters } from "./user.getters";
import { State } from "./userModel.model";

export const state: State = {
  users: []
};

export const users: Module<State, any> = {
  state,
  getters,
  mutations,
  actions
};
