import { Module } from "vuex"
import { State } from "../index"
import { Todo } from '../../type/types'

const initialState = {
  todos: [] as Todo[]
}

export type TodoState = typeof initialState

export default {
  state: {},
} as Module<TodoState, State>
