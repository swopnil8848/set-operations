import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Cross = () => {
        const [render_finall,setFinall] = useState("");

        const {register,handleSubmit,watch,setValue} = useForm({
            defaultValues:{
                first:'',
                second:''
            }
        })

        useEffect(() => {
            const first = watch('first');
            const second = watch('second');
            // console.log("first",first.split(' '));
            // console.log("second",second.split(' '));
            const set1 = first.split(" ").filter(c=>c!=" ");
            const set2 = second.split(" ").filter(c=>c!=" ");
            let final = [];
            const arr = set1.map((c)=>{
                return set2.map((k)=>[...final,[c,k]]);
            })
            console.log("we have arr::",arr.toString());
            const abc = arr.toString().split("")
            const f = abc.filter(c=>c!="")
            console.log("::::::::::::::::::::::::::::::::::::::::::");
            const a = arr.map(c=>{
                return c.map(k=>k.join());
            })
            console.log("a::::::",a.toString());
            const k = a.toString().split("");
            const b = k.filter(c=>c!="");
            let finall = "";
            let i = 0;
            while(i < f.length){
                console.log(f[i])
                // if((f[i]==",")&&(f[i+1]==",")){
                //     // continue;
                // }
                // else{
                    finall +="(" +f[i]+f[i+1]+f[i+2]+ ")";
                // }
                i=i+4;
            }
            console.log("after this:");
            console.log(">>>>>>>>>>>>>>>>>>",finall);
            console.log(">>>>>>>>>>>>>>>>>>",b);
            setFinall(finall);
            // console.log("a::::",a.map(c=>{
            //     console.log(c);
            // }));
            // let a = [1,2]
            // let b = [3,4,5]
            // a.map((c)=>{
            //     final.push(c);
            // })
            // console.log(final)

            
        }, [watch()])


  return (
    <div className='h-screen flex justify-center items-center'>
        <form>
            <p className='text-green-900 font-bold text-xl'>TO FIND A x B;</p> 
            <p className='text-blue-900 text-sm font-semibold'>note: you can enter single digit characters only</p>  
            <div><input type="text" {...register('first')} className='text-xl h-[2rem] rounded-lg text-green hover:bg-green-800 my-2' placeholder='enter your first set of fucntion'  /></div>
            <div><input type="text" {...register('second')} className='text-xl h-[2rem] rounded-lg text-green hover:bg-green-800 my-2' placeholder='enter your second set of fucntion'  /></div>
            <p className='text-xl font-semibold p-2 text-emerald-600'>cartesian cross:: {render_finall}</p>
        </form>
    </div>
  )
}

export default Cross;