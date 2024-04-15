import {
  BlockItemDtoType,
  blockListControllerGetList,
} from "@/shared/api/generated.ts";
import {
  NetRule,
  NetRuleActionType,
  NetRuleResourceType,
} from "@/shared/lib/browser.ts";

export async function getBlockListNetRules() {
  const blockList = await blockListControllerGetList();
  return blockList.items
    .filter((item) => item.type === BlockItemDtoType.Website)
    .map(
      (item): NetRule => ({
        id: item.id,
        action: { type: NetRuleActionType.BLOCK },
        condition: item.data.startsWith("regexp")
          ? {
              regexFilter: item.data.replace("regexp", ""),
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
            }
          : {
              regexFilter: item.data,
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
            },
      }),
    );
}
