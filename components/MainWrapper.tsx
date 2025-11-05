import React from "react";

type MainWrapperProps = {
  children: React.ReactNode
}


export default function MainWrapper({children}: MainWrapperProps) {
  return (
    <div className="flex justify-center">
      <div className="w-[100%]">
        <div className="main flex flex-col items-center justify-items-center min-h-screen">
          {children}
        </div>
      </div>
    </div>
  )
}