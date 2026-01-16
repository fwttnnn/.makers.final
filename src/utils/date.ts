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

export type Day = typeof days[number]

export const daysBahasa = (day: Day) => {
  return DAY_EN_TO_IDN_MAP[day]
}

const weekdays: readonly string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
]

const weekends: readonly string[] = [
  "Friday",
  "Saturday",
]

const sunday: readonly string[] = [
  "Sunday",
] as const

export const dayCategory = (day: Day) => {
  if (weekdays.includes(day)) {
    return "weekdays"
  }

  if (weekends.includes(day)) {
    return "weekends"
  }

  if (sunday.includes(day)) {
    return "sunday"
  }

  return null
}
