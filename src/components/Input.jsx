import React from 'react'
import { useState } from 'react';

const Input = () => {

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setmaintask([...maintask ,{title,desc}]);
    settitle("");
    setdesc("");
  }

  const handleDelete = (i) => {
    let copyTask = [...maintask];
    copyTask.splice(i,1);
    setmaintask(copyTask);
  }

  let rendertask = <h1>No task available...</h1>

  if(maintask.length > 0){

    rendertask = maintask.map((t,i) => {
        return(
          <div className="border-fuchsia-950 border-2 rounded-full m-2 p-2 flex justify-between" key={i}>
            <h3 className='p-2'>{t.title}</h3>
            <p className='p-2' >{t.desc}</p>
            <button onClick={()=>{handleDelete(i)}} className='bg-red-700 text-white rounded-full p-1 m-2'>delete</button>
          </div>
        );
    });
  }


  return (
    <>
      <form>
        <div className="flex justify-between m-5">
          <input className="p-2 border-fuchsia-950 border-2 rounded-2xl" type="text" placeholder='title' value={title} onChange={(e) => settitle(e.target.value)}/>
          <input className="p-2 border-fuchsia-950 border-2 rounded-2xl" type="text" placeholder='description' value={desc} onChange={(e) => setdesc(e.target.value)}/>
          <button className='rounded-2xl bg-fuchsia-950 text-white p-2' onClick={handleSubmit}> submit </button>
        </div>
      </form>
      <hr/>
      <div className="bg-cyan-100 p-3">
        <h1 className="text-center text-3xl font-serif mb-5">All Task</h1>
        {rendertask}
      </div>
      
      
    </>
  )
}

export default Input