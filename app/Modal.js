import { useEffect } from 'react';

const Modal = ({ showModal, setShowModal, children }) => {
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === 'Escape' && setShowModal(false);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
  }, [setShowModal]);

  if (!showModal) return null;

  return (
    <div className="absolute inset-0  z-50" onClick={() => setShowModal(false)}>
      <div className="relative bg-white p-6 rounded-lg shadow-lg" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
