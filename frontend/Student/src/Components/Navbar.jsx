import {useState} from 'react';  


   const Navbar = () => {

    const [open, setOpen] = useState(false);
    return(
        <header>

        <div className='container-1'>

            <div className='nav-grid'>

            <div className='logo'>
                <h1>Student Corner</h1>
                </div>
               
                <nav>

                    <li><a href="#"> Personal Details</a></li>

                    
                    < li ClassName='dropdown'> 
                   <div className='dropdown-btn' onClick={() => setOpen(!open)}><span>Academic</span>
                   <span className='icon'>{open ? '^' : 'v'}</span></div>

                     {open && (
                        <ul className='dropdown-Menu'>
                            <li  className='dropdown-item'><a href="#">Clases</a></li>
                            <li className='dropdown-item'><a href="#">Teachers</a></li>
                            <li className='dropdown-item'><a href="#">Schedule</a></li>
                        </ul>
                     )}
                    </li>
                    
                    <li><a href="#about"> Subjects</a></li>
                    <li><a href="#services"> Attendence</a></li>
                    <li> <a href="#Results">Results</a></li>
                    <li> <a href="#Results">Notice</a></li>
                    <li><a href="#contact"> Dashboard</a></li>
                    

                </nav>
            </div>
            </div>

            </header>
    )
}

export default Navbar;