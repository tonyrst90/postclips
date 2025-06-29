import { Configuration, UnlockingCreativity } from "@/Constant";
import { useCallback, useState } from "react";
import { Button } from "reactstrap";
import ConfigurationClass from "../ConfigurationClass";

const TabHeader = ({ callbackNav }: { callbackNav: (test: string, open: boolean) => void; }) => {
  const [modal, setModal] = useState(false);
  const toggle = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  return (
    <div className="customizer-header">
      <i className="icofont-close icon-close" onClick={() => callbackNav("", false)}></i>
      <h5 className="f-w-700">{UnlockingCreativity}</h5>
      <p className="mb-0">{"Try It Real Time"} <i className="fa fa-thumbs-o-up txt-primary" /></p>
      <Button color="primary" className="plus-popup mt-2" onClick={toggle}>{Configuration}</Button>
      <ConfigurationClass modal={modal} toggle={toggle} />
    </div>
  )
}

export default TabHeader
