'use client'
import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

interface ListProps {
  value: Array<{ completed: boolean, id: number, title: string, userId: number }>
}

export default function List({ value }: ListProps) {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: value.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();

  return <>
    <div
      ref={parentRef}
      className="List overflow-y-auto contain-strict"
      style={{ height: 400 }}
    >
      <div
        className="relative w-full"
        style={{
          height: `${totalSize}px`,
        }}
      >
        <div className="absolute top-0 left-0 w-full" style={{ transform: `translateY(${virtualItems[0]?.start ?? 0}px)` }}>
          {virtualItems.map((virtualRow) => {
            const item = value[virtualRow.index];

            return <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={rowVirtualizer.measureElement}
              className={virtualRow.index % 2 ? 'ListItemOdd' : 'ListItemEven'}
            >
              <div>{item.id} {item.userId} {item.completed ? 'true' : 'false'}</div>
              <div>{item.title}</div>
            </div>
          })}
        </div>
      </div>
    </div>
  </>
}
