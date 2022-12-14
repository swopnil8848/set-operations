import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Gcd = () => {
  const [check,setCheck] = useState(false);
    const{register,watch} = useForm({
        defaultValues:{
            val1:1,
            val2:1
        }
    })
    useEffect(() => {
      let val1 = watch("val1");
      let val2 = watch("val2");

      let quotient = Math.floor(val1/val2);
    //   console.log("val1/val2",Math.floor(val1/val2));
      let remainder = val1%val2; 
    //   console.log("val1%val2",val1%val2);
    //   console.log("this is being called");
      let i = 0;
    if(check==true){
      while((val2!=0||val1!=0)&&(i<=10)){
        let temp  = val1 % val2;
        val1 = val2;
        val2 = temp;
        
        console.log("answer>>>>>",val1);
        i++;
      }
      setCheck(false);
    }
    }, [watch()])
    
  return (
    <div>
        <div>
          <div>
            <h1 className='text-xl text-green-900 font-bold'>GCD</h1>
          </div>
            <form>
              
                <input type="text" className='text-xl text-green-600 h-[4rem] rounded-lg' {...register("val1")} placeholder='enter the first number'/>
                <input type="text" className='text-xl text-green-600 h-[4rem] rounded-lg' {...register("val2")} placeholder='enter the second number'/>
            </form>
                <button className='text-emerald-900 font-bold text-xl' onClick={c=>setCheck(true)}>find gcd</button>
        </div>
    </div>
  )
}

export default Gcd