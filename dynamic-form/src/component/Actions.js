import React from 'react'
import Age from './Types/Age';
import Checkbox from './Types/Checkbox';
import Discritpion from './Types/Discritpion';
import Input from './Types/Input';
import Radio from './Types/Radio';
import Select from './Types/Select';


function Actions({each}) {
    switch (each.type) {
        case 'text':
            return(<Input each={each}/>)

        case 'email':
            return(<Input each={each}/>)

        case 'radio':
            return(<Radio each={each}/>)

        case 'date':
            return(<Age each={each}/>)

        case 'checkbox':
            return<Checkbox each={each}/>

        case 'select':
            return<Select each={each}/>

        case 'textarea':
            return<Discritpion each={each}/>

        default:
          return null
    }
}

export default Actions