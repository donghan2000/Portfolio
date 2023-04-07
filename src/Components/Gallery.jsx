import React, { useState } from 'react'
import { a } from '@react-spring/web'
import { Slider } from './Slider'
import { items } from './items'



export default function Gallery() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [activeHovered, setHovered] = useState(0)
    const [modal, setModal] = useState(false);
    const [openedModal, setOpen] = useState(0)


    const onEnter = (i) => {
        setIsHovering(true);
        setHovered(i);
    }

    const onLeave = (event) => {
        setIsHovering(false)
    }

    const openModal = (i) => {
        console.log("modal " + i + " is open");
        setOpen(i);
        setModal(true);

    }

    const closeModal = (event) => {
        setModal(false);
    }


    return <>

        <div className="work-flex fill center work-container" >
            <div className="work-main">
                <Slider items={items} width={700} visible={3} setActiveIndex={setActiveIndex} setModal={setModal}>
                    {({ imageUrl, Title }, i) => (
                        <div className="work-content">
                            <div className="work-marker">{Title}</div>

                            <a.div
                                className="works-gallery-image"
                                style={{
                                    backgroundImage: imageUrl,
                                    opacity: i === activeHovered && isHovering ? "0.25" : "1",
                                    backgroundSize: i === activeHovered && isHovering ? "150%" : "100%"
                                }}
                                onPointerEnter={() => onEnter(i)}
                                onPointerLeave={(onLeave)}
                            />

                            <div className='work-circle'
                                style={{
                                    opacity: i === activeHovered && isHovering ? "1" : "0",
                                    width: i === activeHovered && isHovering ? "100px" : "0",
                                    height: i === activeHovered && isHovering ? "100px" : "0",
                                    backgroundSize: i === activeHovered && isHovering ? "150%" : "100%"
                                }}
                                onPointerEnter={() => onEnter(i)}
                                onPointerLeave={(onLeave)}
                                onClick={() => openModal(i)}
                            ></div>

                        </div>
                    )}
                </Slider>
            </div>

            <div items={items} className='work-modal'
                style={{ display: modal ? "block" : "none" }}
            >

                <button onClick={() => closeModal()} className='works-close-button'>
                    <span className='modal-close'>x</span>
                </button>

                <div className='work-flex-div'>

                    <div className='work-modal-div'>
                        <img className='work-modal-images' src={items[openedModal].workContentImage} alt='gallery-images' />
                    </div>

                    <div className='works-modal-title'>
                        <h1>{items[openedModal].Title}</h1>
                    </div>
                </div>

            </div>


            <div className="nav-works-index">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className={`work-dot ${i === activeIndex ? 'gallery-active' : ' '}`}
                    />
                ))}
            </div>
        </div>

    </>

}