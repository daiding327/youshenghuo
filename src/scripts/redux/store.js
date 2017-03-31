import { createStore } from 'redux'

function changer(state = {title:'�� ? ��Ӱ ? ����'}, action) {
  switch (action.type) {
    case 'SETTITLE':
      return { title: action.title }
    default:
      return state
  }
}

// �� Redux state ת���� ����� props
function mapStateToProps(state) {
  return {
    value: state.title
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
