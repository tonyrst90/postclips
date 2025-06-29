import { ImagePath } from "@/Constant"
import { ProjectCommonType } from "@/Types/Project.type"
import Image from "next/image"

const ProjectCustomers: React.FC<ProjectCommonType> = ({ item }) => {
    return (
        <div className='customers'>
            <ul>
                <li className='d-inline-block' >
                    <Image className='img-30 rounded-circle' src={`${ImagePath}/user/${item.customers_image1}`} alt='user' width={26} height={26} />
                </li>
                <li className='d-inline-block' >
                    <Image className='img-30 rounded-circle' src={`${ImagePath}/user/${item.customers_image2}`} alt='user' width={26} height={26} />
                </li>
                <li className='d-inline-block' >
                    <Image className='img-30 rounded-circle' src={`${ImagePath}/user/${item.customers_image3}`} alt='user' width={26} height={26} />
                </li>
                <li className='d-inline-block ms-2' >
                    <p className='f-12' >{`+${item.like} More`}</p>
                </li>
            </ul>
        </div>
    )
}

export default ProjectCustomers