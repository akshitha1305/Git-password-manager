import './App.css'
import AddPassword from './Components/AddPassword'

const App = () => (
  <div className="bg-container">
    <img
      alt="app logo"
      className="app-logo"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
    />
    <AddPassword />
  </div>
)

export default App
