import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'


function Display() {

    const navigation = useNavigate()

    const locator = useLocation()
    const locatorData=locator.state

    console.log(locatorData);
  return (
    <div>
        <form >
                <label >
                    Name:
                </label>
                <input class="input-group mb-3" type="text" value={locatorData.name}/><br />
                <label >
                    Age:
                </label>
                <input class="input-group mb-3" type="text" value={locatorData.age}/><br />
                <label>
                    Email:
                </label>
                <input class="input-group mb-3" type="email"  value={locatorData.email}/><br />
                {/* <label>
                    Password:
                </label>
                <input type="password"  /><br />
                <label>
                    Confirm Password:
                </label>
                <input type="password"  /><br /> */}
                {/* <input type="submit" value="home page" /> */}

            </form>

            <button class="btn btn-success" onClick={()=>navigation(-1)} >home page</button>


        
    </div>
  )
}

export default Display