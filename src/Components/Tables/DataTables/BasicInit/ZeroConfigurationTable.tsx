import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { ZeroConfigurationTableType } from '@/Types/Tables.type';
import { zeroConfigurationSubTitle, zeroConfigurationTableColumns, zeroConfigurationTableData } from '@/Data/Tables/DataTables/BasicInit';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ZeroConfigurationTitle } from '@/Constant';
import FilterComponent from '../Common/FilterComponent';

const ZeroConfigurationTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredItems: ZeroConfigurationTableType[] = zeroConfigurationTableData.filter(
        (item: ZeroConfigurationTableType) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={ZeroConfigurationTitle} span={zeroConfigurationSubTitle} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar mt-3">
                        <DataTable data={filteredItems} columns={zeroConfigurationTableColumns} pagination highlightOnHover striped />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ZeroConfigurationTable;