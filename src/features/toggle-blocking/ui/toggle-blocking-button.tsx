import { UiButton } from "@/shared/ui/ui-button";
import { useToggleBlocking } from "@/features/toggle-blocking/model/use-toggle-blocking";

export function ToggleBlockingButton() {
  const { isBlockingEnabled, toggleBlocking, isPending, isReady } =
    useToggleBlocking();

  if (!isReady) {
    return null;
  }

  return (
    <UiButton
      disabled={isPending}
      onClick={toggleBlocking}
      variant={!isBlockingEnabled ? "primary" : "secondary"}
    >
      {isBlockingEnabled ? "Disable Blocking" : "Enable Blocking"}
    </UiButton>
  );
}
