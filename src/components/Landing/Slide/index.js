import React,{ useEffect, useRef } from 'react' ;

import { useMeasure } from 'react-use' ;

const Slide = () => {

    const slideCtrl = useRef() ;

    const [ setSlideCtrl, {width, height} ] = useMeasure() ;

    useEffect(() => {
        setSlideCtrl(slideCtrl.current) ;
    }, []) ;

    return (
        <div className='w-full flex justify-center pt-[20px] mb-[8%] relative' ref={slideCtrl} >
            <img src={"/eyes.png"} width={width * 0.95} height={width * 0.95 * 0.19} className='rounded-[10px]' alt='no image.' 
            />
            <div className={`absolute bottom-[-40%]`}>
                <img src={'/eye.png'} width={width * 0.15 * 0.95} height={width * 0.15 * 0.95} alt='no image.'/>
            </div>
        </div>
    )
}

export default Slide ;