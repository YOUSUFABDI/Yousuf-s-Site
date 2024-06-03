export default async function Fetcher(...args: Parameters<typeof fetch>) {
  const res = await fetch(...args)

  if (!res.ok) {
    throw new Error(`Fetch error: ${res.statusText}`)
  }

  return res.json()
}
