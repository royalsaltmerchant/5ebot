function getDataByQuery(data: {name: string, index: string, url: string}[], query: string) {
  const lowercaseQueryTokens = query.toLowerCase().split(/\s+/).filter(Boolean);  // Split by whitespace and filter out empty tokens

  return data
    .filter(item => {
      const lowerCaseItemName = item.name.toLowerCase();
      return lowercaseQueryTokens.every(token => lowerCaseItemName.includes(token));  // Check if every token is included in the name
    })
    .map(item => ({
      label: item.name,
      value: item.index,
      description: item.url
    }))
    .slice(0, 25);
}

export {
  getDataByQuery
}