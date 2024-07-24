import React, { useState, useEffect } from "react";

const Effecting = () => {
  const [resourceType, setResourceType] = useState('posts');  // Corrected from 'post' to 'posts'
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>

      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>;
      })}
    </>
  );
}

export default Effecting;


///////////////////////////////////////////////////////////////////////////
//                          uses of useEffect 
////////////////////////////////////////////////////////////////////////////

                   // 1. Fetching Data from an API


//                    import React, { useState, useEffect } from 'react';

// const DataFetchingComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return (
//     <div>
//       {data.map(item => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   );
// };



                            // 2. Setting Up Subscriptions

//                             import React, { useEffect } from 'react';

// const SubscriptionComponent = () => {
//   useEffect(() => {
//     const handleResize = () => {
//       console.log('Window resized');
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup function to remove the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return <div>Resize the window and check the console</div>;
// };

                            // 3. Updating the DOM


//                             import React, { useEffect } from 'react';

// const DomUpdateComponent = () => {
//   useEffect(() => {
//     const element = document.getElementById('my-element');
//     element.style.color = 'red';
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return <div id="my-element">This text will be red</div>;
// };



                                //4. Cleaning Up on Component Unmount


//                                 import React, { useState, useEffect } from 'react';

// const TimerComponent = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds(prevSeconds => prevSeconds + 1);
//     }, 1000);

//     // Cleanup function to clear the interval when the component unmounts
//     return () => {
//       clearInterval(interval);
//     };
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return <div>Seconds: {seconds}</div>;
// };



                                 //  5.   Running Effects Based on Props or State Changes


//                                  import React, { useState, useEffect } from 'react';

// const ResourceComponent = ({ resourceType }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(`https://api.example.com/${resourceType}`)
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, [resourceType]); // Effect runs whenever resourceType changes

//   return (
//     <div>
//       {data.map(item => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   );
// };
