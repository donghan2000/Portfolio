import React from 'react'
import Masthead from './Masthead.jsx'
import Sidebar from './Sidebar.jsx';
import Works from './Works.jsx';


function App() {

  return <>

    <Sidebar />
    <Masthead />
    <Works />

    <section>
      <div id='skill-behind' className="behind-title">SKILL</div>
      <div id='skill-divider' className='title-divider'>
        <div className='title-descriptions'>
          <header>My Skill</header>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className="title-divider-button">
          <a href="http://wwww.donghan.co" className="button">EXPLORE MORE</a>
        </div>

      </div>
    </section>







  </>



}

export default App;