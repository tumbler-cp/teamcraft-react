import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Signin from "./components/Auth/Signin"
import Signup from "./components/Auth/Signup"
import { UserProvider } from "./UserProvider"
import { DataProvider } from "./DataProvider"
import AuthGuard from "./components/Auth/AuthGuard"
import axios from "axios"
import NotFound from "./components/NotFound"

const App = () => {
  axios.defaults.baseURL = 'http://localhost:8000'

  return (
      <UserProvider>
        <DataProvider>
          <BrowserRouter>
            <div>
              <Routes>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/" element={<AuthGuard><Home/></AuthGuard>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
              </Routes>
            </div>
          </BrowserRouter>
        </DataProvider>
      </UserProvider>
  )
}

export default App
