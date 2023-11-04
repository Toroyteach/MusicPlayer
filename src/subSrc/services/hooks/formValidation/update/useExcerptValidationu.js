import React, { useState} from 'react'

import {

    EXCERPT_REGEX,

} from './regex'

const useExcerptValidationu = (value) => {

    const [excerptu, setInputExcerptu] = useState(null)

    const [validExcerptu, setValidExcerptu] = useState(false);

    const setExcerptu = (item) => {

        if (EXCERPT_REGEX.test(item)) {

            setValidExcerptu(true)

            setInputExcerptu(item)

        }

    }

    return { excerptu, setExcerptu, validExcerptu }

}

export default useExcerptValidationu