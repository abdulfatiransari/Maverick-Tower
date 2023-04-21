import React from 'react'

type Props = {
    color:string
}

const profileicons = (props: Props) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1197 11.7802C11.0497 11.7702 10.9597 11.7702 10.8797 11.7802C9.11973 11.7202 7.71973 10.2802 7.71973 8.50022C7.71973 6.69022 9.17973 5.22021 10.9997 5.22021C12.8097 5.22021 14.2797 6.69022 14.2797 8.50022C14.2697 10.2702 12.8797 11.7102 11.1197 11.7702V11.7802Z" stroke={props.color}stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.7302 18.3801C15.9502 20.0101 13.5902 21.0001 10.9902 21.0001C8.38023 21.0001 6.02023 20.0101 4.24023 18.3801C4.34023 17.4401 4.94023 16.5201 6.01023 15.8001C8.75023 13.9801 13.2302 13.9801 15.9502 15.8001C17.0202 16.5201 17.6202 17.4401 17.7202 18.3801H17.7302Z" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 21C16.52 21 21 16.52 21 11C21 5.47 16.52 1 11 1C5.47 1 1 5.47 1 11C1 16.52 5.47 21 11 21Z" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

export default profileicons