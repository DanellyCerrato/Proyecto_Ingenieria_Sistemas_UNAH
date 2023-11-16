import React from 'react';

const Archivos = () => {
  return (
    <>
      { /*LISTADO DE CARPETAS*/}
      <div>
        <label
          htmlFor="first-name"
          className="block text-md font-semibold leading-6 text-gray-900"
        >
          Carpetas
        </label>
        <div style={{ cursor: 'pointer' }} className="grid grid-cols-12 gap-4 mt-10 border p-6">
          {
            ['Pracial 1', 'Pautas', 'Examnes', 'Copias', 'Matematica', 'Constancias'].map((item, index) => {
              return (
                <div key={index}>
                  <img src={'https://static.vecteezy.com/system/resources/previews/009/384/314/original/folder-icon-clipart-design-illustration-free-png.png'} />
                  <label
                    htmlFor="first-name text-center"
                    className="block text-sm font-semibold leading-6 text-gray-900 p-2"
                  >
                    {item}
                  </label>
                </div>
              )
            })
          }
        </div>
      </div>


      { /*LISTADO DE ARCHIVOS*/}
      <div>
        <label
          htmlFor="first-name"
          className="block text-md font-semibold leading-6 text-gray-900 mt-10"
        >
          Archivos
        </label>
        <div className="grid grid-cols-12 gap-4 mt-10 border p-6">
          {
            ['Tarea3.docx', 'Tarea2.docx', 'Tarea5.docx', 'informe.docx'].map((item, index) => {
              return (
                <div style={{ cursor: 'pointer' }} key={index}>
                  <img src={'https://cdn.icon-icons.com/icons2/205/PNG/512/text_x_generic_24592.png'} />
                  <label
                    htmlFor="first-name text-center"
                    className="block text-sm font-semibold leading-6 text-gray-900 p-2"
                  >
                    {item}
                  </label>
                  <button type="button" class="px-3 w-full py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Compartir</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Archivos
