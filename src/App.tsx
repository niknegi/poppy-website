import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DocsPage from './pages/DocsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/docs" element={<DocsPage />} />
    </Routes>
  )
}
