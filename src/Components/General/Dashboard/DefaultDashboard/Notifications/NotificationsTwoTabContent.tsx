import { ImagePath } from "@/Constant";
import { notificationsThreeTabContent } from "@/Data/General/Dashboard/DefaultDashboard";
import { NotificationsTabContent } from "@/Types/Dashboard.type";
import Image from "next/image";
import Link from "next/link";
import { TabContent, TabPane } from "reactstrap";

const NotificationsTwoTabContent: React.FC<NotificationsTabContent> = ({ navId }) => {
  return (
    <TabContent activeTab={navId} className="content-tab">
      <TabPane tabId={2} >
        {notificationsThreeTabContent.map((data, i) => (
          <div className={`d-flex align-items-center ${i === 2 ? "figma-line" : ""}`} key={i}>
            <Image src={`${ImagePath}/dashboard/user/${data.image}`} width={42} height={42} alt="product" />
            <div className="flex-grow-1 ms-2">
              <Link href={'/app/users/user_profile'}>
                <h5>{data.name}</h5>
                <span>{data.time}</span>
              </Link>
            </div>
            {data.dot &&
              <div className="flex-shrink-0">
                <div className="activity-dot-primary" />
              </div>
            }
          </div>
        ))}
      </TabPane>
    </TabContent>
  );
};
export default NotificationsTwoTabContent;