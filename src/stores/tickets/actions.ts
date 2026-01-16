import type { Ticket } from "@/stores/tickets/type"

export const ADD = "ADD"
export const DEL = "DEL"

export const add = (date: string, ticket: Ticket) => ({
  type: ADD,
  payload: {
    date,
    ticket,
  },
})

export const del = (date: string, movieId: string) => ({
  type: DEL,
  payload: {
    date,
    movieId
  }
})
