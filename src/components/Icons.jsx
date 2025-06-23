import React from 'react';
import windImg from '../assets/wind.png';
import humidityImg from '../assets/humidity.png';
import visibilityImg from '../assets/visibility.png';
import sunriseImg from '../assets/sunrise.png';
import sunsetImg from '../assets/sunset.png';

const Icon = ({src, alt, className}) => (
    <img src={src} alt={alt} className={`h-8 w-8 inline-block ${className}`}/>
)

export const windIcon = () => <Icon src={windImg} alt="Wind" className='animate-icon svg-hover'/>
export const humidityIcon = () => <Icon src={humidityImg} alt="Humidity" className='powerful-pulse svg-hover'/>
export const visibilityIcon = () => <Icon src={visibilityImg} alt="Visibility" className='animate-icon svg-hover'/>
export const sunriseIcon = () => <Icon src={sunriseImg} alt="Sunrise" className='animate-icon svg-hover'/>
export const sunsetIcon = () => <Icon src={sunsetImg} alt="Sunset" className='animate-icon svg-hover'/>