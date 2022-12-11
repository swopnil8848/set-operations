import React from 'react'
import { useForm } from 'react-hook-form';


const FuzzySet = () => {
    const {register} = useForm({
        defaultValues:{
            Fuzzy1:'',
            Fuzzy2:'',
        }
    })
  return (
    <div>
    <h1 className='flex font-bold text-green-900 align-middle items-center justify-center text-3xl py-auto h-[6rem]'>FUZZY SET</h1>
    <div className='h-screen flex justify-center items-center'>
        <div>
            <p>please enetr your fuzzy set in <span className='text-green-900 font-bold text-xl'>(first,second),(third,fourth)...</span> format</p>
            <form>
                <input type="text" {...register("Fuzzy1")} className='font-bold text-green-900 rounded-lg w-full my-2 h-10' placeholder='enter your first fuzzy set'/>
                <input type="text" {...register("Fuzzy2")} className='font-bold text-green-900 rounded-lg w-full my-2 h-10' placeholder='enter your second fuzzy set'/>
            </form>
        </div>
    </div>
    </div>
  )
}

export default FuzzySet;