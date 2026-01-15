import { useDispatch, useSelector } from "react-redux"
import type { Root } from "@/stores"
import type { State as Ticket } from "@/stores/tickets/reducer"
import { increment, decrement } from "@/stores/tickets/actions"

export default function App() {
  const dispatch = useDispatch()
  const ticket: Ticket = useSelector((r: Root) => r.tickets)

  return (
    <div>
      <p>count: {ticket.count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}
