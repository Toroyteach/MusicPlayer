import React, { useState} from 'react'

import {

    EXCERPT_REGEX,

} from './regex'

const useExcerptValidation = (value) => {

    const [excerpt, setInputExcerpt] = useState(null)

    const [validExcerpt, setValidExcerpt] = useState(false);

    const setExcerpt = (item) => {

        if (EXCERPT_REGEX.test(item)) {

            setValidExcerpt(true)

            setInputExcerpt(item)

        }

    }

    return { excerpt, setExcerpt, validExcerpt }

}

export default useExcerptValidation