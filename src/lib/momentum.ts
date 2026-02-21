const DECAY_FACTOR = 0.95;

export type MomentumPoint = {
  date: string;
  value: number;
};

export const calculateMomentum = (
  completedDates: string[]
): MomentumPoint[] => {
  if (completedDates.length === 0) {
    return [];
  }

  const sortedDates = [...completedDates].sort();
  const completedSet = new Set(sortedDates);

  const startDate = new Date(sortedDates[0]);
  const endDate = new Date();
  const points: MomentumPoint[] = [];

  let value = 0;
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const dateStr = currentDate.toISOString().split("T")[0];

    if (completedSet.has(dateStr)) {
      value += 1;
    } else {
      value *= DECAY_FACTOR;
    }

    points.push({ date: dateStr, value: Math.round(value * 100) / 100 });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return points;
};
