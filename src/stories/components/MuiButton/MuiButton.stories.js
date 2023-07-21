import React from 'react'
import { Button } from '@mui/material'


export default{
    title:'Mui/Button',
    component:Button
}

const Template=args=><Button {...args}/>

export const Contained=Template.bind({})
Contained.args={
    variant:'contained',
    children:'Button',
    onClick:()=>{console.log(process.env.STORYBOOK_THEME)}
}

export const Outlined=Template.bind({})
Outlined.args={
    variant:'outlined',
    children:'Button'
}

