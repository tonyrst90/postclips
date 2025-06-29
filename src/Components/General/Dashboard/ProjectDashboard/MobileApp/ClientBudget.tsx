import { ClientBudgetPropsType } from "@/Types/Dashboard.type";
import Link from "next/link";

const ClientBudget: React.FC<ClientBudgetPropsType> = ({ data }) => {
  return (
    <div className="client-budget">
      <ul>
        {data.clientDetails.map((item, i) => (
          <li key={i}>
            <div className="d-flex">
              {item.color &&
                <div className="flex-shrink-0">
                  <div className={`activity-${item.color}`} />
                </div>
              }
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between">
                  <Link href={'/app/ecommerce/product'}>
                    <h6>{item.title}</h6>
                    <span>{item.date}</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientBudget;