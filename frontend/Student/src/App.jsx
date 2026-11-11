import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; 
import PersonalDetails from './Pages/PersonalDetails';
import Classes from './Pages/classes';
import './App.css';
import { useState } from 'react';


function  App  () {
    const [activepage, setActivepage ] = useState('home');
    
    return(
       <>
       <div className="header">
            <h1>Student Management System</h1>
       </div>

        <div className="main-layout">
       <div className="container-Navbar">

        <Navbar  setActivepage={setActivepage}/>
       </div>

       <div className="container-Personal-Details">
         {activepage  === 'home' && (
            <div className='welcome-page'>
        <h2> Welcome student management sysytem </h2> </div>

       )} 

       {activepage === 'personal' && (
         <PersonalDetails />
       )}

       {activepage === 'Classes' && (
        <Classes/>
       )}
       {/* <Navbar setactivepage ={setactivepage}></Navbar> */}
        
       </div>

       <div className="AI-Chatbot">
       <h1>AI Ana</h1>
       </div>
       </div>

       <div className="footer">
        <Footer />
       </div>

       
      

       </>
    );
}

export default App;