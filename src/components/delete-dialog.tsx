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
import { Trash } from "@/lib/icons/Trash";

export default function DeleteDialog({
   buttonText = "Show Alert Dialog",
   title,
   description,
   onConfirm,
   triggerButtonVariant = "outline",
   triggerButtonSize = "default",
}: DialogProps) {
   return (
      <AlertDialog>
         <AlertDialogTrigger asChild>
            <Button variant="destructive" size="icon" className="p-3">
               <Trash size={20} className="text-white" />
            </Button>
         </AlertDialogTrigger>
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle numberOfLines={1}>{title}</AlertDialogTitle>
               <AlertDialogDescription>{description}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex-row justify-between gap-4">
               <AlertDialogCancel className="flex-1">
                  <Text>Cancel</Text>
               </AlertDialogCancel>
               <AlertDialogAction
                  onPress={() => onConfirm()}
                  className="flex-1 py-0"
               >
                  <Text>Continue</Text>
               </AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
}
