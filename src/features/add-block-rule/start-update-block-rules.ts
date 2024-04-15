import { setBrowserInterval, setNetRules } from "@/shared/lib/browser.ts";
import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from "@/shared/api/generated.ts";
import { getBlockListNetRules } from "./get-block-list-net-rules";

export function startUpdateBlockRules() {
  setBrowserInterval("update-block-rules", 5 * 1000, async () => {
    const isAuth = await authControllerGetSessionInfo().then(
      () => true,
      () => false,
    );

    if (!isAuth) {
      return await setNetRules([]);
    }

    const isBlockingEnabled = await accountControllerGetAccount().then(
      (r) => r.isBlockingEnabled,
    );

    if (!isBlockingEnabled) {
      return await setNetRules([]);
    }

    setNetRules(await getBlockListNetRules());
  });
}
