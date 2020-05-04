import React from 'react'
import { Card } from '../card-component/card-component.jsx'
import './styles.css'

export const CardList= (props) => {
    return (
    <div className='card-list'>
        { props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))
        }
    </div>
    )
}