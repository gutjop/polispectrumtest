  const questions = [
    {
        id: 1,
        category: "social",
        text: "A policy proposal which centers around environmental protection and climate action should be enacted, even if it will slow economic growth. ",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 2,
        category: "social",
        text: "My country has just found a vast oil deposit. It is imperative that my country should start drilling and selling oil on the global markets.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 3, //21
        category: "social",
        text: "The primary driver of the environmental transition should be technological advancement, so environmental regulation should be kept to a minimum.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 4, //24
        category: "social",
        text: "Public infrastructure projects that stand to benefit the overall population should be approved, even if there is strong local opposition to the project.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 5, //25
        category: "social",
        text: "Public Infrastructure projects should do as much as possible to not disrupt the local population, even if it means massively adding to the costs.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 6, //39
        category: "econ",
        text: "The overall population benefits when businesses are subject to less regulations and lower corporate tax rates.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 7, //50
        category: "econ",
        text: "Labour unions are necessary to prevent worker exploitation and ultimately good for workers.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 8, //40
        category: "econ",
        text: "More often than not, society ultimately benefits when corporations maximise value for their shareholders.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 9, //41
        category: "econ",
        text: "A world with less protectionism and more free trade would make my country better off in the long run.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 10, //42
        category: "econ",
        text: "My country allocates too much money towards military spending.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 11, //14
        category: "social",
        text: "In normal circumstances, abortion should be legal uptil:",
        options: ["Never Legal", "6 weeks (Fetal Heartbeat)", "12 weeks (First Trimester)", "16 weeks (EU Average)", "24 weeks (Fetal Viability)", "No gestational limit", "Neutral"]
    },
    {
        id: 12, //15
        category: "social",
        text: "If there were term limits on abortion, the law should have greater flexibility in cases of rape or incest.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 13, //32
        category: "social",
        text: "It is an acceptable limitation of free speech to prohibit hate speech.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 14, //31
        category: "social",
        text: "Alongside merit, diversity should also be taken into account for an individual's acceptance into an institution.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 15, //26
        category: "social",
        text: "Prostitution should be legal.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 16, // 1
        category: "social",
        text: "The amount of legal economic migrants coming to my country is too high and should be reduced.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 17, // 2
        category: "social",
        text: "My country has a moral responsibility to accept unauthorized immigrants fleeing from dangerous countries.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    }, // Added comma here
    {
        id: 18, // 3
        category: "social",
        text: "My country benefits from having unauthorized immigrants.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 19, // 4
        category: "social",
        text: "If a migrant is in my country, I expect them to assimilate into my country by learning the language and meaningfully integrating with the community.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    { //Immigrants should be given the same access to social services as citizens/PRs.
        id: 20, //5
        category: "social",
        text: "The government should provide support to unauthorized migrants in my country.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 21, //6
        category: "social",
        text: "If a migrant entered my country without proper authorization today, I would want them deported as soon as possible.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 22, //7
        category: "social",
        text: "An unauthorized immigrant who has already integrated themselves in my country and has not caused any serious issues should be given a path to citizenship.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 23, //46
        category: "econ",
        text: "A top priority of the government should be to avoid sustained large fiscal deficits and taking on public debt.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 24, //47
        category: "econ",
        text: "Social services should be reduced during periods of overwhelming fiscal deficit.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 25, //51
        category: "econ",
        text: "Capitalism should be replaced with a system where the government manages the economy more as an architect than a referee. ",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 26, //51
        category: "econ",
        text: "The existence of an ultra-wealthy class poses an existential threat to society. To remedy this threat, the government should tax wealth. ",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 27, //52
        category: "econ",
        text: "Social welfare should only be available to those who need it.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 28, //9
        category: "social",
        text: "Same sex marriage should be legal.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 29, //10
        category: "social",
        text: "Medical gender transitioning care should be permissible for minors.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 30, //11
        category: "social",
        text: "Transgender women should be allowed to compete in women's sports.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 31, //12
        category: "social",
        text: "Government money should be used to support gender transitioning care for individuals.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 32, //13
        category: "social",
        text: "Society has been too accommodating towards ideas around gender fluidity.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    }, // Added comma here
    {
        id: 33, //43
        category: "econ",
        text: "The first step to solving many of societies' problems is to increase tax revenue from the rich.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {// If my standard of living is low, the government is mostly to blame.
        id: 34, //44
        category: "econ",
        text: "The government should place legal restrictions on the compensation package of a CEO.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 35, //45
        category: "econ",
        text: "Inheritance tax should be low.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 36, //49
        category: "econ",
        text: "When the government spends money to reduce poverty, the primary aim should be to provide equality of opportunity not outcome.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 37, //36
        category: "econ", //Healthcare should be free
        text: "Healthcare should be primarily funded by the government.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 38, //37
        category: "econ",
        text: "The government should substantially fund post-secondary education for the public.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 39, //39
        category: "econ",
        text: "Foreign nationals residing in my country should receive a similar level of social welfare from the government as citizens and permanent residents.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 40, //17
        category: "social",
        text: "My country should issue an official apology for any past transgressions/injustices that it took part in.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 41, //18
        category: "social",
        text: "Financial reparations are necessary to make peace with past transgressions and injustices that may have persisted through society.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 42, //19
        category: "social",
        text: "The Western world has too much influence on global politics.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 43, //34
        category: "social",
        text: "Cooperation and compliance with international organisations (such as the United Nations) is beneficial for the overall population of my country.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 44, //Nil
        category: "social",
        text: "My country should provide aid to poorer countries.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 45, //23
        category: "social",
        text: "There are some degrees that offer little value to students or society, so the government should discourage students from these degrees.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 46, //27
        category: "social",
        text: "In my country there are particular communities (race or religion) who cause too many problems to the community.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 47, //28
        category: "social",
        text: "Individual ownership of firearms should be heavily regulated by the state.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 48, //33
        category: "social",
        text: "The death penalty should be legal as a sentencing option for certain crimes. ",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 49, //30
        category: "social",
        text: "Society would be better off if more people were religious.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        id: 50, //35
        category: "social",
        text: "It is beneficial for public safety when the criminal justice system focuses on punishing criminals more than rehabilitating them.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    }
];



