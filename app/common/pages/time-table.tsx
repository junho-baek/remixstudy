import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/common/components/ui/table";
import { Button } from "~/common/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "~/common/components/ui/dialog";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";

interface TimeSlot {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  title: string;
  description?: string;
}

interface DragSelection {
  day: string;
  startTime: string;
  endTime: string;
}

const DAYS = ["월", "화", "수", "목", "금", "토", "일"];
const TIMES = Array.from(
  { length: 24 },
  (_, i) => `${i.toString().padStart(2, "0")}:00`
);

export default function TimeTable() {
  const [selectedSlots, setSelectedSlots] = useState<TimeSlot[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{
    day: string;
    time: string;
  } | null>(null);
  const [tempSelection, setTempSelection] = useState<DragSelection | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<Partial<TimeSlot>>({});

  const handleMouseDown = (day: string, time: string) => {
    // 이미 등록된 일정이 있는지 확인
    const existingSlot = selectedSlots.find((slot) => {
      const timeIndex = TIMES.indexOf(time);
      const startIndex = TIMES.indexOf(slot.startTime);
      const endIndex = TIMES.indexOf(slot.endTime);
      return (
        slot.day === day &&
        timeIndex >= Math.min(startIndex, endIndex) &&
        timeIndex <= Math.max(startIndex, endIndex)
      );
    });

    if (existingSlot) {
      // 기존 일정 클릭 시 수정 다이얼로그 열기
      setNewEvent(existingSlot);
      setIsDialogOpen(true);
      return;
    }

    setIsDragging(true);
    setDragStart({ day, time });
    setTempSelection({ day, startTime: time, endTime: time });
  };

  const handleMouseEnter = (day: string, time: string) => {
    if (isDragging && dragStart && dragStart.day === day) {
      setTempSelection({
        day,
        startTime: dragStart.time,
        endTime: time,
      });
    }
  };

  const handleMouseUp = () => {
    if (dragStart && isDragging && tempSelection) {
      const timeIndex = (time: string) => TIMES.indexOf(time);
      const start = timeIndex(tempSelection.startTime);
      const end = timeIndex(tempSelection.endTime);

      const [finalStart, finalEnd] =
        start <= end
          ? [tempSelection.startTime, tempSelection.endTime]
          : [tempSelection.endTime, tempSelection.startTime];

      setNewEvent({
        day: tempSelection.day,
        startTime: finalStart,
        endTime: finalEnd,
      });
      setIsDialogOpen(true);
    }
    setIsDragging(false);
    setDragStart(null);
    setTempSelection(null);
  };

  const handleSaveEvent = () => {
    if (
      newEvent.title &&
      newEvent.day &&
      newEvent.startTime &&
      newEvent.endTime
    ) {
      // 기존 일정 수정인 경우 해당 일정 삭제
      const updatedSlots = newEvent.id
        ? selectedSlots.filter((slot) => slot.id !== newEvent.id)
        : selectedSlots;

      setSelectedSlots([
        ...updatedSlots,
        {
          id: newEvent.id || crypto.randomUUID(),
          day: newEvent.day,
          startTime: newEvent.startTime,
          endTime: newEvent.endTime,
          title: newEvent.title,
          description: newEvent.description,
        } as TimeSlot,
      ]);
    }
    setIsDialogOpen(false);
    setNewEvent({});
  };

  const isTimeSlotSelected = (day: string, time: string) => {
    // 임시 선택 영역 확인
    if (tempSelection && tempSelection.day === day) {
      const timeIndex = TIMES.indexOf(time);
      const startIndex = TIMES.indexOf(tempSelection.startTime);
      const endIndex = TIMES.indexOf(tempSelection.endTime);
      if (
        timeIndex >= Math.min(startIndex, endIndex) &&
        timeIndex <= Math.max(startIndex, endIndex)
      ) {
        return true;
      }
    }

    // 저장된 일정 확인
    return selectedSlots.some((slot) => {
      const timeIndex = TIMES.indexOf(time);
      const startIndex = TIMES.indexOf(slot.startTime);
      const endIndex = TIMES.indexOf(slot.endTime);
      return (
        slot.day === day &&
        timeIndex >= Math.min(startIndex, endIndex) &&
        timeIndex <= Math.max(startIndex, endIndex)
      );
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">시간표</h1>
        <div className="rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">시간</TableHead>
                {DAYS.map((day) => (
                  <TableHead key={day} className="text-center">
                    {day}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {TIMES.map((time) => (
                <TableRow key={time}>
                  <TableCell className="font-medium">{time}</TableCell>
                  {DAYS.map((day) => (
                    <TableCell
                      key={`${day}-${time}`}
                      className={`border cursor-pointer transition-colors hover:bg-muted ${
                        isTimeSlotSelected(day, time) ? "bg-primary/20" : ""
                      }`}
                      onMouseDown={() => handleMouseDown(day, time)}
                      onMouseEnter={() => handleMouseEnter(day, time)}
                      onMouseUp={handleMouseUp}
                    >
                      {selectedSlots.map((slot) =>
                        slot.day === day && slot.startTime === time ? (
                          <div key={slot.id} className="p-1 text-sm">
                            {slot.title}
                          </div>
                        ) : null
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>일정 추가</DialogTitle>
              <DialogDescription>
                새로운 일정의 세부사항을 입력해주세요.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">제목</Label>
                <Input
                  id="title"
                  value={newEvent.title || ""}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">설명</Label>
                <Input
                  id="description"
                  value={newEvent.description || ""}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                취소
              </Button>
              <Button onClick={handleSaveEvent}>저장</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
