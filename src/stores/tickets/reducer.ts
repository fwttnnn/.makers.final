import { ADD, DEL } from "@/stores/tickets/actions"
import type { Ticket } from "@/stores/tickets/type"

export type State = {
  values: Record<string, Array<Ticket>>
}

type AddAction = {
  type: typeof ADD
  payload: {
    date: string
    ticket: Ticket
  }
}

type DelAction = {
  type: typeof DEL
  payload: {
    date: string
    movieId: string
  }
}

type Action = AddAction | DelAction

const initialState = {
  values: {},
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADD: {
      const { date, ticket } = action.payload

      if (!date)
        return state

      if (ticket.price < 10000)
        return state

      if (ticket.total < 1)
        return state

      if (!ticket.movie.title || !ticket.movie.id)
        return state

      return {
        ...state,
        values: {
          ...state.values,
          [date]: [
            ...(state.values[date] ?? []),
            ticket,
          ],
        }
      }
    }

    case DEL: {
      const { date, movieId } = action.payload

      return {
        ...state,
        values: {
          ...state.values,
          [date]: state.values[date]?.filter((t) => t.movie.id !== movieId) ?? [],
        },
      }
    }

    default:
      return state
  }
}
