"use client";
import { FunctionComponent, useEffect, useState } from "react";
import { useAuth } from "@/Providers/SessionProvider";
import HomeDashboard from "@/Components/(postclips)/home";

const Home = () => {
  return <HomeDashboard />;
};

export default Home;
