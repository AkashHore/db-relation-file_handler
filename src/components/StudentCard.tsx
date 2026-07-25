import { PenLineIcon } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { Avatar, AvatarImage } from "./shadcnui/avatar";
import { Badge } from "./shadcnui/badge";
import { buttonVariants } from "./shadcnui/button";
import { Card, CardContent, CardFooter } from "./shadcnui/card";

const StudentCard = () => {
  return (
    <Card className="w-xs">
      <CardContent className="grid place-items-center gap-4">
        <Avatar className={"size-64"}>
          <AvatarImage src="https://placehold.co/256/png" />
        </Avatar>

        <div className="text-3xl font-semibold">Student1</div>
        <div className="flex items-center gap-2">
          <span className="text-lg">Teacher Name</span>
          <Badge
            variant="default"
            className="h-6 text-lg">
            Badge
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-4">
        <DeleteButton />

        <Link
          href={`/abcd` as Route}
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "rounded-xl",
          })}>
          <PenLineIcon />
          Edit
        </Link>
      </CardFooter>
    </Card>
  );
};

export default StudentCard;
