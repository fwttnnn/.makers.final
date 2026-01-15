import { legacy_createStore as createStore, combineReducers } from "redux"
import ticketsReducer from "@/stores/tickets/reducer"

const reducer = combineReducers({
  tickets: ticketsReducer,
})

export type State = ReturnType<typeof reducer>
export const store = createStore(reducer)
