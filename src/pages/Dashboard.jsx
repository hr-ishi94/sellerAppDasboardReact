import React from 'react';
import StatCard from '../components/StatCard';
import SalesOverviewChart from '../components/SalesOverviewChart';
import SalesByRegionChart from '../components/SalesByRegionChart';
import RegisteredUsers from '../components/RegisteredUsers';
import IntegrationTable from '../components/IntegrationTable';

const Dashboard = ({ chosen_country }) => {
  return (
    <div className="px-4 sm:px-6 grid gap-6 mx-2 my-5 ">
      {/* Stat Cards */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Income"
          isPositive={true}
          items={chosen_country && chosen_country.stats.totalIncome}
          dollar
        />
        <StatCard
          title="Profit"
          isPositive={false}
          items={chosen_country && chosen_country.stats.profit}
          dollar
        />
        <StatCard
          title="Total Views"
          isPositive={true}
          items={chosen_country && chosen_country.stats.totalViews}
        />
        <StatCard
          title="Conversion Rate"
          isPositive={true}
          items={chosen_country && chosen_country.stats.conversionRate}
          perc
        />
      </div>

      {/* Sales Overview and Region, Registered Users, and Integration */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sales Overview Chart */}
        <div className="lg:col-span-8 bg-white p-3 rounded shadow dark:bg-indigo-950">
          <SalesOverviewChart overview={chosen_country && chosen_country.salesOverview} />
        </div>

        {/* Sales by Region */}
        <div className="lg:col-span-4 bg-white p-3 rounded shadow dark:bg-indigo-950">
          <SalesByRegionChart region={chosen_country && chosen_country.salesByRegion} />
        </div>
      </div>

      {/* Registered Users and Integration Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-5">
        {/* Registered Users */}
        <div className="lg:col-span-4 bg-white rounded shadow dark:bg-indigo-950">
          <RegisteredUsers registeredUsers={chosen_country && chosen_country.registeredUsers} />
        </div>

        {/* Integration Table */}
        <div className="lg:col-span-8 bg-white p-4 rounded shadow dark:bg-indigo-950">
          <IntegrationTable integrations={chosen_country && chosen_country.integrations} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
