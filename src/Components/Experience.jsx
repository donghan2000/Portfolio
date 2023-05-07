import { useState, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { BakeShadows, useCursor, Loader } from '@react-three/drei'
import { TextureLoader } from 'three'
import { skillsets } from './Informations/Skillset'

export default function Experience() {


    return <>
        <section className='section-dividers' id='skills'>

            <div className='skills-canvas-section'>

                <div className='skills-individual-template'>
                    <Canvas shadows dpr={1.5} camera={{ position: [-6, 22, -15], fov: 55 }}>
                        <Stage />
                        {skillsets.map((skillset, i) => (
                            <Stair
                                key={i}
                                rotation={[-(-Math.PI / 2), 0, i / Math.PI / 2]}
                                position={[

                                    -(4 - Math.sin(i / 5) * (6 + 2)),
                                    i * 0.5,
                                    2 - Math.cos(i / 5) * (6 + 2)

                                ]}
                                textureUrl={skillset.imageUrl}

                            />
                        ))}
                    </Canvas>
                    <Loader />
                </div>

                <div className='crosses-r'>
                    <div className='horizontal skills-h'></div>
                    <div className='vertical skills-v'></div>
                </div>

                <div className='skills-text-half'>
                    <div className='skills-experience-text-title'>

                        <div className='skill-header'>
                            <header>My Skills</header>
                            <p>I am passionate about using my skills to contribute to meaningful projects and am excited about the opportunities that lie ahead.
                                Here you will find a summary of my skills and expertise that I have acquired throughout my career.</p>
                        </div>

                        <div className='behind-title-skill'>
                            <p>My Experiences</p>
                        </div>

                        <header>Work Experiences</header>

                        <div className='experiences-container'>
                            <div className='experiences-row-1'>
                                <div className='exp-small'>
                                    <p>NTUC Fairprice</p>
                                    <p>2017-2017</p>
                                </div>
                                <div className='exp-small'>
                                    <p>Better Trade Off</p>
                                    <p>2019-2019</p>
                                </div>
                            </div>
                            <div className='experiences-row-2'>
                                <div className='exp-small'>
                                    <p>IDENTIV</p>
                                    <p>2018-2018</p>
                                </div>
                                <div className='exp-small'>
                                    <p>48 SAR ( NS )</p>
                                    <p>2020-2022</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='skills-proficiencies-text-title'>
                        <header>Proficiencies</header>

                        <div className='proficiency-graph'>
                            <p className='graph-title'> Front End</p>
                            <div className='graph-colorarea'></div>
                            <div className='graph-greyarea'></div>
                        </div>

                        <div className='proficiency-graph second-graph'>
                            <p className='graph-title'> Back End</p>
                            <div className='graph-colorarea second-color'></div>
                            <div className='graph-greyarea'></div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    </>

}

function Stair({ textureUrl: initialTextureUrl, ...props }) {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const [textureUrl, setTextureUrl] = useState(initialTextureUrl);
    const [clicked, setClicked] = useState(false);
    const texture = useLoader(TextureLoader, textureUrl);

    const handleMouseOver = () => {
        setHovered(true);
        // textureUrl.endsWith('.png') && setTextureUrl(textureUrl.replace('.png', '3.png'));
    };

    const handleMouseOut = () => {
        setHovered(false);
        // textureUrl.endsWith('.png') && setTextureUrl(textureUrl.replace('3.png', '.png'));
    };

    useFrame((state) =>
        ref.current.scale.setScalar(
            hovered ? 1 + Math.sin(state.clock.elapsedTime * 10) / 50 : 1
        )
    );
    useCursor(hovered);
    return (
        <mesh
            {...props}
            ref={ref}
            receiveShadow
            castShadow
            onClick={(e) => { e.stopPropagation(); setClicked(!clicked) }}
            onPointerOver={(e) => { e.stopPropagation(); handleMouseOver() }}
            onPointerOut={(e) => handleMouseOut()}
        >
            <boxGeometry args={[2, 6, 0.075]} />
            <meshStandardMaterial
                map={texture}
                roughness={1}
                transparent
                opacity={hovered ? 1 : 1}
            // color={hovered ? "red" : "white"}
            />
        </mesh>
    );
}

function Stage() {
    return (
        <>
            {/* Fill */}
            <ambientLight intensity={0.5} />
            {/* Main */}
            <directionalLight
                position={[1, 10, -2]}
                intensity={0.5}
                shadow-camera-far={70}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                shadow-mapSize={[512, 512]}
                castShadow
                color="#A7A2A2"
            />
            {/* Strip */}
            <directionalLight position={[-10, -10, 2]} intensity={3} color="#D61424" />
            {/* Ground */}
            <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.75, 0]}>
                <planeGeometry args={[20, 20]} />
                <shadowMaterial opacity={0.2} />
            </mesh>
            {/* This freezes the shadow map, which is fast, but the model has to be static  */}
            <BakeShadows />
        </>
    )
}