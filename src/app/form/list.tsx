'use client'
import { useRef } from "react"
import { useVirtualizer } from '@tanstack/react-virtual';

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
      className="List overflow-auto h-400"
    >
      <div
        style={{
          height: `${totalSize}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualItems.map((virtualRow) => (
          <div
            key={virtualRow.index}
            className={virtualRow.index % 2 ? 'ListItemOdd' : 'ListItemEven'}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            Row {virtualRow.index}
          </div>
        ))}
      </div>
    </div>
  </>
}
