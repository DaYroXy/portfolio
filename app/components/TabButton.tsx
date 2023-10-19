'use client'
import React, { MouseEventHandler, ReactNode } from 'react'

interface ITabButton {
    active: boolean,
    selectTab: MouseEventHandler,
    children: ReactNode
}

const TabButton = ({ active, selectTab, children }: ITabButton) => {

    const buttonClasses = active ? 'text-white border-b-2 border-orange-500' : 'text-[#ADB7BE] hover:text-white'

    return (
        <span onClick={selectTab}>
            <p className={`cursor-pointer mr-3 pb-1 font-semibold ${buttonClasses}`}>
                {children}
            </p>
        </span>
    )
}

export default TabButton