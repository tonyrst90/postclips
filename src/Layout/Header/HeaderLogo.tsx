import { ImagePath } from "@/Constant";
import { Col } from "reactstrap";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo = ({ className }: { className?: string }) => {
  return (
    <Col className={cn("header-logo-wrapper col-auto p-0", className)}>
      <div className="logo-wrapper">
        <Link href={`/dashboard/default`}>
          <Image className="img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="" width={121} height={38} />
          <Image className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="" width={121} height={38} />
        </Link>
      </div>
    </Col>
  );
};
export default HeaderLogo;