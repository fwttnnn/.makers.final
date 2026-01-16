export const search = async (title: string) => {
  if (!title.trim()) return null

  const result = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(title)}&apikey=d592fe1a`)
  if (!result.ok) {
    throw new Error("Failed to fetch from OMDb")
  }

  const data = await result.json()
  return {
    ...data,
    Search: data.Search
      ? Array.from(new Map(data.Search.map((m: any) => [m.imdbID, m])).values())
      : [],
  }
}

export default {
  search
}
