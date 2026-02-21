import { Workout } from "@/types";

export const workouts: Workout[] = [
  {
    id: "pull",
    name: "Pull Chain",
    description:
      "Develops pulling strength through the back and biceps. Focuses on scapular control and horizontal/vertical pulling patterns.",
    phases: {
      tensionControl: {
        levels: {
          1: {
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
          2: {
            exercises: [
              {
                name: "Banded Scap Movements",
                description:
                  "Hold a resistance band with arms extended. Protract and retract shoulder blades against band resistance.",
              },
              {
                name: "Extended Iso Holds",
                description:
                  "Hold start and end positions of a row for 15-20 seconds each. Increase time under tension.",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Weighted Scap Movements",
                description:
                  "Hold light dumbbells while performing scapular protraction and retraction. Focus on control.",
              },
              {
                name: "Pause Rep Rows",
                description:
                  "Perform rows with a 3-second pause at both the start and end positions of each rep.",
              },
            ],
          },
        },
      },
      stability: {
        levels: {
          1: {
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
          2: {
            exercises: [
              {
                name: "Hanging Scap Pull Holds",
                description:
                  "Perform scap pulls and hold the top position for 5 seconds before lowering.",
              },
              {
                name: "Single Arm Hang Shifts",
                description:
                  "Shift more weight to one arm, approaching a single arm hang briefly before shifting back.",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Archer Hang Scap Pulls",
                description:
                  "In an archer hang position, perform scap pulls emphasizing one side at a time.",
              },
              {
                name: "Hanging Circles",
                description:
                  "While hanging, make small controlled circles with your body using scapular control.",
              },
            ],
          },
        },
      },
      strength: {
        levels: {
          1: {
            exercises: [
              {
                name: "Incline Row",
                description:
                  "Set up at an incline (using a bar or rings at waist height). Pull your chest to the bar/rings while keeping your body straight. Lower with control.",
                sets: 3,
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Horizontal Row",
                description:
                  "Set up with bar or rings at hip height. Body parallel to ground. Pull chest to bar/rings maintaining straight body line.",
                sets: 3,
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Feet Elevated Row",
                description:
                  "Perform rows with feet elevated on a box or bench. Increases difficulty by changing leverage angle.",
                sets: 3,
              },
            ],
          },
        },
      },
      conditioning: {
        levels: {
          1: {
            exercises: [
              {
                name: "Vertical Pulls",
                description:
                  "Perform pull-ups or assisted pull-ups, focusing on full range of motion. Can use a band or machine for assistance.",
                target: "10-15",
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Pull-up Negatives",
                description:
                  "Jump or step to the top of a pull-up, then lower as slowly as possible (5+ seconds).",
                target: "8-12",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Strict Pull-ups",
                description:
                  "Full pull-ups with no assistance. Focus on dead hang start and chin over bar.",
                target: "5-10",
              },
            ],
          },
        },
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
        levels: {
          1: {
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
          2: {
            exercises: [
              {
                name: "Plank Scap Push-ups",
                description:
                  "In plank position, perform scapular protraction and retraction while maintaining core tension.",
              },
              {
                name: "Extended Iso Holds",
                description:
                  "Hold top and bottom push-up positions for 15-20 seconds each.",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Decline Scap Push-ups",
                description:
                  "Feet elevated on a box, perform scapular movements with increased load.",
              },
              {
                name: "Pause Rep Push-ups",
                description:
                  "Push-ups with a 3-second pause at both top and bottom positions.",
              },
            ],
          },
        },
      },
      stability: {
        levels: {
          1: {
            exercises: [
              {
                name: "Pushup Start Shift Left/Right",
                description:
                  "In the top push-up position, shift your weight to one hand, then the other. Keep your hips level and core engaged.",
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Shoulder Tap Push-up Position",
                description:
                  "In push-up position, lift one hand to tap opposite shoulder while maintaining stability. Alternate sides.",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Single Arm Push-up Hold",
                description:
                  "Hold push-up position while lifting one arm off the ground. Work toward longer holds.",
              },
            ],
          },
        },
      },
      strength: {
        levels: {
          1: {
            exercises: [
              {
                name: "Incline Push-ups",
                description:
                  "Place hands on an elevated surface (bench, step, or wall). Perform push-ups maintaining a straight body line. Lower surface = harder.",
                sets: 3,
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Floor Push-ups",
                description:
                  "Standard push-ups on the floor. Full range of motion, chest to ground, arms fully extended at top.",
                sets: 3,
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Decline Push-ups",
                description:
                  "Feet elevated on a box or bench. Increased load on chest and shoulders.",
                sets: 3,
              },
            ],
          },
        },
      },
      conditioning: {
        levels: {
          1: {
            exercises: [
              {
                name: "Wall Pushups",
                description:
                  "Stand facing a wall, arms extended. Lean in and push back out. Focus on controlled movement and full range of motion.",
                target: "10-15",
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Knee Push-ups",
                description:
                  "Push-ups from the knees. Maintain straight line from knees to shoulders.",
                target: "10-15",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Push-up AMRAP",
                description:
                  "As many full push-ups as possible with good form. Rest as needed.",
                target: "Max reps",
              },
            ],
          },
        },
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
        levels: {
          1: {
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
          2: {
            exercises: [
              {
                name: "Slow Cat Cow",
                description:
                  "Cat Cow with 5-second holds at each end position. Focus on segmental spinal movement.",
              },
              {
                name: "L-Sit Floor Press",
                description:
                  "Legs extended in front, press hands into floor and try to lift hips slightly off ground.",
              },
              {
                name: "Bear Position Press",
                description:
                  "Knees hovering 1 inch off ground, press the ground away and round upper back.",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Loaded Cat Cow",
                description:
                  "Cat Cow with resistance band around upper back for added challenge.",
              },
              {
                name: "L-Sit Attempts",
                description:
                  "Work toward lifting hips completely off ground in L-sit position.",
              },
              {
                name: "Bear Crawl Press",
                description:
                  "In bear crawl position, alternate pressing through each hand while maintaining position.",
              },
            ],
          },
        },
      },
      stability: {
        levels: {
          1: {
            exercises: [
              {
                name: "Crawling",
                description:
                  "Bear crawl forward and backward, keeping your knees just off the ground. Maintain a flat back and move opposite hand/foot together.",
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Slow Bear Crawl",
                description:
                  "Bear crawl with 2-second pause after each step. Focus on stability.",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Bear Crawl with Rotation",
                description:
                  "Bear crawl with a thoracic rotation reach after every 2-3 steps.",
              },
            ],
          },
        },
      },
      strength: {
        levels: {
          1: {
            exercises: [
              {
                name: "Hollow Body Hold",
                description:
                  "Lie on your back, press lower back into floor. Lift shoulders and legs off ground, arms by ears. Hold this banana shape.",
                sets: 3,
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Hollow Body Rocks",
                description:
                  "In hollow body position, rock forward and back while maintaining the shape.",
                sets: 3,
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Hollow to Arch Rolls",
                description:
                  "Roll from hollow body to superman position and back without using hands or feet.",
                sets: 3,
              },
            ],
          },
        },
      },
      conditioning: {
        levels: {
          1: {
            exercises: [
              {
                name: "Plank",
                description:
                  "Hold a forearm plank position with body in a straight line. Squeeze glutes, brace core, and breathe steadily.",
                target: "20-30s",
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Plank Shoulder Taps",
                description:
                  "In high plank, tap opposite shoulder with each hand while maintaining stable hips.",
                target: "30-45s",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Plank to Pike",
                description:
                  "From plank, pike hips up toward ceiling then return to plank. Continuous movement.",
                target: "45-60s",
              },
            ],
          },
        },
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
        levels: {
          1: {
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
          2: {
            exercises: [
              {
                name: "Pulsing Stand Tight",
                description:
                  "Stand tight position with pulsing contractions. Squeeze maximally for 2 seconds, release slightly, repeat.",
              },
              {
                name: "Good Morning Iso",
                description:
                  "Hinge to 45 degrees and hold position while maintaining tension. Work up to 20-second holds.",
              },
              {
                name: "Wall Angels",
                description:
                  "Back against wall, arms in W position. Slide arms up to Y and back down while keeping contact with wall.",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Single Leg Stand Tight",
                description:
                  "Stand tight position on one leg. Create maximum tension while maintaining balance.",
              },
              {
                name: "Good Morning Pulses",
                description:
                  "At bottom of good morning, pulse up and down 2-3 inches while maintaining tension.",
              },
              {
                name: "Prone Y Raises",
                description:
                  "Lying face down, lift arms into Y position and hold. Squeeze shoulder blades together.",
              },
            ],
          },
        },
      },
      stability: {
        levels: {
          1: {
            exercises: [
              {
                name: "Crab Walk",
                description:
                  "Sit with hands behind you, feet flat. Lift hips and walk forward/backward in this crab position. Keep hips high.",
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Crab Hip Circles",
                description:
                  "In crab position, make circles with your hips while keeping hands and feet planted.",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Single Leg Crab Hold",
                description:
                  "In crab position, lift one foot off ground and hold. Alternate legs.",
              },
            ],
          },
        },
      },
      strength: {
        levels: {
          1: {
            exercises: [
              {
                name: "Straight Leg Hip Bridge",
                description:
                  "Lie on back, legs straight. Lift hips by squeezing glutes until body forms a line from shoulders to feet. Lower with control.",
                sets: 3,
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Single Leg Hip Bridge",
                description:
                  "Hip bridge with one leg extended. Drive through planted foot, keep hips level.",
                sets: 3,
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Hip Bridge March",
                description:
                  "In bridge position, alternate lifting each foot while maintaining hip height.",
                sets: 3,
              },
            ],
          },
        },
      },
      conditioning: {
        levels: {
          1: {
            exercises: [
              {
                name: "Hamstring Curls",
                description:
                  "Lie face down and curl heels toward glutes. Can use a band, slider, or stability ball for resistance.",
                target: "10-15",
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Nordic Curl Negatives",
                description:
                  "Kneel with feet anchored, slowly lower body forward as far as controllable, catch with hands.",
                target: "5-8",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Slider Hamstring Curls",
                description:
                  "Lie on back, heels on sliders. Bridge up and curl heels toward glutes.",
                target: "8-12",
              },
            ],
          },
        },
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
        levels: {
          1: {
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
          2: {
            exercises: [
              {
                name: "Banded Hip Abduction",
                description:
                  "Standing hip abduction with resistance band around ankles for added challenge.",
              },
              {
                name: "Wall Press Iso",
                description:
                  "Stand sideways to wall, press outside of foot into wall. Hold isometric contraction.",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Single Leg Balance Abduction",
                description:
                  "Balance on one leg while performing hip abduction with the other. Focus on stability.",
              },
              {
                name: "Side Lying Hip Iso",
                description:
                  "Side lying, lift top leg and hold at maximum height. Work up to 30-second holds.",
              },
            ],
          },
        },
      },
      stability: {
        levels: {
          1: {
            exercises: [
              {
                name: "T Planks",
                description:
                  "From a push-up position, rotate into a side plank, reaching top arm to ceiling. Return to center and repeat other side.",
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "T Plank with Reach Under",
                description:
                  "T plank rotation with bottom arm reaching under body before rotating back up.",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "T Plank with Leg Lift",
                description:
                  "In side plank position of T plank, lift top leg before rotating back to center.",
              },
            ],
          },
        },
      },
      strength: {
        levels: {
          1: {
            exercises: [
              {
                name: "Wide Stance Side Plank",
                description:
                  "Side plank with feet stacked or staggered for stability. Keep hips high and body in a straight line. Hold each side.",
                sets: 3,
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Side Plank",
                description:
                  "Standard side plank with feet stacked. Maintain straight line from head to feet.",
                sets: 3,
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Side Plank Hip Dips",
                description:
                  "In side plank, lower hip toward ground then raise back up. Control the movement.",
                sets: 3,
              },
            ],
          },
        },
      },
      conditioning: {
        levels: {
          1: {
            exercises: [
              {
                name: "Strap Hip Abduction",
                description:
                  "Using a resistance band around ankles or a cable machine, lift leg out to the side against resistance. Control the return.",
                target: "10-15",
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Lateral Band Walks",
                description:
                  "Band around ankles, walk sideways maintaining tension. Keep feet parallel.",
                target: "20 steps each way",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Copenhagen Plank",
                description:
                  "Side plank with top leg on a bench. Lift bottom leg to meet top leg.",
                target: "15-20s each side",
              },
            ],
          },
        },
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
        levels: {
          1: {
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
          2: {
            exercises: [
              {
                name: "Squat Tight",
                description:
                  "Hold bottom of squat position and create maximum tension throughout body. Hold for 10-15 seconds.",
              },
              {
                name: "Split Squat Iso",
                description:
                  "Hold bottom of split squat with maximum tension. 15-20 seconds each leg.",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Pistol Position Iso",
                description:
                  "Hold bottom of assisted pistol squat position. Create tension throughout working leg.",
              },
              {
                name: "Deep Lunge Pulse",
                description:
                  "In deep lunge, pulse up and down 2-3 inches while maintaining tension.",
              },
            ],
          },
        },
      },
      stability: {
        levels: {
          1: {
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
          2: {
            exercises: [
              {
                name: "Single Leg Stand Eyes Closed",
                description:
                  "Balance on one leg with eyes closed. Work up to 30-second holds.",
              },
              {
                name: "Lunge with Rotation",
                description:
                  "In lunge position, rotate torso toward front leg while maintaining balance.",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Single Leg Squat Touch",
                description:
                  "Stand on one leg, squat down and touch ground beside standing foot, return to standing.",
              },
              {
                name: "Walking Lunge with Pause",
                description:
                  "Walking lunges with a 3-second pause at bottom of each rep.",
              },
            ],
          },
        },
      },
      strength: {
        levels: {
          1: {
            exercises: [
              {
                name: "Assisted Squat",
                description:
                  "Hold onto a doorframe, pole, or suspension trainer. Squat down as low as comfortable, using arms for balance assistance only.",
                sets: 3,
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Air Squat",
                description:
                  "Bodyweight squat to parallel or below. Focus on keeping chest up and knees tracking over toes.",
                sets: 3,
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Pause Squat",
                description:
                  "Air squat with a 3-second pause at the bottom. Maintain tension throughout the pause.",
                sets: 3,
              },
            ],
          },
        },
      },
      conditioning: {
        levels: {
          1: {
            exercises: [
              {
                name: "Squat Jumps",
                description:
                  "Squat down then explode upward into a jump. Land softly and immediately descend into the next rep. Maintain good form.",
                target: "20-30s",
              },
            ],
          },
          2: {
            exercises: [
              {
                name: "Jump Squats",
                description:
                  "Continuous squat jumps focusing on height and soft landings.",
                target: "30-45s",
              },
            ],
          },
          3: {
            exercises: [
              {
                name: "Squat Jump Burpees",
                description:
                  "Squat jump immediately into a burpee, then back to squat jump. Continuous movement.",
                target: "45-60s",
              },
            ],
          },
        },
      },
    },
  },
];
