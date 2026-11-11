import { useState } from 'react';

function Classes() {
    const [classes, setClasses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        ClassName: '',
        Timeing: '',
        Mintus: '',
        Teacher: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setClasses((currentClasses) => [...currentClasses, { ...formData, id: Date.now() }]);
        setFormData({ 
            ClassName: '', 
            Timeing: '', 
            Mintus: '',
            Teacher: ''
             });
        setShowForm(false);
    };

    const deleteClass = (id) => {
        setClasses(classes.filter((classItem) => classItem.id !== id));
    };

    return (
        <div className="Class-details">
            <div className="detail-hearder">
                <h2>Classes Information</h2>
                <button onClick={() => setShowForm(true)}>+ Class</button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input name="ClassName" placeholder="Class name" value={formData.ClassName} onChange={handleChange} required />
                    <input name="Timeing" placeholder="Time" value={formData.Timeing} onChange={handleChange} required />
                    <input name="Mintus" placeholder="Minutes" value={formData.Mintus} onChange={handleChange} required />
                    <input name="Teacher" placeholder="Teacher" value={formData.Teacher} onChange={handleChange} required />
                    <button type="submit">Save Class</button>
                    <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                </form>
            )}

            <div className='Classes-list'>
                {classes.map((classItem)=> (
                    <div className='classes-card' key={classItem.id}>

                        <div>
                           <h3> {classItem.ClassName}</h3>
                           <p>Timeing:{classItem.Timeing}</p>
                           <p>Mintus:{classItem.Mintus}</p>
                           <p>Teacher:{classItem.Teacher}</p>
                           
                        </div>
                        <button onClick={() => deleteClass(classItem.id)}>Delete</button> 
                    </div>
                )
            )}
            </div>
        </div>
    );
}

export default Classes;