import React from "react";
import useAppNavigate from "@/hooks/useAppNavigate";
import { Plus } from "@/lib/icons/Add";
import { Button } from "./ui/button";


export default function NoteAddButton() {
   const navigation = useAppNavigate();
   return (
      <Button
         onPress={() => navigation.navigate("Note", { id: undefined })}
         className="rounded-full p-7 absolute bottom-5 right-5"
         size="icon"
      >
         <Plus size={35} className="text-white" />
      </Button>
   );
}
