import React, { useState} from 'react'

import {

    EMAIL_REGEX,

} from './regex'

const useEmailValidation = (value) => {

    const [email, setInputEmail] = useState(null)

    const [validEmail, setValidEmail] = useState(false);

    const setEmail = (item) => {

        if (EMAIL_REGEX.test(item)) {

            setValidEmail(true)

            setInputEmail(item)

        }

    }

    return { email, setEmail, validEmail }

}

export default useEmailValidation;