import { useVirtualizer as useVirtualizerOriginal } from "@tanstack/react-virtual";

export const useVirtualizer: typeof useVirtualizerOriginal = ((...args) => {
  'use no memo'
  return { ...useVirtualizerOriginal(...args) }
}) as typeof useVirtualizerOriginal
