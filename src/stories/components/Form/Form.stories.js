import React from "react";
import MuiForm from "./Form";
import Center from "../Center/Center";


export default {
    title: 'Form/Form',
    component: MuiForm,
    decorators: [story => <Center>{story()}</Center>],
    args: {
        variant: 'outlined',
        required: true,
        labels: {
            First: 'First Name'
        }
    }
}


const Template = args => <MuiForm {...args} />

export const FormA = Template.bind({})
FormA.args = {
    variant: 'outlined',
    required: true,
    labels: {
        First: 'First Name'
    }
}

