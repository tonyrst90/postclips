import { campaignColumns, Campaign } from "./CampaignData";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "@/Components/(postclips)/general/FilterComponent";

interface CampaignTableProps {
  campaigns: Campaign[];
  isLoading?: boolean;
  error?: string | null;
}

const CampaignTable = ({ campaigns, isLoading, error }: CampaignTableProps) => {
  const [filterText, setFilterText] = useState("");
  
  // Ensure campaigns is an array before filtering
  const filteredItems = Array.isArray(campaigns) 
    ? campaigns.filter((item: Campaign) => {
        return (
          item.title?.toLowerCase().includes(filterText.toLowerCase()) ||
          item.status?.toLowerCase().includes(filterText.toLowerCase())
        );
      })
    : [];

  if (error) {
    return <div className="text-center text-danger p-3">{error}</div>;
  }

  return (
    <div className="list-campaigns">
      <FilterComponent
        onFilter={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterText(e.target.value)
        }
        filterText={filterText}
      />
      <DataTable
        className="custom-scrollbar"
        data={filteredItems}
        columns={campaignColumns}
        pagination
        responsive
        highlightOnHover
        pointerOnHover
        progressPending={isLoading}
        progressComponent={<div className="text-center p-3">Loading campaigns...</div>}
        noDataComponent={<div className="text-center p-3">No campaigns found</div>}
      />
    </div>
  );
};

export default CampaignTable;
