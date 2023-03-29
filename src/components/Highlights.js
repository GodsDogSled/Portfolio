
import CodeBlock from "./CodeBlock";
import { useState, useEffect, useRef} from "react";

function Highlights(  highlights ){
  const [highlightData, setHighlightData] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)
  useEffect(()=>{
    if(highlights){
      setHighlightData(highlights);
      setDataLoaded(true);
    }
   },[highlightData,highlights])
  
   //rests dataloaded state on mount for the functions return value.
   useEffect(()=>{
    setDataLoaded(false);
   },[])
  
  return(
    <>
     
    {(dataLoaded) ?
      <>
        { highlightData.highlights.map((highlight)=>{
            switch (highlight.acf_fc_layout){

              case "text":
                return(
                  <>
                  <h3>{highlight.heading}</h3>
                  <p>{highlight.description}</p>
                  </>
                )

              case "video_content":
                return(
                  <video width="320" height="240" loop autoPlay muted>
                    <source src={highlight.upload_a_video} ></source>
                  </video>
                );
                
              case "code_snippet":
                return(
                  <>
                  <CodeBlock codeBlock={highlight.code}/>
                  </>
                  
                );
              
              case "image":
                return(<>image</>);
              
              default:
                return(<h3>None</h3>);
            }
          })
        }
       
      </>
      :
      <>
      
        <p>Loading...</p>
      </>
    }
     
    </>
  )
} 


export default Highlights;

