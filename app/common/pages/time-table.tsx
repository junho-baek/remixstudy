import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/common/components/ui/table";

const days = ["월", "화", "수", "목", "금", "토", "일"];

// 30분 단위 시간 범위 설정
const hours = Array.from({ length: 48 }, (_, i) => {
  const startHour = Math.floor(i / 2);
  const startMinute = i % 2 === 0 ? "00" : "30";
  const endHour = i % 2 === 0 ? startHour : startHour + 1;
  const endMinute = i % 2 === 0 ? "30" : "00";
  return `${startHour}:${startMinute} - ${endHour}:${endMinute}`;
});

export default function ShadcnBitwiseTimeTable() {
  const [bitTable, setBitTable] = useState<bigint>(BigInt(0));
  const [dragging, setDragging] = useState(false);
  const [lastTouchedCell, setLastTouchedCell] = useState<{
    day: number;
    hour: number;
  } | null>(null);

  const getBitIndex = (dayIndex: number, halfHourIndex: number) =>
    dayIndex * 48 + halfHourIndex;

  const toggleBit = (dayIndex: number, halfHourIndex: number) => {
    const bitIndex = getBitIndex(dayIndex, halfHourIndex);
    setBitTable((prev) => prev ^ (BigInt(1) << BigInt(bitIndex))); // XOR 연산으로 토글
  };

  const handleMouseDown = (dayIndex: number, halfHourIndex: number) => {
    setDragging(true);
    toggleBit(dayIndex, halfHourIndex);
  };

  const handleMouseOver = (dayIndex: number, halfHourIndex: number) => {
    if (dragging) toggleBit(dayIndex, halfHourIndex);
  };

  const handleTouchStart = (dayIndex: number, halfHourIndex: number) => {
    setDragging(true);
    toggleBit(dayIndex, halfHourIndex);
    setLastTouchedCell({ day: dayIndex, hour: halfHourIndex });
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!dragging) return;

    const touch = event.touches[0];
    const target = document.elementFromPoint(
      touch.clientX,
      touch.clientY
    ) as HTMLTableCellElement;

    if (
      target &&
      target.dataset.day !== undefined &&
      target.dataset.hour !== undefined
    ) {
      const dayIndex = parseInt(target.dataset.day, 10);
      const halfHourIndex = parseInt(target.dataset.hour, 10);

      if (
        !lastTouchedCell ||
        lastTouchedCell.day !== dayIndex ||
        lastTouchedCell.hour !== halfHourIndex
      ) {
        toggleBit(dayIndex, halfHourIndex);
        setLastTouchedCell({ day: dayIndex, hour: halfHourIndex });
      }
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
    setLastTouchedCell(null);
  };

  return (
    <div
      className="p-6"
      onMouseUp={() => setDragging(false)}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="text-xl font-semibold mb-4">
        드래그 & 터치 지원 타임테이블 (30분 단위)
      </h2>
      <div className="space-y-2 mb-4">
        <p className="text-gray-500">10진수: {bitTable.toString()}</p>
        <p className="text-gray-500">2진수: {bitTable.toString(2)}</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="w-[120px] cursor-default select-none"
              onMouseDown={(e) => e.preventDefault()}
            >
              시간\요일
            </TableHead>
            {days.map((day) => (
              <TableHead
                key={day}
                className="text-center cursor-default select-none"
                onMouseDown={(e) => e.preventDefault()}
              >
                {day}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {hours.map((hour, halfHourIndex) => (
            <TableRow key={hour}>
              {/* 시간 헤더 (드래그 방지) */}
              <TableCell
                className="font-medium text-center cursor-default select-none"
                onMouseDown={(e) => e.preventDefault()}
              >
                {hour}
              </TableCell>
              {/* 시간표 셀 (드래그 가능) */}
              {days.map((day, dayIndex) => {
                const bitIndex = getBitIndex(dayIndex, halfHourIndex);
                const isActive =
                  (bitTable & (BigInt(1) << BigInt(bitIndex))) !== BigInt(0);
                return (
                  <TableCell
                    key={`${day}-${hour}`}
                    data-day={dayIndex}
                    data-hour={halfHourIndex}
                    className={`w-14 h-12 cursor-pointer text-center ${
                      isActive ? "bg-blue-500 text-white" : "bg-gray-100"
                    }`}
                    onMouseDown={() => handleMouseDown(dayIndex, halfHourIndex)}
                    onMouseOver={() => handleMouseOver(dayIndex, halfHourIndex)}
                    onTouchStart={() =>
                      handleTouchStart(dayIndex, halfHourIndex)
                    }
                    onTouchMove={handleTouchMove}
                  />
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
