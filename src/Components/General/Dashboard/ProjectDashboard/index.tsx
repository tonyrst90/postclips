'use client'
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { DashboardTitle, ProjectDashboardTitle, ProjectTitle } from "@/Constant";
import WebsiteDesign from "./WebsiteDesign/WebsiteDesign";
import TotalRevenue from "./TotalRevenue/TotalRevenue";
import SubscriptionPlan from "./SubscriptionPlan/SubscriptionPlan";
import TodayTask from "./TodayTask/TodayTask";
import ProjectSummery from "./ProjectSummery/ProjectSummery";
import ProjectStatistics from "./ProjectStatistics/ProjectStatistics";
import MobileApp from "./MobileApp/MobileApp";
import UpcomingDeadlines from "./UpcomingDeadlines/UpcomingDeadlines";
import ProjectDeliveries from "./ProjectDeliveries/ProjectDeliveries";
import TeamMembers from "./TeamMembers/TeamMembers";

const ProjectDashboardContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={ProjectDashboardTitle} parent={DashboardTitle} title={ProjectTitle} />
            <Container fluid className="project-dashboard">
                <Row>
                    <WebsiteDesign />
                    <TotalRevenue />
                    <SubscriptionPlan />
                    <TodayTask />
                    <ProjectSummery />
                    <ProjectStatistics />
                    <MobileApp />
                    <UpcomingDeadlines />
                    <ProjectDeliveries />
                    <TeamMembers />
                </Row>
            </Container>
        </>
    )
}
export default ProjectDashboardContainer;