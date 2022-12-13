import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';



const FuzzySet = () => {
    const [union,setUnion] = useState('');
    const [intersection,setIntersection] = useState('');
    const [check,setCheck] = useState(false);
    const [compA,setAcomp] = useState("");
    const [compB,setComp] = useState("");
    
    const {register,watch,handleSubmit} = useForm({
        defaultValues:{
            Fuzzy1:'',
            Fuzzy2:'',
        }
    })

        // useEffect(() => {
        // let set1;
        // let fuzzy_split1 = watch("Fuzzy1").split("(").map(first=>first.split(")"));
        // let set_first1=fuzzy_split1.map((a,index)=>{
        //     a.splice(1);
        //     let b = a[0].split(",");
        //     console.log("b",b);
        //     return b;
        //     });

        //   let first = set_first1.map(item=>item.filter(c=>c!='')).splice(1).map(u=>u.map(k=>parseInt(k)));
        //   console.log("first",first);
        
        // let fuzzy_split2 = watch("Fuzzy2").split("(").map(first=>first.split(")"));
        // let set_first2=fuzzy_split2.map((a,index)=>{
        //     a.splice(1);
        //     let b = a[0].split(",");
        //     console.log("b",b);
        //     return b;
        //   });



        //   let second = set_first2.map(item=>item.filter(c=>c!='')).splice(1).map(u=>u.map(k=>parseInt(k)));
        //   console.log("second",second);



        //   let save_union;


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
        //   let final=[""]; ::::::::::::::::::::::::::::::::::::::::
        //   console.log(first)
        // let set = first.map((c)=>{
        //     second.map((x)=>{
        //         console.log("::::::::",c);
        //         if(c.join()==x.join()){

        //             if(c[1]>x[1]){
        //                 // console.log(c[1]);
        //                 // console.log(x[1]);
        //                 // final.push(c);
        //                 console.log("first if statment is running");
        //                 final =  [...final,[c]];
        //             }
        //             else{
        //                 // final.push(x);
        //                 console.log("second is running")
        //                 final =  [...final,[x]]
        //             }
        //         }else{
        //             // final.push(c).push(x);
        //             console.log("this is running");
        //             final =  [...final,[c],[x]];
        //         }
        //     })
        // })

        // first.map((a,indexa)=>{
        //     // console.log("a;b:..............>>>>>>>WSSSS",a);
        //     second.map((b,indexb)=>{
        //         console.log("a;b:..............>>>>>>>WSSSS",b);
        //         if(b[0]==a[0]){
        //             // console.log("first is being run");
        //             if(b[1]>a[1]){
        //                 console.log("if inside if is running")
        //                 final=[...final,b]
        //             }else{
        //                 final =[...final,a]
        //             }
        //             second.splice(indexb-1,1);
        //             first.splice(indexa-1,1)
        //         }
        //         else{
        //             final = [...final,b,a];
        //             second.splice(indexb-1,1);
        //             first.splice(indexa-1,1)
        //         }
        //     })
        // })
        // console.log("final",final);
        // console.log("heloOOOOOOOOOOOOOOOOOOOOOOOOOO",first)
        // console.log(second)
        // console.log("set",set);
        
        // [[1,0.3],[2,0.5]]
        // [{1:0.3},{2:0.5}]
        // {1:0.3,2:0.5}
        // [[1,0.6]]


          
        // }, [watch()]);

        useEffect(() => {
            let fuzzy1 = watch("Fuzzy1");
            let fuzzy2 = watch("Fuzzy2");

            const a_fuz = fuzzy1.split(",").map((c)=>{
                const temp = c.split("|");
                // console.log(temp,"temp");
                // console.log({[temp[0]]:temp[1]});
                return {[temp[0]]:temp[1]};
            }).reduce((O,C)=>{return {...O,...C}},{})

            const b_fuz = fuzzy2.split(",").map((c)=>{
                const temp = c.split("|");
                // console.log(temp,"temp");
                // console.log({[temp[0]]:temp[1]});
                return {[temp[0]]:temp[1]};
            }).reduce((O,C)=>{return {...O,...C}},{})
            
            // for (const property in object) {
            //     console.log(`${property}: ${object[property]}`);
            //   }
            const union_fuz = {...b_fuz};
            for(const a in a_fuz){
                // console.log(">>>>>>>>",a);
                if( ((b_fuz[a]==undefined) ||parseInt(b_fuz[a])<parseInt(a_fuz[a]))){
                    union_fuz[a] = a_fuz[a];
                }
            }
            // console.log("i am the fucking union fuz now print",union_fuz);
            let union_render="";
            for (const property in union_fuz) {
                union_render += " ("+property + '/ ' + union_fuz[property]+'), ';
            }

            setUnion(union_render);
        
              const intersection_fuz = {...b_fuz};
            for(const a in a_fuz){
                // console.log(">>>>>>>>",a);
                if( ((b_fuz[a]==undefined) ||parseInt(b_fuz[a])>parseInt(a_fuz[a]))){
                    intersection_fuz[a] = a_fuz[a];
                }
            }
            let intersection_render="";
            for (const property in union_fuz) {
                intersection_render += " ("+property + '/ ' + union_fuz[property]+'), ';
            }
            setIntersection(intersection_render);

            const Acomp ={}; 
            for(const a in a_fuz){
                Acomp[a] = 100-parseInt(a_fuz[a]);
            }
            let Acomp_render="";
            for (const property in union_fuz) {
                Acomp_render += " ("+property + '/ ' + union_fuz[property]+'), ';
            }
            setComp(Acomp_render);

        }, [watch()])
        

        // function func_union(set1,set2){
        //     let value = set1.map((c,index)=>(c[1]>set2[index][1]));
        //     // console.log("value",value);
        //     // return value;
        // }

        // const xyz = [[1,2],[2,3,],[5,6],[7,8],["a","b"]]
        // console.log(xyz.reduce((S,C)=>S+C.reduce((S,C)=>S+","+C,"[")+"]",""));
  return (
    <div>
    <h1 className='flex font-bold text-green-900 align-middle items-center justify-center text-3xl py-auto h-[6rem]'>FUZZY SET</h1>
    <div className='h-screen flex justify-center items-center'>
        <div>
            <p>please enetr your fuzzy set in <span className='text-green-900 font-bold text-xl'>first|second,third|fourth...</span> format</p>
            <form onSubmit={handleSubmit((data)=>{
                console.log("i am the data",data);
                setCheck(true);
            })}>
                <input type="text" {...register("Fuzzy1")} className='font-bold text-green-900 rounded-lg w-full my-2 h-10 hover:bg-green-900' placeholder='enter your first fuzzy set'/>
                <input type="text" {...register("Fuzzy2")} className='font-bold text-green-900 rounded-lg w-full my-2 h-10 hover:bg-green-900' placeholder='enter your second fuzzy set'/>
                <p className='text-emerald-700 text-xl font-semibold p-2'>UNION::{union}</p>
                <p className='text-emerald-700 text-xl font-semibold p-2'>INTERSECTON::{intersection}</p>
                <p className='text-emerald-700 text-xl font-semibold p-2'>COMPLEMENT OF A::{compA}</p>
                <p className='text-emerald-700 text-xl font-semibold p-2'>COMPLEMENT OF B::{compB}</p>
                <button type='submit' className='text-blue-900 bg-green-500 rounded-lg p-2'>submit</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default FuzzySet;