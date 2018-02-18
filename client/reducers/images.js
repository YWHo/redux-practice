const images = (state = [], action) => {
    switch (action.type) {
      case 'ADD_IMAGE':
        return [
          ...state,
          {
            id: action.id,
            imgLink: action.imgLink
          }
        ]
  
      default:
        return state
    }
  }
  
  export default images