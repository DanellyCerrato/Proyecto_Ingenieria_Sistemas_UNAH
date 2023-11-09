import React from 'react'

const Main = () => {
    return (
        <div className='flex justify-center mt-10' >
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.cualhost.com/wp-content/uploads/2019/09/Para-que-Sirve-una-Pagina-Web-1.jpg" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bienvenidos</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Este es el panel administrativo donde podrás diferentes acciones</p>
                </div>
            </div>
        </div>
    )
}

export default Main
