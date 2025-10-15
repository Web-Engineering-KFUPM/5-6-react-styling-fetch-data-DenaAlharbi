import React from 'react'
import { Form } from 'react-bootstrap'

function SearchBar({ onSearch }) {
    const handleChange = (e) => {
        onSearch(e.target.value)
    }

    return (
        <div className="mb-4">
            <Form.Control
                type="text"
                placeholder="Search users by name..."
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar
