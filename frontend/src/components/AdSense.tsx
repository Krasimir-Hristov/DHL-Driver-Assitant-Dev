import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdSense: React.FC = () => {
  useEffect(() => {
    try {
      // Зареди рекламата след рендирането на компонента
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense loading failed', e);
    }
  }, []);

  return (
    <div>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-2125980533368429'
        data-ad-slot='3298585010'
        data-ad-format='auto'
        data-full-width-responsive='true'
      ></ins>
    </div>
  );
};

export default AdSense;
