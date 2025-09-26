"use client";
import { Checkbox } from "./ui/checkbox";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Calendar } from "./ui/calendar";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export type todos = {
  id: string;
  text: string;
};

type TodoListProps = {
  text: string;
  todos: todos[];
};

const TodoList = ({ text, todos }: TodoListProps) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState(false);
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          {" "}
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {todos.map((todo) => (
            <Card key={todo.id} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id={todo.id} />
                <label
                  htmlFor={todo.id}
                  className="text-sm text-muted-foreground"
                >
                  {todo.text}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
