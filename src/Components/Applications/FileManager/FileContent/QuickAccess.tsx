import { QuickAccessTitle } from "@/Constant";
import { quickAccessData } from "@/Data/Applications/FileManager";

const QuickAccess = () => {
  return (
    <>
      <h5 className="mb-2">{QuickAccessTitle}</h5>
      <ul className='quick-file d-flex flex-row'>
        {quickAccessData.map((item, i) => (
          <li key={i}>
            <div className='quick-box'><i className={`fa fa-${item.icons} font-${item.color}`} /></div>
            <h6>{item.title}</h6>
          </li>
        ))}
      </ul>
    </>
  );
};

export default QuickAccess;