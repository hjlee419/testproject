import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Setting from './pages/Setting';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';



export const App =() =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Setting />} />
        <Route path="/login" element={<Login />} />
        {/* 다른 라우트들 */}
      </Routes>
    </Router>
  );
}
export default App