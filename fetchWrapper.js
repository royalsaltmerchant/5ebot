import fetch from "node-fetch"

async function fetchGet(url, options) {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export default fetchGet