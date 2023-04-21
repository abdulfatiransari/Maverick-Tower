import React from 'react'

type Props = {
    color: string
}

const feedicons = (props: Props) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 9.72021C8.87 9.72021 14.25 15.0902 14.25 21.7202" stroke={props.color}stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.25 21.2502V21.2492C7.23 18.7592 5.23 16.7492 2.75 16.7192V21.2492L7.25 21.2502Z" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.25 2.25C13.01 2.25 21.75 10.98 21.75 21.75" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
}

export default feedicons