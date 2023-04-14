import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";
import { Points, PointMaterial, Edges, Loader } from '@react-three/drei'
import { inSphere } from "maath/random";
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Masthead() {

    return <>
        <section>
            <Suspense>
                <div className='masthead-canvas'>
                    <Canvas camera={{ position: [0, 0, 1] }}>
                        <Stars />
                        <group position={[0.6, 0, 0]}>
                            <DotSphere />
                        </group>
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
            </Suspense>
            <Loader />
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

function DotSphere({ cutterPos = [0, 0, 0], ...props }) {
    const cutter = useRef()
    useFrame((state, delta) => {
        cutter.current.rotation.x += delta / 5
    })
    return (
        <mesh castShadow receiveShadow dispose={null} scale={0.2} rotation={[2, 2, 0]}>
            <mesh ref={cutter} position={cutterPos} >
                <icosahedronGeometry args={[2, 2]} />
                <meshBasicMaterial transparent opacity={0} />
                <Edges scale={1} threshold={11.2}>
                    <lineBasicMaterial color={[0.5, 0, 0]} toneMapped={false} />
                </Edges>
            </mesh>
        </mesh>
    )
}