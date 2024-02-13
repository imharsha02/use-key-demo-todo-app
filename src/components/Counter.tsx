// import { useState } from 'react';

// export default function Counter() {
// const [count, setCount] = useState(0);

// setInterval(() => {
// setCount(count + 1)
// }, 1000)
// console.log("count is", count)
// return (
//   <>
//     <h1 className='text-xl p-10'>Count: {count}</h1>
//   </>
// )
// }

// import { useEffect, useState } from 'react';

// export default function Counter() {
  // const [count, setCount] = useState(0);
  
  // useEffect(() => {
    //   setInterval(() => {
      //     setCount(count + 1)
      //     }, 1000)
      // },[count])
      // console.log("count is", count)
      // return (
        //   <>
        //     <h1 className='text-xl p-10'>Count: {count}</h1>
        //   </>
        // )
        // }
        
        //Adding cleanup function
        import { useEffect, useState } from 'react';
        
        export default function Counter() {
          const [count, setCount] = useState(0);
          
          useEffect(() => {
              const intervalId = setInterval(() => {
                  setCount(count + 1)
                }, 1000)
    return () => {clearInterval(intervalId)}
},[count])
return (
  <>
    <h1 className='text-xl p-10'>Count: {count}</h1>
  </>
)
}

//Updating ref
// import { useEffect, useState, useRef } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(count); // Create a ref to track the current count

//   useEffect(() => {
//     countRef.current = count; // Update ref value whenever count changes
//   }, [count]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Use the ref's current value to set the new count
//       const newCount = countRef.current + 1;
//       setCount(newCount);
//       countRef.current = newCount; // Update the ref with the new count
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array means this effect only runs once
//   return (
//     <>
//       <h1 className='text-xl p-10'>Count: {count}</h1>
//     </>
//   );
// }

//Using useFreshRef hook
// import { useEffect, useState } from "react";
// import { useFreshRef } from "../hooks/useFreshRef";
// export default function Counter() {
//   const [count, setCount] = useState(0);
//   const countRef = useFreshRef(count); // using useFreshRef hook

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const newCount = countRef.current + 1; // Use the ref's current value to set the new count
//       setCount(newCount);
//       countRef.current = newCount; // Update the ref with the new count
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }); // Empty dependency array means this effect only runs once
//   return (
//     <div className="max-w-max p-5 my-40 mx-auto border-2 border-gray-200 rounded">
//       <h1 className="scroll-m-20 pb-2 pt-10 text-center text-3xl font-semibold tracking-tight first:mt-0">
//         useFreshRef hook demo
//       </h1>
//       <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-center">The count is: {count}</p>
//     </div>
//   );
// }
