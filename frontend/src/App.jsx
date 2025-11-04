import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Crud from "./pages/Crud/Crud";
import Account from "./pages/Account/Account";
import Add from "./components/CrudAdd/Add";
import Edit from "./components/CrudUpdate/Edit";


const App = () => {
  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
         {/* ==Before Login==== */}
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        
        {/* <Route path='/add' element={<Add/>}/> */}
        <Route path='/edit/:id' element={<Edit/>}/>

        {/* ==Afer Login==== */}
        {isUserSignedIn && <Route path='/add' element={<Add/>}/>}
        {isUserSignedIn && <Route path='/crud' element={<Crud/>}/>}
        {isUserSignedIn && <Route path='/account' element={<Account/>}/>}
      </Routes>
    </div>
  )
};

export default App;


//====1st time======
// return (
//   <div className="App">
//     <Navbar/>
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/login" element={<Login/>}/>
//       <Route path="/signup" element={<SignUp/>}/>
//       <Route path="/account" element={<Account/>}/>
//       <Route path="/crud" element={<Crud/>}/>
//     </Routes>
//   </div>
// );







