import React, { useState} from 'react'

import {

    NAME_REGEX,

} from './regex'

const useFirstnameValidationu = (value) => {

    const [firstnameu, setInputFirstnameu] = useState(null)

    const [validFirstnameu, setValidFirstnameu] = useState(false);

    const setFirstnameu = (item) => {

        if (NAME_REGEX.test(item)) {

            setValidFirstnameu(true)

            setInputFirstnameu(item)

        }

    }

    return { firstnameu, setFirstnameu, validFirstnameu }

}

export default useFirstnameValidationu