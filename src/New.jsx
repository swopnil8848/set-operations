import React, { useEffect, useRef, useState } from 'react'
import {useForm} from 'react-hook-form'

export default function New() {
    const {register,handleSubmit,watch} = useForm({
        defaultValues:{
            first:'' ,
            second:''
        }
    });
    function onSubmit(d){
        console.log(d);
    }
    const firstref = useRef();
    const secondref = useRef();

    const [union, setUnion] = useState("")
    const [intersection, setIntersection] = useState("")
    const [first, setFirst] = useState(" ")
    const [second, setSecond] = useState(" ")
    let uni;
    let unio;
    useEffect(()=>{
        setFirst(watch('first'));
        setSecond(watch('second'));

        let set1 = first.split(" ");
        console.log(set1);

        let set2 = second.split(" ");
        console.log(set2);

        // setUnion([...set1.filter(c=>!set2.includes(c)),...second].join(', '))
        // let union2 = union.split(", ");
        // console.log(union2);
        // let fUnion = union2.filter(c=>c!=null);
        // console.log("fUnion:  ",fUnion);
        // console.log("union:",union);

        uni = [...set1.filter(c=>!set2.includes(c)),...set2];
        // setUnion([uni.filter(c=>c!=null)]);
        unio = uni.filter(function (el) {
            return el != null;
        });
        console.log("unio  ",unio);
        console.log("uni",uni);

        // setUnion([...set1.filter(c=>!set2.includes(c)),...set2].join(', '));
        

        // console.log("objex");
        // setUnion([...first.filter(c=>!second.includes(c)),...second].join(','));
        // console.log(second,"second");
        // console.log(first.filter(c=>!second.includes(c)),"first.filter(c=>!second.includes(c))");
        // console.log([first.filter(c=>!second.includes(c)),second])
    },[watch()]);

    useEffect(() => {
    //   firstref.current?.innerText;
    //   secondref.current?.innerText;

      console.log(firstref.current?.innerText,"first");
      console.log(undefined?.innerText,"first");
    
      
    }, [first,second])
    
    // useEffect(()=>{
    //     const first = watch('first').split(" ");
    //     const second = watch('second').split(" ");
    //     console.log("interseion");
    //     setIntersection([...first.filter(c=>second.includes(c))].join())

    // },[watch()])
    
  return (
    <div className='flex justify-center bg-black h-screen'>
        <p className='text-white font-bold '>h11111</p>
    <div className='mt-32 bg-blue-200 w-60 h-60 px-auto '>
        <p>Hello!! common i am error</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className='bg-black border text-white' type="text" {...register("first")} />
            <input  className='bg-black text-white' type="text" {...register("second")} />
        </form>
            {/* union = {union.filter((e)=>{return e!=null})}; */}
            <div></div>
            {/* {intersection} */}
            <div id="first_val" ref ={firstref}>{first}</div>
            <div id="second_val" ref={secondref}>{second}</div>
            {/* unio = {unio}; */}
    </div>
        <p className='text-green-700 font-bold' >common show some respect</p>
    </div>
  )
}
