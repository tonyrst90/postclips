import { useRouter } from "next/navigation";
import Image from "next/image";

const Feedback = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/brand/feedback");
    };

    return (
        <li className="onhover-dropdown">
            <button onClick={handleClick} className="notification-box">
                <Image
                    src="/assets/images/(postclips)/header/help.svg"
                    alt="!"
                    className="next-image-full"
                    width={20}
                    height={20}
                    priority
                />
            </button>
        </li>
    );
};

export default Feedback; 