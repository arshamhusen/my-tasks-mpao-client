import { Card } from "@/components/ui/card";
import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  color: string;
  value: number;
};

export default function DashCard({ title, icon, color, value }: Props) {
  return (
    <Card
      style={{}}
      className="p-5 flex flex-row justify-between space-x-5 bg-opacity-10"
    >
      {/* Icon Wrapper */}
      <div
        className={`w-12 h-12 p-3 rounded-full border border-slate-200 text-blue-800 flex justify-center items-center`}
      >
        {icon}
      </div>
      <div className="flex w-full flex-col space-y-1">
        <p className="text-sm text-slate-600">{title}</p>
        <h1 className="text-xl font-bold">{value} Tasks</h1>
      </div>
    </Card>
  );
}
