import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button } from "@/components/ui/button";
import { editNote, saveNote } from "@/services/noteService";
import useAppNavigate from "@/hooks/useAppNavigate";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { fetchNotes } from "@/redux/features/notes-slice";
import { Check } from "@/lib/icons/Check";
import { useAppSelector } from "@/redux/hooks/use-selector";

export default function SaveNoteButton({ id }: { id: string }) {
   const navigation = useAppNavigate();
   const dispatch = useAppDispatch();
   const { content, title } = useAppSelector(
      (state) => state.rootReducer.notes
   );

   const [loading, setLoading] = useState(false);
   const handleSaveNote = async () => {
      if (!content || !title) {
         Alert.alert("Enter Note", "Warning");
         return;
      }
      setLoading(true);
      if (!id) {
         await saveNote(content, title);
      } else {
         await editNote(id, content, title);
      }
      dispatch(fetchNotes());
      setLoading(false);
      navigation.goBack();
   };

   return (
      <Button
         onPress={handleSaveNote}
         disabled={loading}
         size="icon"
         className="rounded-full p-7 absolute bottom-5 right-5"
      >
         <Check size={35} className="text-white" />
      </Button>
   );
}
