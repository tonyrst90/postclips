"use client";

import React from "react";
import UsersTable from "./UsersTable";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/Hooks/useAdmin";
import { useUserConfigModal, userColumns } from "./UsersData";
import UserConfigModal from "./UserConfigModal";

const Users = () => {
    const { clippers, loading, error, refetchClippers } = useAdmin();
    const { selectedUserId, isModalOpen, openModal, closeModal } = useUserConfigModal();

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 className="mb-4">Users</h1>
                    <UsersTable
                        users={clippers}
                        isLoading={loading}
                        error={error ? (typeof error === 'string' ? error : (error as { message?: string })?.message || 'An error occurred') : null}
                        columns={userColumns(openModal)}
                    />
                </div>
            </div>
            {selectedUserId && (
                <UserConfigModal
                    userId={selectedUserId}
                    isOpen={isModalOpen}
                    toggle={closeModal}
                />
            )}
        </div>
    );
};

export default Users; 