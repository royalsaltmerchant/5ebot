function getDataByQuery(data: {name: string, index: string, url: string}[], query: string) {
  const dataFiltered = data.filter(item => {
    const lowercaseQuery = query.toLowerCase()
    const lowerCaseItemName = item.name.toLowerCase()
    if(lowerCaseItemName.includes(lowercaseQuery)) return item
    else return;
  })
  const dataMapped = dataFiltered.map(item => (
    {
      label: item.name,
      value: item.index,
      description: item.url
    }
  ))
  if(dataMapped.length > 25) dataMapped.length = 25
  return dataMapped
}

export {
  getDataByQuery
}