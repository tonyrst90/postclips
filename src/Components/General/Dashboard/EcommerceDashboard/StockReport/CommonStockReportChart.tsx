import { reportChartData } from '@/Data/General/Dashboard/EcommerceDashboard'
import { CommonDailyVisitorsChartType } from '@/Types/Dashboard.type'
import ReactApexChart from 'react-apexcharts'

const CommonStockReportChart: React.FC<CommonDailyVisitorsChartType> = ({ height }) => {
  return (
    <ReactApexChart options={reportChartData} series={reportChartData.series} height={height} type="bar" />
  )
}

export default CommonStockReportChart