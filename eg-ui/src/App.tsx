
import { Container } from '@mui/material';
import { Suspense, lazy } from 'react';
import {Route,Routes,  BrowserRouter as Router,} from 'react-router-dom';
const SignIn = lazy(()=>import('./components/SignIn'));
const SignUp = lazy(()=>import('./components/SignUp'));
const ErrorPage = lazy(()=>import('./components/ErrorPage'));

function App() {


  return (
    <Router>
      <Suspense>  
      <Container maxWidth="sm">
      <Routes>
        <Route path={'/'} element={<SignIn/>} />
        <Route path={'/signup'} element={<SignUp/>} />
        <Route path={'/forgot-password'} element={<ErrorPage/>} />
        <Route path={'*'} element={<ErrorPage/>} />
      </Routes>
      </Container>

      </Suspense>
    </Router>
  )
}

export default App
