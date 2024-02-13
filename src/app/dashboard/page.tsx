"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MailCheck, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";
import DashCard from "./components/dash-card";
import { Separator } from "@/components/ui/separator";
import TaskCard from "./components/task-card";
import DoughnutChart from "@/components/charts/doughnut-chart/DoughnutChart";
import axios from "axios";
import { toast } from "sonner";

type Props = {};

interface Task {
  summary: string;
  parentsummary: string;
  status: string;
  priority: string;
  issuetype: string;
  assignee?: string;
}

export default function page({}: Props) {
  let [tasks, setTasks] = React.useState<Task[]>([]);
  let [loading, setLoading] = React.useState(true);
  let [toDoTasks, setToDoTasks] = React.useState([]);
  let [inProgressTasks, setInProgressTasks] = React.useState([]);
  let [completedTasks, setCompletedTasks] = React.useState([]);

  function fetchTasks() {
    axios
      .get("http://localhost:4000/tasks")
      .then((res) => {
        setTasks(res.data);
        setToDoTasks(
          res.data.filter((task: { status: string }) => task.status === "To Do")
        );
        setInProgressTasks(
          res.data.filter(
            (task: { status: string }) => task.status === "In Progress"
          )
        );
        setCompletedTasks(
          res.data.filter((task: { status: string }) => task.status === "Done")
        );
        toast.success("Tasks Fetched Successfully");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function Refresh() {
    axios
      .get("http://localhost:4000/tasks/refresh")
      .then((res) => {
        fetchTasks();
        toast.success("Tasks Refreshed Successfully");
      })
      .catch((err) => {
        toast.error("Error Refreshing Tasks");
      });
  }

  React.useEffect(() => {
    fetchTasks();
  }, []);

  let navigate = useRouter();
  return (
    <div className="w-full flex flex-col bg-slate-50 h-screen justify-center items-center">
      {loading && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <p>Loading...</p>
        </div>
      )}
      <div className="w-full h-full grid-cols-6 gap-5 grid   max-w-7xl  ">
        <div className="col-span-4 space-y-5 py-5">
          {/* user */}
          <div className="w-full flex flex-row justify-between items-center py-5">
            <div className="flex flex-row justify-start items-center space-x-5">
              <img
                onClick={() => navigate.push("/", { scroll: true })}
                src="https://clipground.com/images/png-logos-1.png"
                alt="Jira Logo"
                className="w-12 h-12 cursor-pointer"
              />
              <div>
                <p>Hello 👋</p>
                <h1 className="text-2xl font-bold text-slate-800">
                  Mohamed Arusham Hussain
                </h1>
              </div>
            </div>
            <div className="flex flex-row space-x-5">
              <Button
                onClick={() => Refresh()}
                className="space-x-3"
                variant={"secondary"}
              >
                <RefreshCw size={20} />
                <p>Refresh</p>
              </Button>
              <Button className="space-x-3" variant={"outline"}>
                <MailCheck size={20} />
                <p>Check Pending</p>
              </Button>
            </div>
          </div>

          {/* cards */}
          <div className="grid grid-cols-3 gap-3">
            <DashCard
              title="To Do"
              icon={<RefreshCw size={20} className="text-yellow-500" />}
              color="blue"
              value={toDoTasks.length}
            />
            <DashCard
              title="In Progress"
              icon={<MailCheck size={20} className="text-green-500" />}
              color="green"
              value={inProgressTasks.length}
            />
            <DashCard
              title="Completed"
              icon={<MailCheck size={20} className="text-red-500" />}
              color="green"
              value={completedTasks.length}
            />
          </div>
          <Card className="p-5">
            <h1
              className="w-full text-start text-xl mb-3 font-bold"
              onClick={() => navigate.push("/dashboard", { scroll: true })}
            >
              My Tasks
            </h1>
            <Separator className="mb-3" />
            <Tabs defaultValue="inProgress" className="w-full">
              <TabsList className="w-full justify-start items-center space-x-5">
                <TabsTrigger className="px-10 w-full" value="inProgress">
                  In Progress
                </TabsTrigger>
                <TabsTrigger className="px-10 w-full" value="toDo">
                  To Do
                </TabsTrigger>
                <TabsTrigger className="px-10 w-full" value="completed">
                  Completed
                </TabsTrigger>
              </TabsList>
              <TabsContent className="space-y-2" value="inProgress">
                {inProgressTasks.map((task: Task, index: number) => (
                  <TaskCard
                    summary={task.summary}
                    parentsummary={task.parentsummary}
                    status={task.status}
                    priority={task.priority}
                    issuetype={task.issuetype}
                    assignee={task.assignee}
                  />
                ))}
              </TabsContent>
              <TabsContent className="space-y-2" value="toDo">
                {toDoTasks.map((task: Task, index: number) => (
                  <TaskCard
                    summary={task.summary}
                    parentsummary={task.parentsummary}
                    status={task.status}
                    priority={task.priority}
                    issuetype={task.issuetype}
                    assignee={task.assignee}
                  />
                ))}
              </TabsContent>
              <TabsContent className="space-y-2" value="completed">
                {completedTasks.map((task: Task, index: number) => (
                  <TaskCard
                    summary={task.summary}
                    parentsummary={task.parentsummary}
                    status={task.status}
                    priority={task.priority}
                    issuetype={task.issuetype}
                    assignee={task.assignee}
                  />
                ))}
              </TabsContent>
            </Tabs>
          </Card>
        </div>
        <div className="col-span-2 space-y-5 py-10 ">
          <Card className="p-5">
            <h1 className="w-full text-start text-base mb-3 font-bold">
              Overview
            </h1>
            <Separator className="mb-3" />
            <div>
              <DoughnutChart
                labels={["To Do", "In Progress", "Completed"]}
                title="Overview"
                className="w-full"
                datasets={[
                  {
                    data: [
                      toDoTasks?.length,
                      inProgressTasks?.length,
                      completedTasks?.length,
                    ],
                    backgroundColor: ["#fef08a", "#86efac", "#fda4af"],
                    hoverBackgroundColor: ["#fef08a", "#86efac", "#fda4af"],
                  },
                ]}
              />
              <div className="flex flex-col space-y-5">
                <div className="w-full flex flex-row justify-between items-center">
                  <p>To Do</p>
                  <p>
                    {toDoTasks?.length} / {tasks?.length}
                  </p>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <p>In Progress</p>
                  <p>
                    {inProgressTasks?.length} / {tasks?.length}
                  </p>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <p>Completed</p>
                  <p>
                    {completedTasks?.length} / {tasks?.length}
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-5">
            <h1 className="w-full text-start text-base mb-3 font-bold">
              Ongoing Tasks
            </h1>
            <Separator className="mb-3" />
            <div className="flex flex-col space-y-5">
              {inProgressTasks.map((task: Task, index: number) => (
                <div key={index} className="w-full">
                  <div className="grid grid-cols-12 -gap-3">
                    <p className="col-span-11 font-medium">{task.summary}</p>
                  </div>

                  {index !== inProgressTasks.length - 1 && (
                    <Separator className="mt-3" />
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
