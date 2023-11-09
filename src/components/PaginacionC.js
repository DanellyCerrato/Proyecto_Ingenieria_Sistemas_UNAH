import { Pagination } from 'flowbite-react';
import React, { useState } from 'react'

const PaginacionC = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => setCurrentPage(page);

    return (
        <div className="flex overflow-x-auto sm:justify-center">
            <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
        </div>
    );

}

export default PaginacionC
