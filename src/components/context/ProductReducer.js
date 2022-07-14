export const productReducer = (state, action) => {
  switch (action.type) {
    case 'Filter_By_Type':
      return { ...state, type: action.payload }
    case 'Filter_By_Search':
      return { ...state, searchQuery: action.payload }
    case 'Clear':
      return {
        type: 'All',
      }
    default:
      return state
  }
}
