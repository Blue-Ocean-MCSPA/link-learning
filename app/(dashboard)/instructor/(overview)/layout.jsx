import React, { useContext } from "react";
import AppContext from "@/app/context";
import CohortOverviewNavLink from "@/app/(Components)/CohortOverviewNavLink";

const OverviewLayout = ({ children }) => {
  const { selectedCohort, setSelectedCohort } = useContext(AppContext);

  const overviewMenuItems = [
    { href: "/instructor/students", text: "Students Overview" },
    { href: "/instructor/assignments", text: "Assignments Overview" },
    { href: "/instructor/messages", text: "Messages" },
  ];

  return (
    <div>
      <div className="flex items-center p-4 bg-slate-500">
        <div>{selectedCohort}</div>
        <Link href="/instructor">Return to Instructor Dashboard</Link>
      </div>
      <div className="flex flex-col items-center p-4 bg-slate-600">
        <ul className="flex space-x-6">
          {overviewMenuItems.map(({ url, text }, index) => (
            <li key={index}>
              <CohortOverviewNavLink href={url}>{text}</CohortOverviewNavLink>
            </li>
          ))}
        </ul>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default OverviewLayout;
