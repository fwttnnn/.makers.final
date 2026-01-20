import { legacy_createStore as createStore, combineReducers } from "redux"
import ticketsReducer from "@/stores/tickets/reducer"

const reducer = combineReducers({
  tickets: ticketsReducer,
})

export type Root = ReturnType<typeof reducer>
export const store = createStore(
  reducer,
  typeof window !== "undefined" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__())
