import React, { useRef } from 'react'
import { Card } from 'reactstrap';
import { useReactToPrint } from 'react-to-print';
import UserMail from './UserMail';
import MailBody1 from './MailBody1';
import { useAppSelector } from '@/Redux/Hooks';

const EmailRead = () => {
    const { interviewEmail } = useAppSelector((state) => state.letterbox);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrintData = useReactToPrint({
    contentRef,
  });

    return (
      <Card className={`email-body email-read ${interviewEmail ? "show" : "hide"}`}>
        <MailBody1 />
        <div className="mail-body-wrapper" ref={contentRef}>
          <UserMail handlePrint={handlePrintData} />
        </div>
      </Card>
    );
}
export default EmailRead;