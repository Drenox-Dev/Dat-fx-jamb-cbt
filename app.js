// const hideBtn = document.getElementById('subject-select');
// All 140 questions data
const subjectSelect = document.querySelector('.subject-select');
        const questions = [

{section: "🎓Subject: English Language", question: "Choose the word that best completes the sentence: She ___ to the market yesterday.", options: ["go", "goes", "went", "gone"], correct: 2},
{section: "🎓Subject: English Language", question: "Choose the correct antonym of 'brave'", options: ["strong", "fearless", "cowardly", "bold"], correct: 2},
{section: "🎓Subject: English Language", question: "Choose the correct synonym of 'rapid'", options: ["slow", "fast", "weak", "small"], correct: 1},
{section: "🎓Subject: English Language", question: "He is the ___ boy in the class.", options: ["tall", "taller", "tallest", "more tall"], correct: 2},
{section: "🎓Subject: English Language", question: "Identify the correctly spelt word", options: ["Recieve", "Receive", "Receeve", "Recive"], correct: 1},
{section: "🎓Subject: English Language", question: "Choose the correct option: I have ___ my homework.", options: ["do", "did", "done", "doing"], correct: 2},
{section: "🎓Subject: English Language", question: "Fill in the blank: He is afraid ___ dogs.", options: ["of", "with", "for", "on"], correct: 0},
{section: "🎓Subject: English Language", question: "Choose the correct tense: They ___ playing football now.", options: ["is", "are", "was", "be"], correct: 1},
{section: "🎓Subject: English Language", question: "Opposite of 'increase' is ___", options: ["reduce", "add", "grow", "expand"], correct: 0},
{section: "🎓Subject: English Language", question: "A person who writes books is a ___", options: ["writer", "teacher", "reader", "speaker"], correct: 0},
{section: "🎓Subject: English Language", question: "Choose the correct option: She ___ a song.", options: ["sing", "sang", "sung", "singing"], correct: 1},
{section: "🎓Subject: English Language", question: "Choose the correct spelling", options: ["Occassion", "Occasion", "Ocasion", "Occasson"], correct: 1},
{section: "🎓Subject: English Language", question: "Fill in: I am looking forward ___ you.", options: ["to see", "seeing", "to seeing", "see"], correct: 2},
{section: "🎓Subject: English Language", question: "Choose the correct article: ___ apple a day keeps the doctor away.", options: ["A", "An", "The", "No article"], correct: 1},
{section: "🎓Subject: English Language", question: "Plural of 'child' is ___", options: ["childs", "children", "childes", "childrens"], correct: 1},
{section: "🎓Subject: English Language", question: "Choose correct preposition: He is good ___ math.", options: ["at", "in", "on", "with"], correct: 0},

{section: "🎓Subject: English Language", question: "Identify noun in sentence: The boy runs fast.", options: ["boy", "runs", "fast", "the"], correct: 0},

{section: "🎓Subject: English Language", question: "Choose correct: She ___ gone already.", options: ["has", "have", "had", "is"], correct: 0},

{section: "🎓Subject: English Language", question: "Synonym of 'happy' is ___", options: ["sad", "angry", "joyful", "tired"], correct: 2},

{section: "🎓Subject: English Language", question: "Opposite of 'early' is ___", options: ["fast", "late", "quick", "soon"], correct: 1},

{section: "🎓Subject: English Language", question: "Choose correct: I ___ a car.", options: ["has", "have", "had", "having"], correct: 1},

{section: "🎓Subject: English Language", question: "Fill in: She is married ___ a doctor.", options: ["to", "with", "for", "by"], correct: 0},

{section: "🎓Subject: English Language", question: "Choose the correct tense: He ___ TV every day.", options: ["watch", "watches", "watched", "watching"], correct: 1},

{section: "🎓Subject: English Language", question: "Opposite of 'rich' is ___", options: ["poor", "wealthy", "strong", "big"], correct: 0},

{section: "🎓Subject: English Language", question: "Synonym of 'big' is ___", options: ["small", "large", "tiny", "short"], correct: 1},

{section: "🎓Subject: English Language", question: "Choose correct spelling", options: ["Definately", "Definitely", "Definetly", "Definatly"], correct: 1},

{section: "🎓Subject: English Language", question: "Fill in: He arrived ___ time.", options: ["on", "in", "at", "by"], correct: 0},

{section: "🎓Subject: English Language", question: "Choose correct: They ___ finished the work.", options: ["has", "have", "had", "is"], correct: 1},

{section: "🎓Subject: English Language", question: "Plural of 'man' is ___", options: ["mans", "men", "manes", "mens"], correct: 1},

{section: "🎓Subject: English Language", question: "Choose correct: I ___ him yesterday.", options: ["see", "saw", "seen", "seeing"], correct: 1},

{section: "🎓Subject: English Language", question: "Opposite of 'hot' is ___", options: ["warm", "cold", "heat", "boil"], correct: 1},

{section: "🎓Subject: English Language", question: "Synonym of 'quick' is ___", options: ["slow", "fast", "late", "lazy"], correct: 1},

{section: "🎓Subject: English Language", question: "Choose correct: She ___ reading.", options: ["is", "are", "was", "be"], correct: 0},

{section: "🎓Subject: English Language", question: "Fill in: He depends ___ his parents.", options: ["on", "in", "at", "for"], correct: 0},

{section: "🎓Subject: English Language", question: "Choose correct: We ___ going home.", options: ["is", "are", "was", "be"], correct: 1},

{section: "🎓Subject: English Language", question: "Opposite of 'open' is ___", options: ["close", "closed", "shut", "lock"], correct: 1},

{section: "🎓Subject: English Language", question: "Synonym of 'start' is ___", options: ["end", "begin", "stop", "close"], correct: 1},

{section: "🎓Subject: English Language", question: "Choose correct spelling", options: ["Acomodation", "Accommodation", "Accomodation", "Acommodation"], correct: 1},

{section: "🎓Subject: English Language", question: "Fill in: She is interested ___ music.", options: ["on", "in", "at", "for"], correct: 1},

{section: "🎓Subject: English Language", question: "Choose correct: He ___ eating.", options: ["is", "are", "was", "be"], correct: 0},

{section: "🎓Subject: English Language", question: "Opposite of 'strong' is ___", options: ["weak", "powerful", "big", "tough"], correct: 0},

{section: "🎓Subject: English Language", question: "Synonym of 'end' is ___", options: ["finish", "start", "open", "begin"], correct: 0},

{section: "🎓Subject: English Language", question: "Choose correct: I ___ my work.", options: ["finish", "finished", "finishing", "finishes"], correct: 1},

{section: "🎓Subject: English Language", question: "Fill in: He is fond ___ football.", options: ["of", "in", "on", "at"], correct: 0},

{section: "🎓Subject: English Language", question: "Choose correct: She ___ a teacher.", options: ["is", "are", "was", "be"], correct: 0},

{section: "🎓Subject: English Language", question: "Opposite of 'young' is ___", options: ["old", "new", "small", "tiny"], correct: 0},

{section: "🎓Subject: English Language", question: "Synonym of 'angry' is ___", options: ["happy", "mad", "glad", "calm"], correct: 1},

{section: "🎓Subject: English Language", question: "Choose correct spelling", options: ["Enviroment", "Environment", "Environmant", "Enviroment"], correct: 1},

{section: "🎓Subject: English Language", question: "Fill in: He is proud ___ his son.", options: ["of", "in", "on", "at"], correct: 0},

{section: "🎓Subject: English Language", question: "Choose correct: They ___ students.", options: ["is", "are", "was", "be"], correct: 1},

{section: "🎓Subject: English Language", question: "Opposite of 'full' is ___", options: ["empty", "filled", "complete", "whole"], correct: 0},

{section: "🎓Subject: English Language", question: "Synonym of 'small' is ___", options: ["big", "tiny", "large", "wide"], correct: 1},

{section: "🎓Subject: English Language", question: "Choose correct: I ___ going.", options: ["am", "is", "are", "be"], correct: 0},

{section: "🎓Subject: English Language", question: "Fill in: She apologized ___ him.", options: ["to", "for", "with", "on"], correct: 0},

{section: "🎓Subject: English Language", question: "Choose correct: He ___ not come.", options: ["did", "does", "do", "is"], correct: 0},

{section: "🎓Subject: English Language", question: "Opposite of 'fast' is ___", options: ["quick", "rapid", "slow", "speed"], correct: 2},

{section: "🎓Subject: English Language", question: "Synonym of 'beautiful' is ___", options: ["ugly", "pretty", "bad", "dirty"], correct: 1},     

{section: "🎓Subject: English Language", question: "Choose the correct option: Neither John nor his friends ___ coming.", options: ["is", "are", "was", "be"], correct: 1},

{section: "🎓Subject: English Language", question: "Identify the correctly punctuated sentence.", options: ["its a good day", "it's a good day", "its' a good day", "it's a good day."], correct: 3},


{section: "🎓Subject: Mathematics", question: "If 2x + 5 = 17, find x.", options: ["5", "6", "7", "8"], correct: 1},

{section: "🎓Subject: Mathematics", question: "Simplify: 3(2x - 4) + 5x", options: ["11x - 12", "6x - 4", "11x - 4", "6x - 12"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Solve: x² - 5x + 6 = 0", options: ["x=2 or 3", "x=1 or 6", "x=−2 or −3", "x=0 or 6"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Find the value of x: 2^(x) = 16", options: ["2", "3", "4", "5"], correct: 2},
/* ================= MATHEMATICS – JAMB STANDARD ================= */

{section: "🎓Subject: Mathematics", question: "If 2x + 5 = 17, find x.", options: ["5", "6", "7", "8"], correct: 1},

{section: "🎓Subject: Mathematics", question: "Simplify: 3(2x - 4) + 5x", options: ["11x - 12", "6x - 4", "11x - 4", "6x - 12"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Solve: x² - 5x + 6 = 0", options: ["x=2 or 3", "x=1 or 6", "x=−2 or −3", "x=0 or 6"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Find the value of x: 2^(x) = 16", options: ["2", "3", "4", "5"], correct: 2},

{section: "🎓Subject: Mathematics", question: "If log₁₀(1000) = ?", options: ["2", "3", "10", "1"], correct: 1},

{section: "🎓Subject: Mathematics", question: "Find the median of: 2, 4, 6, 8, 10", options: ["4", "5", "6", "7"], correct: 2},

{section: "🎓Subject: Mathematics", question: "What is the probability of getting a head when tossing a fair coin?", options: ["1/4", "1/2", "1", "2"], correct: 1},

{section: "🎓Subject: Mathematics", question: "If sin θ = 1/2, find θ.", options: ["30°", "45°", "60°", "90°"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Find the area of a triangle with base 10cm and height 5cm.", options: ["25cm²", "50cm²", "75cm²", "100cm²"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Solve simultaneous equations: x + y = 10, x - y = 2", options: ["x=6, y=4", "x=5, y=5", "x=4, y=6", "x=7, y=3"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Find the mean of: 3, 6, 9, 12", options: ["6", "7.5", "8", "9"], correct: 1},

{section: "🎓Subject: Mathematics", question: "What is the value of tan 45°?", options: ["0", "1", "√3", "1/2"], correct: 1},

{section: "🎓Subject: Mathematics", question: "Simplify: (x² × x³)", options: ["x⁵", "x⁶", "x⁹", "x"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Convert 0.125 to fraction", options: ["1/2", "1/4", "1/8", "1/16"], correct: 2},

{section: "🎓Subject: Mathematics", question: "If a:b = 2:3 and b:c = 4:5, find a:c.", options: ["8:15", "2:5", "4:15", "6:15"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Find the perimeter of a rectangle with length 8cm and width 5cm.", options: ["13cm", "26cm", "40cm", "20cm"], correct: 1},

{section: "🎓Subject: Mathematics", question: "Solve: 3x/2 = 9", options: ["3", "6", "9", "12"], correct: 1},

{section: "🎓Subject: Mathematics", question: "What is the next number: 2, 4, 8, 16, ___?", options: ["18", "24", "32", "30"], correct: 2},

{section: "🎓Subject: Mathematics", question: "Find the mode: 2, 3, 3, 5, 6", options: ["2", "3", "5", "6"], correct: 1},

{section: "🎓Subject: Mathematics", question: "If cos θ = 0, θ = ?", options: ["0°", "45°", "90°", "180°"], correct: 2},

{section: "🎓Subject: Mathematics", question: "Find simple interest on ₦1000 at 10% for 2 years.", options: ["₦100", "₦200", "₦300", "₦400"], correct: 1},

{section: "🎓Subject: Mathematics", question: "Expand: (x + 2)(x + 3)", options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 3x + 2", "x² + 2x + 3"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Solve: x² = 49", options: ["7", "±7", "14", "−7"], correct: 1},

{section: "🎓Subject: Mathematics", question: "Find the LCM of 4 and 6", options: ["12", "24", "6", "18"], correct: 0},

{section: "🎓Subject: Mathematics", question: "What is the volume of a cube of side 3cm?", options: ["9", "18", "27", "36"], correct: 2},

{section: "🎓Subject: Mathematics", question: "Solve: log₁₀(10) = ?", options: ["0", "1", "10", "2"], correct: 1},

{section: "🎓Subject: Mathematics", question: "If y = 2x and x = 3, find y.", options: ["3", "5", "6", "9"], correct: 2},

{section: "🎓Subject: Mathematics", question: "Find the range: 2, 5, 9, 12", options: ["10", "9", "8", "7"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Find the HCF of 12 and 18", options: ["6", "12", "18", "3"], correct: 0},

{section: "🎓Subject: Mathematics", question: "What is 5! ?", options: ["120", "60", "24", "20"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Solve: 2x - 3 = 7", options: ["5", "4", "6", "3"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Find gradient of line joining (0,0) and (2,4)", options: ["1", "2", "3", "4"], correct: 1},

{section: "🎓Subject: Mathematics", question: "If P(A) = 0.5, what is P(not A)?", options: ["0.5", "1", "0", "2"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Evaluate: 2³ × 2²", options: ["2⁵", "2⁶", "2⁴", "2³"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Solve: 10x = 100", options: ["5", "10", "15", "20"], correct: 1},

{section: "🎓Subject: Mathematics", question: "Find the circumference of circle radius 7 (π=22/7)", options: ["44", "22", "14", "77"], correct: 0},

{section: "🎓Subject: Mathematics", question: "Convert 3/5 to percentage", options: ["50%", "60%", "70%", "80%"], correct: 1},

{section: "🎓Subject: Mathematics", question: "Solve: 4x = 20", options: ["4", "5", "6", "7"], correct: 1},

{section: "🎓Subject: Mathematics", question: "Find the diagonal of square side 5cm (√2≈1.4)", options: ["5", "7", "7.1", "10"], correct: 2},

{section: "🎓Subject: Mathematics", question: "Find the area of circle radius 7 (π=22/7)", options: ["154", "144", "100", "200"], correct: 0},

/* ================= CHEMISTRY – JAMB SCHEME STANDARD ================= */

{section: "🎓Subject: Chemistry", question: "The smallest particle of an element that retains its chemical properties is ___", options: ["Atom", "Molecule", "Ion", "Electron"], correct: 0},

{section: "🎓Subject: Chemistry", question: "The number of protons in an atom is called ___", options: ["Mass number", "Atomic number", "Valency", "Electron number"], correct: 1},

{section: "🎓Subject: Chemistry", question: "Which subatomic particle has a negative charge?", options: ["Proton", "Electron", "Neutron", "Nucleus"], correct: 1},

{section: "🎓Subject: Chemistry", question: "The atomic mass of an element is ___", options: ["Number of protons", "Number of neutrons", "Sum of protons and neutrons", "Number of electrons"], correct: 2},

{section: "🎓Subject: Chemistry", question: "Which of the following is an alkali metal?", options: ["Calcium", "Sodium", "Aluminium", "Chlorine"], correct: 1},

{section: "🎓Subject: Chemistry", question: "Which group in the periodic table contains noble gases?", options: ["Group 1", "Group 2", "Group 17", "Group 18"], correct: 3},

{section: "🎓Subject: Chemistry", question: "Which type of bond involves sharing of electrons?", options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"], correct: 1},

{section: "🎓Subject: Chemistry", question: "Ionic compounds are usually ___", options: ["Liquid at room temperature", "Gases", "Solid at room temperature", "Highly flammable"], correct: 2},

{section: "🎓Subject: Chemistry", question: "Water is a ___ molecule", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"], correct: 1},

{section: "🎓Subject: Chemistry", question: "pH value of pure water is ___", options: ["0", "7", "14", "1"], correct: 1},

{section: "🎓Subject: Chemistry", question: "Acids turn blue litmus paper ___", options: ["Red", "Blue", "Green", "No change"], correct: 0},

{section: "🎓Subject: Chemistry", question: "Bases are also called ___", options: ["Alkalis", "Acids", "Salts", "Oxides"], correct: 0},

{section: "🎓Subject: Chemistry", question: "NaOH is an example of a ___", options: ["Acid", "Base", "Salt", "Neutral compound"], correct: 1},

{section: "🎓Subject: Chemistry", question: "The gas evolved when acids react with metals is ___", options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"], correct: 1},

{section: "🎓Subject: Chemistry", question: "Which law states that mass is neither created nor destroyed in a chemical reaction?", options: ["Law of Definite Proportion", "Law of Conservation of Mass", "Law of Multiple Proportion", "Gay-Lussac's Law"], correct: 1},

{section: "🎓Subject: Chemistry", question: "The formula of methane is ___", options: ["CH4", "C2H6", "C2H4", "CH3"], correct: 0},

{section: "🎓Subject: Chemistry", question: "Which of the following is a hydrocarbon?", options: ["H2O", "CO2", "C2H6", "NaCl"], correct: 2},

{section: "🎓Subject: Chemistry", question: "The gas with the formula CO2 is ___", options: ["Carbon monoxide", "Carbon dioxide", "Oxygen", "Hydrogen"], correct: 1},

{section: "🎓Subject: Chemistry", question: "The periodic table is arranged in order of increasing ___", options: ["Atomic mass", "Atomic number", "Valency", "Density"], correct: 1},

{section: "🎓Subject: Chemistry", question: "An isotope of an element has the same number of ___", options: ["Protons but different neutrons", "Neutrons but different protons", "Electrons only", "Protons and neutrons same"], correct: 0},

{section: "🎓Subject: Chemistry", question: "A catalyst ___", options: ["Is consumed in the reaction", "Slows down the reaction", "Speeds up the reaction without being consumed", "Changes products"], correct: 2},

{section: "🎓Subject: Chemistry", question: "Which of these is a diatomic molecule?", options: ["CO2", "O2", "CH4", "H2O"], correct: 1},

{section: "🎓Subject: Chemistry", question: "The main component of air is ___", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], correct: 2},

{section: "🎓Subject: Chemistry", question: "The formula of table salt is ___", options: ["NaCl", "KCl", "NaOH", "HCl"], correct: 0},

{section: "🎓Subject: Chemistry", question: "Which type of reaction releases energy?", options: ["Endothermic", "Exothermic", "Neutral", "Displacement"], correct: 1},

{section: "🎓Subject: Chemistry", question: "Which element has atomic number 1?", options: ["Helium", "Hydrogen", "Oxygen", "Carbon"], correct: 1},

{section: "🎓Subject: Chemistry", question: "The formula of sulfuric acid is ___", options: ["HCl", "H2SO4", "HNO3", "NaOH"], correct: 1},

{section: "🎓Subject: Chemistry", question: "Which of the following is an organic compound?", options: ["CO2", "CH4", "NaCl", "H2O"], correct: 1},

{section: "🎓Subject: Chemistry", question: "The process of solid changing directly to gas is called ___", options: ["Condensation", "Sublimation", "Evaporation", "Melting"], correct: 1},

{section: "🎓Subject: Chemistry", question: "Avogadro's number is ___", options: ["6.02 x 10^23", "9.8", "3.0 x 10^8", "1.6 x 10^-19"], correct: 0},

{section: "🎓Subject: Chemistry", question: "Molarity refers to ___", options: ["Mass of solute", "Number of moles per liter of solution", "Volume of solution", "Density"], correct: 1},

{section: "🎓Subject: Chemistry", question: "Which of the following is a noble gas?", options: ["He", "H", "Cl", "Na"], correct: 0},

{section: "🎓Subject: Chemistry", question: "Na + H2O produces ___", options: ["NaOH + H2", "NaCl + O2", "H2O2", "Na + O2"], correct: 0},

{section: "🎓Subject: Chemistry", question: "Which metal is liquid at room temperature?", options: ["Mercury", "Sodium", "Gold", "Aluminium"], correct: 0},

{section: "🎓Subject: Chemistry", question: "Electrolysis is the process of ___", options: ["Chemical change due to heat", "Decomposition using electricity", "Mixing substances", "Combustion"], correct: 1},

{section: "🎓Subject: Chemistry", question: "The pH of lemon juice is approximately ___", options: ["2", "7", "10", "12"], correct: 0},

{section: "🎓Subject: Chemistry", question: "Which of these is a strong acid?", options: ["HCl", "CH3COOH", "H2CO3", "H2O"], correct: 0},

{section: "🎓Subject: Chemistry", question: "Which is an example of a base?", options: ["HCl", "NaOH", "CO2", "H2O"], correct: 1},

{section: "🎓Subject: Chemistry", question: "The study of carbon compounds is called ___", options: ["Inorganic chemistry", "Physical chemistry", "Organic chemistry", "Analytical chemistry"], correct: 2},

{section: "🎓Subject: Chemistry", question: "Which of these is a common laboratory indicator?", options: ["Litmus", "Sulphur", "Sodium", "Hydrogen"], correct: 0},

{section: "🎓Su    function startExam() {bject: Chemistry", question: "In a chemical reaction, the reactants are ___", options: ["Substances formed", "Substances used", "Catalysts", "Products"], correct: 1},

{section: "🎓Subject: Chemistry", question: "Which law states that volume and temperature of a gas are directly proportional?", options: ["Boyle’s Law", "Charles’ Law", "Avogadro’s Law", "Gay-Lussac’s Law"], correct: 1},

/* ================= BIOLOGY – JAMB SCHEME STANDARD ================= */

{section: "🎓Subject: Biology", question: "The basic unit of life is the ___", options: ["tissue", "organ", "cell", "organism"], correct: 2},

{section: "🎓Subject: Biology", question: "Which organelle is responsible for respiration in the cell?", options: ["Nucleus", "Mitochondrion", "Ribosome", "Chloroplast"], correct: 1},

{section: "🎓Subject: Biology", question: "Photosynthesis occurs mainly in the ___", options: ["root", "stem", "leaf", "flower"], correct: 2},

{section: "🎓Subject: Biology", question: "The green pigment in plants is called ___", options: ["chlorophyll", "cytoplasm", "glucose", "starch"], correct: 0},

{section: "🎓Subject: Biology", question: "Which gas is released during photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: 1},

{section: "🎓Subject: Biology", question: "Which part of the cell controls its activities?", options: ["Cytoplasm", "Nucleus", "Cell membrane", "Mitochondria"], correct: 1},

{section: "🎓Subject: Biology", question: "Diffusion is the movement of particles from ___", options: ["low to high concentration", "high to low concentration", "equal concentration", "random movement"], correct: 1},

{section: "🎓Subject: Biology", question: "Osmosis involves movement of ___", options: ["solutes", "water", "gases", "proteins"], correct: 1},

{section: "🎓Subject: Biology", question: "The process by which plants lose water is called ___", options: ["transpiration", "respiration", "photosynthesis", "diffusion"], correct: 0},

{section: "🎓Subject: Biology", question: "Which blood cells help in clotting?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], correct: 2},

{section: "🎓Subject: Biology", question: "The function of red blood cells is to ___", options: ["fight infection", "transport oxygen", "clot blood", "digest food"], correct: 1},

{section: "🎓Subject: Biology", question: "The heart pumps blood through the ___ system", options: ["digestive", "circulatory", "respiratory", "nervous"], correct: 1},

{section: "🎓Subject: Biology", question: "Which organ is responsible for breathing?", options: ["Heart", "Lungs", "Kidney", "Liver"], correct: 1},

{section: "🎓Subject: Biology", question: "The main organ of excretion is the ___", options: ["heart", "lungs", "kidney", "brain"], correct: 2},

{section: "🎓Subject: Biology", question: "The process of removing waste products is called ___", options: ["excretion", "digestion", "respiration", "circulation"], correct: 0},

{section: "🎓Subject: Biology", question: "Which part of the plant conducts water?", options: ["Phloem", "Xylem", "Root hair", "Leaf"], correct: 1},

{section: "🎓Subject: Biology", question: "Which part transports food in plants?", options: ["Xylem", "Phloem", "Root", "Stem"], correct: 1},

{section: "🎓Subject: Biology", question: "The site of protein synthesis is the ___", options: ["ribosome", "nucleus", "mitochondria", "chloroplast"], correct: 0},

{section: "🎓Subject: Biology", question: "Genetics is the study of ___", options: ["cells", "heredity", "plants", "animals"], correct: 1},

{section: "🎓Subject: Biology", question: "The unit of heredity is the ___", options: ["gene", "chromosome", "DNA", "cell"], correct: 0},

{section: "🎓Subject: Biology", question: "A dominant trait is one that ___", options: ["is hidden", "is expressed", "is lost", "is recessive"], correct: 1},

{section: "🎓Subject: Biology", question: "Which of the following is a recessive trait?", options: ["TT", "Tt", "tt", "TTT"], correct: 2},

{section: "🎓Subject: Biology", question: "The process by which organisms produce offspring is called ___", options: ["respiration", "reproduction", "excretion", "nutrition"], correct: 1},

{section: "🎓Subject: Biology", question: "Fertilization is the fusion of ___", options: ["cells", "gametes", "tissues", "organs"], correct: 1},

{section: "🎓Subject: Biology", question: "The male reproductive cell is called ___", options: ["egg", "sperm", "zygote", "ovum"], correct: 1},

{section: "🎓Subject: Biology", question: "The female reproductive cell is called ___", options: ["sperm", "ovum", "zygote", "embryo"], correct: 1},

{section: "🎓Subject: Biology", question: "The study of living organisms and their environment is called ___", options: ["biology", "ecology", "genetics", "zoology"], correct: 1},

{section: "🎓Subject: Biology", question: "A group of organisms of the same species living together is called ___", options: ["community", "population", "ecosystem", "habitat"], correct: 1},

{section: "🎓Subject: Biology", question: "All living and non-living things in an area form an ___", options: ["ecosystem", "population", "community", "organism"], correct: 0},

{section: "🎓Subject: Biology", question: "Green plants are called ___", options: ["consumers", "producers", "decomposers", "scavengers"], correct: 1},

{section: "🎓Subject: Biology", question: "Animals that eat plants are called ___", options: ["carnivores", "herbivores", "omnivores", "decomposers"], correct: 1},

{section: "🎓Subject: Biology", question: "Animals that eat both plants and animals are ___", options: ["herbivores", "carnivores", "omnivores", "parasites"], correct: 2},

{section: "🎓Subject: Biology", question: "Energy flows in an ecosystem through ___", options: ["food chain", "water cycle", "nitrogen cycle", "respiration"], correct: 0},

{section: "🎓Subject: Biology", question: "Bacteria and fungi are ___", options: ["producers", "consumers", "decomposers", "parasites"], correct: 2},

{section: "🎓Subject: Biology", question: "The theory of evolution was proposed by ___", options: ["Newton", "Darwin", "Einstein", "Mendel"], correct: 1},

{section: "🎓Subject: Biology", question: "Adaptation helps organisms to ___", options: ["die quickly", "survive", "move faster", "grow bigger"], correct: 1},

{section: "🎓Subject: Biology", question: "The nervous system controls ___", options: ["digestion", "movement and coordination", "excretion", "growth"], correct: 1},

{section: "🎓Subject: Biology", question: "The brain is part of the ___ system", options: ["digestive", "nervous", "circulatory", "respiratory"], correct: 1},

{section: "🎓Subject: Biology", question: "Hormones are produced by ___", options: ["glands", "cells", "organs", "tissues"], correct: 0},

{section: "🎓Subject: Biology", question: "Insulin regulates ___", options: ["blood pressure", "blood sugar", "temperature", "oxygen"], correct: 1}
        ];

        let currentQuestion = 0;
        let userAnswers = new Array(questions.length).fill(null);
        let timeRemaining = 7200;
        let timerInterval;
        let examSubmitted = false;

        function init() {
            renderQuestionGrid();
            renderQuestions();
            setupEventListeners();
        }

        function setupEventListeners() {
            document.getElementById('startBtn').addEventListener('click', startExam);
        }

        function renderQuestionGrid() {
            const grid = document.getElementById('questionGrid');
            grid.innerHTML = '';
            questions.forEach((_, index) => {
                const item = document.createElement('div');
                item.className = 'grid-item';
                item.textContent = index + 1;
                item.onclick = () => goToQuestion(index);
                grid.appendChild(item);
            });
        }

        function renderQuestions() {
            const container = document.getElementById('questionContainer');
            container.innerHTML = '';
            
            questions.forEach((q, index) => {
                const card = document.createElement('div');
                card.className = 'question-card';
                card.id = `question-${index}`;
                
                const sectionHeader = index === 0 || q.section !== questions[index-1].section 
                    ? `<div style="background: #667eea; color: white; padding: 10px; border-radius: 5px; margin-bottom: 15px; font-weight: bold;">${q.section}</div>` 
                    : '';
                
                card.innerHTML = `
                    ${sectionHeader}
                    <div class="question-number">Question ${index + 1} of ${questions.length}</div>
                    <div class="question-text">${q.question}</div>
                    <div class="options">
                        ${q.options.map((opt, optIndex) => `
                            <div class="option" data-question="${index}" data-option="${optIndex}">
                                <span class="option-letter">${String.fromCharCode(65 + optIndex)}</span>
                                <span>${opt}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="navigation">
                        <button class="nav-btn" onclick="prevQuestion()" ${index === 0 ? 'disabled' : ''}>← Previous</button>
                        <button class="nav-btn" onclick="nextQuestion()" ${index === questions.length - 1 ? 'disabled' : ''}>Next →</button>
                    </div>
                    ${index === questions.length - 1 ? '<button class="btn" onclick="submitExam()" style="margin-top: 20px; width: 100%;">Submit Examination</button>' : ''}
                `;
                
                container.appendChild(card);
            });

            // Add event listeners to options
            document.querySelectorAll('.option').forEach(opt => {
                opt.addEventListener('click', function() {
                    const qIndex = parseInt(this.getAttribute('data-question'));
                    const oIndex = parseInt(this.getAttribute('data-option'));
                    selectOption(qIndex, oIndex);
                });
            });
        }

   function startExam() {
    document.querySelector('.subject-select').style.display = 'none';
    
    // FILTER QUESTIONS FIRST
    const filtered = questions.filter(q => {
        return selectedSubjects.some(sub =>
            q.section.includes(sub)
        );
    });

    // Replace questions with selected ones
    questions.length = 0;
    filtered.forEach(q => questions.push(q));

    // Reset answers array
    userAnswers = new Array(questions.length).fill(null);

    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('header').classList.add('active');
    document.getElementById('questionGrid').classList.add('active');
    document.getElementById('questionContainer').style.display = 'block'; // 👈 ADD THIS

    renderQuestionGrid();
    renderQuestions();

    showQuestion(0);
    startTimer();
    updateStats();
}
        function startTimer() {
            timerInterval = setInterval(() => {
                timeRemaining--;
                updateTimerDisplay();
                
                if (timeRemaining <= 300) {
                    document.getElementById('timer').classList.add('warning');
                }
                
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    submitExam();
                }
            }, 1000);
        }

        function updateTimerDisplay() {
            const hours = Math.floor(timeRemaining / 3600);
            const minutes = Math.floor((timeRemaining % 3600) / 60);
            const seconds = timeRemaining % 60;
            document.getElementById('timer').textContent = 
                `Time Remaining: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        function showQuestion(index) {
            document.querySelectorAll('.question-card').forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });
            
            document.querySelectorAll('.grid-item').forEach((item, i) => {
                item.classList.toggle('current', i === index);
                item.classList.toggle('answered', userAnswers[i] !== null);
            });
            
            if (userAnswers[index] !== null) {
                const options = document.querySelectorAll(`#question-${index} .option`);
                options.forEach((opt, i) => {
                    opt.classList.toggle('selected', i === userAnswers[index]);
                });
            }
            
            currentQuestion = index;
            updateStats();
        }

        function selectOption(questionIndex, optionIndex) {
            if (examSubmitted) return;
            
            userAnswers[questionIndex] = optionIndex;
            
            const options = document.querySelectorAll(`#question-${questionIndex} .option`);
            options.forEach((opt, i) => {
                opt.classList.toggle('selected', i === optionIndex);
            });
            
            updateStats();
            
            setTimeout(() => {
                if (questionIndex < questions.length - 1) {
                    nextQuestion();
                }
            }, 500);
        }

        function nextQuestion() {
            if (currentQuestion < questions.length - 1) {
                showQuestion(currentQuestion + 1);
            }
        }

        function prevQuestion() {
            if (currentQuestion > 0) {
                showQuestion(currentQuestion - 1);
            }
        }

        function goToQuestion(index) {
            showQuestion(index);
        }

        function updateStats() {
            document.getElementById('currentQ').textContent = currentQuestion + 1;
            const answered = userAnswers.filter(a => a !== null).length;
            document.getElementById('answeredCount').textContent = answered;
            document.getElementById('remainingCount').textContent = questions.length - answered;
            
            const progress = (answered / questions.length) * 100;
            document.getElementById('progressFill').style.width = `${progress}%`;
        }

        function submitExam() {
            if (examSubmitted) return;
            
            const unanswered = userAnswers.filter(a => a === null).length;
            if (unanswered > 0) {
                if (!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) {
                    return;
                }
            }
            
            examSubmitted = true;
            clearInterval(timerInterval);
            
            let correct = 0;
            let wrong = 0;
            let unansweredCount = 0;
            
            userAnswers.forEach((answer, index) => {
                if (answer === null) {
                    unansweredCount++;
                } else if (answer === questions[index].correct) {
                    correct++;
                } else {
                    wrong++;
                }
            });
            
            const percentage = Math.round((correct / questions.length) * 100);
            
            document.getElementById('header').style.display = 'none';
            document.getElementById('questionContainer').style.display = 'none';
            document.getElementById('questionGrid').style.display = 'none';
            document.getElementById('resultsScreen').classList.add('active');
            
            const scoreCircle = document.getElementById('scoreCircle');
            scoreCircle.style.setProperty('--score-deg', `${percentage * 3.6}deg`);
            document.getElementById('scorePercentage').textContent = `${percentage}%`;
            
            document.getElementById('correctCount').textContent = correct;
            document.getElementById('wrongCount').textContent = wrong;
            document.getElementById('unansweredCount').textContent = unansweredCount;
            
            generateReview();
        }

        function generateReview() {
            const reviewList = document.getElementById('reviewList');
            reviewList.innerHTML = '';
            
            questions.forEach((q, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === q.correct;
                const isUnanswered = userAnswer === null;
                
                const reviewItem = document.createElement('div');
                reviewItem.className = `review-item ${isCorrect ? 'correct' : isUnanswered ? 'unanswered' : 'wrong'}`;
                
                let statusText = isCorrect ? '✓ Correct' : isUnanswered ? '○ Unanswered' : '✗ Wrong';
                let userAnswerText = isUnanswered ? 'No answer' : `Your answer: ${String.fromCharCode(65 + userAnswer)}. ${q.options[userAnswer]}`;
                let correctAnswerText = `Correct answer: ${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}`;
                
                reviewItem.innerHTML = `
                    <strong>Q${index + 1}:</strong> ${q.question}<br>
                    <small style="color: ${isCorrect ? '#27ae60' : isUnanswered ? '#f39c12' : '#e74c3c'}">${statusText}</small><br>
                    ${!isCorrect ? `${userAnswerText}<br>` : ''}
                    ${!isCorrect ? `<strong style="color: #27ae60">${correctAnswerText}</strong>` : ''}
                `;
                
                reviewList.appendChild(reviewItem);
            });
        }

        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker Registered'));
}
// OPEN & CLOSE
const calculatorBtn = document.getElementById("calculatorBtn");
const calculatorModal = document.getElementById("calculatorModal");
const closeCalc = document.getElementById("closeCalc");

calculatorBtn.onclick = function () {
    calculatorModal.style.display = "flex";
};

closeCalc.onclick = function () {
    calculatorModal.style.display = "none";
};

// CALCULATOR LOGIC
let display = document.getElementById("calcDisplay");

function press(value) {
    display.value += value;
}

function clearCalc() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
let selectedSubjects = [];

document.querySelectorAll('.subject-box').forEach(box => {
    box.addEventListener('click', function () {
        const subject = this.getAttribute('data-subject');

        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
            selectedSubjects = selectedSubjects.filter(s => s !== subject);
        } else {
            this.classList.add('selected');
            selectedSubjects.push(subject);
        }

        // Require exactly 4 subjects
        if (selectedSubjects.length === 4) {
            document.getElementById('startBtn').disabled = false;
        } else {
            document.getElementById('startBtn').disabled = true;
        }
    });
});