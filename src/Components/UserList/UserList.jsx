import { useEffect, useState } from "react";
import NameCard from "../NameCard/NameCard"
import axios from "axios";
import InputText from "../InputText/InputText";

const UserList = ()=>{
    
const [list,setList] = useState([]);
const [inputText,setInputText] = useState('');
useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=2')
    .then((res)=>{
        setList(res.data.data);
    });
    }, [])
    
    const postUser = ()=>{
    if(inputText.trim()){
    axios.post('https://reqres.in/api/users?page=2',{first_name:inputText})
    .then((res)=>{
        console.log(res.data);
        const temp = [...list];
        temp.push(res.data);
        setList(temp);
    });
        }
        setInputText('');
    }

    const inputChangeHandler = (e)=>{
        setInputText(e.target.value);
    }
    const profiles = list.map((user,index)=>{
        return (
        <NameCard key = {index} name= {user.first_name} />
        )
    })   

    return (
        <>
        <InputText inputChangeHandler ={inputChangeHandler} value ={inputText} postUser={postUser}/>
    {profiles}
    </>
    );
};
  
export default UserList;