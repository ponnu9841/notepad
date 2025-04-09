import SaveNoteButton from "@/components/SaveNoteButton";
import { ThemedView } from "@/components/ThemedView";
import useAppNavigate from "@/hooks/useAppNavigate";
import useAppRoute from "@/hooks/useAppRoute";
import { useAppSelector } from "@/redux/hooks/use-selector";
import { getNoteById } from "@/services/noteService";
import React, { useCallback, useEffect, useState } from "react";
import { TextInput } from "react-native";

export default function NoteScreen() {
   const navigation = useAppNavigate();
   const [content, setContent] = useState("");
   const route = useAppRoute();
   const id = route.params.id;
   const { notes } = useAppSelector((state) => state.rootReducer.notes);

   useEffect(() => {
      if (id) {
         const note = notes?.find((note) => note.id === id);
         if (note) setContent(note.content);
      }
   }, [id]);
   // Memoize the headerRight component
   const SaveButton = useCallback(
      () => <SaveNoteButton id={id ?? ""} content={content} />,
      [id, content]
   );

   // Set navigation options using the memoized component
   useEffect(() => {
      navigation.setOptions({
         headerRight: SaveButton,
      });
   }, [SaveButton]);

   console.log(content);
   return (
      <ThemedView className="flex-1">
         <TextInput
            value={content}
            onChangeText={setContent}
            placeholder="Note Content"
            multiline
            autoFocus
            textAlignVertical="top"
            className="px-5 py-10 bg-[#ffb70342] flex-1"
         />
      </ThemedView>
   );
}
