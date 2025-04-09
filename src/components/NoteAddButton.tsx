import React from "react";
import useAppNavigate from "@/hooks/useAppNavigate";
import { Button } from "@/components/ui/button";
import { Text } from "./ui/text";

export default function NoteAddButton() {
   const navigation = useAppNavigate();
   return (
      <Button onPress={() => navigation.navigate("Note", { id: undefined })}>
         <Text>Add Note +</Text>
      </Button>
   );
}
