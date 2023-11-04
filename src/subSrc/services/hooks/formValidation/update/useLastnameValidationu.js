import React, { useState} from 'react'

import {

    NAME_REGEX,

} from './regex'

const useLastnameValidationu = (value) => {

    const [lastnameu, setInputLastnameu] = useState(null)

    const [validLastnameu, setInputValidLastnameu] = useState(false);

    const setLastnameu = (item) => {

        if (NAME_REGEX.test(item)) {

            setInputValidLastnameu(true)

            setInputLastnameu(item)

        }

    }

    return { lastnameu, setLastnameu, validLastnameu }

}

export default useLastnameValidationu