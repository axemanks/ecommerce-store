// This is the currecy component
"use client";

import { useEffect, useState } from "react";


interface CurrencyProps {
    value: string | number;
};


// Date formatter
export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

const Currency: React.FC<CurrencyProps> = ({
    value,
}) => {
    // Hydration trick
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;


  return (
    <div className='font-semibold'>
        {formatter.format(Number(value))}
    </div>
  )
}

export default Currency