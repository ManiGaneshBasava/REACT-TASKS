import React, { useState, useEffect } from 'react'

const PageNumbres = ({ items, pageNumber }) => {

  const [pgNumber, setPgnumber] = useState(1)

  const numbers = []
  for (let i = 1; i < Math.ceil(items.length / 30) + 1; i++) {
    numbers.push(i)
  }


  // const count = Math.ceil(items.length / 30) - 1
  // console.log(count);



  const nextHandelar = () => {
    console.log(numbers);
    if (pgNumber < 17) {
      setPgnumber(pgNumber + 1)
    }
    console.log(pgNumber);

  }


  const preHandelar = () => {
    if (pgNumber > 1) {
      setPgnumber((pgNumber)=>pgNumber - 1)
    }
    console.log(pgNumber);
  }
  useEffect(() => { pageNumber(pgNumber) },[pgNumber])

  return (
    <div>
      {/* <center>
        {numbers.map(each => <div key={each} type="button" class="btn btn-success" onClick={() => pageNumber(each)}>
          {each}</div>)}
      </center> */}


      <center>
        <button class="btn btn-success" onClick={preHandelar}>Pre</button>
        {pgNumber}/{numbers.length}
        <button class="btn btn-success" onClick={nextHandelar}>Next</button>
      </center>


    </div>
  )
}

export default PageNumbres