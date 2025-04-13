import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/redux/hooks/use-selector";
import { setTitle as setTitleToStore } from "@/redux/features/notes-slice";
import useDebounce from "@/hooks/useDebounce";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";

export default function TitleInput({ value }: { value?: string }) {
   const [title, setTitle] = useState(value ?? "");
   const debouncedTitle = useDebounce(title);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(setTitleToStore(debouncedTitle));
      return () => {
         dispatch(setTitleToStore(""));
      };
   }, [debouncedTitle]);

   return (
      <Input
         value={title}
         onChangeText={setTitle}
         placeholder="Add Title"
         autoFocus
         className="bg-transparent text-2xl border-0"
      />
   );
}
