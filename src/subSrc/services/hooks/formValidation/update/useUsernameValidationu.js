import React, { useState} from 'react'

import {

    NAME_REGEX,

} from './regex'

const useUsernameValidationu = (value) => {

    const [usernameu, setInputUsernameu] = useState(null)

    const [validUsernameu, setInputValidUsernameu] = useState(false);

    const setUsernameu = (item) => {

        if (NAME_REGEX.test(item)) {

            //comeback and validate username was not take

            setInputValidUsernameu(true)

            setInputUsernameu(item)

        }

    }

    return { usernameu, setUsernameu, validUsernameu }

}

export default useUsernameValidationu