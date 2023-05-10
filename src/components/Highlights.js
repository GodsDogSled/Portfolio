
import CodeBlock from "./CodeBlock";
import { useState, useEffect, useRef } from "react";

function Highlights(highlights) {
  const [highlightData, setHighlightData] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  let headingCount = 1;
  let codeBlockCount = 0;
  let h3Count = 0;
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
                headingCount++;
                return (
                  <>
                    <span className="heading-number">0{headingCount}</span>

                    <h2>{highlight.heading}</h2>
                  </>

                )

              case "sub_heading":
                h3Count++;
                let isEven = (h3Count % 2 === 0) ? "even-heading" : "odd";
                return (
                  <>
                    <h3 className={`highlight-content ${isEven}`}>{highlight.sub_heading}</h3>
                  </>
                )

              case "plain_text":
                return (
                  <>
                    <p className="highlight-content">{highlight.plain_text}</p>
                  </>
                )

              case "video_content":
                return (
                  <video className="highlight-content" loop autoPlay muted>
                    <source src={highlight.upload_a_video} ></source>
                  </video>
                );

              case "code_snippet":
                codeBlockCount++;
                return (
                  <>
                    <CodeBlock codeBlock={highlight.code} idNum={codeBlockCount} />
                  </>

                );

              case "image":
                return (
                  <>
                    <img className="highlight-content" src={highlight.image.url} alt="" />
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

