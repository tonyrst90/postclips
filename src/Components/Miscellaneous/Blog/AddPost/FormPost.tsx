import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import RadioTypeForm from "./RadioTypeForm";
import { Typeahead } from "react-bootstrap-typeahead";
import { PostCategory, PostContent, PostTitle } from "@/Constant";
import SimpleMdeReact from "react-simplemde-editor";
import { postTypeData } from "@/Data/Miscellaneous/Blog/Blog";

export const FormPost = () => {
  const BlogPostText: string = `Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`;

  return (
    <Form className="needs-validation">
      <Row>
        <Col sm={12}>
          <FormGroup>
            <Label check>{PostTitle}:</Label>
            <Input type="text" placeholder='Post Title' />
          </FormGroup>
          <RadioTypeForm />
          <FormGroup>
            <div className="col-form-Label">
              {PostCategory}: <Col sm={12}><Typeahead id="multiple-typeahead" className="mt-2 flex-row" defaultSelected={postTypeData} labelKey="name" multiple options={postTypeData} placeholder='Select Your Name....' /></Col>
            </div>
          </FormGroup>
          <div className="email-wrapper">
            <div className="theme-form">
              <FormGroup>
                <Label check>{PostContent}:</Label>
                <SimpleMdeReact id="editor_container" value={BlogPostText} options={{ autofocus: true, spellChecker: false }} />
              </FormGroup>
            </div>
          </div>
        </Col>
      </Row>
    </Form>
  );
};
