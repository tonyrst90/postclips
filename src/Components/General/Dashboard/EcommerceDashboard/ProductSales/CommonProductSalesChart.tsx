import { productSalesChartData } from '@/Data/General/Dashboard/EcommerceDashboard'
import { CommonDailyVisitorsChartType } from '@/Types/Dashboard.type'
import ReactApexChart from 'react-apexcharts'

const CommonProductSalesChart: React.FC<CommonDailyVisitorsChartType> = ({ height }) => {
  return (
    <ReactApexChart options={productSalesChartData} series={productSalesChartData.series} height={height} type="area" />
  )
}

export default CommonProductSalesChart