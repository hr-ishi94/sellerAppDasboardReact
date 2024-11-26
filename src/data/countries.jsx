import { setCountries, setError, setLoading } from "../redux/countrySlice";
import stripe from '../assets/icons/stripe.png'
import zapier from '../assets/icons/zapier.png'
import shopify from '../assets/icons/shopify.png'
import usaFlag from '../assets/images/usaFlag.png'
import germanyFlag from '../assets/images/germanyFlag.png'
import canadaFlag from '../assets/images/canadaFlag.png'
import indiaFlag from '../assets/images/indiaFlag.png'

const staticData = {
  countries: [
    {
      country: "USA",
      flagUrl:usaFlag,
      stats: {
        totalIncome: { value: "33,328.12", percentageChange: 12.24 },
        profit: { value: "8583.09", percentageChange: 2.63 },
        totalViews: { value: "52,234.32", percentageChange: 1.46 },
        conversionRate: { value: "6.12", percentageChange: 8.75 },
      },
      salesOverview: {
        totalRevenue: 50345.67,
        totalTarget: 70321.45,
        trends: [
          { month: "Apr 2023", revenue: 15000, target: 20000 },
          { month: "May 2023", revenue: 16000, target: 21000 },
          { month: "Jun 2023", revenue: 15500, target: 22000 },
          { month: "Jul 2023", revenue: 16500, target: 23000 },
          { month: "Aug 2023", revenue: 17000, target: 24000 },
          { month: "Sep 2023", revenue: 15800, target: 25000 },
          { month: "Oct 2023", revenue: 14500, target: 26000 },
          { month: "Nov 2023", revenue: 15000, target: 27000 },
          { month: "Dec 2023", revenue: 15780.21, target: 28000 },
          { month: "Jan 2024", revenue: 18000, target: 30000 },
        ],
      },
      salesByRegion: [{
        region: 'Asia', sales: 2201},{
        region: 'Europe', sales: 2865},{
        region: 'Pacific', sales: 2475},{
        region: 'Americans', sales: 1762},{
        region: 'Middle East', sales: 1749},{
        region: 'Africa', sales: 1591},
      ],
      registeredUsers: { total: 3201, premium: 2804, basic: 397 },
      integrations: [
        { application: "Stripe", type: "Finance", rate: 33, profit: 10998.28, logo: stripe },
        { application: "Zapier", type: "CRM", rate: 72, profit: 8998.59, logo: zapier },
        { application: "Shopify", type: "Marketplace", rate: 40, profit: 13331.24, logo:shopify },
      ],
    },
    {
      country: "Germany",
      flagUrl:germanyFlag,
      stats: {
        totalIncome: { value: "27,300.42", percentageChange: 5.42 },
        profit: { value: "7800.34", percentageChange: 1.20 },
        totalViews: { value: "47,200.89", percentageChange: 2.11 },
        conversionRate: { value: "5.89", percentageChange: 3.60 },
      },
      salesOverview: {
        totalRevenue: 40321.12,
        totalTarget: 60000.00,
        trends: [
          { month: "Apr 2023", revenue: 12000, target: 18000 },
          { month: "May 2023", revenue: 14000, target: 20000 },
          { month: "Jun 2023", revenue: 13000, target: 22000 },
          { month: "Jul 2023", revenue: 13500, target: 23000 },
          { month: "Aug 2023", revenue: 14500, target: 24000 },
          { month: "Sep 2023", revenue: 13800, target: 25000 },
          { month: "Oct 2023", revenue: 12800, target: 26000 },
          { month: "Nov 2023", revenue: 13500, target: 27000 },
          { month: "Dec 2023", revenue: 14500, target: 28000 },
          { month: "Jan 2024", revenue: 15000, target: 29000 },
        ],
      },
      salesByRegion: [{
        region: 'Asia', sales: 1800},{
        region: 'Europe', sales: 3400},{
        region: 'Pacific', sales: 2100},{
        region: 'Americans', sales: 1500},{
        region: 'Middle East', sales: 1200},{
        region: 'Africa', sales: 1000,
      }],
      registeredUsers: { total: 2900, premium: 2500, basic: 400 },
      integrations: [
        { application: "Stripe", type: "Finance", rate: 30, profit: 10000.00, logo: stripe },
        { application: "Zapier", type: "CRM", rate: 25, profit: 8000.00, logo: zapier },
        { application: "Shopify", type: "Marketplace", rate: 75, profit: 12000.00, logo: shopify },
      ],
    },
    {
      country: "India",
      flagUrl:indiaFlag,
      stats: {
        totalIncome: { value: '19,328.50', percentageChange: 8.14 },
        profit: { value: '6532.89', percentageChange: 4.23 },
        totalViews: { value: '65,200.00', percentageChange: 6.12 },
        conversionRate: { value: '7.21', percentageChange: 10.20 },
      },
      salesOverview: {
        totalRevenue: 30521.67,
        totalTarget: 45000.00,
        trends: [
          { month: "Apr 2023", revenue: 10000, target: 15000 },
          { month: "May 2023", revenue: 11000, target: 16000 },
          { month: "Jun 2023", revenue: 11500, target: 17000 },
          { month: "Jul 2023", revenue: 12000, target: 18000 },
          { month: "Aug 2023", revenue: 12500, target: 19000 },
          { month: "Sep 2023", revenue: 11800, target: 20000 },
          { month: "Oct 2023", revenue: 12800, target: 21000 },
          { month: "Nov 2023", revenue: 13500, target: 22000 },
          { month: "Dec 2023", revenue: 14500, target: 23000 },
          { month: "Jan 2024", revenue: 15000, target: 24000 },
        ],
      },
      salesByRegion: [{
        region: 'Asia', sales: 3200},{
        region: 'Europe', sales: 2500},{
        region: 'Pacific', sales: 1800},{
        region: 'Americans', sales: 1400},{
        region: 'Middle East', sales: 2100},{
        region: 'Africa', sales: 1900}
      ],
      registeredUsers: { total: 3100, premium: 2600, basic: 500 },
      integrations: [
        { application: "Stripe", type: "Finance", rate: 35, profit: 9000.00, logo: stripe },
        { application: "Zapier", type: "CRM", rate: 30, profit: 7500.00, logo: zapier },
        { application: "Shopify", type: "Marketplace", rate: 56, profit: 10000.00, logo: shopify },
      ],
    },



    {
      country: "Canada",
      flagUrl:canadaFlag,
      stats: {
        totalIncome: { value: '25,328.90', percentageChange: 10.50 },
        profit: { value: '7832.10', percentageChange: 5.00 },
        totalViews: { value: '48,200.00', percentageChange: 4.23 },
        conversionRate: { value: '6.50', percentageChange: 7.50 },
      },
      salesOverview: {
        totalRevenue: 40345.67,
        totalTarget: 55000.00,
        trends: [
          { month: "Apr 2023", revenue: 14000, target: 20000 },
          { month: "May 2023", revenue: 15000, target: 21000 },
          { month: "Jun 2023", revenue: 15500, target: 16000 },
          { month: "Jul 2023", revenue: 16000, target: 23000 },
          { month: "Aug 2023", revenue: 21000, target: 24000 },
          { month: "Sep 2023", revenue: 23500, target: 22000 },
          { month: "Oct 2023", revenue: 15000, target: 26000 },
          { month: "Nov 2023", revenue: 15500, target: 22000 },
          { month: "Dec 2023", revenue: 15780.21, target: 28000 },
          { month: "Jan 2024", revenue: 18000, target: 30000 },
        ],
      },
      salesByRegion: [{
        region: 'Asia', sales: 2000},{
        region: 'Europe', sales: 2700},{
        region: 'Pacific', sales: 2500},{
        region: 'Americans', sales: 1600},{
        region: 'Middle East', sales: 1800},{
        region: 'Africa', sales: 1700
      }],
      registeredUsers: { total: 3000, premium: 2700, basic: 300 },
      integrations: [
        { application: "Stripe", type: "Finance", rate: 32, profit: 10000.00, logo: stripe },
        { application: "Zapier", type: "CRM", rate: 18, profit: 8500.00, logo: zapier },
        { application: "Shopify", type: "Marketplace", rate: 60, profit: 12000.00, logo: shopify },
      ],
    },
  ],
};


export const initializeDashboardData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setCountries(staticData.countries));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError('Failed to load data.'));
  }
};

