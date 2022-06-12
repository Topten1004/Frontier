import React from 'react' ;

import Script from 'next/script';

const Footer = () => {
    return (
        <>
            <div className='bg-[#0d0d0d] w-full h-[180px] flex items-center justify-center'>
                <img src={'/logo_footer.png'} no='no image.'/>
            </div>
            <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
        </>
    )
}

export default Footer ;