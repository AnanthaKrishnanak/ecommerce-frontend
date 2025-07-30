import type { UseMutationOptions, DefaultOptions } from "@tanstack/react-query";

export const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60,
  },
} satisfies DefaultOptions;

export type ApiFnReturnType<FnType extends (...args: unknown[]) => Promise<unknown>> =
  Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: unknown[]) => { queryKey: unknown; queryFn: unknown }> =
  Omit<ReturnType<T>, "queryKey" | "queryFn">;

export type MutationConfig<
  MutationFnType extends (arg: unknown) => Promise<unknown>,
> = UseMutationOptions<
  Awaited<ReturnType<MutationFnType>>, // mutationFn return type
  Error,                               // error type
  Parameters<MutationFnType>[0]       // variables type
>;

