import React, { useState} from 'react'

import {

    EMAIL_REGEX,

} from './regex'

const useEmailValidationu = (value) => {

    const [emailu, setInputEmailu] = useState(null)

    const [validEmailu, setValidEmailu] = useState(false);

    const setEmailu = (item) => {

        if (EMAIL_REGEX.test(item)) {

            setValidEmailu(true)

            setInputEmailu(item)

        }

    }

    return { emailu, setEmailu, validEmailu }

}

export default useEmailValidationu;