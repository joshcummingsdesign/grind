import { Workout } from "@/types";

export const workouts: Workout[] = [
  {
    id: "pull",
    name: "Pull Chain",
    description:
      "Develops pulling strength through the back and biceps. Focuses on scapular control and horizontal/vertical pulling patterns.",
    phases: {
      tensionControl: {
        exercises: [
          {
            name: "Scap Movements",
            description:
              "Stand with arms extended forward. Protract your shoulder blades (push them apart), then retract them (squeeze together). Move slowly and deliberately.",
          },
          {
            name: "Start/End Iso",
            description:
              "Hold the start position of a row for 5-10 seconds, then hold the end position (fully contracted) for 5-10 seconds. Focus on tension throughout.",
          },
        ],
      },
      stability: {
        exercises: [
          {
            name: "Hanging Scap Pulls",
            description:
              "Hang from a bar with arms straight. Without bending your elbows, pull your shoulder blades down and together, lifting your body slightly. Release and repeat.",
          },
          {
            name: "Hanging Shift Left/Right",
            description:
              "While hanging from a bar, shift your weight to one side, then the other. Keep your core engaged and movement controlled.",
          },
        ],
      },
      strength: {
        levels: {
          1: {
            exercise: {
              name: "Incline Row",
              description:
                "Set up at an incline (using a bar or rings at waist height). Pull your chest to the bar/rings while keeping your body straight. Lower with control.",
              sets: 3,
            },
          },
        },
      },
      finisher: {
        exercises: [
          {
            name: "Vertical Pulls",
            description:
              "Perform pull-ups or assisted pull-ups, focusing on full range of motion. Can use a band or machine for assistance.",
            target: "10-15",
          },
        ],
      },
    },
  },
  {
    id: "push",
    name: "Push Chain",
    description:
      "Develops pushing strength through the chest, shoulders, and triceps. Emphasizes scapular stability and horizontal pressing patterns.",
    phases: {
      tensionControl: {
        exercises: [
          {
            name: "Scap Movements",
            description:
              "In a push-up position, protract your shoulder blades (push the ground away), then retract them. Keep arms straight throughout.",
          },
          {
            name: "Start/End Iso",
            description:
              "Hold the top of a push-up for 5-10 seconds, then hold the bottom position for 5-10 seconds. Maintain full body tension.",
          },
        ],
      },
      stability: {
        exercises: [
          {
            name: "Pushup Start Shift Left/Right",
            description:
              "In the top push-up position, shift your weight to one hand, then the other. Keep your hips level and core engaged.",
          },
        ],
      },
      strength: {
        levels: {
          1: {
            exercise: {
              name: "Incline Push-ups",
              description:
                "Place hands on an elevated surface (bench, step, or wall). Perform push-ups maintaining a straight body line. Lower surface = harder.",
              sets: 3,
            },
          },
        },
      },
      finisher: {
        exercises: [
          {
            name: "Wall Pushups",
            description:
              "Stand facing a wall, arms extended. Lean in and push back out. Focus on controlled movement and full range of motion.",
            target: "10-15",
          },
        ],
      },
    },
  },
  {
    id: "flexion",
    name: "Flexion Chain",
    description:
      "Develops core flexion strength and spinal mobility. Focuses on the anterior chain and hollow body positioning.",
    phases: {
      tensionControl: {
        exercises: [
          {
            name: "Cat Cow",
            description:
              "On hands and knees, alternate between arching your back (cat) and dropping your belly (cow). Move slowly through full range.",
          },
          {
            name: "Seated Floor Press",
            description:
              "Sit on the floor with legs extended. Press your hands into the ground beside your hips, engaging your core and pressing your lower back down.",
          },
          {
            name: "Table Top Press",
            description:
              "In a table top position (on hands and knees), press the ground away and round your upper back. Hold tension briefly.",
          },
        ],
      },
      stability: {
        exercises: [
          {
            name: "Crawling",
            description:
              "Bear crawl forward and backward, keeping your knees just off the ground. Maintain a flat back and move opposite hand/foot together.",
          },
        ],
      },
      strength: {
        levels: {
          1: {
            exercise: {
              name: "Hollow Body Hold",
              description:
                "Lie on your back, press lower back into floor. Lift shoulders and legs off ground, arms by ears. Hold this banana shape.",
              sets: 3,
            },
          },
        },
      },
      finisher: {
        exercises: [
          {
            name: "Plank",
            description:
              "Hold a forearm plank position with body in a straight line. Squeeze glutes, brace core, and breathe steadily.",
            target: "20-30s",
          },
        ],
      },
    },
  },
  {
    id: "extension",
    name: "Extension Chain",
    description:
      "Develops posterior chain strength and spinal extension. Focuses on glutes, hamstrings, and back extensors.",
    phases: {
      tensionControl: {
        exercises: [
          {
            name: "Stand Tight",
            description:
              "Stand tall and squeeze every muscle - glutes, quads, core, fists. Hold maximum tension for 5-10 seconds, then release.",
          },
          {
            name: "Bend Over Tension",
            description:
              "Hinge at hips with slight knee bend. In this position, create tension through your entire posterior chain. Hold briefly.",
          },
          {
            name: "Hands Clasped",
            description:
              "Clasp hands behind your back, squeeze shoulder blades together, and lift hands away from body. Hold and breathe.",
          },
        ],
      },
      stability: {
        exercises: [
          {
            name: "Crab Walk",
            description:
              "Sit with hands behind you, feet flat. Lift hips and walk forward/backward in this crab position. Keep hips high.",
          },
        ],
      },
      strength: {
        levels: {
          1: {
            exercise: {
              name: "Straight Leg Hip Bridge",
              description:
                "Lie on back, legs straight. Lift hips by squeezing glutes until body forms a line from shoulders to feet. Lower with control.",
              sets: 3,
            },
          },
        },
      },
      finisher: {
        exercises: [
          {
            name: "Hamstring Curls",
            description:
              "Lie face down and curl heels toward glutes. Can use a band, slider, or stability ball for resistance.",
            target: "10-15",
          },
        ],
      },
    },
  },
  {
    id: "lateral",
    name: "Lateral Chain",
    description:
      "Develops lateral stability and hip strength. Focuses on the obliques, hip abductors, and lateral movement patterns.",
    phases: {
      tensionControl: {
        exercises: [
          {
            name: "Standing Hip Abduction",
            description:
              "Stand on one leg, lift the other leg out to the side. Hold briefly at the top, focusing on hip engagement. Switch sides.",
          },
          {
            name: "Countertop Pressing",
            description:
              "Stand sideways to a countertop. Press your hip into the edge while resisting with your core. Hold tension on each side.",
          },
        ],
      },
      stability: {
        exercises: [
          {
            name: "T Planks",
            description:
              "From a push-up position, rotate into a side plank, reaching top arm to ceiling. Return to center and repeat other side.",
          },
        ],
      },
      strength: {
        levels: {
          1: {
            exercise: {
              name: "Wide Stance Side Plank",
              description:
                "Side plank with feet stacked or staggered for stability. Keep hips high and body in a straight line. Hold each side.",
              sets: 3,
            },
          },
        },
      },
      finisher: {
        exercises: [
          {
            name: "Strap Hip Abduction",
            description:
              "Using a resistance band around ankles or a cable machine, lift leg out to the side against resistance. Control the return.",
            target: "10-15",
          },
        ],
      },
    },
  },
  {
    id: "squat",
    name: "Squat Chain",
    description:
      "Develops lower body strength through squatting patterns. Focuses on hip mobility, quad and glute strength, and balance.",
    phases: {
      tensionControl: {
        exercises: [
          {
            name: "Stand Tight",
            description:
              "Stand tall and squeeze every muscle - glutes, quads, core, fists. Hold maximum tension for 5-10 seconds, then release.",
          },
          {
            name: "Lunge Tight",
            description:
              "In a lunge position, create maximum tension through both legs and core. Hold briefly, then switch legs.",
          },
        ],
      },
      stability: {
        exercises: [
          {
            name: "Standing Leg Circles",
            description:
              "Balance on one leg, draw circles with the other foot. Start small, gradually increase size. Switch directions and legs.",
          },
          {
            name: "Shifting Lunge",
            description:
              "In a lunge position, shift your weight forward and back without moving your feet. Control the movement throughout.",
          },
        ],
      },
      strength: {
        levels: {
          1: {
            exercise: {
              name: "Assisted Squat",
              description:
                "Hold onto a doorframe, pole, or suspension trainer. Squat down as low as comfortable, using arms for balance assistance only.",
              sets: 3,
            },
          },
        },
      },
      finisher: {
        exercises: [
          {
            name: "Squat Jumps",
            description:
              "Squat down then explode upward into a jump. Land softly and immediately descend into the next rep. Maintain good form.",
            target: "20-30s",
          },
        ],
      },
    },
  },
];
