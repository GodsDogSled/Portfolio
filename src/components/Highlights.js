
import CodeBlock from "./CodeBlock";
import { useState, useEffect, useRef } from "react";

function Highlights(highlights) {
  const [highlightData, setHighlightData] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)
  useEffect(() => {
    if (highlights) {
      setHighlightData(highlights);
      setDataLoaded(true);
    }
  }, [highlightData, highlights])

  //rests dataloaded state on mount for the functions return value.
  useEffect(() => {
    setDataLoaded(false);
  }, [])

  return (
    <>

      {(dataLoaded) ?
        <>
          {highlightData.highlights.map((highlight) => {
            switch (highlight.acf_fc_layout) {

              case "heading":
                return (
                  <>
                    <h3>{highlight.heading}</h3>
                  </>
                )

              case "sub_heading":
                return (
                  <>
                    <h4>{highlight.sub_heading}</h4>
                  </>
                )

              case "plain_text":
                return (
                  <>
                    <p>{highlight.plain_text}</p>
                  </>
                )

              case "video_content":
                return (
                  <video loop autoPlay muted>
                    <source src={highlight.upload_a_video} ></source>
                  </video>
                );

              case "code_snippet":
                return (
                  <>
                    <CodeBlock codeBlock={highlight.code} />
                  </>

                );

              case "image":
                return (
                  <>
                    <img src={highlight.image.url} alt="" />
                  </>
                );

              default:
                return (<h3>None</h3>);
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

