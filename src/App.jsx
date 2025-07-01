import './App.css'
import Layout from './components/Layout'
import Homepage from './Pages/Homepage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
