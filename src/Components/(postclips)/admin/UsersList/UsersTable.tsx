"use client";

import React from "react";
import DataTable from "react-data-table-component";
import { ClipperUser } from "./UsersData";

interface UsersTableProps {
    users: ClipperUser[];
    isLoading: boolean;
    error: string | null;
    columns: any[];
}

const UsersTable = ({ users, isLoading, error, columns }: UsersTableProps) => {
    return (
        <div className="table-responsive">
            <DataTable
                columns={columns}
                data={users}
                progressPending={isLoading}
                progressComponent={<div>Loading...</div>}
                noDataComponent={error ? <div className="text-danger">{error}</div> : <div>No users found</div>}
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 25, 50, 100]}
                customStyles={{
                    rows: {
                        style: {
                            minHeight: '72px',
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default UsersTable; 