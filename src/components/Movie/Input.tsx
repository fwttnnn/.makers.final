import { useDispatch, useSelector } from "react-redux"
import type { Root } from "@/stores"
import type { State as Ticket } from "@/stores/tickets/reducer"
import { increment, decrement } from "@/stores/tickets/actions"

import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export default function App() {
  const dispatch = useDispatch()
  const ticket: Ticket = useSelector((r: Root) => r.tickets)

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h6">
        count: {ticket.count}
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </Stack>
    </Stack>
  )
}
