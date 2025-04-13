import NoteCard from "@/components/NoteCard";
import { useEffect } from "react";
import { FlatList, Text } from "react-native";
import { useAppSelector } from "@/redux/hooks/use-selector";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { fetchNotes } from "@/redux/features/notes-slice";
import { View } from "react-native";
import NoteAddButton from "@/components/NoteAddButton";
import Layout from "@/components/layout";

export default function HomeScreen() {
   const { notes } = useAppSelector((state) => state.rootReducer.notes);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchNotes());
   }, []);

   return (
      <Layout>
         <FlatList
            data={notes}
            renderItem={({ item }) => (
               <View className="m-2">
                  <NoteCard
                     id={item.id}
                     content={item.content}
                     title={item.title}
                  />
               </View>
            )}
            keyExtractor={(note) => note.id}
            ListEmptyComponent={() => (
               <View className="flex-1 justify-center items-center bg-background">
                  <Text className="text-2xl text-gray-500">Add Notes</Text>
               </View>
            )}
            contentContainerStyle={
               notes?.length === 0 ? { flex: 1 } : undefined
            }
            className="flex-1"
         />
         <NoteAddButton />
      </Layout>
   );
}
