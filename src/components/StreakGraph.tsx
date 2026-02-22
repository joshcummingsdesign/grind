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
        <Typography variant="body2">
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
      <Typography variant="body2">
        Momentum (Workout Consistency)
      </Typography>
      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              tickFormatter={(date: string) => dayjs(date).format("M/D/YY")}
              tick={{ fontSize: 12, fill: theme.palette.text.secondary }}
              stroke={theme.palette.text.secondary}
            />
            <YAxis domain={[0, "auto"]} tick={{ fontSize: 12, fill: theme.palette.text.secondary }} width={30} stroke={theme.palette.text.secondary} />
            <Tooltip
              labelFormatter={(label) => dayjs(String(label)).format("M/D/YY")}
              formatter={(value) =>
                typeof value === "number"
                  ? [value.toFixed(1), "Momentum"]
                  : [String(value), "Momentum"]
              }
              separator=": "
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.grey[700]}`,
                borderRadius: theme.shape.borderRadius,
                color: theme.palette.text.primary,
              }}
              labelStyle={{ color: theme.palette.text.primary }}
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
  backgroundColor: theme.palette.grey[900],
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(1),
}));
