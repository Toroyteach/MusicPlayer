import React, { useState} from 'react'

import {

    PHONE_REGEX,

} from './regex'

const useNumberValidationu = (value) => {

    const [numberu, setInputNumberu] = useState(null)

    const [validNumberu, setValidNumberu] = useState(false);

    const setNumberu = (item) => {

        if (PHONE_REGEX.test(item)) {

            setValidNumberu(true)

            setInputNumberu(item)

        }

    }

    return { numberu, setNumberu, validNumberu }

}

export default useNumberValidationu