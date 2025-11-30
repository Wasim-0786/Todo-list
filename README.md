


``` 
// main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//App.jsx

import './App.css'
import Head from './components/head'
import Input from './components/Input'

function App() {


  return (
    <>
      <div>
        <Head/>
        <Input/>
      </div>
        
    </>
  )
}

export default App


// components/Head.jsx

import React from 'react'

const Head = () => {
  return (
    <div className="bg-fuchsia-950 text-white h-[70px] flex items-center place-content-center font-bold text-4xl">
       My todolist
       </div>
  )
}

export default Head

// component/Input.jsx

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

```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
