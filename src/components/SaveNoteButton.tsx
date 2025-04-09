import React from "react";
import { Alert, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { editNote, saveNote } from "@/services/noteService";
import useAppNavigate from "@/hooks/useAppNavigate";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { fetchNotes } from "@/redux/features/notes-slice";

export default function SaveNoteButton({ id, content }: Note) {
   const navigation = useAppNavigate();
   const dispatch = useAppDispatch();
   const handleSaveNotePress = async () => {
      if (!content) {
         Alert.alert("Enter Note", "Warning");
         return;
      }
      if (!id) {
        await saveNote(content);
      } else {
        await editNote(id, content);
      }
      dispatch(fetchNotes());
      navigation.goBack();
   };
   return (
      <Pressable onPress={handleSaveNotePress}>
         <ThemedText>SaveNoteBtn</ThemedText>
      </Pressable>
   );
}
