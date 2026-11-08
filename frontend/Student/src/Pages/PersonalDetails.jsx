import {useState} from 'react';
import './Personal.css'

function PersonalDetails () {

    const [students, setStudents] = useState([]);
    const [ showForm, setshowForm] = useState(false)

    const [formData, setFormData] = useState({
          name: '',
          roll: '',
         email: '',
         phone: '',
         address: '',
         dob: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    
    }

    // const handleSubmit  = (e) => {
    //     e.preventDefault();

    //     setStudents([...students, {...formData,
    //         id: Date.now()

    //     }]);

    //     setFormData({
    //         name: '',
    //         roll: '',
    //         email: '',
    //         phone: '',
    //         address: '',
    //         dob: ''
    //     });

    //     setshowForm(false);

    // }

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:5000/api/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Student save nahi hua");
        }

        // Backend se saved student ko state mein add karo
        setStudents([...students, result.student]);

        // Form reset
        setFormData({
            name: '',
            roll: '',
            phone: '',
            dob: '',
            email: '',
            address:''
        });

        setshowForm(false);

        alert("Student Added Successfully!");

    } catch (error) {
        console.log("Error:", error.message);
        alert(error.message);
    }
};

    const deleteStudents =(id) => {
        setStudents( students.filter(student => student.id !== id))
    }
            
    return (
        <div className="personal-details">

            <div className="details-header">
                <h2>Personal Details</h2>

                <button onClick={() => setshowForm(true)}>
                    + Add Student
                </button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit} className="student-form">

                    <h3>Fill Student Details</h3>

                    <input name="name" placeholder="Student Name"
                        value={formData.name} onChange={handleChange} required />

                    <input name="roll" placeholder="Roll Number"
                        value={formData.roll} onChange={handleChange} required />

                    <input name="phone" type="tel" placeholder="Phone Number"
                        value={formData.phone} onChange={handleChange} required />

                    <input name="dob" type="date"
                        value={formData.dob} onChange={handleChange} required />

                    <input name="email" type="email" placeholder="Email Address"
                        value={formData.email} onChange={handleChange} required />

                    <input name="address" type="address" placeholder='address'
                     value={formData.address} onChange={handleChange} required />

                    <button type="submit">Save Student</button>

                    <button type="button" onClick={() => setshowForm(false)}>
                        Cancel
                    </button>

                </form>
            )}

            <div className="student-list">

                {students.map((student) => (

                    <div className="student-card" key={student.id}>

                        <div>
                            <h3>{student.name}</h3>
                            <p>Roll No: {student.roll}</p>
                            <p>Phone: {student.phone}</p>
                            <p>DOB: {student.dob}</p>
                            <p>Email: {student.email}</p>
                            <p>Address {student.address}</p>
                        </div>

                        <button onClick={() => deleteStudents(student.id)}>
                            Delete
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
        
        
        
    
}





export default PersonalDetails;
