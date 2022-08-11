// CONTEXT PROVIDER
import ContextProvider from "./context/context"
// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// PAGES
import Home from "./pages/home/Home"
import Auth from "./pages/auth/Auth"
import Dashboard from "./pages/dashboard/Dashboard"
import Table from "./pages/table/Table"
import ErrorPage from "./pages/error/ErrorPage"
// COMPONENTS
import { Footer } from "./components/footer/Footer"
import { Title } from "./components/title/Title"
import { Navbar } from "./components/navbar/Navbar"

function App() {
  return (
    <Router>
      <ContextProvider>
        <div className="container">
          <div className="content">
            <Navbar />
            <Title />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/table" element={<Table />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  )
}

export default App
