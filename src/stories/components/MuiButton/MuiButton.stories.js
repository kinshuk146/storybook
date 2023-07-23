import React from 'react'
import { Button } from '@mui/material'
import ArgsJson from '../../../ArgsJson'


export default{
    title:'Mui/Button',
    component:Button
}

const Template=args=><Button {...args}/>

export const Contained=Template.bind({})
Contained.args=ArgsJson

export const Outlined=Template.bind({})
Outlined.args={
    variant:'outlined',
    children:'Button'
}



