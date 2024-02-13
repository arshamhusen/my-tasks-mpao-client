"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Home() {
  const route = useRouter();

  const objectives = [
    {
      title:
        "Create a new Jira project called “Jira Tasks” and add all the tasks required for Question 2 and 3.",
      content: (
        <div className="flex flex-col items-start justify-start w-full space-y-5">
          <p>
            Please click on the{" "}
            <span>
              <a
                href="https://arova.atlassian.net/jira/software/projects/JT/boards/6/timeline?selectedIssue=JT-2"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                link{" "}
              </a>
            </span>
            to view the project on Jira
          </p>
        </div>
      ),
    },
    {
      title:
        "Read JIRA API documentations and develop a dashboard using your favourite programming languages to show Tasks in various status (Eg: ToDo, In progress, Done, etc). Data retrieved from JIRA API should be stored in a database.",
      content: (
        <div className="flex flex-col w-full justify-start items-start space-y-5">
          <Button
            onClick={() => route.push("/dashboard", { scroll: true })}
            className=""
          >
            View Dashboard
          </Button>
        </div>
      ),
    },
    {
      title:
        "If a Task / Issue due date is greater than current date, send an email with the list of pending tasks.",
      content: (
        <div className="w-full">
          <p className="text-start">
            Click on the button below to send an email with the list of pending
            tasks. The system also has a cron job that runs every 5 minutes to
            check for pending tasks and send an email if there are any.
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="flex  flex-col bg-slate-50 py-20  md:pt-0 items-center h-full justify-center space-y-10 p-5">
      <img
        src="https://clipground.com/images/png-logos-1.png"
        alt="Jira Logo"
        className="w-12 h-12"
      />
      <Card className="w-full max-w-4xl ">
        <CardHeader className="text-start">
          <CardTitle>Here are the objectives of this project</CardTitle>
          <CardDescription>
            Please read the README.md file to understand the objectives of this
            project
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="flex py-5 flex-col items-center justify-center space-y-5">
          {objectives.map((objective, index) => (
            <div className="w-full">
              <div key={index} className="grid grid-cols-12 -gap-3">
                <p className="col-span-11 font-medium">{objective.title}</p>
              </div>

              <div className="flex items-center text-sm md:text-base text-slate-600 justify-center py-5 w-full space-x-5">
                {objective.content}
              </div>
              {index !== objectives.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
        <Separator />
        <CardFooter className="p-4 flex w-full space-x-5 justify-end items-center">
          <Drawer>
            <DrawerTrigger>
              <Button variant={"secondary"}>View GitHub Repositories</Button>
            </DrawerTrigger>
            <DrawerContent className="w-full p-5 flex flex-col items-center justify-center space-y-5">
              <DrawerHeader>
                <DrawerTitle>Github Repositories</DrawerTitle>
                <DrawerClose />
              </DrawerHeader>
              <DrawerDescription>
                <p>
                  This is the README.md file for the project. Please read this
                  file to understand the objectives of this project
                </p>
              </DrawerDescription>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Button onClick={() => route.push("/dashboard", { scroll: true })}>
            Go to Dashboard
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
