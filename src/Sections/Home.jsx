import React,{useState,useEffect} from 'react'
import Axios from "axios"
import "../Sections/Home.css"
import { Link } from 'react-router-dom'

export default function Header() {
  const [arre,setArre]=useState([])
  const [select, setSelect]=useState([])
  // const date = select 

  useEffect(()=>{
    getStudent()
  }, [])

 function getStudent(){
  Axios.get("http://myjson.dit.upm.es/api/bins/j8nl")
    .then(ress=>{
      setArre(ress.data)
      setSelect(ress.data)
    })
    .catch(err =>{
      console.log(err);
  })
  }

  const searchFun=(e)=>{
    let search = select.filter((i)=>{
      return(i.name.toLowerCase().includes((e.target.value).toLowerCase()))
    })
    setArre(search)
  }

  const selectFun=(e)=>{
    let cat = select.filter((i)=>{
      return(i.category===e.target.value)
    })
    setArre(cat)
    if(e.target.value==="all"){
      setArre(select)
    }
  }

  const danFun=(e)=>{
    let dan = arre.filter((i)=>{
      return(Number(i.cost)>e)
    })
    setArre(dan)
  }

  const gachaFun=(e)=>{
    if(e>100){
      let gacha = arre.filter((i)=>{
        return(Number(i.cost)<e) 
      })
      setArre(gacha)
    }
  }

  function addFun(e){
    let massiv = []
    let localDate = localStorage.getItem("massiv")
    if(localDate){
      massiv = JSON.parse(localDate)
      massiv.push(e)
      localStorage.setItem("massiv",JSON.stringify(massiv))
    }else{
      massiv.push(e)
      localStorage.setItem("massiv",JSON.stringify(massiv))

    }
  }

  

  return (
    <div className='container'>
      <div className='form__section'>
        <div className='select__section'>
          <select class="form-select" onChange={(e)=>selectFun(e)} aria-label="Default select example">
            <option value="all">All</option>
            <option value="classic">Classic</option>
            <option value="Smart">Smart</option>
            <option value="compas">Compas</option>
            <option value="Sport">Sport</option>
            <option value="Quartz">Quartz</option>
          </select>
        </div>
        <div className='dan__gacha'>
          <input onChange={(e)=>danFun(e.target.value)} placeholder='-Dan' className='' type="text" />
          <label htmlFor=""><b>- Dan</b></label>
          <input onChange={(e)=>gachaFun(e.target.value)} placeholder='-Gacha' className='' type="text" />
          <label htmlFor=""><b>- Gacha</b></label>
        </div>
      </div>
      <div className='sorch__section'>
        <input onChange={(e)=>searchFun(e)} placeholder='Search' type="search" className='form-control'/>
      </div>
      <div className='cards '>
      
      {
        (arre.length >0) ? (
          arre.map((e,index)=>{
            return(
              <div className='card main__card shadow' key={index}>
                <img src={e.img_src} alt="Rosim" />
                <h3 className='my-2'>{e.name}</h3>
                <h4>Cost: {e.cost}$</h4>
                <Link state={{id:e.id}} to={`/about/${e.id}`}><button className='btn btn-primary' >Ko'rish</button></Link>
                <button onClick={()=>addFun(e)} className='btn btn-primary'>Sotib olish</button>
                
              </div>
            )
          })
        ):
        (
          <h4 >loading...</h4>
        )
      }
      
    </div>
    </div>
  )
}
