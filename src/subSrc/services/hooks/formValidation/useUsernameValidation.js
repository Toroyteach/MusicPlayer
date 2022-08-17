import React, { useState} from 'react'

import {

    NAME_REGEX,

} from '../regex'

const useUsernameValidation = (value) => {

    const [username, setInputUsername] = useState(null)

    const [validUsername, setInputValidUsername] = useState(false);

    const setUsername = (item) => {

        if (NAME_REGEX.test(item)) {

            //comeback and validate username was not take

            setInputValidUsername(true)

            setInputUsername(item)

        }

    }

    return { username, setUsername, validUsername }

}

export default useUsernameValidation