import { createStore } from 'redux'

function changer(state = {bgcolor:'rgba(0,0,0,0.3)'}, action) {
  switch (action.type) {
    case 'changecolor':
      return { bgcolor: action.bgcolor }
    default:
      return state
  }
}

// 将 Redux state 转化成 组件的 props
function mapStateToProps(state) {
  return {
    bgcolor: state.bgcolor
  }
}

// 将 Redux actions 转化成 组件的 props
function mapDispatchToProps(dispatch) {
  return {
    onChange: (action) => dispatch(action)
  }
}

let store = createStore(changer)

export { mapStateToProps, mapDispatchToProps, store }
