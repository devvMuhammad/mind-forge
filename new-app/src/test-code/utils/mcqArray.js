const mcqArray = [
  {
    subject: "Mathematics",
    questions: [
      {
        question: "If the sequence is 2, 6, 10, then the 30th term is:",
        options: ["118", "32", "122", "128"],
        answer: "118",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "If u, v, and w are three vectors, then ( represents the area of:",
        options: ["Triangle", "Cube ", "Cylinder", "Parallelepiped"],
        answer: "Cube ",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "For an A.P if a and d, the total number of terms in the series is n, then Sn equals to:",
        options: ["2q/n - p", "2q/n", "q/n+p", "2qn-2p"],
        answer: "2q/n",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "The whole numbers are not closed under",
        options: ["Division ", "Addition", "Multiplication", "Subtraction"],
        answer: "Division ",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "The sides of a square and equilateral triangle are 5. What is the ratio of the area of the square to the area of the triangle?",
        options: ["8/√3", "8√3/5", "4√3", "√3/8"],
        answer: "4√3",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "If a dice is rolled two times, then what is the probability of the numbers whose sum is 8?",
        options: ["2/36", "2/4", "4/36", "5/36 "],
        answer: "5/36 ",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "If one cut is parallel, we get which conic section?",
        options: ["Circle", "Parabola", "Hyperbola ", "Ellipse"],
        answer: "Hyperbola ",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "The vertex of the Parabola is:",
        options: ["(4,2)", "(2, -3)", "(-2,3)", "(3,2)"],
        answer: "(2, -3)",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "In an ellipse, what is the name for the line through the focus and perpendicular to the major axis ending at the ellipse?",
        options: [
          "Focal chord",
          "Minor axis",
          "Latus rectum",
          "Vertical asymptote",
        ],
        answer: "Minor axis",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "xxx",
        options: ["-1", "1", "2r", "None"],
        answer: "",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "(1-tan²x)(1+tan²x)",
        options: ["sin²x-cos²x", "cos²x-sin²x-", "both", "None"],
        answer: "sin²x-cos²x",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "∫eˣ/√(1+eˣ) dx",
        options: ["2√(1+eˣ)", "3√(1+eˣ)", "4√(1+eˣ)", "5√(1+eˣ)"],
        answer: "2√(1+eˣ)",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "If a = 8, r =  then:",
        options: ["24", "-24", "12", "None"],
        answer: "24",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "Eccentricity of an Ellipse is:",
        options: ["1", "0", ">1", "0 < e < 1"],
        answer: "0 < e < 1",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "The vertex of x²/25 - y²/16 is:",
        options: ["(5,4)", "(-5, -4)", "(0,0)", "None"],
        answer: "None",
        category: "unattempted",
        selectedOption: "",
      },

      {
        question: "if A= B,  then which is true:",
        options: ["A= B", "B= C", "A=C", "None"],
        answer: "A=C",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "Σ⁴₁ logx",
        options: ["log24", "1/log24", "1/24", "None"],
        answer: "log24",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "lim x-->0 (lnx)",
        options: ["∞", "-∞", "0", "Does not exist"],
        answer: "Does not exist",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "for n > 0, n!! gives",
        options: [
          "Product of +ve odd numbers",
          "Product of +ve even numbers",
          "Product of +ve integers",
          "None",
        ],
        answer: "Product of +ve odd numbers",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "∫1/(xlnx) dx",
        options: ["|lnx|+c", "ln(lnx)+c", "Both", "none"],
        answer: "|lnx|+c",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "tan(180+A)cos(90+A) + cos(180-A): ",
        options: ["1/secA", "1/cosA", "tanA", "sinA - cosA"],
        answer: "1/secA",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "Two dice are rolled, the probability that the sum of dots is an odd number is?",
        options: ["1/2", "1/3", "greater than 1 or less than 0", "None"],
        answer: "1/3",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "If we have y = x^4, then we solve by:",
        options: [
          "Implicit differentiation",
          "Product rule",
          "Chain rule",
          "Cannot be solved",
        ],
        answer: "Chain rule",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "log(x²-6) = log10 then x=? \n Consider that the base of both logs is 4",
        options: ["- 4", "4", "both", "none of these"],
        answer: "4",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "If a^n = 3^n, then a is a G.P, then the fourth term will be _____ .",
        options: ["27", "-27", "-13.5", "13.5"],
        answer: "13.5",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "The Maclaurin's series expansion of e^x is:",
        options: [
          "a",
          "1 + x + x^2/2! + x^3/3! + ...",
          "1 + x - x^2/2! + x^3/3! - ...",
          "1 + x + x^2/2 + x^3/3 + ...",
        ],
        answer: "1 + x + x^2/2 + x^3/3 + ...",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "Equation of the normal to the curve f(x) = sinx at point (π,0) is :",
        options: [
          "x + y + π = 0 ",
          "x - y - π = 0 ",
          "x + y - π = 0 ",
          "x - y + π = 0 ",
        ],
        answer: "x + y + π = 0 ",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "The equation of an ellipse whose latus rectum is 8 and e=1/√2 is:",
        options: ["x²+2y² = 32", "x²+2y² = 64", "3x²+4y² = 32", "3x²+4y² = 32"],
        answer: "x²+2y² = 32",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "If (2,0) is the vertex and the y-axis becomes the directrix of a parabola, then its focus is ___ .",
        options: ["(-4,0)", "(-2,0)", "(2,0)", "(4,0)"],
        answer: "(-2,0)",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "The eccentricity of curve x²/244-y²/244 = 1 is:",
        options: ["1.732", "0.866", "1.414", "0.707"],
        answer: "0.707",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "(1-i/1+y)⁴⁴⁴=?",
        options: ["444 - 444i", "1-i", "-1 - i", "None of these"],
        answer: "444 - 444i",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "Three numbers have a sum of 36 and a product of 1680 and form an arithmetic sequence. The largest number will be:",
        options: ["10", "12", "14", "16"],
        answer: "16",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "If f(x) = Cos(x) / x, then the Limit of f(x) at x = 0 is equal to:",
        options: ["0", "∞", "1", "None of these"],
        answer: "∞",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "Derivative of f(x) = ln(sin(eˣ)) w.r.t x is :",
        options: ["a", "b", "Tan(x)", "Cot(x)"],
        answer: "Cot(x)",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "If for square matrix A, Aᵖ = 0, then AA is called ________ matrix.",
        options: ["Idempotent", "Nilpotent", "Periodic", "Symmetric"],
        answer: "Nilpotent",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "Equation of one of the directrices of hyperbola x²/9-y²/4 = 1 is",
        options: ["x = 4/√13", "y = - 4/√13", "x = - 9/√13", "y = 9/√13"],
        answer: "x = 4/√13",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "sin(797π/2) = ",
        options: ["0", "1", "-1", "None of these"],
        answer: "0",
        category: "unattempted",
        selectedOption: "",
      },
    ],
  },

  {
    subject: "Physics",
    questions: [
      {
        question: "What is the formula for force?",
        options: ["F = ma", "F = mgh", "F = kx", "None of these"],
        answer: "F = ma",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the SI unit of force?",
        options: ["Newtons", "Joules", "Watts", "None of these"],
        answer: "Newtons",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the SI unit of force?",
        options: ["Newtons", "Joules", "Watts", "None of these"],
        answer: "Newtons",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the speed of light in a vacuum?",
        options: [
          "299,792,458 m/s",
          "3,000,000 m/s",
          "30,000 m/s",
          "None of these",
        ],
        answer: "299,792,458 m/s",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the formula for kinetic energy?",
        options: ["KE = 0.5mv^2", "KE = mgh", "KE = Fd", "None of these"],
        answer: "KE = 0.5mv^2",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the first law of thermodynamics?",
        options: [
          "Energy cannot be created or destroyed",
          "Entropy always increases",
          "Heat flows from hot to cold",
          "None of these",
        ],
        answer: "Energy cannot be created or destroyed",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "Which one of the following materials has the highest electrical conductivity?",
        options: ["Copper", "Silver", "Gold", "Aluminum"],
        answer: "Silver",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Which one of the following is NOT a unit of power?",
        options: ["Joule/second", "Watt", "Horsepower", "Joule/meter"],
        answer: "Joule/meter",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Which one of the following statements about diffraction is FALSE?",
        options: [
          "It occurs when light passes through a narrow slit",
          "It is responsible for the color patterns seen in a CD",
          "It can be used to measure the size of an object",
          "It only occurs with sound waves",
        ],
        answer: "It only occurs with sound waves",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the magnitude of the magnetic field at the center of a circular coil carrying a current I?",
        options: ["μ₀I/2R", "μ₀I/4R", "μ₀I/R", "μ₀IR/2"],
        answer: "μ₀I/2R",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Which one of the following statements about the photoelectric effect is FALSE?",
        options: [
          "It was explained by Albert Einstein in 1905",
          "It can be used to measure the frequency of light",
          "It occurs when light is shone on a metal surface",
          "It is caused by the emission of electrons from the metal surface",
        ],
        answer:
          "It is caused by the emission of electrons from the metal surface",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the ratio of the mass of a proton to the mass of an electron?",
        options: ["1:1", "1:1836", "1836:1", "1:0"],
        answer: "1836:1",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "What is the speed of sound in air at 20°C?",
        options: ["343 m/s", "330 m/s", "300 m/s", "290 m/s"],
        answer: "343 m/s",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Which one of the following is NOT a type of radioactive decay?",
        options: ["Alpha decay", "Beta decay", "Gamma decay", "Delta decay"],
        answer: "Delta decay",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Which one of the following is a scalar quantity?",
        options: ["Velocity", "Acceleration", "Force", "Energy"],
        answer: "Energy",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the work done by a force of 10 N acting on an object that moves 5 m in the direction of the force?",
        options: ["5 J", "10 J", "50 J", "100 J"],
        answer: "50 J",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the direction of the magnetic field lines produced by a current-carrying wire?",
        options: [
          "Circular around the wire",
          "Radial from the wire",
          "Tangential to the wire",
          "Longitudinal along the wire",
        ],
        answer: "Circular around the wire",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What happens to the force between two charges when the distance between them is tripled?",
        options: [
          "It becomes 9 times smaller",
          "It becomes 3 times smaller",
          "It becomes 1/3 times smaller",
          "It remains the same",
        ],
        answer: "It becomes 1/3 times smaller",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "What is the SI unit of electric field?",
        options: ["Coulomb", "Volt", "Watt", "Newton/Coulomb"],
        answer: "Newton/Coulomb",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the cause of the magnetic field produced by a moving charged particle?",
        options: [
          "The electric field of the particle",
          "The charge of the particle",
          "The motion of the particle",
          "The mass of the particle",
        ],
        answer: "The motion of the particle",
        selectedOption: "",
        category: "unattempted",
      },
    ],
  },
  {
    subject: "Chemistry",
    questions: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Cu", "None of these"],
        answer: "Au",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the formula for water?",
        options: ["H2O", "CO2", "NaCl", "None of these"],
        answer: "H2O",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is Avogadro's number?",
        options: ["6.022 x 10^23", "3.14159", "9.81", "None of these"],
        answer: "6.022 x 10^23",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the pH of a neutral solution?",
        options: ["7", "0", "14", "None of these"],
        answer: "7",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon dioxide", "None of these"],
        answer: "Nitrogen",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "Which of the following has the highest boiling point?",
        options: ["CH4", "C2H6", "C3H8", "C4H10"],
        answer: "C4H10",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "What is the oxidation state of sulphur in H2SO4?",
        options: ["+6", "+4", "+2", "-2"],
        answer: "+6",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Which of the following compounds has the lowest boiling point?",
        options: ["CH3OH", "C2H5OH", "C3H7OH", "C4H9OH"],
        answer: "CH3OH",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Consider the following reaction: N2(g) + 3H2(g) ⇌ 2NH3(g) + heat. What happens to the concentration of NH3 when the pressure of the system is increased?",
        options: [
          "The concentration of NH3 increases",
          "The concentration of NH3 decreases",
          "The concentration of NH3 remains unchanged",
          "Insufficient Information",
        ],
        answer: "The concentration of NH3 increases",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Which of the following is an isomer of butane?",
        options: ["methane", "ethene", "propane", "2-methylpropane"],
        answer: "2-methylpropane",
        selectedOption: "",
        category: "unattempted",
      },
    ],
  },
  {
    subject: "English",
    questions: [
      {
        question: "Who is the national poet of England?",
        options: [
          "William Shakespeare",
          "Robert Frost",
          "Jane Austen",
          "Charles Dickens",
        ],
        answer: "William Shakespeare",
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
          "What is the next number in the sequence: 1, 2, 4, 7, 11, 16, ...",
        options: ["22", "23", "24", "25"],
        answer: "23",
        selectedOption: "",
        category: "unattempted",
      },
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
        question: "Find odd one out:",
        options: ["piano", "violin", "trumpet", "cello"],
        answer: "trumpet",
        selectedOption: "",
        category: "unattempted",
      },
    ],
  },
];

export default mcqArray;
