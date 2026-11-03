import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; 
import PersonalDetails from './Pages/PersonalDetails';
import './App.css';

function  App  () {
    return(
       <>
       <div className="header">
            <h1>Student Management System</h1>
       </div>

        <div className="main-layout">
       <div className="container-Navbar">
        <Navbar />
       </div>

       <div className="container-Personal-Details">
        <PersonalDetails />
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