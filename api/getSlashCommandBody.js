async function getSlashCommandBody(slashCommandName) {
  
  switch(slashCommandName) {
    case 'skills':
      return {
        name: "skills",
        description: "Returns info about 5e character skills",
        type: 1,
      }
    case 'ability-scores':
      return {
        name: "ability-scores",
        description: "Returns info about 5e character ability scores",
        type: 1,
      }
    case 'alignments':
      return {
        name: "alignments",
        description: "Returns info about 5e character alignments",
        type: 1,
      }
    case 'languages':
      return {
        name: "languages",
        description: "Returns info about 5e character languages",
        type: 1,
      }
    case 'races':
      return {
        name: "races",
        description: "Returns info about 5e character races",
        type: 1,
      }
    default: return null
  }
}

export default getSlashCommandBody