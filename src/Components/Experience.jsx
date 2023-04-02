import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";
import { Points, PointMaterial } from '@react-three/drei'
import { inSphere } from "maath/random";

export default function Experience() {

    return <>
        <Stars />
    </>

}


function Stars(props) {


    const ref = useRef()
    const [sphere] = useState(() => inSphere(new Float32Array(5000), { radius: 1.5 }))
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial transparent color="#ff328e" size={0.005} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    )
}