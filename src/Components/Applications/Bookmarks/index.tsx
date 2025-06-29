import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { ApplicationsTitle, BookmarksTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import LeftAsideBookmark from "./LeftAsideBookmark";
import RightAsideBookmark from "./RightAsideBookmark";

const BookmarksContainer = () => {
    return (
        <>
            <Breadcrumbs title={BookmarksTitle} />
            <Container fluid>
                <div className="email-wrap bookmark-wrap">
                    <Row>
                        <LeftAsideBookmark />
                        <RightAsideBookmark />
                    </Row>
                </div>
            </Container>
        </>
    )
}
export default BookmarksContainer;