import { Highlight, themes } from "prism-react-renderer";
import { Card, CardBody, Col } from "reactstrap";
import { HTMLModeHeading } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { htmlData } from "@/Data/Miscellaneous/Editors/Editors";

const HtmlMode = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={HTMLModeHeading} headClass="pb-0" />
        <CardBody>
          <Highlight theme={themes.vsDark} code={htmlData} language="HTML">
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </CardBody>
      </Card>
    </Col>
  );
};
export default HtmlMode;
