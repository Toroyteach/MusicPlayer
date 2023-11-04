import React, { useState } from 'react'

import {

    PWD_REGEX,

} from './regex'

const usePasswordValidationu = (value) => {

    const [passwordu, setInputPasswordu] = useState(null)

    const [validPasswordu, setValidPasswordu] = useState(false);

    const setPasswordu = (item) => {

        if (PWD_REGEX.test(item)) {

            setValidPasswordu(true)

            setInputPasswordu(item)

        }

    }

    return { passwordu, setPasswordu, validPasswordu }

}

export default usePasswordValidationu