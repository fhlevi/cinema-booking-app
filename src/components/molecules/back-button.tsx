import { ArrowLeft } from 'lucide-react'
import React from 'react'

export const BackButton = () => {
    const handleBack = () => {
        window.history.back();
    }

    return (
        <button onClick={handleBack} className="cursor-pointer">
            <ArrowLeft />
        </button>
    )
}
