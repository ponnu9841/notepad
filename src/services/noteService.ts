import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "NOTES_APP";

export const getAllNotes = async () => {
   const notes = (await AsyncStorage.getItem(KEY)) ?? "[]";
   return JSON.parse(notes) as Note[];
};

export const saveNotesToStore = async (notes: Note[]) => {
   await AsyncStorage.setItem(KEY, JSON.stringify(notes));
};

export const getNoteById = async (id: string) => {
   const notes = await getAllNotes();
   return notes.find((note) => note.id === id);
};

export const saveNote = async (content: string, title: string) => {
   const notes = await getAllNotes();
   notes.push({
      id: Date.now().toString(),
      title,
      content,
   });
   await saveNotesToStore(notes);
};

export const editNote = async (id: string, content: string, title: string) => {
   const notes = await getAllNotes();
   const index = notes.findIndex((note) => note.id === id);
   //    notes[index].content = content;
   notes.splice(index, 1, {
      id,
      title,
      content,
   });
   await saveNotesToStore(notes);
};

export const deleteNote = async (id: string) => {
   const notes = await getAllNotes();
   const index = notes.findIndex((note) => note.id === id);
   notes.splice(index, 1);
   await saveNotesToStore(notes);
};
