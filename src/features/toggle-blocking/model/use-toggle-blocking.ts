import { useAccountQuery, useUpdateAccountMutation } from "@/entities/account";

export function useToggleBlocking() {
  const accountQuery = useAccountQuery();
  const updateAccountMutation = useUpdateAccountMutation();

  const toggleBlocking = () => {
    if (accountQuery.data) {
      updateAccountMutation.mutate({
        isBlockingEnabled: !accountQuery.data?.isBlockingEnabled,
      });
    }
  };
  return {
    toggleBlocking,
    isReady: accountQuery.isSuccess,
    isPending: accountQuery.isPending || updateAccountMutation.isPending,
    isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
  };
}
