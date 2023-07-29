import React from 'react'

/**
 *
 * @param {string} path
 * @returns {DOM}
 */
export default function BackgroundImage({ children, path = '/img/background.jpg' }) {
    const container = {
        zIndex: 10
    }
    return (
        <div className='position-relative w-100 mh-100'>
            <div className='w-100 h-100 position-fixed top-0 start-0' style={{ backgroundImage: `url("${path}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', zIndex: 5 }}>
                <div className='container overflow-auto' style={container}>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}
