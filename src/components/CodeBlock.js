import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState } from "react";

function CodeBlock({ codeBlock, idNum }) {
  const code = codeBlock;
  const [isExpanded, setIsExpanded] = useState(false);
  const [buttonText, setButtonText] = useState("Expand Code");

  function handleButtonText() {
    let text = (!isExpanded) ? "Close" : "Expand Code";
    setButtonText(text);
  }

  function expandCode() {
    setIsExpanded(!isExpanded);

    let codeBlock = document.getElementById(`code-${idNum}`);
    codeBlock.classList.toggle("expanded");
    handleButtonText();
    const target = codeBlock.offsetTop - 250;
    if (isExpanded) window.scrollTo({ top: target })
  }




  return (
    <>
      <div className="code highlight-content " id={`code-${idNum}`}>
        <SyntaxHighlighter language="javascript" style={tomorrowNightEighties} showLineNumbers={true} wrapLines={true}>
          {code}
        </SyntaxHighlighter>
        <button onClick={expandCode} className='expand-button'>{buttonText}</button>
      </div>
    </>
  )
}

export default CodeBlock