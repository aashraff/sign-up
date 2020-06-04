import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { ExampleStateInterface } from './state'

const actions: ActionTree<ExampleStateInterface, StoreInterface> = {
  someAction (/* context */) {
    // someAction
  }
}

export default actions
