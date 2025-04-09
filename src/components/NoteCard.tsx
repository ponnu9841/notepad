import useAppNavigate from "@/hooks/useAppNavigate";
import React from "react";
import { View } from "react-native";
import { deleteNote } from "@/services/noteService";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { fetchNotes } from "@/redux/features/notes-slice";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import Dialog from "./Dialog";

export default function NoteCard({ id, content }: Note) {
   const navigation = useAppNavigate();
   const dispatch = useAppDispatch();
   const handleDelete = async (id: string) => {
      await deleteNote(id);
      dispatch(fetchNotes());
   };

   return (
      <Card className="w-full mb-4">
         <CardHeader>
            <CardTitle>Note</CardTitle>
            <CardDescription>Card Description</CardDescription>
         </CardHeader>
         <View className="flex-row justify-between items-center">
            <CardContent>
               <Text>{content}</Text>
            </CardContent>
            <CardFooter>
               <Dialog
                  buttonText="Delete"
                  title={`Delete Note ${content}`}
                  description={`Are you sure you want to delete ${content}`}
                  onConfirm={() => handleDelete(id)}
               />
            </CardFooter>
         </View>
      </Card>
      // <ThemedView className="flex-row justify-between items-center gap-4 m-2 mb-4 p-2 px-4">
      //    <Pressable
      //       onPress={() => navigation.navigate("Note", { id: id as string })}
      //       className="flex-1"
      //    >
      //       <ThemedText className="p-3 flex-1">{content}</ThemedText>
      //    </Pressable>

      //    <Pressable
      //       onPress={() => handleDelete(id)}
      //       className="w-2 justify-center items-center"
      //    >
      //       <ThemedText>&times;</ThemedText>
      //    </Pressable>
      // </ThemedView>
   );
}
