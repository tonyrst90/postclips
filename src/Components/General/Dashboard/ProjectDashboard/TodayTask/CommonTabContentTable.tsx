import SVG from "@/CommonComponent/SVG";
import { Href } from "@/Constant";
import { todayTaskTabContentData } from "@/Data/General/Dashboard/ProjectDashboard";
import { CommonTabContentTableType } from "@/Types/Dashboard.type";
import { useState } from "react";
import { Button, FormGroup, Input, Label, Table } from "reactstrap";

const CommonTabContentTable: React.FC<CommonTabContentTableType> = ({ value }) => {
  const [tasks, setTasks] = useState(todayTaskTabContentData);

  const handleDelete = (itemId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== itemId);
    setTasks(updatedTasks);
  };
  return (
    <Table responsive className="display" style={{ width: "100%" }}>
      <tbody>
        {tasks.slice(0, value).map((data, i) => (
          <tr key={i}>
            <td>
              <FormGroup check>
                <Input type="checkbox" />
                <Label check />
              </FormGroup>
            </td>
            <td>
              <p>{data.detail}</p>
            </td>
            <td>
              <Button color={data.color}>{data.status}</Button>
            </td>
            <td>{data.date}</td>
            <td>
              <span className="delete-option">
                <a href={Href} onClick={() => handleDelete(data.id)}>
                  <SVG className="remove" iconId="Delete" />
                </a>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CommonTabContentTable;