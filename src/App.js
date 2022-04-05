import React, {  useState } from 'react'
import { QrReader } from 'react-qr-reader'
import './Style.css'



  const App = (props) => {
    const [data, setData] = useState('No result');
    const [show,setShow] = useState(true);
  return(
    <div className='container-fluid' id='cont'>
    <div className='row' id='row'>
      <div className='col'>
      

      <div class="card">
  <div class="card-header">Qr Scanner</div>
  <div class="card-body">
  {show ?     <QrReader 
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }
          
          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '10%' }}
        /> :null}
    


  <button 
  id='btn' 
  type="button" 
  class="btn btn-dark"
   onClick={()=>setShow(!show)}>
    Show
    </button>
<hr />
    <p>{data}</p> 
  </div>
</div>
    
        </div>     
    </div>
    
    </div>
  )
}


export default App;