import { Href } from "@/Constant"
import { emailSidbar } from "@/Data/Applications/Email"
import { Badge } from "reactstrap"

const DynamicEmailSideBar = () => {
  return (
    <>
      {emailSidbar &&
        emailSidbar.map((item, index) => (
          <li key={index}>
            {!item.line ? (
              <a href={Href}>
                <span className="title">
                  <i className={`icon-${item.className}`} />
                  {item.title}
                </span>
                {item.badge &&
                  <Badge color='transparent' className="pull-right">
                    ({item.badge})
                  </Badge>
                }
              </a>
            ) : (
              item.line
            )}
          </li>
        ))}
    </>
  )
}
export default DynamicEmailSideBar