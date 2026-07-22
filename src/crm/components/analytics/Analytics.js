import React from 'react';
import Budges from './badges/Badges';
import ClientsTable from '../clients/Clients';
import SubscribeUsers from '../clients/SubscribeUser';
import JobApplications from '../../../components/CareerpageElements/Positions/JobApplications';

const Analytics = () => {
    return (
        <>
           <Budges />
           <ClientsTable />
           <SubscribeUsers />
           <JobApplications />
        </>
    )
}
export default Analytics;