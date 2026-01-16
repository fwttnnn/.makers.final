export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const

export const DAY_EN_TO_IDN_MAP: Record<Day, string> = {
  "Monday": "Senin",
  "Tuesday": "Selasa",
  "Wednesday": "Rabu",
  "Thursday": "Kamis",
  "Friday": "Jum'at",
  "Saturday": "Sabtu",
  "Sunday": "Minggu",
} as const

type Day = typeof days[number]

export const daysBahasa = (day: Day) => {
  return DAY_EN_TO_IDN_MAP[day]
}
