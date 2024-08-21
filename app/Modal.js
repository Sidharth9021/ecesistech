import React, { useEffect, useState, useRef } from 'react';

const Modal = ({ showModal, setShowModal, title, description, imageUrl, linkedInUrl }) => {
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === 'Escape' && setShowModal(false);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
  }, [setShowModal]);

  if (!showModal) return null;

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
}, []);



  return (
    <div className="fixed inset-0 z-50" onClick={() => setShowModal(false)} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div
        className={`relative bg-white p-6 rounded-lg shadow-lg flex flex-row items-center justify-start `}
        style={{
          position: 'absolute',
          width: isMobile ? '95vw' : '80%',  // Makes the modal 80% of the viewport width
          height: isMobile ? '85vh' : '80vh',  // Makes the modal 70% of the viewport height
          left: '50%',
          top: '56%',
          transform: 'translate(-50%, -50%)',
        }}
        onClick={e => e.stopPropagation()}
      >

        <div className="flex flex-col justify-center items-center md:flex-row  md:items-center">
          <img src={imageUrl} alt="Profile" className={`w-full md:w-auto ${isMobile ? 'w-[50%] ' : 'h-[90%]'}  object-cover rounded-lg`} />

          <div className='flex flex-col w-full mt-4 md:mt-0 md:ml-3 max-w-[97%] text-justify'>
            <h1 className="text-xl text-center sm:text-left sm:text-2xl font-bold">{title}</h1>
            <div className="text-[10px] sm:text-sm mt-2 md:mt-0 md:ml-4">{description}</div>
            <a href={linkedInUrl} className="text-blue-500 mt-2 md:ml-4" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>


        <button
          onClick={() => setShowModal(false)}
          className="absolute top-0 right-2 w-10 p-2"
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
