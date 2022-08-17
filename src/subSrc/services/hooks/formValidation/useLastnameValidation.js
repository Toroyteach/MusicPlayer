import React, { useState} from 'react'

import {

    NAME_REGEX,

} from '../regex'

const useLastnameValidation = (value) => {

    const [lastname, setInputLastname] = useState(null)

    const [validLastname, setInputValidLastname] = useState(false);

    const setLastname = (item) => {

        if (NAME_REGEX.test(item)) {

            setInputValidLastname(true)

            setInputLastname(item)

        }

    }

    return { lastname, setLastname, validLastname }

}

export default useLastnameValidation