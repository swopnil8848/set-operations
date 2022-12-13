import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Last = () => {
    const[fibo,setFibo] = useState("");

    const {register,handleSubmit,watch,setValue} = useForm({
        defaultValues:{
            value:''
        }
    })

    useEffect(() => {
      const val = watch('value');
      let imp = [""];
      let a = 0;
      let b = 1;
      for(let i = 0;i<parseInt(val);i++){
        console.log("this is being run");
        let c = a+b;
        a = b;
        b=c;
        imp[i] = b;
        console.log("imp:::",imp[i]);
        // console.log("imp:::",i);
      }  
      // setFibo(imp);
      const fibon = [0,1,...imp].toString()
      setFibo(fibon);
      
    }, [watch("value")])
    
  return (
    <div>
        <div className='h-screen flex justify-center items-center'>
        <form>
            <p className='text-2xl font-bold my-5 h-[3rem]'>FIBONACCI SERIE</p>
            <input type="text" {...register("value")} className='font-bold text-green-900 rounded-lg h-[3rem]' placeholder='how may fiboncaii numbers would you like to see' />
            <div className='text-green-900 text-xl font-bold'>the first {watch("value")} are {fibo}</div>
        </form>
        </div>
    </div>
  )
}

export default Last