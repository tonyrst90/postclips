import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicTree } from "@/Constant";
import { basicTreeData, TreeViewList } from "@/Data/BonusUi/TreeView";
import { BasicTreesProp } from "@/Types/BonusUi.type";
import cx from "classnames";
import { handleTreeViewCheckChange, processTreeViewItems, TreeView, TreeViewCheckDescriptor, TreeViewExpandChangeEvent } from "@progress/kendo-react-treeview";
import { FaCheckSquare, FaMinusSquare, FaSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { Card, CardBody } from "reactstrap";
import { useState } from "react";

export const ArrowIcon: React.FC<BasicTreesProp> = ({ isOpen, className }) => {
  const baseClass = "arrow";
  const classes = cx(baseClass, { [`${baseClass}--closed`]: !isOpen }, { [`${baseClass}--open`]: isOpen }, className);
  return <IoMdArrowDropright className={classes} />;
};

export const CheckBoxIcon = ({ variant, ...rest }: BasicTreesProp) => {
  switch (variant) {
    case "all":
      return <FaCheckSquare color="#53A653" {...rest} />;
    case "none":
      return <FaSquare color="white" {...rest} style={{ border: "1px solid #80808069" }} />;
    case "some":
      return <FaMinusSquare {...rest} color="#003FDD" />;
    default:
      return null;
  }
};

const BasicTrees = () => {
  const checkField = "checked";

  type TreeState = {
    check: TreeViewCheckDescriptor;
    items: typeof TreeViewList;
  };

  const [treeState, setTreeState] = useState<TreeState>({
    check: { idField: "text", applyCheckIndeterminate: true, ids: [] },
    items: TreeViewList,
  });

  const onCheckChange = (event: any) => {
    const settings = { checkChildren: true, checkParents: true };
    const newCheck = handleTreeViewCheckChange(event, treeState.check, [treeState.items], settings) as TreeViewCheckDescriptor;
    setTreeState((prevState) => ({
      ...prevState,
      check: { ...prevState.check, ...newCheck },
    }));
  };

  const onExpandChange = (event: TreeViewExpandChangeEvent) => {
    event.item.expanded = !event.item.expanded;
    setTreeState((prevState: any) => ({ ...prevState, items: [...prevState.items] }));
  };

  return (
    <Card>
      <CommonCardHeader title={BasicTree} span={basicTreeData} />
      <CardBody>
        <div className="tree-container">
          <div className="checkbox">
            <TreeView
              data={processTreeViewItems(treeState.items, {
                check: treeState.check,
              })}
              checkField={checkField}
              checkboxes={true}
              onCheckChange={onCheckChange}
              expandIcons={true}
              onExpandChange={onExpandChange}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BasicTrees;
