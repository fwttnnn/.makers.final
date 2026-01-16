import { useSelector } from "react-redux"
import type { Root } from "@/stores"
import type { Ticket } from "@/stores/tickets/type"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"

export default function History() {
  const tickets: Record<string, Ticket[]> = useSelector((r: Root) => r.tickets.values)

  return (
    <Stack spacing={3}>
      {Object.entries(tickets).map(([d, values]) => {
        const date = new Date(d)

        const formatted = date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })

        const sold = values.reduce((acc, t) => acc + t.total, 0)
        const gain = values.reduce((acc, t) => acc + t.price * t.total, 0)

        const formatIDR = (value: number) =>
          new Intl.NumberFormat("id-ID").format(value)

        return (
          <Card key={d} variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {formatted}
                <Typography
                  component="span"
                  variant="body2"
                  color="text.secondary"
                  sx={{ ml: 1 }}
                >
                  ({date.toLocaleDateString("en-GB", { weekday: "long" })})
                </Typography>
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Stack spacing={1}>
                {values.map((t, i) => (
                  <Box
                    key={`--ticket-${i}`}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="body2">
                      {t.movie.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Rp. {formatIDR(t.price * t.total)} ({t.total})
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="subtitle2">
                  Sold: {sold}
                </Typography>

                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                >
                  Gain: Rp. {formatIDR(gain)}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        )
      })}
    </Stack>
  )
}
