import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { AjaxSourcedColumnsInterface } from '@/Types/Tables.type';
import { ajaxSourcedColumns, javascriptSourcedData, javaScriptTableSubTitle } from '@/Data/Tables/DataTables/DataSource';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { JavascriptSourcedDataTitle } from '@/Constant';
import FilterComponent from '../Common/FilterComponent';

const JavascriptSourcedData = () => {
    const [filterText, setFilterText] = useState('');
    const filteredItems: AjaxSourcedColumnsInterface[] = javascriptSourcedData.filter(
        (item: AjaxSourcedColumnsInterface) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={JavascriptSourcedDataTitle} span={javaScriptTableSubTitle} tagClass="mb-3" />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar mt-3">
                        <DataTable data={filteredItems} columns={ajaxSourcedColumns} pagination striped className='display w-100' />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default JavascriptSourcedData;