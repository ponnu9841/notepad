import useAppNavigate from "@/hooks/useAppNavigate";
import React from "react";
import { Pressable, View } from "react-native";
import { deleteNote } from "@/services/noteService";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { fetchNotes } from "@/redux/features/notes-slice";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import DeleteDialog from "@/components/delete-dialog";

export default function NoteCard({ id, title, content }: Note) {
   const navigation = useAppNavigate();
   const dispatch = useAppDispatch();
   const handleDelete = async () => {
      await deleteNote(id);
      dispatch(fetchNotes());
   };

   return (
      <Pressable onPress={() => navigation.navigate("Note", { id })}>
         <Card className="w-full mb-4">
            <CardHeader>
               <CardTitle numberOfLines={1}>{title}</CardTitle>
            </CardHeader>
            <CardContent>
               <Text numberOfLines={3}>{content}</Text>
            </CardContent>
            <CardFooter className="absolute bottom-0 right-0">
               <DeleteDialog
                  buttonText="Delete"
                  title={`Delete Note ${title}`}
                  description={`Are you sure you want to delete ${title}? This action cannot be undone`}
                  onConfirm={() => handleDelete()}
                  triggerButtonVariant="destructive"
                  triggerButtonSize="default"
               />
            </CardFooter>
         </Card>
      </Pressable>
   );
}
