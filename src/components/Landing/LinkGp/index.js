import React,{ useState, useRef, useEffect } from 'react' ;

import { useMeasure } from 'react-use';

import { 
    ChartIcon, 
    GridIcon, 
    PenIcon
} from '../../../assets/Icons/Landing' ;

const classes = {
    loremTab : 'bg-[#1b1518] focus:outline-none focus:bg-[#1b1518]  text-white p-[15px] rounded-[5px] font-bold flex gap-2 items-center',
    loremActiveTab : 'bg-[#060606] focus:outline-none focus:bg-[#060606] text-white p-[15px] rounded-[5px] font-bold flex gap-2 items-center'
}

const LinkGp = () => {

    const [loremButton, setLoremButton] = useState(1) ;
    
    const handleLoremBtn = (index) => {
        setLoremButton(index) ;
    }

    const linkItems = [
        {
            label : <>
                <span>
                    { ChartIcon }
                </span>
                <span>
                    Lorem ipSum
                </span>
            </>,
            link : ''
        },
        {
            label : <>
                <span>
                    { GridIcon }
                </span>
                <span>
                    Lorem ipSum
                </span>
            </>,
            link : ''
        },
        {
            label : <>
                <span>
                    { PenIcon }
                </span>
                <span>
                    Lorem ipSum
                </span>
            </>,
            link : ''
        }
    ]
    
    
    return (
        <>
            <div className='text-white text-[20px] xs:text-[30px] font-bold w-full flex justify-center'>
                Lorem ipsum
            </div>
            
            <div className='w-full text-[15px] xs:text-[20px] flex flex-col justify-center items-center mt-[5px]'>
                <div>
                    <span className='text-white mr-[10px]'>Created by : </span><span className='text-red-600'>Lorem ipsum</span>
                </div>
                <div className='text-white text-center mt-[5px]'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                </div>
                
                <div className='mt-[70px] flex flex-col sm:flex-row gap-4 cursor-pointer'>
                    {
                        linkItems.map((item, index) => {
                            return (
                                <button key={index} className={index === loremButton ? classes.loremActiveTab : classes.loremTab}
                                    onClick={() => handleLoremBtn(index)}
                                >
                                    { item.label }
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default LinkGp ;