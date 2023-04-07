import Gallery from './Gallery.jsx'
import Avatar from "./Avatar.jsx"
import { Canvas } from '@react-three/fiber';

export default function Works() {

    return <>
        <section className='section-work'>
            <div id='work-behind' className="behind-title">WORK</div>
            <div id='work-divider' className='title-divider'>
                <div className='title-descriptions'>
                    <header>My Portfolio</header>
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
            <Gallery />

            <div className='about-section'>

                <div className='about-text'>
                    <div className='about-p'>
                        <header>about me</header>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <Canvas className='about-canvas'
                    camera={{ position: [4, 0, -12], fov: 75 }}
                >
                    <Avatar />
                    <ambientLight />
                </Canvas>



            </div>


        </section>
    </>

}