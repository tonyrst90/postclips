import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { ServerSideProcessingInterface } from '@/Types/Tables.type';
import { serverSideData, serverSideProcessingColumns, serverSideProcessingSubTitle } from '@/Data/Tables/DataTables/DataSource';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ServerSideProcessingTitle } from '@/Constant';
import FilterComponent from '../Common/FilterComponent';

const ServerSideProcessing = () => {
    const [filterText, setFilterText] = useState('');
    const filteredItems: ServerSideProcessingInterface[] = serverSideData.filter(
        (item: ServerSideProcessingInterface) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={ServerSideProcessingTitle} span={serverSideProcessingSubTitle} tagClass="mb-3" />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar mt-3">
                        <DataTable className='display' data={filteredItems} columns={serverSideProcessingColumns} pagination striped />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ServerSideProcessing;