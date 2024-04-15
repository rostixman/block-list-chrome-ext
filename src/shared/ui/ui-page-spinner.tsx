import { UiSpinner } from "@/shared/ui/ui-spinner";
import clsx from "clsx";

export type UiPageSpinnerProps = {
  className?: string;
};

export function UiPageSpinner({ className }: UiPageSpinnerProps) {
  return (
    <div
      className={clsx(
        className,
        "fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-slate-100 opacity-50",
      )}
    >
      <UiSpinner className="text-teal-600 w-24 h-24" />
    </div>
  );
}
