import { Form, FormGroup, Input, Label } from 'reactstrap'
import SimpleMDE from "react-simplemde-editor";
import { useState } from 'react';

const EmailComposeForm = () => {
  const [text, setText] = useState("Enter your message");
  const handleChange = () => { setText("Enter your message"); };

  return (
    <div className="email-wrapper">
      <Form className="theme-form">
        <FormGroup>
          <Label className="col-form-label pt-0">{'To'}</Label>
          <Input type="email" />
        </FormGroup>
        <FormGroup>
          <Label>{'Subject'}</Label>
          <Input type="text" />
        </FormGroup>
        <div>
          <Label className="text-muted">{'Messages'}</Label>
          <SimpleMDE
            id="editor_container"
            onChange={handleChange}
            value={text}
            options={{ autofocus: true, spellChecker: false }}
          />
        </div>
      </Form>
    </div>
  );
};

export default EmailComposeForm;