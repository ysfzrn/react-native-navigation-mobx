"use strict";
import mobx, { observable, computed, action } from "mobx";

class NavStore {
  @observable route = undefined;

  @action("Route değişiyor")
  handleChangeRoute(val) {
    this.route = val;
  }

  appInitialized() {
    this.route = 'root';
  }

}

export default new NavStore()

