const GREEN_MIRROR_QUESTIONS = [
    {
        id: "plastic",
        category: "Waste",
        title: "Single-use plastic",
        prompt: "How often do you rely on disposable bottles, bags, cups, or packaging?",
        science: "Single-use plastics can persist for centuries, break down into microplastics, and spread through rivers, oceans, and food chains.",
        options: [
            { value: "rarely", label: "Rarely", score: 0, description: "You usually avoid disposable plastic." },
            { value: "sometimes", label: "Sometimes", score: 1, description: "You use it when convenient." },
            { value: "often", label: "Often", score: 2, description: "Disposable plastic is part of your routine." }
        ],
        recommendations: [
            "Carry a reusable bottle, bag, and food container.",
            "Choose products with refill packs or low-packaging options."
        ]
    },
    {
        id: "transport",
        category: "Transport",
        title: "Private car dependence",
        prompt: "How often do you depend on a private car or ride-hailing for short or routine trips?",
        science: "Frequent private vehicle use increases carbon dioxide emissions, urban air pollution, and fuel consumption.",
        options: [
            { value: "rarely", label: "Rarely", score: 0, description: "You often walk, bike, or use shared transport." },
            { value: "sometimes", label: "Sometimes", score: 1, description: "You mix private and lower-impact transport." },
            { value: "often", label: "Often", score: 2, description: "A private vehicle is your default option." }
        ],
        recommendations: [
            "Combine errands into one trip and avoid unnecessary short drives.",
            "Use walking, cycling, carpooling, or public transport when possible."
        ]
    },
    {
        id: "recycling",
        category: "Waste",
        title: "Recycling consistency",
        prompt: "How consistently do you separate recyclable materials at home or work?",
        science: "Recycling does not solve all waste problems, but it reduces pressure on landfills, saves raw materials, and lowers processing energy for many products.",
        options: [
            { value: "consistent", label: "Consistently", score: 0, description: "Recycling is already a strong habit." },
            { value: "partial", label: "Sometimes", score: 1, description: "You recycle some materials, but not consistently." },
            { value: "rare", label: "Rarely", score: 2, description: "Most recyclable waste is discarded." }
        ],
        recommendations: [
            "Set up clearly labeled bins for paper, plastic, glass, and metal.",
            "Learn local recycling rules so fewer items end up contaminated."
        ]
    },
    {
        id: "energy",
        category: "Energy",
        title: "Home energy habits",
        prompt: "How often do you leave lights, chargers, or appliances running when they are not needed?",
        science: "Electricity generation still relies heavily on fossil fuels in many places, so wasted energy can lead to avoidable greenhouse gas emissions.",
        options: [
            { value: "rarely", label: "Rarely", score: 0, description: "You are usually careful with electricity use." },
            { value: "sometimes", label: "Sometimes", score: 1, description: "You catch some waste, but not all of it." },
            { value: "often", label: "Often", score: 2, description: "Energy waste happens regularly." }
        ],
        recommendations: [
            "Turn off idle lights and devices before leaving a room.",
            "Use power strips and unplug equipment that stays on standby."
        ]
    },
    {
        id: "water",
        category: "Water",
        title: "Water use",
        prompt: "How often do you take long showers or leave water running longer than necessary?",
        science: "Fresh water treatment and delivery require energy, and excessive use increases pressure on local water systems and ecosystems.",
        options: [
            { value: "rarely", label: "Rarely", score: 0, description: "You already use water carefully." },
            { value: "sometimes", label: "Sometimes", score: 1, description: "Water-saving habits are inconsistent." },
            { value: "often", label: "Often", score: 2, description: "Water waste is common in your routine." }
        ],
        recommendations: [
            "Shorten showers and turn off taps while brushing or washing dishes.",
            "Check for leaks and reuse water when practical."
        ]
    },
    {
        id: "food",
        category: "Food",
        title: "Diet footprint",
        prompt: "How often do your meals depend on highly packaged food or meat-heavy choices?",
        science: "Food production can create large environmental impacts through land use, packaging waste, transport, and methane emissions from livestock.",
        options: [
            { value: "rarely", label: "Rarely", score: 0, description: "Your food choices are often lower-impact." },
            { value: "sometimes", label: "Sometimes", score: 1, description: "Your meals are a mix of high- and lower-impact options." },
            { value: "often", label: "Often", score: 2, description: "Many meals carry a larger environmental footprint." }
        ],
        recommendations: [
            "Add more plant-based meals and reduce unnecessary packaging.",
            "Choose local, seasonal, or minimally processed foods more often."
        ]
    },
    {
        id: "chemicals",
        category: "Pollution",
        title: "Household chemicals",
        prompt: "How often do you use harsh cleaning products, pesticides, or chemicals without looking for safer alternatives?",
        science: "Some household chemicals can pollute indoor air, wastewater, and soil, especially when overused or disposed of incorrectly.",
        options: [
            { value: "rarely", label: "Rarely", score: 0, description: "You already favor safer or limited use." },
            { value: "sometimes", label: "Sometimes", score: 1, description: "You use strong chemicals when convenient." },
            { value: "often", label: "Often", score: 2, description: "Chemical-heavy products are part of your normal routine." }
        ],
        recommendations: [
            "Switch to refillable or eco-certified cleaning products.",
            "Use only the amount needed and follow safe disposal guidance."
        ]
    },
    {
        id: "shopping",
        category: "Consumption",
        title: "Impulse buying",
        prompt: "How often do you buy clothes, gadgets, or home items that you do not truly need?",
        science: "Frequent consumption increases raw material extraction, manufacturing emissions, packaging waste, and the amount of discarded products.",
        options: [
            { value: "rarely", label: "Rarely", score: 0, description: "You usually buy with intention." },
            { value: "sometimes", label: "Sometimes", score: 1, description: "Some purchases are convenient rather than necessary." },
            { value: "often", label: "Often", score: 2, description: "Unplanned buying is a recurring habit." }
        ],
        recommendations: [
            "Wait 24 hours before non-essential purchases.",
            "Repair, reuse, borrow, or buy second-hand when possible."
        ]
    }
];

function getScoreLabel(score) {
    if (score === 0) {
        return "Low";
    }

    if (score === 1) {
        return "Moderate";
    }

    return "High";
}