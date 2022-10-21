import spells from '../data/spells.js'
import proficiencies from '../data/proficiencies.js'

// ************ TODO *************** change this to be one function

function getSpellsByQuery(query) {
  const spellsFiltered = spells.filter(spell => {
    const lowercaseQuery = query.toLowerCase()
    const lowerCaseSpellName = spell.name.toLowerCase()
    if(lowerCaseSpellName.includes(lowercaseQuery)) return spell
  })
  const spellsMapped = spellsFiltered.map(spell => (
    {
      label: spell.name,
      value: spell.index,
      description: spell.url
    }
  ))
  if(spellsMapped.length > 25) spellsMapped.length = 25
  return spellsMapped
}

function getProficienciesByQuery(query) {
  const proficienciesFiltered = proficiencies.filter(proficiency => {
    const lowercaseQuery = query.toLowerCase()
    const lowerCaseProficiencyName = proficiency.name.toLowerCase()
    if(lowerCaseProficiencyName.includes(lowercaseQuery)) return proficiency
  })
  const proficienciesMapped = proficienciesFiltered.map(proficiency => (
    {
      label: proficiency.name,
      value: proficiency.index,
      description: proficiency.url
    }
  ))
  if(proficienciesMapped.length > 25) proficienciesMapped.length = 25
  return proficienciesMapped
}

export {
  getSpellsByQuery,
  getProficienciesByQuery
}