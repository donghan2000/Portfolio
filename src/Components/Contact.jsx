import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import React, { useRef, useLayoutEffect } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import countries from "./Informations/custom.geo.json";
import lines from "./Informations/lines.json";
import map from "./Informations/map.json";
import rings from "./Informations/rings.json";


export default function Contact() {


    extend({ ThreeGlobe })

    const Globe = (props) => {
        // This reference will give us direct access to the ThreeGlobe class
        const globeRef = useRef()

        // An effect that runs after three.js elements are created but before render
        useLayoutEffect(() => {
            // Configure the globe

            const globe = globeRef.current;

            globe.bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png');
            globe.hexPolygonsData(countries.features);
            globe.hexPolygonResolution(3);
            globe.hexPolygonMargin(0.3);
            globe.hexPolygonColor(() => '#8B0000');
            globe.showAtmosphere(true);
            globe.atmosphereColor('#1D1D1D');
            globe.atmosphereAltitude(0.4);

            // Change surface color
            globe.globeMaterial().color = new THREE.Color('#1D1D1D');
            globe.globeMaterial().emissive = new THREE.Color('white')
            globe.globeMaterial().emissiveIntensity = 0.1;
            globe.showGlobe(false);



            setTimeout(() => {
                globe.arcsData(lines.pulls)

                globe.arcColor((e) => {
                    return e.color ? "red" : "red"
                })

                globe.arcAltitude((e) => {
                    return e.arcAlt;
                })

                globe.arcStroke((e) => {
                    return e.status ? 0.5 : 0.5
                })

                globe.arcDashLength(1)
                globe.arcDashGap(4)
                globe.arcDashAnimateTime(2000)
                globe.arcsTransitionDuration(1000)
                globe.arcDashInitialGap((e) => e.order * 1)


                globe.labelsData(map.specifics)
                globe.labelText("country")
                globe.labelColor(() => 'white');
                globe.labelSize((e) => e.size * 2)
                globe.labelDotRadius(0.5)
                globe.labelResolution(10)
                globe.labelAltitude(0.01)



                globe.pointsData(map.specifics)
                globe.pointColor(() => "#D61424")
                globe.pointsMerge(true)
                globe.pointAltitude(0.1)
                globe.pointRadius(0.05)

                globe.ringsData(rings.circles)
                globe.ringColor(() => "white")
                globe.ringAltitude(0.0015)
                globe.ringResolution([128])
                globe.ringMaxRadius([3])
                globe.ringPropagationSpeed(1)
                globe.ringRepeatPeriod((e) => e.RepeatPeriod)


            }, 1000)

        }, [])

        useFrame((state, delta) => {
            // globeRef.current.rotation.y += delta * 0.01
            globeRef.current.rotation.y = -Math.sin(state.clock.elapsedTime / 20) * 0.2
        })


        // This is a ThreeGlobe object but represented in JSX.
        // Any valid properties of that class are valid props
        return <>
            <threeGlobe {...props} ref={globeRef} />
        </>
    }

    const fontRef = useRef()

    const handleEmailClick = (e) => {
        e.preventDefault();
        window.location.href = 'mailto:donghan20002@gmail.com';
    };

    return <>
        <section className='section-dividers' >

            <div className='crosses-l'>
                <div className='horizontal story-h'></div>
                <div className='vertical story-v'></div>
            </div>

            <div className='contact-div' id='contact'>

                <div className='contact-form'>
                    <div className='contact-p'>
                        <header>My Contact</header>
                        <div className='behind-title-contact'>
                            <p>My @</p>
                        </div>
                    </div>

                    <div className='contact-sub-text'>
                        <p>Thank you for taking the time to visit my website. If you have any questions or would like to get in touch with me, please feel free to use the contact form below.</p>
                    </div>

                    {/* https://formsubmit.co/donghan20002@gmail.com for some reason this was working remember to delete it afterwards*/}

                    <div className='form-div'>
                        <form action="https://formsubmit.co/37ce8add4d3e5112d718c592e53217b8" method="POST">

                            {/* Honey Pot */}
                            <input type='text' name='_honey' style={{ display: 'none' }} />

                            {/* Disable Captcha */}
                            <input type='hidden' name='_captcha' value="false" />

                            {/* Success Page */}
                            <input type='hidden' name="_next" value="http://localhost:3000/" />

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="fullname" name="Full&nbsp;Name" placeholder="NAME" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="email" className="form-control" id="email" name="Email" placeholder="EMAIL" required />
                                </div>
                            </div>

                            <textarea className="form-control" rows="10" placeholder="MESSAGE" name="Description"></textarea>

                            <button className="contact-wrap" id="submit" type="submit" value="SEND">
                                <a href='http://donghan.co' aria-disabled="true" className="button">CONTACT ME</a>
                            </button>

                        </form>
                    </div>

                </div>


                <div className='contact-canvas'>
                    <Canvas camera={{ position: [30, -2, -5] }}>
                        <directionalLight position={[-80, 200, 40]} intensity={0.8} color="#D61424" />
                        <directionalLight position={[-20, 50, 20]} intensity={1} color="#D61424" />
                        <directionalLight position={[-20, 50, 20]} intensity={0.5} color="#D61424" />
                        <OrbitControls enableZoom={false} />
                        <Globe ref={fontRef} scale={0.1} />
                        <ambientLight />
                    </Canvas>

                    <div className='address'>
                        <div className='add-text'>
                            <p>Low Dong Han,</p>
                            <p>Ang Mo Kio Avenue 10</p>
                            <p className='email-click' onClick={handleEmailClick}> <span className='span-add'>@ </span> : donghan20002@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    </>



}