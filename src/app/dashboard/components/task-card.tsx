import { Card } from "@/components/ui/card";
import React from "react";

type Props = {
  summary: string;
  parentsummary: string;
  status: string;
  priority: string;
  issuetype: string;
  assignee?: string;
};

export default function TaskCard({
  summary,
  parentsummary,
  status,
  priority,
  issuetype,
  assignee,
}: Props) {
  return (
    <Card className="w-full p-5">
      <div className="flex flex-row justify-between items-start">
        <div>
          <h1 className="text-base font-bold">{summary}</h1>
          <p className="text-gray-500">{parentsummary}</p>
        </div>
        <div className="text-sm text-end">
          <p className="text-gray-500">{status}</p>
          <p className="text-gray-500">{assignee}</p>
          <p className="text-gray-500">{priority}</p>
          <p className="text-gray-500">{issuetype}</p>
        </div>
      </div>
    </Card>
  );
}
