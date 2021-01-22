import React from 'react';
import { Button, Input } from 'reactstrap';

const SearchPanel = ({ term, handleSearch, toggleForm }) => {
    return (
        <div className="d-flex">
            <Input
                placeholder="inter Search Term"
                className="mr-3"
                value={term}
                onChange={e => handleSearch(e.target.value)}
            />
            <Button color="success" onClick={toggleForm}>
                New
            </Button>
        </div>
    );
};


export default SearchPanel;