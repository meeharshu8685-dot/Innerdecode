import { QuizQuestion, Pattern, GenericTestResult, Solution } from '../types';

// ===================================
// 1. PROBLEM IDENTIFIER TEST
// ===================================

export const problemTestQuestionsMap: { [id: string]: QuizQuestion } = {
  'q1_area': {
    id: 'q1_area',
    text: "What area of your life is troubling you most right now?",
    defaultNextQuestion: 'q2_duration',
    multiple: true,
    options: [
      { text: "My thoughts and mind", scores: { 'overthinking-loop': 2, 'internal-conflict': 1 } },
      { text: "My emotions and feelings", scores: { 'emotional-overwhelm': 2, 'anxiety-activation': 1 } },
      { text: "My relationships", scores: { 'relationship-friction': 2 }, nextQuestion: 'q1a_relationship_type' },
      { text: "My work or responsibilities", scores: { 'stress-overload': 2, 'focus-break': 1 } },
      { text: "My sense of purpose or direction", scores: { 'motivation-drop': 2, 'internal-conflict': 1 } },
      { text: "My ability to focus or concentrate", scores: { 'focus-break': 2, 'stress-overload': 1 } }
    ]
  },
  'q1a_relationship_type': {
    id: 'q1a_relationship_type',
    text: "What best describes this relationship friction?",
    defaultNextQuestion: 'q2_duration', // Merge back to the main flow
    multiple: true,
    options: [
      { text: "With a romantic partner", scores: { 'relationship-friction': 2 } },
      { text: "With a family member", scores: { 'relationship-friction': 2 } },
      { text: "With a friend or colleague", scores: { 'relationship-friction': 2, 'stress-overload': 1 } },
      { text: "A general feeling of disconnect from others", scores: { 'relationship-friction': 1, 'emotional-overwhelm': 1 } }
    ]
  },
  'q2_duration': {
    id: 'q2_duration',
    text: "How long has this been happening?",
    defaultNextQuestion: 'q3_trigger',
    options: [
      { text: "Just started recently (days)", scores: {} }, // Neutral
      { text: "A few weeks", scores: { 'stress-overload': 1 } },
      { text: "Several months", scores: { 'emotional-overwhelm': 1, 'motivation-drop': 1 } },
      { text: "It comes and goes", scores: { 'impulse-anger': 1, 'anxiety-activation': 1 } },
      { text: "It's been ongoing for a long time", scores: { 'internal-conflict': 1, 'relationship-friction': 1 } }
    ]
  },
  'q3_trigger': {
    id: 'q3_trigger',
    text: "What triggers it the most?",
    defaultNextQuestion: 'q4_body',
    multiple: true,
    options: [
      { text: "Pressure or expectations", scores: { 'stress-overload': 2, 'anxiety-activation': 1 } },
      { text: "Uncertainty or not knowing what to do", scores: { 'overthinking-loop': 2, 'internal-conflict': 1 } },
      { text: "Conflict or tension with others", scores: { 'relationship-friction': 2, 'impulse-anger': 1 } },
      { text: "Feeling overwhelmed by too much at once", scores: { 'stress-overload': 2, 'emotional-overwhelm': 2 } },
      { text: "Feeling stuck or unmotivated", scores: { 'motivation-drop': 2 } },
      { text: "Losing control of my thoughts", scores: { 'overthinking-loop': 2, 'focus-break': 1 } }
    ]
  },
  'q4_body': {
    id: 'q4_body',
    text: "How does your body react when this happens?",
    defaultNextQuestion: 'q5_frequency',
    multiple: true,
    options: [
      { text: "Tension (shoulders, jaw, chest)", scores: { 'stress-overload': 2, 'anxiety-activation': 1 } },
      { text: "Restlessness or fidgeting", scores: { 'anxiety-activation': 2, 'focus-break': 1 } },
      { text: "Tiredness or heaviness", scores: { 'motivation-drop': 2, 'emotional-overwhelm': 1 } },
      { text: "Rapid heartbeat or shallow breathing", scores: { 'anxiety-activation': 2, 'impulse-anger': 1 } },
      { text: "Physical numbness or disconnect", scores: { 'emotional-overwhelm': 2 } }
    ]
  },
  'q5_frequency': {
    id: 'q5_frequency',
    text: "How often does this happen?",
    defaultNextQuestion: 'q6_reaction',
    options: [
      { text: "Constantly—it's always there", scores: { 'overthinking-loop': 2, 'stress-overload': 1 } },
      { text: "Multiple times a day", scores: { 'anxiety-activation': 2, 'impulse-anger': 1 } },
      { text: "A few times a week", scores: { } }, // Neutral
      { text: "When specific situations arise", scores: { 'relationship-friction': 2 } },
      { text: "Occasionally, but intensely", scores: { 'emotional-overwhelm': 1, 'impulse-anger': 1 } }
    ]
  },
  'q6_reaction': {
    id: 'q6_reaction',
    text: "What's your typical reaction style when this problem appears?",
    defaultNextQuestion: 'q7_emotion',
    multiple: true,
    options: [
      { text: "I freeze and don't know what to do", scores: { 'anxiety-activation': 2, 'emotional-overwhelm': 1 } },
      { text: "I get frustrated or angry quickly", scores: { 'impulse-anger': 2 } },
      { text: "I shut down emotionally", scores: { 'emotional-overwhelm': 2, 'motivation-drop': 1 } },
      { text: "I try to push through but feel exhausted", scores: { 'stress-overload': 2 } },
      { text: "I overthink and analyze endlessly", scores: { 'overthinking-loop': 2 } }
    ]
  },
  'q7_emotion': {
    id: 'q7_emotion',
    text: "What emotion comes up most often?",
    defaultNextQuestion: 'q8_need',
    multiple: true,
    options: [
      { text: "Fear or worry", scores: { 'anxiety-activation': 2 } },
      { text: "Frustration or irritation", scores: { 'impulse-anger': 2, 'stress-overload': 1 } },
      { text: "Sadness or emptiness", scores: { 'emotional-overwhelm': 2, 'motivation-drop': 1 } },
      { text: "Confusion or uncertainty", scores: { 'overthinking-loop': 2, 'internal-conflict': 1 } },
      { text: "Feeling trapped or stuck", scores: { 'internal-conflict': 2, 'motivation-drop': 1 } }
    ]
  },
  'q8_need': {
    id: 'q8_need',
    text: "What do you need most right now?",
    multiple: true,
    options: [
      { text: "Calm and peace", scores: { 'anxiety-activation': 2, 'stress-overload': 1 } },
      { text: "Clarity and direction", scores: { 'overthinking-loop': 2, 'internal-conflict': 1 } },
      { text: "Energy and motivation", scores: { 'motivation-drop': 2 } },
      { text: "Control over my reactions", scores: { 'impulse-anger': 2, 'emotional-overwhelm': 1 } },
      { text: "Understanding what's really happening", scores: { 'internal-conflict': 2, 'focus-break': 1 } }
    ]
  }
};


export const problemPatterns: Pattern[] = [
  {
    id: 'stress-overload',
    name: 'Stress Overload',
    description: "This pattern occurs when the demands on you exceed your available resources (time, energy, mental capacity). It feels like being pulled in too many directions, leading to exhaustion and a feeling of being constantly 'on'.",
    immediateReset: {
        title: "Immediate Reset: The 3-3-3 Grounding Technique",
        steps: [
            "Name 3 things you can see around you.",
            "Name 3 sounds you can hear right now.",
            "Move 3 parts of your body (e.g., wiggle your toes, roll your shoulders, tap your fingers)."
        ]
    },
    sections: [
        { title: "Why It Happens", content: "Often triggered by a buildup of responsibilities, tight deadlines, or a lack of downtime. It's your system's signal that your capacity has been reached." },
        { title: "Your Emotional Signal", content: "Irritability, feeling overwhelmed, a short temper." },
        { title: "Your Thinking Signal", content: "'I can't handle all of this,' 'There's not enough time,' 'I'm so behind.'" },
        { title: "What NOT To Do", content: "Don't try to 'power through' by adding more caffeine or ignoring your body's need for rest. This only deepens the deficit." },
    ],
    rootCauseMapper: { title: "Map the Root Cause", questions: [] },
    actionPaths: {
        title: "Choose Your Path to Relief",
        paths: [
            { name: "Mind", icon: "Mind", description: "Tools to organize your thoughts and prioritize.", tools: ["Brain Dump Technique", "The Eisenhower Matrix (Urgent/Important)", "Single-Tasking Focus Block"] },
            { name: "Emotion", icon: "Emotion", description: "Tools to calm your nervous system.", tools: ["4-7-8 Breathing", "Mindful Body Scan", "Schedule 'Worry Time'"] },
            { name: "Behavior", icon: "Behavior", description: "Actions to reduce the load.", tools: ["Delegate One Task", "Say 'No' to a Small Request", "Schedule a 15-Minute 'Do Nothing' Break"] },
            { name: "Environment", icon: "Environment", description: "Adjust your surroundings for peace.", tools: ["Declutter Your Workspace", "Turn Off Non-Essential Notifications", "Create a 'Calm Corner'"] },
        ]
    }
  },
  {
    id: 'anxiety-activation',
    name: 'Anxiety Activation',
    description: "This pattern is characterized by a persistent feeling of worry, nervousness, or unease about an imminent event or something with an uncertain outcome. Your mind gets stuck in future-focused 'what if' scenarios.",
    immediateReset: {
        title: "Immediate Reset: Physiological Sigh",
        steps: [
            "Take a deep breath in through your nose.",
            "When your lungs feel full, take another short, sharp inhale to expand them further.",
            "Exhale slowly and completely through your mouth."
        ]
    },
    sections: [
        { title: "Why It Happens", content: "Your brain's threat-detection system (the amygdala) is overactive, scanning for potential danger even when none exists. It's trying to keep you safe but is miscalibrated." },
        { title: "Your Emotional Signal", content: "Fear, dread, a sense of impending doom." },
        { title: "Your Thinking Signal", content: "'What if this goes wrong?', 'I have a bad feeling about this,' 'I need to be sure.'" },
        { title: "What NOT To Do", content: "Avoid seeking constant reassurance or avoiding the source of your anxiety. These actions reinforce the belief that the fear is valid and you can't handle it." },
    ],
    rootCauseMapper: { title: "Map the Root Cause", questions: [] },
    actionPaths: {
        title: "Choose Your Path to Calm",
        paths: [
            { name: "Mind", icon: "Mind", description: "Tools to challenge worried thoughts.", tools: ["Fact vs. Feeling Check", "Worst/Best/Most Likely Case Scenario", "Postponing Worry"] },
            { name: "Emotion", icon: "Emotion", description: "Tools to soothe your body's fear response.", tools: ["5 Senses Grounding", "Self-Compassion Hand-on-Heart", "Labeling Emotions ('I notice a feeling of worry')"] },
            { name: "Behavior", icon: "Behavior", description: "Actions to build confidence.", tools: ["Take One Small Step Towards the Fear", "Engage in a Rhythmic Activity (walking, knitting)", "Create a 'Done' List for small wins"] },
            { name: "Environment", icon: "Environment", description: "Create a sense of safety around you.", tools: ["Listen to Calming Music or Nature Sounds", "Use a Weighted Blanket", "Limit News or Social Media Intake"] },
        ]
    }
  },
  {
    id: 'overthinking-loop',
    name: 'Overthinking Loop',
    description: "This pattern involves getting stuck in a cycle of repetitive, unproductive thoughts. You might be analyzing a past event, trying to solve a problem with no clear answer, or simply caught in a spiral of 'what ifs' and 'should haves'.",
    immediateReset: {
        title: "Immediate Reset: The Mental 'Stop Sign'",
        steps: [
            "Visualize a large, red stop sign in your mind.",
            "Say the word 'STOP' out loud or in your head.",
            "Immediately shift your physical focus: stand up, stretch, look out a window, or splash water on your face."
        ]
    },
    sections: [
        { title: "Why It Happens", content: "Your brain believes that if it just thinks about the problem long enough, it can find a perfect solution or prevent a bad outcome. It's a form of mental control that backfires, creating more confusion than clarity." },
        { title: "Your Emotional Signal", content: "Mental exhaustion, confusion, feeling 'stuck'." },
        { title: "Your Thinking Signal", content: "Replaying conversations, analyzing every detail, 'If only I had...'" },
        { title: "What NOT To Do", content: "Don't try to 'figure it out' from within the loop. You can't solve the problem with the same thinking that created it." },
    ],
    rootCauseMapper: { title: "Map the Root Cause", questions: [] },
    actionPaths: {
        title: "Choose Your Path to Clarity",
        paths: [
            { name: "Mind", icon: "Mind", description: "Tools to break the mental cycle.", tools: ["Thought Labeling ('This is just a thought')", "Set a 'Thinking Timer' for 10 minutes", "Externalize thoughts by writing them down"] },
            { name: "Emotion", icon: "Emotion", description: "Tools to detach from the thoughts.", tools: ["Mindful Observation of Thoughts", "Acceptance ('It's okay to not have the answer')", "Engage in a hobby that requires focus"] },
            { name: "Behavior", icon: "Behavior", description: "Actions to get out of your head.", tools: ["Engage in physical activity", "Do a simple, tangible task (e.g., wash dishes)", "Talk to a friend about a completely different topic"] },
            { name: "Environment", icon: "Environment", description: "Change your scenery to change your mind.", tools: ["Go for a walk in nature", "Move to a different room", "Put on an upbeat playlist"] },
        ]
    }
  },
  {
    id: 'impulse-anger',
    name: 'Impulse Anger',
    description: "This pattern is defined by quick, intense flashes of frustration or anger that seem to come out of nowhere, often in response to a perceived injustice, obstacle, or violation of your expectations.",
    immediateReset: {
      title: "Immediate Reset: Clench and Release",
      steps: ["Tightly clench both of your fists for 5 seconds, noticing the tension.", "Exhale and completely release the tension, letting your hands go limp.", "Repeat 3 times, focusing on the difference between tension and release."]
    },
    sections: [
      { title: "Why It Happens", content: "This is often a protective response. Your brain perceives a threat—to your values, your time, your ego—and reacts with a burst of energy (anger) designed to eliminate that threat quickly." },
      { title: "Your Emotional Signal", content: "A rapid escalation from irritation to frustration or rage." },
      { title: "Your Thinking Signal", content: "'This is unfair!', 'How could they do that?', 'This shouldn't be happening.'" },
      { title: "What NOT To Do", content: "Do not act or speak in the first 10 seconds. The initial impulse is the least rational and most likely to cause regret." }
    ],
    rootCauseMapper: { title: "Map the Root Cause", questions: [] },
    actionPaths: {
      title: "Choose Your Path to Calm Control",
      paths: [
        { name: "Mind", icon: "Mind", description: "Tools to create a space between trigger and reaction.", tools: ["Identify Your Physical Warning Signs", "Question the 'Shoulds'", "Practice the '10-Second Rule'"] },
        { name: "Emotion", icon: "Emotion", description: "Tools to understand and process the anger.", tools: ["Name the Emotion Underneath (Hurt? Fear?)", "Channel the Energy into Movement", "Write an 'Angry Letter' (and don't send it)"] },
        { name: "Behavior", icon: "Behavior", description: "Actions to manage the impulse.", tools: ["Take a deliberate 'Time Out'", "Use a firm but respectful 'I' statement", "Practice deep, slow breathing"] },
        { name: "Environment", icon: "Environment", description: "Reduce triggers in your surroundings.", tools: ["Identify and Minimize Your Top Irritants", "Ensure you're not hungry or tired (HALT)", "Communicate boundaries clearly to others"] }
      ]
    }
  },
  {
    id: 'emotional-overwhelm',
    name: 'Emotional Overwhelm',
    description: "This pattern happens when your emotions become so intense and numerous that you can no longer process them effectively. It can feel like you're drowning in feelings, leading to shutdown or paralysis.",
    immediateReset: {
      title: "Immediate Reset: Temperature Shock",
      steps: ["Go to a sink and splash cold water on your face.", "Hold an ice cube in your hand for 30 seconds.", "This physical shock helps interrupt the intense emotional loop."]
    },
    sections: [
      { title: "Why It Happens", content: "It's a form of emotional circuit overload. A buildup of unprocessed feelings, high stress, or a single intense event can exceed your capacity to cope, causing your system to 'freeze'." },
      { title: "Your Emotional Signal", content: "Feeling numb, disconnected, tearful, or that everything is 'too much'." },
      { title: "Your Thinking Signal", content: "'I can't handle this', 'I don't know what to feel', 'I want to escape.'" },
      { title: "What NOT To Do", content: "Don't judge yourself for feeling this way or try to suppress the emotions. This just bottles them up for later." }
    ],
    rootCauseMapper: { title: "Map the Root Cause", questions: [] },
    actionPaths: {
      title: "Choose Your Path to Stability",
      paths: [
        { name: "Mind", icon: "Mind", description: "Tools to simplify your mental state.", tools: ["Focus on 'One Thing at a Time'", "Label Just One Emotion", "Lower Your Expectations for Today"] },
        { name: "Emotion", icon: "Emotion", description: "Tools to self-soothe and feel safe.", tools: ["Practice a 5-Minute Body Scan", "Wrap Yourself in a Heavy Blanket", "Listen to a Calming Playlist"] },
        { name: "Behavior", icon: "Behavior", description: "Actions to regain a sense of agency.", tools: ["Do one small, simple task (make tea, tidy one surface)", "Engage in a rhythmic, repetitive motion (e.g. rocking)", "Hydrate and have a small snack"] },
        { name: "Environment", icon: "Environment", description: "Create a safe and simple space.", tools: ["Dim the lights and reduce noise", "Go to a space where you feel safe", "Ask for space from others if needed"] }
      ]
    }
  },
  {
    id: 'internal-conflict',
    name: 'Internal Conflict',
    description: "This is the classic 'stuck between a rock and a hard place' feeling. A part of you wants one thing, while another part wants the complete opposite. This leads to indecision, procrastination, and mental exhaustion.",
    immediateReset: {
      title: "Immediate Reset: Hands on Heart & Head",
      steps: ["Place one hand on your heart and one hand on your forehead.", "Breathe deeply for 60 seconds.", "This simple action helps connect your emotional and rational centers without needing to 'solve' anything."]
    },
    sections: [
      { title: "Why It Happens", content: "This often arises when a choice pits two of your core values against each other (e.g., security vs. freedom), or when your 'shoulds' conflict with your 'wants'." },
      { title: "Your Emotional Signal", content: "Anxiety, confusion, guilt, and a feeling of being paralyzed." },
      { title: "Your Thinking Signal", content: "'If I do X, then Y will happen...', 'I should do this, but I really want that...', 'What's the right choice?'" },
      { title: "What NOT To Do", content: "Don't force a decision when you're in the peak of conflict. Don't shame yourself for being undecided." }
    ],
    rootCauseMapper: { title: "Map the Root Cause", questions: [] },
    actionPaths: {
      title: "Choose Your Path to Alignment",
      paths: [
        { name: "Mind", icon: "Mind", description: "Tools to clarify the conflict.", tools: ["Write Down the 'Two Voices'", "Identify the Values on Each Side", "Ask 'Which choice leads to growth?'"] },
        { name: "Emotion", icon: "Emotion", description: "Tools to validate both parts of you.", tools: ["Acknowledge the Needs of Each 'Part'", "Practice Self-Compassion for the Difficulty of the Choice", "Visualize a Wise Advisor and Ask for Their View"] },
        { name: "Behavior", icon: "Behavior", description: "Actions to break the paralysis.", tools: ["Take a 'Micro-Step' in One Direction to Test It", "Gather More Information (if needed)", "Set a Deadline for the Decision"] },
        { name: "Environment", icon: "Environment", description: "Get a fresh perspective from your surroundings.", tools: ["Talk it Through with a Trusted, Neutral Friend", "Change Your Scenery to Think More Clearly", "Remove Distractions to Focus on the Core Issue"] }
      ]
    }
  },
  {
    id: 'motivation-drop',
    name: 'Motivation Drop',
    description: "This pattern is a significant loss of energy, enthusiasm, and drive. Tasks that once felt manageable or even enjoyable now feel like climbing a mountain. It's more than just tiredness; it's a depletion of your inner 'why'.",
    immediateReset: {
      title: "Immediate Reset: The 2-Minute Rule",
      steps: ["Pick one very small task you've been avoiding.", "Set a timer for 2 minutes.", "Work on it for just those 2 minutes. Often, starting is the hardest part."]
    },
    sections: [
      { title: "Why It Happens", content: "This can be a symptom of burnout, a lack of clear goals, feeling disconnected from the rewards of your work, or simply physical and mental exhaustion." },
      { title: "Your Emotional Signal", content: "Apathy, emptiness, boredom, or a sense of 'what's the point?'" },
      { title: "Your Thinking Signal", content: "'I don't have the energy', 'I'll do it tomorrow', 'This doesn't matter anyway.'" },
      { title: "What NOT To Do", content: "Don't criticize yourself for being 'lazy'. This creates a shame spiral that further depletes motivation." }
    ],
    rootCauseMapper: { title: "Map the Root Cause", questions: [] },
    actionPaths: {
      title: "Choose Your Path to Re-Engagement",
      paths: [
        { name: "Mind", icon: "Mind", description: "Tools to reconnect with your purpose.", tools: ["Break Down a Large Goal into Tiny Steps", "Remind Yourself of Your 'Why'", "Visualize the Feeling of Accomplishment"] },
        { name: "Emotion", icon: "Emotion", description: "Tools to generate positive feelings.", tools: ["Celebrate the Smallest of Wins", "Listen to an Inspiring Song or Podcast", "Remember a Time You Felt Motivated"] },
        { name: "Behavior", icon: "Behavior", description: "Actions to build momentum.", tools: ["Pair a 'Want' with a 'Have-To' (Habit Stacking)", "Do a 5-minute 'Energy Burst' Activity (jumping jacks, stretching)", "Start with the Easiest Task First"] },
        { name: "Environment", icon: "Environment", description: "Optimize your surroundings for action.", tools: ["Create a Clean, Inspiring Workspace", "Put on an Upbeat 'Focus' Playlist", "Work alongside someone else (body doubling)"] }
      ]
    }
  },
  {
    id: 'focus-break',
    name: 'Focus Break',
    description: "This pattern is characterized by an inability to concentrate, being easily distracted, and a general feeling of mental fog. Your mind feels scattered, jumping from one thought to another without landing anywhere productive.",
    immediateReset: {
      title: "Immediate Reset: The 'One Point' Meditation",
      steps: ["Find a single, small object in front of you (a dot on the wall, a pen).", "Stare at it gently for 60 seconds.", "Your only job is to bring your attention back to it every time your mind wanders."]
    },
    sections: [
      { title: "Why It Happens", content: "Often a result of overstimulation, too much screen time, lack of sleep, or mental clutter. Your brain's 'executive function' is simply too tired to maintain attention." },
      { title: "Your Emotional Signal", content: "Frustration, impatience with yourself, feeling inefficient." },
      { title: "Your Thinking Signal", content: "'I can't concentrate', 'What was I just doing?', 'Let me just check this one thing...'" },
      { title: "What NOT To Do", content: "Don't try to multitask. This fragments your attention even further and makes the problem worse." }
    ],
    rootCauseMapper: { title: "Map the Root Cause", questions: [] },
    actionPaths: {
      title: "Choose Your Path to Clarity",
      paths: [
        { name: "Mind", icon: "Mind", description: "Tools to train your attention.", tools: ["Practice the Pomodoro Technique (25 min focus, 5 min break)", "Set a Single, Clear Intention for Your Work Block", "Write Down Distractions on a 'Later' List"] },
        { name: "Emotion", icon: "Emotion", description: "Tools to manage the frustration of distraction.", tools: ["Acknowledge Distractions with a Neutral 'There it is'", "Practice Self-Compassion for a Wandering Mind", "Take Breaks Before You Feel You Need Them"] },
        { name: "Behavior", icon: "Behavior", description: "Actions to support focus.", tools: ["Put your phone in another room or on 'Focus Mode'", "Close all unnecessary tabs and applications", "Get 5 minutes of physical movement"] },
        { name: "Environment", icon: "Environment", description: "Create a distraction-free zone.", tools: ["Use noise-cancelling headphones", "Set up a clean, dedicated workspace", "Let others know you need uninterrupted time"] }
      ]
    }
  },
  {
    id: 'relationship-friction',
    name: 'Relationship Friction',
    description: "This pattern involves recurring tension, misunderstanding, or conflict with another person. It feels like you're stuck in the same negative loop, where conversations go nowhere and resentment builds.",
    immediateReset: {
      title: "Immediate Reset: The 3-Breath Pause",
      steps: ["Before you speak or react, stop.", "Take one deep breath for yourself, to calm your system.", "Take a second deep breath with the intention of understanding the other person.", "Take a third deep breath to consider a wise response."]
    },
    sections: [
      { title: "Why It Happens", content: "Often rooted in unmet expectations, different communication styles, or unexpressed needs. The friction is a signal that something important is not being addressed." },
      { title: "Your Emotional Signal", content: "Resentment, hurt, defensiveness, loneliness." },
      { title: "Your Thinking Signal", content: "Assuming negative intent: 'They always...', 'They never...', 'They're trying to...'." },
      { title: "What NOT To Do", content: "Don't engage in 'blame-storming'. Don't bring up past issues during a current conflict." }
    ],
    rootCauseMapper: { title: "Map the Root Cause", questions: [] },
    actionPaths: {
      title: "Choose Your Path to Connection",
      paths: [
        { name: "Mind", icon: "Mind", description: "Tools to shift your perspective.", tools: ["Practice 'Curiosity over Judgment'", "Look for the 'Need' Behind Their Words", "Separate the Person from the Problem"] },
        { name: "Emotion", icon: "Emotion", description: "Tools to manage your emotional reactions.", tools: ["Identify and State Your Own Feeling ('I feel...')", "Practice Empathetic Listening", "Soothe Your Own Defensiveness First"] },
        { name: "Behavior", icon: "Behavior", description: "Actions for better communication.", tools: ["Use 'I statements' instead of 'You statements'", "Ask Open-Ended Questions", "Agree on a 'Time Out' Signal for heated moments"] },
        { name: "Environment", icon: "Environment", description: "Create a better space for communication.", tools: ["Choose a Neutral Time and Place to Talk", "Sit Side-by-Side, Not Face-to-Face", "Remove Distractions (like phones) During Important Conversations"] }
      ]
    }
  }
];

// ===================================
// 2. THINKING STYLE TEST
// ===================================

export const thinkingStyleTestQuestions: QuizQuestion[] = [
    {
        id: 'tsq1',
        text: 'When making a big decision, what do you prioritize?',
        multiple: true,
        options: [
            { text: 'The logical pros and cons.', scores: { 'logical': 2 } },
            { text: 'How it feels in my gut.', scores: { 'emotional': 2 } },
            { text: 'Getting it done quickly.', scores: { 'fast-reactive': 2 } },
            { text: 'Weighing logic against my feelings.', scores: { 'balanced': 2 } },
        ],
    },
    {
        id: 'tsq2',
        text: 'When faced with a new problem, your first instinct is to:',
        multiple: true,
        options: [
            { text: 'Break it down into smaller steps.', scores: { 'logical': 2 } },
            { text: 'Consider how it will affect people.', scores: { 'emotional': 2 } },
            { text: 'Try the first solution that comes to mind.', scores: { 'fast-reactive': 2 } },
            { text: 'Pause and consider the big picture.', scores: { 'balanced': 2 } },
        ],
    },
];

export const thinkingStyleResults: GenericTestResult[] = [
    {
        id: 'logical',
        name: 'Logical Thinker',
        description: 'You are an analytical and objective thinker. You excel at seeing patterns, organizing information, and making decisions based on facts and evidence. Your mind is your greatest tool for navigating the world.',
        strengths: ['Problem-solving', 'Planning and organization', 'Objectivity under pressure', 'Clear and rational communication'],
        challenges: ['Can sometimes overlook emotional nuances', 'May appear detached or cold to others', 'Prone to "analysis paralysis"', 'May struggle with ambiguity'],
        tips: ['Intentionally ask "How do I feel about this?" to integrate emotion.', 'Practice active listening to understand others\' perspectives.', 'Set deadlines for decisions to avoid over-analyzing.', 'Embrace that not all problems have a perfect, logical solution.'],
    },
    {
        id: 'emotional',
        name: 'Emotional Thinker',
        description: 'You connect with the world through feelings, empathy, and intuition. Your decisions are guided by your values and how outcomes will impact people, making you a deeply compassionate individual.',
        strengths: ['Highly empathetic and compassionate', 'Strong interpersonal skills', 'Intuitive about people and situations', 'Value-driven decision making'],
        challenges: ['Can be biased by personal feelings', 'May struggle with objective data', 'Can take criticism personally', 'Prone to emotional exhaustion'],
        tips: ['Balance intuition with facts by asking, "What is the evidence here?"', 'When feeling overwhelmed, try to separate your emotions from the situation.', 'Create emotional boundaries to avoid absorbing others\' stress.', 'Use your empathy as a strength in understanding, not just feeling.'],
    },
    {
        id: 'fast-reactive',
        name: 'Fast Reactive Thinker',
        description: 'You are decisive, instinctive, and action-oriented. You trust your gut and prefer to make a decision and move forward quickly, thriving in dynamic environments where rapid responses are valued.',
        strengths: ['Quick decision-making', 'Adaptable and responsive', 'Excellent in a crisis', 'Action-oriented and pragmatic'],
        challenges: ['May overlook important details', 'Can be impulsive', 'May not always consider long-term consequences', 'Can create hasty plans'],
        tips: ['Practice a "10-second pause" before reacting to important situations.', 'After an initial decision, ask, "What is one thing I might be missing?"', 'Schedule brief planning sessions to give your actions direction.', 'Collaborate with more analytical thinkers to cover blind spots.'],
    },
    {
        id: 'balanced',
        name: 'Balanced Thinker',
        description: 'You are a holistic thinker, skillfully blending logic and emotion. You see the value in both data and intuition, allowing you to make well-rounded, considered decisions that honor both the head and the heart.',
        strengths: ['Wise judgment and perspective', 'Sees the "big picture"', 'Both empathetic and rational', 'Makes thoughtful, well-rounded choices'],
        challenges: ['Can sometimes be slower to make decisions', 'May experience conflict when logic and emotion are at odds', 'Can sometimes over-qualify their opinions', 'Might struggle with purely data-driven or purely emotional people'],
        tips: ['Trust that your integrated approach is a strength, even if it takes more time.', 'If stuck, lean into the side (logic or emotion) that the situation calls for most.', 'Communicate your thought process so others understand the different factors you\'re weighing.', 'Embrace your ability to act as a bridge between different types of thinkers.'],
    },
];

// ===================================
// 3. EMOTIONAL PATTERN TEST
// ===================================

export const emotionalPatternTestQuestions: QuizQuestion[] = [
    {
        id: 'epq1',
        text: 'When you receive unexpected criticism, how do you react internally?',
        multiple: true,
        options: [
            { text: 'I feel it deeply and it can affect my mood for a while.', scores: { 'sensitive': 2 } },
            { text: 'I get defensive or angry almost immediately.', scores: { 'impulsive': 2 } },
            { text: 'I try to understand the feedback without a strong emotional reaction.', scores: { 'calm': 2 } },
            { text: 'I brush it off and try not to think about it.', scores: { 'avoidant': 2 } },
        ],
    },
];

export const emotionalPatternResults: GenericTestResult[] = [
    {
        id: 'sensitive',
        name: 'Sensitive',
        description: 'You experience emotions with great depth and nuance. This makes you highly empathetic, intuitive, and creative, but it can also mean you are more easily affected by your environment and the emotions of others.',
        strengths: ['High empathy', 'Strong intuition', 'Creativity', 'Deep connection with others'],
        challenges: ['Can become easily overwhelmed', 'May take things personally', 'Susceptible to emotional burnout', 'Absorbs stress from others'],
        tips: ['Practice grounding techniques to stay centered.', 'Set clear emotional boundaries.', 'Schedule regular downtime to recharge.', 'Distinguish between "my feelings" and "their feelings."'],
    },
    {
        id: 'impulsive',
        name: 'Impulsive',
        description: 'You react to emotions quickly and intensely. Your feelings are close to the surface, which can lead to powerful expressions of passion and authenticity, but also to reactions you might later regret.',
        strengths: ['Passionate and expressive', 'Authentic and honest', 'Quick to respond', 'Energetic'],
        challenges: ['Can lead to interpersonal conflict', 'Decisions made in the heat of the moment', 'Can be quick to anger or frustration', 'Emotional energy can be draining'],
        tips: ['Practice the "3-Breath Pause" before reacting.', 'Identify the physical cues that your emotions are rising (e.g., tight chest, clenched jaw).', 'Channel intense energy into physical activity.', 'Communicate your feelings using "I statements" after you\'ve had a moment to calm down.'],
    },
    {
        id: 'calm',
        name: 'Calm',
        description: 'You tend to be emotionally steady and are not easily rattled. You can maintain perspective in stressful situations, making you a rock for others. Your default state is one of composure and balance.',
        strengths: ['Level-headed and resilient', 'A soothing presence for others', 'Makes rational decisions under pressure', 'Doesn\'t get caught up in drama'],
        challenges: ['May sometimes suppress or ignore emotions', 'Can seem detached or unemotional to others', 'Might have trouble accessing deep feelings', 'May be slow to recognize their own stress'],
        tips: ['Schedule regular "emotional check-ins" with yourself.', 'Practice naming your feelings, even if they are mild.', 'Let trusted people know that your calm exterior doesn\'t mean you don\'t care.', 'Ensure you are processing feelings, not just bottling them up.'],
    },
    {
        id: 'avoidant',
        name: 'Avoidant',
        description: 'Your tendency is to push away, minimize, or distract yourself from difficult emotions. You prefer to focus on the practical and tangible rather than dwell on uncomfortable feelings, keeping a sense of control.',
        strengths: ['Can stay functional and productive under pressure', 'Practical problem-solver', 'Doesn\'t get bogged down by negative feelings', 'Self-reliant'],
        challenges: ['Unprocessed emotions can build up over time', 'May have difficulty with deep emotional intimacy', 'Can come across as dismissive of others\' feelings', 'May use distraction as a crutch'],
        tips: ['Set aside safe, small amounts of time to gently explore feelings (e.g., 5 minutes of journaling).', 'Practice labeling emotions without judgment ("I notice I\'m feeling frustrated").', 'Start by acknowledging small emotions to build comfort.', 'Recognize that feeling an emotion doesn\'t mean you have to act on it.'],
    },
];

// ===================================
// 4. BEHAVIOR TEST
// ===================================

export const behaviorTestQuestions: QuizQuestion[] = [
    {
        id: 'btq1',
        text: 'How do you typically approach a weekend with no plans?',
        multiple: true,
        options: [
            { text: 'I make a list of things I want to accomplish.', scores: { 'planner': 2 } },
            { text: 'I wait to see what I feel like doing in the moment.', scores: { 'spontaneous': 2 } },
            { text: 'I think about all the possibilities and sometimes do nothing.', scores: { 'overthinker': 2 } },
            { text: 'I find a project or activity to dive into immediately.', scores: { 'action-taker': 2 } },
        ],
    },
];

export const behaviorResults: GenericTestResult[] = [
    {
        id: 'planner',
        name: 'The Planner',
        description: 'You thrive on structure, organization, and having a clear plan. You feel most comfortable when you know what to expect and have a roadmap to follow. This makes you reliable, prepared, and efficient.',
        strengths: ['Highly organized', 'Reliable and dependable', 'Excellent at managing complex projects', 'Forward-thinking'],
        challenges: ['Can be rigid or inflexible', 'May feel stressed by unexpected changes', 'Can miss out on spontaneous opportunities', 'May over-focus on details'],
        tips: ['Schedule "unstructured" time into your week.', 'Practice saying "yes" to one small, unplanned thing.', 'Focus on the overall goal, not just the perfect plan.', 'Create a "Plan B" to build flexibility.'],
    },
    {
        id: 'spontaneous',
        name: 'The Spontaneous',
        description: 'You thrive on flexibility, freedom, and new experiences. You prefer to go with the flow and see where the moment takes you rather than sticking to a rigid plan, making you adaptable and fun-loving.',
        strengths: ['Highly adaptable', 'Creative problem-solver', 'Good at improvising', 'Lives in the present moment'],
        challenges: ['May struggle with long-term planning', 'Can be prone to procrastination on routine tasks', 'May have trouble with commitment', 'Can appear unreliable to Planners'],
        tips: ['Set broad goals but allow for flexibility in how you achieve them.', 'Use your creativity to make routine tasks more engaging.', 'Pair up with a Planner to balance each other out.', 'Use tools like reminders to keep track of important commitments.'],
    },
    {
        id: 'overthinker',
        name: 'The Overthinker',
        description: 'You have a rich, active inner world and a natural tendency to analyze situations from every angle before taking action. Your thoughtfulness ensures that your decisions are well-considered.',
        strengths: ['Thorough and detail-oriented', 'Anticipates potential problems', 'Makes well-informed decisions', 'Deep and insightful'],
        challenges: ['Prone to "analysis paralysis"', 'Can miss opportunities while deliberating', 'May experience decision fatigue', 'Can get lost in thought'],
        tips: ['Set a "decision deadline" for yourself.', 'Break tasks into tiny first steps to overcome the inertia of thinking.', 'Trust your intuition after a reasonable amount of analysis.', 'Practice grounding exercises to get out of your head.'],
    },
    {
        id: 'action-taker',
        name: 'The Action-Taker',
        description: 'You are driven by momentum and results. You believe in learning by doing and would rather make a move and correct your course later than wait for the perfect plan. You make things happen.',
        strengths: ['Highly productive and decisive', 'Excellent at starting projects', 'Builds momentum quickly', 'Not afraid of failure'],
        challenges: ['Can be impulsive', 'May overlook important planning and details', 'Can sometimes rush into things', 'May need to redo work that was done too hastily'],
        tips: ['Before diving in, ask, "What is the one most important thing to know before I start?"', 'Schedule brief (5-10 minute) planning sessions to give your actions direction.', 'Collaborate with Planners or Overthinkers to get a more rounded view.', 'Practice celebrating the process, not just the final outcome.'],
    },
];


// ===================================
// 5. SOLUTIONS LIBRARY DATA
// ===================================

export const solutionsData: Solution[] = [
    {
        id: 'overthinking-loop-breaker',
        name: 'Overthinking Loop Breaker',
        shortDescription: 'A toolkit to help you get out of your head, stop repetitive thoughts, and find mental clarity.',
        sections: [
            { title: 'What Causes This Problem?', content: ["Overthinking is often a misguided attempt by your brain to gain control and protect you from uncertainty. It can be triggered by stress, fear of making the wrong decision, or a past event you can't let go of."] },
            { title: 'Immediate Action (The 5-4-3-2-1 Method)', content: ["Acknowledge 5 things you can see around you.", "Acknowledge 4 things you can touch.", "Acknowledge 3 things you can hear.", "Acknowledge 2 things you can smell.", "Acknowledge 1 thing you can taste. This pulls your attention from your thoughts to your senses."] },
            { title: 'How to Apply This Solution', content: ["Use the 'Thought Labeling' technique: when you notice you're looping, simply say in your mind, 'This is overthinking.' This creates distance.", "Set a 10-minute 'Worry Timer'. Allow yourself to overthink as much as you want in that window. When the timer goes off, you must move on to a different activity."] },
            { title: 'What to Avoid', content: ["Avoid trying to 'force' the thoughts to stop; this often makes them stronger. Don't seek endless reassurance from others, as this can fuel the loop."] }
        ]
    },
    {
        id: 'anxiety-stabilizer',
        name: 'Anxiety Stabilizer',
        shortDescription: 'Calm your nervous system and manage feelings of worry and dread with these grounding techniques.',
        sections: [
            { title: 'What Causes This Problem?', content: ["Anxiety is your body's natural alarm system. It becomes a problem when the alarm is stuck in the 'on' position, reacting to perceived threats instead of real ones. It's often fueled by uncertainty about the future."] },
            { title: 'Immediate Action (Physiological Sigh)', content: ["Take a slow, deep breath in through your nose.", "At the top of the inhale, take another short, sharp sip of air.", "Exhale very slowly through your mouth, as if through a straw. Repeat 2-3 times. This is one of the fastest ways to regulate your nervous system."] },
            { title: 'How to Apply This Solution', content: ["Practice 'Fact vs. Feeling'. Ask yourself: 'What is the feeling telling me?' and 'What are the actual facts of the situation?' This separates emotion from reality.", "Externalize the worry. Write down everything you are anxious about on a piece of paper. This gets it out of your head and makes it feel more manageable."] },
            { title: 'What to Avoid', content: ["Don't avoid situations that make you anxious, as this reinforces the fear. Avoid excessive caffeine or sugar, which can heighten the physical symptoms of anxiety."] }
        ]
    },
    {
        id: 'anger-reset-system',
        name: 'Anger Reset System',
        shortDescription: 'Tools to manage flashes of frustration and irritation, creating a pause between trigger and reaction.',
        sections: [
            { title: 'What Causes This Problem?', content: ["Anger is a secondary emotion, often masking something deeper like hurt, fear, or injustice. It's a signal that a boundary has been crossed or an important need isn't being met."] },
            { title: 'Immediate Action (The 10-Second Timeout)', content: ["The moment you feel anger rising, commit to a 10-second pause. Do not speak or act. Focus on your breath. This small window is enough for your rational brain to catch up with your emotional brain."] },
            { title: 'How to Apply This Solution', content: ["Identify the thought that triggered the anger. Is it a 'should' statement? (e.g., 'They should know better'). Challenge that thought.", "After you've calmed down, ask yourself: 'What am I really feeling underneath this anger?' and 'What do I need right now?'"] },
            { title: 'What to Avoid', content: ["Avoid making decisions or having important conversations while angry. Avoid blaming others and instead focus on your own feelings and needs."] }
        ]
    },
    {
        id: 'stress-overload-relief',
        name: 'Stress Overload Relief',
        shortDescription: 'Practical steps to reduce the feeling of being overwhelmed and regain a sense of control.',
        sections: [
            { title: 'What Causes This Problem?', content: ["Stress overload happens when life's demands consistently outstrip your capacity to cope. It's a sign that you are carrying too much for too long without adequate rest and recovery."] },
            { title: 'Immediate Action (Brain Dump)', content: ["Take a piece of paper and write down every single thing that's on your mind—tasks, worries, reminders. Get it all out of your head and onto the page. This externalizes the stress and makes it feel more manageable."] },
            { title: 'How to Apply This Solution', content: ["From your brain dump list, identify the 'Top 1' most important or urgent task. Focus only on that one thing.", "Schedule a non-negotiable 15-minute break into your day where you do something completely unrelated to your tasks."] },
            { title: 'What to Avoid', content: ["Avoid multitasking. It feels productive but actually increases cognitive load and stress. Avoid sacrificing sleep to get more done; it's counterproductive."] }
        ]
    },
    {
        id: 'emotional-grounding-toolkit',
        name: 'Emotional Grounding Toolkit',
        shortDescription: 'Techniques to anchor yourself in the present moment when you feel emotionally overwhelmed or disconnected.',
        sections: [
            { title: 'What Causes This Problem?', content: ["Emotional overwhelm occurs when feelings become too intense to process. Grounding helps by pulling your attention away from the overwhelming internal storm and onto the stable, external world."] },
            { title: "Immediate Action (Feel Your Feet)", content: ["Wherever you are, bring all your attention to the soles of your feet. Notice the pressure against the floor or your shoes. Wiggle your toes. This simple act physically and mentally grounds you to the present moment."] },
            { title: 'How to Apply This Solution', content: ["Engage your senses with the 5-4-3-2-1 method (see 'Overthinking' solution).", "Hold a textured object and focus entirely on how it feels—its temperature, weight, and texture."] },
            { title: 'What to Avoid', content: ["Avoid trying to 'think' your way out of the feeling. The goal is to shift from thinking to sensing."] }
        ]
    },
    {
        id: 'focus-enhancer-kit',
        name: 'Focus Enhancer Kit',
        shortDescription: 'Tools to sharpen your concentration, minimize distractions, and enter a state of flow.',
        sections: [
            { title: 'What Causes This Problem?', content: ["A loss of focus is often a result of overstimulation, too much screen time, lack of sleep, or mental clutter. Your brain's 'executive function' becomes too tired to maintain attention."] },
            { title: "Immediate Action (The 'One Point' Meditation)", content: ["Find a single, small object in front of you (a dot on the wall, a pen). Stare at it gently for 60 seconds. Your only job is to bring your attention back to it every time your mind wanders."] },
            { title: 'How to Apply This Solution', content: ["Use the Pomodoro Technique: work with intense focus for 25 minutes, then take a 5-minute break. This trains your brain to concentrate in short bursts.", "Before starting a task, set a single, clear intention. For example, 'For the next 45 minutes, I will only work on writing this report.'"] },
            { title: 'What to Avoid', content: ["Avoid multitasking at all costs. It fragments your attention and makes it harder to regain deep focus. Don't keep your phone within arm's reach; put it in another room or on silent."] }
        ]
    }
];
