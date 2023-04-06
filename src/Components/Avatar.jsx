import { OrbitControls, PresentationControls, Float } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useState, useRef } from "react";
import Robot from './Robot.jsx'
import * as THREE from 'three'



export default function Avatar() {


    const groupDoughnuts = useRef()
    const donuts = useRef([])
    const [torusGeometry, setTorusGeometry] = useState()
    const [material, setMaterial] = useState()

    useFrame((state, delta) => {

        // groupDoughnuts.current.rotation.y += delta * 0.2

    })

    function Rig({ children }) {
        const ref = useRef()
        const vec = new THREE.Vector3()
        const { camera } = useThree()
        useFrame((state, delta) => {
            camera.position.lerp(vec.set(2, 1, 4.5), 0.05)
        })
        return <group ref={ref}>{children}</group>
    }



    return <>


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
                    speed={1} // Animation speed, defaults to 1
                    rotationIntensity={1} // XYZ rotation intensity, defaults to 1
                    floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={[0, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                >
                    <group position={[0, -1.5, 0]}>
                        <Robot scale={.5} />
                    </group>
                </Float>

            </PresentationControls>

        </Rig>




        <group ref={groupDoughnuts} position={[0, 3, 0]}>
            {[...Array(100)].map((value, index) =>
                <mesh
                    key={index}
                    ref={(element) => donuts.current[index] = element}
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


    </>

}