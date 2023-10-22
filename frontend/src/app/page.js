"use client"
import React, {useEffect, useState} from 'react';
import { Avatar, List, message } from 'antd';
import axios from 'axios';
import Link from 'next/link';

export default function Page() {

  const [todos, setTodos]=useState([]);
  useEffect(() => {
    getTodos();
  }, [])

  const getTodos=async()=>{
   await axios.get("http://localhost:3000/api").then((response)=>{
      setTodos(response?.data);
    }).catch((err)=>{
      console.log(err, "Error");
    })
  }
  

  const deleteTodo=async(id)=>{
    await axios.delete(`http://localhost:3000/api/${id}`).then((response)=>{
      if(response?.data?.message=='Todo deleted successfully'){
        let oldTodoList=[...todos];
        const newTodoList = oldTodoList.filter(item => item._id !== id);
        setTodos(newTodoList);
        message.info("Todo Deleted Successfully")
      }else{
        message.error("Unable to Delete")
      }
     }).catch((err)=>{
       console.log(err, "Error");
       message.error("Unable to Delete")
     })
   }
   

  return (
    <>
    <br/>
    <Link href={'/todo/create'} className='mx-16 mt-8'>Create Todo</Link>
    <List
    itemLayout="horizontal"
    dataSource={todos}
    className='m-16'
    renderItem={(item, index) => (
      <List.Item key={index}  actions={[<Link className='text-blue-500' key="list-loadmore-edit" href={`/todo/edit/${item?._id}`} >Edit</Link>, <Link className='text-red-500' key="list-loadmore-more" href={'/'} onClick={(e)=>{deleteTodo(item?._id)}}>Delete</Link>]}>
      
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://ant.design">{item?.title}</a>}
          description={item?.description}
        />
      </List.Item>
    )}
  />
  </>
  )
}