import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { ExampleStateInterface } from './state'

const getters: GetterTree<ExampleStateInterface, StoreInterface> = {
  someAction (/* context */) {
    // someAction
  }
}

export default getters
