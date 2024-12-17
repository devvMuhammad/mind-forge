const mcqs = [
  {
    subject: "Mathematics",
    questions: [
      {
        question: "If |z| = 3, then z equals:",
        options: ["3i", "-3i+j", "3", "-3"],
        answer: "3",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Let z be a complex number. If z satisfies Im(z) = Re(z^2), then z equals:",
        options: ["i", "-i", "0", "1"],
        answer: "-i",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Which of the following is the conjugate of the complex number 3 - 4i?",
        options: ["3 - 4i", "-3 + 4i", "3 + 4i", "-3 - 4i"],
        answer: "3 + 4i",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If z is a non-zero complex number such that |z| = 1, then 1/z equals:",
        options: ["z", "1", "-z", "z conjugate"],
        answer: "-z",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "For any two complex numbers z1 and z2, which of the following is true?",
        options: [
          "|z1 + z2| = |z1| + |z2|",
          "|z1 + z2| <= |z1| + |z2|",
          "|z1 + z2| >= |z1| + |z2|",
          "|z1 + z2| ≠ |z1| + |z2|",
        ],
        answer: "|z1 + z2| <= |z1| + |z2|",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If z1 and z2 are complex numbers such that |z1 - z2| = |z1| - |z2|, then:",
        options: ["z1 = z2", "z1 = -z2", "z1 = 0", "z2 = 0"],
        answer: "z1 = z2",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If a set A contains 10 entries, then the number of distinct functions from A to A is:",
        options: ["10^10", "2^10", "10!", "2^10 - 1"],
        answer: "10^10",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the sum of the first 10 terms of the arithmetic sequence: 2, 5, 8, 11, ...?",
        options: ["155", "120", "125", "130"],
        answer: "155",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "The harmonic mean of two numbers is 12. If one of the numbers is 6, what is the other number?",
        options: ["4", "8", "12", "None"],
        answer: "None",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Which one of the following sets has exactly 10 elements?",
        options: [
          "{1,2,3,...,9,10,11}",
          "{1,2,3,...,8,9,10}",
          "{1,2,3,...,10,11,12}",
          "{1,2,3,...,11,12,13}",
        ],
        answer: "{1,2,3,...,8,9,10}",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Which of the following is not true about the binary relation 'is equal to'?",
        options: ["Reflexive", "Symmetric", "Transitive", "None of these"],
        answer: "None of these",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Which of the following is true about the binary relation 'is less than'?",
        options: ["Reflexive", "Symmetric", "Transitive", "None of these"],
        answer: "Transitive",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Which of the following is the contrapositive of the statement: 'If it is raining, then the streets are wet'?",
        options: [
          "If the streets are not wet, then it is not raining.",
          "If it is not raining, then the streets are wet.",
          "If it is not raining, then the streets are not wet.",
          "If the streets are wet, then it is raining.",
        ],
        answer: "If the streets are not wet, then it is not raining.",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "If f(x) = 2x^2 - 3x + 1, then the value of f(3) is:",
        options: ["1", "7", "13", "5"],
        answer: "13",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "If f(x) = (x^2 + 2x)/(x + 1), then f(0) equals:",
        options: ["0", "1", "-1", "2"],
        answer: "0",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "The sum of the roots of the equation x^2 - 5x + 6 = 0 is:",
        options: ["5", "-5", "6", "-6"],
        answer: "5",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "The product of the roots of the equation 3x^2 - 4x + 1 = 0 is:",
        options: ["1", "-1", "1/3", "-1/3"],
        answer: "1/3",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If α and β are the roots of the equation x^2 - 2x + 1 = 0, then the value of α^2 + β^2 is:",
        options: ["-2", "0", "2", "4"],
        answer: "2",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "If tan(θ) = 3/4, then sin(θ) equals:",
        options: ["3/5", "4/5", "1/5", "1/4"],
        answer: "3/5",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "If cos(θ) = 5/13, then tan(θ) equals:",
        options: ["5/12", "12/5", "12/13", "None of these"],
        answer: "12/5",
        selectedOption: "",
        category: "unattempted",
      },

      {
        question: "What is the eccentricity of a circle?",
        options: ["0", "1", "Less than 1", "Greater than 1"],
        answer: "0",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "For an ellipse, which of the following statements is true regarding the major and minor axes?",
        options: [
          "Major axis is longer than the minor axis",
          "Major axis is shorter than the minor axis",
          "Major axis is equal to the minor axis",
          "None of the above",
        ],
        answer: "Major axis is longer than the minor axis",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "In a standard form of the equation of a hyperbola, which term appears subtracted?",
        options: ["y^2", "x^2", "xy", "1"],
        answer: "y^2",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "The eccentricity of a parabola is always:",
        options: ["1", "0", "Greater than 1", "Dependent on the focus"],
        answer: "1",
        selectedOption: "",
        category: "unattempted",
      },
    ],
  },
  {
    subject: "Physics",
    questions: [
      {
        question:
          "Two bodies X and Y have mass 4kg and 6kg respectively. Both these bodies have the same linear momentum, what will be the ratio of their speeds?",
        options: ["1", "2/3", "3/2", "2"],
        answer: "3/2",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Overtones produced by a closed organ pipe is?",
        options: ["f, 3f, 5f….", "2f, 3f, 4f….", "3f, 5f, 7f…", "f, 2f, 3f,…"],
        answer: "3f, 5f, 7f…",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "The sky appears blue because:",
        options: [
          "Red light is absorbed",
          "Blue light is scattered most",
          "Blue light is absorbed",
          "It has a natural color of blue",
        ],
        answer: "Blue light is scattered most",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Area of triangles formed by i, i-j and their respective resultant is?",
        options: ["1", "0", "1/2", "Triangle is not formed"],
        answer: "1/2",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "In which of the following decays the element does not change?",
        options: [
          "alpha decay",
          "beta decay",
          "Gamma decay",
          "Beta Plus decay",
        ],
        answer: "Gamma decay",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "If the rms value of AC current is i then its peak value is?",
        options: ["√2 /2 i rms", "i/√2 rms", "2√2i rms", "√2 i rms"],
        answer: "√2 i rms",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "The electrons are held in an atom by:",
        options: [
          "Coloumb forces",
          "Gravitational forces",
          "Nuclear forces",
          "Vander waals forces",
        ],
        answer: "Coloumb forces",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Determine the resistance of a wire if its cross-sectional radius is 0.5mm and its length is 10cm having a resistivity of 3.14 x 10-5Ωm.",
        options: ["2mΩ", "4mΩ", "5mΩ", "6mΩ"],
        answer: "2mΩ",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Angle between linear and angular velocity in degrees for circular motion is:",
        options: ["0", "45", "90", "180"],
        answer: "90",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Stopping potential for metal surface as in the case of photoelectric emission depends upon:",
        options: [
          "The frequency of incident light",
          "The threshold frequency for the metal surface",
          "The intensity of incident light",
          "All of these",
        ],
        answer: "The threshold frequency for the metal surface",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "A body in motion always changes its",
        options: ["Acceleration", "Velocity", "Position vector", "Momentum"],
        answer: "Position vector",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Maximum number of components of a vector is:",
        options: ["One", "Two", "Three", "Infinite"],
        answer: "Infinite",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "A ballistic missile is:",
        options: ["Unpowered", "Unguided", "Both", "All"],
        answer: "Both",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "The constant between I and V is:",
        options: ["R", "1/R", "2R", "None of these"],
        answer: "1/R",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "In a pure resistive circuit current and voltage are:",
        options: ["In phase", "Out of phase", "Current leads", "Voltage leads"],
        answer: "In phase",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Scattering of photon by electron is called",
        options: [
          "Photoelectric effect",
          "Pair production",
          "Annihilation",
          "Compton effect",
        ],
        answer: "Compton effect",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Newton’s first law is applicable on",
        options: [
          "Body in motion",
          "Body in rest",
          "Both a and b",
          "None of them",
        ],
        answer: "Both a and b",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "When wood is replaced by air as dielectric. The capacitance",
        options: [
          "Increases",
          "Decreases",
          "Remains constant",
          "None of these",
        ],
        answer: "Increases",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Moving charge produces",
        options: [
          "Magnetic field",
          "Electric field",
          "Both A and B",
          "No field is produced",
        ],
        answer: "Both A and B",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If the y-component of a force acting in the y-direction is 6N. What will be the force in the x-direction?",
        options: ["6cosӨ", "6sinӨ", "0N", "6N"],
        answer: "0N",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Resistance of an RLC circuit at resonance is?",
        options: ["Xc", "R", "Xl", "None of these"],
        answer: "R",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "The power factor in an RLC circuit at resonance is?",
        options: ["1", "2", "3", "0.5"],
        answer: "1",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "When some charge is given to a soap its size?",
        options: ["Increases", "Decreases", "Remains the same", "Explodes"],
        answer: "Increases",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If the number of rulings is halved what will be the effect on the grating element of a spectrometer?",
        options: ["Remains the same", "Halved", "One fourth", "Doubled"],
        answer: "Remains the same",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If we double the length of a simple pendulum where the value of g is halved then the value of the time period",
        options: ["Half", "Four times", "Doubles", "Becomes one fourth"],
        answer: "Doubles",
        selectedOption: "",
        category: "unattempted",
      },
    ],
  },
  {
    subject: "Chemistry",
    questions: [
      {
        question:
          "C3H8 does not react with bromine in presence of CCl4 in dark this compound could be:",
        options: ["Alkane", "Alkene", "Cycloalkene", "Cycloalkane"],
        answer: "Alkane",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Which of the following oxides is amphoteric in character?",
        options: ["CaO", "SiO2", "CO2", "BeO"],
        answer: "BeO",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Which statement is incorrect?",
        options: [
          "Size of the positive ion is smaller than its parent atom",
          "Size of the negative ion is greater than its parent atom",
          "In positive ion number of protons exceed the number of electrons",
          "In negative ion number of protons exceed the number of electrons",
        ],
        answer:
          "In negative ion number of protons exceed the number of electrons",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Alums are used for",
        options: [
          "Tanning of leather",
          "Purification of water",
          "Coagulation",
          "All of these",
        ],
        answer: "All of these",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "All ligands are",
        options: ["Lewis acids", "Neutral", "Lewis bases", "None of these"],
        answer: "Lewis bases",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Stronger the reducing agent greater the",
        options: [
          "Oxidation Potential",
          "Reduction Potential",
          "Redox Potential",
          "Emf of Cell",
        ],
        answer: "Oxidation Potential",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Molar boiling point constant is ratio of elevation in boiling point to?",
        options: ["Molality", "Mole Fraction", "Molarity", "a and c"],
        answer: "Molality",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Photochemical reactions are usually",
        options: ["Zero Order", "First Order", "Second Order", "Third Order"],
        answer: "Zero Order",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Which one affects the value of Kc?",
        options: ["Concentration", "Temperature", "Pressure", "Catalyst"],
        answer: "Temperature",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "18 g glucose is dissolved in 90 g water. The relative lowering of vapour pressure is equal to:",
        options: ["1/5", "5.1", "1/51", "6"],
        answer: "1/51",
        selectedOption: "",
        category: "unattempted",
      },
    ],
  },
  {
    subject: "English",
    questions: [
      {
        question: 'Choose the antonym of "Fervent"',
        options: ["Ardent", "Fanatic", "Zeal", "Apathetic"],
        answer: "Apathetic",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: 'The most nearest meaning to the word "Categorical" is:',
        options: ["Assertive", "Indirect", "Conditional", "Unambiguous"],
        answer: "Unambiguous",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: 'The meaning of the word "Manacle" is:',
        options: ["Wave", "Statue", "Shackle", "Building"],
        answer: "Shackle",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: 'What is most similar in meaning to "Belligerent"',
        options: [
          "Engaged in war.",
          "State of serenity",
          "Very timid",
          "Strong",
        ],
        answer: "Engaged in war.",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: 'Choose the antonym of "Vivid":',
        options: ["Glowing", "Flamboyant", "Gaudy", "Fade"],
        answer: "Fade",
        selectedOption: "",
        category: "unattempted",
      },

      {
        question: 'Synonym of "Expedient" is:',
        options: ["Inapt.", "Indebt", "Tactless", "Opportune"],
        answer: "Opportune",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Cool: Cold",
        options: [
          "Length: Width",
          "Gold: Bourne",
          "Plant: Tree",
          "Pretty: Beautiful",
        ],
        answer: "Pretty: Beautiful",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Dear Marcos, Hi, my name is Rebecca and I am your new pen pal. I'm ten years old, and I live in Barcelona, Spain. I go to the 4th grade in Saint Michael Elementary School. On weekdays, I get up at 6 o'clock. The school starts at 7:30 in the morning. I have my lunch at the school cafeteria and I usually leave around 3:30 in the afternoon. I am good at math, I also like history and geography, but my favorite subject is science. I like playing basketball and soccer. I also play tennis, and I like swimming. On the weekends, I go to the movie theater with my friends. We like action movies. I usually go to church with my parents on Sundays.\nWhich statement is correct?",
        options: [
          "Rebecca usually practices the drums on weekdays.",
          "Rebecca is interested in Science.",
          "Rebecca has got a music group at school.",
          "Rebecca and his friends like watching thrillers.",
        ],
        answer: "Rebecca is interested in Science.",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: 'Which one is closest in meaning to "Cajole"',
        options: ["Vilify", "Persuade", "Jinx", "Utter"],
        answer: "Persuade",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Shoes: Cobbler",
        options: [
          "Spectacles: Optician",
          "Education: Teacher",
          "Oxygen: Plant",
          "Food: Kitchen",
        ],
        answer: "Spectacles: Optician",
        selectedOption: "",
        category: "unattempted",
      },
    ],
  },
  {
    subject: "Intelligence",
    questions: [
      {
        question:
          "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, 13, ...",
        options: ["20", "21", "22", "23"],
        answer: "21",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If PURPLE is coded as SVUNQF, then what is the code for ORANGE?",
        options: ["QSPCWH", "QSPBNG", "PRTGFD", "PSUDMF"],
        answer: "QSPCWH",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Find odd one out:",
        options: ["cat", "dog", "cow", "lion"],
        answer: "cow",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Pick the odd one out",
        options: ["QUXNGHI", "IHGUNXQ", "XGHIQUN", "QHXNIGV"],
        answer: "QHXNIGV",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "In the morning, Ali and Farhan are standing in front of each other. Ali's shadow is to the right of Farhan. Then in what direction is Farhan standing?",
        options: ["East", "North", "West", "South"],
        answer: "South",
        category: "unattempted",
        selectedOption: "",
      },
    ],
  },
];

export default mcqs;
