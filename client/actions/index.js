let nextWordId = 0
let nextImgId = 1000

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

export const addImage = (imgLink) => {
  return {
    type: 'ADD_IMAGE',
    id: nextImgId++,
    imgLink
  }
}