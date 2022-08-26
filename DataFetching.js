import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res)
                setPost(res.data)
            })
            .catch((err) => { console.log(err.message); })
    }, [])

    const tableData = post.map((item) => {
        return (<tr>
            <td>{item.id}</td>
            <td>{item.userId}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
        </tr>)
    })

    return (
        <div>
            {

                <table border='1'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>user id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default DataFetching