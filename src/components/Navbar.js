import React from 'react'
import { Link } from 'react-router-dom'
import CountryList from '../country.json'
const Navbar =(props)=> {
    const Country=CountryList.data
    let changeCountry = () => {
        let p = document.getElementById('CountryList').value;
        props.handleCo(p);
    }
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark  bg-dark fixed-top">
                    <Link className="navbar-brand m-2 fs-3" to="/">NewsHunt</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                            {/* <li className="nav-item "> */}
                            <select name="Country" id="CountryList" onChange={changeCountry} style={{
                                marginLeft: "50px",
                                textAlign: "center",
                                borderRadius: "10px",
                                backgroundColor: "ivory"
                            }}>
                                <option value="0">Select country</option>
                                {
                                    Country.map((element) => {
                                        return (<option value={element.short}>{element.Country}</option>)

                                    })
                                }
                            </select>
                            {/* </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    
}
export default Navbar;