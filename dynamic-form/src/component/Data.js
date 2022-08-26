import { createContext, useEffect, useState } from 'react';
import Actions from './Actions'

export const context = createContext()

const data = [
    {
        "name": "firstName",
        "label": "First Name",
        "value": "",
        "type": "text",
        "placeholder": "please enter first name",
        "validate": {
            "required": true,
            "minLength": 10,
            "maxLength": 15
        }
    },
    {
        "name": "lastName",
        "label": "Last Name",
        "value": "",
        "type": "text",
        "placeholder": "please enter last name",
        "validate": {
            "required": false,
            "minLength": 10,
            "maxLength": 15
        }
    },
    {
        "name": "email",
        "label": "Email",
        "value": "",
        "type": "email",
        "placeholder": "please enter email",
        "validate": {
            "required": true,
            "minLength": 10,
            "maxLength": 20
        }
    },
    {
        "name": "gender",
        "label": "Gender",
        "value": "",
        "enum": [
            "male",
            "female"

        ],
        "type": "radio",
        "validate": {
            "required": true
        }
    },
    {
        "name": "age",
        "label": "Age",
        "value": "",
        "type": "date",
        "validate": {
            "required": true,
            "min": "1970-01-01",
            "max": "2002-12-31"
        }
    },
    {
        "name": "skills",
        "label": "Skills",
        "value": "",
        "enum": [
            "Html",
            "Css",
            "JavaScript",
            "PHP",
            "Angular",
            "React",
            "Sql"
        ],
        "type": "checkbox",
        "validate": {
            "required": true
        }
    },
    {
        "name": "country",
        "label": "Country",
        "value": "",
        "enum": [
            "India",
            "Sri Lanka",
            "Pakisthan",
            "Bangladesh",
            "China",
            "Nepal",
            "Bhutan"
        ],
        "type": "select",
        "validate": {
            "required": true
        }
    },
    {
        "name": "description",
        "label": "Descritpion",
        "value": "",
        "type": "textarea",
        "validate": {
            "required": false,
            "maxLength": 50
        }
    }
]

const arrayData = JSON.parse(JSON.stringify(data))

function Data() {

    const [element, setElement] = useState({})
    const [update, setUpdate] = useState(JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : [])

    console.log(arrayData);

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(update))
    }, [update])

    const submitHandlar = (e) => {
        e.preventDefault();
        console.log("hello");
        setUpdate([...update, element])
    }

    const tableData = update.map((each) => {
        return (
            <tr>
                <td>{each.firstName}</td>
                <td>{each.lastName}</td>
                <td>{each.email}</td>
                <td>{each.gender}</td>
                <td>{each.age}</td>
                <td>{each.skills}</td>
                <th>{each.country}</th>
                <th>{each.description}</th>

            </tr>
        )
    })
    return (
        <div>
            <context.Provider value={{ element, setElement }}>
                <form onSubmit={submitHandlar}>
                    {arrayData.map((each, i) => <Actions key={i} each={each} />)}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </context.Provider>
            {<table class="table table-striped">

                <tr>
                    <th>firstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Skills</th>
                    <th>Country</th>
                    <th>Discritpion</th>
                </tr>


                {tableData}

            </table>}
        </div>

    )
}

export default Data