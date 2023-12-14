
import '../assets/nav.css';
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';

function Login()
{
    return(
        <div style={{
            
            marginLeft: '100px',
            marginTop: '50px',
            color: 'white',
            padding: '100px',
            width: '200px',
            borderRadius: '30px'
        }}>
            <h1>Content Discovery</h1>
            <h3>LOG IN</h3>
            <form>
                <label>Username :
                    <input type="text" />
                </label><br></br>
                <label>Password :
                    <input type="password" />
                </label>
            </form><br></br>
            <button><Link to='/Home' className='link'>SIGN IN</Link></button>
        </div>
    )
}
function Home()
{
    return(
        <div >

        </div>
    )
}
function  Register()
{
    return(
        <div style={{
            marginLeft: '100px',
            marginTop: '50px',
            color: 'white',
            padding: '100px',
            width: '270px',
            display:'block',
            borderRadius: '30px'}}>
                <h1>Content Discovery</h1>
             <h3>SIGN UP</h3>
            <form>
                <label>Name&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                    <input type="text" />
                </label>
                <p> </p>
                <label>Gmail  Id:&nbsp;&nbsp;
                    <input type="text" />
                </label>
                <br></br>
                <br></br>
                <label>Password:
                    <input type="text" />
                </label>
            </form><br></br>
            <button><Link to='/' className='link'>Register</Link></button>
        </div>
    )
}
function Navbar()
{
    return (
        <header>
        <Router>

            <nav>
                <ul>
                    <li ><Link to='/Home' className='link'>HOME</Link></li>
                    <li ><Link to='/' className='link'>LOGIN</Link></li>
                    <li ><Link to='/register'className='link'>SIGN UP</Link></li>

                </ul>
            </nav>
            <Routes>
                <Route exact path='/Home' element={<Home/>} />
                <Route exact path='/' element={< Login/>} />
                <Route exact path='/register' element={<Register/>} />
            </Routes>
        </Router>
        </header>
    )
}
export default Navbar;