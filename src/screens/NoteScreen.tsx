import ContentInput from "@/components/input/content-input";
import TitleInput from "@/components/input/title-input";
import Layout from "@/components/layout";
import SaveNoteButton from "@/components/SaveNoteButton";
import useAppRoute from "@/hooks/useAppRoute";
import { useAppSelector } from "@/redux/hooks/use-selector";

export default function NoteScreen() {
   const route = useAppRoute();
   const id = route.params.id;
   const { notes } = useAppSelector((state) => state.rootReducer.notes);
   const currentValue = notes?.find((note) => note.id === id);
   
   return (
      <Layout className="flex-1 bg-[#ffb70342] p-3">
         <TitleInput value={currentValue?.title} />
         <ContentInput value={currentValue?.content} />
         <SaveNoteButton id={currentValue?.id ?? ""} />
      </Layout>
   );
}
