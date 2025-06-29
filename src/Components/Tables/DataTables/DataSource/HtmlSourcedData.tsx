import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { htmlColumns, htmlColumnsTableData, htmlTableSubTitle } from '@/Data/Tables/DataTables/DataSource';
import { HtmlColumnsInterface } from '@/Types/Tables.type';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { HtmlTableTitle } from '@/Constant';
import FilterComponent from '../Common/FilterComponent';

const HtmlSourcedData = () => {
    const [filterText, setFilterText] = useState('');
    const filteredItems: HtmlColumnsInterface[] = htmlColumnsTableData.filter(
        (item: HtmlColumnsInterface) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={HtmlTableTitle} span={htmlTableSubTitle} tagClass="mb-3" />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar mt-3">
                        <DataTable className='display' data={filteredItems} columns={htmlColumns} striped={true} pagination />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default HtmlSourcedData;