import React from 'react'
import Stopwatch from './Componets/Stopwatch';
import { Accordion } from './Componets/Accordion';
// import { ImageSlider } from './Componets/ImageSlider';
import MultiCmpo from './Componets/MultiCmpo';
// import  IMG_20200224_165427_1 from './lib/IMG_20200224_165427_1.jpg'
// import Rosemary from "./lib/Rosemary.webp"

function App() {
 
  const faqs = [
    { question: 'What is React?', answer: 'A JavaScript library for building UIs.' },
    { question: 'What is Tailwind CSS?', answer: 'A utility-first CSS framework.' }
  ];

  return (
    <div className='border-b p-4'>
      <Stopwatch />
      <Accordion faqs={faqs} />
      {/* <ImageSlider /> */}
      <MultiCmpo />
    </div>
  )
}

export default App;
