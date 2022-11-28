import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/:id' element={<UserPage/>}/>
      </Routes>
    </>
  );
}

export default App;
