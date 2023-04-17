import { getDefaultNormalizer } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import {  json } from 'react-router-dom'
import Api from './Api/Api'
// import { Button } from 'bootstrap'
import { Form } from 'react-bootstrap-v5'
import { Button } from 'react-bootstrap-v5'
import Swal from 'sweetalert2'



export default function Checkbox() {
  const [data, setdata] = useState([])
  const [ans, setans] = useState()
  
  let  getData = ()=>{ 
    console.log("Data")
    Api.fetchData('Fruits').then(result=>
       {
        // setdata([...result])
        setdata(result)
       }
    )}
   
    let handleCheck = (id) => {

      // console.log(event.target.checked)
      // console.log(event.target.value)

      //  setdata([...data])

      //  console.log(data)

var updateItem = data.map((item) => item.id === id ? {...item,checked:!item.checked} : item)

setdata(updateItem)

      //  setdata(event.target.checked)

    //   var a = event.target.value

    //   console.log(a)
    // setans(a)

    //   if(event.target.checked){
    //     setdata([...data,event.target.value])
    //   }
    //   else {
    //     setdata(data.filter)
    //   }
     }

     let Submit = (event) =>{
      event.preventDefault()
          var checkitem = data.filter((item) => item.checked === false)
          if (checkitem.length>=1) {
            // var checkedName = checkitem.map((item)=>item.name).join(',')
            var checkedName = checkitem.map((item)=>item.name)
            // alert('selected language'+':' +  " " + checkedName)

            
            Swal.fire({
              title: 'Selected Courses' +':' +  " " + checkedName,
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
          }
          else {
            alert('Select an available courses from the list')
          }

          //  alert("select fruit is:" + (event.target.value) )
          //  alert("select fruit is:" + Json.Stringify(ans) )
     }
  useEffect(() => {
  getData()
}, [])
  
  return (

    <>
    {/* <form onSubmit={Submit}>
      {data?data.map((item) => (
    <div>
      
      <input type='checkbox'  chacked={item.checked}  onChange={()=>handleCheck(item.id)} />
       <span>{item.name}</span>
      </div>
      )) : <h2>Loding...</h2>}

      <button >Submit</button>
      </form> */}
<div class=" row align-items-center border border-success p-2 mb-2 border-2" style={{height:'100vh'}} >
  <div class="mx-auto col-10 col-md-8 col-lg-6">
 <Form onSubmit={Submit}>
     
 {data?data.map((item) => (
     
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" style={{fontSize:'2em'}} label={item.name} chacked={item.checked}  onChange={()=>handleCheck(item.id)} />
      </Form.Group>
       )) : <h2>Loding...</h2>}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
    </>
  )
}
