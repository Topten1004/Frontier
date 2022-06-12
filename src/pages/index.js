import React from 'react' ;

import Slide from '../components/Landing/Slide';
import LinkGp from '../components/Landing/LinkGp';
import LeftLorem from '../components/Landing/LeftLorem';
import RightLorem from '../components/Landing/RightLorem';


const Landing = () => {
    
    return (
        <>
            <div className={"bg-default-gradient-radial from-[#2c274f] via-[#2c1d27] to-[#181818] drop-shadow-2xl"}>
                
                <Slide />

                <LinkGp />

                <div className='w-full p-[10px] xs:p-[50px] xl:p-[100px] grid grid-cols-1 md:grid-cols-2 gap-4 items-start'>
                    <LeftLorem />

                    {/*  right Lorem ipsum  */}
                    <div className='grid grid-cols-1 gap-4'>
                        <RightLorem />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing ;