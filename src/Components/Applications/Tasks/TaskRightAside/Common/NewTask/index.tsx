import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Printer } from 'react-feather';
import { EmptyTaskProp } from '@/Types/Tasks.type';
import { Href } from '@/Constant';
import NewTaskTable from './NewTaskTable';

const NewTask: React.FC<EmptyTaskProp> =({ title })=> {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

    return (
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h3 className="mb-0">{title}</h3>
          <a href={Href} onClick={()=>handlePrint()}>
            <Printer className="me-2" />
            {"Print"}
          </a>
        </CardHeader>
        <CardBody className="p-0">
          <NewTaskTable componentRef={contentRef} />
        </CardBody>
      </Card>
    );
}
export default NewTask;