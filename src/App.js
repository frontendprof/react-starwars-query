import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
import { QueryClient, QueryClientProvider } from 'react-query'



const queryClient = new QueryClient()





function App() {

  const[page,setPage]=useState("planets");


  return (
    <div className="App">
       <QueryClientProvider client={queryClient}>
        <h1>Star Wars Info</h1>

        <Navbar setPage={setPage}/>

        <div className="content">
          {page==="planets" ? <Planets/> : <People />}
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
