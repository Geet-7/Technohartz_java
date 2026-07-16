/**
 * Core Java Workshop — Slide Content Database
 * Contains window.DECK data structure.
 */

window.DECK = [
  {
    type: "module",
    num: 1,
    title: "Introduction to Programming",
    desc: "Embark on your journey into code. Discover what programming is, how computers think, and how we solve complex real-world problems using algorithms and languages like Java.",
    topics: [
      "What is Programming?",
      "Why Programming?",
      "Computational Thinking & Problem Solving",
      "Algorithms & Pseudocode",
      "Flowcharts",
      "Programming Languages & Why Java?"
    ]
  },
  {
    type: "slide",
    module: 1,
    topic: "What is Programming?",
    body: [
      {
        k: "image",
        src: "assets/images/java_coffee_mug.png",
        alt: "Java Programming Mug",
        caption: "Java: The language that powers billions of devices globally."
      },
      {
        k: "intro",
        p: "Programming is how we talk to computers. Computers are incredibly fast and accurate, but they are also completely brainless. They only do exactly what we tell them to do. Programming is the process of writing clear, step-by-step instructions that a computer can follow to accomplish a task."
      },
      {
        k: "why",
        p: "Computers do not speak English, Spanish, or Hindi. They only understand electricity being \"on\" or \"off\" (represented as 1 and 0). Because humans cannot easily write millions of 1s and 0s, programming exists as a bridge: we write code in a language we can understand, and tools translate it for the computer."
      },
      {
        k: "def",
        p: "Programming is the systematic process of designing, writing, testing, and debugging source code in a programming language, which is then translated into machine-readable instructions (binary) for a CPU to execute."
      },
      {
        k: "heading",
        text: "How Computers See Our Code"
      },
      {
        k: "explain",
        p: `When you write a line of Java like System.out.println("Hello");, the computer cannot read it directly. It must be broken down by a compiler into bytecode, and eventually by the JVM into binary language (0s and 1s) which corresponds to electrical gates in your computer's processor.`
      },
      {
        k: "code",
        file: "IntroductionExample.java",
        code: `public class IntroductionExample {
    public static void main(String[] args) {
        // This is a simple Java instruction telling the computer to print a message
        System.out.println("Hello, World!");
    }
}`,
        output: "Hello, World!",
        lines: [
          {
            n: 1,
            code: `public class IntroductionExample {`,
            explain: "Defines a boundary (class) for our code. All Java code lives inside a class."
          },
          {
            n: 2,
            code: `public static void main(String[] args) {`,
            explain: "The \"starting gate\" or main entry point where the computer begins executing our instructions."
          },
          {
            n: 4,
            code: `System.out.println("Hello, World!");`,
            explain: "The actual instruction: System (computer terminal), out (output stream), println (print a line of text)."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Assuming the computer knows what you \"mean\" rather than what you wrote. Computers have zero common sense.",
          "Forgetting semicolon (;) at the end of statements. In Java, semicolons are like periods in English sentences."
        ]
      },
      {
        k: "best",
        items: [
          "Always write comments (starting with //) to explain the \"why\" behind your code for future humans reading it.",
          "Start with simple, small steps instead of writing hundreds of lines at once."
        ]
      },
      {
        k: "summary",
        items: ["Programming is writing instructions for a machine.", "Computers only understand binary (0s and 1s).", "Java acts as a readable bridge language."]
      },
      {
        k: "compare",
        title: "Source Code vs Machine Code",
        a: {
          head: "Source Code",
          rows: ["Written in human-readable high-level languages (like Java).", "Uses letters, numbers, and symbols.", "Must be compiled or translated before the computer can run it.", `Example: System.out.println("Hello");`]
        },
        b: {
          head: "Machine Code",
          rows: ["Written in binary instructions (0s and 1s).", "Directly executed by the CPU registers.", "Platform-specific and extremely difficult for humans to read/write.", "Example: 10110000 01100001"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is the binary language?",
            a: "Binary is the fundamental language of computers, consisting entirely of 0s and 1s (representing off and on states of electrical transistors)."
          },
          {
            q: "Why do we need programming languages instead of just writing binary?",
            a: "Writing binary is slow, error-prone, and highly difficult for humans. Programming languages allow us to write logic in human-readable terms, which are then automatically translated into binary."
          },
          {
            q: "What is a source code compiler?",
            a: "A compiler is a special software tool that translates our human-readable program (source code) into a low-level format that the computer can execute."
          },
          {
            q: "In our cooking analogy, what represents the CPU (Central Processing Unit)?",
            a: "The chef represents the CPU, as the chef is the physical engine that carries out each step written in the recipe."
          },
          {
            q: "What happens if you miss a semicolon in Java?",
            a: "The compiler will fail to build the program, throwing a \"Syntax Error\" because it does not know where your instruction ends."
          }
        ],
        coding: [
          {
            q: "Create a Java program that outputs your name.",
            desc: "Write a class named MyName containing a main method that prints your name to the console.",
            solCode: `public class MyName {
    public static void main(String[] args) {
        System.out.println("John Doe");
    }
}`,
            solOut: "John Doe",
            solExp: `Inside the main method, we use System.out.println to output the text string "John Doe".`
          },
          {
            q: "Write a program to display three lines of text.",
            desc: "Output \"Line 1\", \"Line 2\", and \"Line 3\" on separate lines.",
            solCode: `public class TripleLine {
    public static void main(String[] args) {
        System.out.println("Line 1");
        System.out.println("Line 2");
        System.out.println("Line 3");
      }
}`,
            solOut: `Line 1
Line 2
Line 3`,
            solExp: "Using println multiple times causes each message to print on its own line sequentially."
          },
          {
            q: "Write a program to print a simple shopping bill.",
            desc: "Print \"Item: Coffee\", \"Price: $5.00\" on separate lines.",
            solCode: `public class ShoppingBill {
    public static void main(String[] args) {
        System.out.println("Item: Coffee");
        System.out.println("Price: \$5.00");
    }
}`,
            solOut: `Item: Coffee
Price: \$5.00`,
            solExp: "We print strings that clearly separate the item name and price for display."
          }
        ],
        predict: [
          {
            code: `public class PredictOne {
    public static void main(String[] args) {
        System.out.print("Hello ");
        System.out.println("World");
    }
}`,
            a: "Hello World",
            explain: `System.out.print does NOT append a new line after printing, so "World" appears on the same line immediately after "Hello ".`
          },
          {
            code: `public class PredictTwo {
    public static void main(String[] args) {
        System.out.println("10 + 20");
    }
}`,
            a: "10 + 20",
            explain: "Because the text is enclosed in double quotes (\"10 + 20\"), it is treated as a literal text message (String), not a math calculation."
          }
        ],
        debug: [
          {
            q: "Identify why this program fails to compile.",
            code: `public class BuggyIntro {
    public static void main(String[] args) {
        System.out.println("Welcome")
    }
}`,
            bug: `Missing semicolon (;) at the end of the System.out.println statement on line 3.`,
            solCode: `public class BuggyIntro {
    public static void main(String[] args) {
        System.out.println("Welcome");
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 1,
    topic: "Why Programming?",
    body: [
      {
        k: "intro",
        p: "We program to automate tasks, solve mathematical equations, analyze huge amounts of data, and build tools that make human life easier. Tasks that would take a human thousands of hours can be completed by a program in a split second."
      },
      {
        k: "why",
        p: "Without programming, we wouldn't have search engines, messaging apps, banking software, spacecraft systems, or online maps. Humans are prone to fatigue and errors when doing repetitive tasks; programs never get tired."
      },
      {
        k: "def",
        p: "Programming is an optimization tool designed to convert repetitive manual algorithms into high-throughput digital instructions, ensuring scalability, low latency, and zero-defect execution of operational processes."
      },
      {
        k: "heading",
        text: "Core Problems Solved by Programs"
      },
      {
        k: "bul",
        items: [
          "**Data Analysis**: Sorting and searching through billions of records (e.g., finding a single customer out of 100 million).",
          "**Automation**: Sending automated reminder emails, backing up files, or controlling factory machinery.",
          "**Complex Math**: Calculating spacecraft trajectories or predicting global weather patterns.",
          "**Communication**: Instantly transmitting text, audio, and video across the world."
        ]
      },
      {
        k: "code",
        file: "AutomationDemo.java",
        code: `public class AutomationDemo {
    public static void main(String[] args) {
        // Imagine doing this multiplication 500 times by hand
        long start = System.nanoTime();
        double result = 98765.43 * 12345.67;
        long end = System.nanoTime();
        
        System.out.println("Calculation Result: " + result);
        System.out.println("Time taken: " + (end - start) + " nanoseconds!");
    }
}`,
        output: `Calculation Result: 1.2193259929281E9
Time taken: 1200 nanoseconds!`,
        lines: [
          {
            n: 4,
            code: "long start = System.nanoTime();",
            explain: "Gets the current system time in nanoseconds (billionths of a second) before calculation."
          },
          {
            n: 5,
            code: "double result = 98765.43 * 12345.67;",
            explain: "Performs a large decimal multiplication instantly."
          },
          {
            n: 8,
            code: `System.out.println("Time taken: "...);`,
            explain: "Prints out the difference in nanoseconds, showcasing the machine's speed."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Writing programs for problems that could easily be solved with a simple pen-and-paper calculation.",
          "Assuming computational power makes up for a poorly designed algorithm (writing slow code because computers are fast)."
        ]
      },
      {
        k: "best",
        items: ["Before writing code, define the problem in plain English first.", "Focus on efficiency—use data structures that match the problem."]
      },
      {
        k: "compare",
        title: "Manual Work vs Automated Programs",
        a: {
          head: "Manual Processing",
          rows: ["Prone to fatigue, distractions, and human errors.", "Speed is limited by physical constraints.", "Scaling up requires hiring more people (costly).", "Example: Hand-writing 10,000 envelopes."]
        },
        b: {
          head: "Automated Programs",
          rows: ["Executes instructions exactly and consistently without error.", "Runs calculations in nanoseconds.", "Extremely scalable—handles millions of requests instantly.", "Example: A printing loop script."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "Name three areas where programming is critical.",
            a: "Medical equipment control, banking and transaction security, and automated flight systems."
          },
          {
            q: "How does a program help with human error?",
            a: "Programs follow instructions exactly the same way every time. They do not get tired, distracted, or forgetful, which eliminates operational mistakes."
          },
          {
            q: "What is automation?",
            a: "Automation is configuring a system to run a process or task automatically without requiring direct manual human intervention."
          },
          {
            q: "Is a program always faster than a human?",
            a: "For structured, computational, or repetitive data-handling tasks, yes. For tasks requiring emotional intelligence, art, or complex creative judgment, humans excel."
          },
          {
            q: "Why is efficiency in programming important?",
            a: "Even fast computers have limits. Efficient code uses less battery, takes less server space, costs less money, and runs faster for users."
          }
        ],
        coding: [
          {
            q: "Calculate and print the area of a room.",
            desc: "Create a class RoomArea that prints the area of a rectangle room with length = 15 and width = 12.",
            solCode: `public class RoomArea {
    public static void main(String[] args) {
        int length = 15;
        int width = 12;
        int area = length * width;
        System.out.println("Room Area: " + area + " sq ft");
    }
}`,
            solOut: "Room Area: 180 sq ft",
            solExp: "We declare variables for length and width, compute the area by multiplication, and output it."
          },
          {
            q: "Write a program to convert hours to minutes.",
            desc: "Convert 5 hours into minutes and output the result.",
            solCode: `public class HoursToMinutes {
    public static void main(String[] args) {
        int hours = 5;
        int minutes = hours * 60;
        System.out.println("5 hours is equal to " + minutes + " minutes");
    }
}`,
            solOut: "5 hours is equal to 300 minutes",
            solExp: "Multiplies the variable hours by 60 and prints the output string."
          },
          {
            q: "Automate a login welcome message.",
            desc: "Print \"Welcome, [Username]!\" and \"Session active: true\" on separate lines.",
            solCode: `public class WelcomeUser {
    public static void main(String[] args) {
        String username = "Alex_JavaCoder";
        boolean session = true;
        System.out.println("Welcome, " + username + "!");
        System.out.println("Session active: " + session);
    }
}`,
            solOut: `Welcome, Alex_JavaCoder!
Session active: true`,
            solExp: "Uses a String and a boolean variable to print customized session information."
          }
        ],
        predict: [
          {
            code: `public class SpeedPredict {
    public static void main(String[] args) {
        System.out.println("50" + "50");
    }
}`,
            a: "5050",
            explain: "Since the inputs are strings (\"50\"), the + operator performs concatenation (gluing text together), not math addition."
          },
          {
            code: `public class CalcPredict {
    public static void main(String[] args) {
        System.out.println(50 + 50);
    }
}`,
            a: "100",
            explain: "Without quotes, the numbers are numeric literals, so the + operator performs arithmetic addition."
          }
        ],
        debug: [
          {
            q: "Find the bug in this calculator program.",
            code: `public class BuggyCalc {
    public static void main(String[] args) {
        int first_number = 100;
        int second_number = 0;
        System.out.println(first_number / second_number);
    }
}`,
            bug: "Division by zero on line 5. At runtime, the JVM will crash with an ArithmeticException because division by zero is mathematically undefined.",
            solCode: `public class BuggyCalc {
    public static void main(String[] args) {
        int first_number = 100;
        int second_number = 2; // Fixed divider to a non-zero number
        System.out.println(first_number / second_number);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 1,
    topic: "Computational Thinking & Problem Solving",
    body: [
      {
        k: "intro",
        p: "Before you write a single line of code, you must solve the problem in your head. Computational Thinking is a mental toolkit that helps us break down big, messy problems into small, logical steps that a computer can understand."
      },
      {
        k: "why",
        p: "Writing code is easy; solving problems is hard. If you start typing code immediately without a plan, you will get lost, write buggy systems, and waste time. Computational thinking gives you a blueprint before you start building."
      },
      {
        k: "def",
        p: "Computational Thinking is a cognitive problem-solving process consisting of four pillars: **Decomposition** (breaking down), **Pattern Recognition** (finding similarities), **Abstraction** (focusing on important details), and **Algorithm Design** (creating step-by-step rules)."
      },
      {
        k: "heading",
        text: "The Four Pillars of Computational Thinking"
      },
      {
        k: "table",
        head: ["Pillar", "What it means", "Example (Making Pizza)"],
        rows: [
          ["Decomposition", "Break the problem into smaller parts.", "Making dough, preparing sauce, chopping toppings, baking."],
          ["Pattern Recognition", "Look for trends or similarities.", "Notice that all pizzas need baking at high heat."],
          ["Abstraction", "Ignore useless details to avoid clutter.", "Focus on cheese type, ignore the color of the oven mitt."],
          ["Algorithm Design", "Write a step-by-step recipe to solve it.", "1. Roll dough, 2. Add sauce, 3. Bake for 10 minutes."]
        ]
      },
      {
        k: "code",
        file: "PillarsDemo.java",
        code: `public class PillarsDemo {
    public static void main(String[] args) {
        // Problem: Double all numbers in a sequence
        // Decomposition: Step 1 - get a number. Step 2 - double it. Step 3 - repeat.
        int num1 = 5;
        int num2 = 12;
        
        System.out.println("Double of " + num1 + " is " + (num1 * 2));
        System.out.println("Double of " + num2 + " is " + (num2 * 2));
    }
}`,
        output: `Double of 5 is 10
Double of 12 is 24`,
        lines: [
          {
            n: 5,
            code: "int num1 = 5;",
            explain: "Isolating the first data input (abstraction)."
          },
          {
            n: 8,
            code: "(num1 * 2)",
            explain: "Applying the pattern (doubling formula) consistently."
          }
        ]
      },
      {
        k: "mistakes",
        items: ["Trying to solve the entire problem at once instead of decomposing it.", "Over-complicating: adding features you don't need yet (failing to abstract)."]
      },
      {
        k: "best",
        items: ["Draw the problem out on a whiteboard or paper first.", "Verify your decomposed steps manually before converting them to code."]
      },
      {
        k: "compare",
        title: "Decomposition vs Abstraction",
        a: {
          head: "Decomposition",
          rows: ["Breaking a complex problem into smaller, manageable parts.", "Focuses on dividing work into discrete steps.", "Helps tackle large problems systematically.", "Example: Planning subtasks for a login screen."]
        },
        b: {
          head: "Abstraction",
          rows: ["Filtering out unnecessary details to focus on core logic.", "Simplifies representations of complex systems.", "Reduces mental overhead.", "Example: Viewing a map without showing every single tree."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is Decomposition?",
            a: "Decomposition is breaking a complex problem down into smaller, more manageable sub-problems."
          },
          {
            q: "What is Abstraction?",
            a: "Abstraction is filtering out unnecessary details of a problem to focus on the characteristics that matter."
          },
          {
            q: "Why is Pattern Recognition helpful?",
            a: "It allows us to reuse solutions that worked for similar problems in the past, saving work."
          },
          {
            q: "Do only programmers use computational thinking?",
            a: "No. Doctors, mechanics, chefs, and engineers use it every day to troubleshoot and solve problems."
          },
          {
            q: "What is Algorithm Design?",
            a: "Creating a step-by-step set of instructions or rules to solve a problem."
          }
        ],
        coding: [
          {
            q: "Write a program that models Abstraction.",
            desc: "Represent a bank balance. Abstract away details like bank branch name and customer eye color, printing only the account ID and balance.",
            solCode: `public class BankAbstract {
    public static void main(String[] args) {
        String accountId = "ACC99812";
        double balance = 1250.75;
        System.out.println("Account: " + accountId);
        System.out.println("Balance: \$" + balance);
    }
}`,
            solOut: `Account: ACC99812
Balance: \$1250.75`,
            solExp: "By showing only Account ID and Balance, we abstract away irrelevant customer profile details."
          },
          {
            q: "Simulate Decomposition for splitting bill.",
            desc: "Decompose a restaurant bill split: print Subtotal ($90.00), Tax ($10.00), Total ($100.00), and Share per Person (4 people).",
            solCode: `public class BillSplit {
    public static void main(String[] args) {
        double subtotal = 90.00;
        double tax = 10.00;
        double total = subtotal + tax;
        int people = 4;
        double share = total / people;
        System.out.println("Total Bill: \$" + total);
        System.out.println("Each Pays: \$" + share);
    }
}`,
            solOut: `Total Bill: \$100.0
Each Pays: \$25.0`,
            solExp: "First calculate total bill (subtotal + tax), then divide by people count. Step-by-step logic."
          },
          {
            q: "Calculate compound pattern.",
            desc: "Print the square of 4, 5, and 6 on separate lines using a recognized mathematical pattern (number * number).",
            solCode: `public class PatternSquare {
    public static void main(String[] args) {
        System.out.println("Square of 4: " + (4 * 4));
        System.out.println("Square of 5: " + (5 * 5));
        System.out.println("Square of 6: " + (6 * 6));
    }
}`,
            solOut: `Square of 4: 16
Square of 5: 25
Square of 6: 36`,
            solExp: "Applies the mathematical pattern \"square = x * x\" repeatedly for different input cases."
          }
        ],
        predict: [
          {
            code: `public class DecompositionTest {
    public static void main(String[] args) {
        int totalSeconds = 125;
        int minutes = totalSeconds / 60;
        int seconds = totalSeconds % 60;
        System.out.println(minutes + "m " + seconds + "s");
    }
}`,
            a: "2m 5s",
            explain: "The code decomposes 125 seconds. Integer division (125 / 60) gives 2 minutes, and modulo (125 % 60) gives the remainder of 5 seconds."
          },
          {
            code: `public class AbstractionTest {
    public static void main(String[] args) {
        String vehicle = "Sedan Car";
        int wheels = 4;
        System.out.println(vehicle + " has " + wheels + " wheels.");
    }
}`,
            a: "Sedan Car has 4 wheels.",
            explain: "Focuses entirely on standard output variables ignoring color or engine details."
          }
        ],
        debug: [
          {
            q: "Find the logical bug in this code designed to find the average of two test scores.",
            code: `public class ScoreAverage {
    public static void main(String[] args) {
        int math = 80;
        int science = 90;
        // The goal is to print the average: (80 + 90) / 2 = 85
        System.out.println("Average: " + math + science / 2);
    }
}`,
            bug: "Operator precedence bug. Due to the lack of parentheses, division happens first (science / 2 = 45), then Java glues \"80\" and \"45\" together as text because of string concatenation. We need parentheses around the addition.",
            solCode: `public class ScoreAverage {
    public static void main(String[] args) {
        int math = 80;
        int science = 90;
        int average = (math + science) / 2;
        System.out.println("Average: " + average);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 1,
    topic: "Algorithms & Pseudocode",
    body: [
      {
        k: "intro",
        p: "An **Algorithm** is a recipe. It is a set of precise, ordered steps to solve a problem. **Pseudocode** is a way of writing down this recipe using plain English words laid out like code. It has no strict syntax rules, so anyone can read it."
      },
      {
        k: "why",
        p: "Computers cannot figure out how to do things on their own. If you don't write out the step-by-step logic first, you will get stuck when translating it to complex Java syntax. Writing pseudocode lets you focus on logical correctness before syntax correctness."
      },
      {
        k: "def",
        p: "An **Algorithm** is a finite sequence of unambiguous, executable instructions to solve a specific problem. **Pseudocode** is a high-level representation of an algorithm that mimics programming language structure but uses natural language."
      },
      {
        k: "heading",
        text: "Pseudocode vs Java Code"
      },
      {
        k: "compare",
        a: {
          title: "Pseudocode (Natural Logic)",
          items: [
            "START",
            "GET temperature",
            "IF temperature > 30 THEN",
            "  PRINT \"It is hot!\"",
            "ELSE",
            "  PRINT \"It is cool!\"",
            "ENDIF",
            "END"
          ]
        },
        b: {
          title: "Java Code (Strict Syntax)",
          items: [
            `public class TempCheck {`,
            `  public static void main(String[] args) {`,
            "    int temperature = 32;",
            "    if (temperature > 30) {",
            `      System.out.println("It is hot!");`,
            `    } else {`,
            `      System.out.println("It is cool!");`,
            "    }",
            "  }",
            "}"
          ]
        }
      },
      {
        k: "code",
        file: "AlgorithmCheck.java",
        code: `public class AlgorithmCheck {
    public static void main(String[] args) {
        int temperature = 32; // In real life, this would come from a sensor
        
        if (temperature > 30) {
            System.out.println("It is hot!");
        } else {
            System.out.println("It is cool!");
        }
    }
}`,
        output: "It is hot!",
        lines: [
          {
            n: 3,
            code: "int temperature = 32;",
            explain: "Equivalent to GET temperature in pseudocode."
          },
          {
            n: 5,
            code: "if (temperature > 30) {",
            explain: "Equivalent to IF temperature > 30 THEN. It evaluates true."
          },
          {
            n: 6,
            code: `System.out.println("It is hot!");`,
            explain: "Executes because the condition was true."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Writing steps that are vague or open to interpretation. Computers need exact details.",
          "Missing base cases (e.g. creating steps that repeat forever)."
        ]
      },
      {
        k: "best",
        items: [
          `Keep pseudocode independent of any programming language. Do not use Java braces \`{}\` or semicolons \`;\` in pseudocode.`,
          "Indent nested logic (like inside an IF statement) for readability."
        ]
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is the main difference between an algorithm and pseudocode?",
            a: "An algorithm is the abstract step-by-step logic to solve a problem. Pseudocode is a text-based representation of that algorithm using plain, code-structured English."
          },
          {
            q: "What does \"unambiguous\" mean in an algorithm?",
            a: "It means each step must have only one clear interpretation. There is no room for guessing."
          },
          {
            q: "Why is pseudocode useful for non-programmers?",
            a: "It allows business partners, project managers, or clients to read and verify the program logic without needing to understand code syntax."
          },
          {
            q: "What is a conditional step in an algorithm?",
            a: "A step that only runs if a certain condition is met (e.g., \"IF balance is less than zero, charge penalty\")."
          },
          {
            q: "What is a loop or iteration in an algorithm?",
            a: "A instruction to repeat a set of steps until a condition changes (e.g., \"Repeat until basket is full\")."
          }
        ],
        coding: [
          {
            q: "Implement a Pseudocode Algorithm in Java.",
            desc: "Pseudocode: START -> GET age = 20 -> IF age >= 18 PRINT \"Can Vote\" ELSE PRINT \"Cannot Vote\" -> END.",
            solCode: `public class VotingCheck {
    public static void main(String[] args) {
        int age = 20;
        if (age >= 18) {
            System.out.println("Can Vote");
        } else {
            System.out.println("Cannot Vote");
        }
    }
}`,
            solOut: "Can Vote",
            solExp: "Translate variables and conditions into Java syntax using variables and if-else structures."
          },
          {
            q: "Write a program for finding the larger of two values.",
            desc: "Given scoreA = 85 and scoreB = 92, print the highest score.",
            solCode: `public class FindHighest {
    public static void main(String[] args) {
        int scoreA = 85;
        int scoreB = 92;
        if (scoreA > scoreB) {
            System.out.println("Highest score: " + scoreA);
        } else {
            System.out.println("Highest score: " + scoreB);
        }
    }
}`,
            solOut: "Highest score: 92",
            solExp: "Compares the values and prints whichever is larger."
          },
          {
            q: "Model an ATM withdrawal limit algorithm.",
            desc: "Withdrawal amount = 500, Daily limit = 400. If amount > limit, print \"Limit Exceeded\", else print \"Dispensing Cash\".",
            solCode: `public class AtmWithdrawal {
    public static void main(String[] args) {
        int amount = 500;
        int dailyLimit = 400;
        if (amount > dailyLimit) {
            System.out.println("Limit Exceeded");
        } else {
            System.out.println("Dispensing Cash");
        }
    }
}`,
            solOut: "Limit Exceeded",
            solExp: "Validates input against predefined constraints and branches execution."
          }
        ],
        predict: [
          {
            code: `public class CountDown {
    public static void main(String[] args) {
        int count = 3;
        System.out.print(count + " ");
        count = count - 1;
        System.out.print(count + " ");
        count = count - 1;
        System.out.print(count);
    }
}`,
            a: "3 2 1",
            explain: "The program prints the value of count, decrements it by 1, and prints again, executing a manual step-by-step loop decrement."
          },
          {
            code: `public class LogicSwap {
    public static void main(String[] args) {
        int x = 5;
        int y = 10;
        x = y;
        System.out.println("x=" + x + " y=" + y);
    }
}`,
            a: "x=10 y=10",
            explain: "Assigning x = y copies the value of y (10) into x. The original value of x (5) is overwritten and lost."
          }
        ],
        debug: [
          {
            q: "Explain the error in this algorithm logic designed to check if a number is negative.",
            code: `public class NegCheck {
    public static void main(String[] args) {
        int num = 0;
        if (num < 0) {
            System.out.println("Negative");
        } else {
            System.out.println("Positive");
        }
    }
}`,
            bug: "Logical error. The number 0 is neither positive nor negative. The code prints \"Positive\" for 0, which is mathematically incorrect.",
            solCode: `public class NegCheck {
    public static void main(String[] args) {
        int num = 0;
        if (num < 0) {
            System.out.println("Negative");
        } else if (num > 0) {
            System.out.println("Positive");
        } else {
            System.out.println("Zero");
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 1,
    topic: "Flowcharts",
    body: [
      {
        k: "intro",
        p: "A **Flowchart** is a visual map of an algorithm. It uses standard shapes connected by arrows to show the flow of control. Flowcharts make it easy to spot logic loops, missing branches, or dead-ends before writing code."
      },
      {
        k: "why",
        p: "Humans are visual creatures. It is much easier to look at a flowchart and understand a complex business process than to read 50 lines of text. Flowcharts help programmers align with business analysts on how a system should work."
      },
      {
        k: "def",
        p: "A Flowchart is a standardized graphical representation of an algorithm or process, using geometric shapes (Ovals for terminals, Rectangles for processes, Parallelograms for inputs/outputs, and Diamonds for decisions) to represent operational steps."
      },
      {
        k: "heading",
        text: "Standard Flowchart Symbols"
      },
      {
        k: "table",
        head: ["Shape", "Name", "Represents", "Example"],
        rows: [
          ["Oval", "Terminal", "Start or End of the program.", "Start / Stop"],
          ["Parallelogram", "Input / Output", "Reading user data or printing results.", "Read temperature / Print output"],
          ["Rectangle", "Process", "Calculations, math, or actions.", "Sum = A + B"],
          ["Diamond", "Decision", "A question branch (Yes / No).", "Is Balance > 100?"]
        ]
      },
      {
        k: "heading",
        text: "Visual Flowchart Example: Even or Odd Number Check"
      },
      {
        k: "flow",
        steps: [
          {
            label: "START (Terminal)",
            type: "start"
          },
          {
            label: "Input: Number (I/O)",
            type: "io"
          },
          {
            label: "Remainder = Number % 2 (Process)",
            type: "process"
          },
          {
            label: "Is Remainder == 0? (Decision)",
            type: "decision"
          },
          {
            label: "True: Print \"Even\" / False: Print \"Odd\" (I/O)",
            type: "io"
          },
          {
            label: "END (Terminal)",
            type: "end"
          }
        ]
      },
      {
        k: "heading",
        text: "Java Implementation of Even/Odd Flow"
      },
      {
        k: "code",
        file: "EvenOdd.java",
        code: `public class EvenOdd {
    public static void main(String[] args) {
        int number = 17; // Input
        int remainder = number % 2; // Process
        
        if (remainder == 0) { // Decision
            System.out.println("Even"); // Output Branch True
        } else {
            System.out.println("Odd"); // Output Branch False
        }
    }
}`,
        output: "Odd",
        lines: [
          {
            n: 3,
            code: "int number = 17;",
            explain: "Input step: sets the number to evaluate."
          },
          {
            n: 4,
            code: "int remainder = number % 2;",
            explain: "Process step: calculates remainder using modulo operator (%)."
          },
          {
            n: 6,
            code: "if (remainder == 0) {",
            explain: "Decision step: tests if remainder equals zero."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Having floating steps that do not connect to anything. Every step must have a path.",
          "Forgetting that decision diamonds must have exactly two outgoing paths (usually Yes/No or True/False)."
        ]
      },
      {
        k: "best",
        items: ["Always construct your flowcharts to read from top to bottom or left to right.", "Ensure the flowchart always terminates at a designated END node."]
      },
      {
        k: "compare",
        title: "Flowcharts vs Pseudocode",
        a: {
          head: "Flowcharts (Visual)",
          rows: ["Graphical representation using standard shape symbols.", "Excellent for showing branch decisions and visual flow paths.", "Easier for non-programmers to follow design visually.", "Uses arrows to indicate flow directions."]
        },
        b: {
          head: "Pseudocode (Textual)",
          rows: ["Informal text-based description of algorithm steps.", "Closer to actual programming syntax structures.", "Highly concise and easily convertible to Java code.", "Uses indentation to show logic levels."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What does a parallelogram represent in a flowchart?",
            a: "It represents an Input or Output operation, such as reading data or printing a screen message."
          },
          {
            q: "What shape is used for decisions?",
            a: "A diamond shape is used to represent decision points containing questions."
          },
          {
            q: "How many start symbols can a flowchart have?",
            a: "A flowchart should have exactly one Start symbol to define a clear entry point."
          },
          {
            q: "Can a flowchart have multiple End symbols?",
            a: "Yes. Multiple branches can lead to their own terminal End points, though it is often cleaner to merge them."
          },
          {
            q: "What is the purpose of flow lines (arrows)?",
            a: "They connect shapes to indicate the exact sequence in which steps are executed."
          }
        ],
        coding: [
          {
            q: "Write code matching a three-step sequential flowchart.",
            desc: "Start -> Set price = 100 -> Apply 10% discount -> Print final price -> End.",
            solCode: `public class DiscountFlow {
    public static void main(String[] args) {
        double price = 100.0;
        double discount = price * 0.10;
        double finalPrice = price - discount;
        System.out.println("Final Price: \$" + finalPrice);
    }
}`,
            solOut: "Final Price: $90.0",
            solExp: "Translates the straight-line process steps sequentially into math calculations and printed output."
          },
          {
            q: "Code a flowchart containing a Decision branch.",
            desc: "Decide if a student passed. Passing score is 50. Student score is 74. Print \"Passed\" or \"Failed\".",
            solCode: `public class GradePass {
    public static void main(String[] args) {
        int score = 74;
        if (score >= 50) {
            System.out.println("Passed");
        } else {
            System.out.println("Failed");
        }
    }
}`,
            solOut: "Passed",
            solExp: "Constructs an if-else decision check mapping the grading flowchart logic."
          },
          {
            q: "Calculate temperature freezing state.",
            desc: "Input temp = 15. If temp <= 32 (Fahrenheit), print \"Freezing!\", else print \"Liquid\".",
            solCode: `public class IceCheck {
    public static void main(String[] args) {
        int temp = 15;
        if (temp <= 32) {
            System.out.println("Freezing!");
        } else {
            System.out.println("Liquid");
        }
    }
}`,
            solOut: "Freezing!",
            solExp: "Evaluates the threshold condition to print ice state."
          }
        ],
        predict: [
          {
            code: `public class ScoreCheck {
    public static void main(String[] args) {
        int score = 45;
        if (score >= 90) {
            System.out.println("A");
        } else if (score >= 50) {
            System.out.println("B");
        } else {
            System.out.println("F");
        }
    }
}`,
            a: "F",
            explain: "The input score is 45. The program checks the first condition (45 >= 90) which is false, moves to the second (45 >= 50) which is false, and executes the default else block, printing \"F\"."
          },
          {
            code: `public class SkipPrint {
    public static void main(String[] args) {
        boolean skip = true;
        if (!skip) {
            System.out.println("Run Step");
        }
        System.out.println("End Flow");
    }
}`,
            a: "End Flow",
            explain: "The variable skip is true. The condition is !skip (not true, which is false). The \"Run Step\" print is skipped, and only \"End Flow\" prints."
          }
        ],
        debug: [
          {
            q: "This program was meant to only print \"Warning!\" if the speed is over 80, but it prints Warning every time. Find the bug.",
            code: `public class SpeedWarning {
    public static void main(String[] args) {
        int speed = 65;
        if (speed > 80); {
            System.out.println("Warning!");
        }
    }
}`,
            bug: `The bug is the trailing semicolon (;) immediately after the if condition: if (speed > 80);. This acts as an empty statement, ending the if block. The code inside curly braces {} then executes independently, printing Warning! regardless of speed.`,
            solCode: `public class SpeedWarning {
    public static void main(String[] args) {
        int speed = 65;
        if (speed > 80) { // Semicolon removed
            System.out.println("Warning!");
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 1,
    topic: "Programming Languages & Why Java?",
    body: [
      {
        k: "intro",
        p: "A **Programming Language** is the vocabulary and set of grammar rules we use to command a computer. There are thousands of languages, but **Java** is one of the most popular, stable, and widely used languages in the history of software engineering."
      },
      {
        k: "why",
        p: "Different languages solve different problems. JavaScript runs web pages, Python excels in data science, and C++ builds high-speed game engines. Java was built to solve a major problem: **portability**. Before Java, you had to write different versions of a program for Windows, Mac, and Linux. Java let you write code once and run it anywhere."
      },
      {
        k: "def",
        p: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible, achieving portability via the JVM (Write Once, Run Anywhere - WORA)."
      },
      {
        k: "heading",
        text: "Where is Java Used?"
      },
      {
        k: "bul",
        items: [
          "**Enterprise Applications**: Large corporate back-ends, retail portals, and banking transaction hubs.",
          "**Android Apps**: The native development framework for Google's Android mobile operating system.",
          "**Smart Devices**: Embedded chips, home appliances, and smart cards.",
          "**Cloud Systems**: Microservices and distributed cloud infrastructure."
        ]
      },
      {
        k: "code",
        file: "WhyJava.java",
        code: `public class WhyJava {
    public static void main(String[] args) {
        // Java handles multi-threading and security frameworks natively
        System.out.println("Java is Platform Independent!");
        System.out.println("Running on: " + System.getProperty("os.name"));
    }
}`,
        output: `Java is Platform Independent!
Running on: Windows 11`,
        lines: [
          {
            n: 5,
            code: "System.getProperty(\"os.name\")",
            explain: "A system method showing Java checking the host operating system dynamically without failing."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Confusing Java with JavaScript. They are completely different languages with different purposes, like Car and Carpet.",
          "Assuming Java is slow. Modern Java is compiled and heavily optimized, making it extremely fast for enterprise engines."
        ]
      },
      {
        k: "best",
        items: [
          "Understand that Java is strict. Use its strict typing and compilation checks to catch bugs early in development.",
          "Learn the basic principles of Object-Oriented Programming (OOP), as Java enforces classes for everything."
        ]
      },
      {
        k: "compare",
        title: "Compiled vs Interpreted Languages",
        a: {
          head: "Compiled Languages",
          rows: ["Translates entire code to machine logic before execution.", "Faster runtime execution speed.", "Build errors caught upfront.", "Example: C / C++"]
        },
        b: {
          head: "Interpreted Languages",
          rows: ["Translates and runs code line-by-line during runtime.", "More flexible debugging and dynamic types.", "Slower execution since translation happens on the fly.", "Example: Python / JavaScript"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What does \"WORA\" stand for?",
            a: "\"Write Once, Run Anywhere\" — the design philosophy that Java code can run on any device with a compatible JVM."
          },
          {
            q: "Are Java and JavaScript related?",
            a: "No. They are completely separate languages with distinct designs and runtimes. JavaScript is a scripting language; Java is a compiled object-oriented language."
          },
          {
            q: "What is the role of the Java Virtual Machine (JVM)?",
            a: "The JVM executes the compiled Java bytecode on the host operating system, serving as the platform-translating engine."
          },
          {
            q: "Why is Java favored by large banks?",
            a: "Java is highly secure, supports massive database connections, runs on enterprise servers, and has excellent memory management."
          },
          {
            q: "What does \"Strictly Typed\" mean?",
            a: "It means every variable must be declared with a specific data type (like integer or text) before it can be used, reducing logical bugs."
          }
        ],
        coding: [
          {
            q: "Write a program to display Java system information.",
            desc: "Print \"Java Version: [system version]\" and \"Vendor: Oracle\" to console.",
            solCode: `public class JavaInfo {
    public static void main(String[] args) {
        System.out.println("Java Version: " + System.getProperty("java.version"));
        System.out.println("Vendor: Oracle");
    }
}`,
            solOut: `Java Version: 17.0.1
Vendor: Oracle`,
            solExp: "Accesses standard Java properties to display dynamic version configurations."
          },
          {
            q: "Write a program to check platform details.",
            desc: "Output \"Check: Operating System\" followed by printing the OS architecture using System.getProperty(\"os.arch\").",
            solCode: `public class OsArchCheck {
    public static void main(String[] args) {
        System.out.println("Check: Operating System");
        System.out.println("OS Architecture: " + System.getProperty("os.arch"));
    }
}`,
            solOut: `Check: Operating System
OS Architecture: amd64`,
            solExp: "Prints system architecture information showing Java's environment access."
          },
          {
            q: "Create a simple console frame banner.",
            desc: "Print a banner made of asterisks containing \"Java Workshop\".",
            solCode: `public class WelcomeBanner {
    public static void main(String[] args) {
        System.out.println("******************");
        System.out.println("*  Java Workshop *");
        System.out.println("******************");
    }
}`,
            solOut: `******************
*  Java Workshop *
******************`,
            solExp: "Prints three lines of strings to format a text-based border banner."
          }
        ],
        predict: [
          {
            code: `public class VersionPrint {
    public static void main(String[] args) {
        System.out.print("Java ");
        System.out.println("1" + "7");
    }
}`,
            a: "Java 17",
            explain: "The print statement outputs \"Java \" on the same line, followed by the concatenated string \"17\"."
          },
          {
            code: `public class SpacePrint {
    public static void main(String[] args) {
        System.out.println("Java" + " " + "Engine");
    }
}`,
            a: "Java Engine",
            explain: "Concatenates \"Java\", a single space character, and \"Engine\" into one printed string."
          }
        ],
        debug: [
          {
            q: "Explain why this Java program fails to run.",
            code: `class IncorrectMain {
    public void main(String[] args) {
        System.out.println("Run me!");
    }
}`,
            bug: "The main method is missing the \"static\" keyword. Java requires static for the entry main method so the JVM can execute it without creating an instance of the class.",
            solCode: `class IncorrectMain {
    public static void main(String[] args) { // Static added
        System.out.println("Run me!");
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "module",
    num: 2,
    title: "Getting Started with Java",
    desc: "Take your first step into writing real Java applications. Learn about Java's history, components (JDK, JRE, JVM), environment setup, file execution, and compilation workflows.",
    topics: [
      "Introduction & History of Java",
      "Features of Java",
      "JDK, JRE, and JVM",
      "Installing Java & Editors",
      "Java Program Structure & First Program",
      "Compilation & Execution Process",
      "Java Comments"
    ]
  },
  {
    type: "slide",
    module: 2,
    topic: "Introduction & History of Java",
    body: [
      {
        k: "intro",
        p: "Java was created in 1991 by **James Gosling** and his team at **Sun Microsystems** (later acquired by Oracle). Originally designed for consumer electronics like television set-top boxes, it evolved into a powerful language for internet and desktop software."
      },
      {
        k: "why",
        p: "Before Java, programs were tied to specific computers. If you wrote a program for Windows, you had to completely rewrite it to run on a Unix machine. Java's creators wanted a language that was simple, secure, and could run on any hardware without modifications."
      },
      {
        k: "def",
        p: "Java is a class-based, object-oriented, general-purpose programming language developed by James Gosling under the \"Green Project\" in 1991, released as Java 1.0 in 1996 with a core promise: Write Once, Run Anywhere (WORA)."
      },
      {
        k: "heading",
        text: "Milestones in Java History"
      },
      {
        k: "bul",
        items: [
          "**Oak**: Original name of the language, named after an oak tree outside Gosling's window. It was renamed \"Java\" after Java coffee.",
          "**Java 1.0 (1996)**: First public release, introducing core portable web applets.",
          "**Java 5 (2004)**: Added huge language upgrades like Generics, Enums, and Autoboxing.",
          "**Java 8 (2014)**: Added Lambdas and Streams, modernizing data processing in Java."
        ]
      },
      {
        k: "code",
        file: "HistoryDemo.java",
        code: `public class HistoryDemo {
    public static void main(String[] args) {
        // Outputting historical milestones
        System.out.println("Java Creator: James Gosling");
        System.out.println("Original Name: Oak");
        System.out.println("Java Release: 1996");
    }
}`,
        output: `Java Creator: James Gosling
Original Name: Oak
Java Release: 1996`,
        lines: [
          {
            n: 1,
            code: `public class HistoryDemo {`,
            explain: "Class boundary matches the file name HistoryDemo.java."
          },
          {
            n: 4,
            code: `System.out.println("Java Creator...");`,
            explain: "Prints a text string details to standard system output."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Confusing Java's release date (1996) with its start date (1991).",
          "Believing that Oracle always owned Java. Oracle bought Sun Microsystems in 2010."
        ]
      },
      {
        k: "best",
        items: [
          "Learn the history to understand why Java behaves in a backwards-compatible manner.",
          "Use modern Long-Term Support (LTS) versions of Java (like Java 17 or 21) for study and projects."
        ]
      },
      {
        k: "summary",
        items: ["Java was released in 1996 by James Gosling.", "It was renamed from Oak to Java.", "Developed with the WORA philosophy."]
      },
      {
        k: "compare",
        title: "Java vs C++ (Origins & Focus)",
        a: {
          head: "Java (Oak Project)",
          rows: ["Designed for platform independence (Write Once, Run Anywhere).", "Includes automatic memory management (Garbage Collection).", "Removes unsafe features like direct pointer arithmetic.", "Strictly object-oriented execution model."]
        },
        b: {
          head: "C++ (Predecessor)",
          rows: ["Designed as an extension of C with classes.", "Platform dependent—compiles to local OS binary.", "Manual memory management (new/delete).", "Supports direct pointer access and multiple inheritance."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "Who is considered the father of Java?",
            a: "James Gosling."
          },
          {
            q: "What was the original name of Java?",
            a: "Oak."
          },
          {
            q: "What company first developed Java?",
            a: "Sun Microsystems."
          },
          {
            q: "In what year was Java 1.0 publicly released?",
            a: "1996."
          },
          {
            q: "Why did the team rename the language from Oak to Java?",
            a: "Oak was already trademarked by another technologies company, so they chose Java, inspired by Java coffee."
          }
        ],
        coding: [
          {
            q: "Write a program to display Java's original project team.",
            desc: "Print \"Project: Green Project\" and \"Lead: James Gosling\" on separate lines.",
            solCode: `public class GreenProject {
    public static void main(String[] args) {
        System.out.println("Project: Green Project");
        System.out.println("Lead: James Gosling");
    }
}`,
            solOut: `Project: Green Project
Lead: James Gosling`,
            solExp: "Prints the project team name and leader details using two println statements."
          },
          {
            q: "Create a historical version log printer.",
            desc: "Print \"LTS Versions: 8, 11, 17, 21\" using a variable string.",
            solCode: `public class VersionLog {
    public static void main(String[] args) {
        String lts = "8, 11, 17, 21";
        System.out.println("LTS Versions: " + lts);
    }
}`,
            solOut: "LTS Versions: 8, 11, 17, 21",
            solExp: "Stores version list in a string variable and outputs with a label."
          },
          {
            q: "Print Oracle acquisition details.",
            desc: "Display \"Sun Microsystems acquired by Oracle in 2010\".",
            solCode: `public class Acquisition {
    public static void main(String[] args) {
        System.out.println("Sun Microsystems acquired by Oracle in 2010");
    }
}`,
            solOut: "Sun Microsystems acquired by Oracle in 2010",
            solExp: "Outputs the simple historical text to console."
          }
        ],
        predict: [
          {
            code: `public class HistoryPredict {
    public static void main(String[] args) {
        System.out.println("Java version " + (10 + 7));
    }
}`,
            a: "Java version 17",
            explain: "The expression in parentheses (10 + 7) is evaluated first as arithmetic to give 17, which is then concatenated with \"Java version \"."
          },
          {
            code: `public class DatePredict {
    public static void main(String[] args) {
        System.out.println("Java release: " + 1 + 9 + 9 + 6);
    }
}`,
            a: "Java release: 1996",
            explain: "Because execution goes left-to-right and starts with a string, each addition is treated as string concatenation, pasting 1, 9, 9, 6 together instead of adding them."
          }
        ],
        debug: [
          {
            q: "Correct this class definition that does not match its filename History.java.",
            code: `public class JavaHistoryClass {
    public static void main(String[] args) {
        System.out.println("History");
    }
}`,
            bug: `In Java, the public class name must exactly match the filename (without extension). Since the file is History.java, the class name must be History, not JavaHistoryClass.`,
            solCode: `public class History {
    public static void main(String[] args) {
        System.out.println("History");
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 2,
    topic: "Features of Java",
    body: [
      {
        k: "intro",
        p: "Java has several core features that made it a dominant force in the software industry. The creators encapsulated these design goals in the \"Java Buzzwords\"."
      },
      {
        k: "why",
        p: "Older languages like C and C++ gave developers power but required them to manage computer memory manually. If they made a mistake, it could crash the operating system or leave security loopholes. Java was built to block these common developer mistakes."
      },
      {
        k: "def",
        p: "The features of Java include **Platform Independence** (WORA), **Object-Oriented** structure, **Robustness** (strong memory management & exception handling), **Security** (no explicit pointers), and **Multi-threading** (concurrent execution)."
      },
      {
        k: "heading",
        text: "The Java Buzzwords Explained"
      },
      {
        k: "table",
        head: ["Feature", "Description", "How Java achieves it"],
        rows: [
          ["Platform Independent", "Write once, run on any hardware.", "Compiling code to bytecode (.class) executed by JVM."],
          ["Simple", "Easy to learn and clean to write.", "Removing complex features like explicit pointers and operator overloading."],
          ["Robust", "Resistant to runtime crashes.", "Automatic memory management (Garbage Collection) and strict exception checks."],
          ["Secure", "Safe from malware and memory corruption.", "Running code inside a JVM sandbox; no raw memory address pointing."],
          ["Multi-threaded", "Run multiple tasks at the same time.", "Built-in support for Thread classes and synchronization."]
        ]
      },
      {
        k: "code",
        file: "FeaturesDemo.java",
        code: `public class FeaturesDemo {
    public static void main(String[] args) {
        // Java eliminates pointers. We reference objects safely.
        String message = "Robust & Secure";
        
        System.out.println("Features check: " + message);
        System.out.println("Length: " + message.length());
    }
}`,
        output: `Features check: Robust & Secure
Length: 15`,
        lines: [
          {
            n: 4,
            code: "String message = \"Robust & Secure\";",
            explain: "Declares an object reference safely without managing hardware memory addresses."
          },
          {
            n: 7,
            code: "message.length()",
            explain: "Invokes object method safely. If message was null, Java throws a controlled exception instead of crashing the system."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Thinking that \"Platform Independent\" means Java programs do not need any platform-specific tools. The JRE/JVM itself IS platform-specific; it is the compiled bytecode that is portable.",
          "Assuming \"Automatic Garbage Collection\" means you never have to worry about memory leaks."
        ]
      },
      {
        k: "best",
        items: [
          "Embrace Java's type safety. Do not attempt to bypass type checks.",
          "Utilize multi-threading libraries instead of writing complex raw thread systems from scratch."
        ]
      },
      {
        k: "summary",
        items: ["Java is platform-independent via bytecode compilation.", "It is secure because it has no raw pointers.", "Robustness is achieved by JRE memory diagnostics."]
      },
      {
        k: "compare",
        title: "Platform Independence vs Dependence",
        a: {
          head: "Platform Independent",
          rows: ["Compiles source code to universal Bytecode (.class files).", "Runs on any operating system carrying a compatible JVM.", "Standardizes data type sizes across all machines.", "Ensures global software portability."]
        },
        b: {
          head: "Platform Dependent",
          rows: ["Compiles source code directly to native OS machine code.", "Must be re-compiled separately for Windows, Mac, or Linux.", "Type sizes can vary depending on CPU register widths.", "Requires platform-specific adjustments."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What makes Java platform independent?",
            a: "Java compiles code to bytecode (.class files) rather than native machine code. The bytecode is read and executed by the JVM, which is tailored to each operating system."
          },
          {
            q: "What is Garbage Collection?",
            a: "An automatic memory management process in Java that tracks active objects and deletes unreferenced objects to free up heap memory."
          },
          {
            q: "Why is Java secure against raw memory attacks?",
            a: "Java does not allow programmers to use pointers (raw memory addresses), preventing unauthorized access to other system memory partitions."
          },
          {
            q: "What does \"Robust\" mean in Java context?",
            a: "It means the language is designed to handle errors gracefully through strict compile-time checks, garbage collection, and exception handling."
          },
          {
            q: "What is Multi-threading?",
            a: "The ability of a CPU to execute multiple sub-tasks (threads) concurrently within a single program."
          }
        ],
        coding: [
          {
            q: "Write a program to demonstrate safety checks.",
            desc: "Print \"Safe Execution: Active\" and check the system time using System.currentTimeMillis().",
            solCode: `public class SafeCheck {
    public static void main(String[] args) {
        System.out.println("Safe Execution: Active");
        System.out.println("Timestamp: " + System.currentTimeMillis());
    }
}`,
            solOut: `Safe Execution: Active
Timestamp: 178236172635`,
            solExp: "Displays a status line and outputs the current system time in milliseconds without raw pointer interfaces."
          },
          {
            q: "Simulate memory footprint status.",
            desc: "Print runtime free memory details using Runtime.getRuntime().freeMemory().",
            solCode: `public class MemoryStatus {
    public static void main(String[] args) {
        long freeMem = Runtime.getRuntime().freeMemory();
        System.out.println("JVM Free Memory: " + freeMem + " bytes");
    }
}`,
            solOut: "JVM Free Memory: 25612840 bytes",
            solExp: "Accesses the JVM runtime environment to retrieve resource information dynamically."
          },
          {
            q: "Output Java architecture buzzwords.",
            desc: "Print \"Portable\", \"Robust\", \"Secure\" on separate lines.",
            solCode: `public class Buzzwords {
    public static void main(String[] args) {
        System.out.println("Portable");
        System.out.println("Robust");
        System.out.println("Secure");
    }
}`,
            solOut: `Portable
Robust
Secure`,
            solExp: "Outputs Java features list to the console terminal."
          }
        ],
        predict: [
          {
            code: `public class MultiPredict {
    public static void main(String[] args) {
        System.out.println("Secure" + 5 * 2);
    }
}`,
            a: "Secure10",
            explain: "Arithmetic multiplication (5 * 2 = 10) takes precedence over string concatenation, so 10 is computed first, then stuck to the text \"Secure\"."
          },
          {
            code: `public class NullCheck {
    public static void main(String[] args) {
        String data = null;
        System.out.println("Data: " + data);
    }
}`,
            a: "Data: null",
            explain: "Concatenating a null object to a String results in the literal text \"null\" being printed without causing a crash."
          }
        ],
        debug: [
          {
            q: "This code tries to print the length of a null string, which causes a crash. Fix it to check for null first.",
            code: `public class NullLength {
    public static void main(String[] args) {
        String word = null;
        System.out.println(word.length());
    }
}`,
            bug: "Calling .length() on a null reference causes a NullPointerException.",
            solCode: `public class NullLength {
    public static void main(String[] args) {
        String word = null;
        if (word != null) {
            System.out.println(word.length());
        } else {
            System.out.println("Length is 0 (String is null)");
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 2,
    topic: "JDK, JRE, and JVM",
    body: [
      {
        k: "intro",
        p: "To build and run Java applications, we need three core components: the **JVM**, the **JRE**, and the **JDK**. They nest inside each other like Russian dolls, each adding tools for different stages of development."
      },
      {
        k: "why",
        p: "Developers write code, compile code, and run code. End-users only run code. Knowing the difference between these components ensures you do not waste hard drive space installing developer packages on client machines, and helps you configure build pipelines correctly."
      },
      {
        k: "def",
        p: `The Java execution ecosystem consists of: 
- **JVM**: Engine that executes bytecode.
- **JRE**: Contains JVM + Core Libraries to run compiled Java applications.
- **JDK**: JRE + Development Tools (compiler \`javac\`, debugger, packager) used to write and compile Java.`
      },
      {
        k: "heading",
        text: "The Nesting Relationship"
      },
      {
        k: "raw",
        html: `
          <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--border-light); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; gap: 12px; max-width: 500px; margin: 10px auto;">
            <div style="border: 2px solid var(--error); border-radius: 6px; padding: 12px; background: rgba(239, 83, 80, 0.05);">
              <strong style="color: var(--error);">JDK (Java Development Kit)</strong> - For Developers
              <div style="border: 2px solid var(--warning); border-radius: 6px; padding: 12px; margin-top: 10px; background: rgba(255, 167, 38, 0.05);">
                <strong style="color: var(--warning);">JRE (Java Runtime Environment)</strong> - For Users
                <div style="border: 2px solid var(--accent); border-radius: 6px; padding: 12px; margin-top: 10px; background: rgba(79, 142, 247, 0.05); text-align: center;">
                  <strong style="color: var(--accent);">JVM (Java Virtual Machine)</strong><br>Executes Bytecode
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        k: "heading",
        text: "Accessing JVM Properties"
      },
      {
        k: "code",
        file: "JvmCheck.java",
        code: `public class JvmCheck {
    public static void main(String[] args) {
        // Output standard JVM information
        System.out.println("JVM Name: " + System.getProperty("java.vm.name"));
        System.out.println("JVM Version: " + System.getProperty("java.vm.version"));
    }
}`,
        output: `JVM Name: OpenJDK 64-Bit Server VM
JVM Version: 17.0.1+12`,
        lines: [
          {
            n: 4,
            code: "System.getProperty(\"java.vm.name\")",
            explain: "Queries the Java environment properties to retrieve JVM engine brand details."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Thinking that JRE contains development tools like `javac`. If you try to run `javac` in a terminal with only JRE, it will fail.",
          "Assuming JVM is identical across all operating systems. Each OS requires its own specific JRE/JVM download."
        ]
      },
      {
        k: "best",
        items: [
          "Always install the JDK as a developer. Modern JDKs (since Java 9) package JRE elements internally, simplifying setups.",
          "Choose OpenJDK versions (like Temurin or Corretto) for free, open-source distributions."
        ]
      },
      {
        k: "summary",
        items: ["JDK is the parent pack containing JRE and compilers.", "JRE houses the runtime API and JRE execution parameters.", "JVM physically executes bytecode instructions."]
      },
      {
        k: "compare",
        title: "JDK vs JRE (Developer vs User)",
        a: {
          head: "JDK (Java Development Kit)",
          rows: ["Contains development tools like javac compiler and jar packager.", "Includes the complete JRE runtime inside it.", "Used by programmers to write, compile, and run code.", "Required for building Java applications."]
        },
        b: {
          head: "JRE (Java Runtime Environment)",
          rows: ["Only contains the library classes and the JVM.", "Does NOT contain compiler tools (no javac).", "Used by end-users to run compiled bytecodes.", "Minimal footprint for customer installations."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What does JDK stand for?",
            a: "Java Development Kit."
          },
          {
            q: "What does JRE stand for?",
            a: "Java Runtime Environment."
          },
          {
            q: "Which component translates bytecode into physical machine language?",
            a: "The JVM (Java Virtual Machine)."
          },
          {
            q: "If you only want to play a Java desktop game, do you need the JDK?",
            a: "No. You only need the JRE (Java Runtime Environment) to execute compiled files."
          },
          {
            q: "What tool inside the JDK compiles source code (.java) into bytecode (.class)?",
            a: "The `javac` compiler."
          }
        ],
        coding: [
          {
            q: "Write a program to log JVM specification.",
            desc: "Print \"JVM Spec: \" followed by System.getProperty(\"java.vm.specification.version\").",
            solCode: `public class JvmSpec {
    public static void main(String[] args) {
        System.out.println("JVM Spec: " + System.getProperty("java.vm.specification.version"));
    }
}`,
            solOut: "JVM Spec: 17",
            solExp: "Uses System properties to extract and print the virtual machine specification level."
          },
          {
            q: "Create a component diagnostic listing.",
            desc: "Print three lines listing the roles of JVM, JRE, and JDK.",
            solCode: `public class ComponentRoles {
    public static void main(String[] args) {
        System.out.println("JVM: Executes Bytecode");
        System.out.println("JRE: Runtime libraries");
        System.out.println("JDK: Compiles & Debugs");
    }
}`,
            solOut: `JVM: Executes Bytecode
JRE: Runtime libraries
JDK: Compiles & Debugs`,
            solExp: "Prints clear summaries of the roles of Java development tools."
          },
          {
            q: "Write JVM Vendor printer.",
            desc: "Display JVM vendor info using System.getProperty(\"java.vm.vendor\").",
            solCode: `public class JvmVendor {
    public static void main(String[] args) {
        System.out.println("Vendor: " + System.getProperty("java.vm.vendor"));
    }
}`,
            solOut: "Vendor: Eclipse Adoptium",
            solExp: "Retrieves JVM manufacturer details from configuration parameters."
          }
        ],
        predict: [
          {
            code: `public class VMDetails {
    public static void main(String[] args) {
        System.out.println("Path: " + System.getProperty("java.home"));
    }
}`,
            a: "Path: C:\\Program Files\\Eclipse Adoptium\\jdk-17.0.1",
            explain: "This prints the path to the JRE/JDK directory currently running the program."
          },
          {
            code: `public class NameJoin {
    public static void main(String[] args) {
        System.out.println("JDK" + "-" + "17");
    }
}`,
            a: "JDK-17",
            explain: "Combines the literal strings into a clean single string representing Java 17 package."
          }
        ],
        debug: [
          {
            q: "Why does a terminal prompt display \"javac is not recognized\" when compiling a program?",
            code: `// Terminal Command attempted:
// > javac MyClass.java
// Output: 'javac' is not recognized as an internal or external command.`,
            bug: "The compiler tool javac is part of the JDK. The system lacks JDK installed, or the JDK bin directory has not been added to the system PATH environment variables.",
            solCode: `// Solution Steps:
// 1. Download and install JDK 17 (or newer).
// 2. Locate the "bin" folder of the installed JDK (e.g. C:\Program Files\...\jdk-17\bin).
// 3. Edit system Environment Variables, append this bin path to the PATH variable.
// 4. Restart the terminal and verify using "javac -version".`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 2,
    topic: "Installing Java & Editors",
    body: [
      {
        k: "intro",
        p: "To begin programming, we need to set up our workbench. This involves installing the **JDK** and setting up a code editor or Integrated Development Environment (IDE) like **VS Code** or **IntelliJ IDEA**."
      },
      {
        k: "why",
        p: "While you can write Java in Notepad and compile it manually in a terminal, it is extremely tedious. A modern editor provides syntax highlighting, automatic error checks, code completion, and a one-click build button, saving you hours of frustration."
      },
      {
        k: "def",
        p: "An Integrated Development Environment (IDE) is a software application that provides comprehensive facilities to computer programmers for software development, typically consisting of a source code editor, build automation tools, and a debugger."
      },
      {
        k: "heading",
        text: "Step-by-Step Installation Roadmap"
      },
      {
        k: "bul",
        items: [
          "**Step 1: Install JDK**: Download OpenJDK (like Eclipse Temurin) from adoptium.net. Run the installer and check the box to \"Set JAVA_HOME variable\".",
          "**Step 2: Verify Installation**: Open terminal/command prompt and type `java -version` and `javac -version`. If it prints version numbers, the setup is successful.",
          "**Step 3: Install VS Code / IntelliJ**: Download and run installers from code.visualstudio.com or jetbrains.com.",
          "**Step 4: Install Extensions**: Inside VS Code, open Extensions tab (Ctrl+Shift+X), search for \"Extension Pack for Java\" by Microsoft, and click Install."
        ]
      },
      {
        k: "code",
        file: "SetupTest.java",
        code: `public class SetupTest {
    public static void main(String[] args) {
        System.out.println("Workbench Status: Online!");
        System.out.println("Compiler: Working");
    }
}`,
        output: `Workbench Status: Online!
Compiler: Working`,
        lines: [
          {
            n: 3,
            code: `System.out.println("Workbench Status: Online!");`,
            explain: "If this runs, your environment variables and JRE execution paths are correctly linked."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Forgetting to restart the terminal after editing environment variables. The terminal will not load the new PATH paths until restarted.",
          "Installing VS Code but forgetting to install the Extension Pack for Java. Without the extension, VS Code cannot compile or run Java."
        ]
      },
      {
        k: "best",
        items: [
          "Always use standard folder names when installing programming tools to avoid path spaces and character issues.",
          "For large applications, transition to IntelliJ IDEA Community Edition as it contains deep built-in Java analysis tools."
        ]
      },
      {
        k: "summary",
        items: ["Install JDK from adoptium.net first.", "Use modern editor IDEs (VS Code/IntelliJ) for helper aids.", "Check system configs with command-line tools."]
      },
      {
        k: "compare",
        title: "Plain Text Editors vs IDEs",
        a: {
          head: "Text Editors (Notepad / VS Code)",
          rows: ["Lightweight and fast startup times.", "Requires manual compilation commands via terminal.", "Basic syntax highlighting, few automated helps.", "Great for learning commands and structure."]
        },
        b: {
          head: "IDEs (IntelliJ / Eclipse)",
          rows: ["Feature-heavy with larger memory footprints.", "One-click build, compile, and run automation.", "Built-in code completion, refactoring, and debuggers.", "Best for large scale professional development projects."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "Where should you download OpenJDK from?",
            a: "Adoptium.net (Eclipse Temurin) is a highly recommended and verified source."
          },
          {
            q: "How do you check if the compiler is installed in a command prompt?",
            a: "Type `javac -version` into the terminal."
          },
          {
            q: "What is JAVA_HOME?",
            a: "An environment variable pointing to the root installation directory of the JDK."
          },
          {
            q: "Why does VS Code need an extension pack to run Java?",
            a: "VS Code is a lightweight general editor. It relies on language extensions to provide compilers, debuggers, and project builders."
          },
          {
            q: "What is the keyboard shortcut to open the terminal inside VS Code?",
            a: "`Ctrl + `` (Control + Backtick)."
          }
        ],
        coding: [
          {
            q: "Write a program to confirm setup is complete.",
            desc: "Print \"System check: ALL SYSTEMS GO!\" to the terminal.",
            solCode: `public class SystemCheck {
    public static void main(String[] args) {
        System.out.println("System check: ALL SYSTEMS GO!");
    }
}`,
            solOut: "System check: ALL SYSTEMS GO!",
            solExp: "Simple system configuration confirmation code."
          },
          {
            q: "Create a path variable printer.",
            desc: "Display \"JAVA_HOME variable links correctly.\" using two separate print statements.",
            solCode: `public class EnvPrint {
    public static void main(String[] args) {
        System.out.print("JAVA_HOME variable ");
        System.out.println("links correctly.");
    }
}`,
            solOut: "JAVA_HOME variable links correctly.",
            solExp: "Checks print output concatenation on the same terminal line."
          },
          {
            q: "Print configuration tool names.",
            desc: "Print \"Required: JDK, VS Code, Java Extensions\" in a single string.",
            solCode: `public class SetupTools {
    public static void main(String[] args) {
        System.out.println("Required: JDK, VS Code, Java Extensions");
    }
}`,
            solOut: "Required: JDK, VS Code, Java Extensions",
            solExp: "Displays the list of workbench software packages."
          }
        ],
        predict: [
          {
            code: `public class TestSetup {
    public static void main(String[] args) {
        System.out.println("Ready: " + true);
    }
}`,
            a: "Ready: true",
            explain: "Concatenates the string \"Ready: \" with the boolean literal true to display text."
          },
          {
            code: `public class KeyPrint {
    public static void main(String[] args) {
        System.out.println("Shortcut: Ctrl + \\\` ");
    }
}`,
            a: "Shortcut: Ctrl + ` ",
            explain: "The backslash \\ acts as an escape character, allowing us to display the special backtick ` character safely in Java."
          }
        ],
        debug: [
          {
            q: "Why does VS Code highlight everything in white and show no Run/Debug buttons?",
            code: `// Code is typed perfectly, but no outline or execution option is shown.
public class Simple {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}`,
            bug: "The file has been saved without the \".java\" extension (e.g. as a text file \"Simple\"), or the folder is not open in VS Code with the Java Extension Pack active.",
            solCode: `// Solution Steps:
// 1. Save the file exactly as "Simple.java".
// 2. Check the bottom right of VS Code to verify the language mode is set to "Java".
// 3. Ensure the Java extension by Microsoft is installed and has completed loading.`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 2,
    topic: "Java Program Structure & First Program",
    body: [
      {
        k: "intro",
        p: "Every Java program follows a rigid structural template. In Java, code cannot float freely; it must live inside a **class**, and execution must begin inside a specific method named **main**."
      },
      {
        k: "why",
        p: "By enforcing a strict structure, Java makes sure large software projects stay organized. Every file represents a component (class), and the computer always knows exactly where to start reading instructions, no matter how huge the project is."
      },
      {
        k: "def",
        p: `A Java program structure requires a **Class Declaration** (matching the filename), a **Main Method Signature** (\`public static void main(String[] args)\`), and statement lines enclosed in curly braces \`{}\` representing logic blocks.`
      },
      {
        k: "heading",
        text: "The First Java Program Template"
      },
      {
        k: "code",
        file: "MyFirstProgram.java",
        code: `public class MyFirstProgram {
    public static void main(String[] args) {
        System.out.println("I am a Java programmer!");
    }
}`,
        output: "I am a Java programmer!",
        lines: [
          {
            n: 1,
            code: `public class MyFirstProgram {`,
            explain: "`public` (anyone can access), `class` (defines code container). Class name matches MyFirstProgram.java."
          },
          {
            n: 2,
            code: `public static void main(String[] args) {`,
            explain: "`static` (runs without class instance), `void` (returns nothing), `main` (entry method), `String[] args` (optional inputs)."
          },
          {
            n: 3,
            code: `System.out.println("...");`,
            explain: "`System` (system package), `out` (standard console stream), `println` (prints and advances to next line)."
          }
        ]
      },
      {
        k: "heading",
        text: "Structure breakdown"
      },
      {
        k: "bul",
        items: [
          "**File Name**: Must match class name exactly (e.g. `MyFirstProgram.java` matches `class MyFirstProgram`). Case-sensitive!",
          `**Curly Braces \`{}\`**: Outline the boundary of classes and methods. Every opening brace \`{\` must have a matching closing brace \`}\`.`,
          "**Semicolon `;`**: Ends an instruction statement."
        ]
      },
      {
        k: "mistakes",
        items: [
          "Mismatching capitalization: writing `string[]` instead of `String[]`, or `system` instead of `System`. Java is case-sensitive.",
          "Mismatched curly braces, causing compiler errors pointing to the wrong lines."
        ]
      },
      {
        k: "best",
        items: [
          "Always indent your code inside brackets using 4 spaces or a Tab. This makes nested code structure visual.",
          "Use PascalCase for class names (e.g., `StudentRecords` rather than `studentrecords`)."
        ]
      },
      {
        k: "summary",
        items: ["Code always goes inside a declared class.", "Computer starts executing at the static main entry method.", "Indents and brackets group blocks logically."]
      },
      {
        k: "compare",
        title: "Print vs Println methods",
        a: {
          head: `System.out.print()`,
          rows: ["Outputs text to console and leaves cursor on same line.", "Subsequent print outputs appear immediately adjacent.", "Useful for building horizontal string chains.", "Example: \"Hello \" + \"World\""]
        },
        b: {
          head: `System.out.println()`,
          rows: ["Outputs text and automatically moves cursor to next line.", "Subsequent outputs appear on a new line.", "Provides vertical layout structure in console output.", "Example: Individual bullet rows."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "Why is Java case-sensitive?",
            a: "Java is based on C/C++ design standards, distinguishing capital letters from lowercase to optimize token recognition."
          },
          {
            q: "What is a block in Java?",
            a: `A block is a group of zero or more statements enclosed in curly braces \`{}\`.`
          },
          {
            q: "What is the role of `String[] args` in the main method?",
            a: "It receives command-line arguments (text parameters passed when running the program)."
          },
          {
            q: "What happens if you save a class named `Test` in a file named `Sample.java`?",
            a: "The compiler will throw an error: \"class Test is public, should be declared in a file named Test.java\"."
          },
          {
            q: "What does the `void` keyword mean?",
            a: "It means the method does not return any value after execution completes."
          }
        ],
        coding: [
          {
            q: "Write a program containing three outputs.",
            desc: "Print \"Starting...\", \"Running...\", \"Completed!\" on separate lines.",
            solCode: `public class ProgramStages {
    public static void main(String[] args) {
        System.out.println("Starting...");
        System.out.println("Running...");
        System.out.println("Completed!");
    }
}`,
            solOut: `Starting...
Running...
Completed!`,
            solExp: "Uses consecutive println statements to print the operational stages of code."
          },
          {
            q: "Create a program with custom class name.",
            desc: "Create class MyProduct. Print \"Product: Laptop\", \"Price: $999\".",
            solCode: `public class MyProduct {
    public static void main(String[] args) {
        System.out.println("Product: Laptop");
        System.out.println("Price: \$999");
    }
}`,
            solOut: `Product: Laptop
Price: \$999`,
            solExp: "Creates the class structure matching MyProduct.java and prints item attributes."
          },
          {
            q: "Write code with print and println combined.",
            desc: "Print \"Total: \" using print, and \"100\" using println.",
            solCode: `public class PrintCombo {
    public static void main(String[] args) {
        System.out.print("Total: ");
        System.out.println("100");
    }
}`,
            solOut: "Total: 100",
            solExp: "Demonstrates print leaving the cursor on the same line so that the next output appends directly."
          }
        ],
        predict: [
          {
            code: `public class PredictStructure {
    public static void main(String[] args) {
        System.out.println("A");
        // System.out.println("B");
        System.out.println("C");
    }
}`,
            a: `A
C`,
            explain: "The second line is commented out with //, so the compiler ignores it, and it does not execute."
          },
          {
            code: `public class BracketTest {
    public static void main(String[] args) {
        System.out.print("{");
        System.out.print("}");
    }
}`,
            a: `{}`,
            explain: "Prints the brace characters as simple text characters without affecting the code structure."
          }
        ],
        debug: [
          {
            q: "Correct the spelling and syntax bugs in this main method signature.",
            code: `public class FixMain {
    public static Void Main(string args) {
        System.out.println("Fix me!");
    }
}`,
            bug: `1. \`Void\` must be lowercase \`void\`.
2. \`Main\` must be lowercase \`main\`.
3. \`string args\` must be \`String[] args\` (string array parameter).`,
            solCode: `public class FixMain {
    public static void main(String[] args) {
        System.out.println("Fix me!");
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 2,
    topic: "Compilation & Execution Process",
    body: [
      {
        k: "intro",
        p: "How does code become a running application? In Java, this is a two-step process: **Compilation** (translating) and **Execution** (running). This split process gives Java its platform independence."
      },
      {
        k: "why",
        p: "Some languages compile straight to machine code (fast but not portable). Others interpret source code line-by-line (portable but slow). Java combines both: compiling to an intermediate format (bytecode) for security, and interpreting that bytecode via the JVM for speed and portability."
      },
      {
        k: "def",
        p: "The Java compilation/execution workflow compiles human-written `.java` files into platform-neutral `.class` files (Bytecode) using `javac`, which are then loaded, verified, and executed as machine code by the JVM interpreter/JIT compiler."
      },
      {
        k: "heading",
        text: "The Execution Flow Chart"
      },
      {
        k: "flow",
        steps: [
          {
            label: "Source Code (MyProgram.java)",
            type: "start"
          },
          {
            label: "Compiler (javac MyProgram.java)",
            type: "process"
          },
          {
            label: "Bytecode Generated (MyProgram.class)",
            type: "io"
          },
          {
            label: "ClassLoader / Bytecode Verifier",
            type: "process"
          },
          {
            label: "JVM Interpreter / JIT Compiler",
            type: "process"
          },
          {
            label: "Native Machine Code (0s & 1s)",
            type: "io"
          },
          {
            label: "CPU Executes Program",
            type: "end"
          }
        ]
      },
      {
        k: "heading",
        text: "Inspecting Class Loading"
      },
      {
        k: "code",
        file: "CompilerInfo.java",
        code: `public class CompilerInfo {
    public static void main(String[] args) {
        // Checking the class loader of this running class
        ClassLoader loader = CompilerInfo.class.getClassLoader();
        System.out.println("Class Loader: " + loader);
    }
}`,
        output: "Class Loader: jdk.internal.loader.ClassLoaders$AppClassLoader@73d16e93",
        lines: [
          {
            n: 4,
            code: "ClassLoader loader = ...",
            explain: "Queries the JVM ClassLoader that retrieved this .class file into execution memory."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Trying to open a `.class` file in Notepad. It is compiled binary bytecode; it will look like unreadable garbage characters.",
          "Assuming JIT (Just-In-Time) compiler compiles the original `.java` file. JIT only compiles frequently-run bytecode into native machine instructions at runtime."
        ]
      },
      {
        k: "best",
        items: [
          "Remember the commands: `javac FileName.java` to compile, and `java ClassName` (no extension) to run.",
          "Keep build folders clean—separate source code folders (`src`) from compiled class folders (`bin`)."
        ]
      },
      {
        k: "summary",
        items: ["Source files compile to platform-neutral .class bytecode.", "JVM interpreter/JIT translates bytecode to physical machine language.", "Compiler uses javac, launcher uses java command."]
      },
      {
        k: "compare",
        title: "javac Compiler vs java Launcher",
        a: {
          head: "javac Compiler",
          rows: ["Command line syntax compiler (javac Main.java).", "Checks syntax errors and builds binary .class file.", "Produces static machine-independent Bytecode.", "Acts as the first-level translation gate."]
        },
        b: {
          head: "java Launcher",
          rows: ["Starts the JVM instance (java Main).", "Interprets bytecode and compiles hotspots using JIT compiler.", "Executes program line-by-line on CPU registers.", "Drives execution runtime."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is bytecode?",
            a: "An intermediate binary representation of Java code produced by the compiler that is executed by the JVM."
          },
          {
            q: "What command compiles a Java file named `App.java`?",
            a: "`javac App.java`"
          },
          {
            q: "What command executes the compiled class `App`?",
            a: "`java App` (no extension)."
          },
          {
            q: "What is the role of the JIT Compiler?",
            a: "The Just-In-Time compiler compiles hot paths of bytecode into native machine code at runtime, accelerating program speed."
          },
          {
            q: "What does the Bytecode Verifier do?",
            a: "It checks that the bytecode complies with Java security rules and does not violate memory partitions before running."
          }
        ],
        coding: [
          {
            q: "Write a class that simulates compiler commands.",
            desc: "Print \"Compile command: javac [name].java\" and \"Run command: java [name]\".",
            solCode: `public class BuildCommands {
    public static void main(String[] args) {
        System.out.println("Compile command: javac Program.java");
        System.out.println("Run command: java Program");
    }
}`,
            solOut: `Compile command: javac Program.java
Run command: java Program`,
            solExp: "Displays the compilation and execution commands used in standard terminal builds."
          },
          {
            q: "Create a program showing file extensions.",
            desc: "Print \"Input: MyFile.java\" and \"Output: MyFile.class\" on separate lines.",
            solCode: `public class Extensions {
    public static void main(String[] args) {
        System.out.println("Input: MyFile.java");
        System.out.println("Output: MyFile.class");
    }
}`,
            solOut: `Input: MyFile.java
Output: MyFile.class`,
            solExp: "Outputs file extensions mapping the source code input and compiled output."
          },
          {
            q: "Print bytecode definition.",
            desc: "Print \"Bytecode is platform-neutral instruction set.\" to console.",
            solCode: `public class BytecodeInfo {
    public static void main(String[] args) {
        System.out.println("Bytecode is platform-neutral instruction set.");
    }
}`,
            solOut: "Bytecode is platform-neutral instruction set.",
            solExp: "Outputs description text about Java bytecode."
          }
        ],
        predict: [
          {
            code: `public class ExtensionPredict {
    public static void main(String[] args) {
        System.out.println("Program" + "." + "class");
    }
}`,
            a: "Program.class",
            explain: "Concatenates the strings together to output the compiled class filename."
          },
          {
            code: `public class JitPredict {
    public static void main(String[] args) {
        System.out.println("JIT = Just-In-Time");
    }
}`,
            a: "JIT = Just-In-Time",
            explain: "Prints the standard definition expansion for the JIT compiler compiler abbreviation."
          }
        ],
        debug: [
          {
            q: "Explain this terminal error occurring when trying to run a class.",
            code: `// Command:
// > java Main.class
// Output: Error: Could not find or load main class Main.class`,
            bug: "The execution command java takes the Class Name as an argument, NOT the file name. By appending \".class\", Java searches for a class literally named \"class\" nested inside a package named \"Main\".",
            solCode: `// Correct Command:
// > java Main`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 2,
    topic: "Java Comments",
    body: [
      {
        k: "intro",
        p: "Comments are notes written in code for human readers. The compiler completely ignores comments. In Java, there are three types of comments: single-line, multi-line, and documentation comments."
      },
      {
        k: "why",
        p: "Code is read much more often than it is written. If you return to code you wrote six months ago, you will forget how it works. Comments document complex logic, outline developer assumptions, and allow you to disable code temporary during debugging."
      },
      {
        k: "def",
        p: "Comments are developer-inserted annotation text blocks ignored by the Java compiler. Java supports **Single-line comments** (`//`), **Multi-line comments** (`/* ... */`), and **Javadoc Comments** (`/** ... */`)."
      },
      {
        k: "heading",
        text: "The Three Types of Comments"
      },
      {
        k: "code",
        file: "CommentsDemo.java",
        code: `/**
 * Javadoc comment: Used to generate external HTML documentation pages.
 * @author James Gosling
 */
public class CommentsDemo {
    public static void main(String[] args) {
        // Single-line comment: Ignored by compiler, documents this single statement
        System.out.println("Comments active!");
        
        /* Multi-line comment:
           This comment spans multiple lines
           without requiring single-line symbols. */
        System.out.println("Execution ends.");
    }
}`,
        output: `Comments active!
Execution ends.`,
        lines: [
          {
            n: 1,
            code: "/**...",
            explain: "Javadoc comment block, used by the javadoc utility to build API references."
          },
          {
            n: 7,
            code: "// Single-line...",
            explain: "Compiler ignores this instruction notes completely."
          },
          {
            n: 10,
            code: "/* Multi-line...",
            explain: "Allows documenting large blocks of algorithms."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Writing comments that explain \"what\" the code does rather than \"why\". (e.g. `int x = 5; // sets x to 5` is a useless comment).",
          "Forgetting to close a multi-line comment, causing the compiler to treat the rest of your program code as a comment."
        ]
      },
      {
        k: "best",
        items: [
          "Write self-documenting code. Use descriptive variable names so you need fewer comments.",
          "Use Javadoc comments on public methods to define parameters and return expectations."
        ]
      },
      {
        k: "summary",
        items: ["Java supports single-line, multi-line, and Javadoc formats.", "Comments are ignored by javac, meaning zero performance runtime cost.", "Use comments to clarify intent, not describe obvious mechanics."]
      },
      {
        k: "compare",
        title: "Single-line vs Multi-line Comments",
        a: {
          head: "Single-line Comment (//)",
          rows: ["Applies from double-slash to the end of the line.", "Best for short, local line annotations.", "Cannot cross line breaks without writing new slashes.", "Used frequently for quick toggles during debugs."]
        },
        b: {
          head: "Multi-line Comment (/* */)",
          rows: ["Starts with /* and terminates with */.", "Can span multiple lines and wrap paragraphs.", "Best for header notices and block documentation.", "Useful for commenting out large blocks of inactive code."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "How does the compiler treat comments?",
            a: "The compiler completely strips comments during lexical analysis; they do not appear in Compiled bytecode."
          },
          {
            q: "What is the syntax for a single-line comment?",
            a: "`//` (double slash)."
          },
          {
            q: "What is the syntax for a multi-line comment?",
            a: "Starts with `/*` and ends with `*/`."
          },
          {
            q: "How does a Javadoc comment differ from a standard multi-line comment?",
            a: "Javadoc comments start with `/**` instead of `/*`. Tools parse them to auto-generate HTML documentation pages."
          },
          {
            q: "Can you nest multi-line comments inside each other?",
            a: "No. Nesting `/* /* */ */` will throw a compiler error because the first `*/` encountered terminates the entire comment block."
          }
        ],
        coding: [
          {
            q: "Write a program with all three comment types.",
            desc: "Create class CommentMix, add a Javadoc block, a single-line comment inside main, and a multi-line block, printing \"Compiled\".",
            solCode: `/**
 * Mix class
 */
public class CommentMix {
    public static void main(String[] args) {
        // Prints message
        System.out.println("Compiled");
        /* End of
           program */
    }
}`,
            solOut: "Compiled",
            solExp: "Demonstrates compiler ignoring all annotations while compiling and running class."
          },
          {
            q: "Use comments to disable code lines.",
            desc: "Write code printing \"Line A\" and \"Line C\". Comment out the statement printing \"Line B\".",
            solCode: `public class DisableLines {
    public static void main(String[] args) {
        System.out.println("Line A");
        // System.out.println("Line B");
        System.out.println("Line C");
    }
}`,
            solOut: `Line A
Line C`,
            solExp: "Commenting out code is a common debugging technique to isolate and test lines."
          },
          {
            q: "Document a mathematical calculation.",
            desc: "Write code calculating area = length * width, adding comments explaining variables.",
            solCode: `public class RoomCalculator {
    public static void main(String[] args) {
        int length = 20; // Length of the room in meters
        int width = 15;  // Width of the room in meters
        /* Area calculation formula:
           Area = Length multiplied by Width */
        int area = length * width;
        System.out.println("Area: " + area);
    }
}`,
            solOut: "Area: 300",
            solExp: "Uses comments to describe measurement units and calculations logic."
          }
        ],
        predict: [
          {
            code: `public class PredictComments {
    public static void main(String[] args) {
        // System.out.println("1");
        System.out.println("2");
        /* System.out.println("3"); */
    }
}`,
            a: "2",
            explain: "The printing calls for \"1\" and \"3\" are wrapped inside comments, leaving only \"2\" to be executed."
          },
          {
            code: `public class StringComment {
    public static void main(String[] args) {
        System.out.println("// Hello World");
    }
}`,
            a: "// Hello World",
            explain: "Because the // characters are inside double quotes, they are part of a literal String value, not comment syntax."
          }
        ],
        debug: [
          {
            q: "Explain the compile error in this commented program.",
            code: `public class NestedComments {
    public static void main(String[] args) {
        /*
           Starting a comment
           /* Nested comment */
           Ending original comment
        */
        System.out.println("Hello");
    }
}`,
            bug: "Comment closing mismatch. The compiler sees `*/` inside the comments block (on line 5) and immediately closes the whole comment. The words \"Ending original comment\" and the trailing `*/` are treated as code, which throws a syntax compilation error.",
            solCode: `public class NestedComments {
    public static void main(String[] args) {
        /*
           Starting a comment
           Nested comment (no nested symbols)
           Ending original comment
        */
        System.out.println("Hello");
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "module",
    num: 3,
    title: "Variables & Data Types",
    desc: "Understand how computers store and organize information in RAM. Learn about variable declaration, primitive data types, naming rules, literals, final constants, and type casting.",
    topics: [
      "Computer Memory & Why Variables?",
      "Variables & Identifiers",
      "Primitive Data Types",
      "Literals & Constants",
      "Type Casting"
    ]
  },
  {
    type: "slide",
    module: 3,
    topic: "Computer Memory & Why Variables?",
    body: [
      {
        k: "intro",
        p: "Before learning variables, we must understand how computers store information. Your computer has **RAM** (Random Access Memory), which acts as a temporary scratchpad. RAM is made of billions of tiny storage cells, each holding one byte of data."
      },
      {
        k: "why",
        p: "Every single cell in RAM has a unique physical address, usually written as a long, complicated hexadecimal number (like `0x7FFF5FBFF5C0`). If we had to remember these raw hardware memory addresses to retrieve our program data, writing code would be practically impossible. Variables solve this."
      },
      {
        k: "def",
        p: "Computer Memory (RAM) is a collection of contiguous storage locations mapped by numeric addresses. A **Variable** is a named reference pointing to a specific reserved memory location, allowing programmers to store and manipulate data using human-readable names instead of physical addresses."
      },
      {
        k: "heading",
        text: "RAM Address Mapping vs Variable Reference"
      },
      {
        k: "stack",
        title: "RAM Memory Allocation",
        cells: [
          {
            label: "0x7FFF01 (Raw Address)",
            val: "100 (Integer)"
          },
          {
            label: "0x7FFF02 (Raw Address)",
            val: "12.5 (Double)"
          },
          {
            label: "0x7FFF03 (Raw Address)",
            val: "true (Boolean)"
          }
        ]
      },
      {
        k: "code",
        file: "MemoryDemo.java",
        code: `public class MemoryDemo {
    public static void main(String[] args) {
        // Declaring a variable assigns a friendly name to a memory space
        int score = 100;
        double price = 12.5;
        
        System.out.println("Score value: " + score);
        System.out.println("Price value: " + price);
    }
}`,
        output: `Score value: 100
Price value: 12.5`,
        lines: [
          {
            n: 4,
            code: "int score = 100;",
            explain: "Tells the JVM: \"Reserve a 4-byte cell in RAM, label it 'score', and store the number 100 inside it.\""
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Thinking that a variable is permanently locked to one value. Variables can \"vary\" and be overwritten during program execution.",
          "Assuming memory remains occupied after the program stops. The OS reclaims all RAM reserved by the JVM once execution completes."
        ]
      },
      {
        k: "best",
        items: [
          "Choose meaningful variable names that describe what is being stored, e.g. `userAge` instead of `a`.",
          "Initialize variables when declaring them to prevent using garbage/empty memory values."
        ]
      },
      {
        k: "summary",
        items: ["RAM stores data in cells with physical addresses.", "Variables are human-readable labels for those memory spaces.", "They eliminate the need to work with raw hexadecimal memory locations."]
      },
      {
        k: "compare",
        title: "RAM vs Hard Drive storage",
        a: {
          head: "RAM (Random Access Memory)",
          rows: ["Volatile temporary memory—wiped when power turns off.", "Nanosecond-level read/write access speeds.", "Holds runtime program variables and structures.", "Driven directly by the CPU."]
        },
        b: {
          head: "Hard Drive (Disk)",
          rows: ["Non-volatile permanent memory—persists data.", "Millisecond-level access times (much slower than RAM).", "Holds OS, source files, and database binaries.", "Required for loading data into RAM."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What does RAM stand for?",
            a: "Random Access Memory."
          },
          {
            q: "What is a memory address?",
            a: "A unique numeric identifier (usually hexadecimal) pointing to a specific location in RAM."
          },
          {
            q: "Why is it difficult to program using raw memory addresses?",
            a: "They are long, hard to remember, change every time the program runs, and are prone to address collision bugs."
          },
          {
            q: "What is the relationship between a variable and a memory location?",
            a: "A variable is an alias or human-friendly label pointing to a specific memory location."
          },
          {
            q: "When a variable's value is updated, what happens in RAM?",
            a: "The new value overwrites the old data in the same memory location, erasing the previous value."
          }
        ],
        coding: [
          {
            q: "Write a program storing and changing score.",
            desc: "Create class GamePoints. Store score = 10, print it, change score to 20, print it again.",
            solCode: `public class GamePoints {
    public static void main(String[] args) {
        int score = 10;
        System.out.println("Initial: " + score);
        score = 20; // Overwriting memory
        System.out.println("Updated: " + score);
    }
}`,
            solOut: `Initial: 10
Updated: 20`,
            solExp: "Demonstrates how a variable's value can vary as the memory contents are overwritten."
          },
          {
            q: "Simulate memory addresses with labels.",
            desc: "Declare scoreAddress = \"0x7F01\" and scoreVal = 50. Print \"Address: [addr]\" and \"Value: [val]\".",
            solCode: `public class MemorySim {
    public static void main(String[] args) {
        String scoreAddress = "0x7F01";
        int scoreVal = 50;
        System.out.println("Address: " + scoreAddress);
        System.out.println("Value: " + scoreVal);
    }
}`,
            solOut: `Address: 0x7F01
Value: 50`,
            solExp: "Uses a String and int variable to represent how a value sits inside an address."
          },
          {
            q: "Show variable re-assignment.",
            desc: "Declare age = 25. Change age to age + 1. Print the age.",
            solCode: `public class IncrementAge {
    public static void main(String[] args) {
        int age = 25;
        age = age + 1; // Evaluates 25 + 1 and stores 26 back
        System.out.println("Age: " + age);
    }
}`,
            solOut: "Age: 26",
            solExp: "Shows a variable referencing its own current memory value to compute a new value."
          }
        ],
        predict: [
          {
            code: `public class ValueSwap {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        a = b;
        b = 5;
        System.out.println(a + " " + b);
    }
}`,
            a: "20 5",
            explain: "`a = b` copies b's value (20) into a. Subsequent change of b to 5 does not affect a because they occupy separate memory slots."
          },
          {
            code: `public class MemoryConcat {
    public static void main(String[] args) {
        int box = 15;
        System.out.println("box" + box);
    }
}`,
            a: "box15",
            explain: "Prints the string literal \"box\" stuck to the value stored in the variable box (15)."
          }
        ],
        debug: [
          {
            q: "Why does the compiler throw an error on line 5?",
            code: `public class DuplicateVar {
    public static void main(String[] args) {
        int age = 20;
        int age = 30;
        System.out.println(age);
    }
}`,
            bug: "Variable Redeclaration. Line 5 uses `int age = 30;` which attempts to create a new variable named age, but age is already declared in this scope. You cannot declare two variables with the same name in the same block.",
            solCode: `public class DuplicateVar {
    public static void main(String[] args) {
        int age = 20;
        age = 30; // Removed "int", now just updates existing memory
        System.out.println(age);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 3,
    topic: "Variables & Identifiers",
    body: [
      {
        k: "intro",
        p: "In Java, declaring a variable requires two pieces of information: **Data Type** (what kind of data goes inside) and **Identifier** (the name of the variable)."
      },
      {
        k: "why",
        p: "Java is a **strongly typed** language. This means the compiler needs to know exactly how much memory space to allocate for your variable ahead of time. It also needs to enforce naming rules so it doesn't mistake variable names for language keywords (like `class` or `void`)."
      },
      {
        k: "def",
        p: "An **Identifier** is a developer-defined name given to a variable, method, class, or interface. Identifiers in Java must start with a letter, underscore `_`, or dollar sign `$`, and are case-sensitive. **Naming Conventions** (like camelCase) are guidelines for writing professional, readable code."
      },
      {
        k: "heading",
        text: "Identifier Rules & Conventions"
      },
      {
        k: "compare",
        a: {
          title: "Legal Identifiers (Valid)",
          items: [
            "`int age;` (Starts with letter)",
            "`double _price;` (Starts with underscore)",
            "`String $name;` (Starts with dollar sign)",
            "`int totalAmount;` (CamelCase, no spaces)",
            "`int value3;` (Contains numbers at end)"
          ]
        },
        b: {
          title: "Illegal Identifiers (Invalid)",
          items: [
            "`int 3value;` (Cannot start with a number)",
            "`double total price;` (No spaces allowed)",
            "`String class;` (Cannot use reserved keyword)",
            "`int score#;` (No special symbols except _ and $)",
            "`int total-sum;` (Hyphens not allowed)"
          ]
        }
      },
      {
        k: "heading",
        text: "Code Example: Declarations and CamelCase"
      },
      {
        k: "code",
        file: "IdentifiersDemo.java",
        code: `public class IdentifiersDemo {
    public static void main(String[] args) {
        // Declaration: dataType identifier;
        int studentAge;
        
        // Initialization: identifier = value;
        studentAge = 19;
        
        // Inline declaration & initialization:
        double productPrice = 99.95;
        
        System.out.println("Age: " + studentAge);
        System.out.println("Price: \$" + productPrice);
    }
}`,
        output: `Age: 19
Price: \$99.95`,
        lines: [
          {
            n: 4,
            code: "int studentAge;",
            explain: "Declares variable studentAge using camelCase. Only reserves memory."
          },
          {
            n: 7,
            code: "studentAge = 19;",
            explain: "Initializes variable, writing 19 into the reserved memory location."
          },
          {
            n: 10,
            code: "double productPrice = 99.95;",
            explain: "Combines declaration and initialization in one statement (best practice)."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Using variable names that look like keywords (e.g. `int public = 5;`).",
          "Declaring variable names starting with numbers (e.g. `double 1stPlace = 10.0;`).",
          "Case confusion: declaring `int age = 10;` and then trying to print `Age` with a capital A."
        ]
      },
      {
        k: "best",
        items: [
          "Use camelCase for variable and method names: start lowercase, capitalize subsequent words (e.g. `userSalaryAmount`).",
          "Use PascalCase for class names: capitalize all words (e.g., `PayrollManager`).",
          "Make names descriptive: `elapsedTimeInSeconds` is better than `t`."
        ]
      },
      {
        k: "summary",
        items: ["Identifiers are names for variables, classes, and methods.", "They cannot start with numbers, contain spaces, or use Java keywords.", "Use camelCase for variables; PascalCase for classes."]
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is an identifier?",
            a: "The custom name given to a code element like a variable, method, or class."
          },
          {
            q: "Is `student_id` a valid identifier in Java?",
            a: "Yes. It contains only letters and underscores."
          },
          {
            q: "Why is `class` an invalid variable name?",
            a: "`class` is a reserved keyword in Java used to declare classes; it cannot be reused as a variable name."
          },
          {
            q: "What naming convention is used for variables in Java?",
            a: "camelCase (e.g. `totalScore`)."
          },
          {
            q: "Is `Java` the same identifier as `java`?",
            a: "No. Java is case-sensitive, so `Java` and `java` refer to two completely different identifiers."
          }
        ],
        coding: [
          {
            q: "Correct illegal variable declarations.",
            desc: "Correct these variables: `double 1price = 5.0;`, `int total score = 10;`, `String class = \"A\";`. Print them.",
            solCode: `public class CorrectVars {
    public static void main(String[] args) {
        double price1 = 5.0;
        int totalScore = 10;
        String classType = "A";
        System.out.println(price1 + " " + totalScore + " " + classType);
    }
}`,
            solOut: "5.0 10 A",
            solExp: "Renames identifiers to follow legal syntax rules (no leading digits, no spaces, no keywords)."
          },
          {
            q: "Declare bank record identifiers.",
            desc: "Declare variables for account balance, customer name, and is active state using camelCase.",
            solCode: `public class BankRecord {
    public static void main(String[] args) {
        double accountBalance = 1500.50;
        String customerName = "Alice Smith";
        boolean isActive = true;
        System.out.println("Balance: " + accountBalance);
        System.out.println("Customer: " + customerName);
        System.out.println("Active: " + isActive);
    }
}`,
            solOut: `Balance: 1500.5
Customer: Alice Smith
Active: true`,
            solExp: "Creates descriptive camelCase variable names for bank parameters."
          },
          {
            q: "Write a program with inline declarations.",
            desc: "Declare and initialize three variables: width = 5, height = 10, depth = 2. Print their product.",
            solCode: `public class VolumeCalc {
    public static void main(String[] args) {
        int width = 5;
        int height = 10;
        int depth = 2;
        int volume = width * height * depth;
        System.out.println("Volume: " + volume);
    }
}`,
            solOut: "Volume: 100",
            solExp: "Declares and initializes variables in single statements and computes volume."
          }
        ],
        predict: [
          {
            code: `public class CamelPredict {
    public static void main(String[] args) {
        int pageCount = 50;
        int PageCount = 100;
        System.out.println(pageCount + PageCount);
    }
}`,
            a: "150",
            explain: "Due to case-sensitivity, pageCount (50) and PageCount (100) are separate variables. Adding them yields 150."
          },
          {
            code: `public class UnderScorePredict {
    public static void main(String[] args) {
        int _num = 7;
        int \$num = 3;
        System.out.println(_num * \$num);
    }
}`,
            a: "21",
            explain: "Identifiers starting with _ and $ are fully valid. The expression computes 7 * 3 = 21."
          }
        ],
        debug: [
          {
            q: "Why does this program throw compilation errors?",
            code: `public class IdentifierBug {
    public static void main(String[] args) {
        int user-age = 25;
        double public = 99.9;
        System.out.println(user-age + " " + public);
    }
}`,
            bug: `1. \`user-age\` uses a hyphen \`-\`, which Java interprets as subtraction (user minus age).
2. \`public\` is a reserved access keyword, it cannot be used as an identifier name.`,
            solCode: `public class IdentifierBug {
    public static void main(String[] args) {
        int userAge = 25; // Hyphen replaced with camelCase
        double price = 99.9; // Keyword replaced with standard name
        System.out.println(userAge + " " + price);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 3,
    topic: "Primitive Data Types",
    body: [
      {
        k: "intro",
        p: "Java has two categories of data types: **Primitives** and **References**. **Primitive Data Types** are built-in, fundamental types that store single raw values directly in memory. There are exactly **8 primitives** in Java."
      },
      {
        k: "why",
        p: "Computers are hardware systems. To be fast, Java needs to map numbers and characters directly to processor-supported sizes. By choosing the right data type, you optimize memory. For example, if you only store age (0-120), using a small 1-byte container (`byte`) saves memory compared to a large 8-byte container (`long`)."
      },
      {
        k: "def",
        p: "A Primitive Data Type is a predefined data category in Java that stores raw, un-encapsulated values. Primitives are not objects and do not possess methods. There are 8 primitives categorized into: Integers, Decimals, Characters, and Booleans."
      },
      {
        k: "heading",
        text: "The 8 Primitive Data Types"
      },
      {
        k: "table",
        head: [
          "Type",
          "Size (Bytes)",
          "Range",
          "Category",
          "Default Value"
        ],
        rows: [
          [
            "byte",
            "1 Byte (8 bits)",
            "-128 to 127",
            "Integer",
            "0"
          ],
          [
            "short",
            "2 Bytes (16 bits)",
            "-32,768 to 32,767",
            "Integer",
            "0"
          ],
          [
            "int",
            "4 Bytes (32 bits)",
            "-2 Billion to 2 Billion",
            "Integer",
            "0"
          ],
          [
            "long",
            "8 Bytes (64 bits)",
            "-9 Quintillion to 9 Quintillion",
            "Integer",
            "0L"
          ],
          [
            "float",
            "4 Bytes (32 bits)",
            "7 decimal digits precision",
            "Decimal",
            "0.0f"
          ],
          [
            "double",
            "8 Bytes (64 bits)",
            "15 decimal digits precision",
            "Decimal",
            "0.0d"
          ],
          [
            "char",
            "2 Bytes (16 bits)",
            "Single Unicode character",
            "Character",
            "\\u0000"
          ],
          [
            "boolean",
            "1 Bit (virtual)",
            "true or false",
            "Logical",
            "false"
          ]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Using Primitives"
      },
      {
        k: "code",
        file: "PrimitivesDemo.java",
        code: `public class PrimitivesDemo {
    public static void main(String[] args) {
        byte age = 25;
        int population = 1500300;
        
        // Note the 'L' suffix for long and 'f' suffix for float:
        long starsInGalaxy = 400000000000L;
        float piEstimation = 3.14159f;
        double accuratePi = 3.141592653589793;
        
        char grade = 'A'; // char uses single quotes
        boolean isJavaFun = true;
        
        System.out.println("Stars: " + starsInGalaxy);
        System.out.println("Accurate Pi: " + accuratePi);
        System.out.println("Grade: " + grade);
    }
}`,
        output: `Stars: 400000000000
Accurate Pi: 3.141592653589793
Grade: A`,
        lines: [
          {
            n: 7,
            code: "long starsInGalaxy = 400000000000L;",
            explain: "Tells Java this number is a long literal. Without L, Java treats it as a standard int, throwing an out-of-range error."
          },
          {
            n: 8,
            code: "float piEstimation = 3.14159f;",
            explain: "Tells Java this is a float. Suffix 'f' is mandatory because Java treats decimals as double by default."
          },
          {
            n: 11,
            code: "char grade = 'A';",
            explain: "Stores the character A. Characters must use single quotes. Double quotes are for Strings."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Omitting the `L` suffix for large long constants, causing an \"integer number too large\" error.",
          "Omitting the `f` suffix for float decimals, causing a \"loss of precision\" compile error.",
          "Using double quotes for `char` (e.g. `char c = \"A\";` is illegal; must be `char c = 'A';`)."
        ]
      },
      {
        k: "best",
        items: [
          "Use `int` as your default data type for integers unless you have a specific reason to save space or store huge numbers.",
          "Use `double` as your default for decimal calculations for maximum decimal precision."
        ]
      },
      {
        k: "summary",
        items: ["There are 8 primitives: byte, short, int, long, float, double, char, boolean.", "char uses single quotes.", "Suffixes are mandatory: L for long, f for float."]
      },
      {
        k: "compare",
        title: "Primitive vs Reference Types",
        a: {
          head: "Primitive Types",
          rows: ["Stores the raw value directly in stack memory.", "Fixed memory size (e.g. int is 4 bytes).", "Does not contain methods or inner attributes.", "Examples: int, double, boolean, char."]
        },
        b: {
          head: "Reference Types",
          rows: ["Stores a memory address (reference) pointing to heap storage.", "Dynamic size depending on object components.", "Contains accessible methods and fields.", "Examples: String, Arrays, custom Objects."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "How many primitive types exist in Java?",
            a: "Exactly 8."
          },
          {
            q: "What is the default type of a decimal literal in Java?",
            a: "`double`."
          },
          {
            q: "Why do we need to append L to long literals?",
            a: "By default, Java treats all integer literals as 4-byte `int` types. The `L` tells Java to treat it as a 64-bit `long`."
          },
          {
            q: "How much memory does a `char` occupy?",
            a: "2 Bytes (16 bits) in order to support Unicode encoding characters."
          },
          {
            q: "What is the range of a `byte` variable?",
            a: "From -128 to 127."
          }
        ],
        coding: [
          {
            q: "Write a program containing all integer types.",
            desc: "Declare and print variables of type byte, short, int, and long with their maximum values.",
            solCode: `public class MaxIntegers {
    public static void main(String[] args) {
        byte maxByte = 127;
        short maxShort = 32767;
        int maxInt = 2147483647;
        long maxLong = 9223372036854775807L;
        System.out.println("Byte: " + maxByte);
        System.out.println("Short: " + maxShort);
        System.out.println("Int: " + maxInt);
        System.out.println("Long: " + maxLong);
    }
}`,
            solOut: `Byte: 127
Short: 32767
Int: 2147483647
Long: 9223372036854775807`,
            solExp: "Uses the highest possible literal thresholds for each integer primitive container."
          },
          {
            q: "Display floating point precision differences.",
            desc: "Declare float f = 1.123456789f and double d = 1.123456789012345. Print both to see truncation.",
            solCode: `public class FloatPrecision {
    public static void main(String[] args) {
        float fVal = 1.123456789f;
        double dVal = 1.123456789012345;
        System.out.println("Float: " + fVal);
        System.out.println("Double: " + dVal);
    }
}`,
            solOut: `Float: 1.1234568
Double: 1.123456789012345`,
            solExp: "Showcases how float truncates after ~7 decimal places, while double preserves ~15 decimal precision digits."
          },
          {
            q: "Model user status primitives.",
            desc: "Store member grade (char) = 'B', score (int) = 450, and isWinner (boolean) = false. Print them.",
            solCode: `public class UserStatus {
    public static void main(String[] args) {
        char grade = 'B';
        int score = 450;
        boolean isWinner = false;
        System.out.println("Grade: " + grade);
        System.out.println("Score: " + score);
        System.out.println("Winner: " + isWinner);
    }
}`,
            solOut: `Grade: B
Score: 450
Winner: false`,
            solExp: "Uses char, int, and boolean primitives to model a simple user profile state."
          }
        ],
        predict: [
          {
            code: `public class CharPredict {
    public static void main(String[] args) {
        char a = 'A';
        System.out.println(a + 1);
    }
}`,
            a: "66",
            explain: "Under the hood, Java characters map to integer values (Unicode/ASCII). 'A' is 65. When you add 1 to a char, Java performs arithmetic promotion, yielding 66."
          },
          {
            code: `public class FloatPredict {
    public static void main(String[] args) {
        float price = 10;
        System.out.println(price);
    }
}`,
            a: "10.0",
            explain: "Assigning the integer 10 to a float variable causes it to be stored as a decimal value, printing 10.0."
          }
        ],
        debug: [
          {
            q: "Explain the compiler error on lines 4 and 5, and resolve it.",
            code: `public class PrimitiveBugs {
    public static void main(String[] args) {
        float rate = 5.75;
        char letter = "Z";
        System.out.println(rate + " " + letter);
    }
}`,
            bug: `1. \`5.75\` is a double literal. You cannot assign it to float \`rate\` without an 'f' suffix.
2. \`"Z"\` is a String literal (double quotes). It cannot be stored in a char without single quotes.`,
            solCode: `public class PrimitiveBugs {
    public static void main(String[] args) {
        float rate = 5.75f; // Suffix 'f' added
        char letter = 'Z';  // Double quotes changed to single quotes
        System.out.println(rate + " " + letter);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 3,
    topic: "Literals & Constants",
    body: [
      {
        k: "intro",
        p: "A **Literal** is a fixed value written directly in your source code. A **Constant** is a variable whose value, once assigned, can never be changed. In Java, we define constants using the keyword **final**."
      },
      {
        k: "why",
        p: "Some values in programs never change (like the number of hours in a day, tax rates, or Pi). If we hardcode the number `24` or `3.14` all over our project, and it changes later, we have to find and rewrite every occurrence. By naming it as a constant, we change it in one place."
      },
      {
        k: "def",
        p: "A **Literal** is a constant value expressed directly in program code. A **Constant** is a variable declared with the `final` modifier, preventing its reassignment after initial value binding."
      },
      {
        k: "heading",
        text: "Literal Configurations"
      },
      {
        k: "bul",
        items: [
          "**Integer Literals**: e.g., `100` (decimal), `0b1100` (binary starting with 0b), `0x1A` (hexadecimal starting with 0x).",
          "**Decimal Literals**: e.g., `3.14` (double), `3.14f` (float), `1.2e3` (scientific notation representing 1200).",
          "**Numeric underscores**: Java allows placing underscores inside numbers for readability, like `1_000_000` (equal to 1000000)."
        ]
      },
      {
        k: "heading",
        text: "Code Example: Constants and Literals"
      },
      {
        k: "code",
        file: "ConstantsDemo.java",
        code: `public class ConstantsDemo {
    public static void main(String[] args) {
        // final variables must be in UPPERCASE by convention
        final double PI = 3.14159;
        final int HOURS_IN_DAY = 24;
        
        // Using underscores in literals
        int oneMillion = 1_000_000;
        
        System.out.println("Pi value: " + PI);
        System.out.println("Hours: " + HOURS_IN_DAY);
        System.out.println("Readable Millon: " + oneMillion);
    }
}`,
        output: `Pi value: 3.14159
Hours: 24
Readable Millon: 1000000`,
        lines: [
          {
            n: 4,
            code: "final double PI = 3.14159;",
            explain: "Declares constant PI. The keyword `final` locks this memory spot."
          },
          {
            n: 7,
            code: "int oneMillion = 1_000_000;",
            explain: "Underscores are stripped by the compiler; they are just for human eyes."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Attempting to reassign a value to a final variable (e.g. `PI = 3.15;` throws a compile-time error).",
          "Naming final constants in camelCase. Capitalize constants to clearly distinguish them from standard variables."
        ]
      },
      {
        k: "best",
        items: [
          "Always use uppercase names with underscores for final constants, e.g. `MAX_SPEED_LIMIT`.",
          "Use final variables for configurations that represent physical constraints (gravity, time blocks)."
        ]
      },
      {
        k: "summary",
        items: ["Literals are raw values written directly in code.", "Constants are created using the `final` keyword.", "By convention, constant identifiers are written in UPPERCASE."]
      },
      {
        k: "compare",
        title: "Variable vs Constant (final)",
        a: {
          head: "Regular Variable",
          rows: ["Value can be updated/re-assigned during execution.", "Declared using typical type and name syntax.", "Used for tracking dynamic changes (e.g. counters).", "Example: int score = 10; score = 20;"]
        },
        b: {
          head: "Constant (final)",
          rows: ["Value is locked once initialized and cannot change.", "Declared using the final keyword prefix.", "Protects safety variables (like PI or tax rates).", "Example: final double PI = 3.14159;"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What keyword does Java use to declare a constant?",
            a: "`final`."
          },
          {
            q: "What happens if you try to modify a final variable after it is set?",
            a: "The compiler will fail to compile the program, throwing a \"cannot assign a value to final variable\" error."
          },
          {
            q: "Can you use underscores inside numbers in Java?",
            a: "Yes. They are ignored by the compiler and are used to separate digit groups for readability."
          },
          {
            q: "What is a hexadecimal literal prefix in Java?",
            a: "`0x` (zero-x), e.g. `0xFF`."
          },
          {
            q: "What is the naming convention for final variables?",
            a: "ALL_UPPERCASE with underscores separating words."
          }
        ],
        coding: [
          {
            q: "Write a program calculating circle perimeter.",
            desc: "Declare final double PI = 3.14159. Calculate perimeter = 2 * PI * radius, where radius = 5.",
            solCode: `public class CirclePerimeter {
    public static void main(String[] args) {
        final double PI = 3.14159;
        int radius = 5;
        double perimeter = 2 * PI * radius;
        System.out.println("Perimeter: " + perimeter);
    }
}`,
            solOut: "Perimeter: 31.4159",
            solExp: "Declares constant PI and references it to compute geometry values."
          },
          {
            q: "Use underscores in variables.",
            desc: "Declare creditCardNumber = 1234_5678_9012_3456L. Print the card number.",
            solCode: `public class CardNumber {
    public static void main(String[] args) {
        long creditCardNumber = 1234_5678_9012_3456L;
        System.out.println("Card Number: " + creditCardNumber);
    }
}`,
            solOut: "Card Number: 1234567890123456",
            solExp: "Shows underscores make long numeric codes readable while preserving numeric properties."
          },
          {
            q: "Declare constant speed parameters.",
            desc: "Declare final int SPEED_OF_LIGHT = 299792458. Print it.",
            solCode: `public class PhysicsConstant {
    public static void main(String[] args) {
        final int SPEED_OF_LIGHT = 299792458;
        System.out.println("Speed of Light: " + SPEED_OF_LIGHT + " m/s");
    }
}`,
            solOut: "Speed of Light: 299792458 m/s",
            solExp: "Uses a final constant variable to model a fixed physical constant."
          }
        ],
        predict: [
          {
            code: `public class FinalAssign {
    public static void main(String[] args) {
        final int VALUE;
        VALUE = 10;
        System.out.println(VALUE);
    }
}`,
            a: "10",
            explain: "A final variable does not have to be initialized on declaration. It can be initialized later, but once assigned, it cannot be modified again."
          },
          {
            code: `public class HexLiteral {
    public static void main(String[] args) {
        int hex = 0x0F;
        System.out.println(hex);
    }
}`,
            a: "15",
            explain: "The literal prefix 0x indicates hexadecimal. Hexadecimal 0F represents the number 15 in decimal base, which is printed."
          }
        ],
        debug: [
          {
            q: "Why does this code fail to compile?",
            code: `public class FinalBug {
    public static void main(String[] args) {
        final int LIMIT = 100;
        if (LIMIT > 50) {
            LIMIT = 200;
        }
        System.out.println(LIMIT);
    }
}`,
            bug: "Reassignment to final variable LIMIT on line 5 inside the if condition.",
            solCode: `public class FinalBug {
    public static void main(String[] args) {
        final int LIMIT = 100;
        int activeLimit = LIMIT; // Copying to a regular variable
        if (activeLimit > 50) {
            activeLimit = 200; // Modify the copy instead
        }
        System.out.println(activeLimit);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 3,
    topic: "Type Casting",
    body: [
      {
        k: "intro",
        p: "Type Casting is when you convert a value from one data type to another. In Java, this can happen automatically (**Implicit/Widening**) or you must do it manually (**Explicit/Narrowing**)."
      },
      {
        k: "why",
        p: "Variables have strict container limits. If you try to fit a small container value into a big container, there is no risk of spilling data, so Java does it for you. But if you try to pour a big container value into a small one, data can spill (truncate), so Java forces you to confirm the operation."
      },
      {
        k: "def",
        p: "Type Casting is data conversion between variables. **Widening Casting** converts a smaller primitive size to a larger type automatically. **Narrowing Casting** converts a larger size to a smaller type manually by placing the target type in parentheses before the expression."
      },
      {
        k: "heading",
        text: "Widening vs Narrowing Casting Workflow"
      },
      {
        k: "table",
        head: ["Casting Type", "Direction", "Operation Type", "Data Loss Risk?"],
        rows: [
          ["Widening (Implicit)", "byte -> short -> char -> int -> long -> float -> double", "Automatic", "None"],
          ["Narrowing (Explicit)", "double -> float -> long -> int -> char -> short -> byte", "Manual casting operator `(type)`", "Yes (decimals truncated, numbers out-of-range wrap)"]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Casting Demos"
      },
      {
        k: "code",
        file: "CastingDemo.java",
        code: `public class CastingDemo {
    public static void main(String[] args) {
        // Widening Casting (Implicit)
        int salary = 5000;
        double salaryDouble = salary; // Automatic
        
        // Narrowing Casting (Explicit)
        double price = 99.99;
        int priceInt = (int) price; // Manual cast
        
        System.out.println("salaryDouble: " + salaryDouble);
        System.out.println("priceInt: " + priceInt + " (Decimal lost!)");
    }
}`,
        output: `salaryDouble: 5000.0
priceInt: 99 (Decimal lost!)`,
        lines: [
          {
            n: 5,
            code: "double salaryDouble = salary;",
            explain: "Widening: converts int 5000 into double 5000.0 safely."
          },
          {
            n: 8,
            code: "int priceInt = (int) price;",
            explain: "Narrowing: placing (int) truncates the decimal portion (.99), storing only the whole number 99."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Expecting narrowing cast to round decimals. `(int) 9.9` results in `9` (truncation), not `10`.",
          "Casting numbers that are out-of-range for the target type. (e.g. casting 130 to a byte causes it to wrap around to -126 due to binary sign limits)."
        ]
      },
      {
        k: "best",
        items: [
          "Only perform narrowing casts when you are certain the potential loss of decimal accuracy is acceptable for the logic.",
          "Use Math.round() before casting if you want to round decimal values to the nearest integer."
        ]
      },
      {
        k: "summary",
        items: ["Implicit casting (widening) is done automatically.", "Explicit casting (narrowing) requires `(type)` operator.", "Narrowing decimal values truncates everything after the point."]
      },
      {
        k: "compare",
        title: "Widening vs Narrowing Casting",
        a: {
          head: "Implicit Widening",
          rows: ["Converts a smaller data type to a larger type size.", "Happens automatically by Java without explicit syntax.", "Safe conversion with zero loss of numeric precision.", "Example: double val = 100; // int 100 converts to 100.0"]
        },
        b: {
          head: "Explicit Narrowing",
          rows: ["Converts a larger type down to a smaller size.", "Requires manual parenthesis typecasting prefix.", "Unsafe—can truncate numbers or clip precision.", "Example: int val = (int) 5.99; // stores 5"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is widening casting?",
            a: "Converting a smaller type to a larger type automatically (e.g., int to double)."
          },
          {
            q: "What operator is used to perform explicit casting?",
            a: "The parentheses operator containing target type, e.g. `(int) variable`."
          },
          {
            q: "Does manual casting round floating-point numbers?",
            a: "No, it completely chops off (truncates) the decimal part."
          },
          {
            q: "What happens if you cast a double to a float without a cast operator?",
            a: "The compiler throws a \"possible loss of precision\" compilation error."
          },
          {
            q: "Why is widening casting safe from data loss?",
            a: "The target data container is physically larger than the source container, meaning it can easily accommodate all possible values."
          }
        ],
        coding: [
          {
            q: "Perform manual decimal truncation.",
            desc: "Declare taxRate = 8.75. Cast taxRate explicitly to an integer and print both values.",
            solCode: `public class TaxCast {
    public static void main(String[] args) {
        double taxRate = 8.75;
        int truncatedTax = (int) taxRate;
        System.out.println("Double: " + taxRate);
        System.out.println("Int: " + truncatedTax);
    }
}`,
            solOut: `Double: 8.75
Int: 8`,
            solExp: "Manual cast operator (int) chops the .75 fraction off taxRate."
          },
          {
            q: "Implement automatic widening.",
            desc: "Declare valueByte = 12. Assign it to an integer and then to a double. Print the double.",
            solCode: `public class AutomaticWidening {
    public static void main(String[] args) {
        byte valueByte = 12;
        int valueInt = valueByte;
        double valueDouble = valueInt;
        System.out.println("Double value: " + valueDouble);
    }
}`,
            solOut: "Double value: 12.0",
            solExp: "Java performs double implicit castings from byte to int and int to double automatically."
          },
          {
            q: "Compute rounded division score.",
            desc: "Divide two integers 5 and 2 using double casting: cast 5 to double before division to keep decimal.",
            solCode: `public class CastDivision {
    public static void main(String[] args) {
        int a = 5;
        int b = 2;
        double result = (double) a / b; // Casts a to 5.0, then divides by 2
        System.out.println("Result: " + result);
    }
}`,
            solOut: "Result: 2.5",
            solExp: "Casting a to double first forces double-precision division instead of integer division (which would discard decimals and give 2)."
          }
        ],
        predict: [
          {
            code: `public class CharIntCast {
    public static void main(String[] args) {
        char ch = 'B';
        int code = ch;
        System.out.println(code);
    }
}`,
            a: "66",
            explain: "Converting char to int is widening casting. The Unicode code value for 'B' is 66, which is stored and printed automatically."
          },
          {
            code: `public class WrapCast {
    public static void main(String[] args) {
        int bigVal = 130;
        byte smallVal = (byte) bigVal;
        System.out.println(smallVal);
    }
}`,
            a: "-126",
            explain: "The value 130 exceeds byte limits (maximum 127). Standard binary wrapping occurs during truncation, causing it to count past 127, wrapping around to -126."
          }
        ],
        debug: [
          {
            q: "Find why this calculation output results in 0.0 instead of 0.75, and correct it.",
            code: `public class DevideBug {
    public static void main(String[] args) {
        double result = 3 / 4;
        System.out.println(result);
    }
}`,
            bug: "Integer division happens first. Because 3 and 4 are integers, 3 / 4 evaluates to 0 in integer math. This 0 is then widened to 0.0 when assigned to the double variable. We need to cast at least one literal to double.",
            solCode: `public class DevideBug {
    public static void main(String[] args) {
        double result = (double) 3 / 4; // Casting 3 to double first
        System.out.println(result);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "module",
    num: 4,
    title: "Input, Output & Operators",
    desc: "Learn how to make your programs interactive using the Scanner class. Study Java's operators: arithmetic, relational, logical, unary, and explore the hierarchy of operator precedence.",
    topics: [
      "Console Input & Output",
      "Arithmetic & Assignment Operators",
      "Relational & Logical Operators",
      "Unary Operators",
      "Operator Precedence"
    ]
  },
  {
    type: "slide",
    module: 4,
    topic: "Console Input & Output",
    body: [
      {
        k: "intro",
        p: `Output is how our program sends messages to the user. Input is how our program receives decisions or data from the user. In Java, we use the \`System.out\` stream for output and the \`Scanner\` class (from the \`java.util\` library) for input.`
      },
      {
        k: "why",
        p: "Static programs that print the same thing every run are boring and useless. Interaction allows us to build real software: ATMs that ask for a PIN, forms that take a name, or calculators that ask for numbers. Scanner reads characters typed by the user and parses them into integers, decimals, or text."
      },
      {
        k: "def",
        p: `Console Output is managed by \`System.out\` (\`print\` to output without a newline, \`println\` to print with a newline). Console Input is managed by importing \`java.util.Scanner\` and instantiating it with \`System.in\`, enabling methods like \`nextLine()\`, \`nextInt()\`, and \`nextDouble()\` to retrieve typed tokens.`
      },
      {
        k: "heading",
        text: "Common Scanner Methods"
      },
      {
        k: "table",
        head: ["Method", "Reads", "Example Input", "Stores as Type"],
        rows: [
          ["next()", "Single word (reads until space)", "\"Hello World\"", "\"Hello\" (String)"],
          ["nextLine()", "Entire line of text", "\"Hello World\"", "\"Hello World\" (String)"],
          ["nextInt()", "An integer number", "\"42\"", "42 (int)"],
          ["nextDouble()", "A decimal number", "\"19.99\"", "19.99 (double)"]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Interactive System Input"
      },
      {
        k: "code",
        file: "InteractiveDemo.java",
        code: `import java.util.Scanner; // Step 1: Import the Scanner utility

public class InteractiveDemo {
    public static void main(String[] args) {
        // Step 2: Create a Scanner object linked to system input (keyboard)
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = scanner.nextLine(); // Reads full line of text
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt(); // Reads integer
        
        System.out.println("Hello, " + name + "! Next year you will be " + (age + 1) + ".");
        
        scanner.close(); // Step 3: Close the scanner to release resources
    }
}`,
        output: `Enter your name: Alice
Enter your age: 20
Hello, Alice! Next year you will be 21.`,
        lines: [
          {
            n: 1,
            code: "import java.util.Scanner;",
            explain: "Brings in the Scanner helper class from the utility package."
          },
          {
            n: 6,
            code: "Scanner scanner = new Scanner(System.in);",
            explain: "Initializes the scanner, linking it to standard keyboard input (System.in)."
          },
          {
            n: 9,
            code: "String name = scanner.nextLine();",
            explain: "Program pauses here, waiting for the user to type text and press Enter."
          },
          {
            n: 12,
            code: "int age = scanner.nextInt();",
            explain: "Reads the typed number. If the user types \"twenty\" instead of 20, Java throws an InputMismatchException and crashes."
          },
          {
            n: 16,
            code: "scanner.close();",
            explain: "Closes the scanner stream. Good practice to prevent system resource leaks."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Forgetting the `import java.util.Scanner;` statement, causing \"cannot find symbol: class Scanner\".",
          "Scanner Buffer Skip: calling `nextLine()` immediately after `nextInt()` or `nextDouble()`. The numeric reads leave a leftover newline character `\\n` in the keyboard buffer, which `nextLine()` reads as an empty line. (Fix: call `scanner.nextLine();` to clear the buffer before reading real text)."
        ]
      },
      {
        k: "best",
        items: [
          `Always print a prompt message (like \`System.out.print("Enter choice: ")\`) before calling a scanner read method, so the user knows the system is waiting.`,
          "Always call `.close()` on your scanner when you are done using it."
        ]
      },
      {
        k: "summary",
        items: [`System.out prints data out; Scanner reads data in.`, "Always import java.util.Scanner.", "Handle input buffer leftovers when mixing numeric and text reads."]
      },
      {
        k: "compare",
        title: `System.out vs System.in`,
        a: {
          head: `System.out`,
          rows: ["Standard output print stream (PrintStream object).", "Sends data out to display on terminal console.", "Provides methods like print, println, and printf.", "Main mechanism for showing outputs."]
        },
        b: {
          head: "System.in",
          rows: ["Standard input stream (InputStream object).", "Reads keyboard input bytes from terminal console.", "Usually wrapped in Scanner class for convenience.", "Main mechanism for receiving inputs."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "Which library package contains the Scanner class?",
            a: "`java.util`"
          },
          {
            q: "What is the difference between `scanner.next()` and `scanner.nextLine()`?",
            a: "`next()` reads only a single word up to the first space. `nextLine()` reads the entire line of text until the user presses Enter."
          },
          {
            q: "What happens if you input a decimal value when `nextInt()` is called?",
            a: "Java throws an `InputMismatchException` at runtime and stops executing."
          },
          {
            q: "Why is it recommended to close the Scanner?",
            a: "It releases system resources. Open scanners can lead to memory and stream handle leaks in large systems."
          },
          {
            q: "How do you fix a scanner buffer skip bug?",
            a: "Insert an extra `scanner.nextLine();` statement immediately after reading a number to consume the leftover newline character."
          }
        ],
        coding: [
          {
            q: "Write a program to calculate average score.",
            desc: "Ask the user to enter two decimal exam scores. Calculate and print the average.",
            solCode: `import java.util.Scanner;

public class ScoreAverageInput {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Score 1: ");
        double s1 = input.nextDouble();
        System.out.print("Score 2: ");
        double s2 = input.nextDouble();
        double avg = (s1 + s2) / 2;
        System.out.println("Average Score: " + avg);
        input.close();
    }
}`,
            solOut: `Score 1: 85.5
Score 2: 90.5
Average Score: 88.0`,
            solExp: "Imports Scanner, reads two double values using nextDouble, computes average, and outputs results."
          },
          {
            q: "Create a greeting card generator.",
            desc: "Prompt the user for their favorite color, age, and hometown. Print a combined message greeting them.",
            solCode: `import java.util.Scanner;

public class ProfileCard {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter hometown: ");
        String town = input.nextLine();
        System.out.print("Enter color: ");
        String color = input.nextLine();
        System.out.print("Enter age: ");
        int age = input.nextInt();
        
        System.out.println("Profile: " + age + " years old from " + town + " who loves " + color + ".");
        input.close();
    }
}`,
            solOut: `Enter hometown: Chicago
Enter color: Blue
Enter age: 22
Profile: 22 years old from Chicago who loves Blue.`,
            solExp: "Uses nextLine and nextInt to fetch multiple details to print a bio summary."
          },
          {
            q: "Write a program converting celsius input.",
            desc: "Read a double Celsius value from the console. Convert to Fahrenheit using `(c * 9/5) + 32` and print.",
            solCode: `import java.util.Scanner;

public class TempConverter {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Celsius: ");
        double cel = input.nextDouble();
        double fah = (cel * 9 / 5) + 32;
        System.out.println("Fahrenheit: " + fah);
        input.close();
    }
}`,
            solOut: `Celsius: 25
Fahrenheit: 77.0`,
            solExp: "Takes Celsius double value, runs temperature formula conversion, and prints."
          }
        ],
        predict: [
          {
            code: `// Assuming user inputs: "John Doe 25"
import java.util.Scanner;
public class InputPredict {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("John Doe 25"); // mock input
        String first = scanner.next();
        String second = scanner.next();
        int age = scanner.nextInt();
        System.out.println(second + ", " + first + " (Age " + age + ")");
    }
}`,
            a: "Doe, John (Age 25)",
            explain: "The scanner reads tokens separated by spaces. `first` gets \"John\", `second` gets \"Doe\", and `age` gets 25."
          },
          {
            code: `import java.util.Scanner;
public class SystemPrintFormat {
    public static void main(String[] args) {
        double val = 12.3456;
        System.out.printf("Value: %.2f", val);
    }
}`,
            a: "Value: 12.35",
            explain: `\`System.out.printf\` with \`%.2f\` rounds and prints a floating-point number formatted to exactly 2 decimal places.`
          }
        ],
        debug: [
          {
            q: "Fix this code that crashes when reading a user's city name after reading their age.",
            code: `import java.util.Scanner;
public class BuggyScanner {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter age: ");
        int age = input.nextInt();
        System.out.print("Enter city: ");
        String city = input.nextLine(); // Crashes or skips input!
        System.out.println("Age: " + age + ", City: " + city);
    }
}`,
            bug: "The `nextInt()` method leaves the newline character `\\n` in the scanner buffer. When `nextLine()` is called immediately after, it consumes this newline and returns an empty string, skipping the input prompt.",
            solCode: `import java.util.Scanner;
public class BuggyScanner {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter age: ");
        int age = input.nextInt();
        input.nextLine(); // CLEAR THE BUFFER: consumes the leftover newline character
        System.out.print("Enter city: ");
        String city = input.nextLine(); // Now reads successfully!
        System.out.println("Age: " + age + ", City: " + city);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 4,
    topic: "Arithmetic & Assignment Operators",
    body: [
      {
        k: "intro",
        p: "Operators are special symbols used to perform calculations on variables. **Arithmetic Operators** perform standard math (add, subtract, divide). **Assignment Operators** store results in variables."
      },
      {
        k: "why",
        p: "Every program needs to perform arithmetic: calculating shopping cart totals, incrementing levels in games, or applying interest rates. Compound assignment operators (like `+=`) exist as shorthand to write code faster."
      },
      {
        k: "def",
        p: "Java supports standard Arithmetic Operators: Addition `+`, Subtraction `-`, Multiplication `*`, Division `/`, and Modulo (remainder) `%`. Assignment Operators bind values, including standard assignment `=` and compound shorthand assignment operators (`+=`, `-=`, `*=`, `/=`, `%=`)."
      },
      {
        k: "heading",
        text: "The Modulo (%) Operator Explained"
      },
      {
        k: "explain",
        p: "The modulo operator `%` returns the **remainder** of division, not the result. For example, `5 % 2` is `1` because 2 goes into 5 twice, leaving a remainder of 1. It is incredibly useful for checking if a number is even (number % 2 == 0) or checking cycles."
      },
      {
        k: "code",
        file: "ArithmeticDemo.java",
        code: `public class ArithmeticDemo {
    public static void main(String[] args) {
        int a = 17;
        int b = 5;
        
        int sum = a + b;
        int division = a / b; // Integer division
        int remainder = a % b; // Modulo
        
        // Compound assignments
        int score = 10;
        score += 5; // equivalent to score = score + 5
        score *= 2; // equivalent to score = score * 2
        
        System.out.println("Division of 17/5: " + division);
        System.out.println("Remainder of 17%5: " + remainder);
        System.out.println("Final score: " + score);
    }
}`,
        output: `Division of 17/5: 3
Remainder of 17%5: 2
Final score: 30`,
        lines: [
          {
            n: 7,
            code: "int division = a / b;",
            explain: "Integer division: 17 divided by 5 is 3.4. Because both are integers, the decimal is discarded, leaving 3."
          },
          {
            n: 8,
            code: "int remainder = a % b;",
            explain: "Modulo: 17 divided by 5 leaves a remainder of 2."
          },
          {
            n: 11,
            code: "score += 5;",
            explain: "Shorthand addition: updates score in memory from 10 to 15."
          },
          {
            n: 12,
            code: "score *= 2;",
            explain: "Shorthand multiplication: updates score from 15 to 30."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Confusing integer division with decimal division. Dividing 5/2 in Java results in 2, not 2.5 (to get 2.5, divide decimals: `5.0 / 2.0`).",
          "Attempting division by zero using `/` or `%`, causing runtime crashes."
        ]
      },
      {
        k: "best",
        items: [
          "Use compound assignment operators (`+=`, `*=`) to make code cleaner and easier to read.",
          "Always cast one side of division to a double if you require decimal accuracy."
        ]
      },
      {
        k: "summary",
        items: ["Arithmetic: +, -, *, /, % (remainder).", "Integer division discards decimals.", "Compound assignment combines calculation and storage."]
      },
      {
        k: "compare",
        title: "Division (/) vs Modulo (%) Operators",
        a: {
          head: "Division (/) Operator",
          rows: ["Computes the quotient of dividing two numbers.", "Performs integer division if both operands are integers.", "Yields decimal division if any operand is float/double.", "Example: 5 / 2 yields 2 (integer math)."]
        },
        b: {
          head: "Modulo (%) Operator",
          rows: ["Computes the remainder of dividing two numbers.", "Always yields integers when working on integers.", "Extremely useful for check-even or leap-year logics.", "Example: 5 % 2 yields 1."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What does the `%` operator do?",
            a: "It calculates the remainder of division."
          },
          {
            q: "What is the result of `7 / 3` in Java?",
            a: "`2` (integer division discards decimal fractions)."
          },
          {
            q: "How would you write `x = x * 2` using compound assignment?",
            a: "`x *= 2;`"
          },
          {
            q: "Can you use the modulo operator on double values?",
            a: "Yes. Java allows modulo operations on both floating-point and integer types."
          },
          {
            q: "What is the value of `score` after `score = 5; score %= 2;`?",
            a: "`1` (5 divided by 2 has a remainder of 1)."
          }
        ],
        coding: [
          {
            q: "Write an even/odd remainder tester.",
            desc: "Declare value = 29. Check its remainder with 2, print \"Value: [val], Remainder: [rem]\".",
            solCode: `public class RemainderTester {
    public static void main(String[] args) {
        int val = 29;
        int rem = val % 2;
        System.out.println("Value: " + val + ", Remainder: " + rem);
    }
}`,
            solOut: "Value: 29, Remainder: 1",
            solExp: "Calculates modulo 2. A remainder of 1 proves that 29 is an odd number."
          },
          {
            q: "Implement compound compound pricing.",
            desc: "Set price = 50.0. Increase it by 10% using `+=`, then apply a $5 discount using `-=`. Print.",
            solCode: `public class PriceAdjust {
    public static void main(String[] args) {
        double price = 50.0;
        price += price * 0.10; // increase by 5.0 (total 55.0)
        price -= 5.0;          // decrease by 5.0 (total 50.0)
        System.out.println("Final Price: " + price);
    }
}`,
            solOut: "Final Price: 50.0",
            solExp: "Applies compound operators directly modifying the double variable value."
          },
          {
            q: "Demonstrate hours conversion math.",
            desc: "Given totalMinutes = 135, calculate full hours using `/` and remaining minutes using `%`. Print result as \"X hours Y mins\".",
            solCode: `public class TimeSplit {
    public static void main(String[] args) {
        int totalMins = 135;
        int hours = totalMins / 60;
        int mins = totalMins % 60;
        System.out.println(hours + " hours " + mins + " mins");
    }
}`,
            solOut: "2 hours 15 mins",
            solExp: "Splits time using division for total bundles of 60, and modulo for remaining units."
          }
        ],
        predict: [
          {
            code: `public class DivisionPredict {
    public static void main(String[] args) {
        int a = 5;
        double b = 2;
        System.out.println(a / b);
    }
}`,
            a: "2.5",
            explain: "If either operand in a division is a floating-point type (double b = 2.0), Java promotes the other operand to double and executes decimal division."
          },
          {
            code: `public class CompoundPredict {
    public static void main(String[] args) {
        int x = 10;
        x += x * 2;
        System.out.println(x);
    }
}`,
            a: "30",
            explain: "`x * 2` is evaluated first (10 * 2 = 20). Then `x += 20` increases x by 20, updating the value to 30."
          }
        ],
        debug: [
          {
            q: "Why does this code throw an Exception at runtime?",
            code: `public class DevideZero {
    public static void main(String[] args) {
        int num = 10;
        int den = 0;
        System.out.println(num / den);
    }
}`,
            bug: "ArithmeticException due to division by zero on line 5.",
            solCode: `public class DevideZero {
    public static void main(String[] args) {
        int num = 10;
        int den = 0;
        if (den != 0) {
            System.out.println(num / den);
        } else {
            System.out.println("Cannot divide by zero!");
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 4,
    topic: "Relational & Logical Operators",
    body: [
      {
        k: "intro",
        p: "We use operators to build logical conditions. **Relational Operators** compare two values and tell us if one is larger, smaller, or equal. **Logical Operators** combine multiple comparisons together."
      },
      {
        k: "why",
        p: "Computer programs need to make decisions. \"If user age is greater than 18 AND account status is active, approve transaction.\" Decision blocks in code rely entirely on relational and logical checks that evaluate to `true` or `false`."
      },
      {
        k: "def",
        p: "Relational operators evaluate relative values: Equal `==`, Not Equal `!=`, Greater Than `>`, Less Than `<`, Greater/Equal `>=`, Less/Equal `<=`. Logical Operators merge boolean results: Logical AND `&&`, Logical OR `||`, Logical NOT `!`."
      },
      {
        k: "heading",
        text: "Logical Truth Tables"
      },
      {
        k: "table",
        head: [
          "Expression A",
          "Expression B",
          "A && B (AND)",
          "A || B (OR)",
          "!A (NOT)"
        ],
        rows: [
          [
            "true",
            "true",
            "true",
            "true",
            "false"
          ],
          [
            "true",
            "false",
            "false",
            "true",
            "false"
          ],
          [
            "false",
            "true",
            "false",
            "true",
            "true"
          ],
          [
            "false",
            "false",
            "false",
            "false",
            "true"
          ]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Logical Decision Checks"
      },
      {
        k: "code",
        file: "LogicDemo.java",
        code: `public class LogicDemo {
    public static void main(String[] args) {
        int age = 22;
        boolean hasLicense = true;
        boolean hasInsurance = false;
        
        // Logical AND (&&): Both must be true
        boolean canDrive = (age >= 18) && hasLicense;
        
        // Logical OR (||): At least one must be true
        boolean needsWarning = !hasLicense || !hasInsurance;
        
        System.out.println("Can Drive legally: " + canDrive);
        System.out.println("Needs system warning: " + needsWarning);
    }
}`,
        output: `Can Drive legally: true
Needs system warning: true`,
        lines: [
          {
            n: 7,
            code: "boolean canDrive = (age >= 18) && hasLicense;",
            explain: "Checks age (22 >= 18 is true) AND hasLicense (true). Both are true, so canDrive is true."
          },
          {
            n: 10,
            code: "boolean needsWarning = !hasLicense || !hasInsurance;",
            explain: "Checks if hasLicense is false (not true is false) OR hasInsurance is false (not false is true). Since one side is true, needsWarning is true."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Confusing assignment `=` with relational comparison `==`. Writing `if (score = 100)` compiles as assigning 100 to score, not checking if score equals 100.",
          "Double check Short-Circuit evaluation: in `A && B`, if A is false, Java completely skips checking B because the output is already guaranteed false. This can cause hidden logic skips if B contains method calls."
        ]
      },
      {
        k: "best",
        items: [
          "Always use parentheses around relational checks to make compound logical structures readable, e.g. `(score > 50) && (lives > 0)`.",
          "Use logical NOT (`!`) sparingly as double negation (`!isActive == false`) is difficult to read quickly."
        ]
      },
      {
        k: "summary",
        items: ["Relational: ==, !=, >, <, >=, <=.", "&& (AND) requires both true; || (OR) requires one true.", "! (NOT) flips boolean state."]
      },
      {
        k: "compare",
        title: "Logical AND (&&) vs Logical OR (||)",
        a: {
          head: "Logical AND (&&)",
          rows: ["Returns true only if both conditions evaluate to true.", "Short-circuits: skips second if first is false.", "Restricts validations (narrow checks).", "Example: age >= 18 && hasID == true"]
        },
        b: {
          head: "Logical OR (||)",
          rows: ["Returns true if at least one condition evaluates to true.", "Short-circuits: skips second if first is true.", "Broadens validations (broad checks).", "Example: isWeekend == true || isHoliday == true"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is the difference between `=` and `==`?",
            a: "`=` is used to assign values to variables. `==` compares two values for equality, returning a boolean."
          },
          {
            q: "What does \"short-circuit evaluation\" mean in Java?",
            a: "For `&&`, if the first operand is false, the second is not evaluated. For `||`, if the first operand is true, the second is not evaluated."
          },
          {
            q: "What is the logical NOT operator?",
            a: "The `!` symbol, which negates or flips a boolean value."
          },
          {
            q: "What relational operator checks for inequality?",
            a: "`!=` (not equal)."
          },
          {
            q: "Is `true || false` evaluated as true or false?",
            a: "`true`."
          }
        ],
        coding: [
          {
            q: "Write a coupon approval script.",
            desc: "Declare purchaseAmount = 120 and isMember = false. Approve coupon if purchaseAmount > 100 OR isMember is true. Print status.",
            solCode: `public class CouponChecker {
    public static void main(String[] args) {
        int purchaseAmount = 120;
        boolean isMember = false;
        boolean approveCoupon = (purchaseAmount > 100) || isMember;
        System.out.println("Approve Coupon: " + approveCoupon);
    }
}`,
            solOut: "Approve Coupon: true",
            solExp: "Evaluates OR logic. Since purchaseAmount > 100 is true, the overall condition evaluates to true."
          },
          {
            q: "Check number range boundaries.",
            desc: "Given score = 85, verify if it falls within the range 80 to 90 inclusive. Print result.",
            solCode: `public class RangeCheck {
    public static void main(String[] args) {
        int score = 85;
        boolean inRange = (score >= 80) && (score <= 90);
        System.out.println("In Range: " + inRange);
    }
}`,
            solOut: "In Range: true",
            solExp: "Uses logical AND to verify the value satisfies both the upper and lower boundaries."
          },
          {
            q: "Build invalid state check program.",
            desc: "Declare isBlocked = true and age = 15. User can play if they are NOT blocked AND age >= 13. Print canPlay.",
            solCode: `public class GameAccess {
    public static void main(String[] args) {
        boolean isBlocked = true;
        int age = 15;
        boolean canPlay = !isBlocked && (age >= 13);
        System.out.println("Can Play: " + canPlay);
    }
}`,
            solOut: "Can Play: false",
            solExp: "Uses negation on isBlocked. Since isBlocked is true, !isBlocked is false, making the whole AND expression false."
          }
        ],
        predict: [
          {
            code: `public class ShortCircuitPredict {
    public static void main(String[] args) {
        int x = 5;
        boolean check = (x > 10) && (++x > 0);
        System.out.println("check=" + check + " x=" + x);
    }
}`,
            a: "check=false x=5",
            explain: "Due to short-circuiting: `x > 10` is false. Because it uses `&&`, Java skips the second expression `++x > 0` entirely, meaning `x` is never incremented and remains 5."
          },
          {
            code: `public class NegatePredict {
    public static void main(String[] args) {
        boolean flag = false;
        System.out.println(!(!flag));
    }
}`,
            a: "false",
            explain: "Double negation: `!flag` is true, and `!(true)` evaluates back to false."
          }
        ],
        debug: [
          {
            q: "Correct the syntax error in this range check condition.",
            code: `public class RangeBug {
    public static void main(String[] args) {
        int x = 15;
        // Check if x is between 10 and 20
        if (10 < x < 20) {
            System.out.println("Valid");
        }
    }
}`,
            bug: "Java does not support chained relational operators like `10 < x < 20`. This must be split into two separate comparisons joined by logical AND (`&&`).",
            solCode: `public class RangeBug {
    public static void main(String[] args) {
        int x = 15;
        if (10 < x && x < 20) {
            System.out.println("Valid");
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 4,
    topic: "Unary Operators",
    body: [
      {
        k: "intro",
        p: "Most operators need two numbers to calculate (e.g. `a + b`). Unary Operators operate on only a **single operand**. The most common unary operations in Java are **Increment** (`++`) and **Decrement** (`--`)."
      },
      {
        k: "why",
        p: "In programming, counting up by 1 or counting down by 1 is extremely common (e.g. tracking game loop lives, incrementing iteration indexes, or processing queues). Writing `x++` is much faster and cleaner than writing `x = x + 1`."
      },
      {
        k: "def",
        p: "Unary Operators require only one operand. Java supports: Unary Plus `+`, Unary Minus `-` (negating values), Increment `++` (increase by 1), Decrement `--` (decrease by 1), and Logical Complement `!` (flip boolean)."
      },
      {
        k: "heading",
        text: "Prefix vs Postfix Operations"
      },
      {
        k: "explain",
        p: `Increment and decrement can be written in two ways: 
- **Prefix (\`++x\`)**: Increments the variable first, then uses it in the expression.
- **Postfix (\`x++\`)**: Uses the variable's current value in the expression first, then increments it in memory.`
      },
      {
        k: "code",
        file: "UnaryDemo.java",
        code: `public class UnaryDemo {
    public static void main(String[] args) {
        int a = 10;
        int b = 10;
        
        // Postfix Increment: Use then Increment
        int resultPost = a++; 
        
        // Prefix Increment: Increment then Use
        int resultPre = ++b;
        
        System.out.println("resultPost: " + resultPost + " (a is now " + a + ")");
        System.out.println("resultPre: " + resultPre + " (b is now " + b + ")");
    }
}`,
        output: `resultPost: 10 (a is now 11)
resultPre: 11 (b is now 11)`,
        lines: [
          {
            n: 7,
            code: "int resultPost = a++;",
            explain: "Postfix: resultPost receives current a (10), then a is incremented in memory to 11."
          },
          {
            n: 10,
            code: "int resultPre = ++b;",
            explain: "Prefix: b is incremented in memory to 11 first, then resultPre receives the new value (11)."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Confusing prefix and postfix evaluations inside larger math formulas, leading to incorrect calculations.",
          "Trying to increment a literal number directly (e.g. `5++` is illegal because 5 is a constant value, not a memory variable)."
        ]
      },
      {
        k: "best",
        items: [
          "Use standalone postfix statements (e.g. `x++;`) on their own line whenever possible to avoid confusing prefix/postfix calculation side-effects.",
          "Keep unary increments separate from print statements for readability."
        ]
      },
      {
        k: "summary",
        items: ["Unary operators work on one variable.", "Prefix: increment/decrement first, then use.", "Postfix: use first, then increment/decrement."]
      },
      {
        k: "compare",
        title: "Pre-Increment (++i) vs Post-Increment (i++)",
        a: {
          head: "Pre-Increment (++i)",
          rows: ["Increments the variable value first, then returns it.", "Used immediately in equations with updated values.", "Syntax: ++counter;", "Example: int a = 5; int b = ++a; // a is 6, b is 6"]
        },
        b: {
          head: "Post-Increment (i++)",
          rows: ["Returns current value first, then increments variable.", "Evaluates inside equation first using old values.", "Syntax: counter++;", "Example: int a = 5; int b = a++; // a is 6, b is 5"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is a unary operator?",
            a: "An operator that performs calculations on a single operand."
          },
          {
            q: "What is the prefix syntax for decrement?",
            a: "`--x`"
          },
          {
            q: "What is the difference between prefix and postfix increment?",
            a: "Prefix increments the value first, then returns it. Postfix returns the current value first, then increments it in memory."
          },
          {
            q: "Is `10++` valid code?",
            a: "No. Unary increments require variable containers; you cannot increment a literal constant."
          },
          {
            q: "What does the unary `-` operator do?",
            a: "It negates the numeric value (multiplies by -1)."
          }
        ],
        coding: [
          {
            q: "Demonstrate prefix/postfix operations.",
            desc: "Declare x = 5. Print `x++` and then print `++x` on separate lines. Trace values.",
            solCode: `public class UnaryTrace {
    public static void main(String[] args) {
        int x = 5;
        System.out.println("Postfix print: " + x++); // Prints 5, x becomes 6
        System.out.println("Prefix print: " + ++x);  // x becomes 7, prints 7
    }
}`,
            solOut: `Postfix print: 5
Prefix print: 7`,
            solExp: "Shows postfix print reading original value, while prefix prints the incremented value."
          },
          {
            q: "Create a countdown tally program.",
            desc: "Initialize ticketsLeft = 3. Print tickets sold consecutively using ticketsLeft--. Print tickets remaining.",
            solCode: `public class TicketCounter {
    public static void main(String[] args) {
        int ticketsLeft = 3;
        System.out.println("Sold: " + ticketsLeft--);
        System.out.println("Sold: " + ticketsLeft--);
        System.out.println("Sold: " + ticketsLeft--);
        System.out.println("Remaining: " + ticketsLeft);
    }
}`,
            solOut: `Sold: 3
Sold: 2
Sold: 1
Remaining: 0`,
            solExp: "Uses postfix decrement to register sales count while counting down remaining inventory."
          },
          {
            q: "Implement negative conversion.",
            desc: "Declare posVal = 40. Convert it to a negative value using unary `-` and print the outcome.",
            solCode: `public class NegateValue {
    public static void main(String[] args) {
        int posVal = 40;
        int negVal = -posVal;
        System.out.println("Negative: " + negVal);
    }
}`,
            solOut: "Negative: -40",
            solExp: "Demonstrates unary negation operator reversing numeric signs."
          }
        ],
        predict: [
          {
            code: `public class UnaryMathPredict {
    public static void main(String[] args) {
        int x = 10;
        int y = x++ + ++x;
        System.out.println("y=" + y + " x=" + x);
    }
}`,
            a: "y=22 x=12",
            explain: "`x++` evaluates to current x (10), then x becomes 11. Next, `++x` increments x first (11 -> 12) and evaluates to 12. Sum: 10 + 12 = 22. Final x in memory is 12."
          },
          {
            code: `public class UnaryBooleanPredict {
    public static void main(String[] args) {
        boolean pass = true;
        System.out.println(!pass);
    }
}`,
            a: "false",
            explain: "The unary logical complement operator (!) negates the value of pass from true to false."
          }
        ],
        debug: [
          {
            q: "Correct the compile error in this counter initialization loop.",
            code: `public class CountBug {
    public static void main(String[] args) {
        int count = 5;
        // Goal: Print count plus 1
        System.out.println(count + +);
    }
}`,
            bug: "Syntax error. The postfix increment operator must not have space between the plus signs (written as `count++`, not `count + +`).",
            solCode: `public class CountBug {
    public static void main(String[] args) {
        int count = 5;
        System.out.println(count++);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 4,
    topic: "Operator Precedence",
    body: [
      {
        k: "intro",
        p: "When you combine multiple operators in a single statement (e.g. `int result = 5 + 3 * 2;`), the computer needs rules to know which calculation to run first. **Operator Precedence** defines this evaluation hierarchy."
      },
      {
        k: "why",
        p: "Without clear precedence rules, calculations would yield different values depending on the compiler direction. In basic arithmetic, multiplication runs before addition. Java extends this logic to handle logical, relational, and assignment operators in a predictable order."
      },
      {
        k: "def",
        p: "Operator Precedence is the compilation rule set determining the execution sequence of operators in an expression. When operators have the same precedence, **Associativity** rules determine order (usually Left-to-Right)."
      },
      {
        k: "heading",
        text: "Java Operator Precedence Table (High to Low Priority)"
      },
      {
        k: "table",
        head: ["Priority", "Operator Category", "Symbols", "Associativity"],
        rows: [
          ["1", "Postfix Increment/Decrement", "`expr++`, `expr--`", "Left-to-Right"],
          ["2", "Unary Operators", "`++expr`, `--expr`, `+`, `-`, `!`, `~`", "Right-to-Left"],
          ["3", "Multiplicative", "`*`, `/`, `%`", "Left-to-Right"],
          ["4", "Additive", "`+`, `-`", "Left-to-Right"],
          ["5", "Relational Comparison", "`<`, `>`, `<=`, `>=`", "Left-to-Right"],
          ["6", "Equality Comparison", "`==`, `!=`", "Left-to-Right"],
          ["7", "Logical AND", "`&&`", "Left-to-Right"],
          ["8", "Logical OR", "`||`", "Left-to-Right"],
          ["9", "Assignment Operators", "`=`, `+=`, `-=`, `*=`, `/=`, `%=`", "Right-to-Left"]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Precedence and Parentheses override"
      },
      {
        k: "code",
        file: "PrecedenceDemo.java",
        code: `public class PrecedenceDemo {
    public static void main(String[] args) {
        // Multiplicative (*) has precedence over Additive (+)
        int resultOne = 10 + 5 * 2; 
        
        // Parentheses () have the highest priority and override precedence
        int resultTwo = (10 + 5) * 2;
        
        // Logical AND (&&) has precedence over Logical OR (||)
        boolean check = true || false && false; 
        
        System.out.println("Result One (10+5*2): " + resultOne);
        System.out.println("Result Two ((10+5)*2): " + resultTwo);
        System.out.println("Logical check: " + check);
    }
}`,
        output: `Result One (10+5*2): 20
Result Two ((10+5)*2): 30
Logical check: true`,
        lines: [
          {
            n: 4,
            code: "int resultOne = 10 + 5 * 2;",
            explain: "Calculates 5 * 2 = 10 first, then 10 + 10 = 20."
          },
          {
            n: 7,
            code: "int resultTwo = (10 + 5) * 2;",
            explain: "Parentheses force 10 + 5 = 15 first, then 15 * 2 = 30."
          },
          {
            n: 10,
            code: "boolean check = true || false && false;",
            explain: "Calculates AND (false && false = false) first, then OR (true || false = true)."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Assuming left-to-right evaluation overrides precedence rules.",
          "Forgetting that assignment (`=`) has the lowest precedence. In `x = a + b`, the calculation `a + b` always completes before storing in `x`."
        ]
      },
      {
        k: "best",
        items: [
          "When in doubt, use parentheses `()` to explicitly clarify the execution order. It prevents calculation bugs and acts as documentation.",
          "Keep formulas simple; break large complex math statements into separate lines of code."
        ]
      },
      {
        k: "summary",
        items: ["Precedence dictating evaluation order of operators.", "Parentheses `()` have absolute priority.", "Multiplication, division, and modulo run before addition and subtraction."]
      },
      {
        k: "compare",
        title: "Operator Precedence vs Associativity",
        a: {
          head: "Operator Precedence",
          rows: ["Determines which operation runs first in mixed equations.", "Higher priority (like multiplication) binds tighter than lower.", "Can be overridden using parentheses.", "Example: 10 + 5 * 2 calculates multiplication first."]
        },
        b: {
          head: "Operator Associativity",
          rows: ["Determines execution order for same-precedence operators.", "Can run Left-to-Right (e.g. arithmetic +) or Right-to-Left (e.g. =).", "Ensures consistent math behavior.", "Example: a = b = c executes right-to-left."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "Which operator has higher precedence: `+` or `*`?",
            a: "`*` (Multiplication)."
          },
          {
            q: "How do you force a lower precedence operator to execute first?",
            a: "Wrap the expression in parentheses `()`."
          },
          {
            q: "Which operator has higher precedence: `&&` or `||`?",
            a: "`&&` (Logical AND)."
          },
          {
            q: "What is associativity?",
            a: "The rule that decides the execution direction when operators of the same precedence appear side by side."
          },
          {
            q: "What is the associativity direction for assignment operators?",
            a: "Right-to-Left."
          }
        ],
        coding: [
          {
            q: "Force addition precedence.",
            desc: "Write a program calculating total = scoreA + scoreB * multiplier. Force addition to run first, where scoreA = 10, scoreB = 20, multiplier = 3.",
            solCode: `public class ForcePrecedence {
    public static void main(String[] args) {
        int scoreA = 10;
        int scoreB = 20;
        int multiplier = 3;
        int total = (scoreA + scoreB) * multiplier;
        System.out.println("Total: " + total);
    }
}`,
            solOut: "Total: 90",
            solExp: "Uses parentheses to evaluate the sum (30) before multiplying by 3."
          },
          {
            q: "Compute complex logical status.",
            desc: "Declare variables isHighGrade = true, hasFine = false, isSuspended = false. Check eligibility: `isHighGrade || hasFine && !isSuspended`. Print outcome.",
            solCode: `public class StatusEligible {
    public static void main(String[] args) {
        boolean isHighGrade = true;
        boolean hasFine = false;
        boolean isSuspended = false;
        boolean eligible = isHighGrade || hasFine && !isSuspended;
        System.out.println("Eligible: " + eligible);
    }
}`,
            solOut: "Eligible: true",
            solExp: "Evaluates priority: NOT (!) runs first, then AND (&&), then OR (||)."
          },
          {
            q: "Write expression showing left-to-right division associativity.",
            desc: "Compute `100 / 5 / 2` and print. Explain the associativity flow in the code explanation.",
            solCode: `public class AssocDivision {
    public static void main(String[] args) {
        int result = 100 / 5 / 2;
        System.out.println("Result: " + result);
    }
}`,
            solOut: "Result: 10",
            solExp: "Left-to-right division associativity: first evaluates 100 / 5 = 20, then 20 / 2 = 10."
          }
        ],
        predict: [
          {
            code: `public class PrecedencePredict {
    public static void main(String[] args) {
        int val = 20 - 5 * 2 + 10 / 2;
        System.out.println(val);
    }
}`,
            a: "15",
            explain: "Calculates multiplication and division first: `5 * 2 = 10` and `10 / 2 = 5`. Expression becomes `20 - 10 + 5`. Left-to-right evaluation yields: `10 + 5 = 15`."
          },
          {
            code: `public class AssignPredict {
    public static void main(String[] args) {
        int x = 5;
        int y = 10;
        int z = x = y + 5;
        System.out.println("x=" + x + " z=" + z);
    }
}`,
            a: "x=15 z=15",
            explain: "Right-to-left assignment: first calculates `y + 5 = 15`. Then assigns 15 to `x` (`x = 15`). Finally, assigns that value to `z` (`z = 15`)."
          }
        ],
        debug: [
          {
            q: "Correct this code to calculate average temperature correctly. Currently it outputs 75.0 instead of 45.0.",
            code: `public class TempAvgBug {
    public static void main(String[] args) {
        double tempA = 40.0;
        double tempB = 50.0;
        double avg = tempA + tempB / 2.0;
        System.out.println("Average: " + avg);
    }
}`,
            bug: "Due to division precedence, tempB is divided by 2 first (50.0 / 2.0 = 25.0), then tempA is added (40.0 + 25.0 = 65.0, wait, output is 65.0 not 75.0, but still incorrect!). We need parentheses around addition."
          }
        ]
      }
    ]
  },
  {
    type: "module",
    num: 5,
    title: "Decision Making",
    desc: "Empower your programs to make choices. Explore conditional structures including if, if-else, else-if ladders, nested if, and switch-case blocks for logical branching.",
    topics: ["Introduction to Decisions (if & if-else)", "Multi-way Decisions (else-if)", "Nested Decisions (Nested if)", "Switch Decisions (switch-case)"]
  },
  {
    type: "slide",
    module: 5,
    topic: "Introduction to Decisions (if & if-else)",
    body: [
      {
        k: "intro",
        p: "By default, computers execute code line-by-line in a straight sequence. **Decision Making** allows our program to run specific blocks of code only if certain conditions are met, branching the execution path."
      },
      {
        k: "why",
        p: "Real life is full of choices, and software must behave the same way. A banking app should only deduct money if your balance is sufficient. A login form should only let you in if your password is correct. The `if` statement evaluates a boolean expression and directs the CPU accordingly."
      },
      {
        k: "def",
        p: "An **if statement** evaluates a boolean condition; if true, its code block executes. An **if-else statement** provides a backup block that executes only if the evaluated condition is false."
      },
      {
        k: "heading",
        text: "Visual Decision Flow Chart"
      },
      {
        k: "flow",
        steps: [
          {
            label: "Start Check",
            type: "start"
          },
          {
            label: "Condition (Is Balance >= Withdrawal?)",
            type: "decision"
          },
          {
            label: "True: Deduct Balance & Dispense (Process)",
            type: "io"
          },
          {
            label: "False: Print \"Insufficient Funds\" (I/O)",
            type: "io"
          },
          {
            label: "End Transaction",
            type: "end"
          }
        ]
      },
      {
        k: "heading",
        text: "Code Example: Simple Account Balance Verification"
      },
      {
        k: "code",
        file: "AtmDecision.java",
        code: `public class AtmDecision {
    public static void main(String[] args) {
        double balance = 500.0;
        double withdrawal = 600.0;
        
        if (balance >= withdrawal) {
            // This block only runs if balance is enough
            balance -= withdrawal;
            System.out.println("Withdrawal Successful! Remaining: \$" + balance);
        } else {
            // This block runs if the condition is false
            System.out.println("Transaction Failed: Insufficient Funds!");
        }
    }
}`,
        output: "Transaction Failed: Insufficient Funds!",
        lines: [
          {
            n: 6,
            code: "if (balance >= withdrawal) {",
            explain: "Evaluates if 500.0 >= 600.0 (false)."
          },
          {
            n: 10,
            code: `} else {`,
            explain: "Because the check failed, Java bypasses lines 7-8 and jumps directly into this else block."
          },
          {
            n: 12,
            code: `System.out.println(...);`,
            explain: "Executes, outputting the failure alert."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Forgetting that the condition inside `if(...)` must result in a boolean value (`true` or `false`). Writing `if(x = 10)` in Java causes a compilation error (unlike C/C++).",
          "Adding a semicolon after the if condition, e.g. `if (x > 5);`. This truncates the statement, making the code block run unconditionally."
        ]
      },
      {
        k: "best",
        items: [
          `Always wrap code blocks inside curly braces \`{}\` even if there is only a single statement inside the block. This prevents maintenance bugs.`,
          "Format conditions clearly and avoid complex math operations directly inside the `if` parenthesis."
        ]
      },
      {
        k: "summary",
        items: ["if statement branches code based on boolean expressions.", "else block is the fallback when condition is false.", "Semicolons must not follow conditions directly."]
      },
      {
        k: "compare",
        title: "Single if vs if-else decisions",
        a: {
          head: "Single if Statement",
          rows: ["Executes a block of code only if condition is true.", "No fallback code—skips block entirely if false.", "Used for optional one-off checks.", "Example: if(balance < 0) showOverdraftWarning();"]
        },
        b: {
          head: "if-else Statement",
          rows: ["Provides two distinct routes: true path and false path.", "Guarantees that exactly one of the two blocks will execute.", "Used for binary forks.", "Example: if(score >= 50) print(\"Pass\"); else print(\"Fail\");"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is the required data type for an if condition?",
            a: "`boolean`."
          },
          {
            q: "Is the else block mandatory for every if statement?",
            a: "No. You can have a single if statement without a matching else."
          },
          {
            q: "What happens if the if condition is true and there is an else block?",
            a: "The if block executes, and the else block is completely ignored."
          },
          {
            q: `What is the syntax error on: \`if (score >= 50); { print("Pass"); }\`?`,
            a: "The semicolon after the condition separates the block, making the printing block execute every time regardless of score."
          },
          {
            q: "Can you write an else block without an accompanying if statement?",
            a: "No, it will throw a compile-time \"else without if\" error."
          }
        ],
        coding: [
          {
            q: "Write a voting eligibility checker.",
            desc: "Read user age using Scanner. If age >= 18 print \"Eligible to Vote\", else print \"Not Eligible\".",
            solCode: `import java.util.Scanner;

public class VoterCheck {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter age: ");
        int age = input.nextInt();
        if (age >= 18) {
            System.out.println("Eligible to Vote");
        } else {
            System.out.println("Not Eligible");
        }
        input.close();
    }
}`,
            solOut: `Enter age: 20
Eligible to Vote`,
            solExp: "Reads age integer and branches execution using a simple if-else comparison."
          },
          {
            q: "Write an Even/Odd checker.",
            desc: "Prompt the user to enter an integer. Check if it is even or odd using modulo `%` and print the outcome.",
            solCode: `import java.util.Scanner;

public class EvenOddCheck {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter number: ");
        int num = input.nextInt();
        if (num % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
        input.close();
    }
}`,
            solOut: `Enter number: 15
Odd`,
            solExp: "Dividing by 2: if remainder is 0, the number is even, else it is odd."
          },
          {
            q: "Create a password gate simulator.",
            desc: "Check if a password String variable equals \"secret123\". Print \"Access Granted\" or \"Access Denied\".",
            solCode: `public class PassGate {
    public static void main(String[] args) {
        String inputPass = "secret123";
        // String comparisons must use .equals() instead of ==
        if (inputPass.equals("secret123")) {
            System.out.println("Access Granted");
        } else {
            System.out.println("Access Denied");
        }
    }
}`,
            solOut: "Access Granted",
            solExp: "Uses the .equals() method to compare the string contents safely and grants access."
          }
        ],
        predict: [
          {
            code: `public class LogicPrint {
    public static void main(String[] args) {
        int x = 5;
        if (x > 3) {
            System.out.print("A");
        }
        if (x > 10) {
            System.out.print("B");
        } else {
            System.out.print("C");
        }
    }
}`,
            a: "AC",
            explain: "The first check `x > 3` is true, printing \"A\". The second check `x > 10` is false, running its else block to print \"C\"."
          },
          {
            code: `public class SemicolonPredict {
    public static void main(String[] args) {
        int temp = 20;
        if (temp > 30);
        {
            System.out.println("Hot!");
        }
    }
}`,
            a: "Hot!",
            explain: "The semicolon on line 4 ends the if statement. The block on line 5-7 is treated as a normal block, running unconditionally and printing \"Hot!\"."
          }
        ],
        debug: [
          {
            q: "Correct the syntax issue that prevents string comparison from working correctly in this code.",
            code: `public class StringCompareBug {
    public static void main(String[] args) {
        String role = "Admin";
        // Goal: Print welcome if role is Admin
        if (role == "Admin") { // Works sometimes, but unsafe! Fix it.
            System.out.println("Welcome Admin");
        }
    }
}`,
            bug: "Using == to compare string values checks memory address references, not content. In Java, strings must always be compared using the `.equals()` method.",
            solCode: `public class StringCompareBug {
    public static void main(String[] args) {
        String role = "Admin";
        if (role.equals("Admin")) { // Fixed using .equals()
            System.out.println("Welcome Admin");
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 5,
    topic: "Multi-way Decisions (else-if)",
    body: [
      {
        k: "intro",
        p: "Sometimes, problems have more than two possible outcomes. The **else-if ladder** allows us to chain multiple conditions together, checking them sequentially until one is true."
      },
      {
        k: "why",
        p: "If you only used separate `if` statements, the computer would evaluate all of them, wasting CPU cycles and potentially running multiple blocks by mistake. An `else-if` ladder ensures that **exactly one** block executes out of many possibilities—once a condition is met, the rest of the ladder is skipped."
      },
      {
        k: "def",
        p: "An **else-if ladder** is a multi-way branching structure where conditions are evaluated sequentially from top to bottom. As soon as a condition evaluates to true, its block executes and the entire remaining control chain is terminated."
      },
      {
        k: "heading",
        text: "Chained Decision Flow Chart"
      },
      {
        k: "flow",
        steps: [
          {
            label: "Check Score",
            type: "start"
          },
          {
            label: "Condition 1: Score >= 90?",
            type: "decision"
          },
          {
            label: "True: Grade = A (Process)",
            type: "io"
          },
          {
            label: "False: Check Score >= 75?",
            type: "decision"
          },
          {
            label: "True: Grade = B (Process)",
            type: "io"
          },
          {
            label: "False: Grade = F (Process)",
            type: "io"
          },
          {
            label: "End Process",
            type: "end"
          }
        ]
      },
      {
        k: "heading",
        text: "Code Example: Student Grade Classification"
      },
      {
        k: "code",
        file: "GradeLadder.java",
        code: `public class GradeLadder {
    public static void main(String[] args) {
        int score = 82;
        char grade;
        
        if (score >= 90) {
            grade = 'A';
        } else if (score >= 80) {
            grade = 'B'; // Condition matches!
        } else if (score >= 70) {
            grade = 'C';
        } else {
            grade = 'F'; // Default fallback
        }
        
        System.out.println("Grade: " + grade);
    }
}`,
        output: "Grade: B",
        lines: [
          {
            n: 6,
            code: "if (score >= 90) {",
            explain: "Checks 82 >= 90 (false). Moves down."
          },
          {
            n: 8,
            code: `} else if (score >= 80) {`,
            explain: "Checks 82 >= 80 (true). Executes this block, setting grade = 'B'."
          },
          {
            n: 10,
            code: `} else if (score >= 70) {`,
            explain: "Skipped entirely. Java jumps straight past the rest of the ladder to line 15."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Ordering conditions incorrectly. Putting a broad condition before a narrow one breaks logic. (e.g. putting `else if(score >= 50)` before `else if(score >= 80)` means a score of 90 will trigger the 50 block first, failing to reach the 80 block).",
          "Omitting the final `else` block when a fallback default is required to ensure variables get initialized."
        ]
      },
      {
        k: "best",
        items: [
          "Order conditions from most specific (or highest values) to most general (lowest values).",
          "Always use a final `else` block to handle unexpected data errors and log debug traces."
        ]
      },
      {
        k: "summary",
        items: ["else-if chain evaluates conditions sequentially.", "Only the first matching block executes.", "Logical order of conditions is critical."]
      },
      {
        k: "compare",
        title: "Multiple if vs else-if ladder",
        a: {
          head: "Independent if Statements",
          rows: ["Tests every condition regardless of previous checks.", "Multiple condition blocks can execute if they match.", "Slower execution since all checks must run.", "Used when multiple overlapping conditions are true."]
        },
        b: {
          head: "else-if Ladder",
          rows: ["Tests sequentially; stops at the first true match.", "Only one block is guaranteed to execute.", "Faster execution—skips remaining checks.", "Used for mutually exclusive categories (grades)."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What happens when a true condition is met in an else-if ladder?",
            a: "Its block executes, and all remaining conditions in that ladder are skipped."
          },
          {
            q: "What is the role of the final else block in a ladder?",
            a: "It acts as a default fallback, executing if none of the previous conditions were true."
          },
          {
            q: "Why is the order of conditions important in an else-if ladder?",
            a: "Evaluation is sequential. If a general condition comes first, it will capture values meant for more specific checks below it."
          },
          {
            q: "Can you have an else-if statement without a final else?",
            a: "Yes. If no conditions match, the entire structure is skipped and no blocks execute."
          },
          {
            q: "Is there a limit to how many else-if blocks you can chain?",
            a: "No, you can chain as many as your program logic requires."
          }
        ],
        coding: [
          {
            q: "Write a number sign classifier.",
            desc: "Read a number using Scanner. Print \"Positive\" if > 0, \"Negative\" if < 0, and \"Zero\" if equal to 0.",
            solCode: `import java.util.Scanner;

public class SignClassify {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter number: ");
        int num = input.nextInt();
        if (num > 0) {
            System.out.println("Positive");
        } else if (num < 0) {
            System.out.println("Negative");
        } else {
            System.out.println("Zero");
        }
        input.close();
    }
}`,
            solOut: `Enter number: -7
Negative`,
            solExp: "Checks positive and negative boundary cases, falling back to zero if neither matches."
          },
          {
            q: "Implement traffic light simulator.",
            desc: "Define a light String variable. If light is \"Red\" print \"Stop\", if \"Yellow\" print \"Prepare\", if \"Green\" print \"Go\", else print \"Invalid Light\".",
            solCode: `public class TrafficLight {
    public static void main(String[] args) {
        String light = "Yellow";
        if (light.equals("Red")) {
            System.out.println("Stop");
        } else if (light.equals("Yellow")) {
            System.out.println("Prepare");
        } else if (light.equals("Green")) {
            System.out.println("Go");
        } else {
            System.out.println("Invalid Light");
        }
    }
}`,
            solOut: "Prepare",
            solExp: "Uses sequential .equals() calls to parse traffic states and print warnings."
          },
          {
            q: "Calculate tax bracket amounts.",
            desc: "Income = 45000. If income <= 20000, tax is 0%. If income <= 50000, tax is 10%. Else, tax is 20%. Calculate and print tax.",
            solCode: `public class IncomeTax {
    public static void main(String[] args) {
        double income = 45000;
        double tax = 0;
        if (income <= 20000) {
            tax = 0;
        } else if (income <= 50000) {
            tax = income * 0.10;
        } else {
            tax = income * 0.20;
        }
        System.out.println("Tax: \$" + tax);
    }
}`,
            solOut: "Tax: $4500.0",
            solExp: "Maps progressive income thresholds sequentially to apply correct tax rates."
          }
        ],
        predict: [
          {
            code: `public class OrderPredict {
    public static void main(String[] args) {
        int x = 75;
        if (x > 50) {
            System.out.print("Pass ");
        } else if (x > 80) {
            System.out.print("Excellent ");
        } else {
            System.out.print("Fail ");
        }
    }
}`,
            a: "Pass ",
            explain: "Even though 75 is closer to an Excellent threshold, `x > 50` is true and comes first in the code. Java runs the first match and exits, so only \"Pass \" is output."
          },
          {
            code: `public class DefaultPredict {
    public static void main(String[] args) {
        int code = 9;
        if (code == 1) {
            System.out.println("File");
        } else if (code == 2) {
            System.out.println("Edit");
        }
        System.out.println("Done");
    }
}`,
            a: "Done",
            explain: "Since code is 9, none of the else-if conditions match. The entire block structure is bypassed, printing only \"Done\"."
          }
        ],
        debug: [
          {
            q: "Fix the logical error in this temperature alert script so that hot weather prints correctly.",
            code: `public class TempAlert {
    public static void main(String[] args) {
        int temp = 35;
        if (temp > 15) {
            System.out.println("Warm");
        } else if (temp > 30) {
            System.out.println("Hot!"); // Never printed!
        } else {
            System.out.println("Cold");
        }
    }
}`,
            bug: "Because `temp > 15` is placed first, a temperature of 35 matches the warm threshold and prints \"Warm\". The hot check is unreachable.",
            solCode: `public class TempAlert {
    public static void main(String[] args) {
        int temp = 35;
        if (temp > 30) { // Ordered from highest check first
            System.out.println("Hot!");
        } else if (temp > 15) {
            System.out.println("Warm");
        } else {
            System.out.println("Cold");
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 5,
    topic: "Nested Decisions (Nested if)",
    body: [
      {
        k: "intro",
        p: "A **Nested if** is an if statement placed inside another if statement. It allows us to perform multi-stage validation checks, where stage 2 is only checked if stage 1 succeeds."
      },
      {
        k: "why",
        p: "Some scenarios require sequential verification checkpoints. For example, before verifying if a user can purchase alcohol, we must first verify if they are logged in. Combining everything into one line with `&&` makes error logging hard; nesting lets us output specific failures at each step."
      },
      {
        k: "def",
        p: "A **Nested if** is a hierarchical control flow structure where an inner conditional statement is placed inside the code block of an outer conditional statement."
      },
      {
        k: "heading",
        text: "Hierarchical Check Flow"
      },
      {
        k: "bul",
        items: [
          "**Outer Check**: The first filter gate. If false, the inner check is never evaluated.",
          "**Inner Check**: Evaluated only if the outer check is true. Provides detailed validation.",
          "**Independent Else**: Each nesting level can have its own else statement block."
        ]
      },
      {
        k: "heading",
        text: "Code Example: Donation Eligibility System"
      },
      {
        k: "code",
        file: "BloodDonation.java",
        code: `public class BloodDonation {
    public static void main(String[] args) {
        int age = 20;
        int weight = 45; // in kg
        
        if (age >= 18) {
            // Stage 1 passed, check Stage 2
            if (weight >= 50) {
                System.out.println("Eligibility Verified: You can donate blood.");
            } else {
                System.out.println("Failed Stage 2: Weight must be at least 50kg.");
            }
        } else {
            System.out.println("Failed Stage 1: You must be at least 18 years old.");
        }
    }
}`,
        output: "Failed Stage 2: Weight must be at least 50kg.",
        lines: [
          {
            n: 6,
            code: "if (age >= 18) {",
            explain: "Outer IF: checks age (20 >= 18 is true). Enters block."
          },
          {
            n: 8,
            code: "if (weight >= 50) {",
            explain: "Inner IF: checks weight (45 >= 50 is false)."
          },
          {
            n: 11,
            code: `} else {`,
            explain: "Jumps here, outputting that weight is too low for donation."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Brace mismatch: pairing an `else` block with the wrong `if` statement. Indentation is critical to align else statements visually with their parent if checks.",
          "Deep Nesting (\"Arrow Anti-pattern\"): Nesting code 5 or 6 levels deep. This makes the code extremely hard to read and debug (fix: use guard clauses or combine with `&&` when simple)."
        ]
      },
      {
        k: "best",
        items: [
          "Indent each nested level by exactly 4 spaces to preserve structural clarity.",
          "Avoid nesting beyond 3 levels. If logic becomes too deep, break it up into helper methods."
        ]
      },
      {
        k: "summary",
        items: ["Nested if checks conditional logic inside another if block.", "Inner statements only run if outer statements are true.", "Indentation keeps brace scopes recognizable."]
      },
      {
        k: "compare",
        title: "Nested if vs Logical AND (&&)",
        a: {
          head: "Nested if Statements",
          rows: ["Inner check only runs if outer check evaluates to true.", "Great for step-by-step validations.", "Can lead to deep indentation (arrowhead code).", `Example: if(userValid) { if(passwordCorrect) { ... } }`]
        },
        b: {
          head: "Logical AND (&&)",
          rows: ["Combines checks into a single line of logic.", "Cleaner code with minimal indentation layers.", "Evaluates both conditions at once.", `Example: if(userValid && passwordCorrect) { ... }`]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is a nested if?",
            a: "An if statement placed inside the body of another if statement."
          },
          {
            q: "When does the inner if get evaluated?",
            a: "Only when the parent outer if condition is true."
          },
          {
            q: "Can you have a nested if-else structure inside an else block?",
            a: "Yes. You can nest conditionals inside any execution block."
          },
          {
            q: "What is the \"dangling else\" problem?",
            a: "A grammatical ambiguity where it is unclear which if statement an else block belongs to. In Java, an else always pairs with the nearest preceding un-closed if in the same block."
          },
          {
            q: "How do you avoid deep nesting bugs?",
            a: "Use compound logical operators (`&&`/`||`) to merge checks when detailed step-by-step error logging is not required."
          }
        ],
        coding: [
          {
            q: "Write a multi-gate credit card approval script.",
            desc: "Check creditScore = 720. If score >= 700, check income = 35000. If income >= 40000 print \"Approved\", else print \"Income too low\". If score < 700 print \"Rejected\".",
            solCode: `public class CreditApproval {
    public static void main(String[] args) {
        int score = 720;
        int income = 35000;
        if (score >= 700) {
            if (income >= 40000) {
                System.out.println("Approved");
            } else {
                System.out.println("Income too low");
            }
        } else {
            System.out.println("Rejected");
        }
    }
}`,
            solOut: "Income too low",
            solExp: "Outer validation passes (score 720 >= 700), but inner income check fails (35000 < 40000)."
          },
          {
            q: "Check login credentials.",
            desc: "Given username = \"admin\" and password = \"123\". If username equals \"admin\", check if password equals \"123\". Print specific failure messages for both.",
            solCode: `public class LoginGate {
    public static void main(String[] args) {
        String u = "admin";
        String p = "999";
        if (u.equals("admin")) {
            if (p.equals("123")) {
                System.out.println("Access OK");
            } else {
                System.out.println("Wrong Password");
            }
        } else {
            System.out.println("Wrong Username");
        }
    }
}`,
            solOut: "Wrong Password",
            solExp: "Validates username match first, then checks and flags password mismatch specifically."
          },
          {
            q: "Determine number interval category.",
            desc: "Given num = 25. If num > 0, check if num is even. Print \"Positive Even\" or \"Positive Odd\". If not positive, print \"Non-Positive\".",
            solCode: `public class IntervalCat {
    public static void main(String[] args) {
        int num = 25;
        if (num > 0) {
            if (num % 2 == 0) {
                System.out.println("Positive Even");
            } else {
                System.out.println("Positive Odd");
            }
        } else {
            System.out.println("Non-Positive");
        }
    }
}`,
            solOut: "Positive Odd",
            solExp: "Branches first on sign, then checks parity using nested modulo evaluation."
          }
        ],
        predict: [
          {
            code: `public class NestPredict {
    public static void main(String[] args) {
        int x = 10;
        int y = 5;
        if (x == 10) {
            if (y == 20) {
                System.out.print("1");
            } else {
                System.out.print("2");
            }
        } else {
            System.out.print("3");
        }
    }
}`,
            a: "2",
            explain: "Outer check matches (`x == 10`). Inner check (`y == 20`) is false, running the nested else block to print \"2\"."
          },
          {
            code: `public class NestSkipPredict {
    public static void main(String[] args) {
        int x = 2;
        if (x > 5) {
            if (x > 3) {
                System.out.println("A");
            }
        } else {
            System.out.println("B");
        }
    }
}`,
            a: "B",
            explain: "Since `x > 5` is false, the entire outer block is bypassed and Java executes the outer else block, printing \"B\"."
          }
        ],
        debug: [
          {
            q: "Align the code formatting and fix the brace error on this nested shipping approval system.",
            code: `public class ShippingBug {
    public static void main(String[] args) {
        boolean inCountry = true;
        double weight = 15;
        if (inCountry)
            if (weight < 10)
                System.out.println("Free Shipping");
        else
            System.out.println("International Rates Applied"); // Dangling else bug!
    }
}`,
            bug: "The code is written without braces. The else statement on line 8 physically aligns with the outer if, but the compiler pairs it with the closest preceding un-braced if (`weight < 10`), printing \"International Rates Applied\" for high-weight domestic packages. We must use curly braces to declare explicit scope.",
            solCode: `public class ShippingBug {
    public static void main(String[] args) {
        boolean inCountry = true;
        double weight = 15;
        if (inCountry) { // Braces added to wrap outer logic
            if (weight < 10) {
                System.out.println("Free Shipping");
            } else {
                System.out.println("Standard Domestic Rates");
            }
        } else {
            System.out.println("International Rates Applied");
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 5,
    topic: "Switch Decisions (switch-case)",
    body: [
      {
        k: "intro",
        p: "When you need to choose one action out of a list of specific values (like matching a single character or number), the **switch statement** provides a cleaner, faster alternative to writing a long else-if ladder."
      },
      {
        k: "why",
        p: "Chaining multiple `else-if` statements to check a single variable (e.g. `if (day == 1)... else if (day == 2)...`) is repetitive and cluttered. A `switch` statement evaluates a variable once and jumps directly to the matching case label, improving performance and readability."
      },
      {
        k: "def",
        p: "A **switch statement** compares a control expression against multiple constant values (case labels). Once a match is found, execution jumps to that case. The keyword **break** is required to exit the switch structure, and **default** serves as the optional fallback case."
      },
      {
        k: "heading",
        text: "Switch syntax components"
      },
      {
        k: "bul",
        items: [
          "**Switch expression**: Supported types are `byte`, `short`, `char`, `int`, `String` (since Java 7), and Enums.",
          "**break**: Tells Java to stop executing inside the switch. Without `break`, execution \"falls through\" to subsequent cases.",
          "**default**: Runs if no case matches the value. Similar to the final `else` in a ladder."
        ]
      },
      {
        k: "heading",
        text: "Code Example: Day of the Week Classifier"
      },
      {
        k: "code",
        file: "DaySwitch.java",
        code: `public class DaySwitch {
    public static void main(String[] args) {
        int day = 3;
        String dayName;
        
        switch (day) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday"; // Matches!
                break; // Exits switch
            case 4:
                dayName = "Thursday";
                break;
            default:
                dayName = "Invalid Day";
                break;
        }
        
        System.out.println("Day: " + dayName);
    }
}`,
        output: "Day: Wednesday",
        lines: [
          {
            n: 6,
            code: "switch (day) {",
            explain: "Evaluates the variable day (3)."
          },
          {
            n: 13,
            code: "case 3:",
            explain: "Checks match. Since day is 3, execution jumps directly here."
          },
          {
            n: 15,
            code: "break;",
            explain: "Critical: tells Java to exit the switch block immediately. If omitted, Java would continue executing case 4."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Forgetting the `break` statement at the end of a case block. This causes **Fall-Through**, executing all subsequent cases until a break or the end of the switch is reached.",
          "Trying to switch on double, float, or long types (e.g. `switch(price)` is illegal because decimal comparison is imprecise)."
        ]
      },
      {
        k: "best",
        items: [
          "Always include a `default` case to handle unexpected values safely.",
          "Format cases cleanly and keep their bodies concise. If a case requires complex logic, call a helper method."
        ]
      },
      {
        k: "summary",
        items: ["switch compares a single variable against fixed case constants.", "break exits the switch block, preventing fall-through.", "default serves as the default fallback case."]
      },
      {
        k: "compare",
        title: "switch-case vs else-if ladder",
        a: {
          head: "switch-case Statement",
          rows: ["Checks a single variable against multiple value constants.", "Highly readable for discrete menu checks.", "Supports byte, short, int, char, String, and enums only.", "Uses break statements to prevent execution fall-through."]
        },
        b: {
          head: "else-if Ladder",
          rows: ["Evaluates complex logical equations with ranges.", "More flexible check bounds (e.g. score > 80 && score < 90).", "Supports variables of any type (including double/float).", "Requires manual check configurations."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What data types are allowed in a switch expression?",
            a: "`byte`, `short`, `char`, `int`, `String` (since Java 7), and Enums."
          },
          {
            q: "What is fall-through in a switch statement?",
            a: "The execution of multiple consecutive case blocks because a `break` statement was omitted."
          },
          {
            q: "Is the `default` case required in a switch?",
            a: "No, it is optional, but it is highly recommended as a safety fallback."
          },
          {
            q: "Can case labels contain variables (e.g. `case x:`)?",
            a: "No. Case labels must be constant expressions or literals resolved at compile time."
          },
          {
            q: "Does switch statement execution support ranges (e.g. `case 1..10:`)?",
            a: "No, classic Java switch statements only check for exact equality matches (though newer pattern matching switches support expressions)."
          }
        ],
        coding: [
          {
            q: "Write a grade warning printer.",
            desc: "Read a character grade ('A', 'B', 'C', 'F'). Print warnings: 'A' -> \"Excellent\", 'B' -> \"Good\", 'C' -> \"Pass\", 'F' -> \"Fail\", else \"Invalid\".",
            solCode: `public class GradeWarning {
    public static void main(String[] args) {
        char grade = 'B';
        switch (grade) {
            case 'A':
                System.out.println("Excellent");
                break;
            case 'B':
                System.out.println("Good");
                break;
            case 'C':
                System.out.println("Pass");
                break;
            case 'F':
                System.out.println("Fail");
                break;
            default:
                System.out.println("Invalid");
                break;
        }
    }
}`,
            solOut: "Good",
            solExp: "Uses a character switch to directly match grades and print customized warnings."
          },
          {
            q: "Create a simple menu choice runner.",
            desc: "Initialize selection = 2. Switch selection: 1 -> print \"File Open\", 2 -> print \"File Save\", 3 -> print \"Exit\", else print \"Unknown Option\".",
            solCode: `public class MenuSwitch {
    public static void main(String[] args) {
        int selection = 2;
        switch (selection) {
            case 1:
                System.out.println("File Open");
                break;
            case 2:
                System.out.println("File Save");
                break;
            case 3:
                System.out.println("Exit");
                break;
            default:
                System.out.println("Unknown Option");
                break;
        }
    }
}`,
            solOut: "File Save",
            solExp: "Demonstrates a standard integer switch for application menu routing."
          },
          {
            q: "Implement weekday classifier showing fall-through.",
            desc: "Given dayNum = 6. Switch: 1-5 print \"Weekday\", 6-7 print \"Weekend\". Utilize fall-through intentionally.",
            solCode: `public class WeekendCheck {
    public static void main(String[] args) {
        int dayNum = 6;
        switch (dayNum) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                System.out.println("Weekday");
                break;
            case 6:
            case 7:
                System.out.println("Weekend"); // Falls through 6 to 7
                break;
            default:
                System.out.println("Invalid");
                break;
        }
    }
}`,
            solOut: "Weekend",
            solExp: "Groups case numbers by leaving them without break statements, executing the same block for multiple inputs."
          }
        ],
        predict: [
          {
            code: `public class FallThroughPredict {
    public static void main(String[] args) {
        int num = 2;
        switch (num) {
            case 1:
                System.out.print("1");
            case 2:
                System.out.print("2");
            case 3:
                System.out.print("3");
                break;
            default:
                System.out.print("D");
        }
    }
}`,
            a: "23",
            explain: "Matches case 2, printing \"2\". Because there is no break statement under case 2, execution falls through into case 3, printing \"3\", and terminates at case 3's break statement."
          },
          {
            code: `public class StringSwitchPredict {
    public static void main(String[] args) {
        String command = "START";
        switch (command) {
            case "start":
                System.out.print("a");
                break;
            case "START":
                System.out.print("b");
                break;
            default:
                System.out.print("c");
        }
    }
}`,
            a: "b",
            explain: "String switches are case-sensitive. \"START\" matches the uppercase case \"START\", printing \"b\"."
          }
        ],
        debug: [
          {
            q: "Why does this calculator throw compile errors, and how do you resolve them?",
            code: `public class CalcSwitch {
    public static void main(String[] args) {
        double result = 1.5;
        // Goal: branch calculations based on decimal rates
        switch (result) {
            case 1.5:
                System.out.println("Low");
                break;
            case 3.0:
                System.out.println("High");
                break;
        }
    }
}`,
            bug: "The compiler fails because switch expressions do not support double or float data types due to floating-point representation limits.",
            solCode: `public class CalcSwitch {
    public static void main(String[] args) {
        double result = 1.5;
        // Fixed by using an if-else ladder to evaluate double rates
        if (result == 1.5) {
            System.out.println("Low");
        } else if (result == 3.0) {
            System.out.println("High");
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "module",
    num: 6,
    title: "Loops & Iteration",
    desc: "Automate repetitive tasks. Master loop controls in Java including while, for, and do-while loops. Learn loop dry runs, nested loops, and control overrides like break and continue.",
    topics: [
      "Condition-Controlled Loops (while)",
      "Count-Controlled Loops (for & Dry Runs)",
      "Post-Test Loops (do-while)",
      "Loop Controls (break & continue)",
      "Nested Loops & Iteration Tables"
    ]
  },
  {
    type: "slide",
    module: 6,
    topic: "Condition-Controlled Loops (while)",
    body: [
      {
        k: "intro",
        p: "Loops are structures that repeat a block of code as long as a condition remains true. A **while loop** is a condition-controlled loop: it checks the condition *before* running each iteration."
      },
      {
        k: "why",
        p: "We write loops to avoid copy-pasting the same code. If you want to print \"Hello\" 100 times, copy-pasting takes 100 lines; a loop does it in 3 lines. while loops are ideal when you do not know in advance exactly how many times the loop will repeat (e.g. reading file lines until the end is reached)."
      },
      {
        k: "def",
        p: "A **while loop** is a pre-test loop that evaluates a boolean condition before executing the loop body. If the condition is true, the body executes, and the program returns to the check. If false, execution bypasses the loop."
      },
      {
        k: "heading",
        text: "Visual while Loop Execution Flow"
      },
      {
        k: "flow",
        steps: [
          {
            label: "Start Loop",
            type: "start"
          },
          {
            label: "Condition Check (Is count <= 3?)",
            type: "decision"
          },
          {
            label: "True: Print count & increment (Process)",
            type: "io"
          },
          {
            label: "False: Exit Loop",
            type: "end"
          }
        ]
      },
      {
        k: "heading",
        text: "Code Example: Simple Tally Counter"
      },
      {
        k: "code",
        file: "WhileTally.java",
        code: `public class WhileTally {
    public static void main(String[] args) {
        int count = 1; // Initialization
        
        while (count <= 3) { // Condition Check
            System.out.println("Iteration: " + count);
            count++; // Update (Increment) to prevent infinite loop
        }
        
        System.out.println("Loop finished. Final count: " + count);
    }
}`,
        output: `Iteration: 1
Iteration: 2
Iteration: 3
Loop finished. Final count: 4`,
        lines: [
          {
            n: 3,
            code: "int count = 1;",
            explain: "Initializes the loop control variable."
          },
          {
            n: 5,
            code: "while (count <= 3) {",
            explain: "Tests the condition. Runs the block if count is 1, 2, or 3."
          },
          {
            n: 7,
            code: "count++;",
            explain: "Increments count. If omitted, count stays 1, and the loop repeats forever (Infinite Loop)."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "**Infinite Loop**: Forgetting to update the loop control variable inside the loop body (e.g. forgetting `count++`), causing the condition to stay true forever and freeze the computer.",
          "Off-by-One error: loop runs one time too many or too few (e.g. writing `count < 3` instead of `count <= 3` when you need 3 iterations)."
        ]
      },
      {
        k: "best",
        items: [
          "Ensure the loop control variable is guaranteed to reach a state that makes the condition false.",
          "Initialize loop variables immediately before the loop block to keep the logic local."
        ]
      },
      {
        k: "summary",
        items: ["while loops test conditions before running the body.", "Requires three parts: initialization, condition, and update.", "Missing updates cause infinite execution loops."]
      },
      {
        k: "compare",
        title: "while loop vs if statement",
        a: {
          head: "while Loop",
          rows: ["Executes block repeatedly as long as condition is true.", "Contains counter modifications to prevent infinite loops.", "Used for repetitive iterations.", "Example: print numbers from 1 to 10."]
        },
        b: {
          head: "if Statement",
          rows: ["Executes block once if condition is true.", "No repeat—execution leaves decision block immediately.", "Used for conditional switches.", "Example: print warning if threshold exceeded."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is a pre-test loop?",
            a: "A loop that checks its condition before executing the loop body (like while and for)."
          },
          {
            q: "What happens if the condition of a while loop is false from the start?",
            a: "The loop body is skipped entirely and never executes."
          },
          {
            q: "What causes an infinite loop?",
            a: "A loop condition that never evaluates to false, usually because the update step is missing or incorrect."
          },
          {
            q: "Can you use a boolean variable directly as a while condition?",
            a: `Yes, e.g. \`while (isActive) { ... }\` is fully valid.`
          },
          {
            q: `How many times will \`int i = 5; while(i < 5){ i++; }\` execute?`,
            a: "Zero times, because 5 < 5 is false at the first check."
          }
        ],
        coding: [
          {
            q: "Write a countdown loop program.",
            desc: "Create class CountDown. Start count at 5, print the numbers down to 1, and print \"Launch!\" using a while loop.",
            solCode: `public class CountDown {
    public static void main(String[] args) {
        int count = 5;
        while (count >= 1) {
            System.out.println(count);
            count--; // Decrement
        }
        System.out.println("Launch!");
    }
}`,
            solOut: `5
4
3
2
1
Launch!`,
            solExp: "Initializes count to 5, decrements inside the while loop, and prints a launch message after exit."
          },
          {
            q: "Implement user sum simulation.",
            desc: "Use a while loop to sum numbers from 1 to 10. Print the final sum.",
            solCode: `public class SumTen {
    public static void main(String[] args) {
        int i = 1;
        int sum = 0;
        while (i <= 10) {
            sum += i;
            i++;
        }
        System.out.println("Sum: " + sum);
    }
}`,
            solOut: "Sum: 55",
            solExp: "Accumulates index i into sum variable, incrementing i until it reaches 11."
          },
          {
            q: "Write a factor printing loop.",
            desc: "Print all numbers from 1 to 20 that are divisible by 3.",
            solCode: `public class DivThree {
    public static void main(String[] args) {
        int num = 1;
        while (num <= 20) {
            if (num % 3 == 0) {
                System.out.print(num + " ");
            }
            num++;
        }
    }
}`,
            solOut: "3 6 9 12 15 18 ",
            solExp: "Traverses numbers 1 to 20, checking modulo divisibility inside a while loop."
          }
        ],
        predict: [
          {
            code: `public class MultLoop {
    public static void main(String[] args) {
        int x = 2;
        while (x < 15) {
            System.out.print(x + " ");
            x = x * 2;
        }
    }
}`,
            a: "2 4 8 ",
            explain: "The loop doubles x: 2 is printed, x becomes 4. 4 is printed, x becomes 8. 8 is printed, x becomes 16. 16 < 15 is false, loop terminates."
          },
          {
            code: `public class ModLoop {
    public static void main(String[] args) {
        int i = 10;
        while (i > 0) {
            if (i % 4 == 0) {
                System.out.print(i + " ");
            }
            i--;
        }
    }
}`,
            a: "8 4 ",
            explain: "Counts down from 10. Modulo checks capture multiples of 4 (8 and 4) to output."
          }
        ],
        debug: [
          {
            q: "Identify the bug that causes this program to run forever.",
            code: `public class InfiniteBug {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 5) {
            System.out.println("Number: " + i);
            // Goal: Print numbers 1 to 5
        }
    }
}`,
            bug: "Missing update step. Variable `i` stays 1 forever, so `i <= 5` is always true, causing an infinite loop.",
            solCode: `public class InfiniteBug {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 5) {
            System.out.println("Number: " + i);
            i++; // Increment added
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 6,
    topic: "Count-Controlled Loops (for & Dry Runs)",
    body: [
      {
        k: "intro",
        p: "A **for loop** is a count-controlled loop. It groups the initialization, condition check, and update step into a single line, making it clean and hard to break."
      },
      {
        k: "why",
        p: "When you know exactly how many times a loop must run (e.g. printing a header 10 times, or looping through an array of 5 elements), a `for` loop is superior to a `while` loop. Because the update step is written in the header, you are much less likely to write an infinite loop by mistake."
      },
      {
        k: "def",
        p: `A **for loop** is a pre-test loop structure containing: \`for (initialization; condition; update) { body }\`. The initialization runs once, the condition checks before each iteration, and the update executes after each loop body run.`
      },
      {
        k: "heading",
        text: "Visual for Loop Execution Flow"
      },
      {
        k: "flow",
        steps: [
          {
            label: "Start (for loop)",
            type: "start"
          },
          {
            label: "Initialization: i = 1 (Process)",
            type: "process"
          },
          {
            label: "Condition Check (Is i <= 3?)",
            type: "decision"
          },
          {
            label: "True: Run Loop Body & Update i++ (Process)",
            type: "io"
          },
          {
            label: "False: Loop Terminates",
            type: "end"
          }
        ]
      },
      {
        k: "heading",
        text: "The dry-run iteration table"
      },
      {
        k: "explain",
        p: "A **Dry Run** is walking through code step-by-step, tracking variable values in a table. It is the most powerful technique to understand how loops work and trace errors."
      },
      {
        k: "table",
        head: [
          "Iteration",
          "i (Value at check)",
          "Condition (i <= 3)",
          "Output / Action",
          "Next i (After update)"
        ],
        rows: [
          [
            "1",
            "1",
            "1 <= 3 (True)",
            "Prints: i=1",
            "2"
          ],
          [
            "2",
            "2",
            "2 <= 3 (True)",
            "Prints: i=2",
            "3"
          ],
          [
            "3",
            "3",
            "3 <= 3 (True)",
            "Prints: i=3",
            "4"
          ],
          [
            "4",
            "4",
            "4 <= 3 (False)",
            "Terminates loop",
            "-"
          ]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Simple for Loop iteration"
      },
      {
        k: "code",
        file: "ForDemo.java",
        code: `public class ForDemo {
    public static void main(String[] args) {
        // for (initialization; condition; update)
        for (int i = 1; i <= 3; i++) {
            System.out.println("i = " + i);
        }
    }
}`,
        output: `i = 1
i = 2
i = 3`,
        lines: [
          {
            n: 4,
            code: "for (int i = 1; i <= 3; i++) {",
            explain: "Initializes i=1. Checks i<=3. Loops. Increments i++ after each body execution."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Adding a semicolon after the for loop header, e.g. `for(int i=0; i<5; i++);`. This makes the loop body empty and runs the subsequent block once with i out of scope.",
          "Declaring the loop variable outside but re-declaring it inside the header, causing variable conflicts."
        ]
      },
      {
        k: "best",
        items: [
          "Declare the loop counter variable directly inside the for loop header (`for(int i = 0...)`). This restricts its scope so it is cleaned up after the loop exits.",
          "Use standard counter variable names like `i`, `j`, `k` for simple iterations."
        ]
      },
      {
        k: "summary",
        items: ["for loop organizes initialization, check, and increment in one header.", "Ideal when loop count is known in advance.", "Dry-run tables track variable states step-by-step."]
      },
      {
        k: "compare",
        title: "for loop vs while loop structure",
        a: {
          head: "for Loop",
          rows: ["Collects init, condition, and increment on a single line.", "Used when number of iterations is known beforehand.", "Highly compact and readable for numeric traversal.", "Example: for(int i=0; i<10; i++)"]
        },
        b: {
          head: "while Loop",
          rows: ["Only carries the loop condition in its header.", "Used when number of iterations is unknown (event-driven).", "Variables must be declared outside the loop scope.", "Example: reading user inputs until they type \"exit\"."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is the order of execution in a for loop header?",
            a: "1. Initialization (runs once), 2. Condition Check, 3. Loop Body, 4. Update, 5. Repeat from step 2."
          },
          {
            q: "Is the initialization block required in a for loop?",
            a: "No. You can leave it empty if the variable is declared outside, but the semicolon is still mandatory."
          },
          {
            q: "Can a for loop run backwards?",
            a: "Yes, by initializing to a high value and using a decrement operator (e.g. `i--`)."
          },
          {
            q: "What is the scope of a variable declared in a for loop header?",
            a: "It is local to the loop block. It cannot be accessed after the loop exits."
          },
          {
            q: "How would you write an infinite loop using for syntax?",
            a: `\`for ( ; ; ) { ... }\` (leaving all expressions empty).`
          }
        ],
        coding: [
          {
            q: "Write a even number printer.",
            desc: "Print all even numbers from 2 to 10 inclusive on a single line with spaces using a for loop.",
            solCode: `public class EvenPrint {
    public static void main(String[] args) {
        for (int i = 2; i <= 10; i += 2) {
            System.out.print(i + " ");
        }
    }
}`,
            solOut: "2 4 6 8 10 ",
            solExp: "Initializes counter at 2, increases by 2 each loop, outputting even numbers."
          },
          {
            q: "Create a squares table compiler.",
            desc: "Generate squares of numbers 1 to 5. Print \"Num: X, Square: Y\" using a for loop.",
            solCode: `public class SquaresTable {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Num: " + i + ", Square: " + (i * i));
        }
    }
}`,
            solOut: `Num: 1, Square: 1
Num: 2, Square: 4
Num: 3, Square: 9
Num: 4, Square: 16
Num: 5, Square: 25`,
            solExp: "Iterates 5 times, squaring the index inside the calculation print statement."
          },
          {
            q: "Write a character alphabet loop.",
            desc: "Use a for loop to print characters from 'A' to 'E' on the same line.",
            solCode: `public class AlphabetLoop {
    public static void main(String[] args) {
        for (char ch = 'A'; ch <= 'E'; ch++) {
            System.out.print(ch + " ");
        }
    }
}`,
            solOut: "A B C D E ",
            solExp: "Uses a char type directly as loop counter, incrementing Unicode value."
          }
        ],
        predict: [
          {
            code: `public class PreDecrementLoop {
    public static void main(String[] args) {
        for (int i = 5; i > 2; i--) {
            System.out.print(i + " ");
        }
    }
}`,
            a: "5 4 3 ",
            explain: "Loop starts at 5, checks if 5 > 2 (true), prints 5. Decrements to 4, prints 4. Decrements to 3, prints 3. Decrements to 2, 2 > 2 is false, exits."
          },
          {
            code: `public class ScopePredict {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 3; i++) {
            sum += i;
        }
        System.out.println("sum=" + sum);
    }
}`,
            a: "sum=6",
            explain: "Accumulates 1 + 2 + 3 = 6. Variables inside header are local; sum remains visible since it is outer."
          }
        ],
        debug: [
          {
            q: "Why does this loop execute only once and print i=5 instead of i=0 to 4?",
            code: `public class LoopSemicolonBug {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++); {
            System.out.println("i=" + i);
        }
    }
}`,
            bug: `The semicolon (;) immediately after the for loop header on line 3 ends the loop block instantly. The block inside curly braces \`{}\` is treated as an independent block, running once after the loop finishes with \`i\` out of scope (actually this fails to compile because \`i\` is local to the loop header and is not defined in the block. Fix by removing the semicolon).`,
            solCode: `public class LoopSemicolonBug {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) { // Semicolon removed
            System.out.println("i=" + i);
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 6,
    topic: "Post-Test Loops (do-while)",
    body: [
      {
        k: "intro",
        p: "A **do-while loop** is a post-test loop. Unlike `while` and `for` which check the condition first, `do-while` executes its body block **first**, and checks the condition *afterwards*."
      },
      {
        k: "why",
        p: "Some tasks must run at least once, even if the condition is false. For example, when making a game menu, you want to show options at least once, get input, and *then* decide if you should show it again. do-while loops guarantee **at least one execution** of the loop body."
      },
      {
        k: "def",
        p: `A **do-while loop** is a post-test loop structure where the loop body is executed before the conditional expression is evaluated. The syntax is \`do { body } while (condition);\`. Note the trailing semicolon after the condition.`
      },
      {
        k: "heading",
        text: "Visual do-while Loop Execution Flow"
      },
      {
        k: "flow",
        steps: [
          {
            label: "Start",
            type: "start"
          },
          {
            label: "Execute Body Block (Process)",
            type: "process"
          },
          {
            label: "Condition Check (Is value > 0?)",
            type: "decision"
          },
          {
            label: "True: Repeat / False: Exit",
            type: "end"
          }
        ]
      },
      {
        k: "heading",
        text: "Code Example: Guaranteed Menu Execution"
      },
      {
        k: "code",
        file: "DoWhileDemo.java",
        code: `public class DoWhileDemo {
    public static void main(String[] args) {
        int i = 10;
        
        // This loop checks condition AFTER body execution
        do {
            System.out.println("Run code once. i = " + i);
            i++;
        } while (i < 5); // Condition check: 11 < 5 is false
        
        System.out.println("Loop exited. i is now: " + i);
    }
}`,
        output: `Run code once. i = 10
Loop exited. i is now: 11`,
        lines: [
          {
            n: 5,
            code: "do {",
            explain: "Defines the entry. Java enters here unconditionally."
          },
          {
            n: 6,
            code: `System.out.println(...);`,
            explain: "Executes. Prints \"Run code once. i = 10\"."
          },
          {
            n: 8,
            code: "} while (i < 5);",
            explain: "Tests condition. Since 11 < 5 is false, it exits. Note the semicolon at the end."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Forgetting the semicolon at the end of the `while(condition);` line. This causes a syntax compilation error.",
          "Confusing while and do-while when a pre-test check is required, leading to executing invalid logic with empty datasets."
        ]
      },
      {
        k: "best",
        items: ["Use do-while loops specifically for input-validation forms and console menus.", "Keep the exit condition clear to prevent loops from repeating indefinitely."]
      },
      {
        k: "summary",
        items: ["do-while executes the loop body before checking conditions.", "Guarantees at least one execution iteration.", "Requires a closing semicolon after the condition."]
      },
      {
        k: "compare",
        title: "while loop vs do-while loop",
        a: {
          head: "while Loop (Pre-test)",
          rows: ["Checks condition first before running body.", "If initial condition is false, body runs 0 times.", "Used when condition guards block safety.", "Example: reading file contents (guarding empty files)."]
        },
        b: {
          head: "do-while Loop (Post-test)",
          rows: ["Runs body first, then checks loop condition.", "Guarantees that body executes at least 1 time.", "Used when loop drives input generation.", "Example: presenting console menu prompts."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is a post-test loop?",
            a: "A loop that checks its condition at the end of each iteration (like do-while)."
          },
          {
            q: "What is the absolute minimum number of times a do-while loop will execute?",
            a: "Exactly once."
          },
          {
            q: "Does a do-while loop require a semicolon at the end?",
            a: "Yes, after the closing parenthesis of the while condition."
          },
          {
            q: "When is a do-while loop preferred over a while loop?",
            a: "When the operation must run at least once before checking variables, such as displaying a menu or getting user inputs."
          },
          {
            q: `What is the value of \`x\` after \`int x=5; do{ x+=2; }while(x<5);\`?`,
            a: "`7` (the loop body executes once, adding 2 to x, and then exits because 7 < 5 is false)."
          }
        ],
        coding: [
          {
            q: "Write a simple password verification simulator.",
            desc: "Simulate checking a password using do-while. Read password using Scanner, repeat *while* password does not equal \"pass123\".",
            solCode: `import java.util.Scanner;

public class PassVerifier {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String pass;
        do {
            System.out.print("Enter password: ");
            pass = input.nextLine();
        } while (!pass.equals("pass123")); // Repeats while password is wrong
        System.out.println("Access OK!");
        input.close();
    }
}`,
            solOut: `Enter password: guest
Enter password: pass123
Access OK!`,
            solExp: "Guarantees the prompt is displayed at least once, looping until the correct password string is provided."
          },
          {
            q: "Implement reverse number printer.",
            desc: "Use a do-while loop to print numbers from 3 down to 1.",
            solCode: `public class DoWhileReverse {
    public static void main(String[] args) {
        int i = 3;
        do {
            System.out.print(i + " ");
            i--;
        } while (i >= 1);
    }
}`,
            solOut: "3 2 1 ",
            solExp: "Prints current index, decrements, and checks condition until index falls below 1."
          },
          {
            q: "Write a number accumulator.",
            desc: "Accumulate numbers until total exceeds 15. Start with adding 5 each loop using do-while. Print final total.",
            solCode: `public class AccumulateDo {
    public static void main(String[] args) {
        int total = 0;
        do {
            total += 5;
        } while (total <= 15);
        System.out.println("Total: " + total);
    }
}`,
            solOut: "Total: 20",
            solExp: "Adds 5 repeatedly: total goes 5, 10, 15, 20. Exits when 20 > 15."
          }
        ],
        predict: [
          {
            code: `public class DoWhileCount {
    public static void main(String[] args) {
        int x = 1;
        do {
            System.out.print(x + " ");
            x += 2;
        } while (x < 6);
    }
}`,
            a: "1 3 5 ",
            explain: "Prints 1, x becomes 3. 3 < 6 is true, loops, prints 3, x becomes 5. 5 < 6 is true, loops, prints 5, x becomes 7. 7 < 6 is false, terminates."
          },
          {
            code: `public class FalseDoWhile {
    public static void main(String[] args) {
        int val = 100;
        do {
            val = val - 50;
        } while (val > 100);
        System.out.println(val);
    }
}`,
            a: "50",
            explain: "Body runs once: `val` becomes 50. Condition `50 > 100` is evaluated as false, so the loop exits immediately, printing 50."
          }
        ],
        debug: [
          {
            q: "Find the compilation error in this do-while loop block.",
            code: `public class SemicolonBug {
    public static void main(String[] args) {
        int k = 1;
        do {
            System.out.println("k=" + k);
            k++
        } while (k < 5)
    }
}`,
            bug: `1. Missing semicolon at line 6 (\`k++\`).
2. Missing closing semicolon after the \`while\` statement on line 7.`,
            solCode: `public class SemicolonBug {
    public static void main(String[] args) {
        int k = 1;
        do {
            System.out.println("k=" + k);
            k++; // Fixed
        } while (k < 5); // Fixed with trailing semicolon
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 6,
    topic: "Loop Controls (break & continue)",
    body: [
      {
        k: "intro",
        p: "Sometimes we need to break out of a loop early, or skip part of an iteration. In Java, we use the control statements **break** and **continue** to override standard loop behavior."
      },
      {
        k: "why",
        p: "Imagine searching an array of 1 million records for a specific ID. Once you find it, there is no reason to search the remaining 999,999 records. You call `break` to stop searching. Alternatively, if you are calculating payroll and encounter an unpaid employee record, you use `continue` to skip that record and proceed to the next."
      },
      {
        k: "def",
        p: "The **break statement** immediately terminates the loop it resides in, transferring execution to the statement following the loop. The **continue statement** halts the current iteration of a loop and jumps directly to the loop update/condition check for the next iteration."
      },
      {
        k: "heading",
        text: "Comparing break vs continue Flows"
      },
      {
        k: "compare",
        a: {
          title: "break Flow (Exit Loop)",
          items: [
            "1. Enters loop.",
            "2. Runs instructions.",
            "3. Hits `break;`.",
            "4. Exits loop immediately.",
            "5. Skips remaining iterations."
          ]
        },
        b: {
          title: "continue Flow (Next Iteration)",
          items: [
            "1. Enters loop.",
            "2. Runs instructions.",
            "3. Hits `continue;`.",
            "4. Stops current iteration body.",
            "5. Jumps to update step."
          ]
        }
      },
      {
        k: "heading",
        text: "Code Example: Loop Control Traces"
      },
      {
        k: "code",
        file: "LoopControl.java",
        code: `public class LoopControl {
    public static void main(String[] args) {
        System.out.println("--- Continue Example (Skip 3) ---");
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                continue; // Skip the rest of this iteration
            }
            System.out.print(i + " ");
        }
        
        System.out.println("\n--- Break Example (Stop at 3) ---");
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                break; // Exit loop completely
            }
            System.out.print(i + " ");
        }
    }
}`,
        output: `--- Continue Example (Skip 3) ---
1 2 4 5 
--- Break Example (Stop at 3) ---
1 2 `,
        lines: [
          {
            n: 6,
            code: "continue;",
            explain: "When i is 3, Java halts print and jumps directly to i++ in header."
          },
          {
            n: 14,
            code: "break;",
            explain: "When i is 3, Java exits the loop completely, skipping prints for 3, 4, and 5."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Using break or continue outside of loops or switch blocks, which causes compiler errors.",
          "Unreachable Code: writing statements immediately after a break or continue within the same block, causing \"unreachable statement\" compile errors."
        ]
      },
      {
        k: "best",
        items: [
          "Use break to exit infinite utility loops (`while(true)`) when user inputs a specific quit command (like \"Q\").",
          "Use continue to skip invalid elements or errors during data processing."
        ]
      },
      {
        k: "summary",
        items: [
          "break exits loop completely.",
          "continue skips remaining statements in current iteration, starting next loop cycle.",
          "Helps optimize execution logic."
        ]
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What does a break statement do inside a loop?",
            a: "Immediately terminates the loop and moves execution to the statements outside the loop."
          },
          {
            q: "What does a continue statement do?",
            a: "Stops the current iteration and jumps to the update/condition check step for the next iteration."
          },
          {
            q: "Can you use continue inside a switch statement?",
            a: "No. continue can only be used inside loops (while, for, do-while)."
          },
          {
            q: "What is \"unreachable code\" compile error?",
            a: "An error raised when you write code immediately after statements like break, return, or continue that guarantee execution never reaches them."
          },
          {
            q: "Which loops support loop controls?",
            a: "All loops (for, while, do-while)."
          }
        ],
        coding: [
          {
            q: "Write a search limit loop.",
            desc: "Print numbers 1 to 100. Stop printing (break) once you reach a number divisible by 7 and 5. Print final number.",
            solCode: `public class SearchLimit {
    public static void main(String[] args) {
        for (int i = 1; i <= 100; i++) {
            if (i % 7 == 0 && i % 5 == 0) {
                System.out.println("Stopped at: " + i);
                break;
            }
        }
    }
}`,
            solOut: "Stopped at: 35",
            solExp: "Iterates through numbers; checks if division matches 35 (divisible by 7 and 5), prints, and exits early."
          },
          {
            q: "Implement skipping even numbers loop.",
            desc: "Loop from 1 to 10. Use continue to skip printing even numbers, showing only odd numbers.",
            solCode: `public class SkipEvens {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                continue;
            }
            System.out.print(i + " ");
        }
    }
}`,
            solOut: "1 3 5 7 9 ",
            solExp: "Checks if number is even; if true, continue statement triggers, bypassing printing statement."
          },
          {
            q: "Write a loop that exits on input command.",
            desc: "Using a mock scanner loop (while true), print \"Running\". If count equals 3, break. Print \"Exited\".",
            solCode: `public class ExitCommand {
    public static void main(String[] args) {
        int count = 1;
        while (true) { // Infinite loop
            System.out.println("Running");
            if (count == 3) {
                break;
            }
            count++;
        }
        System.out.println("Exited");
    }
}`,
            solOut: `Running
Running
Running
Exited`,
            solExp: "Uses a conditional break statement to safely escape from a designated infinite loop."
          }
        ],
        predict: [
          {
            code: `public class ControlPredictOne {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i < 6; i++) {
            if (i % 2 == 0) continue;
            if (i == 5) break;
            sum += i;
        }
        System.out.println(sum);
    }
}`,
            a: "4",
            explain: `Iteration values of i:
- i=1: sum becomes 1.
- i=2: even, continues.
- i=3: sum becomes 1+3=4.
- i=4: even, continues.
- i=5: breaks loop. Sum is 4.`
          },
          {
            code: `public class ControlPredictTwo {
    public static void main(String[] args) {
        int i = 0;
        while (i < 3) {
            i++;
            if (i == 2) continue;
            System.out.print(i + " ");
        }
    }
}`,
            a: "1 3 ",
            explain: "i incremented first to 1, prints 1. i incremented to 2, matches continue and skips printing. i incremented to 3, prints 3. Exit."
          }
        ],
        debug: [
          {
            q: "Explain the compile error in this code and correct it.",
            code: `public class UnreachableBug {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            break;
            System.out.println("i = " + i); // Compile error here!
        }
    }
}`,
            bug: `The compiler throws an "unreachable statement" error because \`System.out.println\` is placed directly after \`break\` within the same block, ensuring it can never execute.`,
            solCode: `public class UnreachableBug {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            // Settle conditions before breaking, or place printing before break statement
            System.out.println("i = " + i);
            break;
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 6,
    topic: "Nested Loops & Iteration Tables",
    body: [
      {
        k: "intro",
        p: "A **Nested Loop** is a loop placed inside the body of another loop. The outer loop controls the primary iterations, and the inner loop runs completely from start to finish for *each* single iteration of the outer loop."
      },
      {
        k: "why",
        p: "We use nested loops to process multi-dimensional data, such as rows and columns on a grid, coordinate coordinates, pixels on a screen, or game board grids."
      },
      {
        k: "def",
        p: "A Nested Loop structure nests an inner loop block within the body boundary of an outer loop. If the outer loop runs $M$ times and the inner loop runs $N$ times, the inner loop body executes a total of $M \\times N$ times."
      },
      {
        k: "heading",
        text: "Nested Loop Iteration Table"
      },
      {
        k: "table",
        head: ["Outer Index (row)", "Inner Index (col)", "Calculation (row * col)", "Action / Output"],
        rows: [
          ["1", "1", "1 * 1 = 1", "Prints: 1"],
          ["1", "2", "1 * 2 = 2", "Prints: 2"],
          ["Row 1 ends", "-", "-", "Advances row (new line)"],
          ["2", "1", "2 * 1 = 2", "Prints: 2"],
          ["2", "2", "2 * 2 = 4", "Prints: 4"],
          ["Row 2 ends", "-", "-", "Advances row (new line)"]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Multiplication Matrix"
      },
      {
        k: "code",
        file: "NestedMatrix.java",
        code: `public class NestedMatrix {
    public static void main(String[] args) {
        // Outer loop controls rows
        for (int row = 1; row <= 2; row++) {
            
            // Inner loop controls columns
            for (int col = 1; col <= 2; col++) {
                System.out.print((row * col) + " ");
            }
            
            System.out.println(); // Print a blank newline after each row completes
        }
    }
}`,
        output: `1 2 
2 4 `,
        lines: [
          {
            n: 4,
            code: "for (int row = 1; row <= 2; row++) {",
            explain: "Outer loop runs twice. Controls row advancement."
          },
          {
            n: 7,
            code: "for (int col = 1; col <= 2; col++) {",
            explain: "Inner loop. Runs twice for each outer loop, computing cells."
          },
          {
            n: 11,
            code: `System.out.println();`,
            explain: "Crucial: prints a newline to move to the next line before the outer loop advances to the next row."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Using the same loop control variable name (like `i`) for both the outer and inner loops. This causes variable shadowing conflicts and corrupts loop logic.",
          `Forgetting to print a newline \`System.out.println()\` at the end of the outer loop body, causing grid printout lines to glue together in one line.`
        ]
      },
      {
        k: "best",
        items: [
          "Use meaningful counter names like `row` and `col` rather than `i` and `j` when processing grid structures.",
          "Keep inner loops as efficient as possible, since their instructions repeat exponentially."
        ]
      },
      {
        k: "summary",
        items: ["Nested loops put one loop inside another.", "Outer loop steps once -> inner loop runs completely.", "Total cycles is the product of outer times inner counts."]
      },
      {
        k: "compare",
        title: "Outer Loop vs Inner Loop",
        a: {
          head: "Outer Loop",
          rows: ["Drives vertical layout rows in matrix outputs.", "Runs once per cycle; resets inner loop iterations.", "Controls slow-moving index variables.", "Example: Row coordinate i."]
        },
        b: {
          head: "Inner Loop",
          rows: ["Drives horizontal cell elements across single rows.", "Runs completely to end for every outer loop tick.", "Controls fast-moving index variables.", "Example: Column coordinate j."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What controls rows in a grid nested loop structure?",
            a: "The outer loop."
          },
          {
            q: "What controls columns?",
            a: "The inner loop."
          },
          {
            q: "If outer loop runs 3 times and inner loop runs 4 times, how many times does the inner loop body run?",
            a: "12 times ($3 \\times 4$)."
          },
          {
            q: "Why is using the variable `i` for both loops a bug?",
            a: "The inner loop reinitialization and update overrides the outer loop's value, leading to logic errors or infinite loops."
          },
          {
            q: `What is the role of \`System.out.println()\` inside the outer loop body but after the inner loop?`,
            a: "It breaks the console line to move printing to a new row before the outer loop advances."
          }
        ],
        coding: [
          {
            q: "Write a coordinate grid generator.",
            desc: "Write code using nested loops to output coordinates from (1,1) to (2,3) in the format \"(row,col) \".",
            solCode: `public class GridCoords {
    public static void main(String[] args) {
        for (int r = 1; r <= 2; r++) {
            for (int c = 1; c <= 3; c++) {
                System.out.print("(" + r + "," + c + ") ");
            }
        }
    }
}`,
            solOut: "(1,1) (1,2) (1,3) (2,1) (2,2) (2,3) ",
            solExp: "Outer loop runs twice for row coordinate, inner runs three times for column coordinate."
          },
          {
            q: "Create a character grid printing block.",
            desc: "Print a 3x3 grid of pound characters (#) using nested loops.",
            solCode: `public class PoundGrid {
    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print("# ");
            }
            System.out.println();
        }
    }
}`,
            solOut: `# # # 
# # # 
# # # `,
            solExp: "Iterates row (0, 1, 2) and columns, outputting pound markers and breaks lines."
          },
          {
            q: "Print combined value pairs.",
            desc: "Given limit = 3. Print pairs of numbers where the sum is less than or equal to 3. (1,1), (1,2), (2,1).",
            solCode: `public class SumLimitPairs {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (i + j <= 3) {
                    System.out.print("(" + i + "," + j + ") ");
                }
            }
        }
    }
}`,
            solOut: "(1,1) (1,2) (2,1) ",
            solExp: "Filters coordinates inside nested loops, outputting only values satisfying criteria."
          }
        ],
        predict: [
          {
            code: `public class NestPredictOne {
    public static void main(String[] args) {
        for (int i = 1; i <= 2; i++) {
            for (int j = 1; j <= 2; j++) {
                if (i == j) System.out.print("X ");
                else System.out.print("O ");
            }
        }
    }
}`,
            a: "X O O X ",
            explain: "Checks equality: (1,1)->X, (1,2)->O, (2,1)->O, (2,2)->X. Output printed sequentially."
          },
          {
            code: `public class NestLoopBreak {
    public static void main(String[] args) {
        for (int i = 1; i <= 2; i++) {
            for (int j = 1; j <= 3; j++) {
                if (j == 2) break; // Exits which loop?
                System.out.print(j + " ");
            }
        }
    }
}`,
            a: "1 1 ",
            explain: "The `break` statement only exits the innermost loop (j-loop). So for each i, the j-loop prints 1, hits 2, breaks to the outer loop. Thus, it prints 1 twice."
          }
        ],
        debug: [
          {
            q: "Fix the infinite loop bug inside this nested loops grid printing system.",
            code: `public class ShadowBug {
    public static void main(String[] args) {
        // Goal: print a 2x2 grid of coordinates
        for (int i = 1; i <= 2; i++) {
            for (int i = 1; i <= 2; i++) { // Bug here!
                System.out.print(i + " ");
            }
            System.out.println();
        }
    }
}`,
            bug: "Variable Redeclaration and Shadowing. The inner loop re-declares and updates `i` instead of using a separate variable (like `j`), which corrupts the outer loop's termination check.",
            solCode: `public class ShadowBug {
    public static void main(String[] args) {
        for (int i = 1; i <= 2; i++) {
            for (int j = 1; j <= 2; j++) { // Variable renamed to j
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "module",
    num: 7,
    title: "Pattern Programming",
    desc: "Unclutter loop logic by drawing shapes. Master star, number, and pyramid patterns. Develop dry run tracking matrices and learn standard debugging protocols for nested logic loops.",
    topics: ["Star Patterns (Square & Triangles)", "Number Patterns", "Pyramid Patterns (Space Padding)", "Dry Run Techniques for Matrix Patterns"]
  },
  {
    type: "slide",
    module: 7,
    topic: "Star Patterns (Square & Triangles)",
    body: [
      {
        k: "intro",
        p: "Pattern programming is the playground of nested loops. We use nested loops to print star patterns (like triangles or squares) on the text console, aligning character output on coordinate rows and columns."
      },
      {
        k: "why",
        p: "Patterns do not have a direct business purpose (no bank needs star triangles). However, they are the **ultimate tool** to build your logical thinking. They force you to visualize row-column coordinates and map math relations directly into nested loops, which is critical when processing tables, images, or matrices later."
      },
      {
        k: "def",
        p: "Pattern programming uses an outer loop to control the vertical rows ($r$) and an inner loop to control characters printed on horizontal columns ($c$), evaluating relationships between $r$ and $c$ to choose when to print symbols."
      },
      {
        k: "heading",
        text: "The Logic of Right-Angled Triangles"
      },
      {
        k: "explain",
        p: `To print a right-angled triangle of stars:
- Row 1 (\$r=1\$): prints 1 star (\$c \le 1\$)
- Row 2 (\$r=2\$): prints 2 stars (\$c \le 2\$)
- Row 3 (\$r=3\$): prints 3 stars (\$c \le 3\$)
- **Rule**: The inner loop limit is bounded by the outer loop variable: \`col <= row\`.`
      },
      {
        k: "code",
        file: "TrianglePattern.java",
        code: `public class TrianglePattern {
    public static void main(String[] args) {
        int n = 3; // Maximum height
        
        for (int r = 1; r <= n; r++) {
            // Inner loop limit is bound to row index
            for (int c = 1; c <= r; c++) {
                System.out.print("* ");
            }
            System.out.println(); // Next line after row completes
        }
    }
}`,
        output: `* 
* * 
* * * `,
        lines: [
          {
            n: 7,
            code: "for (int c = 1; c <= r; c++) {",
            explain: "Inner loop runs up to the current row index r. If r=2, c runs 1 and 2, printing 2 stars."
          },
          {
            n: 9,
            code: `System.out.println();`,
            explain: "Pushes execution cursor to a new row before the outer loop advances."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          `Using \`System.out.println("* ");\` inside the inner loop instead of \`System.out.print("* ");\`. This prints stars vertically instead of horizontally.`,
          "Incorrect loop boundaries (e.g. starting loop at 0 but checking `<=` height, producing an extra row of empty space)."
        ]
      },
      {
        k: "best",
        items: [
          "Draw the grid on paper first. Identify row and column indices starting from 1 for easier math formulation.",
          "State the relationship rule in English (e.g. \"print stars equal to row index\") before typing code."
        ]
      },
      {
        k: "summary",
        items: ["Outer loop controls row index; inner loop prints columns.", "Right triangle: inner loop limit matches outer loop variable.", "print() outputs symbols horizontally; println() creates new rows."]
      },
      {
        k: "compare",
        title: "Increasing vs Decreasing Patterns",
        a: {
          head: "Increasing Triangles",
          rows: ["Stars count grows with row index (1, 2, 3, ...).", "Inner loop runs up to outer index (j <= i).", "Aligned left default.", "Example: Left-aligned right triangle."]
        },
        b: {
          head: "Decreasing Triangles",
          rows: ["Stars count shrinks with row index (N, N-1, N-2, ...).", "Inner loop decreases relative to index (j <= N - i).", "Requires subtracting row index from total height.", "Example: Inverted right triangle."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What controls the number of stars printed in a row?",
            a: "The termination condition of the inner loop."
          },
          {
            q: `Why do we use \`System.out.print\` instead of \`println\` in the inner loop?`,
            a: "To print the stars next to each other on the same line."
          },
          {
            q: "What is the relationship rule for a square pattern of size N?",
            a: "The inner loop always runs exactly N times, independent of the outer loop index."
          },
          {
            q: "What is the relationship rule for an inverted right-angled triangle?",
            a: "The number of stars decreases as the row number increases, e.g. `col <= (N - row + 1)`."
          },
          {
            q: "How many total stars print in a right-angled triangle of height 5?",
            a: "15 stars ($1 + 2 + 3 + 4 + 5$)."
          }
        ],
        coding: [
          {
            q: "Write a square star printing block.",
            desc: "Print a 3x3 square grid of asterisks (*) using nested loops.",
            solCode: `public class SquareStars {
    public static void main(String[] args) {
        int size = 3;
        for (int r = 1; r <= size; r++) {
            for (int c = 1; c <= size; c++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
            solOut: `* * * 
* * * 
* * * `,
            solExp: "Both loops run up to size value independently, printing a square grid."
          },
          {
            q: "Create an inverted triangle star pattern.",
            desc: "Print an inverted triangle of height 3. Row 1 has 3 stars, Row 2 has 2 stars, Row 3 has 1 star.",
            solCode: `public class InvertedTriangle {
    public static void main(String[] args) {
        int n = 3;
        for (int r = 1; r <= n; r++) {
            // formula: loop runs (n - r + 1) times
            for (int c = 1; c <= (n - r + 1); c++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
            solOut: `* * * 
* * 
* `,
            solExp: "Uses a subtraction formula to decrease inner loop cycles as row increases."
          },
          {
            q: "Build custom rectangular banner outline.",
            desc: "Print a 2x4 rectangle of plus signs (+).",
            solCode: `public class PlusRect {
    public static void main(String[] args) {
        for (int r = 1; r <= 2; r++) {
            for (int c = 1; c <= 4; c++) {
                System.out.print("+ ");
            }
            System.out.println();
        }
    }
}`,
            solOut: `+ + + + 
+ + + + `,
            solExp: "Outer loop runs twice for height, inner runs four times for width."
          }
        ],
        predict: [
          {
            code: `public class PatternPredictOne {
    public static void main(String[] args) {
        for (int r = 1; r <= 3; r++) {
            for (int c = 1; c <= 2; c++) {
                System.out.print("\$");
            }
            System.out.print("-");
        }
    }
}`,
            a: "$$-$$-$$-",
            explain: "Each row loop (running 3 times) prints \"$$\" via inner loop, and then prints \"-\" before advancing. No newlines are printed, so they stay joined."
          },
          {
            code: `public class PatternPredictTwo {
    public static void main(String[] args) {
        int n = 3;
        for (int r = 1; r <= n; r++) {
            for (int c = r; c <= n; c++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
            a: `* * * 
* * 
* `,
            explain: "By initializing the inner loop counter `c = r`, the loop executes `n - r + 1` times: row 1 starts at 1 (3 prints), row 2 starts at 2 (2 prints), row 3 starts at 3 (1 print)."
          }
        ],
        debug: [
          {
            q: "Correct this code that prints stars vertically instead of in a triangle grid.",
            code: `public class VertTriangle {
    public static void main(String[] args) {
        for (int r = 1; r <= 3; r++) {
            for (int c = 1; c <= r; c++) {
                System.out.println("*"); // Bug here
            }
        }
    }
}`,
            bug: `The print statement in the inner loop is \`System.out.println("*")\`, which appends a newline to every star, rendering them as a single vertical column.`,
            solCode: `public class VertTriangle {
    public static void main(String[] args) {
        for (int r = 1; r <= 3; r++) {
            for (int c = 1; c <= r; c++) {
                System.out.print("* "); // Fixed with print()
            }
            System.out.println(); // Creates row breaks
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 7,
    topic: "Number Patterns",
    body: [
      {
        k: "intro",
        p: "Instead of printing asterisks, we can print digits that change depending on our loop variables. This reveals the inner workings of our loops."
      },
      {
        k: "why",
        p: "Printing numbers makes it clear what values the row and column variables hold at any exact moment. It helps debug logic because you can visually trace coordinate counters on the screen."
      },
      {
        k: "def",
        p: "A **Number Pattern** is a nested loop output where the printed characters are variables representing loop indexes ($r$ or $c$) or an accumulator value incremented during iterations."
      },
      {
        k: "heading",
        text: "Common Number Pattern Rules"
      },
      {
        k: "table",
        head: [
          "Goal Pattern",
          "Outer Loop (row)",
          "Inner Loop (col)",
          `System.out.print Target`,
          "Result (Height=3)"
        ],
        rows: [
          [
            "Print Row Value",
            "r = 1 to N",
            "c = 1 to r",
            "Print `r` (row index)",
            "1 <br> 2 2 <br> 3 3 3"
          ],
          [
            "Print Col Value",
            "r = 1 to N",
            "c = 1 to r",
            "Print `c` (column index)",
            "1 <br> 1 2 <br> 1 2 3"
          ],
          [
            "Floyd's Triangle",
            "r = 1 to N",
            "c = 1 to r",
            "Print `val++` (accumulator)",
            "1 <br> 2 3 <br> 4 5 6"
          ]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Floyd's Triangle Generator"
      },
      {
        k: "code",
        file: "FloydsTriangle.java",
        code: `public class FloydsTriangle {
    public static void main(String[] args) {
        int n = 3;
        int val = 1; // Accumulator initialized outside loops
        
        for (int r = 1; r <= n; r++) {
            for (int c = 1; c <= r; c++) {
                System.out.print(val + " ");
                val++; // Increments after each print
            }
            System.out.println();
        }
    }
}`,
        output: `1 
2 3 
4 5 6 `,
        lines: [
          {
            n: 4,
            code: "int val = 1;",
            explain: "Global counter. Declared outside the loops so it is not reset on new rows."
          },
          {
            n: 8,
            code: `System.out.print(val + " ");`,
            explain: "Prints the current value of the counter."
          },
          {
            n: 9,
            code: "val++;",
            explain: "Increments the counter. Evaluates sequentially: 1, 2, 3, 4, 5, 6."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Declaring the accumulator variable `val` inside the outer loop. This causes the value to reset to its initial value at the start of every row.",
          "Confusing when to print the row variable `r` versus the column variable `c`."
        ]
      },
      {
        k: "best",
        items: [
          "If the pattern prints repeated numbers on the same row, print the row variable `r`.",
          "If the numbers count up along the columns, print the column variable `c`."
        ]
      },
      {
        k: "summary",
        items: ["Number patterns print loop counter values or accumulators.", "Printing row index `r` yields horizontal repeated stripes.", "Accumulator variables must be declared outside the nested loops."]
      },
      {
        k: "compare",
        title: "Printing Row Variable (i) vs Column (j)",
        a: {
          head: "Printing Row Variable (i)",
          rows: ["Outputs same value across an entire horizontal row.", "Changes vertically as loop shifts to next line.", "Example output line 2: \"2 2 2 2\"", "Driven by outer index value."]
        },
        b: {
          head: "Printing Column Variable (j)",
          rows: ["Outputs changing values across single lines.", "Identical sequence repeated on every line.", "Example output line 2: \"1 2 3 4\"", "Driven by inner index value."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "How do you print a pattern where each row contains the same number?",
            a: "Print the outer loop variable (`row`) inside the inner loop."
          },
          {
            q: "How do you print a pattern where columns count up (e.g. 1 2 3)?",
            a: "Print the inner loop variable (`col`) inside the inner loop."
          },
          {
            q: "What is Floyd's Triangle?",
            a: "A right-angled triangle pattern of consecutive numbers starting from 1."
          },
          {
            q: "Where should you initialize the counter for Floyd's Triangle?",
            a: "Before the outer loop starts."
          },
          {
            q: "What is printed in row 4, column 1 of a column-based triangle pattern?",
            a: "`1` (since column index starts at 1)."
          }
        ],
        coding: [
          {
            q: "Write a row-number triangle program.",
            desc: "Print a triangle of height 3 where each row contains its row number (Row 1 has \"1\", Row 2 has \"2 2\", etc.).",
            solCode: `public class RowTriangle {
    public static void main(String[] args) {
        int n = 3;
        for (int r = 1; r <= n; r++) {
            for (int c = 1; c <= r; c++) {
                System.out.print(r + " ");
            }
            System.out.println();
        }
    }
}`,
            solOut: `1 
2 2 
3 3 3 `,
            solExp: "Prints outer row loop variable r to repeat the row number across columns."
          },
          {
            q: "Create a column-number triangle.",
            desc: "Print a triangle of height 3 where columns count up (Row 1: \"1\", Row 2: \"1 2\", Row 3: \"1 2 3\").",
            solCode: `public class ColTriangle {
    public static void main(String[] args) {
        int n = 3;
        for (int r = 1; r <= n; r++) {
            for (int c = 1; c <= r; c++) {
                System.out.print(c + " ");
            }
            System.out.println();
        }
    }
}`,
            solOut: `1 
1 2 
1 2 3 `,
            solExp: "Prints inner column loop variable c which resets to 1 at the start of each row."
          },
          {
            q: "Write a binary digit pattern loop.",
            desc: "Print a 2x3 grid alternating \"1 0 1\" on each row.",
            solCode: `public class BinaryGrid {
    public static void main(String[] args) {
        for (int r = 1; r <= 2; r++) {
            for (int c = 1; c <= 3; c++) {
                // alternate parity
                System.out.print((c % 2) + " ");
            }
            System.out.println();
        }
    }
}`,
            solOut: `1 0 1 
1 0 1 `,
            solExp: "Uses column index modulo 2 to alternate printing 1 and 0."
          }
        ],
        predict: [
          {
            code: `public class NumPredictOne {
    public static void main(String[] args) {
        for (int r = 1; r <= 2; r++) {
            int val = 5;
            for (int c = 1; c <= 2; c++) {
                System.out.print(val + " ");
                val++;
            }
        }
    }
}`,
            a: "5 6 5 6 ",
            explain: "The accumulator variable val is declared inside the outer loop. This means it is reset to 5 at the start of row 1 and row 2, outputting 5 6 twice."
          },
          {
            code: `public class NumPredictTwo {
    public static void main(String[] args) {
        for (int r = 3; r >= 1; r--) {
            for (int c = 1; c <= r; c++) {
                System.out.print(r + " ");
            }
            System.out.println();
        }
    }
}`,
            a: `3 3 3 
2 2 
1 
`,
            explain: "Outer loop counts down (3, 2, 1). The inner loop limit is row value, printing row value: row 3 prints \"3 3 3\", row 2 prints \"2 2\", row 1 prints \"1\"."
          }
        ],
        debug: [
          {
            q: "Why does this Floyd's triangle reset its count to 1 on every row?",
            code: `public class ResetFloyd {
    public static void main(String[] args) {
        for (int r = 1; r <= 3; r++) {
            int val = 1; // Bug here
            for (int c = 1; c <= r; c++) {
                System.out.print(val + " ");
                val++;
            }
            System.out.println();
        }
    }
}`,
            bug: "Variable initialization scope. `val` is declared inside the outer loop, resetting it to 1 on each row iteration.",
            solCode: `public class ResetFloyd {
    public static void main(String[] args) {
        int val = 1; // Fixed: moved outside the outer loop
        for (int r = 1; r <= 3; r++) {
            for (int c = 1; c <= r; c++) {
                System.out.print(val + " ");
                val++;
            }
            System.out.println();
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 7,
    topic: "Pyramid Patterns (Space Padding)",
    body: [
      {
        k: "intro",
        p: "A **Pyramid Pattern** is a centered triangle of stars. To print centered shapes, we need to print **blank spaces** before printing the stars on each row."
      },
      {
        k: "why",
        p: "If you only print stars, they will default to aligning to the left wall (right-angled triangle). Centering shapes requires calculating a space padding formula for each row. This introduces multi-variable calculations inside loop hierarchies."
      },
      {
        k: "def",
        p: "A Pyramid Pattern requires three loops: an outer loop for rows, a first inner loop to print descending blank spaces (`\" \"`), and a second inner loop to print ascending stars (`\"* \"`)."
      },
      {
        k: "heading",
        text: "The Pyramid Coordinate Grid (Height = 3)"
      },
      {
        k: "table",
        head: [
          "Row (r)",
          "Space Count (N - r)",
          "Spaces printed",
          "Star Count (r)",
          "Stars printed",
          "Line Result"
        ],
        rows: [
          [
            "1",
            "3 - 1 = 2",
            "`_ _`",
            "1",
            "`*`",
            "`  *`"
          ],
          [
            "2",
            "3 - 2 = 1",
            "`_`",
            "2",
            "`* *`",
            "` * *`"
          ],
          [
            "3",
            "3 - 3 = 0",
            "None",
            "3",
            "`* * *`",
            "`* * *`"
          ]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Centered Pyramid Generator"
      },
      {
        k: "code",
        file: "PyramidPattern.java",
        code: `public class PyramidPattern {
    public static void main(String[] args) {
        int n = 3;
        
        for (int r = 1; r <= n; r++) {
            // Loop 1: Print leading spaces
            for (int s = 1; s <= (n - r); s++) {
                System.out.print(" "); // single space padding
            }
            
            // Loop 2: Print stars with trailing space
            for (int c = 1; c <= r; c++) {
                System.out.print("* ");
            }
            
            System.out.println();
        }
    }
}`,
        output: `  * 
 * * 
* * * `,
        lines: [
          {
            n: 7,
            code: "for (int s = 1; s <= (n - r); s++) {",
            explain: "Spaces loop: runs s = 1 to (N - row). If height N=3 and row r=1, it prints 2 spaces."
          },
          {
            n: 12,
            code: "for (int c = 1; c <= r; c++) {",
            explain: "Stars loop: prints r stars separated by spaces, which completes the centered alignment."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Confusing space characters `\" \"` (used for padding) with empty strings `\"\"` (which print nothing, leading to left-alignment).",
          "Mismatching space character widths. If your star is printed as `\"* \"` (star + space), the padding space must match that width to align the columns correctly."
        ]
      },
      {
        k: "best",
        items: [
          "Verify the space formula by drawing columns on a grid: columns with symbols + columns with padding always sum up to the matrix width.",
          "Keep space loop variable names descriptive (like `s` or `spaces`) to separate them from column variable `c`."
        ]
      },
      {
        k: "summary",
        items: ["Pyramids require leading space padding loops before printing symbols.", "Space formula on row $r$ for height $N$ is typically $N - r$.", "Align symbol padding width to space character width."]
      },
      {
        k: "compare",
        title: "Space Loop vs Star Loop",
        a: {
          head: "Space Loop",
          rows: ["Prints blank spaces before stars on each row.", "Pre-pads text cursor to align shapes.", "Decreases as row number increases.", "Syntax: printing \" \" strings."]
        },
        b: {
          head: "Star Loop",
          rows: ["Prints output characters after space pads.", "Forms the visual triangle output shapes.", "Increases by odd intervals (1, 3, 5, ...) per line.", "Syntax: printing \"*\" strings."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "How many loop blocks reside inside the outer row loop of a pyramid pattern?",
            a: "Two loops: one for printing spaces and one for printing stars."
          },
          {
            q: "What is the formula to calculate spaces for row r in a pyramid of height N?",
            a: "`N - r`"
          },
          {
            q: `Why is it important to use \`System.out.print\` instead of \`println\` in the space loop?`,
            a: "Spaces must be printed on the same line before the stars are printed."
          },
          {
            q: "How does printing `\"* \"` (with a space) compare to printing `\"*\"` (no space)?",
            a: "Printing `\"* \"` (with space) automatically centers the pattern because of column alignment. Printing `\"*\"` results in a shifted, non-standard shape."
          },
          {
            q: "How many spaces are printed on the very last row of a pyramid?",
            a: "Zero spaces ($N - N = 0$)."
          }
        ],
        coding: [
          {
            q: "Write a space-padded inverted triangle program.",
            desc: "Print an inverted triangle of height 3 with spaces: Row 1: \"  * \", Row 2: \" * * \", Row 3: \"* * *\"... wait, inverted: Row 1: \"* * *\", Row 2: \" * *\", Row 3: \"  *\".",
            solCode: `public class InvertedPyramid {
    public static void main(String[] args) {
        int n = 3;
        for (int r = 1; r <= n; r++) {
            // print leading spaces: 0 on row 1, 1 on row 2, 2 on row 3
            for (int s = 1; s < r; s++) {
                System.out.print(" ");
            }
            // print stars: 3 on row 1, 2 on row 2, 1 on row 3
            for (int c = r; c <= n; c++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
            solOut: `* * * 
 * * 
  * `,
            solExp: "Calculates spaces: increases row-by-row (s < r), while stars decrease (c = r to n)."
          },
          {
            q: "Create a numbered pyramid.",
            desc: "Print a pyramid of height 3 where stars are replaced with the row index: Row 1: \"  1 \", Row 2: \" 2 2 \", Row 3: \"3 3 3\".",
            solCode: `public class NumberPyramid {
    public static void main(String[] args) {
        int n = 3;
        for (int r = 1; r <= n; r++) {
            for (int s = 1; s <= n - r; s++) {
                System.out.print(" ");
            }
            for (int c = 1; c <= r; c++) {
                System.out.print(r + " ");
            }
            System.out.println();
        }
    }
}`,
            solOut: `  1 
 2 2 
3 3 3 `,
            solExp: "Inserts space padding first, then prints row variable r with space separator."
          },
          {
            q: "Print double space padded triangle.",
            desc: "Print two rows: Row 1: \" _ _ * \", Row 2: \" * * * \". Use characters for padding visibility.",
            solCode: `public class PaddingOutline {
    public static void main(String[] args) {
        for (int r = 1; r <= 2; r++) {
            for (int s = 1; s <= 2 - r; s++) {
                System.out.print("- ");
            }
            for (int c = 1; c <= (2 * r - 1); c++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
            solOut: `- * 
* * * `,
            solExp: "Prints a dash indicator to outline spacer padding columns visually."
          }
        ],
        predict: [
          {
            code: `public class SpacePredict {
    public static void main(String[] args) {
        int n = 2;
        for (int r = 1; r <= n; r++) {
            for (int s = 1; s <= n - r; s++) {
                System.out.print("-");
            }
            System.out.println("*");
        }
    }
}`,
            a: `-*
*`,
            explain: "Row 1 prints 1 dash and 1 star then newline: \"-*\". Row 2 prints 0 dashes and 1 star then newline: \"*\"."
          },
          {
            code: `public class DoubleStarPredict {
    public static void main(String[] args) {
        int n = 2;
        for (int r = 1; r <= n; r++) {
            for (int c = 1; c <= r; c++) {
                System.out.print("**");
            }
            System.out.println();
        }
    }
}`,
            a: `**
****
`,
            explain: "Prints two stars per inner iteration, doubling the horizontal width."
          }
        ],
        debug: [
          {
            q: "Why does this code print a left-aligned triangle instead of a centered pyramid?",
            code: `public class FlatPyramid {
    public static void main(String[] args) {
        int n = 3;
        for (int r = 1; r <= n; r++) {
            for (int s = 1; s <= n - r; s++) {
                System.out.print(""); // Bug here
            }
            for (int c = 1; c <= r; c++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
            bug: `The space print statement on line 6 is \`System.out.print("")\`, which prints an empty string (no characters), failing to apply any spacing.`,
            solCode: `public class FlatPyramid {
    public static void main(String[] args) {
        int n = 3;
        for (int r = 1; r <= n; r++) {
            for (int s = 1; s <= n - r; s++) {
                System.out.print(" "); // Fixed with space character " "
            }
            for (int c = 1; c <= r; c++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 7,
    topic: "Dry Run Techniques for Matrix Patterns",
    body: [
      {
        k: "intro",
        p: "To master advanced patterns, you cannot guess the loop limits. You need a systematic way to trace matrix coordinate states. This is the **Matrix Trace Table** method."
      },
      {
        k: "why",
        p: "When designing complex shapes (like diamonds, hollow squares, or diagonals), the conditions depend on coordinate math formulas (e.g. print star if `row == col` or `row + col == size + 1`). Tracing variables on a matrix grid is the only way to establish these conditions and fix bugs."
      },
      {
        k: "def",
        p: "A **Matrix Trace Table** is a grid representation tracking the state of loop variables for every row/column cell intersection, determining the truth values of conditional boundary expressions."
      },
      {
        k: "heading",
        text: "Hollow Square Grid Mapping (Size = 3)"
      },
      {
        k: "explain",
        p: `To print a hollow square: print stars on the border (Row 1, Row 3, Column 1, Column 3), and spaces in the middle.
- **Condition Rule**: \`r == 1 || r == size || c == 1 || c == size\`.`
      },
      {
        k: "table",
        head: [
          "Cell Coordinate (r, c)",
          "r == 1 || r == 3 (Border row?)",
          "c == 1 || c == 3 (Border col?)",
          "Is Border? (OR check)",
          "Printed Symbol"
        ],
        rows: [
          [
            "(1, 1)",
            "True (r=1)",
            "True (c=1)",
            "True",
            "`*`"
          ],
          [
            "(1, 2)",
            "True (r=1)",
            "False",
            "True",
            "`*`"
          ],
          [
            "(2, 1)",
            "False",
            "True (c=1)",
            "True",
            "`*`"
          ],
          [
            "(2, 2)",
            "False",
            "False",
            "False",
            "` ` (Space)"
          ],
          [
            "(3, 3)",
            "True (r=3)",
            "True (c=3)",
            "True",
            "`*`"
          ]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Hollow Square Pattern"
      },
      {
        k: "code",
        file: "HollowSquare.java",
        code: `public class HollowSquare {
    public static void main(String[] args) {
        int size = 3;
        
        for (int r = 1; r <= size; r++) {
            for (int c = 1; c <= size; c++) {
                // Check if the cell is on the boundary
                if (r == 1 || r == size || c == 1 || c == size) {
                    System.out.print("* ");
                } else {
                    System.out.print("  "); // Print 2 spaces to match "* " width
                }
            }
            System.out.println();
        }
    }
}`,
        output: `* * * 
*   * 
* * * `,
        lines: [
          {
            n: 8,
            code: "if (r == 1 || r == size || c == 1 || c == size) {",
            explain: "Tests boundary coordinates. If cell is on row 1, row 3, col 1, or col 3, it prints a star."
          },
          {
            n: 10,
            code: `} else {`,
            explain: "For cell (2,2), all conditions are false, so it enters this else block and prints spaces."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Using a single space `\" \"` in the empty else block. Because the star is printed as `\"* \"` (two characters), print two spaces `\"  \"` for the empty cells, or the right border will collapse inward.",
          "Incorrect logical operators: using `&&` instead of `||` for boundary checks, resulting in only the corners printing."
        ]
      },
      {
        k: "best",
        items: [
          "Draw the coordinates of the target pattern on grid paper first to find the geometric formula.",
          "Verify that the printed space character width matches the printed symbol character width exactly."
        ]
      },
      {
        k: "summary",
        items: ["Hollow shapes check cell coordinates against boundary conditions.", "Use logical OR (`||`) to combine boundary conditions.", "Match empty spaces padding width to symbol print width."]
      },
      {
        k: "compare",
        title: "Mental Walkthrough vs Structured T-Chart",
        a: {
          head: "Mental Dry Run",
          rows: ["Tracing loop values purely in mind.", "Highly prone to indexing updates and misses.", "Quick for small loops, crashes on nested blocks.", "No record to refer back to."]
        },
        b: {
          head: "Structured T-Chart Trace",
          rows: ["Writing columns for variables i, j, and printed values.", "Chronologically updates cell values step-by-step.", "Guarantees correct output tracing.", "Perfect for debugging off-by-one errors."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What relational expression matches the left boundary of a pattern grid?",
            a: "`col == 1`"
          },
          {
            q: "What relational expression matches the bottom boundary?",
            a: "`row == size`"
          },
          {
            q: "What is the correct logical operator to combine hollow boundary conditions?",
            a: "Logical OR (`||`)."
          },
          {
            q: "What happens if you print a single space `\" \"` instead of double spaces `\"  \"` for hollow cells?",
            a: "The alignment of the right border collapse because the space is narrower than the `\"* \"` symbol."
          },
          {
            q: "What coordinate formula defines the main diagonal (top-left to bottom-right)?",
            a: "`row == col`"
          }
        ],
        coding: [
          {
            q: "Write a diagonal star printer.",
            desc: "Print a 3x3 grid with stars only on the main diagonal (where row == col) and spaces elsewhere.",
            solCode: `public class DiagonalStars {
    public static void main(String[] args) {
        int size = 3;
        for (int r = 1; r <= size; r++) {
            for (int c = 1; c <= size; c++) {
                if (r == c) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}`,
            solOut: `*     
  *   
    * `,
            solExp: "Checks if row index equals column index, printing a star on diagonal coordinates."
          },
          {
            q: "Create cross pattern grid.",
            desc: "Print a 3x3 grid with stars on both diagonals. (row == col OR row + col == size + 1).",
            solCode: `public class CrossPattern {
    public static void main(String[] args) {
        int size = 3;
        for (int r = 1; r <= size; r++) {
            for (int c = 1; c <= size; c++) {
                if (r == c || r + c == size + 1) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}`,
            solOut: `*   * 
  *   
*   * `,
            solExp: "Uses mathematical coordinates to check primary diagonal (r==c) and secondary diagonal (r+c == 4)."
          },
          {
            q: "Print grid columns boundary.",
            desc: "Print a 3x3 grid with stars only on the left and right columns (col == 1 OR col == 3).",
            solCode: `public class ColBound {
    public static void main(String[] args) {
        int size = 3;
        for (int r = 1; r <= size; r++) {
            for (int c = 1; c <= size; c++) {
                if (c == 1 || c == size) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}`,
            solOut: `*   * 
*   * 
*   * `,
            solExp: "Isolates column boundaries to print parallel vertical lines."
          }
        ],
        predict: [
          {
            code: `public class DiagonalPredict {
    public static void main(String[] args) {
        int n = 3;
        for (int r = 1; r <= n; r++) {
            for (int c = 1; c <= n; c++) {
                if (r + c == 4) System.out.print("* ");
                else System.out.print(". ");
            }
            System.out.println();
        }
    }
}`,
            a: `. . * 
. * . 
* . . 
`,
            explain: "Evaluates the anti-diagonal line (row + col == 4): prints star on (1,3), (2,2), and (3,1), and dots elsewhere."
          },
          {
            code: `public class HollowPredict {
    public static void main(String[] args) {
        int size = 2;
        for (int r = 1; r <= size; r++) {
            for (int c = 1; c <= size; c++) {
                if (r == 1) System.out.print("*");
            }
        }
    }
}`,
            a: "**",
            explain: "Prints stars only when row is 1. The inner loop runs twice for row 1 (printing \"**\"). For row 2, the condition `r == 1` is false, printing nothing."
          }
        ],
        debug: [
          {
            q: "Why does this hollow square design collapse its right boundary in console outputs?",
            code: `public class HollowCollapse {
    public static void main(String[] args) {
        int size = 3;
        for (int r = 1; r <= size; r++) {
            for (int c = 1; c <= size; c++) {
                if (r == 1 || r == size || c == 1 || c == size) {
                    System.out.print("* ");
                } else {
                    System.out.print(" "); // Bug here
                }
            }
            System.out.println();
        }
    }
}`,
            bug: "The else block prints a single space `\" \"` instead of double spaces `\"  \"`. Since the star is printed with a space `\"* \"` (two characters wide), printing only one space for empty cells makes columns misalign and shifts the right wall leftwards.",
            solCode: `public class HollowCollapse {
    public static void main(String[] args) {
        int size = 3;
        for (int r = 1; r <= size; r++) {
            for (int c = 1; c <= size; c++) {
                if (r == 1 || r == size || c == 1 || c == size) {
                    System.out.print("* ");
                } else {
                    System.out.print("  "); // Fixed with double space "  "
                }
            }
            System.out.println();
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "module",
    num: 8,
    title: "Methods & Modularity",
    desc: "Break your programs into reusable blocks. Learn method declarations, parameters vs. arguments, Java call-by-value rules, return statements, scope hierarchies, and overloading.",
    topics: [
      "Declaring & Calling Methods",
      "Parameters & Arguments (Call-by-Value)",
      "Return Types & The return Keyword",
      "Introduction to Method Overloading",
      "Variable Scope (Local vs. Class level)"
    ]
  },
  {
    type: "slide",
    module: 8,
    topic: "Declaring & Calling Methods",
    body: [
      {
        k: "intro",
        p: "A **Method** (or function) is a self-contained block of code designed to perform a specific task. Instead of writing the same logic repeatedly, you group it in a method and run it whenever needed."
      },
      {
        k: "why",
        p: "Without methods, files quickly become thousands of lines of disorganized code. Finding bugs becomes a nightmare, and reusing code is impossible. Methods introduce **Modularity**—writing a feature once, naming it clearly, and invoking it by name from other parts of the application."
      },
      {
        k: "def",
        p: "A **Method** is a block of instructions that only runs when called. The **declaration** defines the method name, return type, access modifiers, and parameters, while a **call** executes the method body."
      },
      {
        k: "heading",
        text: "Method Structure Breakdown"
      },
      {
        k: "syntax",
        code: `public static void myMethodName() {
    // Instructions to run
    System.out.println("Hello from the method!");
}`
      },
      {
        k: "bul",
        items: [
          "**public**: Access modifier (can be called from other classes).",
          "**static**: Means the method belongs to the class itself, allowing it to be called directly without creating an object.",
          "**void**: Return type, indicating the method does not return any data back to the caller.",
          "**myMethodName()**: Unique name of the method followed by parentheses. Parentheses are empty if it takes no inputs."
        ]
      },
      {
        k: "heading",
        text: "Code Example: Greeting Generator"
      },
      {
        k: "code",
        file: "MethodGreeting.java",
        code: `public class MethodGreeting {
    // Method declaration
    public static void greetUser() {
        System.out.println("Welcome to the Java Workshop!");
        System.out.println("Let's write some modular code!");
    }
    
    public static void main(String[] args) {
        System.out.println("Start of Main Program.");
        
        greetUser(); // First Method Call
        greetUser(); // Second Method Call (Reusability!)
        
        System.out.println("End of Main Program.");
    }
}`,
        output: `Start of Main Program.
Welcome to the Java Workshop!
Let's write some modular code!
Welcome to the Java Workshop!
Let's write some modular code!
End of Main Program.`,
        lines: [
          {
            n: 3,
            code: "public static void greetUser() {",
            explain: "Declares the method named greetUser. It yields void (no return value)."
          },
          {
            n: 11,
            code: "greetUser();",
            explain: "Invokes the method. Java pauses main execution, jumps to line 3, runs lines 4-5, and then returns to main at line 12."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Declaring a method **inside** the body of another method (e.g. putting a method inside `main`). Methods must be declared as independent siblings inside the class brackets.",
          "Forgetting parentheses during method invocation (e.g. writing `greetUser;` instead of `greetUser();`)."
        ]
      },
      {
        k: "best",
        items: [
          "Name methods using camelCase starting with a verb (e.g., `calculateTotal()`, `validatePassword()`, `printHeader()`).",
          "Keep methods focused: a method should do exactly one thing well (Single Responsibility Principle)."
        ]
      },
      {
        k: "summary",
        items: [
          "Methods group instructions under a named block for reuse.",
          "Methods must be declared directly inside class blocks, not inside other methods.",
          "Called using method name followed by parentheses."
        ]
      },
      {
        k: "compare",
        title: "Method Declaration vs Method Call",
        a: {
          head: "Method Declaration",
          rows: ["Defines return type, name, scope, and instructions.", "Acts as a blueprint—does not execute code immediately.", "Lives inside class boundary but outside main method.", `Syntax: public static void printHello() { ... }`]
        },
        b: {
          head: "Method Call",
          rows: ["Executes a declared method's instructions.", "Passes actual arguments to method parameters.", "Transfers CPU execution thread to method code.", "Syntax: printHello();"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is method modularity?",
            a: "Breaking down a large program into separate, independent, named blocks of code that handle specific sub-tasks."
          },
          {
            q: "Can you declare a method inside the main method in Java?",
            a: "No, declaring methods inside other methods is a syntax error in Java."
          },
          {
            q: "What does the void keyword mean in a method header?",
            a: "It indicates that the method does not return any value back to the code that called it."
          },
          {
            q: "Why is static used for helper methods in early Java programs?",
            a: "It allows the method to be called directly from the static `main` method without needing to instantiate an object of the class."
          },
          {
            q: "What character completes a method call statement?",
            a: "A semicolon (e.g. `myMethod();`)."
          }
        ],
        coding: [
          {
            q: "Write a banner printer method.",
            desc: "Create class BannerApp. Define static method `printLine` which prints a row of dashes \"---\". Call it three times from main.",
            solCode: `public class BannerApp {
    public static void printLine() {
        System.out.println("--------------------");
    }
    
    public static void main(String[] args) {
        printLine();
        System.out.println(" Java Workshop ");
        printLine();
    }
}`,
            solOut: `--------------------
 Java Workshop 
--------------------`,
            solExp: "Defines printLine helper and calls it before and after printing a workshop banner."
          },
          {
            q: "Implement warning alert system.",
            desc: "Define warning method `printAlert` outputting \"System Alert: Action Needed!\". Invoke it twice from main.",
            solCode: `public class WarningApp {
    public static void printAlert() {
        System.out.println("System Alert: Action Needed!");
    }
    
    public static void main(String[] args) {
        printAlert();
        printAlert();
    }
}`,
            solOut: `System Alert: Action Needed!
System Alert: Action Needed!`,
            solExp: "Declares printAlert returning void and executes it in duplicate fashion from main entry."
          },
          {
            q: "Create application exit reporter.",
            desc: "Define void method `reportExit` printing \"Process Completed Successfully\". Invoke it at the end of main.",
            solCode: `public class ExitReport {
    public static void reportExit() {
        System.out.println("Process Completed Successfully");
    }
    public static void main(String[] args) {
        System.out.println("Working...");
        reportExit();
    }
}`,
            solOut: `Working...
Process Completed Successfully`,
            solExp: "Separates completion notifications into a dedicated method block called as the final execution step."
          }
        ],
        predict: [
          {
            code: `public class CallPredict {
    public static void printMessage() {
        System.out.print("A ");
    }
    public static void main(String[] args) {
        System.out.print("B ");
        printMessage();
        System.out.print("C ");
    }
}`,
            a: "B A C ",
            explain: "The main method starts executing. Prints \"B \". Then calls `printMessage()`, which prints \"A \". Control returns to main, printing \"C \"."
          },
          {
            code: `public class RecursionPredict {
    public static void callMe() {
        System.out.print("Call ");
    }
    public static void main(String[] args) {
        // Nothing here!
    }
}`,
            a: "",
            explain: "Although the method `callMe()` is declared, the main method is empty. Since `callMe()` is never called, it never executes, printing nothing."
          }
        ],
        debug: [
          {
            q: "Identify the structural syntax bug that prevents compile in this class.",
            code: `public class InnerMethodBug {
    public static void main(String[] args) {
        System.out.println("Starting Program");
        
        public static void printTask() { // Bug here!
            System.out.println("Task Completed");
        }
    }
}`,
            bug: "The method `printTask()` is declared inside the body of the `main` method, which is illegal. Java methods must be declared as distinct siblings directly inside the class.",
            solCode: `public class InnerMethodBug {
    public static void printTask() { // Fixed: moved outside main
        System.out.println("Task Completed");
    }
    
    public static void main(String[] args) {
        System.out.println("Starting Program");
        printTask(); // Invoked legally
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 8,
    topic: "Parameters & Arguments (Call-by-Value)",
    body: [
      {
        k: "intro",
        p: "Methods are much more powerful when we can feed them inputs. We pass data into methods using **Parameters** and **Arguments**."
      },
      {
        k: "why",
        p: "A method that only prints the same string is rigid. By giving it parameters, we can customize its behavior. For example, a method `greet(String name)` can print a personalized message for any name we pass to it, increasing flexibility."
      },
      {
        k: "def",
        p: "A **Parameter** is a variable declared in the method definition header. An **Argument** is the actual value passed into the method parameter during invocation. Java strictly uses **Call-by-Value**: it passes a copy of the argument's value, leaving the original variable unchanged."
      },
      {
        k: "heading",
        text: "Java Call-by-Value Visualized"
      },
      {
        k: "explain",
        p: "When you pass a primitive variable to a method, Java copies the value of that variable to a new memory stack block for the parameter. If the method modifies the parameter inside its body, **only the copy is changed**—the original variable in `main` remains untouched."
      },
      {
        k: "heading",
        text: "Code Example: Value Copy Verification"
      },
      {
        k: "code",
        file: "CallByValue.java",
        code: `public class CallByValue {
    // x is a parameter (holds a copy of the argument)
    public static void modifyValue(int x) {
        System.out.println("Inside method (start): x = " + x);
        x = 99; // Modifies the parameter copy
        System.out.println("Inside method (end): x = " + x);
    }
    
    public static void main(String[] args) {
        int original = 10;
        System.out.println("Before call: original = " + original);
        
        modifyValue(original); // Passes the value 10 (argument)
        
        System.out.println("After call: original = " + original);
    }
}`,
        output: `Before call: original = 10
Inside method (start): x = 10
Inside method (end): x = 99
After call: original = 10`,
        lines: [
          {
            n: 3,
            code: "public static void modifyValue(int x) {",
            explain: "Declares parameter x. When called, a copy of original (10) is loaded into x."
          },
          {
            n: 5,
            code: "x = 99;",
            explain: "Reassigns local variable x. This has absolutely no effect on the original variable in the main method."
          },
          {
            n: 13,
            code: "modifyValue(original);",
            explain: "Invokes the method, copying original's value (10) as the argument."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Confusing parameters and arguments. Parameter is the blueprint definition; argument is the concrete value.",
          "Argument Mismatch: Passing inputs in the wrong order or with incorrect data types (e.g. passing a string to a method expecting an int)."
        ]
      },
      {
        k: "best",
        items: ["Declare descriptive parameter names that state what input is expected.", "Verify that arguments match the parameter data types exactly in order."]
      },
      {
        k: "summary",
        items: [
          "Parameters are variables in method signatures; arguments are passed values.",
          "Java is strictly call-by-value.",
          "Modifying primitive parameters inside a method does not alter original caller variables."
        ]
      },
      {
        k: "compare",
        title: "Formal Parameters vs Actual Arguments",
        a: {
          head: "Formal Parameters",
          rows: ["Variables defined in method signature header.", "Act as placeholders for incoming caller values.", "Live only inside local method scope.", "Example: void greet(String name)"]
        },
        b: {
          head: "Actual Arguments",
          rows: ["Real values passed into method during call.", "Must match formal parameter types in order.", "Values are copied into parameter memory.", "Example: greet(\"Alice\")"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is a parameter?",
            a: "A variable placeholder defined in a method header signature to receive input values."
          },
          {
            q: "What is an argument?",
            a: "The actual value passed to a method when it is invoked."
          },
          {
            q: "What does call-by-value mean?",
            a: "The program passes a copy of the argument variable's value into the parameter, not the variable's memory address."
          },
          {
            q: "If you modify a primitive variable inside a method, does the original variable in main change?",
            a: "No, because only a copy of the value was modified."
          },
          {
            q: "Can a method accept multiple parameters of different types?",
            a: "Yes, parameters are separated by commas in the method header (e.g. `void myMethod(int a, String b)`)."
          }
        ],
        coding: [
          {
            q: "Write a customized greeting printer.",
            desc: "Define method `greetUser` with parameter String name and int age. Print \"Hello, name! You are age years old.\" Call with your name and age.",
            solCode: `public class CustomGreet {
    public static void greetUser(String name, int age) {
        System.out.println("Hello, " + name + "! You are " + age + " years old.");
    }
    
    public static void main(String[] args) {
        greetUser("Geet", 20); // Arguments passed
    }
}`,
            solOut: "Hello, Geet! You are 20 years old.",
            solExp: "Declares double parameters (String, int) and maps variables sequentially in print statements."
          },
          {
            q: "Implement score multiplier calculator.",
            desc: "Define static method `printProduct` taking parameters `int factor1` and `int factor2`. Print product of both values.",
            solCode: `public class ProductApp {
    public static void printProduct(int f1, int f2) {
        System.out.println("Product: " + (f1 * f2));
    }
    public static void main(String[] args) {
        printProduct(5, 6);
    }
}`,
            solOut: "Product: 30",
            solExp: "Calculates the product of parameters and prints it within the method scope."
          },
          {
            q: "Create temperature converter output.",
            desc: "Define void method `toCelsius` with parameter `double fahrenheit`. Calculate and print `(fahrenheit - 32) * 5/9`. Run with 95.0.",
            solCode: `public class TempConvert {
    public static void toCelsius(double f) {
        double c = (f - 32) * 5.0 / 9.0;
        System.out.println("Celsius: " + c);
    }
    public static void main(String[] args) {
        toCelsius(95.0);
    }
}`,
            solOut: "Celsius: 35.0",
            solExp: "Converts double input parameter into Celsius using math operations."
          }
        ],
        predict: [
          {
            code: `public class SwapPredict {
    public static void swap(int a, int b) {
        int temp = a;
        a = b;
        b = temp;
    }
    public static void main(String[] args) {
        int x = 5, y = 10;
        swap(x, y);
        System.out.println("x=" + x + " y=" + y);
    }
}`,
            a: "x=5 y=10",
            explain: "Due to Java's call-by-value rule, variables `a` and `b` inside `swap` are copies of `x` and `y`. Modifying the copies does not affect `x` and `y` in the `main` stack frame."
          },
          {
            code: `public class MathPredict {
    public static void addOne(int score) {
        score = score + 1;
    }
    public static void main(String[] args) {
        int val = 10;
        addOne(val);
        System.out.println(val);
    }
}`,
            a: "10",
            explain: "The parameter `score` is a copy of `val`'s value (10). Incrementing `score` does not modify `val`."
          }
        ],
        debug: [
          {
            q: "Why does this code throw compile errors, and how do you align the types?",
            code: `public class ArgTypeBug {
    public static void checkStatus(int count) {
        System.out.println("Count: " + count);
    }
    public static void main(String[] args) {
        // Goal: print status
        checkStatus("5"); // Bug here
    }
}`,
            bug: "Argument Mismatch. The parameter of `checkStatus` is declared as an integer, but the argument passed in main is a String literal `\"5\"`.",
            solCode: `public class ArgTypeBug {
    public static void checkStatus(int count) {
        System.out.println("Count: " + count);
    }
    public static void main(String[] args) {
        checkStatus(5); // Fixed: passed integer 5 instead of String
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 8,
    topic: "Return Types & The return Keyword",
    body: [
      {
        k: "intro",
        p: "Methods can do calculations and send a result back to the caller. We do this by specifying a **Return Type** and using the **return** keyword."
      },
      {
        k: "why",
        p: "A method that only prints results directly to the console is limited. A math application needs to calculate values (like sales tax or compound interest) and pass them back so they can be saved, formatted, or used in further calculations. Returning values makes methods highly composable."
      },
      {
        k: "def",
        p: "A **Return Type** is the data type specified in the method signature before the name, declaring what kind of value the method will return. The **return statement** stops executing the method and passes the resulting value back to the caller."
      },
      {
        k: "heading",
        text: "Void vs Typed Methods comparison"
      },
      {
        k: "compare",
        a: {
          title: "void Return Type",
          items: ["Does NOT return any data.", "Uses `void` keyword in header.", "No `return` statement needed (or use blank `return;` to exit early).", "Cannot assign its output to variables."]
        },
        b: {
          title: "Non-void Return Type (int, double, etc.)",
          items: ["Must return a value of the specified type.", "Requires `return value;` statement.", "Compiler throws error if return is missing.", "Result can be stored in variables or printed."]
        }
      },
      {
        k: "heading",
        text: "Code Example: Area Calculator"
      },
      {
        k: "code",
        file: "AreaCalculator.java",
        code: `public class AreaCalculator {
    // Returns double, not void
    public static double calculateArea(double width, double height) {
        double area = width * height;
        return area; // Sends result back to caller
    }
    
    public static void main(String[] args) {
        // Capture the return value in a variable
        double totalArea = calculateArea(5.0, 4.0);
        
        System.out.println("Total Area: " + totalArea + " sq meters");
        System.out.println("Double Area: " + (totalArea * 2));
    }
}`,
        output: `Total Area: 20.0 sq meters
Double Area: 40.0`,
        lines: [
          {
            n: 3,
            code: "public static double calculateArea(...) {",
            explain: "Declares double return type. This method MUST return a double."
          },
          {
            n: 5,
            code: "return area;",
            explain: "Evaluates value of area (20.0) and returns it. Execution exits this method."
          },
          {
            n: 10,
            code: "double totalArea = calculateArea(5.0, 4.0);",
            explain: "Executes method. The result 20.0 is substituted for the method call and stored in totalArea."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Forgetting the `return` statement in a non-void method, leading to compile-time \"missing return statement\" errors.",
          "Writing code after a `return` statement. This code is unreachable and will trigger compiler errors."
        ]
      },
      {
        k: "best",
        items: [
          "Ensure every possible execution path in conditional structures (`if-else`) has a return statement in non-void methods.",
          "Do not return values if you only want to perform an action (use `void` instead)."
        ]
      },
      {
        k: "summary",
        items: ["Return types determine the kind of data returned to callers.", "return keyword terminates methods and delivers values.", "Unreachable statements are illegal after return."]
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What happens when Java encounters a return statement inside a method?",
            a: "Execution of the method stops immediately, and control returns to the code that called it along with the specified value."
          },
          {
            q: "Can a method return multiple values in Java?",
            a: "No, a method can return at most one value (to return multiple values, you must return an array, object, or collection)."
          },
          {
            q: "What is the \"missing return statement\" error?",
            a: "An error thrown when a method declares a return type (non-void) but fails to execute a return statement on one or more execution branches."
          },
          {
            q: "Can you use a return statement inside a void method?",
            a: "Yes, you can write `return;` (without a value) to exit the method early."
          },
          {
            q: "What is the return type of a method that calculates average double grades?",
            a: "`double`."
          }
        ],
        coding: [
          {
            q: "Write a sum calculator method.",
            desc: "Define method `add` taking `int a` and `int b`. Return sum. Save and print returned value from main.",
            solCode: `public class AddApp {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        int result = add(12, 13);
        System.out.println("Result: " + result);
    }
}`,
            solOut: "Result: 25",
            solExp: "Defines helper returning integer sum and captures the result directly in main execution context."
          },
          {
            q: "Implement maximum search helper.",
            desc: "Define method `max` taking double values `x` and `y`. Return the larger value using if-else.",
            solCode: `public class MaxApp {
    public static double max(double x, double y) {
        if (x > y) {
            return x;
        } else {
            return y;
        }
    }
    public static void main(String[] args) {
        double winner = max(14.5, 9.8);
        System.out.println("Max: " + winner);
    }
}`,
            solOut: "Max: 14.5",
            solExp: "Uses branching statements to guarantee a return on both execution paths."
          },
          {
            q: "Create a threshold indicator.",
            desc: "Define method `isPassing` taking `int score`. Return true if score >= 50, else return false.",
            solCode: `public class PassApp {
    public static boolean isPassing(int score) {
        return score >= 50; // returns boolean directly
    }
    public static void main(String[] args) {
        boolean passed = isPassing(72);
        System.out.println("Passed: " + passed);
    }
}`,
            solOut: "Passed: true",
            solExp: "Evaluates comparison condition directly as return output of boolean type."
          }
        ],
        predict: [
          {
            code: `public class ReturnPredictOne {
    public static int doubleNum(int x) {
        return x * 2;
    }
    public static void main(String[] args) {
        System.out.println(doubleNum(doubleNum(5)));
    }
}`,
            a: "20",
            explain: "Evaluates inside-out: `doubleNum(5)` returns 10. The expression becomes `doubleNum(10)` which returns 20, which is printed."
          },
          {
            code: `public class ReturnPredictTwo {
    public static int checkValue(int val) {
        if (val > 10) {
            return 1;
        }
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(checkValue(5));
    }
}`,
            a: "0",
            explain: "For input 5, `val > 10` is false. Java bypasses the if block and executes the final return statement, returning 0."
          }
        ],
        debug: [
          {
            q: "Why does this method trigger a compile error, and how do you fix it?",
            code: `public class CheckResultBug {
    public static int scoreStatus(int score) {
        if (score >= 50) {
            return 1; // Return on true
        }
        // Goal: Return 0 on fail
    }
    public static void main(String[] args) {
        System.out.println(scoreStatus(45));
    }
}`,
            bug: "Missing return statement. If `score >= 50` is false (e.g. score is 45), the code path completes without hitting a return statement, raising a compile error.",
            solCode: `public class CheckResultBug {
    public static int scoreStatus(int score) {
        if (score >= 50) {
            return 1;
        }
        return 0; // Fixed: default return path added
    }
    public static void main(String[] args) {
        System.out.println(scoreStatus(45));
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 8,
    topic: "Introduction to Method Overloading",
    body: [
      {
        k: "intro",
        p: "In Java, two or more methods can have the **exact same name** as long as they have different parameter lists. This feature is called **Method Overloading**."
      },
      {
        k: "why",
        p: "Imagine writing helper methods to calculate sums. You would have to name them: `addInts(int a, int b)`, `addDoubles(double a, double b)`, `addThreeInts(int a, int b, int c)`. Remembering all these distinct names is tedious. Overloading lets us name all of them `add()`, and the compiler automatically selects the correct method based on the arguments we pass."
      },
      {
        k: "def",
        p: "**Method Overloading** is defining multiple methods in the same class with the same name but unique **signatures**. A method signature consists of the method name and the number, type, and order of its parameters."
      },
      {
        k: "heading",
        text: "How Java Resolves Overloaded Signatures"
      },
      {
        k: "bul",
        items: [
          "**Allowed differences**: Different parameter count (e.g. 2 variables vs 3 variables), or different parameter types (e.g. `int` vs `double`).",
          "**Forbidden differences**: Modifying *only* the return type or access modifier. (e.g. declaring `public static int add(int a, int b)` and `public static double add(int a, int b)` in the same class is a compilation error because signatures match)."
        ]
      },
      {
        k: "heading",
        text: "Code Example: Overloaded Calculator"
      },
      {
        k: "code",
        file: "OverloadDemo.java",
        code: `public class OverloadDemo {
    // Signature 1: add(int, int)
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Signature 2: add(double, double)
    public static double add(double a, double b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        // Compiler maps this call to Signature 1
        System.out.println("Int sum: " + add(5, 10));
        
        // Compiler maps this call to Signature 2
        System.out.println("Double sum: " + add(2.5, 3.5));
    }
}`,
        output: `Int sum: 15
Double sum: 6.0`,
        lines: [
          {
            n: 3,
            code: "public static int add(int a, int b) {",
            explain: "Declares method add accepting two integers."
          },
          {
            n: 8,
            code: "public static double add(double a, double b) {",
            explain: "Declares method add accepting two doubles. Valid overload: parameter types differ."
          },
          {
            n: 14,
            code: "add(5, 10)",
            explain: "Uses integer parameters, invoking the first method."
          },
          {
            n: 17,
            code: "add(2.5, 3.5)",
            explain: "Uses double parameters, invoking the second method."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Declaring two methods with matching parameters but different return types (e.g. one returns `int`, other returns `void`). This raises duplicate method compile errors.",
          "Ambiguous method invocation: passing values that could map to multiple overloaded methods because of implicit type conversions (like passing float to method with double vs long parameter)."
        ]
      },
      {
        k: "best",
        items: [
          "Overload methods only when they perform closely related logical actions on different data types.",
          "Keep method logic consistent across all overloaded versions to avoid confusing other developers."
        ]
      },
      {
        k: "summary",
        items: ["Overloaded methods share names but use unique parameters.", "Identified by parameter number, types, and sequence order.", "Differentiating methods based only on return type is illegal."]
      },
      {
        k: "compare",
        title: "Method Overloading vs Distinct Names",
        a: {
          head: "Method Overloading",
          rows: ["Same method name, different parameter configurations.", "Simplifies class API interfaces for callers.", "Parameters must differ in count, type, or order.", "Example: draw(int x) vs draw(String text)"]
        },
        b: {
          head: "Distinct Method Names",
          rows: ["Different names for distinct behavior.", "Forces callers to remember multiple method names.", "Required if signatures are identical.", "Example: drawCircle() vs drawSquare()"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What constitutes a method signature in Java?",
            a: "The method name and its parameter list (number, types, and order of parameters)."
          },
          {
            q: "Can you overload a method by changing only the return type?",
            a: "No, this causes a compilation error (duplicate method signature)."
          },
          {
            q: "How does the compiler know which overloaded method to execute?",
            a: "It matches the number and types of arguments in the method call to the closest matching signature."
          },
          {
            q: "Can overloaded methods have different access modifiers (e.g. public vs private)?",
            a: "Yes, but the parameter lists must still be different to overload."
          },
          {
            q: "Which statement demonstrates an overload: `void print(int x)` and `void print(String s)`?",
            a: "Both. They share names but accept different data types."
          }
        ],
        coding: [
          {
            q: "Write overloaded area methods.",
            desc: "Define `area` method with parameter `int side` (returns square area). Overload `area` with `int w` and `int h` (returns rectangle area).",
            solCode: `public class AreaApp {
    public static int area(int side) {
        return side * side;
    }
    
    public static int area(int w, int h) {
        return w * h;
    }
    
    public static void main(String[] args) {
        System.out.println("Square: " + area(4));
        System.out.println("Rectangle: " + area(4, 5));
    }
}`,
            solOut: `Square: 16
Rectangle: 20`,
            solExp: "Defines two method signatures sharing names. Overloaded routing executes based on argument count."
          },
          {
            q: "Implement overloaded string printers.",
            desc: "Define `display` taking String. Overload `display` taking double. Call both methods with appropriate values.",
            solCode: `public class DisplayApp {
    public static void display(String msg) {
        System.out.println("Msg: " + msg);
    }
    public static void display(double val) {
        System.out.println("Val: " + val);
    }
    public static void main(String[] args) {
        display("Java");
        display(45.6);
    }
}`,
            solOut: `Msg: Java
Val: 45.6`,
            solExp: "Overloads methods by parameter type, sorting print logic depending on data types."
          },
          {
            q: "Create overloaded sign calculators.",
            desc: "Define `sign` taking `int x` (returns String sign). Overload `sign` taking `double x`. Check both.",
            solCode: `public class SignApp {
    public static String sign(int x) {
        return x >= 0 ? "Positive Int" : "Negative Int";
    }
    public static String sign(double x) {
        return x >= 0 ? "Positive Double" : "Negative Double";
    }
    public static void main(String[] args) {
        System.out.println(sign(-5));
        System.out.println(sign(3.2));
    }
}`,
            solOut: `Negative Int
Positive Double`,
            solExp: "Uses ternary operators inside overloaded methods to resolve sign strings."
          }
        ],
        predict: [
          {
            code: `public class OverloadPredictOne {
    public static void test(int x) {
        System.out.print("int ");
    }
    public static void test(double x) {
        System.out.print("double ");
    }
    public static void main(String[] args) {
        test(5);
        test(5.0);
    }
}`,
            a: "int double ",
            explain: "The literal `5` is an integer, so the compiler calls `test(int)`. The literal `5.0` is a double, invoking `test(double)`."
          },
          {
            code: `public class OverloadPredictTwo {
    public static void process(int a, double b) {
        System.out.print("A ");
    }
    public static void process(double a, int b) {
        System.out.print("B ");
    }
    public static void main(String[] args) {
        process(2, 3.5);
        process(3.5, 2);
    }
}`,
            a: "A B ",
            explain: "Matches parameters in sequence order: `process(2, 3.5)` maps to `(int, double)` (A). `process(3.5, 2)` maps to `(double, int)` (B)."
          }
        ],
        debug: [
          {
            q: "Fix the compilation issue on this duplicate class configuration.",
            code: `public class OverloadTypeBug {
    public static int calc(int a) {
        return a * 2;
    }
    // Goal: return double for same inputs
    public static double calc(int a) { // Bug here
        return (double) a * 2.0;
    }
    public static void main(String[] args) {
        System.out.println(calc(5));
    }
}`,
            bug: "Duplicate method signature. Both methods are named `calc` and accept a single `int` parameter. Modifying only the return type (`int` vs `double`) does not overload the method and causes a compilation error.",
            solCode: `public class OverloadTypeBug {
    public static int calc(int a) {
        return a * 2;
    }
    // Fixed by changing parameter type from int to double
    public static double calc(double a) {
        return a * 2.0;
    }
    public static void main(String[] args) {
        System.out.println(calc(5)); // calls calc(int)
        System.out.println(calc(5.0)); // calls calc(double)
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 8,
    topic: "Variable Scope (Local vs. Class level)",
    body: [
      {
        k: "intro",
        p: "Not all variables are accessible from everywhere. The region of code where a variable can be seen and used is called its **Scope**."
      },
      {
        k: "why",
        p: "If all variables were visible everywhere, your program would become chaotic. One method could accidentally overwrite a variable being used by another method, introducing hard-to-find bugs. Variable scoping keeps code clean, secure, and isolated."
      },
      {
        k: "def",
        p: `In Java, **Variable Scope** defines where a variable exists in memory. Variables declared inside a block or method are **Local Variables** and are only visible inside that specific block boundary \`{}\`.`
      },
      {
        k: "heading",
        text: "Scope levels in Java"
      },
      {
        k: "bul",
        items: [
          "**Class variables (Fields)**: Declared directly inside the class but outside any methods. Visible to all methods in the class.",
          "**Local variables**: Declared inside a method. Only visible inside that method. Created when the method is called and destroyed when it exits.",
          `**Block variables**: Declared inside control loops or condition blocks (like \`for\` loop headers). Only visible inside that block \`{}\`.`
        ]
      },
      {
        k: "heading",
        text: "Code Example: Variable Scope Traces"
      },
      {
        k: "code",
        file: "ScopeApp.java",
        code: `public class ScopeApp {
    // Class-level variable (Field)
    public static int classVal = 100;
    
    public static void testMethod() {
        int localVar = 50; // Local variable
        System.out.println("Class value: " + classVal); // Legal
        System.out.println("Local value: " + localVar); // Legal
    }
    
    public static void main(String[] args) {
        testMethod();
        
        System.out.println("Class value in main: " + classVal); // Legal
        // System.out.println("Local value: " + localVar); // Compile Error!
    }
}`,
        output: `Class value: 100
Local value: 50
Class value in main: 100`,
        lines: [
          {
            n: 3,
            code: "public static int classVal = 100;",
            explain: "Class variable. Visible throughout the class."
          },
          {
            n: 6,
            code: "int localVar = 50;",
            explain: "Local variable inside testMethod. Main cannot access this."
          },
          {
            n: 14,
            code: `// System.out.println("Local value: " + localVar);`,
            explain: "Uncommenting this causes a compile-time \"cannot find symbol\" error because localVar does not exist inside main."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Trying to read a loop control variable (like `i`) after the loop block has finished (e.g. printing `i` outside the `for` loop body).",
          "Shadowing: Declaring a local variable with the exact same name as a class variable, which can lead to modifying the wrong variable by mistake."
        ]
      },
      {
        k: "best",
        items: [
          "Keep variable scope as narrow as possible. Declare variables in the smallest block where they are needed.",
          "Avoid using class-level fields for temporary scratch values inside methods."
        ]
      },
      {
        k: "summary",
        items: ["Scope restricts variable access to defined code boundaries.", "Local variables are destroyed when their method exits.", `Braces \`{}\` define the scope boundaries for blocks.`]
      },
      {
        k: "compare",
        title: "Local Variables vs Instance Variables",
        a: {
          head: "Local Variables",
          rows: ["Declared inside a method or loop scope block.", "Destroyed once method block terminates.", "Must be manually initialized before read.", "Stored in Stack memory frame."]
        },
        b: {
          head: "Instance Variables (Class fields)",
          rows: ["Declared inside class body, outside methods.", "Persists as long as parent Object lives in heap.", "Automatically initialized to default values (0, null).", "Stored in Heap memory with Object."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is variable scope?",
            a: "The region of code where a variable is defined and can be accessed."
          },
          {
            q: "Where are local variables declared?",
            a: "Inside a method body or block."
          },
          {
            q: "When is a local variable created and destroyed?",
            a: "Created when the method starts execution, and destroyed (cleared from the stack frame) when the method returns."
          },
          {
            q: "Can two different methods have local variables with the same name?",
            a: "Yes, they exist in completely separate memory stack frames."
          },
          {
            q: "What happens if you try to access a variable outside its declared scope?",
            a: "The compiler throws a \"cannot find symbol\" error."
          }
        ],
        coding: [
          {
            q: "Create a block scope verification program.",
            desc: "Write code declaring `int outer = 10`. Inside an `if(true)` block, declare `int inner = 20`. Sum them inside the block, then try to print `inner` outside the block and comment it.",
            solCode: `public class BlockScope {
    public static void main(String[] args) {
        int outer = 10;
        if (true) {
            int inner = 20;
            System.out.println("Sum: " + (outer + inner));
        }
        // System.out.println(inner); // Illegal: inner is out of scope
    }
}`,
            solOut: "Sum: 30",
            solExp: "Demonstrates block-scoping where variables inside checks are destroyed on block exit."
          },
          {
            q: "Implement class variable tally.",
            desc: "Declare class-level static int `tally = 0`. Create helper method `incrementTally` adding 1. Call twice from main and print.",
            solCode: `public class TallyApp {
    public static int tally = 0; // Class variable
    
    public static void incrementTally() {
        tally++;
    }
    
    public static void main(String[] args) {
        incrementTally();
        incrementTally();
        System.out.println("Tally: " + tally);
    }
}`,
            solOut: "Tally: 2",
            solExp: "Uses class-level variable accessible from both helper methods and main scope."
          },
          {
            q: "Demonstrate loop counter scope limits.",
            desc: "Write a loop counting 1 to 3. Attempt to print count outside the loop. Comment the illegal code.",
            solCode: `public class LoopScope {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            System.out.print(i + " ");
        }
        // System.out.println(i); // Illegal: i is local to the for loop header
    }
}`,
            solOut: "1 2 3 ",
            solExp: "Declares variable i inside loop header, restricting its life cycle to loop duration."
          }
        ],
        predict: [
          {
            code: `public class ScopePredictOne {
    public static int x = 5;
    public static void main(String[] args) {
        int x = 10; // Shadows class variable x
        System.out.println(x);
    }
}`,
            a: "10",
            explain: "The local variable `x` shadows the class variable `x`. When printing, Java resolves to the nearest scope (the local variable), outputting 10."
          },
          {
            code: `public class ScopePredictTwo {
    public static void main(String[] args) {
        int val = 5;
        {
            int val2 = 10;
            val = val + val2;
        }
        System.out.println(val);
    }
}`,
            a: "15",
            explain: "The nested block has access to variables in parent scopes. It adds `val2` (10) to `val` (5), making `val` 15. The block exits, destroying `val2`, but `val` persists."
          }
        ],
        debug: [
          {
            q: "Explain and resolve the compile error in this counter average display.",
            code: `public class AverageScopeBug {
    public static void calculateAvg() {
        int total = 200;
        int count = 4;
        double avg = (double) total / count;
    }
    public static void main(String[] args) {
        calculateAvg();
        // Goal: print average result
        System.out.println("Average: " + avg); // Bug here!
    }
}`,
            bug: "Variable scope error. `avg` is a local variable declared inside `calculateAvg()`. It does not exist inside the scope of the `main` method. To resolve this, return the calculated average from the method.",
            solCode: `public class AverageScopeBug {
    // Fixed: return double average
    public static double calculateAvg() {
        int total = 200;
        int count = 4;
        return (double) total / count;
    }
    public static void main(String[] args) {
        double avg = calculateAvg(); // Capture result in main scope
        System.out.println("Average: " + avg); // Legal print
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "module",
    num: 9,
    title: "Arrays & Data Collections",
    desc: "Store lists of data. Master array declarations, memory indices, iteration loops, array Scanner inputs, linear operations (sum/min/max), and multi-dimensional matrices.",
    topics: [
      "Introduction to Arrays",
      "Declaring & Creating Arrays",
      "Array Traversal (Loops & length)",
      "User Input & Basic Array Operations",
      "Introduction to 2D Arrays (Matrices)"
    ]
  },
  {
    type: "slide",
    module: 9,
    topic: "Introduction to Arrays",
    body: [
      {
        k: "intro",
        p: "What if you need to store the scores of 30 students? Declaring 30 separate variables (`score1`, `score2`, etc.) is tedious. An **Array** lets you store multiple values of the same type inside a single named container."
      },
      {
        k: "why",
        p: "Using separate variables for lists makes searching, sorting, or calculating averages impossible to write dynamically. An array groups related data items together in computer memory, allowing you to access any item by a number called an **Index**."
      },
      {
        k: "def",
        p: `An **Array** is a fixed-size, contiguous block of computer memory designed to store multiple values of the same data type. Each element in the array is accessed via its zero-based index (\$0\$ to \$\text{length} - 1\$).`
      },
      {
        k: "heading",
        text: "Contiguous Array Memory Model"
      },
      {
        k: "stack",
        cells: [
          {
            addr: "Index 0",
            val: "85 (Element 1)"
          },
          {
            addr: "Index 1",
            val: "90 (Element 2)"
          },
          {
            addr: "Index 2",
            val: "78 (Element 3)"
          },
          {
            addr: "Index 3",
            val: "92 (Element 4)"
          }
        ]
      },
      {
        k: "explain",
        p: "Because arrays are stored side-by-side (contiguously) in memory, the computer can jump directly to any index instantly. The size of the array is **fixed** when it is created and cannot be changed later."
      },
      {
        k: "heading",
        text: "Code Example: Simple Array Retrieval"
      },
      {
        k: "code",
        file: "ArrayIntro.java",
        code: `public class ArrayIntro {
    public static void main(String[] args) {
        // Declaring and initializing an array in one line
        int[] scores = {85, 90, 78, 92};
        
        System.out.println("First score (Index 0): " + scores[0]);
        System.out.println("Second score (Index 1): " + scores[1]);
        
        // Modifying an element
        scores[2] = 88;
        System.out.println("Modified third score (Index 2): " + scores[2]);
    }
}`,
        output: `First score (Index 0): 85
Second score (Index 1): 90
Modified third score (Index 2): 88`,
        lines: [
          {
            n: 4,
            code: `int[] scores = {85, 90, 78, 92};`,
            explain: "Declares an array variable scores and initializes it with 4 elements."
          },
          {
            n: 6,
            code: "scores[0]",
            explain: "Retrieves the element at index 0 (85). Indexing is zero-based."
          },
          {
            n: 10,
            code: "scores[2] = 88;",
            explain: "Overwrites the value at index 2 (replacing 78 with 88)."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Assuming index begins at 1. If an array has 5 elements, accessing `scores[5]` throws an **ArrayIndexOutOfBoundsException** because legal indexes are 0, 1, 2, 3, and 4.",
          "Assuming you can change array sizes. If you create an array of size 5, you cannot expand it to size 6 later (you must create a new, larger array)."
        ]
      },
      {
        k: "best",
        items: ["Always remember: the last legal index in an array is `length - 1`.", "Use arrays when you have a fixed number of related items of the same data type."]
      },
      {
        k: "summary",
        items: ["Arrays store multiple elements of matching types in contiguous memory.", "Accessed using zero-based indices (0 to length-1).", "Array sizes are fixed upon creation."]
      },
      {
        k: "compare",
        title: "Array Variable vs Array Element",
        a: {
          head: "Array Variable",
          rows: ["Stores the heap reference pointer address.", "Declared using brackets syntax (int[] nums).", "Points to entire sequence object.", "Points to null if uninitialized."]
        },
        b: {
          head: "Array Element",
          rows: ["Individual values stored at index offsets.", "Accessed using square brackets (nums[3]).", "Behaves like a regular variable of base type.", "Throws IndexOutOfBoundsException if index is invalid."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is an array index?",
            a: "A numeric offset starting from 0 that identifies the position of an element in an array."
          },
          {
            q: "What is the index of the first element in any array?",
            a: "`0`."
          },
          {
            q: "If an array has 10 elements, what is the index of the last element?",
            a: "`9` (which is $10 - 1$)."
          },
          {
            q: "What exception is thrown when accessing an index like `-1`?",
            a: "`ArrayIndexOutOfBoundsException`."
          },
          {
            q: "Can you store both integers and strings in a single standard array in Java?",
            a: "No, arrays are homogeneous; they can only store elements of the same declared data type."
          }
        ],
        coding: [
          {
            q: "Write a manual array retrieval program.",
            desc: "Initialize an array of doubles: 1.2, 3.4, 5.6. Print the sum of the first and last element.",
            solCode: `public class ArraySumInit {
    public static void main(String[] args) {
        double[] vals = {1.2, 3.4, 5.6};
        double sum = vals[0] + vals[2];
        System.out.println("Sum: " + sum);
    }
}`,
            solOut: "Sum: 6.8",
            solExp: "Loads double array values and extracts values at boundaries (index 0 and 2) to compute sum."
          },
          {
            q: "Implement weekday initializer.",
            desc: "Create an array of Strings containing: \"Mon\", \"Tue\", \"Wed\". Print the element at index 1.",
            solCode: `public class WeekdayApp {
    public static void main(String[] args) {
        String[] days = {"Mon", "Tue", "Wed"};
        System.out.println("Day: " + days[1]);
    }
}`,
            solOut: "Day: Tue",
            solExp: "Declares string array collection and retrieves Tue matching index position 1."
          },
          {
            q: "Create age modifier simulation.",
            desc: "Initialize int array containing: 15, 20. Update the second element to 21 and print both elements.",
            solCode: `public class AgeUpdate {
    public static void main(String[] args) {
        int[] ages = {15, 20};
        ages[1] = 21; // Update index 1
        System.out.println(ages[0] + " " + ages[1]);
    }
}`,
            solOut: "15 21",
            solExp: "Alters cell value at index 1 and prints elements separated by spaces."
          }
        ],
        predict: [
          {
            code: `public class ArrayPredictOne {
    public static void main(String[] args) {
        int[] nums = {10, 20, 30};
        System.out.println(nums[0] + nums[1] * nums[2]);
    }
}`,
            a: "610",
            explain: "Evaluates: `nums[0]` is 10, `nums[1]` is 20, `nums[2]` is 30. Following math precedence: `20 * 30 = 600`. Then `10 + 600 = 610`."
          },
          {
            code: `public class OutOfBoundsPredict {
    public static void main(String[] args) {
        int[] data = {5, 6};
        System.out.println(data[2]);
    }
}`,
            a: "ArrayIndexOutOfBoundsException",
            explain: "The array `data` has length 2. Legal indices are 0 and 1. Accessing `data[2]` causes an ArrayIndexOutOfBoundsException error at runtime."
          }
        ],
        debug: [
          {
            q: "Explain the runtime exception in this script and correct it.",
            code: `public class InitBoundBug {
    public static void main(String[] args) {
        int[] values = {1, 2, 3};
        // Goal: print the last element (3)
        System.out.println(values[3]); // Bug here
    }
}`,
            bug: "ArrayIndexOutOfBoundsException. The array contains 3 elements, so the maximum legal index is 2. Index 3 is out of bounds.",
            solCode: `public class InitBoundBug {
    public static void main(String[] args) {
        int[] values = {1, 2, 3};
        // Fixed: accessed index 2 (the last element)
        System.out.println(values[2]);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 9,
    topic: "Declaring & Creating Arrays",
    body: [
      {
        k: "intro",
        p: "In Java, there are two ways to create an array: with default initial values (using the `new` keyword), or with explicit values (using an array literal)."
      },
      {
        k: "why",
        p: "Often, you do not know the data values when writing code (e.g. you need to read 10 test scores from a user later). The `new` keyword allocates memory slots for a specific size, initializing elements to default values (like 0 for integers), which we can populate later."
      },
      {
        k: "def",
        p: "Declaring an array defines its type: `dataType[] arrayName;`. Instantiating allocates memory using the **new** keyword: `arrayName = new dataType[size];`. The brackets `[]` signify that the variable is an array reference."
      },
      {
        k: "heading",
        text: "Default Initialization values in Java"
      },
      {
        k: "table",
        head: ["Data Type", "Default Initial Value", "Example after: `new type[size]`"],
        rows: [
          ["`int` / `byte` / `short`", "`0`", `\`{0, 0, 0}\``],
          ["`double` / `float`", "`0.0`", `\`{0.0, 0.0}\``],
          ["`boolean`", "`false`", `\`{false, false}\``],
          ["Objects (like `String`)", "`null`", `\`{null, null}\``]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Empty Array Allocation"
      },
      {
        k: "code",
        file: "CreateArray.java",
        code: `public class CreateArray {
    public static void main(String[] args) {
        // Declare and allocate array of size 3
        int[] ages = new int[3]; 
        
        System.out.println("Default value at index 0: " + ages[0]);
        
        // Populating the elements
        ages[0] = 18;
        ages[1] = 20;
        ages[2] = 22;
        
        System.out.println("Populated value at index 0: " + ages[0]);
    }
}`,
        output: `Default value at index 0: 0
Populated value at index 0: 18`,
        lines: [
          {
            n: 4,
            code: "int[] ages = new int[3];",
            explain: "Allocates memory for 3 integers. Java automatically sets all of them to their default value of 0."
          },
          {
            n: 6,
            code: "ages[0]",
            explain: "Returns 0, showing default initialization."
          },
          {
            n: 9,
            code: "ages[0] = 18;",
            explain: "Replaces the default 0 with 18."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Forgetting to specify the size in square brackets when using the `new` keyword (e.g. `int[] arr = new int[];` is a compilation error).",
          "Writing negative values inside size brackets (e.g. `new int[-5]`), which compiles but crashes with a **NegativeArraySizeException** at runtime."
        ]
      },
      {
        k: "best",
        items: [
          "Use the syntax `int[] arr` (preferred in Java) instead of `int arr[]` (C-style) to group the type brackets clearly with the data type.",
          "Verify that array sizes are positive integers."
        ]
      },
      {
        k: "summary",
        items: ["new keyword allocates empty array slots in memory.", "Java initializes new arrays to safe default values.", "Array bracket symbols must bind to types."]
      },
      {
        k: "compare",
        title: "Array Declaration vs Instantiation",
        a: {
          head: "Array Declaration",
          rows: ["Declares array reference variable type.", "Does not allocate memory for elements on heap.", "Syntax: int[] scores;", "Creates scores reference on Stack."]
        },
        b: {
          head: "Array Instantiation",
          rows: ["Allocates memory for items using new keyword.", "Locks array length size permanently.", "Syntax: scores = new int[5];", "Creates 5 integer slots in Heap."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "How do you allocate an empty array of 10 doubles in Java?",
            a: "`double[] arr = new double[10];`"
          },
          {
            q: "What is the default value of boolean variables in a newly allocated boolean array?",
            a: "`false`."
          },
          {
            q: "What is the default value of String objects in a new String array?",
            a: "`null`."
          },
          {
            q: "Is `int arr[] = new int[5];` valid Java syntax?",
            a: "Yes, it is valid C-style syntax, but `int[] arr = new int[5];` is preferred in modern Java."
          },
          {
            q: "Can you change the size of an array after it has been created using `new`?",
            a: "No. The size is fixed at allocation."
          }
        ],
        coding: [
          {
            q: "Write empty double array allocator.",
            desc: "Declare and instantiate double array named `prices` of size 2. Print both default elements.",
            solCode: `public class DoubleAlloc {
    public static void main(String[] args) {
        double[] prices = new double[2];
        System.out.println(prices[0] + " " + prices[1]);
    }
}`,
            solOut: "0.0 0.0",
            solExp: "Allocates double array slots and shows default decimal initialization (0.0)."
          },
          {
            q: "Implement boolean array toggler.",
            desc: "Allocate boolean array `flags` of size 3. Set index 1 to true. Print all three elements.",
            solCode: `public class BooleanFlag {
    public static void main(String[] args) {
        boolean[] flags = new boolean[3];
        flags[1] = true;
        System.out.println(flags[0] + " " + flags[1] + " " + flags[2]);
    }
}`,
            solOut: "false true false",
            solExp: "Shows default booleans (false) alongside modified slot at index 1."
          },
          {
            q: "Create custom length dynamic allocator.",
            desc: "Declare int variable `size = 4`. Allocate an int array of this size, store 99 at index 3, and print it.",
            solCode: `public class SizeAlloc {
    public static void main(String[] args) {
        int size = 4;
        int[] data = new int[size];
        data[3] = 99;
        System.out.println(data[3]);
    }
}`,
            solOut: "99",
            solExp: "Uses a variable to specify size at runtime allocation, then saves a value to the last cell."
          }
        ],
        predict: [
          {
            code: `public class NullPredict {
    public static void main(String[] args) {
        String[] text = new String[2];
        System.out.println(text[0]);
    }
}`,
            a: "null",
            explain: "String is a reference object type, so its default initialization value is `null`."
          },
          {
            code: `public class NegativePredict {
    public static void main(String[] args) {
        int size = -2;
        int[] arr = new int[size];
        System.out.println(arr.length);
    }
}`,
            a: "NegativeArraySizeException",
            explain: "Specifying a negative size for array allocations compiles successfully but throws a NegativeArraySizeException at runtime."
          }
        ],
        debug: [
          {
            q: "Correct the compile issue in this array declaration snippet.",
            code: `public class AllocBug {
    public static void main(String[] args) {
        // Goal: allocate an array of 5 integers
        int[] list = new int[]; // Bug here
    }
}`,
            bug: "When allocating an empty array with the `new` keyword, you must specify the size in square brackets.",
            solCode: `public class AllocBug {
    public static void main(String[] args) {
        int[] list = new int[5]; // Fixed: size 5 specified
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 9,
    topic: "Array Traversal (Loops & length)",
    body: [
      {
        k: "intro",
        p: "To read or modify every element in an array, we write loops. We trace indices using the array's **length** attribute."
      },
      {
        k: "why",
        p: `Writing individual lines like \`System.out.println(scores[0])\`, \`System.out.println(scores[1])\` to print an array doesn't scale. If the array had 10,000 items, your program would have 10,000 lines. A loop traverses any size array in 3 lines by linking loop counter variables directly to array indices.`
      },
      {
        k: "def",
        p: "**Array Traversal** is visiting each element of an array exactly once. The property **arrayName.length** returns the number of elements in the array. Loops are written as `for(int i = 0; i < array.length; i++)`."
      },
      {
        k: "heading",
        text: "Traversal loop iteration trace (Length = 3)"
      },
      {
        k: "table",
        head: [
          "Loop Index (i)",
          "Condition (i < array.length)",
          "Accessed Cell",
          "Element Value",
          "Next i"
        ],
        rows: [
          [
            "0",
            "0 < 3 (True)",
            "`array[0]`",
            "10",
            "1"
          ],
          [
            "1",
            "1 < 3 (True)",
            "`array[1]`",
            "20",
            "2"
          ],
          [
            "2",
            "2 < 3 (True)",
            "`array[2]`",
            "30",
            "3"
          ],
          [
            "3",
            "3 < 3 (False)",
            "None (Loop terminates)",
            "-",
            "-"
          ]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Loop Array Traversal"
      },
      {
        k: "code",
        file: "ArrayLoop.java",
        code: `public class ArrayLoop {
    public static void main(String[] args) {
        int[] ages = {15, 18, 21};
        
        // Loop runs from index 0 up to (length - 1)
        for (int i = 0; i < ages.length; i++) {
            System.out.println("Element at index " + i + ": " + ages[i]);
        }
    }
}`,
        output: `Element at index 0: 15
Element at index 1: 18
Element at index 2: 21`,
        lines: [
          {
            n: 6,
            code: "for (int i = 0; i < ages.length; i++) {",
            explain: "Loops from 0 to 2. Uses i < ages.length (which is 3), so i stops at 2."
          },
          {
            n: 7,
            code: `System.out.println(... + ages[i]);`,
            explain: "Accesses elements dynamically using loop index variable i as the offset."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Using the condition `i <= array.length` in the traversal loop. Because the last index is `length - 1`, this checks `i == length` on the final loop and throws an **ArrayIndexOutOfBoundsException**.",
          "Confusing the array length property (no parentheses: `arr.length`) with String length methods (requires parentheses: `str.length()`)."
        ]
      },
      {
        k: "best",
        items: [
          "Always use the `<` operator when writing array loop bounds (e.g. `i < arr.length`).",
          "Use the `.length` property instead of hardcoding numeric sizes to make your loops adapt if the array size changes."
        ]
      },
      {
        k: "summary",
        items: ["length property returns total elements count dynamically.", `Standard traversal loop runs index \$0\$ to \$\text{length}-1\$.`, "Checking `<=` length causes index boundary crashes."]
      },
      {
        k: "compare",
        title: "For Loop vs Enhanced For Loop (for-each)",
        a: {
          head: "Standard for Loop (Indexed)",
          rows: ["Uses numeric loop counter index variables.", "Can update, write, or modify element slots.", "Can traverse forwards, backwards, or skip items.", "Syntax: for(int i=0; i<arr.length; i++)"]
        },
        b: {
          head: "Enhanced for Loop (for-each)",
          rows: ["Directly accesses values without indices.", "Read-only traversal—cannot overwrite element references.", "Always traverses forward from start to end.", "Syntax: for(int val : arr)"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "How do you retrieve the size of an array named prices?",
            a: "Use `prices.length`."
          },
          {
            q: "Does array.length require parentheses at the end?",
            a: "No, length is a property for arrays (unlike strings, which require parentheses)."
          },
          {
            q: "What is the correct loop condition to traverse an array safely?",
            a: "`i < array.length`."
          },
          {
            q: "Why is `i <= array.length` a bug?",
            a: "It attempts to access index `array.length`, which is one element beyond the array boundary (indexes are zero-based)."
          },
          {
            q: "How many times will a traversal loop run for an array of size 5?",
            a: "5 times (for index 0, 1, 2, 3, and 4)."
          }
        ],
        coding: [
          {
            q: "Write double values displayer.",
            desc: "Create class DoubleDisplay. Initialize double array: 1.1, 2.2. Print each element on a new line using a for loop.",
            solCode: `public class DoubleDisplay {
    public static void main(String[] args) {
        double[] vals = {1.1, 2.2};
        for (int i = 0; i < vals.length; i++) {
            System.out.println(vals[i]);
        }
    }
}`,
            solOut: `1.1
2.2`,
            solExp: "Uses array length property to bound a for loop that visits and prints double values."
          },
          {
            q: "Implement array backwards printer.",
            desc: "Declare int array containing: 1, 2, 3. Print elements in reverse order on a single line (3 2 1) using a loop.",
            solCode: `public class ReversePrint {
    public static void main(String[] args) {
        int[] data = {1, 2, 3};
        // start loop at (length - 1), decrement i
        for (int i = data.length - 1; i >= 0; i--) {
            System.out.print(data[i] + " ");
        }
    }
}`,
            solOut: "3 2 1 ",
            solExp: "Starts loop index counter at 2, counts down to 0, outputting elements in reverse."
          },
          {
            q: "Create cell initializer loop.",
            desc: "Allocate an int array of size 5. Use a for loop to fill the array with values equal to `index * 10`. Print index 4.",
            solCode: `public class CellFill {
    public static void main(String[] args) {
        int[] list = new int[5];
        for (int i = 0; i < list.length; i++) {
            list[i] = i * 10;
        }
        System.out.println(list[4]);
    }
}`,
            solOut: "40",
            solExp: "Populates array dynamically inside a loop, writing calculation values to cells."
          }
        ],
        predict: [
          {
            code: `public class TraversalPredictOne {
    public static void main(String[] args) {
        int[] data = {5, 10, 15};
        for (int i = 0; i < data.length; i += 2) {
            System.out.print(data[i] + " ");
        }
    }
}`,
            a: "5 15 ",
            explain: "The loop increments `i` by 2: i starts at 0 (`data[0]` = 5), then increments to 2 (`data[2]` = 15). The next increment makes i 4, exiting the loop."
          },
          {
            code: `public class LengthPredict {
    public static void main(String[] args) {
        String[] words = {"Java", "Rocks"};
        System.out.println(words.length);
    }
}`,
            a: "2",
            explain: "The array has 2 elements, so words.length returns the integer value 2."
          }
        ],
        debug: [
          {
            q: "Find the boundary check bug in this loop printing class.",
            code: `public class LoopBoundBug {
    public static void main(String[] args) {
        int[] list = {10, 20, 30};
        for (int i = 0; i <= list.length; i++) { // Bug here
            System.out.println(list[i]);
        }
    }
}`,
            bug: "The comparison operator in the loop condition is `<=`. When `i` equals `list.length` (3), accessing `list[3]` throws an ArrayIndexOutOfBoundsException error.",
            solCode: `public class LoopBoundBug {
    public static void main(String[] args) {
        int[] list = {10, 20, 30};
        for (int i = 0; i < list.length; i++) { // Fixed using < operator
            System.out.println(list[i]);
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 9,
    topic: "User Input & Basic Array Operations",
    body: [
      {
        k: "intro",
        p: "We can combine array loops with input scanner utilities and search algorithms to perform data calculations like finding sums, averages, or max values."
      },
      {
        k: "why",
        p: "Calculating stats from a list of data is the foundation of database queries. An application needs to compute average student grades or locate the highest balance in accounts. Learning to loop through arrays and accumulate values is a core programming pattern."
      },
      {
        k: "def",
        p: "**Array Operations** utilize accumulator variables outside the loop to calculate metrics. Sum calculations add elements to a running total. Search algorithms compare elements sequentially against temporary variables."
      },
      {
        k: "heading",
        text: "The Max-Element Search Trace"
      },
      {
        k: "table",
        head: [
          "Index Checked",
          "Value at Index",
          "Comparison (value > currentMax)",
          "Action / Output",
          "Resulting max"
        ],
        rows: [
          [
            "Initialize",
            "-",
            "-",
            "Set max = index 0 value",
            "12"
          ],
          [
            "1",
            "25",
            "25 > 12 (True)",
            "Update max = 25",
            "25"
          ],
          [
            "2",
            "8",
            "8 > 25 (False)",
            "Keep current max",
            "25"
          ],
          [
            "3",
            "32",
            "32 > 25 (True)",
            "Update max = 32",
            "32"
          ]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Calculate Array Statistics"
      },
      {
        k: "code",
        file: "ArrayStats.java",
        code: `public class ArrayStats {
    public static void main(String[] args) {
        int[] values = {12, 25, 8, 32};
        
        int sum = 0;
        int max = values[0]; // Assume first element is max
        
        for (int i = 0; i < values.length; i++) {
            // 1. Accumulate Sum
            sum += values[i];
            
            // 2. Locate Max
            if (values[i] > max) {
                max = values[i]; // Update max
            }
        }
        
        double avg = (double) sum / values.length;
        
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + avg);
        System.out.println("Max element: " + max);
    }
}`,
        output: `Sum: 77
Average: 19.25
Max element: 32`,
        lines: [
          {
            n: 5,
            code: "int sum = 0;",
            explain: "Accumulator variable declared outside the loop."
          },
          {
            n: 6,
            code: "int max = values[0];",
            explain: "Initializes the max variable. Crucial to initialize to an actual array element rather than a default like 0 (which would fail if all elements were negative)."
          },
          {
            n: 13,
            code: "if (values[i] > max) {",
            explain: "Compares each element. If a larger value is found, max is updated."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Initializing the `max` variable to 0 when searching through an array of negative temperatures. This makes the search fail because 0 is larger than all negative temperatures, leaving the output as 0 (which is not even in the array). Initialize to `array[0]` instead.",
          "Performing division for averages without casting the sum or count to double, which drops decimal values (Integer Division truncation)."
        ]
      },
      {
        k: "best",
        items: [
          "Always initialize extrema variables (`max` or `min`) using the first element of the array (`array[0]`).",
          "Cast values to `double` before dividing to get precise average results."
        ]
      },
      {
        k: "summary",
        items: ["Accumulator variables store calculations across loop iterations.", "Initialize max search variables using `arr[0]`.", "Use casting on double divisions to preserve averages."]
      },
      {
        k: "compare",
        title: "Hardcoded Arrays vs Dynamic Input Arrays",
        a: {
          head: "Hardcoded Arrays",
          rows: ["Values initialized directly in source code.", "Cannot adapt to user data inputs during runs.", "Used for predefined configuration sets.", `Example: int[] months = {1, 2, ...};`]
        },
        b: {
          head: "Dynamic Input Arrays",
          rows: ["Array length and elements entered dynamically.", "Uses Scanner loops to populate indices during execution.", "Flexible for running interactive calculations.", "Example: Reading customer heights."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "Why is initializing max = 0 a logic error when processing negative arrays?",
            a: "Because 0 is larger than any negative number, so the loop will return 0 instead of the actual maximum negative number."
          },
          {
            q: "How do you initialize a max-search variable safely?",
            a: "Initialize it to the first element of the array: `max = array[0]`."
          },
          {
            q: "What is a linear search?",
            a: "Checking each element of an array sequentially from index 0 to the end to find a target value."
          },
          {
            q: "How do you calculate the average of an array?",
            a: "Sum all elements, count the elements using `.length`, and divide the sum by length (using double casting)."
          },
          {
            q: "Can you populate an array from user keyboard inputs?",
            a: "Yes, inside a loop you can assign `arr[i] = scanner.nextInt();`."
          }
        ],
        coding: [
          {
            q: "Write array element average calculator.",
            desc: "Declare int array containing: 10, 20, 15. Calculate sum and average (with decimal precision) and print both.",
            solCode: `public class ArrayAvg {
    public static void main(String[] args) {
        int[] scores = {10, 20, 15};
        int sum = 0;
        for (int i = 0; i < scores.length; i++) {
            sum += scores[i];
        }
        double avg = (double) sum / scores.length;
        System.out.println("Sum: " + sum + " Avg: " + avg);
    }
}`,
            solOut: "Sum: 45 Avg: 15.0",
            solExp: "Accumulates array cells and divides total by length using double casting."
          },
          {
            q: "Implement minimum search helper.",
            desc: "Find the minimum element inside int array: 8, 3, 11, 4. Initialize min to values[0], print minimum.",
            solCode: `public class MinSearch {
    public static void main(String[] args) {
        int[] values = {8, 3, 11, 4};
        int min = values[0];
        for (int i = 0; i < values.length; i++) {
            if (values[i] < min) {
                min = values[i];
            }
        }
        System.out.println("Min: " + min);
    }
}`,
            solOut: "Min: 3",
            solExp: "Checks elements sequentially, updating min value whenever a smaller value is encountered."
          },
          {
            q: "Create linear search detector.",
            desc: "Search array: 5, 2, 9, 7 for target value 9. If found print \"Found at index X\", else print \"Not found\".",
            solCode: `public class ArraySearch {
    public static void main(String[] args) {
        int[] data = {5, 2, 9, 7};
        int target = 9;
        int foundIdx = -1;
        for (int i = 0; i < data.length; i++) {
            if (data[i] == target) {
                foundIdx = i;
                break; // stop loop early
            }
        }
        if (foundIdx != -1) {
            System.out.println("Found at index " + foundIdx);
        } else {
            System.out.println("Not found");
        }
    }
}`,
            solOut: "Found at index 2",
            solExp: "Loops to match cell to target; breaks early and prints index position if match occurs."
          }
        ],
        predict: [
          {
            code: `public class OperationPredictOne {
    public static void main(String[] args) {
        int[] vals = {-5, -8, -2};
        int max = 0; // Faulty initial logic
        for (int i = 0; i < vals.length; i++) {
            if (vals[i] > max) max = vals[i];
        }
        System.out.println(max);
    }
}`,
            a: "0",
            explain: "Since all elements are negative, the condition `vals[i] > max` (e.g. `-5 > 0`) is always false. The variable `max` remains its initial value (0), which is incorrect since 0 is not in the array."
          },
          {
            code: `public class SearchBreakPredict {
    public static void main(String[] args) {
        int[] list = {10, 20, 30, 40};
        for (int i = 0; i < list.length; i++) {
            if (list[i] == 30) {
                System.out.print(i);
                break;
            }
        }
    }
}`,
            a: "2",
            explain: "The loop scans elements: index 0 (10), index 1 (20), index 2 (30). Since index 2 matches 30, it prints the index 2 and breaks, terminating early."
          }
        ],
        debug: [
          {
            q: "Explain the logic error causing integer truncation and correct it.",
            code: `public class AvgTruncBug {
    public static void main(String[] args) {
        int[] grades = {90, 85, 88}; // length=3
        int sum = 0;
        for (int i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        // Goal: print precise average double (87.666)
        double avg = sum / grades.length; // Bug here
        System.out.println("Average: " + avg);
    }
}`,
            bug: "Integer Division. `sum` and `grades.length` are both integers. Writing `sum / length` performs integer division (truncating decimals) before assigning the result to double variable `avg` (yielding 87.0 instead of 87.666).",
            solCode: `public class AvgTruncBug {
    public static void main(String[] args) {
        int[] grades = {90, 85, 88};
        int sum = 0;
        for (int i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        // Fixed: cast sum to double to force decimal division
        double avg = (double) sum / grades.length;
        System.out.println("Average: " + avg);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 9,
    topic: "Introduction to 2D Arrays (Matrices)",
    body: [
      {
        k: "intro",
        p: "An array stores a single list of items. A **Two-Dimensional (2D) Array** stores a grid of items organized in rows and columns, similar to a spreadsheet matrix."
      },
      {
        k: "why",
        p: "A single dimension array cannot naturally store grids, such as a chess board, a theater ticket seating chart, coordinates on a map, or pixels in an image. 2D arrays let you represent these structures naturally using row and column indexes."
      },
      {
        k: "def",
        p: "A **2D Array** in Java is an \"array of arrays\". It is declared with double brackets: `dataType[][] name = new dataType[rows][cols];`. Element access requires specifying both a row index and column index: `grid[row][col]`."
      },
      {
        k: "heading",
        text: "The 2x3 Grid Index Mapping"
      },
      {
        k: "table",
        head: ["Row Index", "Col 0 cell", "Col 1 cell", "Col 2 cell"],
        rows: [
          ["Row 0", "`grid[0][0]`", "`grid[0][1]`", "`grid[0][2]`"],
          ["Row 1", "`grid[1][0]`", "`grid[1][1]`", "`grid[1][2]`"]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Matrix Initializer & Print"
      },
      {
        k: "code",
        file: "MatrixApp.java",
        code: `public class MatrixApp {
    public static void main(String[] args) {
        // Initialize a 2x3 2D array (2 rows, 3 columns)
        int[][] matrix = {
            {10, 20, 30}, // Row 0
            {40, 50, 60}  // Row 1
        };
        
        System.out.println("Cell at Row 0, Col 1: " + matrix[0][1]);
        
        // Traverse using nested loops
        for (int r = 0; r < matrix.length; r++) { // matrix.length is row count (2)
            for (int c = 0; c < matrix[r].length; c++) { // matrix[r].length is col count (3)
                System.out.print(matrix[r][c] + " ");
            }
            System.out.println(); // newline after each row
        }
    }
}`,
        output: `Cell at Row 0, Col 1: 20
10 20 30 
40 50 60 `,
        lines: [
          {
            n: 4,
            code: "int[][] matrix = {",
            explain: "Initializes a 2D array literal with 2 rows and 3 columns."
          },
          {
            n: 10,
            code: "matrix[0][1]",
            explain: "Accesses row 0, column 1 (value 20)."
          },
          {
            n: 13,
            code: "r < matrix.length;",
            explain: "Outer loop boundary. matrix.length returns the number of rows."
          },
          {
            n: 14,
            code: "c < matrix[r].length;",
            explain: "Inner loop boundary. matrix[r].length returns the number of elements (columns) in that specific row."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Confusing the row and column coordinates. Writing `matrix[col][row]` instead of `matrix[row][col]` throws index errors if rows and columns sizes are different.",
          "Declaring size incorrectly: writing `new int[cols][rows]` when you intended row-first structures."
        ]
      },
      {
        k: "best",
        items: [
          "Always access elements in row-first order: `grid[rowIndex][colIndex]`.",
          "Use nested loops where the outer loop variable indexes the rows and the inner loop variable indexes the columns."
        ]
      },
      {
        k: "summary",
        items: ["2D arrays are structures representation of grids (array of arrays).", "Accessed via double subscript brackets: `grid[row][col]`.", "Outer length is row count; inner length is column count."]
      },
      {
        k: "compare",
        title: "1D Array vs 2D Array layout",
        a: {
          head: "1D Array (Linear)",
          rows: ["Single row index offset lookup (scores[i]).", "Traversed using a single loop.", "Used for flat value lists.", "Memory: Single continuous block pointer."]
        },
        b: {
          head: "2D Array (Matrix)",
          rows: ["Row and column coordinate lookup (grid[r][c]).", "Traversed using nested loop blocks.", "Used for maps, tables, grids, and matrices.", "Memory: Array of array references."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "How do you declare a 2D array of integers?",
            a: "`int[][] arrayName;`"
          },
          {
            q: "In a 2D array, what does array.length return?",
            a: "The number of rows in the 2D array."
          },
          {
            q: "In a 2D array, what does array[0].length return?",
            a: "The number of columns in the first row."
          },
          {
            q: "What is the coordinate format to access row index 1, column index 2?",
            a: "`array[1][2]`"
          },
          {
            q: "Can rows in a Java 2D array have different lengths?",
            a: "Yes. Java supports ragged arrays where different rows can have different column lengths."
          }
        ],
        coding: [
          {
            q: "Write coordinate cell printer.",
            desc: `Declare and initialize 2x2 double array: \`{ {1.0, 2.0}, {3.0, 4.0} }\`. Print the diagonal elements: index [0][0] and [1][1].`,
            solCode: `public class MatrixDiag {
    public static void main(String[] args) {
        double[][] m = {
            {1.0, 2.0},
            {3.0, 4.0}
        };
        System.out.println(m[0][0] + " " + m[1][1]);
    }
}`,
            solOut: "1.0 4.0",
            solExp: "Retrieves diagonal cells from a 2D double grid directly by coordinate pairs."
          },
          {
            q: "Implement grid summation program.",
            desc: `Sum all elements in a 2x2 grid containing \`{ {1, 2}, {3, 4} }\` using nested loops.`,
            solCode: `public class MatrixSum {
    public static void main(String[] args) {
        int[][] nums = {
            {1, 2},
            {3, 4}
        };
        int sum = 0;
        for (int r = 0; r < nums.length; r++) {
            for (int c = 0; c < nums[r].length; c++) {
                sum += nums[r][c];
            }
        }
        System.out.println("Total: " + sum);
    }
}`,
            solOut: "Total: 10",
            solExp: "Uses double nested iteration to accumulate cells in a 2D matrix structure."
          },
          {
            q: "Create empty matrix allocator.",
            desc: "Allocate empty 3x2 int array. Set cell [2][1] to 88 and print it.",
            solCode: `public class MatrixAlloc {
    public static void main(String[] args) {
        int[][] grid = new int[3][2]; // 3 rows, 2 cols
        grid[2][1] = 88;
        System.out.println(grid[2][1]);
    }
}`,
            solOut: "88",
            solExp: "Initializes grid slots dynamically and populates the bottom-right cell."
          }
        ],
        predict: [
          {
            code: `public class MatrixPredictOne {
    public static void main(String[] args) {
        int[][] grid = {
            {1, 2},
            {3, 4, 5}
        };
        System.out.println(grid[1].length);
    }
}`,
            a: "3",
            explain: `In Java, 2D arrays are arrays of arrays. \`grid[1]\` refers to the second row (which is \`{3, 4, 5}\`). Its length is 3.`
          },
          {
            code: `public class MatrixValPredict {
    public static void main(String[] args) {
        int[][] m = {
            {5, 10},
            {15, 20}
        };
        System.out.println(m[1][0] - m[0][1]);
    }
}`,
            a: "5",
            explain: "`m[1][0]` is row 1, col 0 (15). `m[0][1]` is row 0, col 1 (10). Math: `15 - 10 = 5`."
          }
        ],
        debug: [
          {
            q: "Identify the index bug causing crash in this matrix print program.",
            code: `public class MatrixIndexBug {
    public static void main(String[] args) {
        int[][] grid = {
            {1, 2},
            {3, 4}
        };
        // Goal: print cell grid[1][1] (which is 4)
        System.out.println(grid[2][1]); // Bug here
    }
}`,
            bug: "ArrayIndexOutOfBoundsException. The 2D array contains 2 rows (index 0 and 1). Accessing row index 2 is out of bounds.",
            solCode: `public class MatrixIndexBug {
    public static void main(String[] args) {
        int[][] grid = {
            {1, 2},
            {3, 4}
        };
        // Fixed: accessed row 1, column 1 (value 4)
        System.out.println(grid[1][1]);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "module",
    num: 10,
    title: "String Manipulation",
    desc: "Handle text like a pro. Deep-dive into Java String creation, the memory String Pool, vital library methods, string comparison protocols, and the critical concept of Immutability.",
    topics: [
      "Introduction to Strings (Memory Pool)",
      "String Creation (Literal vs. new)",
      "Vital String Methods",
      "String Comparison Rules",
      "String Manipulation & Immutability"
    ]
  },
  {
    type: "slide",
    module: 10,
    topic: "Introduction to Strings (Memory Pool)",
    body: [
      {
        k: "intro",
        p: "A **String** is a reference data type in Java that holds a sequence of characters (text) wrapped in double quotes. Under the hood, Java represents a String as a character array."
      },
      {
        k: "why",
        p: "Text is the primary interface for humans. Websites, user inputs, passwords, and logs are all strings. Because strings are so common, Java handles them in a special way in computer memory to save space and boost execution speed."
      },
      {
        k: "def",
        p: "A **String** in Java is an object of the `java.lang.String` class. The **String Constant Pool** is a specialized storage area in Java Heap memory where the JVM stores a single copy of each unique string literal to prevent duplicate object allocations."
      },
      {
        k: "heading",
        text: "Visual String Pool Reference Model"
      },
      {
        k: "stack",
        cells: [
          {
            addr: "s1 (Stack Reference)",
            val: "Points to \"Hello\" in Pool"
          },
          {
            addr: "s2 (Stack Reference)",
            val: "Points to \"Hello\" in Pool (Shared!)"
          },
          {
            addr: "s3 (Stack Reference)",
            val: "Points to \"Hello\" Object in Heap (Distinct Address)"
          }
        ]
      },
      {
        k: "heading",
        text: "Code Example: Shared String Reference Tracing"
      },
      {
        k: "code",
        file: "StringPool.java",
        code: `public class StringPool {
    public static void main(String[] args) {
        // Shared literals in the String Pool
        String str1 = "Hello";
        String str2 = "Hello";
        
        // Verifying reference equality (checks memory address)
        if (str1 == str2) {
            System.out.println("str1 and str2 point to the EXACT same memory address!");
        } else {
            System.out.println("Different addresses.");
        }
    }
}`,
        output: "str1 and str2 point to the EXACT same memory address!",
        lines: [
          {
            n: 4,
            code: "String str1 = \"Hello\";",
            explain: "Allocates \"Hello\" in the String Pool and assigns its reference to str1."
          },
          {
            n: 5,
            code: "String str2 = \"Hello\";",
            explain: "Since \"Hello\" already exists in the pool, JVM returns the existing address. str2 shares the exact same reference!"
          },
          {
            n: 8,
            code: "if (str1 == str2) {",
            explain: "Compares memory address values. Since both point to the same Pool location, this is true."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Confusing reference comparison (`==`) with content comparison (`.equals()`). Using `==` on strings will fail unpredictably if one of the strings was created outside the pool.",
          "Assuming that strings are simple primitive types. Strings are objects, and they carry powerful helper methods."
        ]
      },
      {
        k: "best",
        items: [
          "Use string literals (`\"text\"`) rather than the `new` keyword to create strings, so you leverage Java's built-in memory optimization automatically.",
          "Always use `.equals()` to check if two strings hold the same letters."
        ]
      },
      {
        k: "summary",
        items: ["Strings are reference objects holding sequence characters.", "String Constant Pool saves memory by sharing identical literals.", "== checks reference locations; equals() checks letter values."]
      },
      {
        k: "compare",
        title: "Stack vs Heap (String Pool)",
        a: {
          head: "Stack Memory",
          rows: ["Holds local String reference pointers.", "Fast access frame cleanups.", "References point to Heap addresses.", "Variable name lives here."]
        },
        b: {
          head: "String Constant Pool (Heap)",
          rows: ["Shared storage location for literal String values.", "Avoids duplicate string creations to save RAM.", "Objects are permanent and immutable.", "Access managed internally by JVM."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is the String Constant Pool?",
            a: "A special memory zone in the Java heap where JVM caches unique string literals to optimize storage."
          },
          {
            q: "Is a String a primitive data type in Java?",
            a: "No, it is a reference object type."
          },
          {
            q: "Where are string literals stored in memory?",
            a: "In the String Constant Pool inside the Heap."
          },
          {
            q: "What happens when you declare two string variables with the same literal value?",
            a: "Both variables point to the single shared object in the String Constant Pool."
          },
          {
            q: "Which operator compares string memory addresses?",
            a: "The relational equality operator `==`."
          }
        ],
        coding: [
          {
            q: "Write address comparison program.",
            desc: "Declare variables s1 = \"Java\", s2 = \"Java\". Verify if `s1 == s2` prints \"Shared Address\", else print \"Different\".",
            solCode: `public class StringShare {
    public static void main(String[] args) {
        String s1 = "Java";
        String s2 = "Java";
        if (s1 == s2) {
            System.out.println("Shared Address");
        } else {
            System.out.println("Different");
        }
    }
}`,
            solOut: "Shared Address",
            solExp: "Loads identical literals; checks memory address equality and confirms sharing."
          },
          {
            q: "Implement pool memory outline.",
            desc: "Print a message \"String Pool optimizes heap size\" and print the character length of that string using its length method.",
            solCode: `public class StringLengthApp {
    public static void main(String[] args) {
        String msg = "String Pool optimizes heap size";
        System.out.println(msg);
        System.out.println("Length: " + msg.length());
    }
}`,
            solOut: `String Pool optimizes heap size
Length: 31`,
            solExp: "Invokes the length method on the string literal object to display its character size."
          },
          {
            q: "Create compound literal joiner.",
            desc: "Given s1 = \"Core \", s2 = \"Java\". Combine them into a new variable s3 using the + operator, and print s3.",
            solCode: `public class StringJoin {
    public static void main(String[] args) {
        String s1 = "Core ";
        String s2 = "Java";
        String s3 = s1 + s2;
        System.out.println(s3);
    }
}`,
            solOut: "Core Java",
            solExp: "Uses string concatenation to join two strings together."
          }
        ],
        predict: [
          {
            code: `public class PoolPredictOne {
    public static void main(String[] args) {
        String a = "test";
        String b = "test";
        System.out.println(a == b);
    }
}`,
            a: "true",
            explain: "Both variables hold the same literal \"test\", which maps to the same shared address in the pool, returning true."
          },
          {
            code: `public class PoolRefPredict {
    public static void main(String[] args) {
        String x = "Hello";
        String y = new String("Hello");
        System.out.println(x == y);
    }
}`,
            a: "false",
            explain: "Using the `new` keyword forces Java to bypass the pool and allocate a brand new object in the general heap, resulting in different memory addresses."
          }
        ],
        debug: [
          {
            q: "Correct this code where reference checks cause incorrect logic outputs.",
            code: `public class StringCheckBug {
    public static void main(String[] args) {
        String input = new String("admin");
        // Goal: Print "Access OK" if input is admin
        if (input == "admin") { // Bug here!
            System.out.println("Access OK");
        } else {
            System.out.println("Access Denied");
        }
    }
}`,
            bug: "Using == to compare string contents. The input was created with `new String()`, so it has a different memory address than the literal \"admin\" inside the pool, failing the == check.",
            solCode: `public class StringCheckBug {
    public static void main(String[] args) {
        String input = new String("admin");
        // Fixed: used .equals() to check string value contents
        if (input.equals("admin")) {
            System.out.println("Access OK");
        } else {
            System.out.println("Access Denied");
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 10,
    topic: "String Creation (Literal vs. new)",
    body: [
      {
        k: "intro",
        p: "There are two syntax paths to create String objects in Java: using **String Literals** or using the **new keyword**."
      },
      {
        k: "why",
        p: "Understanding the structural difference between literals and objects prevents severe memory bloating. Using `new String(...)` repeatedly allocates unnecessary duplicate objects, whereas literals share memory slots efficiently."
      },
      {
        k: "def",
        p: "A **String Literal** is defined with double quotes (e.g. `\"Java\"`) and stores in the Pool. The **new keyword** (e.g. `new String(\"Java\")`) allocates a distinct String object in Heap memory, outside the pool."
      },
      {
        k: "heading",
        text: "Comparing Literal vs. new Allocation"
      },
      {
        k: "compare",
        a: {
          title: "String Literal (Recommended)",
          items: ["Created using quotes: `String s = \"App\";`.", "Checks the pool first before allocating.", "If text exists, it reuses the reference.", "Requires zero extra heap allocations."]
        },
        b: {
          title: "new Keyword (Discouraged)",
          items: ["Created using constructor: `new String(\"App\");`.", "Bypasses pool checks.", "Forces allocation of a new object in the Heap.", "Wastes heap storage for identical text values."]
        }
      },
      {
        k: "heading",
        text: "Code Example: Memory Reference Comparisons"
      },
      {
        k: "code",
        file: "CreateComparison.java",
        code: `public class CreateComparison {
    public static void main(String[] args) {
        String s1 = "Java"; // Literal
        String s2 = "Java"; // Literal
        String s3 = new String("Java"); // new keyword
        
        System.out.println("s1 == s2: " + (s1 == s2)); // true (shared)
        System.out.println("s1 == s3: " + (s1 == s3)); // false (distinct objects)
        
        // Content comparison checks characters, not references
        System.out.println("s1.equals(s3): " + s1.equals(s3)); // true (match)
    }
}`,
        output: `s1 == s2: true
s1 == s3: false
s1.equals(s3): true`,
        lines: [
          {
            n: 3,
            code: "String s1 = \"Java\";",
            explain: "Creates \"Java\" literal inside the String pool."
          },
          {
            n: 5,
            code: "String s3 = new String(\"Java\");",
            explain: "Allocates a completely new String object in Heap memory pointing to \"Java\"."
          },
          {
            n: 8,
            code: "s1 == s3",
            explain: "Evaluates to false because pool address (s1) is different from heap address (s3)."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Using `new String(\"text\")` in everyday coding. This unnecessarily allocates two objects (one in pool, one in heap).",
          "Believing that `new String(\"a\")` and `new String(\"a\")` share memory (they are completely distinct heap objects)."
        ]
      },
      {
        k: "best",
        items: [
          "Always default to using string literals for standard text values.",
          "Only use `new String()` when you explicitly need distinct object references for specialized security or thread locks."
        ]
      },
      {
        k: "summary",
        items: ["Literals allocate in Pool and share references.", "new keyword allocates distinct objects in JVM Heap.", "equals() remains the only reliable content check."]
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "Where does `new String(\"Java\")` allocate its object?",
            a: "In the general Heap memory, outside the String Constant Pool."
          },
          {
            q: "How many objects are created by: `String s = new String(\"Book\");` if \"Book\" is not in the pool?",
            a: "Two objects (one in the String Constant Pool, one in the Heap)."
          },
          {
            q: "Does `s1 == s2` return true if `s1 = \"A\"` and `s2 = new String(\"A\")`?",
            a: "No, because their memory addresses are different."
          },
          {
            q: "Does `s1.equals(s2)` return true for the above variables?",
            a: "Yes, because their character contents are identical."
          },
          {
            q: "Why is using the new keyword to create strings discouraged?",
            a: "It wastes Heap memory by allocating duplicate string objects."
          }
        ],
        coding: [
          {
            q: "Write reference divergence test.",
            desc: "Initialize s1 via literal \"JVM\". Initialize s2 via constructor `new String(\"JVM\")`. Print reference check `s1 == s2`.",
            solCode: `public class DivTest {
    public static void main(String[] args) {
        String s1 = "JVM";
        String s2 = new String("JVM");
        System.out.println("Match: " + (s1 == s2));
    }
}`,
            solOut: "Match: false",
            solExp: "Illustrates how literal reference and heap reference diverge."
          },
          {
            q: "Implement string pool manual intern.",
            desc: "Initialize string `s1 = new String(\"Data\")`. Call `s1 = s1.intern()`. Initialize `s2 = \"Data\"`. Print `s1 == s2` to prove it joined the pool.",
            solCode: `public class ManualIntern {
    public static void main(String[] args) {
        String s1 = new String("Data");
        s1 = s1.intern(); // Moves reference to the Pool
        String s2 = "Data";
        System.out.println("Shared: " + (s1 == s2));
    }
}`,
            solOut: "Shared: true",
            solExp: "Uses the intern() method to manually query and return the String Pool reference."
          },
          {
            q: "Create duplicate heap reference detector.",
            desc: "Create s1 = new String(\"X\") and s2 = new String(\"X\"). Verify if `s1 == s2` returns false.",
            solCode: `public class HeapDup {
    public static void main(String[] args) {
        String s1 = new String("X");
        String s2 = new String("X");
        System.out.println("Distinct: " + (s1 != s2));
    }
}`,
            solOut: "Distinct: true",
            solExp: "Confirms that multiple constructor calls create distinct heap objects."
          }
        ],
        predict: [
          {
            code: `public class HeapPredictOne {
    public static void main(String[] args) {
        String s1 = new String("Code");
        String s2 = new String("Code");
        System.out.println(s1 == s2);
    }
}`,
            a: "false",
            explain: "Each `new String()` call allocates a unique object at a different heap location, so their addresses are not equal."
          },
          {
            code: `public class HeapPredictTwo {
    public static void main(String[] args) {
        String s1 = "Code";
        String s2 = new String("Code");
        System.out.println(s1.equals(s2));
    }
}`,
            a: "true",
            explain: "The `.equals()` method compares the actual characters of the strings, which are both \"Code\"."
          }
        ],
        debug: [
          {
            q: "Optimize this memory-inefficient class containing useless constructor allocations.",
            code: `public class MemoryBloatBug {
    public static void main(String[] args) {
        // Goal: initialize default status strings
        String active = new String("ACTIVE");
        String inactive = new String("INACTIVE");
        System.out.println(active + " " + inactive);
    }
}`,
            bug: "Useless allocations. Using the `new` keyword for simple status strings wastes memory.",
            solCode: `public class MemoryBloatBug {
    public static void main(String[] args) {
        // Fixed: optimized to use space-efficient string literals
        String active = "ACTIVE";
        String inactive = "INACTIVE";
        System.out.println(active + " " + inactive);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 10,
    topic: "Vital String Methods",
    body: [
      {
        k: "intro",
        p: "Strings are not just collections of characters; they are objects equipped with a rich set of built-in methods for text analysis and manipulation."
      },
      {
        k: "why",
        p: "When validating user input (like checking if an email contains \"@\" or a password is at least 8 characters long), you need library methods. Writing custom loops to measure character size or search for patterns is slow and error-prone. The `String` class provides optimized methods to do this instantly."
      },
      {
        k: "def",
        p: "The **String Library Methods** are built-in functions inside the String class. Key operations include checking size (`length()`), retrieving a character (`charAt()`), extracting a segment (`substring()`), and locating a pattern (`indexOf()`)."
      },
      {
        k: "heading",
        text: "Common String Methods Reference Table"
      },
      {
        k: "table",
        head: ["Method Sign", "Return Type", "Description / Action", "Example code with: `\"Java\"`"],
        rows: [
          ["`length()`", "`int`", "Returns total character count.", "`\"Java\".length()` -> `4`"],
          ["`charAt(int index)`", "`char`", "Returns character at zero-based index.", "`\"Java\".charAt(2)` -> `'v'`"],
          ["`substring(int start, int end)`", "`String`", "Extracts segment from start index up to end index (exclusive).", "`\"Java\".substring(1, 3)` -> `\"av\"`"],
          ["`indexOf(String str)`", "`int`", "Returns index of first match occurrence, or -1 if not found.", "`\"Java\".indexOf(\"a\")` -> `1`"]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Input Validation Suite"
      },
      {
        k: "code",
        file: "StringMethods.java",
        code: `public class StringMethods {
    public static void main(String[] args) {
        String email = "student@technohartz.com";
        
        // 1. Check size
        System.out.println("Email length: " + email.length());
        
        // 2. Locate character index
        int atIndex = email.indexOf("@");
        System.out.println("@ symbol index: " + atIndex);
        
        // 3. Extract substring
        String domain = email.substring(atIndex + 1, email.length());
        System.out.println("Email Domain: " + domain);
        
        // 4. Retrieve single character
        System.out.println("First character: " + email.charAt(0));
    }
}`,
        output: `Email length: 23
@ symbol index: 7
Email Domain: technohartz.com
First character: s`,
        lines: [
          {
            n: 5,
            code: "email.length()",
            explain: "Returns the count of characters (23)."
          },
          {
            n: 8,
            code: "email.indexOf(\"@\");",
            explain: "Finds \"@\" position, which is index 7."
          },
          {
            n: 12,
            code: "email.substring(atIndex + 1, email.length());",
            explain: "Extracts characters from index 8 (atIndex+1) to 23 (exclusive), which grabs \"technohartz.com\"."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Off-by-One in substring boundaries. Remember that the end index in `substring(start, end)` is **exclusive**—so `\"Hello\".substring(0, 3)` returns `\"Hel\"`, not `\"Hell\"`.",
          "Calling `charAt(index)` on an index >= string length, which throws a **StringIndexOutOfBoundsException**."
        ]
      },
      {
        k: "best",
        items: [
          "Always confirm a character exists (`indexOf(...) != -1`) before using it as a substring boundary.",
          "Use `isEmpty()` to check if a string is empty (`\"\"`), which is cleaner than checking `length() == 0`."
        ]
      },
      {
        k: "summary",
        items: ["length() returns count; charAt() extracts single letters.", "substring() bounds are inclusive of start, exclusive of end.", "indexOf() returns matching index or -1 if missing."]
      },
      {
        k: "compare",
        title: "String length() vs Array length attribute",
        a: {
          head: "String length() Method",
          rows: ["Is a class method call syntax (requires parens).", "Counts number of characters in String sequence.", "Example: str.length();", "Returns length index count dynamically."]
        },
        b: {
          head: "Array length Attribute",
          rows: ["Is a built-in memory array field (no parens).", "Returns number of allocated slot positions.", "Example: arr.length;", "Accesses static metadata slot."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is the return type of `indexOf` when a character is not found?",
            a: "`-1`."
          },
          {
            q: "Is the end index in substring(start, end) inclusive or exclusive?",
            a: "Exclusive."
          },
          {
            q: "What exception is thrown if you request `charAt(10)` on a string of length 5?",
            a: "`StringIndexOutOfBoundsException`."
          },
          {
            q: "What does the method `isEmpty()` return for the string `\"\"`?",
            a: "`true`."
          },
          {
            q: "What is the index of the last character in String `s`?",
            a: "`s.length() - 1`."
          }
        ],
        coding: [
          {
            q: "Write username extractor.",
            desc: "Given fullEmail = \"user123@gmail.com\". Use indexOf and substring to extract and print only the username part (\"user123\").",
            solCode: `public class UserExtract {
    public static void main(String[] args) {
        String email = "user123@gmail.com";
        int at = email.indexOf("@");
        String username = email.substring(0, at);
        System.out.println("Username: " + username);
    }
}`,
            solOut: "Username: user123",
            solExp: "Locates the \"@\" symbol and extracts the preceding substring."
          },
          {
            q: "Implement initials checker.",
            desc: "Given name = \"Geet\". Print the first and last character of that string using charAt and length.",
            solCode: `public class InitialsApp {
    public static void main(String[] args) {
        String name = "Geet";
        char first = name.charAt(0);
        char last = name.charAt(name.length() - 1);
        System.out.println(first + " " + last);
    }
}`,
            solOut: "G t",
            solExp: "Retrieves character at index 0 and length-1 boundary offsets."
          },
          {
            q: "Create domain presence verifier.",
            desc: "Check if String input = \"site.com\" ends with \".com\" using the `endsWith()` method. Print true or false.",
            solCode: `public class DomainCheck {
    public static void main(String[] args) {
        String input = "site.com";
        boolean check = input.endsWith(".com");
        System.out.println("Ends with .com: " + check);
    }
}`,
            solOut: "Ends with .com: true",
            solExp: "Uses the endsWith helper to check file or web domains."
          }
        ],
        predict: [
          {
            code: `public class MethodPredictOne {
    public static void main(String[] args) {
        String str = "Hello";
        System.out.println(str.substring(1, 4));
    }
}`,
            a: "ell",
            explain: "Grabs index 1 ('e') up to index 4 (exclusive, so stops at index 3, 'l'), yielding \"ell\"."
          },
          {
            code: `public class MethodPredictTwo {
    public static void main(String[] args) {
        String word = "Java";
        System.out.println(word.indexOf("a", 2)); // Starts search at index 2
    }
}`,
            a: "3",
            explain: "Starts searching for \"a\" from index 2 onwards. Finds the second \"a\" at index 3."
          }
        ],
        debug: [
          {
            q: "Explain and correct the runtime crash in this index parser.",
            code: `public class BoundaryCrashBug {
    public static void main(String[] args) {
        String text = "Java"; // length=4
        // Goal: print the last letter ('a')
        System.out.println(text.charAt(text.length())); // Bug here!
    }
}`,
            bug: "StringIndexOutOfBoundsException. `text.length()` returns 4, but indexes are zero-based (0 to 3). Accessing index 4 is out of bounds.",
            solCode: `public class BoundaryCrashBug {
    public static void main(String[] args) {
        String text = "Java";
        // Fixed: accessed length() - 1 index offset (3)
        System.out.println(text.charAt(text.length() - 1));
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 10,
    topic: "String Comparison Rules",
    body: [
      {
        k: "intro",
        p: "Comparing strings in Java can be tricky. Using the wrong comparison operator leads to logical bugs that compile successfully but behave incorrectly at runtime."
      },
      {
        k: "why",
        p: "When validating login passwords, you must check for exact character match. Relational equality (`==`) checks memory reference address locations. Because the JVM optimizes memory via the pool, `==` might work during simple tests but fail in production when strings are loaded dynamically from user inputs. Content checks MUST use explicit comparison methods."
      },
      {
        k: "def",
        p: "The **== operator** checks reference equality (are the two variables pointing to the same object address in memory). The **equals() method** checks value content equality (do the two string objects hold the same characters in the same sequence)."
      },
      {
        k: "heading",
        text: "Key String Comparison Methods"
      },
      {
        k: "bul",
        items: [
          "**equals(String str)**: Returns `true` if strings have matching characters (case-sensitive).",
          "**equalsIgnoreCase(String str)**: Returns `true` if strings match, ignoring uppercase vs. lowercase differences.",
          "**compareTo(String str)**: Returns an integer indicating lexicographical (alphabetical) comparison. Returns 0 if matching, negative if caller comes first, positive if argument comes first."
        ]
      },
      {
        k: "heading",
        text: "Code Example: Login Gatekeeper"
      },
      {
        k: "code",
        file: "StringCompare.java",
        code: `public class StringCompare {
    public static void main(String[] args) {
        String passLiteral = "Secret";
        String passObject = new String("Secret");
        
        // 1. Reference Check (==)
        System.out.println("== Check: " + (passLiteral == passObject)); // false
        
        // 2. Content Check (.equals)
        System.out.println(".equals Check: " + passLiteral.equals(passObject)); // true
        
        // 3. Ignore Case Check
        System.out.println("Ignore Case: " + passLiteral.equalsIgnoreCase("secret")); // true
    }
}`,
        output: `== Check: false
.equals Check: true
Ignore Case: true`,
        lines: [
          {
            n: 7,
            code: "passLiteral == passObject",
            explain: "Checks memory addresses. Literal address is different from Heap object address, yielding false."
          },
          {
            n: 10,
            code: "passLiteral.equals(passObject)",
            explain: "Checks character values. Matches characters, returning true."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Using `==` to compare user keyboard inputs from Scanner. Scanner inputs are objects allocated on the Heap, so they will always fail the `==` check.",
          "Calling `.equals()` on a null string variable, which throws a **NullPointerException**. (e.g. if `str = null`, `str.equals(\"a\")` crashes. Best: write `\"a\".equals(str)` instead)."
        ]
      },
      {
        k: "best",
        items: [
          "Never use `==` to check string content.",
          "Write constant values first in comparisons to avoid null pointer crashes: `\"admin\".equals(input)` instead of `input.equals(\"admin\")`."
        ]
      },
      {
        k: "summary",
        items: ["== checks object location addresses, not content values.", "equals() parses character arrays for exact matching.", "equalsIgnoreCase() filters case differences."]
      },
      {
        k: "compare",
        title: "equals() method vs == operator",
        a: {
          head: "equals() Method",
          rows: ["Compares character sequences inside String objects.", "Returns true if texts match letter-for-letter.", "Used for standard content checks.", "Example: name1.equals(name2)"]
        },
        b: {
          head: "== Operator",
          rows: ["Compares memory reference pointer addresses.", "Returns true only if both pointers reference same object.", "Often yields unexpected logic errors with Strings.", "Example: name1 == name2"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "Why is `==` unsafe for comparing string contents?",
            a: "It checks if they share the same memory address, not if they hold the same characters."
          },
          {
            q: "Which method compares strings case-insensitively?",
            a: "`equalsIgnoreCase(String str)`"
          },
          {
            q: "What does `s1.compareTo(s2)` return if s1 is alphabetically before s2?",
            a: "A negative integer."
          },
          {
            q: "How do you avoid NullPointerException when comparing a variable `pass` to \"admin\"?",
            a: "Call the comparison on the constant literal: `\"admin\".equals(pass)`."
          },
          {
            q: "Does `\"Java\".equals(\"java\")` return true?",
            a: "No, because `.equals()` is case-sensitive."
          }
        ],
        coding: [
          {
            q: "Write login credential comparator.",
            desc: "Check if userEntered = \"ADMIN\". Compare with stored = \"admin\" case-insensitively. Print \"Access OK\" or \"Deny\".",
            solCode: `public class LoginCompare {
    public static void main(String[] args) {
        String entered = "ADMIN";
        String stored = "admin";
        if (entered.equalsIgnoreCase(stored)) {
            System.out.println("Access OK");
        } else {
            System.out.println("Deny");
        }
    }
}`,
            solOut: "Access OK",
            solExp: "Compares strings ignoring case variations."
          },
          {
            q: "Implement dictionary sort order helper.",
            desc: "Compare s1 = \"Apple\" with s2 = \"Banana\" using compareTo. If s1 is before s2 print \"Apple first\", else print \"Banana first\".",
            solCode: `public class DictionaryCheck {
    public static void main(String[] args) {
        String s1 = "Apple";
        String s2 = "Banana";
        if (s1.compareTo(s2) < 0) {
            System.out.println("Apple first");
        } else {
            System.out.println("Banana first");
        }
    }
}`,
            solOut: "Apple first",
            solExp: "Uses alphabetical comparison (Apple comes before Banana, returning negative value)."
          },
          {
            q: "Create safe null checker comparison.",
            desc: "Initialize string `input = null`. Compare it safely to \"active\" without throwing NullPointerException. Print output status.",
            solCode: `public class SafeCheck {
    public static void main(String[] args) {
        String input = null;
        // Literal-first comparison prevents null pointer crashes
        if ("active".equals(input)) {
            System.out.println("Active");
        } else {
            System.out.println("Not Active");
        }
    }
}`,
            solOut: "Not Active",
            solExp: "Calling equals on literal \"active\" returns false safely when input is null."
          }
        ],
        predict: [
          {
            code: `public class ComparePredictOne {
    public static void main(String[] args) {
        String s1 = "A";
        String s2 = "B";
        System.out.println(s1.compareTo(s2));
    }
}`,
            a: "-1",
            explain: "The character 'A' is 1 offset before 'B' in Unicode table, returning the difference: -1."
          },
          {
            code: `public class NullCrashPredict {
    public static void main(String[] args) {
        String s = null;
        try {
            System.out.println(s.equals("test"));
        } catch (NullPointerException e) {
            System.out.println("Crashed!");
        }
    }
}`,
            a: "Crashed!",
            explain: "Calling a method on a null reference throws a NullPointerException."
          }
        ],
        debug: [
          {
            q: "Explain the bug inside this console login input comparator.",
            code: `public class ConsoleLoginBug {
    public static void main(String[] args) {
        String key = new String("secret");
        // Goal: Print Success if key is secret
        if (key == "secret") { // Bug here!
            System.out.println("Success");
        } else {
            System.out.println("Failed");
        }
    }
}`,
            bug: "Using `==` checks reference addresses. The variable key is a Heap object, so it will fail when compared to literal \"secret\" inside the pool.",
            solCode: `public class ConsoleLoginBug {
    public static void main(String[] args) {
        String key = new String("secret");
        // Fixed: used content comparison
        if (key.equals("secret")) {
            System.out.println("Success");
        } else {
            System.out.println("Failed");
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 10,
    topic: "String Manipulation & Immutability",
    body: [
      {
        k: "intro",
        p: "In Java, String objects are **immutable**. Once created, their content cannot be changed. Any method that seems to modify a string actually creates a brand new string object."
      },
      {
        k: "why",
        p: "Why are strings immutable? For safety and efficiency. If strings were mutable, a method could change your username from \"user\" to \"admin\" inside memory, creating massive security holes. Immutability also guarantees that the String Constant Pool remains thread-safe."
      },
      {
        k: "def",
        p: "**String Immutability** means the state of a String object cannot be modified after creation. Methods like `toUpperCase()`, `replace()`, and `trim()` evaluate modifications on the character array and return a brand new String object."
      },
      {
        k: "heading",
        text: "The Immutability Memory Process"
      },
      {
        k: "explain",
        p: `Consider this code:
\`String s = "Java";\`
\`s = s.toUpperCase();\`
1. "Java" object created in Pool.
2. \`toUpperCase()\` creates a NEW string "JAVA".
3. The reference variable \`s\` is reassigned to point to the new "JAVA" object.
4. The original "Java" object remains in memory, unchanged.`
      },
      {
        k: "heading",
        text: "Code Example: Immutability Verification"
      },
      {
        k: "code",
        file: "StringImmutability.java",
        code: `public class StringImmutability {
    public static void main(String[] args) {
        String str = "java"; // Original literal
        
        // This does NOT modify the original "java" object!
        str.toUpperCase(); 
        System.out.println("Original string: " + str); // Still lowercase
        
        // To keep changes, you must capture the returned reference
        str = str.toUpperCase(); 
        System.out.println("Reassigned string: " + str); // Now uppercase
    }
}`,
        output: `Original string: java
Reassigned string: JAVA`,
        lines: [
          {
            n: 6,
            code: "str.toUpperCase();",
            explain: "Constructs \"JAVA\" object but discards its reference. Original str is unchanged."
          },
          {
            n: 10,
            code: "str = str.toUpperCase();",
            explain: "Reassigns variable str to point to the new uppercase object."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Calling formatting methods (like `trim()` or `replace()`) and assuming the variable changes automatically without reassigning the reference (e.g. writing `str.trim();` instead of `str = str.trim();`).",
          "Using String concatenation inside loops, which allocates hundreds of temporary objects, wasting memory (for loops, use `StringBuilder` instead)."
        ]
      },
      {
        k: "best",
        items: ["Always capture returned values of string methods: `s = s.replace(old, new)`.", "Use `StringBuilder` when building or modifying strings inside loops."]
      },
      {
        k: "summary",
        items: ["Immutability prevents changes to String objects.", "Manipulation methods return new objects.", "Reassign variables to save changes."]
      },
      {
        k: "compare",
        title: "String vs StringBuilder classes",
        a: {
          head: "String Class (Immutable)",
          rows: ["Contents cannot be modified after instantiation.", "Concatenations compile to new heap String instances.", "Slower for massive loop concatenations.", "Safe for multi-thread sharing."]
        },
        b: {
          head: "StringBuilder Class (Mutable)",
          rows: ["Contents can be updated directly in same memory slot.", "Appends modify internal buffer dynamically.", "Extremely fast for loop concatenations.", "Unsafe for shared multi-thread access."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What does string immutability mean?",
            a: "Once a String object is created in memory, its character contents cannot be modified."
          },
          {
            q: "What happens to the original object when you call `toLowerCase()` on a string?",
            a: "It remains unchanged in memory. A new lowercase String object is allocated."
          },
          {
            q: "Why is String immutability beneficial?",
            a: "It ensures security, allows sharing references via the String Pool, and makes strings thread-safe."
          },
          {
            q: "How do you apply string modifications back to the original reference variable?",
            a: "Reassign the result of the method call back to the variable (e.g., `str = str.trim();`)."
          },
          {
            q: "What class should you use to build strings inside loops to avoid memory waste?",
            a: "`java.lang.StringBuilder`."
          }
        ],
        coding: [
          {
            q: "Write trim and case formatter.",
            desc: "Given input = \"  admin  \". Trim the leading/trailing spaces and convert to uppercase. Print the final result.",
            solCode: `public class TrimCaseApp {
    public static void main(String[] args) {
        String input = "  admin  ";
        input = input.trim().toUpperCase(); // Chaining methods
        System.out.println("Result: '" + input + "'");
    }
}`,
            solOut: "Result: 'ADMIN'",
            solExp: "Chains trim() and toUpperCase() to format username input."
          },
          {
            q: "Implement letter replacement helper.",
            desc: "Replace all occurrences of 'o' with 'x' in text = \"cool\". Print modified output.",
            solCode: `public class ReplaceApp {
    public static void main(String[] args) {
        String text = "cool";
        text = text.replace('o', 'x');
        System.out.println(text);
    }
}`,
            solOut: "cxxl",
            solExp: "Replaces characters in text and reassigns variable reference."
          },
          {
            q: "Demonstrate StringBuilder loop building.",
            desc: "Use StringBuilder to build a string of numbers 1 to 5 separated by spaces inside a loop.",
            solCode: `public class StringBuilderDemo {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= 5; i++) {
            sb.append(i).append(" ");
        }
        System.out.println(sb.toString().trim());
    }
}`,
            solOut: "1 2 3 4 5",
            solExp: "Modifies a single mutable StringBuilder buffer to avoid creating redundant objects."
          }
        ],
        predict: [
          {
            code: `public class ImmutablePredictOne {
    public static void main(String[] args) {
        String s = "Java";
        s.concat(" SE");
        System.out.println(s);
    }
}`,
            a: "Java",
            explain: "The `concat()` method returns a new String \"Java SE\" but the reference `s` is never updated. `s` still points to \"Java\"."
          },
          {
            code: `public class ReplacePredict {
    public static void main(String[] args) {
        String word = "cat";
        String modified = word.replace('a', 'o');
        System.out.println("word=" + word + " mod=" + modified);
    }
}`,
            a: "word=cat mod=cot",
            explain: "The original variable `word` remains \"cat\" due to immutability. The variable `modified` points to the new string \"cot\"."
          }
        ],
        debug: [
          {
            q: "Explain the logical error inside this user input space cleaner.",
            code: `public class CleanInputBug {
    public static void main(String[] args) {
        String input = "  username  ";
        input.trim(); // Goal: Remove padding spaces
        System.out.println("User: [" + input + "]");
    }
}`,
            bug: "Discarded return value. `input.trim()` returns a new trimmed string, but it is discarded because the variable `input` is not reassigned.",
            solCode: `public class CleanInputBug {
    public static void main(String[] args) {
        String input = "  username  ";
        input = input.trim(); // Fixed: captured the returned string object
        System.out.println("User: [" + input + "]");
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "module",
    num: 11,
    title: "Introduction to OOP",
    desc: "Transition from procedural to Object-Oriented programming. Understand classes, attributes, behaviors, object instantiations, constructors, and instance scopes.",
    topics: ["What is OOP? (Procedural vs. Object-Oriented)", "Classes & Objects (Blueprints & Houses)", "Constructors (Initialization)", "The this Keyword (Self Reference)"]
  },
  {
    type: "slide",
    module: 11,
    topic: "What is OOP? (Procedural vs. Object-Oriented)",
    body: [
      {
        k: "intro",
        p: "Object-Oriented Programming (OOP) is a programming style that organizes code around real-world \"objects\" rather than sequential procedures."
      },
      {
        k: "why",
        p: "In Procedural programming (which we did until now), we write functions and variables separately. In large projects (like a game or banking system), this separation causes chaos. If player variables are stored in one place and movement functions in another, anyone can corrupt the variables. OOP groups **Data (Variables)** and **Behaviors (Methods)** together into a single secure package, mimicking the real world."
      },
      {
        k: "def",
        p: "**Object-Oriented Programming** is a programming paradigm based on the concept of \"objects\", which contain data in the form of fields (attributes) and code in the form of methods (behaviors)."
      },
      {
        k: "heading",
        text: "Procedural vs. OOP Comparison"
      },
      {
        k: "compare",
        a: {
          title: "Procedural Programming",
          items: ["Top-down sequence flow: focus on actions.", "Variables and functions are separate.", "Easy to write for simple scripts.", "Hard to maintain as program size grows."]
        },
        b: {
          title: "Object-Oriented Programming (OOP)",
          items: ["Modular grid flow: focus on objects.", "Data and methods are encapsulated together.", "Promotes code reusability.", "Scales cleanly to large systems."]
        }
      },
      {
        k: "heading",
        text: "The 4 Pillars of OOP preview"
      },
      {
        k: "bul",
        items: [
          "**Encapsulation**: Hiding internal data and exposing it only through secure method gates.",
          "**Inheritance**: Reusing code by letting child classes inherit properties from parent classes.",
          "**Polymorphism**: Allowing different objects to respond to the same command in unique ways.",
          "**Abstraction**: Hiding complex implementation details and showing only vital interfaces."
        ]
      },
      {
        k: "summary",
        items: ["OOP structures programs around objects containing data and code.", "Procedural programming separates data from logic.", "Encapsulation secures variables inside object boundaries."]
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is Object-Oriented Programming?",
            a: "A programming style that models software around real-world objects containing data and code."
          },
          {
            q: "How does procedural programming differ from OOP?",
            a: "Procedural focuses on sequential steps and separates data from functions; OOP merges data and functions inside objects."
          },
          {
            q: "What are the variables inside an object called?",
            a: "Fields or attributes."
          },
          {
            q: "What are the functions inside an object called?",
            a: "Methods or behaviors."
          },
          {
            q: "List the 4 pillars of OOP.",
            a: "Encapsulation, Inheritance, Polymorphism, Abstraction."
          }
        ],
        coding: [
          {
            q: "Create mock object visualization program.",
            desc: "Print attributes of a Car object: \"Attributes: Color, Speed. Behaviors: Accelerate, Brake\".",
            solCode: `public class CarMock {
    public static void main(String[] args) {
        System.out.println("Attributes: Color, Speed");
        System.out.println("Behaviors: Accelerate, Brake");
    }
}`,
            solOut: `Attributes: Color, Speed
Behaviors: Accelerate, Brake`,
            solExp: "Displays the standard characteristics of a real-world object model."
          },
          {
            q: "Write bank account mock properties.",
            desc: "Output attributes for BankAccount: accountNumber, balance. Behaviors: deposit, withdraw.",
            solCode: `public class BankMock {
    public static void main(String[] args) {
        System.out.println("BankAccount Attributes: accountNumber, balance");
        System.out.println("BankAccount Behaviors: deposit, withdraw");
    }
}`,
            solOut: `BankAccount Attributes: accountNumber, balance
BankAccount Behaviors: deposit, withdraw`,
            solExp: "Models software components by categorizing attributes and behaviors."
          },
          {
            q: "Generate procedural variable alert.",
            desc: "Print \"Variables and functions are separate in procedural code\".",
            solCode: `public class ProcAlert {
    public static void main(String[] args) {
        System.out.println("Variables and functions are separate in procedural code");
    }
}`,
            solOut: "Variables and functions are separate in procedural code",
            solExp: "Outputs a core conceptual difference between procedural and object-oriented paradigms."
          }
        ],
        predict: [
          {
            code: `public class ParadigmPredict {
    public static void main(String[] args) {
        System.out.println("OOP groups " + "Data and Behavior");
    }
}`,
            a: "OOP groups Data and Behavior",
            explain: "Reflects the basic definition of OOP combining fields and methods."
          },
          {
            code: `public class ObjectsPredict {
    public static void main(String[] args) {
        System.out.println("Objects are instances of " + "Classes");
    }
}`,
            a: "Objects are instances of Classes",
            explain: "Classes act as the template, and objects are the physical instances created from that template."
          }
        ],
        debug: [
          {
            q: "Analyze why separating logic from variables causes issues in this procedural mock script.",
            code: `public class ProceduralBug {
    public static int balance = 100;
    // Goal: deduct balance safely
    public static void withdraw(int amount) {
        balance -= amount; // Anyone can access balance directly!
    }
    public static void main(String[] args) {
        withdraw(150); // Negative balance unchecked
        System.out.println("Balance: " + balance);
    }
}`,
            bug: "Lack of Encapsulation. The balance variable is globally static and exposed, so it can be decremented below zero with no security checks.",
            solCode: `public class ProceduralBug {
    public static int balance = 100;
    // Fixed: added validation checks before deduction
    public static void withdraw(int amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Insufficient Funds");
        }
    }
    public static void main(String[] args) {
        withdraw(150);
        System.out.println("Balance: " + balance);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 11,
    topic: "Classes & Objects (Blueprints & Houses)",
    body: [
      {
        k: "intro",
        p: "To write OOP code, we must define templates called **Classes** and instantiate them to create concrete **Objects**."
      },
      {
        k: "why",
        p: "If you want to build 100 cars in software, writing variables for each car is impossible. A `Class` defines the common structure of all cars (color, model, speed). Once defined, you can instantiate 100 unique `Object` instances from that class, each holding different values for color and model."
      },
      {
        k: "def",
        p: "A **Class** is a user-defined template or blueprint from which objects are created. An **Object** is a concrete instance of a class, possessing attributes (stored in instance variables) and behaviors (defined in methods)."
      },
      {
        k: "heading",
        text: "Class Fields & Instance Variables"
      },
      {
        k: "bul",
        items: [
          "**Instance variables**: Variables declared inside a class but outside methods. Each object gets its own copy of these variables.",
          "**new Keyword**: Dynamically allocates memory for the new object and returns its reference address."
        ]
      },
      {
        k: "heading",
        text: "Code Example: Creating and Accessing Objects"
      },
      {
        k: "code",
        file: "ClassDemo.java",
        code: `// Template class
class Dog {
    String breed; // Attribute (Instance Variable)
    int age;      // Attribute
    
    // Behavior (Method)
    void bark() {
        System.out.println(breed + " says: Woof!");
    }
}

public class ClassDemo {
    public static void main(String[] args) {
        // Instantiate Object 1
        Dog dog1 = new Dog(); 
        dog1.breed = "Labrador";
        dog1.age = 3;
        
        // Instantiate Object 2
        Dog dog2 = new Dog(); 
        dog2.breed = "Poodle";
        dog2.age = 2;
        
        // Run behaviors
        dog1.bark();
        dog2.bark();
    }
}`,
        output: `Labrador says: Woof!
Poodle says: Woof!`,
        lines: [
          {
            n: 2,
            code: "class Dog {",
            explain: "Defines the template. Attributes breed and age are instance variables."
          },
          {
            n: 14,
            code: "Dog dog1 = new Dog();",
            explain: "Allocates a Dog object in Heap memory. dog1 holds its reference."
          },
          {
            n: 15,
            code: "dog1.breed = \"Labrador\";",
            explain: "Assigns values to dog1's specific breed field."
          },
          {
            n: 23,
            code: "dog1.bark();",
            explain: "Invokes behavior, which prints Labrador."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Using the static keyword on instance variables. Declaring `static String breed` inside Dog makes that variable shared by all Dog objects. Changing dog2's breed would overwrite dog1's breed.",
          "Attempting to access fields on a variable that hasn't been initialized (e.g. `Dog dog1; dog1.breed = \"X\";`), resulting in compile errors or `NullPointerException`."
        ]
      },
      {
        k: "best",
        items: [
          "Write each class in its own source file named exactly matching the class (e.g., `Dog.java`).",
          "Do not use the `static` keyword for variables that describe individual object state characteristics."
        ]
      },
      {
        k: "summary",
        items: ["Class defines structure; Object is the instance.", "Instance variables are independent for each object.", "static fields are shared; do not use them for object attributes."]
      },
      {
        k: "compare",
        title: "Class vs Object definition",
        a: {
          head: "Class (Blueprint)",
          rows: ["Source code template declaring variables and methods.", "Takes up no memory on Heap during design.", "Defines structural capabilities of types.", `Example: public class Dog { ... }`]
        },
        b: {
          head: "Object (Instance)",
          rows: ["Physical instance built inside Heap RAM.", "Occupies space based on instance variables.", "Carries real individual data properties.", "Example: Dog spot = new Dog();"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is a class?",
            a: "A blueprint or template that defines variables and methods common to all objects of that type."
          },
          {
            q: "What is an object?",
            a: "An instance of a class containing concrete data values."
          },
          {
            q: "What does the new keyword do in Java class instantiations?",
            a: "Allocates memory in the heap for the new object and returns its reference address."
          },
          {
            q: "How do instance variables differ from static variables?",
            a: "Instance variables belong to individual objects; static variables belong to the class and are shared by all instances."
          },
          {
            q: "What operator accesses an object's fields or methods?",
            a: "The dot operator `.`."
          }
        ],
        coding: [
          {
            q: "Write Student class and instantiation.",
            desc: "Create class Student with String name. In main class StudentApp, instantiate a student, assign name \"Amit\", print it.",
            solCode: `class Student {
    String name;
}

public class StudentApp {
    public static void main(String[] args) {
        Student s = new Student();
        s.name = "Amit";
        System.out.println("Student: " + s.name);
    }
}`,
            solOut: "Student: Amit",
            solExp: "Declares template and sets attribute content before printing."
          },
          {
            q: "Implement Lamp switch simulator.",
            desc: "Create class Lamp with boolean variable isOn. Add methods `turnOn` and `turnOff` to set isOn state. Test in main.",
            solCode: `class Lamp {
    boolean isOn;
    
    void turnOn() {
        isOn = true;
    }
    void turnOff() {
        isOn = false;
    }
}

public class LampApp {
    public static void main(String[] args) {
        Lamp l = new Lamp();
        l.turnOn();
        System.out.println("Lamp status: " + l.isOn);
    }
}`,
            solOut: "Lamp status: true",
            solExp: "Uses object methods to modify internal instance state boolean."
          },
          {
            q: "Create Book details displayer.",
            desc: "Create class Book with attributes String title and double price. Instantiate, assign \"Java Code\" and 29.99, and display them.",
            solCode: `class Book {
    String title;
    double price;
}

public class BookApp {
    public static void main(String[] args) {
        Book b = new Book();
        b.title = "Java Code";
        b.price = 29.99;
        System.out.println(b.title + " costs \$" + b.price);
    }
}`,
            solOut: "Java Code costs $29.99",
            solExp: "Demonstrates basic attributes storage on customized data structures."
          }
        ],
        predict: [
          {
            code: `class Counter {
    int count = 0;
}
public class CounterDemo {
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        c1.count = 5;
        System.out.print(c1.count + " " + c2.count);
    }
}`,
            a: "5 0",
            explain: "Each Counter object c1 and c2 has its own separate copy of instance variable `count`. Modifying `c1.count` leaves `c2.count` at its default value 0."
          },
          {
            code: `class CounterStatic {
    static int count = 0; // Shared static variable
}
public class CounterStaticDemo {
    public static void main(String[] args) {
        CounterStatic c1 = new CounterStatic();
        CounterStatic c2 = new CounterStatic();
        c1.count = 5; // Accessing static via instance reference
        System.out.print(c1.count + " " + c2.count);
    }
}`,
            a: "5 5",
            explain: "Because count is marked `static`, it is shared by all instances. Reassigning it to 5 updates the single value in class memory, so both variables display 5."
          }
        ],
        debug: [
          {
            q: "Why does this code cause a compiler crash, and how do you resolve it?",
            code: `class Phone {
    String model;
}
public class PhoneBug {
    public static void main(String[] args) {
        Phone p1; // Declared reference
        // Goal: assign model
        p1.model = "Pixel"; // Bug here
        System.out.println(p1.model);
    }
}`,
            bug: "Variable not initialized. The reference variable `p1` is declared but does not point to any object in memory, so accessing its attributes causes compile errors.",
            solCode: `class Phone {
    String model;
}
public class PhoneBug {
    public static void main(String[] args) {
        Phone p1 = new Phone(); // Fixed: instantiated object using new
        p1.model = "Pixel";
        System.out.println(p1.model);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 11,
    topic: "Constructors (Initialization)",
    body: [
      {
        k: "intro",
        p: "When creating an object using the `new` keyword, a special block of code called a **Constructor** runs automatically to initialize the object's attributes."
      },
      {
        k: "why",
        p: "Writing code that allocates an object and then manually assigns fields over three lines (`dog.breed = \"X\"; dog.age = 2;`) is verbose and risky. If you forget to assign a field, the object starts with empty values (`null` or `0`). A constructor forces developers to supply initial values immediately when creating the object, ensuring it starts in a valid state."
      },
      {
        k: "def",
        p: "A **Constructor** is a special initialization block in a class that shares the class's exact name and has no return type. It executes automatically during object creation to initialize fields."
      },
      {
        k: "heading",
        text: "Constructor Syntax Rules"
      },
      {
        k: "bul",
        items: [
          "**No Return Type**: Constructors must not specify return types (not even `void`). Adding `void` turns the constructor into a regular method.",
          "**Default Constructor**: If you write no constructors, Java automatically inserts a hidden default constructor with no parameters that sets variables to default values.",
          "**Constructor Overloading**: You can define multiple constructors with different parameter lists."
        ]
      },
      {
        k: "heading",
        text: "Code Example: Parameterized Constructor"
      },
      {
        k: "code",
        file: "ConstructorDemo.java",
        code: `class Car {
    String model;
    int year;
    
    // Parameterized Constructor
    Car(String m, int y) {
        model = m; // Initializing fields
        year = y;
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {
        // Instantiate and initialize in one line!
        Car myCar = new Car("Tesla Model 3", 2022);
        
        System.out.println("Car: " + myCar.model);
        System.out.println("Year: " + myCar.year);
    }
}`,
        output: `Car: Tesla Model 3
Year: 2022`,
        lines: [
          {
            n: 6,
            code: "Car(String m, int y) {",
            explain: "Declares constructor matching the class name. Takes inputs m and y."
          },
          {
            n: 15,
            code: "Car myCar = new Car(\"Tesla Model 3\", 2022);",
            explain: "Executes the constructor. Passes values to initialize the object attributes."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Adding a return type (like `void`) to the constructor definition. This makes it a standard method, preventing it from executing during instantiation and causing compile errors.",
          "Attempting to call the default constructor after declaring a parameterized one. If you define a parameterized constructor, Java **does not** automatically create the default constructor. (You must write it manually if needed)."
        ]
      },
      {
        k: "best",
        items: [
          "Use parameterized constructors to guarantee that objects are initialized with valid values immediately at instantiation.",
          "Keep constructor logic focused on field initialization. Avoid putting complex calculations or networking calls inside them."
        ]
      },
      {
        k: "summary",
        items: ["Constructors initialize object fields during instantiation.", "Must have the exact same name as the class and no return type.", "Default constructors are lost once parameterized constructors are added."]
      },
      {
        k: "compare",
        title: "Default vs Parameterized Constructors",
        a: {
          head: "Default Constructor",
          rows: ["Takes 0 arguments; auto-generated if none written.", "Assigns default zeros/nulls to instance variables.", "Requires no caller configuration.", `Example: Dog() {}`]
        },
        b: {
          head: "Parameterized Constructor",
          rows: ["Accepts variables to configure fields during creation.", "Initializes fields using caller argument values.", "Disables auto default constructor generations.", "Example: Dog(String breed, int age)"]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is a constructor in Java?",
            a: "A special block of code in a class that runs automatically during object creation to initialize fields."
          },
          {
            q: "What are the two key syntax rules for constructors?",
            a: "1. Must share the exact name of the class, 2. Must not have a return type (not even void)."
          },
          {
            q: "What is a default constructor?",
            a: "A constructor with no parameters that Java inserts automatically if a class has no other constructors."
          },
          {
            q: "If you define a parameterized constructor, does Java still insert the default constructor?",
            a: "No. You must declare it manually if you still want to allow creating empty objects."
          },
          {
            q: "Can a constructor be overloaded?",
            a: "Yes. You can define multiple constructors with different parameter signatures."
          }
        ],
        coding: [
          {
            q: "Write Book class with constructor.",
            desc: "Create class Book with String title. Add parameterized constructor initializing title. Instantiate a Book \"Java Basics\" and print title.",
            solCode: `class Book {
    String title;
    
    Book(String t) {
        title = t;
    }
}

public class BookConstructorApp {
    public static void main(String[] args) {
        Book b = new Book("Java Basics");
        System.out.println("Book: " + b.title);
    }
}`,
            solOut: "Book: Java Basics",
            solExp: "Declares constructor, initializes string field, and accesses it after instantiation."
          },
          {
            q: "Implement overloaded constructors.",
            desc: "Create class Point with int x and y. Add default constructor setting x,y = 0. Add parameterized constructor setting custom x,y. Instantiate both and print.",
            solCode: `class Point {
    int x, y;
    
    Point() { // Default
        x = 0;
        y = 0;
    }
    
    Point(int customX, int customY) { // Parameterized
        x = customX;
        y = customY;
    }
}

public class PointApp {
    public static void main(String[] args) {
        Point p1 = new Point();
        Point p2 = new Point(5, 10);
        System.out.println("p1: (" + p1.x + "," + p1.y + ") p2: (" + p2.x + "," + p2.y + ")");
    }
}`,
            solOut: "p1: (0,0) p2: (5,10)",
            solExp: "Demonstrates constructor overloading to support different initialization paths."
          },
          {
            q: "Create User object checker.",
            desc: "Create class User with String name. Add constructor, instantiate and verify print output.",
            solCode: `class User {
    String username;
    User(String u) {
        username = u;
    }
}

public class UserApp {
    public static void main(String[] args) {
        User u = new User("admin1");
        System.out.println("Username: " + u.username);
    }
}`,
            solOut: "Username: admin1",
            solExp: "Uses a simple constructor to load string inputs safely at object creation."
          }
        ],
        predict: [
          {
            code: `class Dog {
    String name;
    void Dog() { // Note the return type!
        name = "Fido";
    }
}
public class DogDemo {
    public static void main(String[] args) {
        Dog d = new Dog();
        System.out.println("d=" + d.name);
    }
}`,
            a: "d=null",
            explain: "Adding the return type `void` turns `Dog()` into a regular method, not a constructor. The compiler inserts a hidden default constructor, leaving the instance variable `name` at its default value `null`."
          },
          {
            code: `class Account {
    int balance;
    Account(int bal) {
        balance = bal;
    }
}
public class AccountDemo {
    public static void main(String[] args) {
        // Account a = new Account(); // Does this compile?
        System.out.println("No default constructor!");
    }
}`,
            a: "No default constructor!",
            explain: "The code would throw a compile error if the commented line were active because declaring a parameterized constructor removes the default constructor."
          }
        ],
        debug: [
          {
            q: "Explain the compile issue in this class configuration.",
            code: `class Employee {
    String name;
    Employee(String empName) {
        name = empName;
    }
}
public class EmployeeApp {
    public static void main(String[] args) {
        // Goal: instantiate default employee
        Employee e1 = new Employee(); // Bug here
        System.out.println("Done");
    }
}`,
            bug: "The compiler cannot find a default constructor. Since a parameterized constructor `Employee(String)` is defined, Java does not insert the default constructor automatically. To fix this, define a no-argument constructor inside the class.",
            solCode: `class Employee {
    String name;
    
    // Fixed: added default no-argument constructor manually
    Employee() {
        name = "Unknown";
    }
    
    Employee(String empName) {
        name = empName;
    }
}
public class EmployeeApp {
    public static void main(String[] args) {
        Employee e1 = new Employee();
        System.out.println("Name: " + e1.name);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 11,
    topic: "The this Keyword (Self Reference)",
    body: [
      {
        k: "intro",
        p: "Inside a class definition, the keyword **this** acts as a reference to the current object instance executing the code."
      },
      {
        k: "why",
        p: "A common naming practice is to give constructor parameters the exact same name as the instance variables they initialize (e.g. `name = name`). This causes a conflict called **Variable Shadowing** where the parameter hides the instance variable. The keyword `this` resolves this conflict: it tells the compiler \"assign this parameter to the instance variable of the *current* object\"."
      },
      {
        k: "def",
        p: "The **this** keyword is a reference variable in Java that points to the current object instance on which a method or constructor is being invoked."
      },
      {
        k: "heading",
        text: "Resolving Shadowing Conflicts"
      },
      {
        k: "syntax",
        code: `class Employee {
    String name; // Instance Variable
    
    Employee(String name) { // name is Parameter shadowing the field
        this.name = name; // this.name points to Instance Variable
    }
}`
      },
      {
        k: "heading",
        text: "Code Example: Self Reference in Action"
      },
      {
        k: "code",
        file: "ThisDemo.java",
        code: `class Student {
    String name;
    
    Student(String name) {
        this.name = name; // Resolves variable shadowing
    }
    
    void printDetails() {
        // this can be used to call other instance methods
        System.out.println("Student Name: " + this.name);
    }
}

public class ThisDemo {
    public static void main(String[] args) {
        Student s = new Student("Rohit");
        s.printDetails();
    }
}`,
        output: "Student Name: Rohit",
        lines: [
          {
            n: 5,
            code: "this.name = name;",
            explain: "this.name points to the instance field on line 2, while the right-side name points to the parameter on line 4."
          },
          {
            n: 10,
            code: `System.out.println("Student Name: " + this.name);`,
            explain: "Accesses the instance variable of the object invoking this method (s)."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Using the `this` keyword inside static methods. Since static methods belong to the class rather than a specific object, there is no \"current object instance\", so using `this` raises compile-time errors.",
          "Forgetting to prefix instance fields with `this` when shadowing parameter names are identical, leading to variables assigning values to themselves (`name = name`) and leaving fields uninitialized."
        ]
      },
      {
        k: "best",
        items: [
          "Always use `this.fieldName = parameterName` in constructors to map inputs cleanly.",
          "Keep your constructor parameter names consistent with your class field names."
        ]
      },
      {
        k: "summary",
        items: ["this keyword references the current executing object instance.", "Resolves variable shadowing conflicts in constructors.", "Cannot be used inside static methods."]
      },
      {
        k: "compare",
        title: "Instance variables vs Parameter variables",
        a: {
          head: "Instance Variables",
          rows: ["Fields declared inside class body.", "Accessed using this prefix if shadowed.", "Example: this.age", "Holds object state."]
        },
        b: {
          head: "Parameter Variables",
          rows: ["Variables defined inside constructor/method headers.", "Shadows instance variables if names match.", "Example: int age", "Carries incoming initialization values."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is the purpose of the this keyword in Java?",
            a: "It references the current object instance, resolving naming conflicts and calling other constructors/methods."
          },
          {
            q: "What is variable shadowing?",
            a: "A situation where a local variable or parameter shares the same name as an instance variable, hiding it within that scope."
          },
          {
            q: "Can you use the this keyword inside a static method?",
            a: "No, static methods belong to the class, not an object instance, so there is no `this` reference."
          },
          {
            q: "How does `this.x = x` resolve shadowing?",
            a: "`this.x` explicitly targets the class instance variable, while `x` targets the local parameter."
          },
          {
            q: "What error is raised if you use `this` inside static main?",
            a: "Compile error: \"non-static variable this cannot be referenced from a static context\"."
          }
        ],
        coding: [
          {
            q: "Write Customer class using this keyword.",
            desc: "Create class Customer with String id. Write constructor taking String id, using `this.id = id`. Instantiate \"C100\" and print id.",
            solCode: `class Customer {
    String id;
    
    Customer(String id) {
        this.id = id;
    }
}

public class CustomerApp {
    public static void main(String[] args) {
        Customer c = new Customer("C100");
        System.out.println("ID: " + c.id);
    }
}`,
            solOut: "ID: C100",
            solExp: "Uses the this reference to resolve naming conflict between field and constructor parameter."
          },
          {
            q: "Implement self method call.",
            desc: "Create class Calc with method `show` printing \"Show\". Add method `run` that calls `this.show()`. Test in main.",
            solCode: `class Calc {
    void show() {
        System.out.println("Show");
    }
    void run() {
        this.show(); // Calls show on this instance
    }
}

public class CalcApp {
    public static void main(String[] args) {
        Calc c = new Calc();
        c.run();
    }
}`,
            solOut: "Show",
            solExp: "Uses the this reference to invoke an instance method on itself."
          },
          {
            q: "Create parameter shadowing validator.",
            desc: "Write class User containing String role. Construct using `this.role = role`. Print role.",
            solCode: `class User {
    String role;
    User(String role) {
        this.role = role;
    }
}

public class UserApp {
    public static void main(String[] args) {
        User u = new User("Manager");
        System.out.println("Role: " + u.role);
    }
}`,
            solOut: "Role: Manager",
            solExp: "Resolves the parameter name match to load state values at instantiation."
          }
        ],
        predict: [
          {
            code: `class Item {
    String name = "Default";
    Item(String name) {
        name = name; // Missing this!
    }
}
public class ItemDemo {
    public static void main(String[] args) {
        Item item = new Item("Laptop");
        System.out.println(item.name);
    }
}`,
            a: "Default",
            explain: "Without `this.`, the statement `name = name` assigns the parameter to itself. The instance variable `name` is never updated and retains its default value \"Default\"."
          },
          {
            code: `public class StaticThisDemo {
    public static void main(String[] args) {
        // System.out.println(this); // Does this compile?
        System.out.println("Static Context!");
    }
}`,
            a: "Static Context!",
            explain: "The code would throw a compiler error if the commented line were active because the static `main` method has no object reference context, so `this` is unavailable."
          }
        ],
        debug: [
          {
            q: "Why does this code throw compile errors, and how do you resolve it?",
            code: `class Member {
    String name;
    Member(String name) {
        this.name = name;
    }
    public static void printMember() { // static method
        // Goal: print current member name
        System.out.println("Member: " + this.name); // Bug here!
    }
}
public class MemberApp {
    public static void main(String[] args) {
        System.out.println("Member test");
    }
}`,
            bug: "The `this` keyword is used inside a static method (`printMember()`), which is illegal in Java because static context does not carry a current object instance reference.",
            solCode: `class Member {
    String name;
    Member(String name) {
        this.name = name;
    }
    // Fixed: changed to an instance method (removed static)
    public void printMember() {
        System.out.println("Member: " + this.name); // Legal
    }
}
public class MemberApp {
    public static void main(String[] args) {
        Member m = new Member("Alex");
        m.printMember(); // Invoked on instance reference
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "module",
    num: 12,
    title: "Mini Project: Student System",
    desc: "Bring it all together! Combine variables, operators, conditional branching, iteration loops, array collections, string methods, user console inputs, and OOP objects to build a fully functional Student Management System application.",
    topics: ["Application System Design", "Data Record Management", "Complete Project Integration"]
  },
  {
    type: "slide",
    module: 12,
    topic: "Application System Design",
    body: [
      {
        k: "intro",
        p: "A real software application consists of multiple components working together. In this mini-project, we will build a **Student Management System** that allows adding students, displaying details, and searching records."
      },
      {
        k: "why",
        p: "Writing single-topic scripts is good for learning syntax, but building a complete project teaches you how different concepts connect. Variables store user inputs, loops keep the menu running, conditions process choices, arrays hold records, and object blueprints model real entities. This brings your learning to life."
      },
      {
        k: "def",
        p: "The **System Design** of our project defines a `Student` class containing attributes (`id`, `name`, `gpa`) and behaviors (printing stats). A main driver class manages a menu interface using a Scanner terminal loop."
      },
      {
        k: "heading",
        text: "System Architecture Components"
      },
      {
        k: "bul",
        items: [
          "**Data Model (Student class)**: Encapsulates individual student entity properties.",
          "**Database Layer (Student[] array)**: Stores student records contiguously in memory.",
          "**Control Layer (Main class)**: Directs program flow, reads Scanner console inputs, and routes operations."
        ]
      },
      {
        k: "heading",
        text: "Code Example: The Student Entity Class"
      },
      {
        k: "code",
        file: "Student.java",
        code: `class Student {
    int rollNumber;
    String name;
    double gpa;
    
    // Constructor to initialize student record
    Student(int rollNumber, String name, double gpa) {
        this.rollNumber = rollNumber;
        this.name = name;
        this.gpa = gpa;
    }
    
    // Method to display student stats
    void displayDetails() {
        System.out.println("Roll Number: " + rollNumber + " | Name: " + name + " | GPA: " + gpa);
    }
}`,
        output: "Compiled Successfully.",
        lines: [
          {
            n: 2,
            code: "int rollNumber;",
            explain: "Defines unique identifier attribute."
          },
          {
            n: 7,
            code: "Student(...) {",
            explain: "Constructor initializes properties during object allocation."
          },
          {
            n: 14,
            code: "void displayDetails() {",
            explain: "Instance method designed to print the object's state attributes."
          }
        ]
      },
      {
        k: "summary",
        items: ["System design models real-world entities into classes.", "Student class wraps ID, Name, and GPA fields.", "Constructors provide initial state on instantiation."]
      },
      {
        k: "compare",
        title: "Top-Down vs Bottom-Up Design",
        a: {
          head: "Top-Down Design",
          rows: ["Starting with overall system logic and branching down.", "Builds main navigation flows before detailed code.", "Helps align system architectures early.", "Focuses on user screens layout."]
        },
        b: {
          head: "Bottom-Up Design",
          rows: ["Starting with fundamental low-level components.", "Builds helper databases and entities first.", "Ensures individual layers work before assembly.", "Focuses on basic units validation."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is the role of the Student class in our project?",
            a: "To act as a blueprint representing individual student data records."
          },
          {
            q: "Why do we write a constructor for the Student class?",
            a: "To ensure every Student object is initialized with an ID, Name, and GPA at creation."
          },
          {
            q: "Is there a main method inside the Student class?",
            a: "No. The Student class only defines the template; the main driver class contains the program entry point."
          },
          {
            q: "What attributes does our Student entity class encapsulate?",
            a: "`rollNumber` (int), `name` (String), and `gpa` (double)."
          },
          {
            q: "What is the return type of the displayDetails() method in the Student class?",
            a: "`void`."
          }
        ],
        coding: [
          {
            q: "Write simple class initialization test.",
            desc: "Create class Student with int ID. Instantiate one student with ID 101 and print it.",
            solCode: `class Student {
    int id;
    Student(int id) {
        this.id = id;
    }
}
public class TestApp {
    public static void main(String[] args) {
        Student s = new Student(101);
        System.out.println("ID: " + s.id);
    }
}`,
            solOut: "ID: 101",
            solExp: "Defines the initial entity constructor and confirms instantiation."
          },
          {
            q: "Implement GPA validator helper.",
            desc: "Add method `isHonors` returning boolean inside Student class. Returns true if GPA >= 3.5. Test in main.",
            solCode: `class Student {
    double gpa;
    Student(double gpa) {
        this.gpa = gpa;
    }
    boolean isHonors() {
        return this.gpa >= 3.5;
    }
}
public class HonorsApp {
    public static void main(String[] args) {
        Student s = new Student(3.8);
        System.out.println("Honors: " + s.isHonors());
    }
}`,
            solOut: "Honors: true",
            solExp: "Adds logical evaluation methods inside object structures."
          },
          {
            q: "Create mock console header generator.",
            desc: "Write static method `printMenuHeader` outputting a formatted border. Call from main.",
            solCode: `public class MenuHeader {
    public static void printMenuHeader() {
        System.out.println("=== STUDENT SYSTEM ===");
    }
    public static void main(String[] args) {
        printMenuHeader();
    }
}`,
            solOut: "=== STUDENT SYSTEM ===",
            solExp: "Uses helper methods to clean layout printouts."
          }
        ],
        predict: [
          {
            code: `class Student {
    String name;
    Student(String name) {
        this.name = name;
    }
}
public class PredictProj {
    public static void main(String[] args) {
        Student s = new Student("Raj");
        System.out.println(s.name);
    }
}`,
            a: "Raj",
            explain: "The constructor successfully sets the instance field `name` to \"Raj\"."
          },
          {
            code: `class StudentProcedural {
    public static void printStudent(String name, double gpa) {
        System.out.print(name + ":" + gpa);
    }
    public static void main(String[] args) {
        printStudent("Dev", 3.2);
    }
}`,
            a: "Dev:3.2",
            explain: "Runs static printer method using parameters passed during main execution."
          }
        ],
        debug: [
          {
            q: "Explain the compile bug in this student record instantiation block.",
            code: `class Student {
    int id;
    Student(int id) {
        this.id = id;
    }
}
public class StudentInstBug {
    public static void main(String[] args) {
        // Goal: instantiate student with ID 15
        Student s = new Student(); // Bug here!
        System.out.println("Created");
    }
}`,
            bug: "The compiler cannot find a no-argument constructor. Since a parameterized constructor `Student(int)` is defined, the default constructor is unavailable. To fix it, pass the ID argument during instantiation.",
            solCode: `class Student {
    int id;
    Student(int id) {
        this.id = id;
    }
}
public class StudentInstBug {
    public static void main(String[] args) {
        // Fixed: passed argument 15 to match constructor signature
        Student s = new Student(15);
        System.out.println("Created ID: " + s.id);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 12,
    topic: "Data Record Management",
    body: [
      {
        k: "intro",
        p: "To manage multiple students, we declare an array of Student objects: `Student[] db = new Student[10];`. This forms our program's local database."
      },
      {
        k: "why",
        p: "A class represents one student, but a system needs to manage lists of students. Storing objects inside an array lets us search, modify, and display the entire database inside loops. This teaches data manipulation in memory."
      },
      {
        k: "def",
        p: "An **Object Array** stores references to objects rather than primitive values. Unallocated elements in a newly created object array default to `null` value references."
      },
      {
        k: "heading",
        text: "The Object Database Memory Model (Size = 3)"
      },
      {
        k: "table",
        head: ["Index Slot", "Reference Type", "Current Value / Reference", "Data state"],
        rows: [
          ["0", "Student object reference", "Points to Student(101, \"Amit\", 3.6)", "Allocated record"],
          ["1", "Student object reference", "Points to Student(102, \"Bina\", 3.9)", "Allocated record"],
          ["2", "Student object reference", "`null`", "Empty slot (available)"]
        ]
      },
      {
        k: "heading",
        text: "Code Example: Managing Object Arrays"
      },
      {
        k: "code",
        file: "StudentDatabase.java",
        code: `public class StudentDatabase {
    public static void main(String[] args) {
        // Reserve memory slots for up to 3 Student object references
        Student[] database = new Student[3];
        
        // Add student records (allocate objects to array slots)
        database[0] = new Student(101, "Amit", 3.6);
        database[1] = new Student(102, "Bina", 3.9);
        
        // Loop through database and print active records
        for (int i = 0; i < database.length; i++) {
            if (database[i] != null) { // Skip empty slots to prevent NullPointerException
                database[i].displayDetails();
            } else {
                System.out.println("Slot " + i + " is empty.");
            }
        }
    }
}`,
        output: `Roll Number: 101 | Name: Amit | GPA: 3.6
Roll Number: 102 | Name: Bina | GPA: 3.9
Slot 2 is empty.`,
        lines: [
          {
            n: 4,
            code: "Student[] database = new Student[3];",
            explain: "Allocates array of size 3. JVM sets all slots to default value: null."
          },
          {
            n: 7,
            code: "database[0] = new Student(...);",
            explain: "Instantiates a Student object and stores its reference in slot 0."
          },
          {
            n: 12,
            code: "if (database[i] != null) {",
            explain: "Critical check: verifies a slot contains an object before invoking its methods. Calling methods on null slots crashes the program."
          }
        ]
      },
      {
        k: "mistakes",
        items: [
          "Forgetting to check for `null` elements during object array loops, leading to runtime **NullPointerException** crashes.",
          "Treating object arrays like primitive arrays (e.g. attempting to read `database[0].name` before instantiating an object into `database[0]`)."
        ]
      },
      {
        k: "best",
        items: [
          "Always guard object array traversal logic with `if (array[i] != null)` check filters.",
          "Limit the database size parameters clearly to prevent array boundary errors."
        ]
      },
      {
        k: "summary",
        items: ["Arrays can store object references instead of primitives.", "Uninitialized object slots hold null references by default.", "Null checks are mandatory to prevent NullPointerExceptions."]
      },
      {
        k: "compare",
        title: "Array of Primitives vs Array of Objects",
        a: {
          head: "Primitive Array (int[])",
          rows: ["Values stored directly in allocated heap sequence slots.", "Initialized to zeros automatically.", "Light memory footprint.", "Stores numeric data directly."]
        },
        b: {
          head: "Object Array (Student[])",
          rows: ["Stores references to independent objects on heap.", "Initialized to nulls automatically.", "Requires manual object instantiations at each index.", "Stores complex record entities."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What does a newly allocated array of Student objects contain by default?",
            a: "`null` values in all slots."
          },
          {
            q: "What is a NullPointerException?",
            a: "A runtime error raised when you attempt to invoke methods or access fields on a variable pointing to no object (`null`)."
          },
          {
            q: "How do you guard against NullPointerException in object arrays?",
            a: "Add an `if (array[i] != null)` check before accessing elements."
          },
          {
            q: "If database is size 5 and contains 3 records, what do the last 2 slots contain?",
            a: "`null` references."
          },
          {
            q: "Can you store custom objects of other classes inside a Student array?",
            a: "No, Java arrays are strongly-typed and restricted to the declared object class type."
          }
        ],
        coding: [
          {
            q: "Write null-guarded student printer.",
            desc: "Initialize Student array of size 2. Populate index 0 with Student(101, \"A\"). Leave index 1 null. Write a loop printing name if not null.",
            solCode: `class Student {
    String name;
    Student(String name) { this.name = name; }
}
public class NullGuardApp {
    public static void main(String[] args) {
        Student[] list = new Student[2];
        list[0] = new Student("A");
        for (int i = 0; i < list.length; i++) {
            if (list[i] != null) {
                System.out.println(list[i].name);
            }
        }
    }
}`,
            solOut: "A",
            solExp: "Safely loops and prints, skipping null values without crashing."
          },
          {
            q: "Implement linear search by ID.",
            desc: "Create array with Student(101, \"A\") and Student(102, \"B\"). Search for ID 102. If found, print their name.",
            solCode: `class Student {
    int id;
    String name;
    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
public class SearchStudentApp {
    public static void main(String[] args) {
        Student[] db = { new Student(101, "A"), new Student(102, "B") };
        int target = 102;
        for (int i = 0; i < db.length; i++) {
            if (db[i].id == target) {
                System.out.println("Found: " + db[i].name);
                break;
            }
        }
    }
}`,
            solOut: "Found: B",
            solExp: "Performs a linear scan, comparing IDs to find and print the matching student's name."
          },
          {
            q: "Create GPA threshold scanner.",
            desc: "Search Student array: s1(3.2), s2(3.9). Print names of students with GPA > 3.5.",
            solCode: `class Student {
    String name;
    double gpa;
    Student(String name, double gpa) {
        this.name = name;
        this.gpa = gpa;
    }
}
public class GpaScannerApp {
    public static void main(String[] args) {
        Student[] list = { new Student("A", 3.2), new Student("B", 3.9) };
        for (int i = 0; i < list.length; i++) {
            if (list[i].gpa > 3.5) {
                System.out.println(list[i].name);
            }
        }
    }
}`,
            solOut: "B",
            solExp: "Filters records matching threshold criteria."
          }
        ],
        predict: [
          {
            code: `class Student {
    String name = "A";
}
public class NullPredictApp {
    public static void main(String[] args) {
        Student[] db = new Student[2];
        try {
            System.out.println(db[0].name);
        } catch (NullPointerException e) {
            System.out.println("Crashed!");
        }
    }
}`,
            a: "Crashed!",
            explain: "The array slot `db[0]` is initialized to null. Accessing `db[0].name` throws a NullPointerException."
          },
          {
            code: `class Student {
    String name;
    Student(String name) { this.name = name; }
}
public class ArrayLengthPredict {
    public static void main(String[] args) {
        Student[] list = { new Student("A"), new Student("B") };
        System.out.println(list.length);
    }
}`,
            a: "2",
            explain: "The array literal creates an array of size 2, so the length property is 2."
          }
        ],
        debug: [
          {
            q: "Fix the NullPointerException in this student search algorithm.",
            code: `class Student {
    int id;
    Student(int id) { this.id = id; }
}
public class SearchCrashBug {
    public static void main(String[] args) {
        Student[] list = new Student[3];
        list[0] = new Student(101);
        list[1] = new Student(102);
        // list[2] remains null
        int target = 102;
        for (int i = 0; i < list.length; i++) {
            if (list[i].id == target) { // Bug here!
                System.out.println("Found");
            }
        }
    }
}`,
            bug: "The loop accesses `list[2].id`. Since `list[2]` is null, this throws a NullPointerException. Fix by adding a null check inside the loop condition.",
            solCode: `class Student {
    int id;
    Student(int id) { this.id = id; }
}
public class SearchCrashBug {
    public static void main(String[] args) {
        Student[] list = new Student[3];
        list[0] = new Student(101);
        list[1] = new Student(102);
        int target = 102;
        for (int i = 0; i < list.length; i++) {
            // Fixed: added a null check before accessing ID field
            if (list[i] != null && list[i].id == target) {
                System.out.println("Found");
            }
        }
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 12,
    topic: "Complete Project Integration",
    body: [
      {
        k: "intro",
        p: "We will now combine all components into a complete, interactive **Student Management System** program containing a text-based menu."
      },
      {
        k: "why",
        p: "This project integrates all core programming concepts into a single workspace. You will see how variables, objects, loops, scanner input, and conditional menus fit together to form a real application."
      },
      {
        k: "def",
        p: "The complete project integrates the `Student` data model, a `Student[]` array database, and a `do-while` menu loop in the main driver class to perform CRUD (Create, Read, Update, Delete) operations."
      },
      {
        k: "heading",
        text: "The Complete SMS Project Code"
      },
      {
        k: "code",
        file: "StudentSystem.java",
        code: `import java.util.Scanner;

class Student {
    int id;
    String name;
    double gpa;

    Student(int id, String name, double gpa) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
    }

    void printRecord() {
        System.out.println("ID: " + id + " | Name: " + name + " | GPA: " + gpa);
    }
}

public class StudentSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Student[] db = new Student[5]; // Stores up to 5 student records
        int studentCount = 0; // Tracks active student count
        int choice;

        do {
            System.out.println("\n=== STUDENT MANAGEMENT SYSTEM ===");
            System.out.println("1. Add Student");
            System.out.println("2. View All Students");
            System.out.println("3. Search Student by ID");
            System.out.println("4. Exit");
            System.out.print("Enter choice (1-4): ");
            choice = scanner.nextInt();

            if (choice == 1) {
                if (studentCount < db.length) {
                    System.out.print("Enter Roll ID: ");
                    int id = scanner.nextInt();
                    scanner.nextLine(); // Clear buffer
                    System.out.print("Enter Student Name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter GPA: ");
                    double gpa = scanner.nextDouble();

                    // Create new student object and save to array
                    db[studentCount] = new Student(id, name, gpa);
                    studentCount++;
                    System.out.println("Record Added Successfully!");
                } else {
                    System.out.println("Database full!");
                }
            } else if (choice == 2) {
                System.out.println("--- All Students ---");
                if (studentCount == 0) {
                    System.out.println("No records found.");
                } else {
                    for (int i = 0; i < db.length; i++) {
                        if (db[i] != null) {
                            db[i].printRecord();
                        }
                    }
                }
            } else if (choice == 3) {
                System.out.print("Enter Target ID to search: ");
                int targetId = scanner.nextInt();
                boolean found = false;
                for (int i = 0; i < db.length; i++) {
                    if (db[i] != null && db[i].id == targetId) {
                        System.out.print("Record Found -> ");
                        db[i].printRecord();
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    System.out.println("Record with ID " + targetId + " not found.");
                }
            } else if (choice == 4) {
                System.out.println("Thank you for using SMS. Exiting...");
            } else {
                System.out.println("Invalid Choice! Try again.");
            }

        } while (choice != 4);

        scanner.close();
    }
}`,
        output: `=== STUDENT MANAGEMENT SYSTEM ===
1. Add Student
2. View All Students
3. Search Student by ID
4. Exit
Enter choice (1-4): 1
Enter Roll ID: 101
Enter Student Name: Amit
Enter GPA: 3.8
Record Added Successfully!`,
        lines: [
          {
            n: 21,
            code: "Student[] db = new Student[5];",
            explain: "Allocates the database array size limit."
          },
          {
            n: 22,
            code: "int studentCount = 0;",
            explain: "Keeps track of where to insert the next student in the array."
          },
          {
            n: 25,
            code: "do {",
            explain: "Keeps the system menu active until the user selects option 4 (Exit)."
          },
          {
            n: 41,
            code: "db[studentCount] = new Student(id, name, gpa);",
            explain: "Instantiates a new Student object using scanner data inputs and stores it in the next available array index."
          }
        ]
      },
      {
        k: "best",
        items: [
          "Always use `scanner.nextLine()` to clear the scanner buffer after calling `nextInt()` or `nextDouble()`.",
          "Validate input ranges (like confirming GPAs are between 0.0 and 4.0) to prevent dirty data."
        ]
      },
      {
        k: "summary",
        items: ["System integration combines components into one app.", "Scanner inputs populate object attributes dynamically.", "Loops and conditions power interactive menus."]
      },
      {
        k: "compare",
        title: "Modular Integration vs Monolithic Code",
        a: {
          head: "Modular Classes",
          rows: ["Separates system tasks into dedicated helper classes.", "Highly readable, testable, and maintainable.", "Enforces clean separation of concerns.", "Example: AppLauncher, Database, Student."]
        },
        b: {
          head: "Monolithic Code",
          rows: ["Piles all system logic into a single class.", "Difficult to navigate, troubleshoot, and refactor.", "High risk of code duplication.", "Example: Main carrying 1,000 lines of UI and math."]
        }
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "How does our program prevent writing into indexes beyond the array size?",
            a: "By checking `studentCount < db.length` before adding a new student."
          },
          {
            q: "What clears the Scanner buffer after reading GPAs?",
            a: "Calling `scanner.nextLine();` (or nextInt, though here we did it after nextInt for name reading)."
          },
          {
            q: "What happens to the added student records when you exit the program?",
            a: "They are lost, since variables are stored in RAM (volatile memory) and not saved to a hard drive database."
          },
          {
            q: "How does choice 3 search student list records?",
            a: "By performing a linear search, matching student IDs in the array against user search inputs."
          },
          {
            q: "What is the loop control variable for our menu system?",
            a: "The integer variable `choice`."
          }
        ],
        coding: [
          {
            q: "Write simple calculator menu loop.",
            desc: "Write menu do-while loop matching inputs: 1 -> print \"Add\", 2 -> print \"Exit\". Exit loop when choice is 2.",
            solCode: `import java.util.Scanner;

public class CalcMenu {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int choice;
        do {
            System.out.print("Enter choice (1-Add, 2-Exit): ");
            choice = input.nextInt();
            if (choice == 1) {
                System.out.println("Add");
            }
        } while (choice != 2);
        System.out.println("Exited");
        input.close();
    }
}`,
            solOut: `Enter choice (1-Add, 2-Exit): 1
Add
Enter choice (1-Add, 2-Exit): 2
Exited`,
            solExp: "Uses a standard do-while control loop to run user menus continuously."
          },
          {
            q: "Implement GPA updater logic.",
            desc: "Extend Student class: write method `updateGpa(double newGpa)` to reassign gpa field. Instantiate s(3.0), update to 3.5, print GPA.",
            solCode: `class Student {
    double gpa;
    Student(double gpa) { this.gpa = gpa; }
    void updateGpa(double newGpa) {
        this.gpa = newGpa;
    }
}
public class GpaUpdateApp {
    public static void main(String[] args) {
        Student s = new Student(3.0);
        s.updateGpa(3.5);
        System.out.println("New GPA: " + s.gpa);
    }
}`,
            solOut: "New GPA: 3.5",
            solExp: "Updates internal state variable of object dynamically using helper methods."
          },
          {
            q: "Create mock database size warning.",
            desc: "Given studentCount = 5 and database limit = 5. Print warning \"Database full\" if count >= limit.",
            solCode: `public class DbLimitCheck {
    public static void main(String[] args) {
        int count = 5;
        int limit = 5;
        if (count >= limit) {
            System.out.println("Database full");
        }
    }
}`,
            solOut: "Database full",
            solExp: "Uses conditional operators to guard array storage limits."
          }
        ],
        predict: [
          {
            code: `public class SelectPredict {
    public static void main(String[] args) {
        int choice = 4;
        if (choice == 4) {
            System.out.print("Exit ");
        }
        System.out.print("Done");
    }
}`,
            a: "Exit Done",
            explain: "The condition matches choice 4, printing \"Exit \". Control continues, printing \"Done\"."
          },
          {
            code: `class Student {
    int id;
    Student(int id) { this.id = id; }
}
public class DbCountPredict {
    public static void main(String[] args) {
        Student[] db = new Student[5];
        db[0] = new Student(1);
        db[1] = new Student(2);
        int count = 0;
        for(int i=0; i<db.length; i++) {
            if(db[i] != null) count++;
        }
        System.out.println("Records: " + count);
    }
}`,
            a: "Records: 2",
            explain: "Scans array and increments count for the 2 non-null object slots."
          }
        ],
        debug: [
          {
            q: "Explain the scanner buffer mismatch bug in this menu option selector.",
            code: `import java.util.Scanner;
public class MenuBufferBug {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter ID: ");
        int id = input.nextInt(); // Reads integer
        System.out.print("Enter Name: ");
        String name = input.nextLine(); // Bug here! skips input!
        System.out.println("ID: " + id + " Name: [" + name + "]");
        input.close();
    }
}`,
            bug: "The `nextInt()` method leaves a newline character `\\n` in the scanner buffer. When `nextLine()` is called, it reads that newline character instantly, skipping user input for the name. Fix by adding a buffer-clearing `nextLine()` call between them.",
            solCode: `import java.util.Scanner;
public class MenuBufferBug {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter ID: ");
        int id = input.nextInt();
        input.nextLine(); // Fixed: clears the newline character from buffer
        System.out.print("Enter Name: ");
        String name = input.nextLine(); // Reads user input correctly
        System.out.println("ID: " + id + " Name: [" + name + "]");
        input.close();
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "module",
    num: 13,
    title: "Revision & Cheat Sheets",
    desc: "Review your Core Java learning. Consult Java keyword definition maps, comprehensive cheat sheets, compiler commands, and code checklist summaries.",
    topics: ["Java Keyword Definition Table", "Quick Syntax Cheat Sheets"]
  },
  {
    type: "slide",
    module: 13,
    topic: "Java Keyword Definition Table",
    body: [
      {
        k: "intro",
        p: "This table compiles the essential Java keywords and concepts covered in this Core Java Workshop."
      },
      {
        k: "table",
        head: ["Keyword / Concept", "Definition", "Core Role / Usage"],
        rows: [
          ["`class`", "Defines a new user class template.", `\`class Dog { ... }\``],
          ["`public`", "Access modifier: visible from any class.", `\`public class Main\``],
          ["`static`", "Belongs to the class itself, not object instances.", `\`public static void main\``],
          ["`void`", "Specifies that a method does not return a value.", "`void printDetails()`"],
          ["`if` / `else`", "Conditional logic paths.", "`if (balance > 10)`"],
          ["`switch`", "Selects one execution path out of multiple values.", `\`switch(day) { case 1: }\``],
          ["`while`", "Condition-controlled loop.", "`while(count <= 10)`"],
          ["`for`", "Count-controlled loop with header blocks.", "`for(int i=0; i<5; i++)`"],
          ["`break`", "Exits loops or switch structures immediately.", "`if(x == 5) break;`"],
          ["`continue`", "Skips the remaining statements in the current iteration.", "`if(x % 2 == 0) continue;`"],
          ["`new`", "Allocates objects or arrays in Heap memory.", "`Dog d = new Dog();`"],
          ["`this`", "References the current object instance.", "`this.name = name;`"],
          ["`null`", "Indicates a reference points to no object.", "`Student s = null;`"]
        ]
      },
      {
        k: "summary",
        items: ["Keywords are reserved words that have predefined meanings in Java.", "Identifiers (like variable or method names) must not match reserved keywords."]
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is a reserved keyword in Java?",
            a: "A reserved keyword is a predefined word that has a special semantic meaning to the compiler (such as class, public, or void) and cannot be used as a variable name or method identifier."
          },
          {
            q: "Can you name a Java keyword that starts with the letter 'n'?",
            a: "Yes: `new` (used to allocate heap objects) and `null` (literal empty reference value)."
          }
        ],
        coding: [
          {
            q: "Verify a non-keyword identifier declaration.",
            desc: "Create a Java program declaring a variable named publicVar (not keyword public) initialized to 500, then output it.",
            solCode: `public class PublicVarDemo {
    public static void main(String[] args) {
        int publicVar = 500; // publicVar is valid (public is not)
        System.out.println(publicVar);
    }
}`,
            solOut: "500",
            solExp: "While 'public' is a keyword, 'publicVar' is a valid user identifier."
          }
        ],
        predict: [
          {
            code: `public class KeywordPredict {
    public static void main(String[] args) {
        int voidVal = 100;
        System.out.println(voidVal);
    }
}`,
            a: "100",
            explain: "Although 'void' is a keyword, 'voidVal' is a distinct text name, which makes it a valid identifier."
          }
        ],
        debug: [
          {
            q: "Find the compilation bug.",
            code: `public class BadKeyword {
    public static void main(String[] args) {
        int class = 5;
        System.out.println(class);
    }
}`,
            bug: "Using the reserved keyword 'class' as a variable identifier on line 3.",
            solCode: `public class BadKeyword {
    public static void main(String[] args) {
        int classNumber = 5; // Fixed identifier
        System.out.println(classNumber);
    }
}`
          }
        ]
      }
    ]
  },
  {
    type: "slide",
    module: 13,
    topic: "Quick Syntax Cheat Sheets",
    body: [
      {
        k: "intro",
        p: "This cheat sheet provides a quick reference for syntax patterns, terminal commands, and best practices."
      },
      {
        k: "heading",
        text: "1. Variables & Types Reference"
      },
      {
        k: "syntax",
        code: `int count = 10;            // 4-byte integer
double price = 19.99;      // 8-byte floating point
boolean isActive = true;   // true or false
char grade = 'A';          // 2-byte Unicode character
String message = "Java";   // Reference string object`
      },
      {
        k: "heading",
        text: "2. Terminal Compilation & Execution commands"
      },
      {
        k: "syntax",
        code: `// 1. Compile Source File (creates bytecode .class file)
javac MyProgram.java

// 2. Execute Bytecode (runs the program in JVM)
java MyProgram`
      },
      {
        k: "heading",
        text: "3. Core Control structures"
      },
      {
        k: "syntax",
        code: `// If-Else Ladder
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else {
    System.out.println("F");
}

// For Loop Traversal
for (int i = 0; i < 5; i++) {
    System.out.print(i + " ");
}

// While Loop
int k = 1;
while (k <= 3) {
    k++;
}`
      },
      {
        k: "heading",
        text: "4. Arrays & OOP Instantiation templates"
      },
      {
        k: "syntax",
        code: `// Array Allocation
int[] numbers = new int[5]; // size 5, default value 0
int[] primes = {2, 3, 5};   // size 3, explicit values

// OOP Blueprint Instantiation
Dog myDog = new Dog("Labrador", 3); // Executes parameterized constructor`
      },
      {
        k: "summary",
        items: ["Compile source files using javac command.", "Run compiled bytecode classes using java command.", "Arrays and OOP objects reside inside heap memory."]
      },
      {
        k: "practice",
        conceptual: [
          {
            q: "What is the syntax for declaring a main entry method in Java?",
            a: `The syntax is: \`public static void main(String[] args) { ... }\``
          },
          {
            q: "How do you declare a float literal versus a double literal in Java?",
            a: "A float literal requires an 'f' or 'F' suffix (e.g., `3.14f`), while double literals are default (e.g., `3.14`)."
          }
        ],
        coding: [
          {
            q: "Implement a basic loop traversal template.",
            desc: "Create a class Traverse that traverses backwards from 5 down to 1 using a standard for loop, printing each index.",
            solCode: `public class Traverse {
    public static void main(String[] args) {
        for(int i = 5; i >= 1; i--) {
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`,
            solOut: "5 4 3 2 1 ",
            solExp: "Loop initializes at 5, checks condition i >= 1, decrement i by 1 on each step, printing values."
          }
        ],
        predict: [
          {
            code: `public class PrintPredict {
    public static void main(String[] args) {
        System.out.println("Java" + 1 + 2);
    }
}`,
            a: "Java12",
            explain: "String + int performs string concatenation. It processes left-to-right: \"Java\" + 1 becomes \"Java1\", and then \"Java1\" + 2 becomes \"Java12\"."
          }
        ],
        debug: [
          {
            q: "Fix the syntax error in this array initialization.",
            code: `public class BadArray {
    public static void main(String[] args) {
        int[] vals = new int[3] { 1, 2, 3 };
        System.out.println(vals.length);
    }
}`,
            bug: "Specifying the array size inside brackets [3] while using an initializer list on line 3 is invalid.",
            solCode: `public class BadArray {
    public static void main(String[] args) {
        int[] vals = new int[] { 1, 2, 3 }; // Fixed brackets size config
        System.out.println(vals.length);
    }
}`
          }
        ]
      }
    ]
  }
];
