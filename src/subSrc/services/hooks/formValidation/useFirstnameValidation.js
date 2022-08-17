import React, { useState} from 'react'

import {

    NAME_REGEX,

} from '../regex'

const useFirstnameValidation = (value) => {

    const [firstname, setInputFirstname] = useState(null)

    const [validFirstname, setValidFirstname] = useState(false);

    const setFirstname = (item) => {

        if (NAME_REGEX.test(item)) {

            setValidFirstname(true)

            setInputFirstname(item)

        }

    }

    return { firstname, setFirstname, validFirstname }

}

export default useFirstnameValidation