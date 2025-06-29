import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import { notificationsFirstTabContent } from "@/Data/General/Dashboard/DefaultDashboard";
import { NotificationsTabContent } from "@/Types/Dashboard.type";
import Image from "next/image";
import Link from "next/link";
import { Button, TabContent, TabPane } from "reactstrap";

const NotificationsFirstTabContent: React.FC<NotificationsTabContent> = ({ navId }) => {
  return (
    <TabContent activeTab={navId} className="content-tab">
      <TabPane tabId={1}>
        {notificationsFirstTabContent.map((item) => (
          <div className={`d-flex align-items-center ${item.line===true ? 'figma-line':''}`} key={item.id}>
            <Image src={`${ImagePath}/dashboard/user/${item.image}`} width={42} height={42} alt="product" />
            <div className="flex-grow-1 ms-2">
              <Link href={'/app/users/user_profile'}>
                <h5>
                  {item.title}
                  {item.strongText && <strong>{item.strongText}</strong>} {item.subText && item.subText}
                </h5>
                <span>{item.subTitle}</span>
              </Link>
              {item.id === 1 &&
                <>
                  <Button color="secondary" className="mt-1 mb-1 me-2">{'Decline'}</Button>
                  <Button color="primary" className="mt-1 mb-1">{'Accept'}</Button>
                </>
              }
            </div>
            {item.color &&
              <div className="flex-shrink-0">
                <div className={`activity-dot-${item.color}`} />
              </div>
            }
          </div>
        ))}
        <div className="figma-icon">
          <SVG className="me-2" iconId="file" />
          <div className="flex-shrink-0">
            <h6>Tet_Dark_Mode_L103.fig</h6>
            <span>2.4 MB</span>
          </div>
        </div>
      </TabPane>
    </TabContent>
  );
};
export default NotificationsFirstTabContent;