import { OrbitControls, PresentationControls, Float } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import Robot from './Informations/Robot.jsx'
import * as THREE from 'three'

export default function Story() {

    const groupDoughnuts = useRef()
    const donuts = useRef([])
    const [torusGeometry, setTorusGeometry] = useState()
    const [material, setMaterial] = useState()

    // useFrame((state, delta) => {
    //     // groupDoughnuts.current.rotation.y += delta * 0.2
    // })

    function Rig({ children }) {
        const ref = useRef()
        const vec = new THREE.Vector3(2, 1, 4.5)
        const { camera } = useThree()
        useFrame(() => {
            camera.position.lerp(vec, 0.05)
        })
        return <group ref={ref}>{children}</group>
    }


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

                <Canvas className='about-canvas'
                    camera={{ position: [4, 0, -12], fov: 75 }}
                >
                    <boxGeometry ref={setTorusGeometry} scale={1} args={[1, 1, 1]} />
                    <meshStandardMaterial ref={setMaterial} color="red" toneMapped={false} />
                    <Rig>
                        <PresentationControls
                            global
                            polar={[-0.1, -1.2]}
                            azimuth={[-1, 0.75]}
                            config={{ mass: 2, tension: 400 }}
                            snap={{ mass: 4, tension: 400 }}
                        >
                            <Float
                                speed={3}
                                rotationIntensity={1}
                                floatIntensity={1}
                                floatingRange={[0, 1]}
                            >
                                <group position={[0, -1.5, 0]}>
                                    <Robot scale={0.5} />
                                </group>
                            </Float>
                        </PresentationControls>
                    </Rig>
                    <group ref={groupDoughnuts} position={[0, 3, 0]}>
                        {[...Array(100)].map((_, index) =>
                            <mesh
                                key={index}
                                ref={element => donuts.current[index] = element}
                                geometry={torusGeometry}
                                material={material}
                                position={[
                                    (Math.random() - 0.5) * 15,
                                    (Math.random() - 0.5) * 15,
                                    (Math.random() - 0.5) * 15
                                ]}
                                scale={0.2 + Math.random() * 0.2}
                                rotation={[
                                    Math.random() * Math.PI,
                                    Math.random() * Math.PI,
                                    0
                                ]}
                            />
                        )}
                    </group>
                    <OrbitControls enableZoom={false} />

                    <ambientLight />
                </Canvas>
            </div>


        </section>
    </>

}