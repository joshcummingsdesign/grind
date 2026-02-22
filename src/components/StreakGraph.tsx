"use client";

import { Paper, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import dayjs from "dayjs";
import { calculateMomentum } from "@/lib/momentum";

type StreakGraphProps = {
  completedDates: string[];
};

export const StreakGraph = ({ completedDates }: StreakGraphProps) => {
  const theme = useTheme();
  const data = calculateMomentum(completedDates);

  if (data.length === 0) {
    return (
      <GraphContainer>
        <Typography variant="subtitle2" color="text.secondary">
          Momentum (Workout Consistency)
        </Typography>
        <EmptyState>
          <Typography color="text.secondary">
            Complete your first workout to see your momentum graph
          </Typography>
        </EmptyState>
      </GraphContainer>
    );
  }

  return (
    <GraphContainer>
      <Typography variant="subtitle2" color="text.secondary">
        Momentum (Workout Consistency)
      </Typography>
      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              tickFormatter={(date: string) => dayjs(date).format("M/D/YY")}
              tick={{ fontSize: 12 }}
            />
            <YAxis domain={[0, "auto"]} tick={{ fontSize: 12 }} width={30} />
            <Tooltip
              labelFormatter={(label) => dayjs(String(label)).format("M/D/YY")}
              formatter={(value) =>
                typeof value === "number"
                  ? [value.toFixed(1), "Momentum"]
                  : [String(value), "Momentum"]
              }
              separator=": "
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={theme.palette.primary.main}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </GraphContainer>
  );
};

const GraphContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const ChartWrapper = styled("div")({
  height: 150,
  marginTop: 8,
});

const EmptyState = styled("div")(({ theme }) => ({
  height: 150,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(1),
}));
