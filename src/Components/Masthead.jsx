import React from 'react'
import { Canvas } from '@react-three/fiber';
import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";
import { Points, PointMaterial } from '@react-three/drei'
import { inSphere } from "maath/random";
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Masthead() {

    return <>
        <section>
            <div className='masthead-canvas'>
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars />
                    <ambientLight />
                    <EffectComposer>
                        <Bloom
                            mipmapBlur
                            intensity={1}
                            luminanceThreshold={0}
                            luminanceSmoothing={0.1}

                        />
                    </EffectComposer>

                </Canvas>
            </div>

            <div className='masthead-div'>
                <div className='masthead-text'>
                    <h1>DONG HAN</h1>
                    <div className='masthead-tagline'>
                        <p>Web Developer & UI / UX Designer</p>
                    </div>
                    <div className="wrap">
                        <a href="http://wwww.donghan.co" className="button">CONTACT ME</a>
                    </div>
                </div>
            </div>


        </section>
    </>

}

function Stars(props) {


    const ref = useRef()
    const [sphere] = useState(() => inSphere(new Float32Array(5000), { radius: 1.5 }))
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })

    return <>


        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial transparent color="#d61424" size={0.005} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>


    </>
}