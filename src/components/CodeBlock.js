import SyntaxHighlighter from 'react-syntax-highlighter';
import  {tomorrowNightEighties}  from 'react-syntax-highlighter/dist/esm/styles/hljs';
const CodeBlock = (codeString) =>{
const code = codeString.codeBlock

  return(
    <>
    <SyntaxHighlighter language="javascript"  style={tomorrowNightEighties} showLineNumbers = {true} wrapLines = {true}>
      {code}
    </SyntaxHighlighter>
    </>
  )
}

export default CodeBlock