import { Card, CardBody, Col } from "reactstrap";
import { Highlight, themes } from "prism-react-renderer";
import { CSSModeHeading } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { cssData } from "@/Data/Miscellaneous/Editors/Editors";

const CssMode = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={CSSModeHeading} headClass="pb-0" />
        <CardBody>
          <Highlight theme={themes.vsDark} code={cssData} language="css">
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
export default CssMode;