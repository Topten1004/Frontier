import React,{ useState, useEffect, useRef } from 'react' ;

import clsx from 'clsx';

import { useMeasure } from 'react-use';

import { 
    GridIcon,
    QuestionIcon
} from '../../../assets/Icons/Landing';

const mockList = [
    {
        title : 'Accessories & Ears',
        label : 'Lorem ipsum',
        percent : '9%'
    },
    {
        title : 'Arms',
        label : 'Lorem ipsum',
        percent : '15%'
    },
    {
        title : 'Background',
        label : 'Lorem ipsum',
        percent : '2%'
    },
    {
        title : 'Eye',
        label : 'Lorem ipsum',
        percent : '32%'
    },
    {
        title : 'Glasses',
        label : 'Lorem ipsum',
        percent : '3%'
    },
    {
        title : 'Hair & Hats',
        label : 'Lorem ipsum',
        percent : '2%'
    },
    {
        title : 'Head',
        label : 'Lorem ipsum',
        percent : '92%'
    },
    {
        title : 'Legs & Clothes',
        label : 'Lorem ipsum',
        percent : '2%'
    },
    {
        title : 'Mouth',
        label : 'Lorem ipsum',
        percent : '46%'
    },
    {
        title : 'Mouth',
        label : 'Lorem ipsum',
        percent : '46%'
    },
    {
        title : 'Head',
        label : 'Lorem ipsum',
        percent : '92%'
    },
    {
        title : 'Legs & Clothes',
        label : 'Lorem ipsum',
        percent : '2%'
    },
]

const classes = {
    itemDiv : "rounded-[10px] bg-[#0d0d0d] w-[150px] p-[15px] border-[2px] mr-[10px]",
    itemTitle: 'text-[#666466] text-[13px] mb-[5px] flex justify-center',
    itemLable : "text-white text-[14px] mb-[5px] flex justify-center",
    itemPercent : "text-[#666466] text-[13px] flex justify-center",

    collapseButton : "accordion-button relative flex items-center !shadow-none !bg-[#191315] after:bg-[url('/Vector.svg')]"
}

const RightLorem = () => {
    const [loremItem, setLoremItem] = useState(0) ;
     
    const [colsCount, setColsCount] = useState(1) ;
    const [rowsCount, setRowsCount] = useState(1) ;

    const loremListCtrl = useRef() ;

    const [ setLoremListCtrl, {width, height} ] = useMeasure() ;

    const handleLoremItem = (index) => {
        setLoremItem(index) ;
    }

    useEffect(() => {
        setLoremListCtrl(loremListCtrl.current) ;
    }, []) ;

    useEffect(() => {
        
        if(Math.floor(width / 160)) {
            setColsCount(Math.floor(width / 160)) ;
            setRowsCount(Math.floor(mockList.length / Math.floor(width / 160))) ;
        }

    }, [width])
    
    return (
        <>
            <div className='bg-[#191315] rounded-[10px] p-[35px]'>
                <div className='accordion' id='accordionRightLorem'>
                    <div className='accordion-item' >
                        <div className='accordion-header flex flex-row items-center justify-between mb-[25px]' id='rightLoremHeadingOne'>
                            <div className='flex flex-row items-center text-white'>
                                { GridIcon }
                                <span className='ml-[5px] mr-[5px]'>Lorem ipsum</span>
                                { QuestionIcon }
                            </div>
                            <button className={classes.collapseButton} type='button'  data-bs-toggle='collapse' data-bs-target='#rightLoremCollapseOne' aria-expanded='true'   aria-controls='rightLoremCollapseOne'
                            />
                        </div>
                        <div id='rightLoremCollapseOne' className='accordion-collapse collapse show' aria-labelledby='rightLoremHeadingOne' data-bs-parent='accordionRightLorem'
                        >
                            <div className={ `lorem-list-scrollbar gap-4 cursor-pointer max-h-[336px] pr-[10px] overflow-auto`} ref={loremListCtrl}>
                                {
                                    [...Array(rowsCount)].map((row, index) => {
                                        return (
                                            <div className='flex flex-row mb-[15px]' key={index}>
                                                {
                                                    [...Array(colsCount)].map((item, ind) => {
                                                        return (
                                                            <div key={index+ind}
                                                                className={'flex justify-center'}
                                                                style={{width : width / colsCount}}
                                                            >
                                                                <div 
                                                                    className={clsx(classes.itemDiv, colsCount*index + ind === loremItem ? 'border-[#a82a39]' : 'border-[#0d0d0d]')}
                                                                    onClick={() => handleLoremItem(colsCount*index + ind)}
                                                                    
                                                                >
                                                                    <div className={classes.itemTitle}>
                                                                        { mockList[colsCount*index + ind]?.title }
                                                                    </div>
                                                                    <div className={classes.itemLable}>
                                                                        { mockList[colsCount*index + ind]?.label }
                                                                    </div>
                                                                    <div className={classes.itemPercent}>
                                                                        { mockList[colsCount*index + ind]?.percent }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                                {
                                    ( mockList.length % colsCount ) ? <div className='flex flex-row mb-[15px]' >
                                    {
                                        [...Array(mockList.length % colsCount)].map((item, ind) => {
                                            return (
                                                <div key={`last_${ind}`}
                                                    className={'flex justify-center'}
                                                    style={{width : width / colsCount}}
                                                >
                                                    <div 
                                                        className={clsx(classes.itemDiv, rowsCount * colsCount + ind === loremItem ? 'border-[#a82a39]' : 'border-[#0d0d0d]')}
                                                        onClick={() => handleLoremItem(rowsCount * colsCount + ind)}
                                                        
                                                    >
                                                        <div className={classes.itemTitle}>
                                                            { mockList[rowsCount * colsCount + ind]?.title }
                                                        </div>
                                                        <div className={classes.itemLable}>
                                                            { mockList[rowsCount * colsCount  + ind]?.label }
                                                        </div>
                                                        <div className={classes.itemPercent}>
                                                            { mockList[rowsCount * colsCount  + ind]?.percent }
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    </div> : <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#191315] rounded-[10px] p-[35px]'>
                <div className='accordion' id='accordionLeftLorem'>
                    <div className='accordion-item' >
                        <div className='accordion-header flex flex-row items-center justify-between' id='rightItemLoremHeadingOne'>
                            <div className='flex flex-row items-center text-white'>
                                { GridIcon }
                                <span className='ml-[5px] mr-[5px]'>Lorem ipsum</span>
                            </div>
                            <button className={classes.collapseButton} type='button'  data-bs-toggle='collapse' data-bs-target='#rightItemLoremCollapseOne' aria-expanded='true' aria-controls='rightItemLoremCollapseOne'
                            />
                        </div>
                        <div id='rightItemLoremCollapseOne' className='accordion-collapse collapse show' aria-labelledby='rightItemLoremHeadingOne'
                            data-bs-parent='accordionLeftLorem'
                        >
                            <div className='accordion-body text-[14px] text-white pr-[10%] mt-[15px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightLorem ;