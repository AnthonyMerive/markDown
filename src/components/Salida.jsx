import React from 'react'
import marked from 'marked'

export default function Salida(props) {

    marked.setOptions({

      breaks: true,

      })
    
      const renderer = new marked.Renderer();
    
    return (<div
        dangerouslySetInnerHTML={{
          __html: marked(props.text, {renderer:
        renderer}),  
        }}
        id="preview"
    >
        </div>)
}
