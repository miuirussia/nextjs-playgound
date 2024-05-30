"use client";
import { useRef } from "react";
import { useVirtualizer } from "@/lib/virtual";

interface ListProps {
  value: Array<{ completed: boolean, id: number, title: string, userId: number }>
}

export default function List({ value }: ListProps) {
  const parentRef = useRef(null);

  const count = value.length;
  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  const items = virtualizer.getVirtualItems();

  return <>
    <div
      ref={parentRef}
      className="List w-full h-[400px] overflow-y-auto contain-strict"
    >
      <div
        className="relative w-full"
        style={{
          height: virtualizer.getTotalSize(),
        }}
      >
        <div
          className="absolute top-0 left-0 w-full"
          style={{
            transform: `translateY(${items[0]?.start ?? 0}px)`,
          }}
        >
          {items.map((virtualRow) => (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={virtualizer.measureElement}
              className={
                virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven"
              }
            >
              <div className="p-1">
                <div>Row {virtualRow.index}</div>
                <div>{value[virtualRow.index].title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>;
}
