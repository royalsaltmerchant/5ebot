import fetch from "node-fetch"

async function fetchGet(url: string) {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data

  } catch(err) {
    throw err;
  }
}

export default fetchGet