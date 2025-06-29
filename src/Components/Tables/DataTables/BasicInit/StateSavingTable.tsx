import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { StateSavingTableType } from '@/Types/Tables.type';
import { stateSavingSubTitle, stateSavingTableColumns, stateSavingTableData } from '@/Data/Tables/DataTables/BasicInit';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { StateSavingTableTitle } from '@/Constant';
import FilterComponent from '../Common/FilterComponent';

const StateSavingTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredItems: StateSavingTableType[] = stateSavingTableData.filter(
        (item: StateSavingTableType) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={StateSavingTableTitle} span={stateSavingSubTitle} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar mt-3">
                        <DataTable data={filteredItems} columns={stateSavingTableColumns} striped={true} pagination />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default StateSavingTable;