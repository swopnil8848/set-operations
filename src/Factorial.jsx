import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const Factorial = () => {
    const [factorial,useFactorial] = useState();
    const {register,watch,handleSubmit} = useForm({
        defaultValues:{
            factorial:'',
        }
    })

    useEffect(() => {
      console.log("watch(factorial):::",watch("factorial"));
    
      
    }, [watch()])
    
  return (

    <div>
        <div  className='h-screen flex justify-center items-center align-middle'>
        <form onSubmit={handleSubmit((data)=>{
                console.log("i am the data",data);
            })}>
            <h1 className='text-blue-900 text-3xl'>i am the first</h1>
            <input type="text"  {...register("factorial")} className='font-bold text-xl text-green-600 w-fit h-[5rem] rounded-lg' placeholder='enter number to find its factorial'/>
            <button type='submit'>submit</button>
        </form>
        </div>

    </div>
  )
}

export default Factorial;