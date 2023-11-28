import React from 'react'
import { Oval } from 'react-loader-spinner'

const LoadingOval = () => {
  return (
    <div className="spinner-container overlaySpinner">
            <Oval
              height={80}
              width={80}
              color="#FF821C"
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#ff821ca3"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
  )
}

export default LoadingOval