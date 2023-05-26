import { Canvas } from "@react-three/fiber";
import RoCanvas from "./Assets/Robot-Canvas.jsx";
import { useInView } from 'react-intersection-observer';

export default function Story() {

    const [canvasRef, inView] = useInView({ threshold: 0 });

    return <>
        <section className='section-dividers' id="story">
            <div className='crosses-l'>
                <div className='horizontal story-h'></div>
                <div className='vertical story-v'></div>
            </div>

            <div className='about-div'>
                <div className='about-text'>

                    <div className='about-p'>

                        <header>My Story</header>
                        <div className='behind-title-left'>
                            <p>Myself</p>
                        </div>

                        <div className='about-bubble-p'>

                            <p className='about-p-left'>Welcome to my portfolio site. I am an aspiring junior web developer with a passion for the field. My expertise is in Javascript and CSS, and I am currently learning React and Node frameworks.
                                I have basic knowledge of PHP and SQL.
                            </p>

                            <p className='about-p-right'>My hobbies include playing games, reading light novels, and watching anime. I recently started learning Japanese on my own with the goal of gaining a basic understanding.
                            </p>

                            <p className='about-p-left'> I am continuously learning new web development techniques and look forward to collaborating with those reading this.
                            </p>

                        </div>
                    </div>
                </div>

                <Canvas ref={canvasRef} className='about-canvas'>
                    <RoCanvas />
                </Canvas>
            </div>


        </section>
    </>

}