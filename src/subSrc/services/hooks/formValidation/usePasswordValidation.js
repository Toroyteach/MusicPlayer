import React, { useState } from 'react'

import {

    PWD_REGEX,

} from '../regex'

const usePasswordValidation = (value) => {

    const [password, setInputPassword] = useState(null)

    const [validPassword, setValidPassword] = useState(false);

    const setPassword = (item) => {

        if (PWD_REGEX.test(item)) {

            setValidPassword(true)

            setInputPassword(item)

        }

    }

    return { password, setPassword, validPassword }

}

export default usePasswordValidation