import React from 'react'
import "./../HealthPackage.css"
import HealthWellnessMain from './HealthWellnessMain';
import HealthWellnessHead from './HealthWellnessHead';

const HealthPackageWellness = () => {
  return (
    <div className='healthWellness'>
      <HealthWellnessHead/>
      <HealthWellnessMain/>
    </div>
  )
}

export default HealthPackageWellness
