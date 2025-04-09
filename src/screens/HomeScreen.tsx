import NoteCard from "@/components/NoteCard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect } from "react";
import { FlatList } from "react-native";
import { useAppSelector } from "@/redux/hooks/use-selector";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { fetchNotes } from "@/redux/features/notes-slice";

export default function HomeScreen() {
   const { notes } = useAppSelector((state) => state.rootReducer.notes);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchNotes());
   }, []);

   return (
      <FlatList
         data={notes}
         renderItem={({ item }) => (
            <NoteCard id={item.id} content={item.content} />
         )}
         keyExtractor={(note) => note.id}
         ListEmptyComponent={() => (
            <ThemedView className="flex-1 justify-center items-center">
               <ThemedText>Add Notes</ThemedText>
            </ThemedView>
         )}
         className="flex-1"
      />
   );
}
