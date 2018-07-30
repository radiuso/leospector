import React from 'react';

const buildRows = (rows) => {
    return rows.map((row) => (
        buildRow(row)
    ));
};

const buildRow = (row) => (
    <tr
        key={row.id}
    >
        <td>{row.product_name}</td>
    </tr>
);

export default ({ rows }) => (
    <table className='table'>
        <thead>
            <tr>
                <th>Produit</th>
            </tr>
        </thead>
        <tbody>
            {buildRows(rows)}
        </tbody>
    </table>
);
