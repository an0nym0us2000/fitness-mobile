export const CATEGORIES = [
  {
    id: 'back',
    name: 'Back',
    icon: 'fitness',
    gradient: ['#667eea', '#764ba2'],
    illustration: 'https://via.placeholder.com/300x200/667eea/ffffff?text=Back'
  },
  {
    id: 'biceps',
    name: 'Biceps',
    icon: 'barbell',
    gradient: ['#f093fb', '#f5576c'],
    illustration: 'https://via.placeholder.com/300x200/f093fb/ffffff?text=Biceps'
  },
  {
    id: 'chest',
    name: 'Chest',
    icon: 'body',
    gradient: ['#4facfe', '#00f2fe'],
    illustration: 'https://via.placeholder.com/300x200/4facfe/ffffff?text=Chest'
  },
  {
    id: 'triceps',
    name: 'Triceps',
    icon: 'flash',
    gradient: ['#43e97b', '#38f9d7'],
    illustration: 'https://via.placeholder.com/300x200/43e97b/ffffff?text=Triceps'
  },
  {
    id: 'shoulders',
    name: 'Shoulders',
    icon: 'analytics',
    gradient: ['#fa709a', '#fee140'],
    illustration: 'https://via.placeholder.com/300x200/fa709a/ffffff?text=Shoulders'
  },
  {
    id: 'legs',
    name: 'Legs',
    icon: 'walk',
    gradient: ['#30cfd0', '#330867'],
    illustration: 'https://via.placeholder.com/300x200/30cfd0/ffffff?text=Legs'
  }
];

export const WORKOUTS = {
  back: [
    {
      id: 'back-1',
      category: 'back',
      name: 'Pull-Ups',
      difficulty: 'Advanced',
      illustration: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Pull-Ups',
      muscles: ['Latissimus Dorsi', 'Rhomboids', 'Trapezius', 'Biceps'],
      steps: [
        'Grab the bar with palms facing away, hands shoulder-width apart',
        'Hang with arms fully extended',
        'Pull yourself up until chin is above the bar',
        'Lower yourself back down with control',
        'Repeat for desired reps'
      ],
      tips: [
        'Engage your core throughout the movement',
        'Avoid swinging or using momentum',
        'Focus on squeezing your shoulder blades together',
        'Start with assisted pull-ups if needed'
      ],
      reps: '3-4 sets of 8-12 reps',
      sets: '3-4',
      duration: '15-20 minutes'
    },
    {
      id: 'back-2',
      category: 'back',
      name: 'Deadlifts',
      difficulty: 'Advanced',
      illustration: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Deadlifts',
      muscles: ['Erector Spinae', 'Glutes', 'Hamstrings', 'Trapezius'],
      steps: [
        'Stand with feet hip-width apart, barbell over mid-foot',
        'Bend at hips and knees to grip the bar',
        'Keep back straight, chest up',
        'Drive through heels to lift the bar',
        'Lower with control, maintaining form'
      ],
      tips: [
        'Keep the bar close to your body',
        'Maintain a neutral spine throughout',
        'Engage your lats by pulling the bar into you',
        'Start with lighter weight to perfect form'
      ],
      reps: '3-5 sets of 5-8 reps',
      sets: '3-5',
      duration: '20-25 minutes'
    },
    {
      id: 'back-3',
      category: 'back',
      name: 'Bent Over Rows',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Bent+Over+Rows',
      muscles: ['Latissimus Dorsi', 'Rhomboids', 'Trapezius', 'Rear Deltoids'],
      steps: [
        'Hold barbell with overhand grip, feet shoulder-width apart',
        'Bend at hips until torso is nearly parallel to floor',
        'Pull the bar to lower chest/upper abdomen',
        'Squeeze shoulder blades together at top',
        'Lower with control and repeat'
      ],
      tips: [
        'Keep your core engaged and back flat',
        'Avoid using momentum or jerking movements',
        'Focus on pulling with your elbows, not your hands',
        'Keep knees slightly bent for stability'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '15-20 minutes'
    },
    {
      id: 'back-4',
      category: 'back',
      name: 'Lat Pulldowns',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Lat+Pulldowns',
      muscles: ['Latissimus Dorsi', 'Teres Major', 'Biceps', 'Rear Deltoids'],
      steps: [
        'Sit at lat pulldown machine, adjust thigh pad',
        'Grab the bar with wide overhand grip',
        'Pull bar down to upper chest',
        'Squeeze shoulder blades together',
        'Return to starting position with control'
      ],
      tips: [
        'Lean back slightly for optimal angle',
        'Focus on pulling with your elbows',
        'Avoid pulling the bar behind your neck',
        'Control the weight on the way up'
      ],
      reps: '3-4 sets of 10-15 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'back-5',
      category: 'back',
      name: 'T-Bar Rows',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/667eea/ffffff?text=T-Bar+Rows',
      muscles: ['Latissimus Dorsi', 'Rhomboids', 'Trapezius', 'Erector Spinae'],
      steps: [
        'Straddle the T-bar, feet shoulder-width apart',
        'Bend at hips, keeping back straight',
        'Grip handles with both hands',
        'Pull weight to chest, squeezing shoulder blades',
        'Lower with control and repeat'
      ],
      tips: [
        'Keep your chest up throughout the movement',
        'Avoid rounding your lower back',
        'Pull with your elbows, not your hands',
        'Use a weight that allows proper form'
      ],
      reps: '3-4 sets of 8-12 reps',
      sets: '3-4',
      duration: '15-20 minutes'
    },
    {
      id: 'back-6',
      category: 'back',
      name: 'Seated Cable Rows',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Seated+Cable+Rows',
      muscles: ['Latissimus Dorsi', 'Rhomboids', 'Trapezius', 'Biceps'],
      steps: [
        'Sit at cable row machine, feet on platform',
        'Grab the handle with both hands',
        'Pull handle to lower abdomen',
        'Squeeze shoulder blades together',
        'Extend arms back to starting position'
      ],
      tips: [
        'Keep your back straight, avoid leaning too far back',
        'Focus on the squeeze at the end of each rep',
        'Avoid using momentum',
        'Keep elbows close to your body'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'back-7',
      category: 'back',
      name: 'Single-Arm Dumbbell Rows',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Single-Arm+Rows',
      muscles: ['Latissimus Dorsi', 'Rhomboids', 'Trapezius', 'Rear Deltoids'],
      steps: [
        'Place one knee and hand on bench for support',
        'Hold dumbbell in opposite hand, arm extended',
        'Pull dumbbell to hip, keeping elbow close',
        'Squeeze at the top',
        'Lower with control and repeat'
      ],
      tips: [
        'Keep your back parallel to the ground',
        'Avoid rotating your torso',
        'Pull with your elbow, not your hand',
        'Focus on the working side'
      ],
      reps: '3-4 sets of 10-12 reps per arm',
      sets: '3-4',
      duration: '15-18 minutes'
    },
    {
      id: 'back-8',
      category: 'back',
      name: 'Face Pulls',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Face+Pulls',
      muscles: ['Rear Deltoids', 'Rhomboids', 'Trapezius', 'Rotator Cuff'],
      steps: [
        'Set cable at upper chest height with rope attachment',
        'Grab rope with overhand grip',
        'Pull rope towards your face',
        'Separate hands as you pull, aiming for ears',
        'Return to starting position with control'
      ],
      tips: [
        'Keep elbows high throughout the movement',
        'Focus on squeezing your shoulder blades',
        'Use lighter weight and focus on form',
        'Great for shoulder health and posture'
      ],
      reps: '3-4 sets of 15-20 reps',
      sets: '3-4',
      duration: '10-12 minutes'
    },
    {
      id: 'back-9',
      category: 'back',
      name: 'Inverted Rows',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Inverted+Rows',
      muscles: ['Latissimus Dorsi', 'Rhomboids', 'Trapezius', 'Biceps'],
      steps: [
        'Set up bar at waist height',
        'Lie underneath, grip bar with overhand grip',
        'Keep body straight from heels to head',
        'Pull chest to bar',
        'Lower with control and repeat'
      ],
      tips: [
        'Keep your body in a straight line',
        'Squeeze shoulder blades at the top',
        'Lower the bar height to increase difficulty',
        'Great bodyweight alternative to rows'
      ],
      reps: '3-4 sets of 10-15 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'back-10',
      category: 'back',
      name: 'Hyperextensions',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Hyperextensions',
      muscles: ['Erector Spinae', 'Glutes', 'Hamstrings'],
      steps: [
        'Position yourself on hyperextension bench',
        'Cross arms over chest or behind head',
        'Lower torso by bending at waist',
        'Raise torso until in line with legs',
        'Lower with control and repeat'
      ],
      tips: [
        'Avoid hyperextending at the top',
        'Focus on controlled movements',
        'Great for lower back strength',
        'Add weight when bodyweight becomes easy'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '10-12 minutes'
    }
  ],

  biceps: [
    {
      id: 'biceps-1',
      category: 'biceps',
      name: 'Barbell Curls',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Barbell+Curls',
      muscles: ['Biceps Brachii', 'Brachialis', 'Forearms'],
      steps: [
        'Stand with feet shoulder-width apart',
        'Grip barbell with underhand grip, hands shoulder-width',
        'Curl bar up towards shoulders',
        'Squeeze biceps at the top',
        'Lower with control to starting position'
      ],
      tips: [
        'Keep elbows close to your sides',
        'Avoid swinging or using momentum',
        'Focus on the squeeze at the top',
        'Control the weight on the way down'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'biceps-2',
      category: 'biceps',
      name: 'Dumbbell Hammer Curls',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Hammer+Curls',
      muscles: ['Biceps Brachii', 'Brachialis', 'Brachioradialis', 'Forearms'],
      steps: [
        'Stand with dumbbells at sides, palms facing in',
        'Keep elbows close to torso',
        'Curl weights up while maintaining neutral grip',
        'Squeeze at the top',
        'Lower with control'
      ],
      tips: [
        'Keep wrists neutral throughout',
        'Avoid rotating wrists during movement',
        'Can be done alternating or simultaneously',
        'Great for overall arm development'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'biceps-3',
      category: 'biceps',
      name: 'Preacher Curls',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Preacher+Curls',
      muscles: ['Biceps Brachii', 'Brachialis'],
      steps: [
        'Sit at preacher bench, arms over pad',
        'Grip barbell or EZ bar with underhand grip',
        'Curl weight up towards shoulders',
        'Squeeze biceps at contraction',
        'Lower with control until arms are extended'
      ],
      tips: [
        'Keep upper arms flat on the pad',
        'Avoid lifting elbows off the pad',
        'Focus on strict form',
        'EZ bar can be easier on wrists'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'biceps-4',
      category: 'biceps',
      name: 'Concentration Curls',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Concentration+Curls',
      muscles: ['Biceps Brachii', 'Brachialis'],
      steps: [
        'Sit on bench, spread legs',
        'Hold dumbbell, brace elbow against inner thigh',
        'Curl weight up towards shoulder',
        'Focus on peak contraction',
        'Lower with control'
      ],
      tips: [
        'Keep elbow stationary against thigh',
        'Focus on the working bicep',
        'Avoid swinging or using momentum',
        'Great for mind-muscle connection'
      ],
      reps: '3-4 sets of 10-12 reps per arm',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'biceps-5',
      category: 'biceps',
      name: 'Cable Curls',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Cable+Curls',
      muscles: ['Biceps Brachii', 'Brachialis', 'Forearms'],
      steps: [
        'Stand facing cable machine, low pulley',
        'Grip bar with underhand grip',
        'Curl bar up towards shoulders',
        'Maintain constant tension',
        'Lower with control'
      ],
      tips: [
        'Keep elbows stationary',
        'Enjoy constant tension from cable',
        'Can use various attachments',
        'Great for pump and blood flow'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'biceps-6',
      category: 'biceps',
      name: 'Incline Dumbbell Curls',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Incline+Curls',
      muscles: ['Biceps Brachii', 'Brachialis'],
      steps: [
        'Set bench to 45-degree incline',
        'Sit back with dumbbells hanging at sides',
        'Curl weights up while keeping upper arms stationary',
        'Squeeze at the top',
        'Lower with control to full stretch'
      ],
      tips: [
        'Keep shoulders back against bench',
        'Allow for full stretch at bottom',
        'Avoid swinging the weights',
        'Great for long head of biceps'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'biceps-7',
      category: 'biceps',
      name: 'Spider Curls',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Spider+Curls',
      muscles: ['Biceps Brachii', 'Brachialis'],
      steps: [
        'Lean over incline bench, chest against pad',
        'Let arms hang straight down',
        'Curl weight up towards face',
        'Squeeze biceps hard at top',
        'Lower with control'
      ],
      tips: [
        'Keep chest firmly against pad',
        'Avoid using momentum',
        'Focus on strict form',
        'Great for peak contraction'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'biceps-8',
      category: 'biceps',
      name: '21s',
      difficulty: 'Advanced',
      illustration: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=21s',
      muscles: ['Biceps Brachii', 'Brachialis', 'Forearms'],
      steps: [
        '7 reps from bottom to mid-point',
        '7 reps from mid-point to top',
        '7 full range of motion reps',
        'No rest between phases',
        'That\'s one set!'
      ],
      tips: [
        'Use lighter weight than normal curls',
        'Maintain strict form throughout',
        'Great for muscle endurance and pump',
        'Very challenging but effective'
      ],
      reps: '2-3 sets of 21 reps total',
      sets: '2-3',
      duration: '15-18 minutes'
    },
    {
      id: 'biceps-9',
      category: 'biceps',
      name: 'Reverse Curls',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Reverse+Curls',
      muscles: ['Brachioradialis', 'Biceps Brachii', 'Forearms'],
      steps: [
        'Stand with barbell, overhand grip',
        'Hands shoulder-width apart',
        'Curl bar up towards shoulders',
        'Keep wrists straight',
        'Lower with control'
      ],
      tips: [
        'Keep elbows close to sides',
        'Focus on forearm engagement',
        'Use lighter weight than regular curls',
        'Great for forearm development'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'biceps-10',
      category: 'biceps',
      name: 'Zottman Curls',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Zottman+Curls',
      muscles: ['Biceps Brachii', 'Brachialis', 'Brachioradialis', 'Forearms'],
      steps: [
        'Hold dumbbells with underhand grip',
        'Curl up normally',
        'At the top, rotate to overhand grip',
        'Lower with overhand grip',
        'Rotate back to underhand at bottom'
      ],
      tips: [
        'Control the rotation',
        'Focus on the negative portion',
        'Great for complete arm development',
        'Combines regular and reverse curls'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    }
  ],

  chest: [
    {
      id: 'chest-1',
      category: 'chest',
      name: 'Barbell Bench Press',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Bench+Press',
      muscles: ['Pectoralis Major', 'Anterior Deltoids', 'Triceps'],
      steps: [
        'Lie on bench, feet flat on floor',
        'Grip bar slightly wider than shoulder-width',
        'Unrack bar and lower to mid-chest',
        'Press bar up until arms are extended',
        'Repeat with control'
      ],
      tips: [
        'Keep shoulder blades retracted',
        'Maintain natural arch in lower back',
        'Lower the bar with control',
        'Always use a spotter for safety'
      ],
      reps: '3-5 sets of 8-12 reps',
      sets: '3-5',
      duration: '20-25 minutes'
    },
    {
      id: 'chest-2',
      category: 'chest',
      name: 'Dumbbell Flyes',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Dumbbell+Flyes',
      muscles: ['Pectoralis Major', 'Anterior Deltoids'],
      steps: [
        'Lie on bench with dumbbells above chest',
        'Slight bend in elbows',
        'Lower dumbbells in arc motion to sides',
        'Feel stretch in chest',
        'Bring dumbbells back together at top'
      ],
      tips: [
        'Keep slight bend in elbows throughout',
        'Focus on the stretch',
        'Don\'t go too heavy',
        'Control the movement'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'chest-3',
      category: 'chest',
      name: 'Incline Barbell Press',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Incline+Press',
      muscles: ['Upper Pectoralis Major', 'Anterior Deltoids', 'Triceps'],
      steps: [
        'Set bench to 30-45 degree incline',
        'Grip bar slightly wider than shoulders',
        'Lower bar to upper chest',
        'Press up until arms extended',
        'Repeat with control'
      ],
      tips: [
        'Don\'t set incline too steep',
        'Focus on upper chest engagement',
        'Keep shoulder blades retracted',
        'Use a spotter for safety'
      ],
      reps: '3-4 sets of 8-12 reps',
      sets: '3-4',
      duration: '15-20 minutes'
    },
    {
      id: 'chest-4',
      category: 'chest',
      name: 'Push-Ups',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Push-Ups',
      muscles: ['Pectoralis Major', 'Anterior Deltoids', 'Triceps', 'Core'],
      steps: [
        'Start in plank position, hands shoulder-width',
        'Keep body straight from head to heels',
        'Lower chest towards ground',
        'Push back up to starting position',
        'Repeat maintaining form'
      ],
      tips: [
        'Keep core engaged throughout',
        'Don\'t let hips sag',
        'Full range of motion',
        'Can modify on knees if needed'
      ],
      reps: '3-4 sets of 15-20 reps',
      sets: '3-4',
      duration: '10-12 minutes'
    },
    {
      id: 'chest-5',
      category: 'chest',
      name: 'Cable Crossovers',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Cable+Crossovers',
      muscles: ['Pectoralis Major', 'Anterior Deltoids'],
      steps: [
        'Set cables to high position',
        'Stand in middle, grab handles',
        'Step forward, slight lean',
        'Bring handles together in arc motion',
        'Return to starting position with control'
      ],
      tips: [
        'Keep slight bend in elbows',
        'Focus on squeezing chest',
        'Maintain stable stance',
        'Control the weight, don\'t let it pull you'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'chest-6',
      category: 'chest',
      name: 'Decline Barbell Press',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Decline+Press',
      muscles: ['Lower Pectoralis Major', 'Triceps', 'Anterior Deltoids'],
      steps: [
        'Set bench to decline position',
        'Secure feet under pad',
        'Grip bar slightly wider than shoulders',
        'Lower bar to lower chest',
        'Press up until arms extended'
      ],
      tips: [
        'Ensure feet are secure',
        'Focus on lower chest',
        'Use a spotter',
        'Control the descent'
      ],
      reps: '3-4 sets of 8-12 reps',
      sets: '3-4',
      duration: '15-20 minutes'
    },
    {
      id: 'chest-7',
      category: 'chest',
      name: 'Dumbbell Bench Press',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=DB+Bench+Press',
      muscles: ['Pectoralis Major', 'Anterior Deltoids', 'Triceps'],
      steps: [
        'Lie on bench with dumbbells at chest',
        'Press dumbbells up until arms extended',
        'Lower with control to chest level',
        'Keep dumbbells aligned',
        'Repeat maintaining form'
      ],
      tips: [
        'Greater range of motion than barbell',
        'Keep wrists straight',
        'Control the dumbbells',
        'Good for muscle imbalances'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '15-18 minutes'
    },
    {
      id: 'chest-8',
      category: 'chest',
      name: 'Chest Dips',
      difficulty: 'Advanced',
      illustration: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Chest+Dips',
      muscles: ['Pectoralis Major', 'Triceps', 'Anterior Deltoids'],
      steps: [
        'Grab parallel bars, lift yourself up',
        'Lean forward slightly',
        'Lower body by bending elbows',
        'Go down until chest stretch',
        'Push back up to starting position'
      ],
      tips: [
        'Lean forward to target chest',
        'Don\'t go too deep if shoulder hurts',
        'Can add weight when bodyweight is easy',
        'Great mass builder'
      ],
      reps: '3-4 sets of 8-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'chest-9',
      category: 'chest',
      name: 'Pec Deck Machine',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Pec+Deck',
      muscles: ['Pectoralis Major', 'Anterior Deltoids'],
      steps: [
        'Sit at machine, adjust seat height',
        'Place forearms on pads',
        'Bring pads together in front',
        'Squeeze chest at peak contraction',
        'Return to starting position with control'
      ],
      tips: [
        'Keep back against pad',
        'Focus on the squeeze',
        'Don\'t use momentum',
        'Great for isolation'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '10-12 minutes'
    },
    {
      id: 'chest-10',
      category: 'chest',
      name: 'Landmine Press',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Landmine+Press',
      muscles: ['Pectoralis Major', 'Anterior Deltoids', 'Triceps', 'Core'],
      steps: [
        'Place barbell in landmine or corner',
        'Hold end of barbell at shoulder',
        'Press barbell up and forward',
        'Lower with control',
        'Can be done standing or kneeling'
      ],
      tips: [
        'Engage your core',
        'Smooth pressing motion',
        'Great for shoulder-friendly pressing',
        'Can be done single-arm'
      ],
      reps: '3-4 sets of 10-12 reps per arm',
      sets: '3-4',
      duration: '12-15 minutes'
    }
  ],

  triceps: [
    {
      id: 'triceps-1',
      category: 'triceps',
      name: 'Tricep Dips',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/43e97b/ffffff?text=Tricep+Dips',
      muscles: ['Triceps', 'Chest', 'Anterior Deltoids'],
      steps: [
        'Grab parallel bars, lift yourself up',
        'Keep body upright (vertical)',
        'Lower by bending elbows',
        'Go down until upper arms parallel to floor',
        'Push back up to starting position'
      ],
      tips: [
        'Keep body upright to target triceps',
        'Don\'t lean forward like chest dips',
        'Can use dip belt for added weight',
        'Use assisted machine if needed'
      ],
      reps: '3-4 sets of 8-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'triceps-2',
      category: 'triceps',
      name: 'Close-Grip Bench Press',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/43e97b/ffffff?text=Close-Grip+Bench',
      muscles: ['Triceps', 'Pectoralis Major', 'Anterior Deltoids'],
      steps: [
        'Lie on bench, grip bar hands shoulder-width',
        'Unrack bar over chest',
        'Lower bar to lower chest',
        'Keep elbows closer to body than regular bench',
        'Press back up focusing on triceps'
      ],
      tips: [
        'Don\'t grip too narrow',
        'Keep elbows at about 45 degrees',
        'Great mass builder for triceps',
        'Use a spotter'
      ],
      reps: '3-4 sets of 8-12 reps',
      sets: '3-4',
      duration: '15-18 minutes'
    },
    {
      id: 'triceps-3',
      category: 'triceps',
      name: 'Overhead Tricep Extension',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/43e97b/ffffff?text=Overhead+Extension',
      muscles: ['Triceps', 'Long Head'],
      steps: [
        'Hold dumbbell with both hands overhead',
        'Lower weight behind head',
        'Keep upper arms stationary',
        'Extend arms back to starting position',
        'Repeat with control'
      ],
      tips: [
        'Keep elbows pointing forward',
        'Don\'t let elbows flare out',
        'Focus on the stretch',
        'Can be done seated or standing'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'triceps-4',
      category: 'triceps',
      name: 'Tricep Pushdowns',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/43e97b/ffffff?text=Tricep+Pushdowns',
      muscles: ['Triceps', 'Lateral Head'],
      steps: [
        'Stand at cable machine, high pulley',
        'Grab bar or rope with overhand grip',
        'Push down until arms fully extended',
        'Squeeze triceps at bottom',
        'Return to starting position with control'
      ],
      tips: [
        'Keep elbows pinned to sides',
        'Don\'t use momentum',
        'Focus on the contraction',
        'Try different attachments for variety'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'triceps-5',
      category: 'triceps',
      name: 'Skull Crushers',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/43e97b/ffffff?text=Skull+Crushers',
      muscles: ['Triceps', 'Long Head', 'Lateral Head'],
      steps: [
        'Lie on bench with barbell or EZ bar',
        'Extend arms straight up',
        'Lower bar towards forehead',
        'Keep upper arms stationary',
        'Extend back to starting position'
      ],
      tips: [
        'Control the weight carefully',
        'Keep elbows in, don\'t flare',
        'Can lower to forehead or behind head',
        'EZ bar is easier on wrists'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'triceps-6',
      category: 'triceps',
      name: 'Diamond Push-Ups',
      difficulty: 'Advanced',
      illustration: 'https://via.placeholder.com/400x300/43e97b/ffffff?text=Diamond+Push-Ups',
      muscles: ['Triceps', 'Chest', 'Anterior Deltoids'],
      steps: [
        'Get in push-up position',
        'Place hands together forming diamond with fingers',
        'Lower chest to hands',
        'Push back up',
        'Keep elbows close to body'
      ],
      tips: [
        'Very challenging bodyweight exercise',
        'Keep core engaged',
        'Can modify on knees',
        'Great for tricep strength'
      ],
      reps: '3-4 sets of 10-15 reps',
      sets: '3-4',
      duration: '10-12 minutes'
    },
    {
      id: 'triceps-7',
      category: 'triceps',
      name: 'Tricep Kickbacks',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/43e97b/ffffff?text=Tricep+Kickbacks',
      muscles: ['Triceps', 'Lateral Head'],
      steps: [
        'Bend forward at waist, dumbbell in hand',
        'Upper arm parallel to floor',
        'Extend arm back until straight',
        'Squeeze tricep at full extension',
        'Return to starting position'
      ],
      tips: [
        'Keep upper arm stationary',
        'Focus on the contraction',
        'Use lighter weight for strict form',
        'Can be done single or both arms'
      ],
      reps: '3-4 sets of 12-15 reps per arm',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'triceps-8',
      category: 'triceps',
      name: 'Bench Dips',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/43e97b/ffffff?text=Bench+Dips',
      muscles: ['Triceps', 'Chest', 'Anterior Deltoids'],
      steps: [
        'Place hands on bench behind you',
        'Feet extended forward',
        'Lower body by bending elbows',
        'Go down until upper arms parallel to floor',
        'Push back up'
      ],
      tips: [
        'Keep elbows pointing back',
        'Can elevate feet for more difficulty',
        'Add weight on lap when needed',
        'Great bodyweight exercise'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '10-12 minutes'
    },
    {
      id: 'triceps-9',
      category: 'triceps',
      name: 'Rope Overhead Extension',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/43e97b/ffffff?text=Rope+Overhead',
      muscles: ['Triceps', 'Long Head'],
      steps: [
        'Set cable at low position with rope',
        'Face away from machine',
        'Hold rope overhead',
        'Extend arms forward and up',
        'Return to stretched position'
      ],
      tips: [
        'Keep elbows high and forward',
        'Great stretch on long head',
        'Step forward for stability',
        'Control the movement'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'triceps-10',
      category: 'triceps',
      name: 'JM Press',
      difficulty: 'Advanced',
      illustration: 'https://via.placeholder.com/400x300/43e97b/ffffff?text=JM+Press',
      muscles: ['Triceps', 'Pectoralis Major'],
      steps: [
        'Lie on bench with barbell',
        'Lower bar to neck/upper chest area',
        'Keep elbows relatively vertical',
        'Press back up',
        'Hybrid between close-grip and skull crusher'
      ],
      tips: [
        'Takes practice to learn',
        'Start with lighter weight',
        'Very effective for tricep strength',
        'Popularized by powerlifter JM Blakley'
      ],
      reps: '3-4 sets of 8-10 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    }
  ],

  shoulders: [
    {
      id: 'shoulders-1',
      category: 'shoulders',
      name: 'Overhead Press',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/fa709a/ffffff?text=Overhead+Press',
      muscles: ['Deltoids', 'Triceps', 'Upper Chest', 'Core'],
      steps: [
        'Stand with barbell at shoulder height',
        'Grip slightly wider than shoulders',
        'Press bar overhead until arms extended',
        'Lower with control to shoulders',
        'Repeat maintaining form'
      ],
      tips: [
        'Keep core tight',
        'Don\'t lean back excessively',
        'Press in straight line',
        'Can be done seated for stability'
      ],
      reps: '3-4 sets of 8-12 reps',
      sets: '3-4',
      duration: '15-20 minutes'
    },
    {
      id: 'shoulders-2',
      category: 'shoulders',
      name: 'Lateral Raises',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/fa709a/ffffff?text=Lateral+Raises',
      muscles: ['Lateral Deltoids'],
      steps: [
        'Stand with dumbbells at sides',
        'Slight bend in elbows',
        'Raise arms to sides until shoulder height',
        'Pause at top',
        'Lower with control'
      ],
      tips: [
        'Don\'t use momentum',
        'Lead with elbows, not hands',
        'Keep wrists neutral',
        'Focus on lateral delts'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'shoulders-3',
      category: 'shoulders',
      name: 'Front Raises',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/fa709a/ffffff?text=Front+Raises',
      muscles: ['Anterior Deltoids', 'Upper Chest'],
      steps: [
        'Stand with dumbbells in front of thighs',
        'Raise one or both dumbbells forward',
        'Lift to shoulder height',
        'Lower with control',
        'Repeat alternating or together'
      ],
      tips: [
        'Keep slight bend in elbows',
        'Don\'t swing the weight',
        'Can use barbell or plate',
        'Focus on front delts'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'shoulders-4',
      category: 'shoulders',
      name: 'Reverse Flyes',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/fa709a/ffffff?text=Reverse+Flyes',
      muscles: ['Rear Deltoids', 'Rhomboids', 'Trapezius'],
      steps: [
        'Bend forward at hips, dumbbells hanging',
        'Slight bend in elbows',
        'Raise arms to sides in arc motion',
        'Squeeze shoulder blades',
        'Lower with control'
      ],
      tips: [
        'Keep back flat',
        'Focus on rear delts',
        'Don\'t use momentum',
        'Can be done on incline bench'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'shoulders-5',
      category: 'shoulders',
      name: 'Arnold Press',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/fa709a/ffffff?text=Arnold+Press',
      muscles: ['Deltoids', 'Triceps', 'Upper Chest'],
      steps: [
        'Sit with dumbbells at shoulder height, palms facing you',
        'As you press up, rotate palms forward',
        'Finish with palms facing away at top',
        'Reverse the motion on the way down',
        'Repeat the rotation pattern'
      ],
      tips: [
        'Smooth rotation throughout',
        'Named after Arnold Schwarzenegger',
        'Great for all three delt heads',
        'Control the weight'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'shoulders-6',
      category: 'shoulders',
      name: 'Upright Rows',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/fa709a/ffffff?text=Upright+Rows',
      muscles: ['Lateral Deltoids', 'Trapezius', 'Biceps'],
      steps: [
        'Stand with barbell in front, narrow grip',
        'Pull bar up along body',
        'Lead with elbows',
        'Raise to chest height',
        'Lower with control'
      ],
      tips: [
        'Don\'t pull too high if shoulders hurt',
        'Lead with elbows',
        'Can use dumbbells or cable',
        'Some people experience shoulder discomfort'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'shoulders-7',
      category: 'shoulders',
      name: 'Cable Lateral Raises',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/fa709a/ffffff?text=Cable+Lateral',
      muscles: ['Lateral Deltoids'],
      steps: [
        'Stand beside cable machine, low pulley',
        'Grab handle with far hand',
        'Raise arm to side to shoulder height',
        'Maintain constant tension',
        'Lower with control'
      ],
      tips: [
        'Constant tension from cable',
        'Great for mind-muscle connection',
        'Can cross cable in front of body',
        'Focus on lateral delt'
      ],
      reps: '3-4 sets of 12-15 reps per arm',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'shoulders-8',
      category: 'shoulders',
      name: 'Face Pulls',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/fa709a/ffffff?text=Face+Pulls',
      muscles: ['Rear Deltoids', 'Rotator Cuff', 'Rhomboids'],
      steps: [
        'Set cable at face height with rope',
        'Pull rope towards face',
        'Separate hands as you pull',
        'Squeeze shoulder blades',
        'Return to starting position'
      ],
      tips: [
        'Great for shoulder health',
        'Keep elbows high',
        'Don\'t use too much weight',
        'Important for posture'
      ],
      reps: '3-4 sets of 15-20 reps',
      sets: '3-4',
      duration: '10-12 minutes'
    },
    {
      id: 'shoulders-9',
      category: 'shoulders',
      name: 'Pike Push-Ups',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/fa709a/ffffff?text=Pike+Push-Ups',
      muscles: ['Anterior Deltoids', 'Triceps', 'Upper Chest'],
      steps: [
        'Start in downward dog yoga position',
        'Hands and feet on ground, hips high',
        'Lower head towards ground',
        'Push back up',
        'Maintain pike position throughout'
      ],
      tips: [
        'Great bodyweight shoulder exercise',
        'Elevate feet for more difficulty',
        'Progression towards handstand push-ups',
        'Keep core engaged'
      ],
      reps: '3-4 sets of 10-15 reps',
      sets: '3-4',
      duration: '10-12 minutes'
    },
    {
      id: 'shoulders-10',
      category: 'shoulders',
      name: 'Plate Raises',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/fa709a/ffffff?text=Plate+Raises',
      muscles: ['Anterior Deltoids', 'Upper Chest'],
      steps: [
        'Hold weight plate with both hands',
        'Start at waist level',
        'Raise plate to shoulder height or slightly above',
        'Keep arms extended',
        'Lower with control'
      ],
      tips: [
        'Keep core tight',
        'Don\'t use momentum',
        'Can be front or lateral raises',
        'Good for finishing movement'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '10-12 minutes'
    }
  ],

  legs: [
    {
      id: 'legs-1',
      category: 'legs',
      name: 'Barbell Squats',
      difficulty: 'Advanced',
      illustration: 'https://via.placeholder.com/400x300/30cfd0/ffffff?text=Barbell+Squats',
      muscles: ['Quadriceps', 'Glutes', 'Hamstrings', 'Core'],
      steps: [
        'Position barbell on upper back',
        'Feet shoulder-width apart',
        'Lower by bending knees and hips',
        'Go down until thighs parallel or below',
        'Drive through heels to stand'
      ],
      tips: [
        'Keep chest up and core tight',
        'Knees track over toes',
        'Maintain neutral spine',
        'Use squat rack with safety bars'
      ],
      reps: '3-5 sets of 8-12 reps',
      sets: '3-5',
      duration: '20-25 minutes'
    },
    {
      id: 'legs-2',
      category: 'legs',
      name: 'Romanian Deadlifts',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/30cfd0/ffffff?text=Romanian+Deadlifts',
      muscles: ['Hamstrings', 'Glutes', 'Lower Back'],
      steps: [
        'Hold barbell with overhand grip',
        'Stand with slight knee bend',
        'Hinge at hips, lower bar down legs',
        'Feel stretch in hamstrings',
        'Drive hips forward to return'
      ],
      tips: [
        'Keep bar close to legs',
        'Focus on hip hinge',
        'Maintain neutral spine',
        'Great for hamstring development'
      ],
      reps: '3-4 sets of 10-12 reps',
      sets: '3-4',
      duration: '15-18 minutes'
    },
    {
      id: 'legs-3',
      category: 'legs',
      name: 'Leg Press',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/30cfd0/ffffff?text=Leg+Press',
      muscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
      steps: [
        'Sit in leg press machine',
        'Place feet shoulder-width on platform',
        'Release safety bars',
        'Lower platform by bending knees',
        'Press back up through heels'
      ],
      tips: [
        'Don\'t lock knees at top',
        'Keep lower back against pad',
        'Control the descent',
        'Adjust foot position for emphasis'
      ],
      reps: '3-4 sets of 10-15 reps',
      sets: '3-4',
      duration: '15-18 minutes'
    },
    {
      id: 'legs-4',
      category: 'legs',
      name: 'Lunges',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/30cfd0/ffffff?text=Lunges',
      muscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
      steps: [
        'Stand with feet hip-width apart',
        'Step forward with one leg',
        'Lower hips until both knees at 90 degrees',
        'Push back to starting position',
        'Repeat on other leg'
      ],
      tips: [
        'Keep torso upright',
        'Front knee stays over ankle',
        'Can be done walking or stationary',
        'Add dumbbells for resistance'
      ],
      reps: '3-4 sets of 10-12 reps per leg',
      sets: '3-4',
      duration: '15-18 minutes'
    },
    {
      id: 'legs-5',
      category: 'legs',
      name: 'Leg Curls',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/30cfd0/ffffff?text=Leg+Curls',
      muscles: ['Hamstrings'],
      steps: [
        'Lie face down on leg curl machine',
        'Hook ankles under pad',
        'Curl legs up towards glutes',
        'Squeeze hamstrings at top',
        'Lower with control'
      ],
      tips: [
        'Don\'t lift hips off pad',
        'Control the negative',
        'Focus on hamstring contraction',
        'Can be done seated or lying'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'legs-6',
      category: 'legs',
      name: 'Leg Extensions',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/30cfd0/ffffff?text=Leg+Extensions',
      muscles: ['Quadriceps'],
      steps: [
        'Sit in leg extension machine',
        'Hook ankles under pad',
        'Extend legs until straight',
        'Squeeze quads at top',
        'Lower with control'
      ],
      tips: [
        'Don\'t lock knees forcefully',
        'Control the movement',
        'Great for quad isolation',
        'Adjust back pad for comfort'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'legs-7',
      category: 'legs',
      name: 'Calf Raises',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/30cfd0/ffffff?text=Calf+Raises',
      muscles: ['Gastrocnemius', 'Soleus'],
      steps: [
        'Stand on edge of step or platform',
        'Rise up on toes as high as possible',
        'Squeeze calves at top',
        'Lower heels below platform level',
        'Repeat for full range of motion'
      ],
      tips: [
        'Full range of motion is key',
        'Can be done on machine or free standing',
        'Try different foot positions',
        'Hold at top for peak contraction'
      ],
      reps: '3-4 sets of 15-20 reps',
      sets: '3-4',
      duration: '10-12 minutes'
    },
    {
      id: 'legs-8',
      category: 'legs',
      name: 'Bulgarian Split Squats',
      difficulty: 'Intermediate',
      illustration: 'https://via.placeholder.com/400x300/30cfd0/ffffff?text=Bulgarian+Split+Squat',
      muscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
      steps: [
        'Place rear foot on bench behind you',
        'Front foot forward in lunge position',
        'Lower down by bending front knee',
        'Keep torso upright',
        'Push through front heel to return'
      ],
      tips: [
        'Very challenging exercise',
        'Great for single-leg strength',
        'Keep front knee over ankle',
        'Can add dumbbells for resistance'
      ],
      reps: '3-4 sets of 10-12 reps per leg',
      sets: '3-4',
      duration: '15-18 minutes'
    },
    {
      id: 'legs-9',
      category: 'legs',
      name: 'Goblet Squats',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/30cfd0/ffffff?text=Goblet+Squats',
      muscles: ['Quadriceps', 'Glutes', 'Core'],
      steps: [
        'Hold dumbbell or kettlebell at chest',
        'Feet shoulder-width apart',
        'Squat down keeping weight at chest',
        'Elbows track inside knees',
        'Drive through heels to stand'
      ],
      tips: [
        'Great for learning squat form',
        'Keep chest up',
        'Good mobility exercise',
        'Can go deep into squat'
      ],
      reps: '3-4 sets of 12-15 reps',
      sets: '3-4',
      duration: '12-15 minutes'
    },
    {
      id: 'legs-10',
      category: 'legs',
      name: 'Glute Bridges',
      difficulty: 'Beginner',
      illustration: 'https://via.placeholder.com/400x300/30cfd0/ffffff?text=Glute+Bridges',
      muscles: ['Glutes', 'Hamstrings', 'Lower Back'],
      steps: [
        'Lie on back, knees bent, feet flat',
        'Drive through heels to lift hips',
        'Squeeze glutes at top',
        'Form straight line from knees to shoulders',
        'Lower with control'
      ],
      tips: [
        'Focus on glute squeeze',
        'Don\'t hyperextend lower back',
        'Can add barbell across hips',
        'Great for glute activation'
      ],
      reps: '3-4 sets of 15-20 reps',
      sets: '3-4',
      duration: '10-12 minutes'
    }
  ]
};

export const getAllWorkouts = () => {
  return Object.values(WORKOUTS).flat();
};

export const getWorkoutsByCategory = (category) => {
  return WORKOUTS[category] || [];
};

export const getWorkoutById = (id) => {
  const allWorkouts = getAllWorkouts();
  return allWorkouts.find(workout => workout.id === id);
};
