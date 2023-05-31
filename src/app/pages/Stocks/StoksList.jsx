import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const data = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    // ... more data
];

const columns = [
    { name: 'ID', selector: 'id' },
    { name: 'Name', selector: 'name' },
    { name: 'Age', selector: 'age' },
    // ... more columns
];


const FilterComponent = ({ onFilter, onClear, filterText }) => (
    <div>
        <input
            type="text"
            placeholder="Filter by name..."
            value={filterText}
            onChange={onFilter}
        />
      <button onClick={onClear}>Clear</button>
    </div>
);


function StoksList() {

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  
    const filteredItems = data.filter((item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
    );
  
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
        <div>
            <DataTable
                title={
                <FilterComponent
                    onFilter={(e) => setFilterText(e.target.value)}
                    onClear={handleClear}
                    filterText={filterText}
                />
                }
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle}
                selectableRows
                persistTableHead
            />
        </div>
    )
}

export default StoksList