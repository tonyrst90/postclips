import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { RowCreateCallBackData } from '@/Types/Tables.type';
import { rowCreateCallBackSubTitle, rowCreateCallBackTableColumns, rowCreateCallBackTableData } from '@/Data/Tables/DataTables/AdvanceInit';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { RowCreateCallbackTitle } from '@/Constant';
import FilterComponent from '../Common/FilterComponent';

const RowCreateCallback = () => {
    const [filterText, setFilterText] = useState('');
    const filteredItems: RowCreateCallBackData[] = rowCreateCallBackTableData.filter(
        (item: RowCreateCallBackData) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={RowCreateCallbackTitle} span={rowCreateCallBackSubTitle} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar mt-3">
                        <DataTable data={filteredItems} columns={rowCreateCallBackTableColumns} striped={true} pagination className="display" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default RowCreateCallback;