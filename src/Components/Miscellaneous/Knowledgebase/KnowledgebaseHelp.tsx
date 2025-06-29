import { ImagePath, KnowledgebaseHelpQue } from "@/Constant";
import { Search } from "react-feather";
import { Col, Form, FormGroup, Input } from 'reactstrap';

const KnowledgebaseHelp = () => {
  return (
    <Col xs={12}>
      <div className="knowledgebase-bg">
        <picture><img className="bg-img-cover bg-center w-100 h-100 rounded-4" src={`${ImagePath}/knowledgebase/bg_1.jpg`} alt="looginpage" /></picture>
      </div>
      <div className="knowledgebase-search">
        <div>
          <h3>{KnowledgebaseHelpQue}</h3>
          <Form onSubmit={(e) => e.preventDefault()} className="form-inline" method="get">
            <FormGroup className="w-100">
              <Search />
              <Input className="w-100" type="text" placeholder="Type question here" plaintext />
            </FormGroup>
          </Form>
        </div>
      </div>
    </Col>
  );
};

export default KnowledgebaseHelp;