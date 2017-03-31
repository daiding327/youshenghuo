import { createStore } from 'redux'

function changer(state = {bgcolor:'rgba(0,0,0,0.3)'}, action) {
  switch (action.type) {
    case 'changecolor':
      return { bgcolor: action.bgcolor }
    default:
      return state
  }
}

// �� Redux state ת���� ����� props
function mapStateToProps(state) {
  return {
    bgcolor: state.bgcolor
  }
}

// �� Redux actions ת���� ����� props
function mapDispatchToProps(dispatch) {
  return {
    onChange: (action) => dispatch(action)
  }
}

let store = createStore(changer)

export { mapStateToProps, mapDispatchToProps, store }
