import React, { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function SetOperations() {
    const {register,handleSubmit,watch} = useForm({
        defaultValues:{
            set1:'',
            set2:'',
            universal:''
        }
    })

    let union='';
    const [unionx,setUnionx] = useState(" ");
    const [intersection,setintersection] = useState(" ");
    const [comp1,setComp1] = useState(" ");
    const [comp2,setcomp2] = useState(" ");

    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    };

    function func_unionn(set1,set2){
        console.log(union);
        return removeDuplicates([...set1,...set2]).join(',')
    }
    useEffect(() => {
        const first = watch('set1').split(" ");
        const second = watch('set2').split(" ");
        const seta = first.filter(c=>c!='');
        const setb = second.filter(c=>c!='');
// so form here on out we are gonna use set1 and set 2 as our main sets for set_operations;
        const set1 = removeDuplicates(seta);
        const set2 = removeDuplicates(setb);

        // trying to change universal set:
        
        //for union
        union = func_unionn(set1,set2);
        console.log(union);
        // ...register('universal') = [...union.split(','),...watch('universal').split()];
        console.log("union:  ",union);
        setUnionx(union);
      
        // for intersection
        setintersection([set1.filter(c=>set2.includes(c))].join(','));

        // yo wala code kasari chalauney 
        // ...register('universal') = [...union.split(' '),...watch('universal').split(' ')];

    }, [watch()])
    
  return (
    <div className='bg-black'>
        <div>

            <div><input className='text-gray-600 bg-slate-900 hover:bg-green-900 p-2 rounded-lg m-5' type="text" {...register('universal')} placeholder='set1'/></div>
            <div><input className='text-gray-600 bg-slate-900 hover:bg-green-900 p-2 rounded-lg m-5' type="text" {...register('set1')} placeholder='set1'/></div>
            <div><input className='text-gray-600 bg-slate-900 hover:bg-green-900 p-2 rounded-lg m-5'  type="text" {...register('set2')} placeholder='set2'/></div>
            <div className='text-green-900 font-bold'>union         : {unionx} common print</div>
            <div className='text-green-900 font-bold'>Intersection  : {intersection} common print</div>
        </div>

    </div>
  )
}
