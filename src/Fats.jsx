import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const Fats = () => {
    const[fact,setFact] = useState("");

    const {register,handleSubmit,watch,setValue} = useForm({
        defaultValues:{
            value:''
        }
    })
    useEffect(() => {
      
        let val = parseInt(watch("value"));
        let a = val
        // while(a>=0){
        //     val = val*(val-1);
        //     a = a -1;
        // }
        let fact=1;
        for(let x=1;x<=val;x++){

            fact=fact*x; 
        }
        console.log(fact);
        setFact(fact);
      
    }, [watch()])
    
  return (
    <div>
        <div className='h-screen flex justify-center items-center'>
        <form>
            <p className='text-2xl font-bold my-5 h-[3rem]'>Factorial</p>
            <input type="text" {...register("value")} className='font-bold text-green-900 rounded-lg h-[3rem]' placeholder='how may fiboncaii numbers would you like to see' />
            <div className='text-green-900 text-xl font-bold'>factorial of {watch("value")} is {fact}</div>
        </form>
        </div>
    </div>
  )
}

export default Fats