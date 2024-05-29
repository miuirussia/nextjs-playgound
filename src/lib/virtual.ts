import { Virtualizer, VirtualizerOptions, useVirtualizer as useVirtualizerOrigin } from "@tanstack/react-virtual";

export const useVirtualizer: typeof useVirtualizerOrigin = (((options: VirtualizerOptions<any, any>) => {
  'use no memo';
  return ({ ...useVirtualizerOrigin(options) } as Virtualizer<any, any>);
}) as any);
