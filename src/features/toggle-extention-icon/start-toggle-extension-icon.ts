import { setBrowserInterval, setIcon } from "@/shared/lib/browser.ts";
import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from "@/shared/api/generated.ts";

export function startToggleExtensionIcon() {
  setBrowserInterval("update-block-rules", 5 * 1000, async () => {
    const isAuth = await authControllerGetSessionInfo().then(
      () => true,
      () => false,
    );

    if (!isAuth) {
      setIcon("/hey.png");
      return;
    }

    const isBlockingEnabled = await accountControllerGetAccount().then(
      (r) => r.isBlockingEnabled,
    );

    if (!isBlockingEnabled) {
      setIcon("/sleeping.png");
      return;
    }

    setIcon("/shield.png");
    return;
  });
}
