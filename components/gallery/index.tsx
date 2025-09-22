import React from 'react';
import Image from "next/image";
//import img from '@/assets/img/test.jpg';
import Project1 from '@/assets/img/Project1.png';
import Project2 from '@/assets/img/Project2.png';
import Project3 from '@/assets/img/Project3.png';
import Project4 from '@/assets/img/Project4.png';

function Gallery() {
  // Definir el objeto con datos para la galería
  const galleryItems = {
    images: [
     /* { id: 1, src: img, alt: 'Image 1', col: "col-span-3" },
      { id: 2, src: img, alt: 'Image 2', col: "col-span-3" },
      { id: 3, src: img, alt: 'Image 3', col: "col-span-6" },
      { id: 4, src: img, alt: 'Image 4', col: "col-span-3" },
      { id: 5, src: img, alt: 'Image 5', col: "col-span-3" },
      { id: 6, src: img, alt: 'Image 6', col: "col-span-6" },
      { id: 7, src: img, alt: 'Image 7', col: "col-span-6" },
      { id: 8, src: img, alt: 'Image 8', col: "col-span-3" },
      { id: 9, src: img, alt: 'Image 9', col: "col-span-3" },*/
      { id: 1, src: Project1, alt: 'Image 1', col: "col-span-6" },
      { id: 2, src: Project2, alt: 'Image 2', col: "col-span-6" },
      { id: 3, src: Project3, alt: 'Image 3', col: "col-span-6" },
      { id: 4, src: Project4, alt: 'Image 4', col: "col-span-6" },
    ]
  };

  return (
    <div className='grid grid-cols-12 p-2 bg-black'>
        {galleryItems.images.map(item => (
          <div key={item.id}  className={item.col}>
            <Image src={item.src} alt={item.alt} className="h-full w-full p-2" />
          </div>
        ))}
    </div>
  );
}

export default Gallery;