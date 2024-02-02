import { Link } from 'react-router-dom';
import './index.css';
export default function ErrorPage() {
  return (
    <>
 <div className="section">
  <h1 className="error">404</h1>
  <div className="page">Ooops!!! The page you are looking for is not found</div>
  <Link className="back-home" to={'/'}>Back to home</Link>
</div>   
    </>
  );
}