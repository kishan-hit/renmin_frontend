import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
const images = require.context('../assets/images/pics', true);
const imageList = images.keys().map(image => images(image));

const PhotoGallery = () => {
    const [isFocused, setIsFocused] = useState(false);

    function handleFocus() {
        setIsFocused(!isFocused);
    }
    return (
        <div className='w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap items-center justify-between'
        >
            {imageList.map((image, index) =>
                <Slide direction="up" duration={1500} triggerOnce>
                    <div className='group w-full relative my-2 shadow-md hover:scale-105 transition-all duration-700' onMouseEnter={handleFocus} onMouseLeave={handleFocus}>
                        <img src={image} alt='image1' className='h-full w-full'></img>
                    </div>
                </Slide>
            )}
        </div>
    )
}

export default PhotoGallery