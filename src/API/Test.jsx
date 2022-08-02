// import React from "react";
// import Amplify, { API } from "aws-amplify";

// Amplify.configure({
//   //   Auth: {
//   //     region: "us-east-1",
//   //     userPoolId: "us-east-1_T2ZfRqx59",
//   //     userPoolWebClientId: "61l5lp494qnb60ek6h0ohonspp",
//   //   },
//   API: {
//     endpoints: [
//       {
//         name: "QSSampleApi",
//         endpoint:
//           "https://9f7333gdq3.execute-api.us-east-1.amazonaws.com/test/embed-api",
//       },
//     ],
//   },
// });

// function Test() {
//   const [apiData, setApiData] = React.useState("");

//   const handleClick = async () => {
//     const data = await API.get("QSSampleApi", "/embed-api", {
//       headers: {
//         "x-api-key": "grC9ZygLZuaek3hS8Uh6I9rtC5IgYvwd36EAjaba",
//       },
//     });
//     setApiData(data.body);
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Welcome! My favorite quote is: {apiData}</p>
//         <button onClick={handleClick}>Click me!</button>
//       </header>
//     </div>
//   );
// }

// export default Test;
