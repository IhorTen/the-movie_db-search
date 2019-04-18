import React from 'react'
import logo from '../../tmdb-search-logo.svg'
import './Header.css'

const Header = (props) => {
        return (
            <div  className='Header'>
                <div className='HeaderBody'>
                    <img src={logo} width='100' alt="logo"/>
                    <h1 className='HeaderTitle'> The Movie DB Search</h1>
                </div>
                <input
                    className='HeaderInputSearch'
                    type='text'
                    name='search'
                    placeholder='Type the name of movie or choose from the genres below...'
                    onChange={props.onChange}
                /> <br/>
                <select
                    id='GenreList'
                    onChange={props.genreSearch}
                >
                    <option style={{color:'#6e6c6c'}}> Choose genre...</option>
                    {props.genres.map((genre, index) => {
                        return(
                            <option
                                className='scrollList'
                                value={genre.id}
                                key={index}
                            >{genre.name}
                            </option>
                        )
                    })}
                </select>
            </div>
        )
};

export default Header
