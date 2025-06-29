import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { AjaxSourcedColumnsInterface } from '@/Types/Tables.type';
import { ajaxSourcedColumns, ajaxSourcedData, ajaxTableSubTitle } from '@/Data/Tables/DataTables/DataSource';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { AjaxSourcedDataTitle } from '@/Constant';
import FilterComponent from '../Common/FilterComponent';

const AjaxSourcedData = () => {
    const [filterText, setFilterText] = useState('');
    const filteredItems: AjaxSourcedColumnsInterface[] = ajaxSourcedData.filter(
        (item: AjaxSourcedColumnsInterface) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={AjaxSourcedDataTitle} span={ajaxTableSubTitle} tagClass="mb-3" />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar mt-3">
                        <DataTable className='display' data={filteredItems} columns={ajaxSourcedColumns} pagination striped />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default AjaxSourcedData;