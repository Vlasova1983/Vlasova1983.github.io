import styles from './AddFotm.module.css';
import { PropTypes } from 'prop-types';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

const AddForm = ({ addEvent }) => {
    const navigate = useNavigate();
    const [title, setInTitle] = useState('');
    const [description, setInDescription] = useState('');
    const [date, setInDate] = useState('');
    const [time, setInTime] = useState('');
    const [location, setInLocation] = useState('');
    const [category, setInCategory] = useState('');
    const [priority, setInPriority] = useState(''); 
 

    const handleChange = event => { 
      const { name, value } = event.target; 
      
      if (name === 'title') { setInTitle(value) }
      if (name === 'description') { setInDescription(value) }
      if (name === 'date') { setInDate(value) }
      if (name === 'time') { setInTime(value) }
      if (name === 'location') { setInLocation(value) }
      if (name === 'category') { setInCategory(value) }
      if (name === 'priority') { setInPriority(value) }
  }; 
   
  
    const handleFormSubmit = evt => {       
        evt.preventDefault();    
        addEvent({title, description, date, time, location, category, priority});
        setInTitle('');
        setInDescription('');
        setInDate('');
        setInTime('');
        setInLocation('');
        setInCategory('');
        setInPriority('');
        navigate(-1);
  }; 
   
  return (
        <form className={styles.form} onSubmit={handleFormSubmit}>
            <div className={styles.flex}>               
                <div className={styles.box1}>
                    <label className={styles.lable} htmlFor="title">
                        <p>Title</p>
                    </label>
                    <input className={styles.input} id="title" type="text" name="title" onChange={handleChange} value={title} placeholder="Search title..."   required/>
                </div>
                <div className={styles.box2}>
                    <label className={styles.lable} htmlFor="description">
                    <p>Description</p>
                    </label>
                    <input className={styles.description} id="description" type="text" name="description" onChange={handleChange} value={description} placeholder="Search description..." required/>
                </div>
                <div className={styles.box3}>
                    <label className={styles.lable} htmlFor="date" >
                    <p>Select date</p>
                    </label>
                    <input className={styles.input} id="date" type="date" name="date" onChange={handleChange} value={date} placeholder="" required/>
                </div>
                <div className={styles.box4}>
                    <label className={styles.lable} htmlFor="time" >
                    <p>Select date</p>
                    </label>
                    <input className={styles.input} id="time" type="time" name="time" onChange={handleChange} value={time} placeholder="" required/>
                </div>                
                <div className={styles.box5}>
                    <label className={styles.lable} htmlFor="location" >
                    <p>Location</p>
                    </label>
                    <input className={styles.input} id="location" type="text" name="location" onChange={handleChange} value={location} placeholder="Search location..." required/>
                </div>              
                <div className={styles.box6}>
                    <label  className={styles.lable} htmlFor="favorite-category" >
                    <p>Сategory</p>
                  </label> 
                  <input className={styles.input}  onChange={handleChange} list="category" name="category" id="favorite-category" required/>
                    <datalist id="category" >
                        <option >Art</option>
                        <option>Music</option>
                        <option >Business</option>
                        <option >Conference</option>
                        <option >Workshop</option>
                        <option>Party</option>
                        <option>Sport</option>                              
                    </datalist>
                </div>
                <div className={styles.box7}>
                    <label className={styles.lable} htmlFor="picture" >
                    <p>Add picture</p>
                    </label>
                    <input className={styles.input} id="picture" type="text" name="picture" onChange={handleChange}  disabled placeholder="" required/>
                </div>
                <div className={styles.box8}>
                    <label className={styles.lable} htmlFor="favorite-priority" >
                        <p>Priority</p>
                    </label>
                    <input className={styles.input}  onChange={handleChange} list="priority" name="priority" id="favorite-priority" required/>                 
                        <datalist id="priority">
                            <option >Hight</option>
                            <option >Medium</option>
                            <option>Low</option>                                         
                        </datalist>
                </div>            
            </div>
            <div className={styles.boxButton}>
                <button className={styles.button} type="submit">Save</button>
            </div>        
        </form>      
  );    
}

export default AddForm;
 AddForm.propTypes = {    
    addEvent:PropTypes.func
}