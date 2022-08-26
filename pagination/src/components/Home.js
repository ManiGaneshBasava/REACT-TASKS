import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PageNumbres from './PageNumbres'

function Home() {

  const [data,setData] = useState([])
  const [page,setPage] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res=> {setData(res.data);setPage(res.data.slice(0,30))})
  },[])

  const pageNumber =(pagenumber)=> {
    setPage(data.slice((pagenumber*30)-30,pagenumber*30))
  }

  console.log(data);


  const tableData=page.map(each=>{
    return(
      <tr>
        <td>{each.id}</td>
        <td>{each.postId}</td>
        <td>{each.name}</td>
        <td>{each.email}</td>
      </tr>
    )
  })



  return (
    <div>
      {
        <table class="table">
          <thead>
          <tr>
            <th>Id</th>
            <th>postId</th>
            <th>name</th>
            <th>email</th>
          </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </table>
      }

      <PageNumbres items={data} pageNumber={pageNumber}/>
    </div>
  )
}

export default Home