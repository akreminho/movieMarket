import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <header>
                <input type="checkbox" name="" id="chk1" />
                <div ><h1 className='logos'>SolMovies</h1>
                </div>

                <ul className='nav_list'>
                    <li>
                        <div class="container">

                            <select name="" id="cusSelectbox">
                                <option className='select_items' value="Select">Home</option>
                                <option className='items' value="Blog">Blog</option>
                                <option className='items' value="Join Us">Join Us</option>
                                <option className='items' value="Publicity">PUB with Us</option>
                            </select>

                        </div>
                    </li>
                    <li>
                        <div class="container">

                            <select name="" id="cusSelectbox">
                                <option className='select_items' value="Select">Movies</option>
                                <option className='items' value="Ar">Arabic Movies</option>
                                <option className='items' value="Us">American Movies</option>
                                <option className='items' value="Kr">Korean Movies</option>
                                <option className='items' value="Tk">Turkich Movies</option>
                            </select>

                        </div>
                    </li>
                    <li>
                        <div class="container">

                            <select name="" id="cusSelectbox">
                                <option className='items' value="Select">Series</option>
                                <option className='items' value="Ar">Arabic Series</option>
                                <option className='items' value="Us">American series</option>
                                <option className='items' value="Kr">Korean series</option>
                                <option className='items' value="Tk">Turkich series</option>
                            </select>

                        </div>
                    </li>
                    <li>
                        <div class="container">

                            <select name="" id="cusSelectbox">
                                <option className='items' value="Select">Others</option>
                                <option className='items' value="Tvs">Tv Programs</option>
                                <option className='items' value="Wwe">WWE</option>
                                <option className='items' value="Rate">Most Rated Movies</option>
                            </select>

                        </div>


                    </li>
                    <li>
                        <h1 className="rating">Rating</h1>


                    </li>

                </ul>
                <div class="search-box">
                    <form className='form'>
                        <input type="text" name="search" id="srch" placeholder="Movie title" />
                        <button className="search_btn" type="submit">Search</button>
                    </form>
                </div>
                <div class="menu">
                    <label for="chk1">
                        <i class="fa fa-bars"></i>
                    </label>
                </div>
            </header>
        </div>
    )
}

export default Navbar
