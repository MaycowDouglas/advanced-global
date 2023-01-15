export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export function ISOStringToNormalDate(ISOString: string): string {
  const date = new Date(ISOString)
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export function capitalize(sentence: string, selectedWords: number[] = []): string {
  const words = sentence.split(' ')

  const capitalized = words.map((word) => {
    if (selectedWords.length > 0) {
      if (selectedWords.includes(words.indexOf(word))) {
        const firstLetter = word[0].toUpperCase()
        const otherLetters = word.substring(1).toLocaleLowerCase()

        return firstLetter + otherLetters
      }
      return word
    }

    const firstLetter = word[0].toUpperCase()
    const otherLetters = word.substring(1).toLocaleLowerCase()

    return firstLetter + otherLetters
  })

  return capitalized.toString().replaceAll(',', ' ')
}
