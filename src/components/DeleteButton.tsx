"use client";

import { LoaderIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const DeleteButton = () => {
  const [loading, setLoading] = useState(false);

  const deleteHandler = async () => {
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1000));

    // const { isSuccess, messege } = await deleteUser(userId);

    // if (isSuccess) {
    //   toast.success(messege);

    //   refresh();
    // } else {
    //   toast.error(messege);
    // }

    setLoading(false);
  };
  return (
    <Button
      type="button"
      variant={"destructive"}
      size={"lg"}
      className={"rounded-xl"}
      disabled={loading}
      onClick={deleteHandler}>
      {loading ?
        <>
          <LoaderIcon className="animate-spin" /> Deleting...
        </>
      : <>
          <TrashIcon />
          Delete
        </>
      }
    </Button>
  );
};

export default DeleteButton;
