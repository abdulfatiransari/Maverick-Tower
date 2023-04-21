import React from 'react'

type Props = {
color:string
}

const exploreicons = (props: Props) => {

    
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.15918 7.43018L11.9792 12.5302L20.7492 7.45018" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21.61V12.54" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.6096 12.8302V9.17023C21.6096 7.79023 20.6196 6.11023 19.4096 5.44023L14.0696 2.47023C12.9296 1.83023 11.0696 1.83023 9.92965 2.47023L4.58965 5.43023C3.37965 6.10023 2.38965 7.77023 2.38965 9.15023V14.8102C2.38965 16.1902 3.36965 17.8702 4.57965 18.5402L9.90965 21.5002C10.4796 21.8202 11.2296 21.9802 11.9796 21.9802C12.7296 21.9802 13.4796 21.8202 14.0496 21.5002" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M19.2 21.4C20.96 21.4 22.4 19.96 22.4 18.2C22.4 16.43 20.96 15 19.2 15C17.43 15 16 16.43 16 18.2C16 19.96 17.43 21.4 19.2 21.4Z" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 22L22 21" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

  )
}

export default exploreicons;