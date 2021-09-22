import { useState } from "react";
import Salida from './components/Salida'


function App() {

  const initialState = "## salida aqui"

  const [text, setText] = useState(initialState)
  return (<>



    <div className="text-center px-4">
      <h1 className="p-4">Markdown</h1>
      <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <textarea
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="10"
            cols="30"
          />
        </div>
        <div className='col-6'>
          <Salida text={text} />
        </div>
      </div>
    </div>
    </div>


  </>);
}

export default App;
