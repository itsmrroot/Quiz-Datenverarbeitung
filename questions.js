/**
 * QUIZ QUESTIONS
 * Data Processing & Interfaces
 * 20 Multiple-Choice Questions with Explanations
 */

const questions = [
    {
        id: 1,
        type: "Multiple Choice",
        category: "Basics",
        question: "What is the difference between data and information?",
        options: [
            "Data is slower than information",
            "Data are raw characters without meaning; Information is data in context with value",
            "There is no difference",
            "Information is always written"
        ],
        correct: 1,
        explanation: "Data are raw and meaningless (e.g. '3'). Information arises when data gets a context (e.g. 'The child is 3 years old')."
    },
    {
        id: 2,
        type: "Multiple Choice",
        category: "Basics",
        question: "What is a message?",
        options: [
            "A message that can only be sent via email",
            "The transmission of data from a sender to a receiver",
            "The same as data",
            "A signal that can only be digital"
        ],
        correct: 1,
        explanation: "A message is the transmission of data. It can be via email, phone, mail, or any other method."
    },
    {
        id: 3,
        type: "Multiple Choice",
        category: "EVA Principle",
        question: "Which statement about the EVA principle is correct?",
        options: [
            "Input → Decision → Output",
            "Input → Processing → Output",
            "Electronic Processing Analysis",
            "Explicit Validation Automation"
        ],
        correct: 1,
        explanation: "The EVA principle stands for Input → Processing → Output. This is the fundamental concept of ALL computers."
    },
    {
        id: 4,
        type: "Multiple Choice",
        category: "Hardware",
        question: "What is the CPU?",
        options: [
            "A storage medium",
            "The heart of the computer that executes programs",
            "An output device",
            "An input device"
        ],
        correct: 1,
        explanation: "CPU = Central Processing Unit. The heart of the computer that performs all calculations."
    },
    {
        id: 5,
        type: "Multiple Choice",
        category: "I/O Devices",
        question: "Which is an input device?",
        options: [
            "Monitor",
            "Printer",
            "Keyboard",
            "Speaker"
        ],
        correct: 2,
        explanation: "Keyboard is an input device. Monitor, Printer, and Speaker are output devices."
    },
    {
        id: 6,
        type: "Multiple Choice",
        category: "Signals",
        question: "What is the difference between analog and digital signals?",
        options: [
            "Analog signals are faster",
            "Analog signals are continuous and smooth; Digital signals consist of discrete values (0 and 1)",
            "Digital signals are outdated",
            "Analog signals cannot be processed by computers"
        ],
        correct: 1,
        explanation: "Analog signals are continuous (like a sound wave). Digital signals consist of bits (0 and 1)."
    },
    {
        id: 7,
        type: "Multiple Choice",
        category: "Signals",
        question: "Which is an example of an analog signal?",
        options: [
            "MP3 music file",
            "USB data transfer",
            "Conventional FM radio",
            "Binary code"
        ],
        correct: 2,
        explanation: "Conventional FM radio uses analog signals. MP3 and USB are digital."
    },
    {
        id: 8,
        type: "Multiple Choice",
        category: "Transmission",
        question: "Which three disturbances can affect signal transmission?",
        options: [
            "Noise, attenuation, electromagnetic fields",
            "Temperature, humidity, air pressure",
            "Size, weight, material",
            "Color, shape, texture"
        ],
        correct: 0,
        explanation: "The main disturbances are: Noise (random signals), Attenuation (signal weakens), and EM fields (interference)."
    },
    {
        id: 9,
        type: "Multiple Choice",
        category: "Processing",
        question: "Difference between information transmission and data processing?",
        options: [
            "There is no difference",
            "Transmission = transport without change; Processing = transformation of data",
            "Transmission is faster",
            "Processing is older"
        ],
        correct: 1,
        explanation: "Transmission = transport (sending email). Processing = transformation (Excel calculates average)."
    },
    {
        id: 10,
        type: "Multiple Choice",
        category: "Channel",
        question: "What is an information channel?",
        options: [
            "A television channel",
            "The physical path (cable, radio) through which a message is transmitted",
            "A file on the hard drive",
            "A program"
        ],
        correct: 1,
        explanation: "Information channel = physical path of transmission (cable, radio waves, air, etc.)."
    },
    {
        id: 11,
        type: "Multiple Choice",
        category: "Hardware",
        question: "What is hardware?",
        options: [
            "Programs and data",
            "Everything you can physically touch",
            "The operating system",
            "An app"
        ],
        correct: 1,
        explanation: "Hardware = everything you can touch (CPU, keyboard, monitor, hard drive)."
    },
    {
        id: 12,
        type: "Multiple Choice",
        category: "Software",
        question: "Which is an example of system software?",
        options: [
            "Microsoft Word",
            "Windows or macOS",
            "Adobe Photoshop",
            "Firefox"
        ],
        correct: 1,
        explanation: "Windows and macOS are operating systems. Word, Photoshop, Firefox are application software."
    },
    {
        id: 13,
        type: "Multiple Choice",
        category: "Hardware",
        question: "Which component works closely with the CPU?",
        options: [
            "Monitor",
            "Keyboard",
            "RAM (Memory)",
            "Printer"
        ],
        correct: 2,
        explanation: "RAM works closely with the CPU and stores currently needed data temporarily."
    },
    {
        id: 14,
        type: "Multiple Choice",
        category: "Storage",
        question: "What is the difference between HDD and SSD?",
        options: [
            "HDD is faster",
            "SSD is faster and uses less power",
            "There is no practical difference",
            "HDD stores more"
        ],
        correct: 1,
        explanation: "SSDs are MUCH faster (up to 100x), use less power, and are more reliable than HDDs."
    },
    {
        id: 15,
        type: "Multiple Choice",
        category: "I/O Devices",
        question: "What is an output device?",
        options: [
            "A device that stores data",
            "A device that processes data",
            "A device that presents results (Monitor, Printer, Speaker)",
            "A device with a battery"
        ],
        correct: 2,
        explanation: "Output devices present results: Monitor (images), Printer (paper), Speaker (sound)."
    },
    {
        id: 16,
        type: "Multiple Choice",
        category: "Interfaces",
        question: "What is USB 3.2 Gen 2?",
        options: [
            "An old interface with 1 Gbps",
            "The current standard with 10 Gbps (double speed of Gen 1)",
            "Only for Apple devices",
            "An audio interface"
        ],
        correct: 1,
        explanation: "USB 3.2 Gen 1 = 5 Gbps. Gen 2 = 10 Gbps (double speed). Gen 2x2 = 20 Gbps."
    },
    {
        id: 17,
        type: "Multiple Choice",
        category: "Interfaces",
        question: "What is Hot-Plug function?",
        options: [
            "A device that generates heat",
            "Devices can be connected/disconnected during operation without restart",
            "Only for wireless devices",
            "An error message"
        ],
        correct: 1,
        explanation: "Hot-Plug = devices can be connected/disconnected while the computer is running."
    },
    {
        id: 18,
        type: "Multiple Choice",
        category: "Interfaces",
        question: "Difference between Thunderbolt 4 and USB4?",
        options: [
            "No difference",
            "Thunderbolt 4 is proprietary (Apple/Intel); USB4 is open standard",
            "Thunderbolt 4 is for Windows",
            "USB4 is faster"
        ],
        correct: 1,
        explanation: "Thunderbolt 4 = proprietary (Apple/Intel). USB4 = open standard for all manufacturers."
    },
    {
        id: 19,
        type: "Multiple Choice",
        category: "Drivers",
        question: "What is the role of device drivers?",
        options: [
            "They store data",
            "They enable communication between software and hardware",
            "They generate power",
            "They encrypt data"
        ],
        correct: 1,
        explanation: "Drivers enable communication between software (OS) and hardware."
    },
    {
        id: 20,
        type: "Multiple Choice",
        category: "Interfaces",
        question: "What is RS-232 Serial Communication?",
        options: [
            "A modern high-speed interface",
            "An older but reliable point-to-point interface for sequential data transmission",
            "Only for audio",
            "An operating system"
        ],
        correct: 1,
        explanation: "RS-232 is older but reliable. Still used today in industry and medical technology."
    }
];
