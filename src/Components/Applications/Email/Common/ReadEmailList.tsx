import { ImagePath } from "@/Constant"
import { emailList } from "@/Data/Applications/Email"
import { ReadEmailListProps } from "@/Types/Email.type"
import Image from "next/image"

const ReadEmailList: React.FC<ReadEmailListProps> = ({ activeCallback, activeTab }) => {
  return (
    <div className="inbox custom-scrollbar">
      {emailList.map((data, index) => (
        <div key={index} className={`d-flex ${activeTab === index ? "active" : ""}`} onClick={() => { activeCallback(index + 1); }}>
          <div className="media-size-email">
            <Image className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} width={48} height={48} alt="image" />
          </div>
          <div className="flex-grow-1">
            <h3>
              {data.tittle}
              <small>
                <span>({data.date} </span> {data.month} <span> {data.year})</span>
              </small>
            </h3>
            <p>{data.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReadEmailList;