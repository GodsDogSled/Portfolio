
import CodeBlock from "./CodeBlock";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";



function Highlights(highlights) {
  const [highlightData, setHighlightData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);


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
        <section >
          {highlightData.highlights.map((highlight, i) => {

            switch (highlight.acf_fc_layout) {

              case "heading":
                headingCount++;
                return (
                  <motion.div key={i} id={`heading-${headingCount}`} >
                    <span className="heading-number">0{headingCount}</span>
                    <motion.h2 id={headingCount} >{highlight.heading}</motion.h2>
                  </motion.div>
                )

              case "sub_heading":
                h3Count++;
                let isEven = (h3Count % 2 === 0) ? "even-heading" : "odd";
                return (
                  <>
                    <h3 key={i} className={`highlight-content ${isEven}`}>{highlight.sub_heading}</h3>
                  </>
                )

              case "plain_text":
                return (
                  <>
                    <p key={i} className="highlight-content">{highlight.plain_text}</p>
                  </>
                )

              case "video_content":
                return (
                  <video key={i} className="highlight-content" loop autoPlay muted>
                    <source src={highlight.upload_a_video} ></source>
                  </video>
                );

              case "code_snippet":
                codeBlockCount++;
                return (
                  < >
                    <CodeBlock key={i} codeBlock={highlight.code} idNum={codeBlockCount} />
                  </>

                );

              case "image":
                return (
                  <>
                    <img key={i} className="highlight-content" src={highlight.image.url} alt="" />
                  </>
                );

              default:
                return (<h3 key={i}>None</h3>);
            }
          })
          }

        </section>
        :
        <>
          <p>Loading...</p>
        </>
      }

    </>
  )
}


export default Highlights;

