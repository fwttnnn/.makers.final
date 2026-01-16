import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { add } from "@/stores/tickets/actions"

import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardMedia from "@mui/material/CardMedia"

import services from "@/services"
import placeholder from "@/data/movie"
import { dayCategory } from "@/utils/date"
import type { Day } from "@/utils/date"

export default () => {
  const dispatch = useDispatch()

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [query, setQuery] = useState<string>("")
  const [data, setData] = useState<typeof placeholder>(placeholder)

  useEffect(() => {
    if (!query.trim()) return

    const timeout = setTimeout(() => {
      (async () => {
        const data = await services.movie.search(query)
        setData(() => data)
      })()
    }, 600)

    return () => clearTimeout(timeout)
  }, [query])

  return (
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!selectedId) return

      const form = e.currentTarget
      const formData = new FormData(form)

      const date = formData.get("date") as string
      const ticketTotal = Number(formData.get("total"))

      const day = new Date(date).toLocaleDateString("en-US", { weekday: "long" })

      const movie = data.Search.find((m) => m.imdbID === selectedId)
      if (!movie) return

      const prices = {
        "weekdays": Number(formData.get("weekday")),
        "weekends": Number(formData.get("weekend")),
        "sunday": Number(formData.get("sunday")),
      }

      const category = dayCategory(day as Day)
      if (!category) return

      dispatch(add(date, {
        total: ticketTotal,
        price: prices[category],
        movie: {
          title: movie.Title,
          id: movie.imdbID,
        },
      }))
    }}>
      <Stack spacing={2}>
        <TextField
          label="Movie Name (Search)"
          name="movie/search"
          onChange={(e) => {
            setQuery(e.currentTarget.value)
            setSelectedId(null)
          }}
        />

        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            pb: 2,
            scrollbarWidth: "thin",
          }}
        >
          {data.Search.map((m) => {
            const selected = selectedId === m.imdbID

            return (
              <Card
                key={m.imdbID}
                onClick={() => setSelectedId((prev) => prev === m.imdbID ? null : m.imdbID)}
                sx={{
                  minWidth: 122,
                  width: 122,
                  flexShrink: 0,
                  cursor: "pointer",
                  border: selected
                    ? "2px solid"
                    : "2px solid transparent",
                  borderColor: selected
                    ? "primary.main"
                    : "transparent",
                  transition: "all 0.2s ease",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={m.Poster}
                    alt={m.Title}
                    sx={{
                      width: 122,
                      height: 180,
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      p: 1,
                    }}
                    noWrap
                  >
                    {m.Title}
                  </Typography>
                </CardActionArea>
              </Card>
            )
          })}
        </Box>

        <TextField
          label="Tickets Total"
          name="total"
          type="number"
          slotProps={{
            htmlInput: {
              defaultValue: 1,
              min: 1,
              step: 1,
            }
          }}
          required
        />

        <TextField
          label="Date"
          type="date"
          name="date"
          defaultValue={new Date().toISOString().slice(0, 10)}
          slotProps={{
            inputLabel: { shrink: true },
          }}
          required
        />

        <br />

        <Typography>
          Entry Fee
        </Typography>

        <TextField
          label="Weekday (Mon - Thu)"
          name="weekday"
          type="number"
          slotProps={{
            htmlInput: {
              defaultValue: 30000,
              min: 10000,
              step: 10000,
            }
          }}
          required
        />

        <TextField
          label="Weekend (Fri - Sat)"
          name="weekend"
          type="number"
          slotProps={{
            htmlInput: {
              defaultValue: 50000,
              min: 10000,
              step: 10000,
            }
          }}
          required
        />

        <TextField
          label="Sunday"
          name="sunday"
          type="number"
          slotProps={{
            htmlInput: {
              defaultValue: 40000,
              min: 10000,
              step: 10000,
            }
          }}
          required
        />

        <Button
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </Stack>
    </form>
  )
}
