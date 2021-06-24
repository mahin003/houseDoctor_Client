import React, { useState } from 'react';
import axios from 'axios';
const AddService = () => {
    const [services,setServices] = useState();
    const [imgUrl,setImgUrl] = useState();
    //AddService
    const ServiceFormHandle = (e) => {
            console.log("Clicked ", e.target["ServiceName"].value)
            console.log("Clicked ", e.target["ServiceDescription"].value)
          
            const ServiceCollection ={
                _name: e.target["ServiceName"].value,
                _description: e.target["ServiceDescription"].value,
                _price:e.target["ServicePrice"].value,
                _url: imgUrl
            }
            //Adding Services to DataBAse
            
         const url = `https://frozen-fortress-40113.herokuapp.com/addServices`;
         fetch(url,{
             method: "POST",
             headers:{
                 'content-type': 'application/json'
             },
             body:JSON.stringify(ServiceCollection)
         }).then(res=> console.log('server ',res))

        console.log("event ",ServiceCollection);
        // alert("Data added successfully");

        e.target["ServiceName"].value="";
        e.target["ServiceDescription"].value="";
        e.target["ServicePrice"].value="";
        alert("New Service Added")
        e.preventDefault();


    }
  

    //handleImage
    const handleImage=(e)=>{
        
        const imageData = new FormData();
        console.log("imgg ",e.target.files[0])
        imageData.set('key', '48dfa5fec1cfcd2fb2ae174153240e85');
        imageData.append('image',e.target.files[0]);
        console.log(imageData)
        axios.post('https://api.imgbb.com/1/upload', imageData).then(function (response) {
            setImgUrl(response.data.data.display_url);
        }).catch(function (err) {
            console.log(err);
        })
    }

    return (
        <div >
            <form className="formAddService" onSubmit={ServiceFormHandle}>
                <h1>New Service</h1>
                <table>
                    <tr>
                        <td>
                        <label>Service Name: </label>
                        </td>
                        <td>
                            <input type="text" placeholder="Idea" name="ServiceName"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label>Service Description: </label>
                        </td>
                        <td>
                        <textarea class="form-control"name="ServiceDescription" id="" rows="4"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label>Price: </label>
                        </td>
                        <td>
                            <input type="text" placeholder="Price" name="ServicePrice"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label>Upload Image: </label>
                        </td>
                        <td>
                            <input type="file" onChange={handleImage} placeholder="Upload" />
                        </td>
                    </tr>
                </table>
                 <input type="submit"/>
            </form>
        </div>
    );
};

export default AddService;