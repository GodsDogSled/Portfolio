
import CodeBlock from "./CodeBlock";
import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



function Highlights2(highlights) {
  const [highlightData, setHighlightData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  let elementArray = [];
  let separatedSections = [];
  let currentSection = null;

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

  markUpData(highlights);//add symantic markup and classnames to API data 


  function markUpData(highlights) {
    (dataLoaded) ?
      highlightData.highlights.map((highlight, i) => {

        switch (highlight.acf_fc_layout) {

          case "heading":
            headingCount++;
            elementArray.push(
              <div key={i} id={`heading-${headingCount}`} >
                <span className="heading-number">0{headingCount}</span>
                <h2 id={headingCount} >{highlight.heading}</h2>
              </div>
            )
            break;
          case "sub_heading":
            h3Count++;
            let isEven = (h3Count % 2 === 0) ? "even-heading" : "odd";
            elementArray.push(
              <h3 key={i} className={`highlight-content ${isEven}`}>{highlight.sub_heading}</h3>
            )
            break;
          case "plain_text":
            elementArray.push(
              <>
                <p key={i} className="highlight-content">{highlight.plain_text}</p>
              </>
            )
            break;
          case "video_content":
            elementArray.push(
              <video key={i} className="highlight-content" loop autoPlay muted>
                <source src={highlight.upload_a_video} ></source>
              </video>
            );
            break;
          case "code_snippet":
            codeBlockCount++;
            elementArray.push(
              <CodeBlock key={i} codeBlock={highlight.code} idNum={codeBlockCount} />
            );
            break;
          case "image_content":
            elementArray.push(
              <>
                <img key={i} className="highlight-content" src={highlight.image.url} alt="" />
              </>
            );
            break;
          default:
            elementArray.push(<h3 key={i}>None</h3>);
        }
      })
      :
      console.log("markup-array-empty");

  }

  const sortMarkUpData = useCallback(() => {
    elementArray.forEach((el) => {
      if (el.type === "div") {

        currentSection = [el];
        separatedSections.push(currentSection);

      } else if (currentSection !== null) {
        currentSection.push(el);
      }
    })

  }, [elementArray])

  sortMarkUpData();




  return (
    <>
      {(elementArray.length > 0) ?
        <>
          {separatedSections.map((section, index) => {
            return (
              <section className="highlight-section" id={index + 2} key={index}>
                {section}
              </section>
            )
          })}
        </>
        :
        <><p>didnt work</p></>
      }
    </>

  )
}


export default Highlights2;

