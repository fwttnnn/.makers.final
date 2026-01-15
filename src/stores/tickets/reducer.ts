import { INCREMENT, DECREMENT } from "@/stores/tickets/actions"

const initialState = {
  count: 0,
}

export type State = typeof initialState

export default (state: State = initialState, action: { type: string }): State => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }

    case DECREMENT:
      return { ...state, count: state.count - 1 }

    default:
      return state
  }
}
