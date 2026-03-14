import {useLocation} from "react-router-dom"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {vscDarkPlus} from "react-syntax-highlighter/dist/esm/styles/prism"

export default function CodeViewer(){

  const location = useLocation()

  const {name,code} = location.state || {}

  return(

    <div style={{padding:"40px"}}>

      <h2>{name}</h2>

      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>

    </div>

  )

}