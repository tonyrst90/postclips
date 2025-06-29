"use client";
import { useEffect, useState, FC, ReactNode } from "react";

interface NoSsrProps {
  children: ReactNode;
}

const NoSsr: FC<NoSsrProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
};

export default NoSsr;
