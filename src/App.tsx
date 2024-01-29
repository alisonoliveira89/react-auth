import { Provider } from 'react-redux'
import Login from './components/Login'
import { GlobalCss } from './styles'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <Login />
    </Provider>
  )
}

export default App
