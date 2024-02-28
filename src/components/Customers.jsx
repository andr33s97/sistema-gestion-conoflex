import React, { useState } from 'react'
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import data from '../MOCK_DATA.json'

function Customers() {
    const columns = [
        {
            header: 'ID',
            accessorKey: 'customer_id'
        },
        {
            header: 'Nombre',
            accessorKey: 'name'
        },
        {
            header: 'Ubicación',
            accessorKey: 'location'
        },
        {
            header: 'E-Mail',
            accessorKey: 'email'
        },
        {
            header: 'CUIT',
            accessorKey: 'cuit'
        }
    ]

    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setFiltering
    })

    return (
        <Container>
            <h3>Filtrar</h3>
            <input
                type="text"
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}>

            </input>
            <Table striped bordered hover>
                <thead>
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header => (
                                        <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                                            {
                                                flexRender(header.column.columnDef.header, header.getContext())}
                                            {
                                                { 'asc': "⬆️", 'desc': "⬇️" }[header.column.getIsSorted() ??
                                                null]
                                            }

                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>

                </tfoot>
            </Table>
            <button onClick={() => table.setPageIndex(0)}>
                Primera pagina
            </button>
            <button onClick={() => table.nextPage()}>
                Pagina siguiente
            </button>
            <button onClick={() => table.previousPage()}>
                Pagina anterior
            </button>
            <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                Ultima pagina
            </button>
        </Container>
    )
}

export default Customers