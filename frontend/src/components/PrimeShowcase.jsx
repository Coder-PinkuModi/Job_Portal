import { useState, useEffect } from 'react';
import SearchBox from "./SearchBox.jsx";

function PrimeShowcase() {
    const text = "Turn your dream job into reality with ";
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        let currentText = ""; 

        const typeWriterEffect = () => {
            if (index < text.length) {
                currentText += text.charAt(index);
                setDisplayedText(currentText);
                index++;
                setTimeout(typeWriterEffect, 50);
            }
        };

        const initialDelay = setTimeout(typeWriterEffect, 1500);

        return () => clearTimeout(initialDelay);

    }, [text]);

    return (
        <div className="primeContainer flex flex-col gap-3 my-3 bg-[#f0ebebef] py-4 shadow-lg rounded-lg">
            <div className='flex items-center justify-center'>
                <h2 className="font-bold text-1xl text-[#e24365fb] shadow-xl py-1 px-4 rounded-lg bg-[#f9f5f5]">Your career starts here</h2>
            </div>
            <div className='flex items-center justify-center px-6 py-3 text-4xl font-sans rounded-xl'>
                <p className='font-bold text-3xl'>
                    {displayedText}
                    <span className="font-bold"> Job<span className='text-[#3B82F6]'>Portal</span></span>
                </p>
            </div>

            <div className="searchBox">
                <SearchBox />
            </div>
        </div>
    );
}

export default PrimeShowcase;
