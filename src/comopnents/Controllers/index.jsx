import React from 'react';
import { Col, Row } from 'reactstrap';
import BulkControl from './BulkControl';
import FilterController from './filter-controller';
import SearchPanel from './Search-Panel';
import ViewControl from './ViewControl';


const Controller = ({ term, handleSearch, toggleForm, handleFilter, view, changeView, clearSelected, clearCompleted, reset }) => {
    return (
        <div>
            <SearchPanel
                term={term}
                handleSearch={handleSearch}
                toggleForm={toggleForm}
            />
            <Row className="my-4">
                <Col md={{ size: 4 }}><FilterController handleFilter={handleFilter} /></Col>
                <Col md={{ size: 4 }}><ViewControl view={view} changeView={changeView} /></Col>
                <Col md={{ size: 4 }} className="d-flex">
                    <div className="ml-auto">
                        <BulkControl clearSelected={clearSelected} clearCompleted={clearCompleted} reset={reset} />
                    </div>
                </Col>
            </Row>
        </div>
    );
};


export default Controller;