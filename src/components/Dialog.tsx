import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function Dialog({
   buttonText = "Show Alert Dialog",
   title,
   description,
   onConfirm,
}: {
   buttonText?: string;
   title: string;
   description: string;
   onConfirm: () => void;
}) {
   return (
      <AlertDialog>
         <AlertDialogTrigger asChild>
            <Button variant="outline">
               <Text>{buttonText}</Text>
            </Button>
         </AlertDialogTrigger>
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle>{title}</AlertDialogTitle>
               <AlertDialogDescription>{description}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
               <AlertDialogCancel>
                  <Text>Cancel</Text>
               </AlertDialogCancel>
               <AlertDialogAction onPress={() => onConfirm()}>
                  <Text>Continue</Text>
               </AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
}
