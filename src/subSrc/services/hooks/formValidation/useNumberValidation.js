import React, { useState} from 'react'

import {

    PHONE_REGEX,

} from '../regex'

const useNumberValidation = (value) => {

    const [number, setInputNumber] = useState(null)

    const [validNumber, setValidNumber] = useState(false);

    const setNumber = (item) => {

        if (PHONE_REGEX.test(item)) {

            setValidNumber(true)

            setInputNumber(item)

        }

    }

    return { number, setNumber, validNumber }

}

export default useNumberValidation