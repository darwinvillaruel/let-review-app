const behavior = [
  {
    id: 1,
    question: "What is the basic principle behind behaviorism?",
    answers: [
      {
        text: "Behavior is influenced by internal thoughts",
        correct: false,
      },
      {
        text: "Behavior is shaped by environmental stimuli",
        correct: true,
      },
      {
        text: "Behavior is solely a result of genetics",
        correct: false,
      },
      {
        text: "Behavior is unpredictable and random",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Who is considered the father of behaviorism?",
    answers: [
      {
        text: "Sigmund Freud",
        correct: false,
      },
      {
        text: "John B. Watson",
        correct: true,
      },
      {
        text: "Carl Rogers",
        correct: false,
      },
      {
        text: "Jean Piaget",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "What is the difference between classical and operant conditioning?",
    answers: [
      {
        text: "Classical conditioning uses reinforcement, operant conditioning uses association",
        correct: false,
      },
      {
        text: "Classical conditioning associates stimuli, operant conditioning involves reinforcement",
        correct: true,
      },
      {
        text: "Both are the same and involve rewards",
        correct: false,
      },
      {
        text: "Operant conditioning is reflex-based, classical is behavior-based",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question:
      "Describe Pavlov’s experiment with dogs and classical conditioning.",
    answers: [
      {
        text: "Pavlov trained dogs to perform tricks for food",
        correct: false,
      },
      {
        text: "Pavlov conditioned dogs to salivate at the sound of a bell",
        correct: true,
      },
      {
        text: "Pavlov trained dogs to press a lever for food",
        correct: false,
      },
      {
        text: "Pavlov observed wild dogs in their natural habitat",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "What is the role of reinforcement in behaviorism?",
    answers: [
      {
        text: "Reinforcement increases the likelihood of a behavior",
        correct: true,
      },
      {
        text: "Reinforcement punishes unwanted behavior",
        correct: false,
      },
      {
        text: "Reinforcement decreases the probability of a behavior",
        correct: false,
      },
      {
        text: "Reinforcement has no impact on behavior",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "How does negative reinforcement differ from punishment?",
    answers: [
      {
        text: "Negative reinforcement involves adding a stimulus to reduce behavior",
        correct: false,
      },
      {
        text: "Negative reinforcement involves removing a stimulus to increase behavior",
        correct: true,
      },
      {
        text: "Negative reinforcement and punishment are the same",
        correct: false,
      },
      {
        text: "Punishment increases the likelihood of a behavior, negative reinforcement decreases it",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question:
      "What are the key differences between positive and negative reinforcement?",
    answers: [
      {
        text: "Positive reinforcement adds a reward, negative reinforcement removes an aversive stimulus",
        correct: true,
      },
      {
        text: "Positive reinforcement decreases behavior, negative reinforcement increases it",
        correct: false,
      },
      {
        text: "Both involve punishment of unwanted behavior",
        correct: false,
      },
      {
        text: "There are no differences between the two",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "Who developed operant conditioning theory?",
    answers: [
      {
        text: "Ivan Pavlov",
        correct: false,
      },
      {
        text: "B.F. Skinner",
        correct: true,
      },
      {
        text: "Albert Bandura",
        correct: false,
      },
      {
        text: "Jean Piaget",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "What is the concept of a “Skinner box” in behavioral research?",
    answers: [
      {
        text: "A box used to condition humans in experiments",
        correct: false,
      },
      {
        text: "A controlled environment for studying animal behavior",
        correct: true,
      },
      {
        text: "A tool to measure brain activity during conditioning",
        correct: false,
      },
      {
        text: "A method for classifying behavioral patterns",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "What is shaping in the context of operant conditioning?",
    answers: [
      {
        text: "The process of training behaviors through step-by-step reinforcement",
        correct: true,
      },
      {
        text: "Using punishment to stop unwanted behaviors",
        correct: false,
      },
      {
        text: "Conditioning animals to respond to stimuli",
        correct: false,
      },
      {
        text: "Teaching complex behaviors through direct punishment",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "What does extinction mean in classical conditioning?",
    answers: [
      {
        text: "When the conditioned stimulus is presented without reinforcement",
        correct: false,
      },
      {
        text: "When the conditioned response fades after repeated exposure without the unconditioned stimulus",
        correct: true,
      },
      {
        text: "When reinforcement increases after a behavior",
        correct: false,
      },
      {
        text: "When punishment is used repeatedly to stop behavior",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question:
      "Which behaviorist believed that emotions, like fear, could be conditioned?",
    answers: [
      {
        text: "B.F. Skinner",
        correct: false,
      },
      {
        text: "John B. Watson",
        correct: true,
      },
      {
        text: "Edward Thorndike",
        correct: false,
      },
      {
        text: "Ivan Pavlov",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "In classical conditioning, what is an unconditioned response?",
    answers: [
      {
        text: "A learned response to a neutral stimulus",
        correct: false,
      },
      {
        text: "A reflexive response to an unconditioned stimulus",
        correct: true,
      },
      {
        text: "A neutral response to reinforcement",
        correct: false,
      },
      {
        text: "A punishment-induced reaction",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question:
      "What type of reinforcement schedule produces the highest rate of response?",
    answers: [
      {
        text: "Fixed interval schedule",
        correct: false,
      },
      {
        text: "Variable ratio schedule",
        correct: true,
      },
      {
        text: "Fixed ratio schedule",
        correct: false,
      },
      {
        text: "Variable interval schedule",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "What is the goal of punishment in behaviorism?",
    answers: [
      {
        text: "To strengthen desirable behaviors",
        correct: false,
      },
      {
        text: "To decrease the occurrence of a behavior",
        correct: true,
      },
      {
        text: "To increase the likelihood of a behavior",
        correct: false,
      },
      {
        text: "To neutralize the effects of reinforcement",
        correct: false,
      },
    ],
  },
  {
    id: 16,
    question: "What is the law of effect proposed by Edward Thorndike?",
    answers: [
      {
        text: "Responses that lead to satisfaction will be repeated",
        correct: true,
      },
      {
        text: "Punished behaviors will be strengthened",
        correct: false,
      },
      {
        text: "Only positive reinforcements can shape behavior",
        correct: false,
      },
      {
        text: "Behavior is controlled by random events",
        correct: false,
      },
    ],
  },
  {
    id: 17,
    question:
      "What is the difference between primary and secondary reinforcers?",
    answers: [
      {
        text: "Primary reinforcers are learned, secondary are biological",
        correct: false,
      },
      {
        text: "Primary reinforcers are biological, secondary are learned",
        correct: true,
      },
      {
        text: "There is no distinction between the two",
        correct: false,
      },
      {
        text: "Secondary reinforcers are more effective than primary",
        correct: false,
      },
    ],
  },
  {
    id: 18,
    question: "Which of the following is an example of negative reinforcement?",
    answers: [
      {
        text: "Giving a student a reward for good behavior",
        correct: false,
      },
      {
        text: "Removing homework as a reward for participation",
        correct: true,
      },
      {
        text: "Assigning extra work for disruptive behavior",
        correct: false,
      },
      {
        text: "Using detention to punish rule-breaking",
        correct: false,
      },
    ],
  },
  {
    id: 19,
    question: "What is stimulus generalization?",
    answers: [
      {
        text: "Responding only to the original conditioned stimulus",
        correct: false,
      },
      {
        text: "Responding similarly to stimuli that resemble the conditioned stimulus",
        correct: true,
      },
      {
        text: "Refusing to respond to any stimuli",
        correct: false,
      },
      {
        text: "Learning to differentiate between two different stimuli",
        correct: false,
      },
    ],
  },
  {
    id: 20,
    question:
      "In operant conditioning, what does it mean to 'extinguish' a behavior?",
    answers: [
      {
        text: "To eliminate a conditioned response by stopping reinforcement",
        correct: true,
      },
      {
        text: "To increase the likelihood of a behavior",
        correct: false,
      },
      {
        text: "To use punishment to permanently stop a behavior",
        correct: false,
      },
      {
        text: "To strengthen a behavior with rewards",
        correct: false,
      },
    ],
  },
  {
    id: 21,
    question: "What is an example of a fixed interval reinforcement schedule?",
    answers: [
      {
        text: "Rewarding a rat with food every time it presses a lever",
        correct: false,
      },
      {
        text: "Rewarding a student with a certificate every month for good behavior",
        correct: true,
      },
      {
        text: "Rewarding a child with praise after each correct answer",
        correct: false,
      },
      {
        text: "Giving a bonus to employees after reaching a sales target",
        correct: false,
      },
    ],
  },
  {
    id: 22,
    question: "What is the primary focus of B.F. Skinner's research?",
    answers: [
      {
        text: "The study of cognitive processes",
        correct: false,
      },
      {
        text: "The effects of reinforcement and punishment on behavior",
        correct: true,
      },
      {
        text: "The impact of genetics on behavior",
        correct: false,
      },
      {
        text: "The development of moral reasoning",
        correct: false,
      },
    ],
  },
  {
    id: 23,
    question: "In operant conditioning, what is a 'discriminative stimulus'?",
    answers: [
      {
        text: "A stimulus that signals the availability of reinforcement",
        correct: true,
      },
      {
        text: "A stimulus that decreases the likelihood of a behavior",
        correct: false,
      },
      {
        text: "A stimulus that causes an automatic response",
        correct: false,
      },
      {
        text: "A stimulus used to punish unwanted behaviors",
        correct: false,
      },
    ],
  },
  {
    id: 24,
    question:
      "What is an example of a variable interval reinforcement schedule?",
    answers: [
      {
        text: "Receiving a paycheck every two weeks",
        correct: false,
      },
      {
        text: "Winning a lottery with unpredictable draw dates",
        correct: true,
      },
      {
        text: "Getting a bonus after completing a project",
        correct: false,
      },
      {
        text: "Getting a reward for every fifth correct response",
        correct: false,
      },
    ],
  },
  {
    id: 25,
    question: "What is the primary purpose of punishment in behaviorism?",
    answers: [
      {
        text: "To increase the frequency of a behavior",
        correct: false,
      },
      {
        text: "To decrease the frequency of a behavior",
        correct: true,
      },
      {
        text: "To reinforce positive behaviors",
        correct: false,
      },
      {
        text: "To provide rewards for correct responses",
        correct: false,
      },
    ],
  },
  {
    id: 26,
    question:
      "Which concept refers to the gradual strengthening of a behavior through successive approximations?",
    answers: [
      {
        text: "Shaping",
        correct: true,
      },
      {
        text: "Extinction",
        correct: false,
      },
      {
        text: "Stimulus generalization",
        correct: false,
      },
      {
        text: "Discriminative stimulus",
        correct: false,
      },
    ],
  },
  {
    id: 27,
    question: "What does the term 'conditioned stimulus' refer to?",
    answers: [
      {
        text: "A stimulus that naturally elicits a response",
        correct: false,
      },
      {
        text: "A stimulus that initially has no effect but becomes associated with an unconditioned stimulus",
        correct: true,
      },
      {
        text: "A response that is automatically triggered by an unconditioned stimulus",
        correct: false,
      },
      {
        text: "A stimulus that always causes the same response",
        correct: false,
      },
    ],
  },
  {
    id: 28,
    question: "In behaviorism, what is meant by 'positive reinforcement'?",
    answers: [
      {
        text: "Adding a pleasant stimulus to increase a behavior",
        correct: true,
      },
      {
        text: "Removing an unpleasant stimulus to increase a behavior",
        correct: false,
      },
      {
        text: "Adding an unpleasant stimulus to decrease a behavior",
        correct: false,
      },
      {
        text: "Removing a pleasant stimulus to decrease a behavior",
        correct: false,
      },
    ],
  },
  {
    id: 29,
    question: "What is an example of a fixed ratio reinforcement schedule?",
    answers: [
      {
        text: "A worker receives a bonus for every 10 units produced",
        correct: true,
      },
      {
        text: "A dog receives a treat every time it hears a bell",
        correct: false,
      },
      {
        text: "A student gets a reward after every 30 minutes of study",
        correct: false,
      },
      {
        text: "A rat receives food after pressing a lever at random intervals",
        correct: false,
      },
    ],
  },
  {
    id: 30,
    question: "What does 'operant conditioning' focus on?",
    answers: [
      {
        text: "The automatic reflexes in response to stimuli",
        correct: false,
      },
      {
        text: "The use of rewards and punishments to shape behavior",
        correct: true,
      },
      {
        text: "The development of language and cognitive skills",
        correct: false,
      },
      {
        text: "The influence of social interactions on learning",
        correct: false,
      },
    ],
  },
  {
    id: 31,
    question:
      "In classical conditioning, what does the term 'conditioned response' mean?",
    answers: [
      {
        text: "A response that is naturally occurring",
        correct: false,
      },
      {
        text: "A learned response to a previously neutral stimulus",
        correct: true,
      },
      {
        text: "A reflexive response to an unconditioned stimulus",
        correct: false,
      },
      {
        text: "A response that decreases over time",
        correct: false,
      },
    ],
  },
  {
    id: 32,
    question: "What is the purpose of a 'reinforcement schedule'?",
    answers: [
      {
        text: "To determine the timing and frequency of reinforcement",
        correct: true,
      },
      {
        text: "To measure the intensity of a behavioral response",
        correct: false,
      },
      {
        text: "To increase the number of conditioned stimuli",
        correct: false,
      },
      {
        text: "To punish undesirable behaviors effectively",
        correct: false,
      },
    ],
  },
  {
    id: 33,
    question:
      "What is the term 'extinction burst' referring to in behaviorism?",
    answers: [
      {
        text: "An immediate increase in the frequency of a behavior before it decreases",
        correct: true,
      },
      {
        text: "A sudden decrease in the intensity of a behavior",
        correct: false,
      },
      {
        text: "The introduction of a new conditioned stimulus",
        correct: false,
      },
      {
        text: "The gradual fading of a conditioned response",
        correct: false,
      },
    ],
  },
  {
    id: 34,
    question: "What is the role of 'modeling' in social learning theory?",
    answers: [
      {
        text: "To observe and imitate behaviors from others",
        correct: true,
      },
      {
        text: "To reinforce behaviors through positive feedback",
        correct: false,
      },
      {
        text: "To condition responses through repeated exposure",
        correct: false,
      },
      {
        text: "To reduce the frequency of undesirable behaviors",
        correct: false,
      },
    ],
  },
  {
    id: 35,
    question: "What does 'stimulus discrimination' involve?",
    answers: [
      {
        text: "Responding differently to distinct stimuli",
        correct: true,
      },
      {
        text: "Responding similarly to all stimuli",
        correct: false,
      },
      {
        text: "Ignoring all stimuli to avoid conditioning",
        correct: false,
      },
      {
        text: "Responding to a conditioned stimulus only once",
        correct: false,
      },
    ],
  },
  {
    id: 36,
    question: "How does 'positive punishment' work in behaviorism?",
    answers: [
      {
        text: "Adding an aversive stimulus to decrease a behavior",
        correct: true,
      },
      {
        text: "Removing a pleasant stimulus to increase a behavior",
        correct: false,
      },
      {
        text: "Adding a pleasant stimulus to increase a behavior",
        correct: false,
      },
      {
        text: "Removing an aversive stimulus to decrease a behavior",
        correct: false,
      },
    ],
  },
  {
    id: 37,
    question: "What is 'token economy' in behavior modification?",
    answers: [
      {
        text: "Using tokens or rewards to reinforce desired behaviors",
        correct: true,
      },
      {
        text: "Using tokens to punish undesired behaviors",
        correct: false,
      },
      {
        text: "A method to measure behavioral changes",
        correct: false,
      },
      {
        text: "A technique to study the effects of punishment",
        correct: false,
      },
    ],
  },
  {
    id: 38,
    question: "What is the term 'response cost' in behaviorism?",
    answers: [
      {
        text: "Removing a token or reward as a consequence for undesired behavior",
        correct: true,
      },
      {
        text: "Providing a reward for a specific response",
        correct: false,
      },
      {
        text: "Using verbal reprimands to decrease behavior",
        correct: false,
      },
      {
        text: "Introducing a new behavior for a reward",
        correct: false,
      },
    ],
  },
  {
    id: 39,
    question: "What does 'behavior modification' refer to?",
    answers: [
      {
        text: "Changing behavior through various techniques like reinforcement and punishment",
        correct: true,
      },
      {
        text: "Changing the physical environment to influence behavior",
        correct: false,
      },
      {
        text: "Modifying behavior by altering cognitive processes",
        correct: false,
      },
      {
        text: "Changing behavior through genetic manipulation",
        correct: false,
      },
    ],
  },
  {
    id: 40,
    question: "What is an example of a variable ratio reinforcement schedule?",
    answers: [
      {
        text: "A slot machine that pays out after an unpredictable number of pulls",
        correct: true,
      },
      {
        text: "A person receives a monthly salary regardless of performance",
        correct: false,
      },
      {
        text: "A dog receives a treat after every third trick",
        correct: false,
      },
      {
        text: "A student is given extra credit every time they turn in homework on time",
        correct: false,
      },
    ],
  },
  {
    id: 41,
    question: "How does 'latency' affect behavior in operant conditioning?",
    answers: [
      {
        text: "Latency refers to the delay between a stimulus and response",
        correct: true,
      },
      {
        text: "Latency is the frequency of a behavior over time",
        correct: false,
      },
      {
        text: "Latency is the strength of a response to a stimulus",
        correct: false,
      },
      {
        text: "Latency measures the intensity of a behavior",
        correct: false,
      },
    ],
  },
  {
    id: 42,
    question: "What does 'reinforcement' mean in behaviorism?",
    answers: [
      {
        text: "A consequence that strengthens a behavior",
        correct: true,
      },
      {
        text: "A consequence that weakens a behavior",
        correct: false,
      },
      {
        text: "A method to ignore unwanted behaviors",
        correct: false,
      },
      {
        text: "A process of learning through observation",
        correct: false,
      },
    ],
  },
  {
    id: 43,
    question: "What is the effect of 'overjustification' in behaviorism?",
    answers: [
      {
        text: "Reducing intrinsic motivation due to excessive external rewards",
        correct: true,
      },
      {
        text: "Increasing intrinsic motivation through natural rewards",
        correct: false,
      },
      {
        text: "Neutralizing the effects of reinforcement",
        correct: false,
      },
      {
        text: "Increasing the effectiveness of punishment",
        correct: false,
      },
    ],
  },
  {
    id: 44,
    question: "In behaviorism, what is the 'premack principle'?",
    answers: [
      {
        text: "Using a preferred activity to reinforce a less preferred activity",
        correct: true,
      },
      {
        text: "Punishing an undesirable behavior to increase a desired one",
        correct: false,
      },
      {
        text: "Replacing an old behavior with a new one",
        correct: false,
      },
      {
        text: "Using multiple reinforcements for complex behaviors",
        correct: false,
      },
    ],
  },
  {
    id: 45,
    question: "What is 'self-management' in behaviorism?",
    answers: [
      {
        text: "Applying behavior modification techniques to oneself",
        correct: true,
      },
      {
        text: "Managing one's environment to influence others' behavior",
        correct: false,
      },
      {
        text: "Observing and recording others' behaviors for analysis",
        correct: false,
      },
      {
        text: "Using external rewards to control personal behaviors",
        correct: false,
      },
    ],
  },
  {
    id: 46,
    question: "What is 'escape conditioning'?",
    answers: [
      {
        text: "Learning to perform a behavior to avoid an unpleasant stimulus",
        correct: true,
      },
      {
        text: "Conditioning a response to escape from a positive stimulus",
        correct: false,
      },
      {
        text: "Using rewards to escape from a difficult situation",
        correct: false,
      },
      {
        text: "Removing a stimulus to condition a new behavior",
        correct: false,
      },
    ],
  },
  {
    id: 47,
    question: "What is 'avoidance conditioning'?",
    answers: [
      {
        text: "Learning to avoid an unpleasant situation before it happens",
        correct: true,
      },
      {
        text: "Using punishment to avoid a behavior",
        correct: false,
      },
      {
        text: "Conditioning to escape from an unpleasant situation",
        correct: false,
      },
      {
        text: "Reinforcing a behavior to prevent a negative outcome",
        correct: false,
      },
    ],
  },
  {
    id: 48,
    question: "What is 'operant extinction'?",
    answers: [
      {
        text: "The reduction of a behavior when reinforcement is stopped",
        correct: true,
      },
      {
        text: "The increase of a behavior when reinforcement is applied",
        correct: false,
      },
      {
        text: "The application of punishment to decrease a behavior",
        correct: false,
      },
      {
        text: "The introduction of new reinforcement schedules",
        correct: false,
      },
    ],
  },
  {
    id: 49,
    question: "What does 'behavioral chaining' involve?",
    answers: [
      {
        text: "Breaking down a complex behavior into smaller, manageable steps",
        correct: true,
      },
      {
        text: "Using punishment to correct a series of behaviors",
        correct: false,
      },
      {
        text: "Linking several behaviors together with rewards",
        correct: false,
      },
      {
        text: "Creating a sequence of conditioned responses",
        correct: false,
      },
    ],
  },
  {
    id: 50,
    question: "What is 'vicarious reinforcement'?",
    answers: [
      {
        text: "Learning from observing others being reinforced",
        correct: true,
      },
      {
        text: "Directly receiving reinforcement for one's own behavior",
        correct: false,
      },
      {
        text: "Avoiding reinforcement to prevent unwanted behaviors",
        correct: false,
      },
      {
        text: "Using rewards to influence others' behavior indirectly",
        correct: false,
      },
    ],
  },
];

export default behavior;
