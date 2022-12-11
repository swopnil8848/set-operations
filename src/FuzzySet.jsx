import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';



const FuzzySet = () => {
    const [union,setUnion] = useState();
    const [check,setCheck] = useState(false);
    
    const {register,watch,handleSubmit} = useForm({
        defaultValues:{
            Fuzzy1:'',
            Fuzzy2:'',
        }
    })

        useEffect(() => {
        let set1;
        let fuzzy_split1 = watch("Fuzzy1").split("(").map(first=>first.split(")"));
        let set_first1=fuzzy_split1.map((a,index)=>{
            a.splice(1);
            let b = a[0].split(",");
            console.log("b",b);
            return b;
          });

          let first = set_first1.map(item=>item.filter(c=>c!='')).splice(1).map(u=>u.map(k=>parseInt(k)));
          console.log("first",first);
        
        let fuzzy_split2 = watch("Fuzzy2").split("(").map(first=>first.split(")"));
        let set_first2=fuzzy_split2.map((a,index)=>{
            a.splice(1);
            let b = a[0].split(",");
            console.log("b",b);
            return b;
          });

          let second = set_first2.map(item=>item.filter(c=>c!='')).splice(1).map(u=>u.map(k=>parseInt(k)));
          console.log("second",second);

          let save_union;
        //   if(check){
        //     save_union = func_union(first,second);
        //     console.log("save_union",save_union); 
        //   }
        //   let abc = [1,2];
        //   let bcd = [1,2];
        //   let abc1 = abc.join();
        //   let bcd1 = bcd.join();
        //   console.log("abc1",abc1);
        //   console.log("is it true",abc1 == bcd1);

        // can delete ones
        // console.log("i want to join this",[...first,...second].map(c=>c.join()));
        // let arr = [...first,...second].map(c=>c.join());
        // let arrx = arr.filter((item,
        //     index) => arr.indexOf(item) === index);
        // console.log("arr",arrx);
        //   let final=[""];
        // first.map((c)=>{
        //     second.map((x)=>{
        //         if(c.join()==x.join()){
        //             if(c[1]>x[1]){
        //                 final.push(c);
        //             }
        //             else{
        //                 final.push(x);
        //             }
        //         }else{
        //             final.push(c).push(x);
        //         }
        //     })
        // })
        // console.log("final",final);
        
        // [[1,0.3],[2,0.5]]
        // [{1:0.3},{2:0.5}]
        // {1:0.3,2:0.5}
        // [[1,0.6]]


          
        }, [watch()]);

        function func_union(set1,set2){
            let value = set1.map((c,index)=>(c[1]>set2[index][1]));
            console.log("value",value);
            // return value;
        }


  return (
    <div>
    <h1 className='flex font-bold text-green-900 align-middle items-center justify-center text-3xl py-auto h-[6rem]'>FUZZY SET</h1>
    <div className='h-screen flex justify-center items-center'>
        <div>
            <p>please enetr your fuzzy set in <span className='text-green-900 font-bold text-xl'>(first,second),(third,fourth)...</span> format</p>
            <form onSubmit={handleSubmit((data)=>{
                console.log("i am the data",data);
                setCheck(true);
            })}>
                <input type="text" {...register("Fuzzy1")} className='font-bold text-green-900 rounded-lg w-full my-2 h-10 hover:bg-green-900' placeholder='enter your first fuzzy set'/>
                <input type="text" {...register("Fuzzy2")} className='font-bold text-green-900 rounded-lg w-full my-2 h-10 hover:bg-green-900' placeholder='enter your second fuzzy set'/>
                <button type='submit' className='text-blue-900 bg-green-500 rounded-lg p-2'>submit</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default FuzzySet;