import Home from './components/home/Home';
import NoMatch from './components/shared/NoMatch';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Routes, Route } from 'react-router-dom';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<ProtectedRoute />}>
          
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route component={NoMatch} />
        </Routes>
      </>
    </FetchUser>
  </>
)

export default App;