

const template_ref = {
    name: {
        label: 'Name',
        controlType: 'text',
        placeholder: 'Enter your name',
        required: true
    },
    mobile: {
        label: 'Mobile',
        controlType: 'text',
        placeholder: '+91 XXXXXXXXXX',
        required: true,
        pattern: /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/g
    },
    email: {
        label: 'Email Id',
        controlType: 'email',
        emailRequired: true,
        placeholder: 'Enter your email ID',
        required: true
    },
    gender: {
        label: 'Gender',
        controlType: 'select',
        defaultValue: 'Male',
        options: ['Male', 'Female']
    },
    dateTimePicker: {
        label: 'Select Date & Time',
        controlType: 'dateTimePicker',
        defaultValue: new Date(),
        placeholder: 'DD/MM/YYYY',
        required: true
    },
    password: {
        lalel: 'Password',
        controlType: 'text',
        required: true
    }
}

const segment = {
    userForm: {
        fields: [
            'name',
            'mobile',
            'gender',
            'email',
            'dateTimePicker'
        ]
    }
}

export { segment, template_ref }

