import React, { useMemo, useCallback, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Edges } from '@react-three/drei';
import { inSphere } from 'maath/random';
import { Link } from 'react-scroll';
import { Perf } from "r3f-perf";
import { useInView } from 'react-intersection-observer';


export default function Masthead() {

    const [canvasRef, inView] = useInView({ threshold: 0 });

    return <>
        <section className='section-masthead' id='hero'>
            <div ref={canvasRef} className='masthead-canvas'>
                {inView && (
                    <Canvas dpr={1.5} performance={{ max: 0.1 }} camera={{ position: [0, 0, 1] }}>
                        {/* <Perf position="top=left" /> */}
                        <Stars />
                        <group position={[0.6, 0, 0]}>
                            <DotSphere />
                        </group>
                    </Canvas>
                )}
            </div>

            <div className='masthead-div'>
                <div className='masthead-text'>
                    <h1>DONG HAN</h1>
                    <div className='masthead-tagline'>
                        <p>Web Developer & UI / UX Designer</p>
                    </div>
                    <div className='wrap'>
                        <Link to='contact' spy={true} smooth={true} offset={-10} duration={500} className='button'>
                            CONTACT ME
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
}

const Stars = React.memo((props) => {
    const ref = useRef();
    const spherePositions = useMemo(() => inSphere(new Float32Array(2000), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={spherePositions} stride={3} frustumCulled={true} {...props}>
                <PointMaterial transparent color={[0.5, 0, 0]} size={0.005} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    );
});

const DotSphere = React.memo(({ cutterPos = [0, 0, 0], ...props }) => {
    const cutterRef = useRef();

    const useFrameCallback = useCallback((state, delta) => {
        cutterRef.current.rotation.x += delta / 5;
    }, []);

    useFrame(useFrameCallback);

    return (
        <mesh dispose={null} scale={0.2} rotation={[2, 2, 0]}>
            <mesh ref={cutterRef} position={cutterPos}>
                <icosahedronGeometry args={[2, 2]} />
                <meshBasicMaterial transparent opacity={0} toneMapped={false} />
                <Edges scale={1} threshold={11.2}>
                    <lineBasicMaterial color={[1, 0, 0]} toneMapped={false} />
                </Edges>
            </mesh>
        </mesh>
    );
});