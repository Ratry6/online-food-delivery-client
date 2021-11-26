import axios from 'axios';

import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
    

 axios.post('https://secret-taiga-95902.herokuapp.com/services', data)
 .then(res => {
     if(res.data.insertedId){
         alert('your service added successfully');
         reset();
     }
 })
};


    return (
        <div className="add-service">
        <h2>Add a Service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
  <textarea {...register("description")} placeholder="description"/>
  
  <input {...register("img")} placeholder="img url" />
  <input type="submit" />
</form>
    </div>
    );
};

export default AddService;