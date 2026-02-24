import { Workout } from "@/types";

export const workouts: Workout[] = [
  {
    id: "push",
    name: "Push Chain",
    description:
      "The push chain includes your chest, shoulders, triceps, and extensor muscles in your forearm. The primary function of your push chain is to move your hands away from your torso in any direction. The most common motions include pushing against an object, like opening a door, punching, and reaching up above you.",
    phases: {
      tensionControl: {
        levels: {
          1: {
            exercises: [
              {
                name: "Scap Push-ups",
                description:
                  "In a push-up position, protract your shoulder blades (push the ground away), then retract them. Keep arms straight throughout.",
              },
              {
                name: "Push-up Start/End Iso",
                description:
                  "Hold the top of a push-up for 5-10 seconds, then hold the bottom position for 5-10 seconds. Maintain full body tension.",
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
                name: "Push-up Shift Left/Right",
                description:
                  "In the bottom push-up position, shift your weight to one hand, then the other. Keep your hips level and core engaged. Use your knees for assistance if necessary.",
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
                  "Place hands on an elevated surface (bench, step, or table). Perform push-ups maintaining a straight body line.",
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
                name: "Wall Push-ups",
                description:
                  "Stand facing a wall with your arms extended and place your hands on the wall. Lower yourself toward the wall and push back out. Focus on controlled movement and full range of motion.",
                target: "10-15",
              },
            ],
          },
        },
      },
      cardio: {
        levels: {
          1: {
            exercises: [
              {
                name: "Run",
                description: "Go for a run or a jog.",
              },
            ],
          },
        },
      },
    },
  },
  {
    id: "pull",
    name: "Pull Chain",
    description:
      "You pull chain is on the opposite end of the functional spectrum from your push chain. It includes all of the muscles in your back, shoulders, biceps, and forearm muscles that close your hand into a grip. While the push chain is about pushing your hands away from your torso, your pull chain pulls your hands closer to your torso in any direction. This action naturally occurs when you pull something to yourself or pull yourself upward, but it's also involved in all forms of carrying and holding onto something.",
    phases: {
      tensionControl: {
        levels: {
          1: {
            exercises: [
              {
                name: "Hands Clasped Scap Movements",
                description:
                  "Clasp your hands behind your back and pull your shoulders down and back with all of the muscles in your back. After a few seconds, tense the muscles in your chest and pull your shoulders forward and down. Spend about a minute or so moving your shoulders front to back while keeping your shoulders down and away from your ears as you flex the muscles in your chest and back.",
              },
              {
                name: "Incline Row Start/End Iso",
                description:
                  "Hold the start position of a row for 5-10 seconds, then hold the end position (fully contracted) for 5-10 seconds. Focus on tension throughout.",
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
        },
      },
      strength: {
        levels: {
          1: {
            exercises: [
              {
                name: "Incline Row",
                description:
                  "Set up at an incline using rings at waist height. Pull your chest to the rings while keeping your body straight. Lower with control.",
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
                  "Set up at a slight incline and grab a pole or doorframe in front of you. Pull your chest to the pole or doorframe while keeping your body straight. Lower with control.",
                target: "10-15",
              },
            ],
          },
        },
      },
      cardio: {
        levels: {
          1: {
            exercises: [
              {
                name: "Run",
                description: "Go for a run or a jog.",
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
      "Your foundational movement chain is your squat chain. It comprises every muscle from your waist down, including your hips, glutes, quads, hamstrings, calves, and even the muscles in your feet. Your squat chain's functional purpose is to do everything from walking and running to stepping up and crouching down. Anything that you do with your legs involves your squat chain. Even everyday actions like standing still or getting out of your car require your squat chain.",
    phases: {
      tensionControl: {
        levels: {
          1: {
            exercises: [
              {
                name: "Stand Tight",
                description:
                  "Stand and shift your weight to one leg. Tense your entire leg, including the muscles in your hips and feet, as if it turned to stone.",
              },
              {
                name: "Lunge Tight",
                description:
                  "Get into a deep lunge position with the top of your back foot resting on the ground. Apply downward force into your front foot keeping your heel on the ground, and tense your entire leg as if it turned to stone.",
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
                  "Stand on one leg and draw full circles with the non-supporting knee.",
              },
              {
                name: "Shifting Lunge",
                description:
                  "Lunge tight to create a stable foundation, and then shift your body weight around. You can go forward and back, twist side to side, or just play and have fun with it.",
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
                  "Hold onto something in front of you (table, doorframe, pole, or rings). Squat down as low as comfortable, using arms for balance assistance only.",
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
        },
      },
      cardio: {
        levels: {
          1: {
            exercises: [
              {
                name: "Run",
                description: "Go for a run or a jog.",
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
      'Your flexion chain is the opposite in function and physiology to your extension chain. It\'s a chain that runs along the front side of your body, including the front of your neck, abdominals, hip flexors, quads, and the muscles in your shins. Functionally, this is your "abdominal" chain that helps you flex your body forward, like when you sit up out of bed or lift your legs. It plays a dominant supportive role by maintaining a straight posture when gravity pulls your hips down and forward, like when doing push-ups or slouching forward.',
    phases: {
      tensionControl: {
        levels: {
          1: {
            exercises: [
              {
                name: "Cat Cow",
                description:
                  "On hands and knees, alternate between lifting your belly and rounding your back (cat) and dropping your belly and arching your back (cow). Move slowly through full range.",
              },
              {
                name: "Seated Floor Press",
                description:
                  "Sit on the floor with legs extended. Press your hands into the ground beside your hips, engaging your core and lifting your feet off the ground.",
              },
              {
                name: "Table Top Press",
                description:
                  "Stand about a foot away from a counter or table and place your hands flat with your palms down. Press your hands downward using isometric tension in your arms, shoulders, abs and hips. You may also find it's more effective to pick up the front of your feet to improve the tension in your shins and quads.",
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
                  "Get into a crawling position with your knees barely hovering off the ground. Then crawl forward, backward, left, and right. Have fun with it.",
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
        },
      },
      cardio: {
        levels: {
          1: {
            exercises: [
              {
                name: "Run",
                description: "Go for a run or a jog.",
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
      "Your extension chain runs along your entire backside from the top of your head down to the bottom of your feet and includes your toe flexors, calves, hamstrings, glutes, spine erectors, and the muscles in the back of your neck. Its primary function is to extend your body into an upright position and help you bend backward. Much of the time, it's working to help you maintain an upright posture without bending forward.",
    phases: {
      tensionControl: {
        levels: {
          1: {
            exercises: [
              {
                name: "Stand Tight",
                description:
                  "Place one leg a few inches behind the other. Drive your weight into the heel of your back foot, sort of like you're trying to spread the floor apart with your feet. Do this while placing tension along the entire backside of your back leg, including your calves, hamstrings, and glutes. Hold for a few moments and then switch to do the same on the other side.",
              },
              {
                name: "Bend Over Tension",
                description:
                  "Hinge at hips with slight knee bend. In this position, create tension through your entire posterior chain. Hold briefly.",
              },
              {
                name: "Hands Clasped",
                description:
                  "Clasp hands behind your back, squeeze shoulder blades together, lift your chest up and pull your hands down. Try not to pinch your lower back. Instead, arch throughout your whole spine.",
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
                  "Sit with hands behind you, feet flat. Lift hips and walk forward and backward in this crab position. Keep hips high.",
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
                  "Sit down with your legs straight and your hands slightly behind your hips. Lift your hips by squeezing your glutes until your body forms a line from shoulders to feet. Lower with control.",
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
                  "Lie down on your back with your feet placed in a pair of rings a foot or so off the ground. Start with your legs extended, and pull your feet toward your butt. Extend your legs to return to the starting position.",
                target: "10-15",
              },
            ],
          },
        },
      },
      cardio: {
        levels: {
          1: {
            exercises: [
              {
                name: "Run",
                description: "Go for a run or a jog.",
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
      "Your lateral chain comprises several of the muscles in both your flexion and extension chain. Still, the use of tension is different due to your relationship to the resistance on your body. Some of the most notable muscles include the adductors and abductors in your hips, obliques, spinal erectors, and shoulder muscles. Some of your more prominent back muscles, like your lats, can also play a role in your lateral stability. From a functional standpoint, your lateral chain does a lot, including twisting and rotational movements. It also helps to provide lateral support during unilateral activities where you use one limb differently than another.",
    phases: {
      tensionControl: {
        levels: {
          1: {
            exercises: [
              {
                name: "Standing Hip Abduction",
                description:
                  "Stand with your weight equally distributed between your feet about shoulder width apart. Apply tension to your hips as if you're trying to spread the floor apart with your feet. It's helpful to maintain tension along your squat chain so fill your legs with tension including your glutes.",
              },
              {
                name: "Countertop Pressing",
                description:
                  "Stand with your side facing a table or countertop, and lean and press down into the countertop to apply tension to the whole side of your body. You should feel your obliques and spinal muscles contract while doing this.",
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
                  "From the top of a push-up position, rotate into a side plank, reaching top arm to ceiling. Return to center and repeat other side.",
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
                  "Side plank with your feet wide for stability. Keep hips high and body in a straight line. Hold each side.",
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
                name: "Ring Hip Abduction",
                description:
                  "Set up with rings as you would for hamstring curls, but instead of pulling, push your feet apart with your toes pointing upwards.",
                target: "10-15",
              },
            ],
          },
        },
      },
      cardio: {
        levels: {
          1: {
            exercises: [
              {
                name: "Run",
                description: "Go for a run or a jog.",
              },
            ],
          },
        },
      },
    },
  },
];
