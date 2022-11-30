import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import {Provider} from 'react-redux'
import {store} from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/:id' element={<UserPage/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
