export interface Topic {
  id: string;
  title: string;
  lesson: {
    title: string;
    content: string;
  };
  quiz: {
    title: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  };
}

export interface Subject {
  id: string;
  name: string;
  grade: number;
  topics: Topic[];
}

export const subjects: Subject[] = [
  // Grade 10 Subjects
  {
    id: 'maths-10',
    name: 'Maths',
    grade: 10,
    topics: [
      {
        id: 'algebra-10',
        title: 'Advanced Algebra',
        lesson: {
          title: 'Advanced Algebra Concepts',
          content: 'Advanced algebra covers quadratic equations, functions, and inequalities...',
        },
        quiz: {
          title: 'Advanced Algebra Quiz',
          questions: [
            {
              question: 'Solve for x: x^2 - 5x + 6 = 0',
              options: ['x=2,3', 'x=1,6', 'x=-2,-3'],
              answer: 'x=2,3',
            },
          ],
        },
      },
      {
        id: 'geometry-10',
        title: 'Geometry',
        lesson: {
          title: 'Geometric Theorems',
          content: 'Geometry in grade 10 includes theorems like Pythagoras and properties of shapes...',
        },
        quiz: {
          title: 'Geometry Quiz',
          questions: [
            {
              question: 'What is the Pythagorean theorem?',
              options: ['a^2 + b^2 = c^2', 'a + b = c', 'a^2 - b^2 = c^2'],
              answer: 'a^2 + b^2 = c^2',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'physics-10',
    name: 'Physics',
    grade: 10,
    topics: [
      {
        id: 'newtons-laws-10',
        title: "Newton's Laws",
        lesson: {
          title: "Newton's Laws of Motion",
          content: "Newton's laws of motion are three basic laws of classical mechanics...",
        },
        quiz: {
          title: "Newton's Laws Quiz",
          questions: [
            {
              question: "What is Newton's first law?",
              options: ["Inertia", "F=ma", "Action-reaction"],
              answer: "Inertia",
            },
          ],
        },
      },
      {
        id: 'energy-10',
        title: 'Energy and Work',
        lesson: {
          title: 'Principles of Energy',
          content: 'Energy conservation, kinetic and potential energy...',
        },
        quiz: {
          title: 'Energy Quiz',
          questions: [
            {
              question: 'What is kinetic energy?',
              options: ['Energy at rest', 'Energy of motion', 'Stored energy'],
              answer: 'Energy of motion',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'life-science-10',
    name: 'Life Science',
    grade: 10,
    topics: [
      {
        id: 'cells-10',
        title: 'Cell Biology',
        lesson: {
          title: 'Advanced Cell Structure',
          content: 'Detailed study of cell organelles, mitosis, meiosis...',
        },
        quiz: {
          title: 'Cell Biology Quiz',
          questions: [
            {
              question: 'What is mitosis?',
              options: ['Cell division for growth', 'Cell division for reproduction', 'Cell death'],
              answer: 'Cell division for growth',
            },
          ],
        },
      },
      {
        id: 'genetics-10',
        title: 'Genetics',
        lesson: {
          title: 'Mendelian Genetics',
          content: 'Inheritance patterns, Punnett squares...',
        },
        quiz: {
          title: 'Genetics Quiz',
          questions: [
            {
              question: 'What is a dominant trait?',
              options: ['Hidden trait', 'Expressed trait', 'Recessive trait'],
              answer: 'Expressed trait',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'geography-10',
    name: 'Geography',
    grade: 10,
    topics: [
      {
        id: 'continents-10',
        title: 'World Geography',
        lesson: {
          title: 'Continents, Oceans, and Climate',
          content: 'Detailed geography of continents, major oceans, climate zones...',
        },
        quiz: {
          title: 'World Geography Quiz',
          questions: [
            {
              question: 'Which is the largest ocean?',
              options: ['Atlantic', 'Indian', 'Pacific'],
              answer: 'Pacific',
            },
          ],
        },
      },
      {
        id: 'population-10',
        title: 'Population Studies',
        lesson: {
          title: 'Demography and Population Growth',
          content: 'Population dynamics, migration, urbanization...',
        },
        quiz: {
          title: 'Population Quiz',
          questions: [
            {
              question: 'What is urbanization?',
              options: ['Rural growth', 'City growth', 'Population decline'],
              answer: 'City growth',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'english-10',
    name: 'English',
    grade: 10,
    topics: [
      {
        id: 'literature-10',
        title: 'Literature Analysis',
        lesson: {
          title: 'Analyzing Literary Texts',
          content: 'Themes, characters, symbolism in literature...',
        },
        quiz: {
          title: 'Literature Quiz',
          questions: [
            {
              question: 'What is symbolism?',
              options: ['Direct meaning', 'Hidden meaning', 'Plot summary'],
              answer: 'Hidden meaning',
            },
          ],
        },
      },
      {
        id: 'grammar-10',
        title: 'Advanced Grammar',
        lesson: {
          title: 'Complex Sentence Structures',
          content: 'Clauses, tenses, punctuation...',
        },
        quiz: {
          title: 'Grammar Quiz',
          questions: [
            {
              question: 'What is a subordinate clause?',
              options: ['Independent sentence', 'Dependent part', 'Main verb'],
              answer: 'Dependent part',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'accounting-10',
    name: 'Accounting',
    grade: 10,
    topics: [
      {
        id: 'basics-10',
        title: 'Accounting Principles',
        lesson: {
          title: 'Basic Accounting Concepts',
          content: 'Assets, liabilities, equity, double-entry system...',
        },
        quiz: {
          title: 'Accounting Basics Quiz',
          questions: [
            {
              question: 'What is the accounting equation?',
              options: ['Assets = Liabilities + Equity', 'Revenue - Expenses = Profit', 'Cash = Income'],
              answer: 'Assets = Liabilities + Equity',
            },
          ],
        },
      },
      {
        id: 'journals-10',
        title: 'Journal Entries',
        lesson: {
          title: 'Recording Transactions',
          content: 'Debit and credit, journal entries...',
        },
        quiz: {
          title: 'Journal Quiz',
          questions: [
            {
              question: 'What is a debit?',
              options: ['Increase in assets', 'Decrease in assets', 'Increase in liabilities'],
              answer: 'Increase in assets',
            },
          ],
        },
      },
    ],
  },
  // Grade 11 Subjects
  {
    id: 'maths-11',
    name: 'Maths',
    grade: 11,
    topics: [
      {
        id: 'calculus-11',
        title: 'Introduction to Calculus',
        lesson: {
          title: 'Limits and Derivatives',
          content: 'Basic calculus concepts, differentiation...',
        },
        quiz: {
          title: 'Calculus Quiz',
          questions: [
            {
              question: 'What is the derivative of x^2?',
              options: ['x', '2x', 'x^2'],
              answer: '2x',
            },
          ],
        },
      },
      {
        id: 'trigonometry-11',
        title: 'Trigonometry',
        lesson: {
          title: 'Advanced Trigonometric Functions',
          content: 'Identities, equations, applications...',
        },
        quiz: {
          title: 'Trigonometry Quiz',
          questions: [
            {
              question: 'What is sin^2θ + cos^2θ?',
              options: ['0', '1', '2'],
              answer: '1',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'physics-11',
    name: 'Physics',
    grade: 11,
    topics: [
      {
        id: 'electricity-11',
        title: 'Electricity and Magnetism',
        lesson: {
          title: 'Circuits, Fields, and Waves',
          content: 'Ohm\'s law, magnetic fields, electromagnetic waves...',
        },
        quiz: {
          title: 'Electricity Quiz',
          questions: [
            {
              question: 'What is Ohm\'s law?',
              options: ['V=IR', 'F=ma', 'E=mc^2'],
              answer: 'V=IR',
            },
          ],
        },
      },
      {
        id: 'optics-11',
        title: 'Optics',
        lesson: {
          title: 'Light and Lenses',
          content: 'Reflection, refraction, lenses...',
        },
        quiz: {
          title: 'Optics Quiz',
          questions: [
            {
              question: 'What is refraction?',
              options: ['Bending of light', 'Straight light', 'Absorption of light'],
              answer: 'Bending of light',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'life-science-11',
    name: 'Life Science',
    grade: 11,
    topics: [
      {
        id: 'ecology-11',
        title: 'Ecology',
        lesson: {
          title: 'Ecosystems and Biodiversity',
          content: 'Food chains, habitats, conservation...',
        },
        quiz: {
          title: 'Ecology Quiz',
          questions: [
            {
              question: 'What is a food chain?',
              options: ['Energy flow', 'Water cycle', 'Carbon cycle'],
              answer: 'Energy flow',
            },
          ],
        },
      },
      {
        id: 'evolution-11',
        title: 'Evolution',
        lesson: {
          title: 'Theory of Evolution',
          content: 'Natural selection, speciation...',
        },
        quiz: {
          title: 'Evolution Quiz',
          questions: [
            {
              question: 'Who proposed natural selection?',
              options: ['Darwin', 'Mendel', 'Newton'],
              answer: 'Darwin',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'geography-11',
    name: 'Geography',
    grade: 11,
    topics: [
      {
        id: 'economic-geo-11',
        title: 'Economic Geography',
        lesson: {
          title: 'Resources and Trade',
          content: 'Natural resources, global trade patterns...',
        },
        quiz: {
          title: 'Economic Geography Quiz',
          questions: [
            {
              question: 'What is globalization?',
              options: ['Local trade', 'Worldwide integration', 'Isolation'],
              answer: 'Worldwide integration',
            },
          ],
        },
      },
      {
        id: 'environmental-geo-11',
        title: 'Environmental Geography',
        lesson: {
          title: 'Climate Change and Sustainability',
          content: 'Global warming, sustainable development...',
        },
        quiz: {
          title: 'Environmental Geography Quiz',
          questions: [
            {
              question: 'What causes global warming?',
              options: ['Greenhouse gases', 'Ozone depletion', 'Deforestation'],
              answer: 'Greenhouse gases',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'english-11',
    name: 'English',
    grade: 11,
    topics: [
      {
        id: 'poetry-11',
        title: 'Poetry Analysis',
        lesson: {
          title: 'Analyzing Poems',
          content: 'Poetic devices, structure, themes...',
        },
        quiz: {
          title: 'Poetry Quiz',
          questions: [
            {
              question: 'What is metaphor?',
              options: ['Direct comparison', 'Implied comparison', 'Rhyme scheme'],
              answer: 'Implied comparison',
            },
          ],
        },
      },
      {
        id: 'essay-11',
        title: 'Essay Writing',
        lesson: {
          title: 'Writing Essays',
          content: 'Structure, thesis, argumentation...',
        },
        quiz: {
          title: 'Essay Quiz',
          questions: [
            {
              question: 'What is a thesis statement?',
              options: ['Conclusion', 'Main argument', 'Introduction'],
              answer: 'Main argument',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'accounting-11',
    name: 'Accounting',
    grade: 11,
    topics: [
      {
        id: 'financial-statements-11',
        title: 'Financial Statements',
        lesson: {
          title: 'Balance Sheet and Income Statement',
          content: 'Preparing and analyzing financial statements...',
        },
        quiz: {
          title: 'Financial Statements Quiz',
          questions: [
            {
              question: 'What is a balance sheet?',
              options: ['Profit report', 'Asset snapshot', 'Cash flow'],
              answer: 'Asset snapshot',
            },
          ],
        },
      },
      {
        id: 'budgeting-11',
        title: 'Budgeting',
        lesson: {
          title: 'Budget Preparation',
          content: 'Planning and controlling budgets...',
        },
        quiz: {
          title: 'Budgeting Quiz',
          questions: [
            {
              question: 'What is a budget?',
              options: ['Expense list', 'Financial plan', 'Tax form'],
              answer: 'Financial plan',
            },
          ],
        },
      },
    ],
  },
  // Grade 12 Subjects
  {
    id: 'maths-12',
    name: 'Maths',
    grade: 12,
    topics: [
      {
        id: 'advanced-calculus-12',
        title: 'Advanced Calculus',
        lesson: {
          title: 'Integration and Applications',
          content: 'Definite integrals, applications of calculus...',
        },
        quiz: {
          title: 'Advanced Calculus Quiz',
          questions: [
            {
              question: 'What is the integral of 2x?',
              options: ['x^2', '2x^2', 'x^2 + C'],
              answer: 'x^2 + C',
            },
          ],
        },
      },
      {
        id: 'statistics-12',
        title: 'Statistics and Probability',
        lesson: {
          title: 'Data Analysis and Probability',
          content: 'Mean, variance, probability distributions...',
        },
        quiz: {
          title: 'Statistics Quiz',
          questions: [
            {
              question: 'What is the mean?',
              options: ['Middle value', 'Average', 'Most frequent'],
              answer: 'Average',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'physics-12',
    name: 'Physics',
    grade: 12,
    topics: [
      {
        id: 'quantum-12',
        title: 'Quantum Physics',
        lesson: {
          title: 'Quantum Mechanics Basics',
          content: 'Wave-particle duality, uncertainty principle...',
        },
        quiz: {
          title: 'Quantum Physics Quiz',
          questions: [
            {
              question: 'What is the uncertainty principle?',
              options: ['Exact measurement', 'Inherent uncertainty', 'Classical physics'],
              answer: 'Inherent uncertainty',
            },
          ],
        },
      },
      {
        id: 'nuclear-12',
        title: 'Nuclear Physics',
        lesson: {
          title: 'Radioactivity and Nuclear Reactions',
          content: 'Alpha, beta decay, fission, fusion...',
        },
        quiz: {
          title: 'Nuclear Physics Quiz',
          questions: [
            {
              question: 'What is fission?',
              options: ['Splitting atoms', 'Combining atoms', 'Electron emission'],
              answer: 'Splitting atoms',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'life-science-12',
    name: 'Life Science',
    grade: 12,
    topics: [
      {
        id: 'biotechnology-12',
        title: 'Biotechnology',
        lesson: {
          title: 'Genetic Engineering',
          content: 'DNA manipulation, cloning, applications...',
        },
        quiz: {
          title: 'Biotechnology Quiz',
          questions: [
            {
              question: 'What is PCR?',
              options: ['Protein synthesis', 'DNA amplification', 'Cell division'],
              answer: 'DNA amplification',
            },
          ],
        },
      },
      {
        id: 'physiology-12',
        title: 'Human Physiology',
        lesson: {
          title: 'Body Systems',
          content: 'Digestive, circulatory, nervous systems...',
        },
        quiz: {
          title: 'Physiology Quiz',
          questions: [
            {
              question: 'What is homeostasis?',
              options: ['Body balance', 'Energy production', 'Cell growth'],
              answer: 'Body balance',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'geography-12',
    name: 'Geography',
    grade: 12,
    topics: [
      {
        id: 'urban-geo-12',
        title: 'Urban Geography',
        lesson: {
          title: 'Urban Planning and Development',
          content: 'City growth, infrastructure, sustainability...',
        },
        quiz: {
          title: 'Urban Geography Quiz',
          questions: [
            {
              question: 'What is urbanization?',
              options: ['Rural decline', 'City expansion', 'Population control'],
              answer: 'City expansion',
            },
          ],
        },
      },
      {
        id: 'global-issues-12',
        title: 'Global Issues',
        lesson: {
          title: 'International Relations and Conflicts',
          content: 'Globalization, conflicts, diplomacy...',
        },
        quiz: {
          title: 'Global Issues Quiz',
          questions: [
            {
              question: 'What is diplomacy?',
              options: ['Military action', 'Peaceful negotiation', 'Economic sanctions'],
              answer: 'Peaceful negotiation',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'english-12',
    name: 'English',
    grade: 12,
    topics: [
      {
        id: 'literary-criticism-12',
        title: 'Literary Criticism',
        lesson: {
          title: 'Critical Theory',
          content: 'Feminism, postcolonialism, structuralism...',
        },
        quiz: {
          title: 'Literary Criticism Quiz',
          questions: [
            {
              question: 'What is postcolonialism?',
              options: ['Pre-colonial study', 'Post-independence analysis', 'Colonial history'],
              answer: 'Post-independence analysis',
            },
          ],
        },
      },
      {
        id: 'creative-writing-12',
        title: 'Creative Writing',
        lesson: {
          title: 'Writing Fiction and Poetry',
          content: 'Plot, character development, poetic forms...',
        },
        quiz: {
          title: 'Creative Writing Quiz',
          questions: [
            {
              question: 'What is plot?',
              options: ['Character list', 'Story structure', 'Setting description'],
              answer: 'Story structure',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'accounting-12',
    name: 'Accounting',
    grade: 12,
    topics: [
      {
        id: 'advanced-accounting-12',
        title: 'Advanced Accounting',
        lesson: {
          title: 'Consolidated Financial Statements',
          content: 'Group accounting, mergers, acquisitions...',
        },
        quiz: {
          title: 'Advanced Accounting Quiz',
          questions: [
            {
              question: 'What is consolidation?',
              options: ['Separate reports', 'Combined reports', 'Tax reports'],
              answer: 'Combined reports',
            },
          ],
        },
      },
      {
        id: 'auditing-12',
        title: 'Auditing',
        lesson: {
          title: 'Audit Processes',
          content: 'Internal and external audits, standards...',
        },
        quiz: {
          title: 'Auditing Quiz',
          questions: [
            {
              question: 'What is an audit?',
              options: ['Financial check', 'Tax calculation', 'Budget planning'],
              answer: 'Financial check',
            },
          ],
        },
      },
    ],
  },
];
