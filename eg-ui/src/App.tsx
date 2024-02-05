
import { Box } from '@mui/material';
import { Suspense, lazy } from 'react';
import {Route,Routes,  BrowserRouter as Router,} from 'react-router-dom';
import HomePage from './components/HomePage';
const SignIn = lazy(()=>import('./components/SignIn'));
const SignUp = lazy(()=>import('./components/SignUp'));
const ErrorPage = lazy(()=>import('./components/ErrorPage'));

function App() {


  return (
        <Box sx={{
          width:'100%'
        }}>
    <Router>
      <Suspense>  

      <Routes>
        <Route path={'/'} element={<SignIn/>} />
        <Route path={'/signup'} element={<SignUp/>} />
        <Route path={'/forgot-password'} element={<ErrorPage/>} />
        <Route path={'/home-page'} element={<HomePage/>} />
        <Route path={'*'} element={<ErrorPage/>} />
      </Routes>
      </Suspense>
    </Router>
        </Box>
  )
}

export default App
