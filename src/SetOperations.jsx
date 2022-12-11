import React, { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import FuzzySet from './FuzzySet';

export default function SetOperations() {    
    const {register,handleSubmit,watch,setValue} = useForm({
        defaultValues:{
            set1:'',
            set2:'',
            universal:''
        }
    })

    let union='';
    const [unionx,setUnionx] = useState(" ");
    const [intersection,setintersection] = useState(" ");
    const [comp1,setComp1] = useState();
    const [comp2,setComp2] = useState();
    const [check,setCheck] = useState('0');
    
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
        console.log(set1,"set1:::");
        const set2 = removeDuplicates(setb);
        console.log(set2,"set2:::");
        
        //for union
        union = func_unionn(set1,set2);
        setUnionx(union);
      
        // for intersection
        setintersection([set1.filter(c=>set2.includes(c))].join(','));

        let len_union = union.split(',').length;
        let uni = union.split(',');
        console.log(uni,  "union");
        const arr = watch('universal').split(" ");
        console.log(arr,"  universal");
        console.log(len_union,"len_Union:::::")
        
        // to make sure all the items in the in the set a and b are contained by the universal set and if not display error
        uni.map(uni_item=>(!arr.includes(uni_item)? setCheck("0"):setCheck("1")));

        // for complement of set A
        // let comp_a = set1.filter(c=>!arr.includes(c));
        // console.log("comp_a::::",comp_a);
        setComp1([arr.filter(c=>!set1.includes(c))].join(','));
        setComp2([arr.filter(c=>!set2.includes(c))].join(','));
        // console.log("new value:::",arr.filter(c=>!set1.includes(c)))
        // console.log("new value:::",typeof(arr.filter(c=>!set1.includes(c))));
        
        // for complement of set B
        let comp_b = set2.filter(c=>!arr.includes(c));

        // setComp2(comp_b);
            
    }, [watch()])

    const fuzzy = document.getElementsByClassName("fuzzy");
    useEffect(() => {

        console.log(fuzzy,"fuzzy::::");
    
      
    }, [])

    const scrollToFuzzy = () =>{
        window.scrollTo({
            top: fuzzy[0].offsetTop,
            behavior:"smooth"
        })
    }
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }
    
    
  return (
    <div>
    <div className='fixed'>
        <p className='font-bold text-pink-900 p-4 bg-green-900 rounded-lg w-fit lab-2 my-5' onClick={scrollToTop}>SetOperations</p>
        <p className='font-bold text-pink-900 p-4 bg-green-900 rounded-lg w-fit lab-2 my-5' onClick={scrollToFuzzy}>Fuzzy set</p>
    </div>
    <div className='bg-black h-screen flex justify-center  items-center'>
        <div className='bg-gray-700 rounded-lg p-10 w-[1000px]'>
            <div className={`text-blue-900 ${(check==='1')?'hidden':''}`}>your have enter the value that your universal set doesnt has in your set</div>
            <div><input className='text-gray-600 bg-slate-900 hover:bg-green-900 p-2 rounded-lg m-5 w-full' type="text" {...register('universal')} placeholder='enter universal set'/></div>
            <div className='flex justify-between '>
                <div><input className='text-gray-600 bg-slate-900 hover:bg-green-900 p-2 rounded-lg m-5 w-max' type="text" {...register('set1')} placeholder='enter set1'/></div>
                <div><input className='text-gray-600 bg-slate-900 hover:bg-green-900 p-2 rounded-lg m-5 w-max'  type="text" {...register('set2')} placeholder='enter set2'/></div>
            </div>
            <p className='text-green-900 font-bold p-3'>union         : {unionx} </p>
            <div className='text-green-900 font-bold p-3'>Intersection  : {intersection} </div>
            <div className='text-green-900 font-bold p-3'>complement of set A  : {comp1} </div>
            <div className='text-green-900 font-bold p-3'>complement of set B : {comp2} </div>
            {/* <img src="https://d3n817fwly711g.cloudfront.net/uploads/2022/04/Venn-diagram-template-1024x587.png" alt="img" /> */}
        </div>
    </div>
        <div className='fuzzy'><FuzzySet /></div>
    </div>
  )
}
