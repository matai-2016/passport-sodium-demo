const initialState = []

function forms (state = initialState, action) {
  switch (action.type) {
    case 'CONFIRM_ORDER':
      return {
        ...state
      }
    case 'UPDATE_ORDER_ITEM_FIELD':
      return {
        ...state, [action.key]: action.value
      }
    case 'UPDATE_MODIFIERS':
      let newModifiers = [...state.modifiers]
      if (newModifiers.includes(action.value)) {
        newModifiers = newModifiers.filter((modifier) => {
          return (modifier !== action.value)
        })
      } else {
        newModifiers = [...newModifiers, action.value]
      }
      return {
        ...state,
        modifiers: newModifiers
      }
    case 'UPDATE_ORDER_FIELD':
      return {
        ...state, [action.key]: action.value
      }
    default:
      return state
  }
}

export default forms
