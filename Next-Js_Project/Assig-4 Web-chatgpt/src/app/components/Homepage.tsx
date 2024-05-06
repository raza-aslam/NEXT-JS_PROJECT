"use client"
import { useState } from "react"


interface PropData{
  generateText: string,
  generateImage?: string,
  generateCode?: string,

}


const Homepage = () => {
  const[prompt,setprompt]= useState("");
  const[response,setresponse]=useState<PropData[]>([]);
  
  const HandlePromptRequest = async()=>{
   
    const response = await fetch (`/api/gpt3`,{
      method : "POST",
      body : JSON.stringify({ prompt }),

    })
    const responsedata = await response.json()
    console.log("response", responsedata)
    setresponse(()=>[
      {
        generateText : responsedata.data
      }
    ])
    setprompt("")

  }
  return (
    <section>
        
        <div className="flex justify-center items-center mt-28">

          <div className="w-full px-3" >

          <div className="flex">
            <input type="text " placeholder="Enter Your Prompt" value={prompt} onChange={(event)=>setprompt(event.currentTarget.value)} className="bg-black text-white outline-none w-full"/>
            <div>
            {prompt.length > 0 ? (
              <button className="px-3 py-2 w-full bg-blue-500 text-white " onClick={HandlePromptRequest}>Generate</button>  
              ):(
                <button className="px-3 py-2 w-full bg-blue-500 text-white "disabled onClick={HandlePromptRequest}>Generate</button>
              )
            }

          </div> 
          </div>

          <div className="flex justify-center item-center bg-green-400 rounded-full">

              <div className="flex justify-start w-full">
                {
                  response.length>0 && (
                    <div className="px-6 py-3 shadow-md rounded-full bg-slate-500">

                      <h1> </h1>

                      <div className="text-left">
                        {
                          response.map((data,index)=>(
                            data.generateText && (
                            <div key={index}>
                              <p>{data.generateText}</p>
                            </div>
                            )
                          ))
                        }
                      </div>
                    </div>
                  )
                }

              </div>


          </div>
          
          </div>
          
        </div>      

      
    </section>
  )
}

export default Homepage