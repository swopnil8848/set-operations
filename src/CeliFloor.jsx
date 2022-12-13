import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const CeliFloor = () => {
    const [top,setTop] = useState();
    const [bot,setBot] = useState();

    const {register,handleSubmit,watch,setValue} = useForm({
        defaultValues:{
            value:''
        }
    })
    useEffect(() => {
      const valu= watch("value");
      const val = parseInt(valu);
      const floor = Math.floor(val);
      const celling = Math.ceil(val);
    setTop(celling);
    setBot(floor);
    }, [watch("value")])
    
  return (
    <div>
        <div className='flex justify-center h-screen'>
            <div>
            <p className='text-xl text-green-900'>
                enter the number to claculate its floor value and celling value 
            </p>
            <input type="text" className='text-xl text-green-600 h-[4rem] rounded-lg' {...register("value")} placeholder='enter the number'/>
            <div className='text-green-800 text-xl font-bold'>celling value of {watch("value")} is :{top}</div>
            <div className='text-green-800 text-xl font-bold'>floor value {watch("value")} is:{bot}</div>
            </div>
        </div>
    </div>
  )
}

export default CeliFloor;