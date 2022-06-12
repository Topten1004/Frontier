import React from 'react' ;

import { 
    CameraIcon,
    ExitIcon,
    GridIcon, 
    JoyStickIcon,
    TweetIcon
} from '../../../assets/Icons/Landing';

const classes = {
    socialDiv : "flex flex-row items-center" ,
    social : "text-[14px] text-red-600 hover:text-white ml-[12px] cursor-pointer",

    collapseButton : "accordion-button relative flex items-center !shadow-none !bg-[#191315] after:bg-[url('/Vector.svg')]"
}

const LeftLorem = () => {

    const socialLinks = [
        {
            label : <>
                { ExitIcon }
                <span className={classes.social}>Lorem ipsum.com</span>
            </>,
            link : '/'
        },
        {
            label : <>
                { JoyStickIcon }
                <span className={classes.social}>Lorem ipsum.com</span>
            </>,
            link : '/'
        },
        {
            label : <>
                { CameraIcon }
                <span className={classes.social}>Lorem ipsum.com</span>
            </>,
            link : '/'
        },
        {
            label : <>
                { TweetIcon }
                <span className={classes.social}>Lorem ipsum.com</span>
            </>,
            link : '/'
        }
    ]

    return (
        <>
            {/* left Lorem ipsum */}
            <div className='bg-[#191315] rounded-[10px] p-[35px]'>
                <div className='accordion' id='accordionLeftLorem'>
                    <div className='accordion-item' >
                        <div className='accordion-header flex flex-row items-center justify-between' id='leftLoremHeadingOne'>
                            <div className='flex flex-row items-center text-white'>
                                { GridIcon }
                                <span className='ml-[5px]'>Lorem ipsum</span>
                            </div>
                            <button className={classes.collapseButton} type='button'  data-bs-toggle='collapse' data-bs-target='#leftLoremCollapseOne' aria-expanded='true'   aria-controls='leftLoremCollapseOne'
                            />
                        </div>
                        <div id='leftLoremCollapseOne' className='accordion-collapse collapse show' aria-labelledby='leftLoremHeadingOne'
                            data-bs-parent='accordionLeftLorem'
                        >
                            <div className='accordion-body text-[14px] text-white pr-[10%] mt-[15px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='grid grid-cols-1 xs:grid-cols-2 gap-5 mt-[35px] mr-[20%]'>
                    {
                        socialLinks.map((item, index) => {
                            return (
                                <div className={classes.socialDiv} key={index}>
                                    { item.label }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default LeftLorem ;