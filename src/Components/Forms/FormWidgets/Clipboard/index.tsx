'use client'
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { ClipboardTitle, FormWidgetsTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import ClipboardOnTextArea from "./ClipboardOnTextArea";
import ClipboardOnTextInput from "./ClipboardOnTextInput";
import ClipboardOnParagraph from "./ClipboardOnParagraph";
import CopyPortionFromParagraph from "./CopyPortionFromParagraph";

const ClipboardContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={ClipboardTitle} parent={FormWidgetsTitle} title={ClipboardTitle} />
            <Container fluid>
                <Row>
                    <ClipboardOnTextInput />
                    <ClipboardOnTextArea />
                    <ClipboardOnParagraph />
                    <CopyPortionFromParagraph />
                </Row>
            </Container>
        </>
    )
}
export default ClipboardContainer;