
import { Provider } from 'react-redux'
import './App.css'
import AppRoutes from './routes'
import { store } from './store'

function App() {

  return (
    <div className="container">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
      
    </div>
  )
}

export default App
