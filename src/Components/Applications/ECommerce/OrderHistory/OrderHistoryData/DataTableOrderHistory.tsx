import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { OrdersHistory } from "@/Constant";
import DataTable from "react-data-table-component";
import { useMemo, useState } from "react";
import { orderHistoryData, orderHistoryDataColumn } from "@/Data/Applications/ECommerce/OrderHistory";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const DataTableOrderHistory = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems = orderHistoryData.filter((item) => { return Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())) });

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-1_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{'Search'}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={OrdersHistory} headClass="pb-0" />
        <CardBody>
          <div className="order-history table-responsive">
            <DataTable data={filteredItems} columns={orderHistoryDataColumn} className="dataTables_wrapper no-footer custom-scrollbar" highlightOnHover noHeader pagination paginationServer subHeader subHeaderComponent={subHeaderComponentMemo} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DataTableOrderHistory;