// Provider for modal - will be used in layout
"use client"

import PreviewModal from '@/components/preview-modal';
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {
    // Hydration trick
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if(!hasMounted) {
        return null;
    }

  return (
    <>
    <PreviewModal />
    </>
  )
}

export default ModalProvider