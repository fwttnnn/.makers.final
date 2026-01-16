import History from "@/components/Movie/History"
import Input from "@/components/Movie/Input"

import Header from "@/components/Header"

import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"

export default () => {
  return (
    <Stack>
      <Header />
      <Grid
        container
        spacing={2}
      >
        <Grid
          size={7}
          // sx={{ outline: "1px solid red" }}
        >
          <History />
        </Grid>
        <Grid
          size={5}
          // sx={{ outline: "1px solid red" }}
        >
          <Input />
        </Grid>
      </Grid>
    </Stack>
  )
}
