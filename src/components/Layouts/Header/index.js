import React from 'react' ;

import clsx from 'clsx';

import { 
    SearchIcon,
    GridIcon
} from '../../../assets/Icons/Layouts';

const classes = {
    navbar : "flex items-center bg-[#0D0D0D] border-solid border-500 box-border w-full h-[80px] pl-[20px] pr-[20px] md:pl-[30px] md:pr-[30px]",
    collapseButton : "accordion-button relative flex items-center !shadow-none !bg-[#191315] after:bg-[url('/menu.svg')]",
    moblieItem : "text-[20px] cursor-[pointer] pl-[10px] pt-[5px] pb-[5px]",
    divider : "border-[#1F1F1F] border-[1px]"
}

const Header = () => {
    return (
        <>
            <div className={classes.navbar}>
                <div className="max-xs:hidden w-[0px] min-w-[0px] pr-[30px] xs:w-[195px] xs:min-w-[195px]">
                    <img src={'/logo.png'} alt='no image.'/>
                </div>
                <div className='flex gap-2 w-full' >
                    <div className='flex justify-end w-[70%] tablet:w-[100%]'>
                        <div className='w-[70%] tablet:w-[100%] mt-1 relative rounded-md' >
                            <div className="absolute inset-y-0 left-0 pl-[20px] flex items-center pointer-events-none text-[#A2A2A2]">
                                <span className="text-[#A2A2A2] sm:text-sm">
                                    { SearchIcon }
                                </span>
                            </div>
                            <input className="bg-[#1F1F1F] border-solid rounded-[10px] w-full h-[40px] py-2 px-4 text-[#A2A2A2] leading-tight focus:outline-none focus:bg-[#1F1F1F] focus:border-yellow-500 pl-[65px]" id="inline-full-name" type="text" placeholder='Lorem ipsum'/>
                        </div>
                    </div>
                    <div className='tablet:hidden tablet:w-[0%] w-[30%] grid grid-cols-3 gap-5 text-white cursor-pointer flex'>
                        <div className='flex items-center justify-center font-bold'>Lorem</div>
                        <div className='flex items-center justify-center font-bold'>Lorem</div>
                        <div className='flex items-center justify-center font-bold'>Lorem</div>
                    </div>
                    <div className="invisible w-[0px] tablet:visible tablet:w-[auto] flex items-center">
                        <button className={classes.collapseButton} type='button'  data-bs-toggle='collapse' data-bs-target='#leftLoremCollapseOne' aria-expanded='true'   aria-controls='leftLoremCollapseOne'>
                        </button>
                    </div>
                </div>
            </div>

            <div className='accordion' id='accordionLeftLorem'>
                <div className='accordion-item' >
                    <div id='leftLoremCollapseOne' className='accordion-collapse collapse' aria-labelledby='leftLoremHeadingOne'
                        data-bs-parent='accordionLeftLorem'
                    >
                        <div className='accordion-body text-[14px] bg-[#0D0D0D] text-white '>
                            <ul>
                                <li className={clsx( classes.moblieItem, "xs: hidden")}><img src={'/logo.png'}/></li>
                                <li className={classes.divider}/>
                                <li className={classes.moblieItem}>Lorem</li>
                                <li className={classes.divider}/>
                                <li className={classes.moblieItem}>Lorem</li>
                                <li className={classes.divider}/>
                                <li className={classes.moblieItem}>Lorem</li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[5px] mx-auto bg-gradient-to-r from-[#665AEF] via-[#b84695] to-[#FC364C]" />

            
        </>
    )
}

export default Header ;