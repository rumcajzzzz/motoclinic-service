'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface WindowWithOdometer extends Window {
  Odometer: new (options: {
    el: HTMLElement;
    value: number;
    format?: string;
    theme?: string;
  }) => {
    update: (value: number) => void;
  };
}

interface HTMLElementWithOdometer extends HTMLElement {
  _odometerInitialized?: boolean;
}




const OdometerLoader = () => {
  const pathname = usePathname();

  useEffect(() => {
    const win = window as unknown as WindowWithOdometer;
    const Odometer = win.Odometer;
    if (!Odometer) return;
  
    const elements = document.querySelectorAll<HTMLElementWithOdometer>('.odometer[data-value]');
    if (elements.length === 0) return;
  
    elements.forEach(el => {
      if (el._odometerInitialized) return;
      el._odometerInitialized = true;
  
      const finalValue = Number(el.getAttribute('data-value'));
      el.innerHTML = '0';
  
      const odometer = new Odometer({
        el,
        value: 0,
        format: '(,ddd)',
        theme: 'default',
      });
  
      setTimeout(() => {
        odometer.update(finalValue);
      }, 500);
    });
  }, [pathname]);
  
  

  return null;
};

export default OdometerLoader;
