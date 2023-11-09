import { Button, Card } from 'flowbite-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const CardC = (props) => {
    return (
        <Card className="max-w-sm">
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {props.mensaje}
            </p>
            <div className='flex justify-center' >
                <NavLink to={'/crear-usuario'}>
                    <Button color='blue' >Agregar</Button>
                </NavLink>
            </div>

        </Card>
    )
}
