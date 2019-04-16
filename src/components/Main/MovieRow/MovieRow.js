import React from 'react'
import './MovieRow.css'

const MovieRow = props => (
    <table className='MovieRow'>
        <tbody>
            <tr>
                <td>
                    <img src={props.poster} alt=""/>
                </td>
                <td>
                    <p><strong>{props.name}</strong></p>
                    <p>{props.overview}</p>
                </td>
            </tr>
        </tbody>
    </table>
);

export default MovieRow