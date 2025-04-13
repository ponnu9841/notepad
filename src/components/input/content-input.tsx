import useDebounce from "@/hooks/useDebounce";
import React, { useEffect, useState } from "react";
import { setContent as setContentToStore } from "@/redux/features/notes-slice";
import { TextInput } from "react-native";
import { Input } from "../ui/input";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";

export default function ContentInput({ value }: { value?: string }) {
   const [content, setContent] = useState(value ?? "");
   const debouncedContent = useDebounce(content);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(setContentToStore(debouncedContent));
      return () => {
         dispatch(setContentToStore(""));
      }
   }, [debouncedContent]);
   return (
      <Input
         value={content}
         onChangeText={setContent}
         placeholder="Note Content"
         multiline
         textAlignVertical="top"
         className="flex-1 bg-transparent border-b-0 border-r-0 border-l-0 border-t border-black/30 rounded-none"
      />
   );
}
