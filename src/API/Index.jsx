// import Amplify from "aws-amplify";
// import { API } from "aws-amplify";
// import React, { useEffect, useState } from "react";
// import awsExports from "../aws-exports";
// Amplify.configure(awsExports);

// const myAPI = "9f7333gdq3";
// const path = "/embed-api";

// function Test() {
//   const [dashboards, setDashboards] = useState([]);

//   useEffect(() => {
//     API.get(myAPI, path).then((response) => console.log(response));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Super Simple React App</h1>
//       <div>
//         <input
//           placeholder="customer id"
//           type="text"
//           value={dashboards}
//           onChange={(e) => setDashboards(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// }

// export default Test;
