import React from 'react'
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx'
import Sidebar from './Sidebar.jsx';

function App() {




  return <>

    <Sidebar />
    <div className='canvas'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Experience />
      </Canvas>
    </div>


  </>



}

export default App;