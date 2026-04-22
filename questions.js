  const questions = [
    {
        id: 1, //22
        category: "social",
        text: "My government should prioritize environmental protection and climate action, even if it results in slower economic growth.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 2, //20
        category: "social",
        text: "My country has just found a vast oil deposit. It is imperative that my country should start drilling and selling oil on the global markets.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 3, //21
        category: "social",
        text: "The move towards a more environmentally friendly society should be achieved more through investments in technology than regulation. ",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 4, //24
        category: "social",
        text: "When it comes to public infrastructure projects, the needs of the many outweigh the woes of the few.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 5, //25
        category: "social",
        text: "Public Infrastructure projects should do as much as possible to not disrupt the local population, even if it means massively adding to the costs.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 6, //39
        category: "econ",
        text: "The overall population benefits when businesses have lower corporate taxation and deregulation.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 7, //50
        category: "econ",
        text: "Labour unions are necessary to prevent worker exploitation and ultimately good for workers.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 8, //40
        category: "econ",
        text: "More often than not, society benefits when corporations maximise value for their shareholders.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 9, //41
        category: "econ",
        text: "A world with less protectionism and more free trade would make my country better off in the long run.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 10, //42
        category: "econ",
        text: "Strong anti-trust regulations for large corporations are ultimately beneficial for the consumer.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
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
        text: "Abortion laws should have greater flexibility in cases of rape or incest.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 13, //16
        category: "social",
        text: "Abortion laws should have greater flexibility in the case of medical danger to the mother.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 14, //32
        category: "social",
        text: "It is an acceptable infringement on free speech to prohibit hate speech.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 15, //31
        category: "social",
        text: "Alongside merit, diversity should also be taken into account for an individual's acceptance into an institution.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 16, //26
        category: "social",
        text: "Prostitution should be legal.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 17, // 1
        category: "social",
        text: "My country should promote legal economic migration.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 18, // 2
        category: "social",
        text: "My country has a moral responsibility to accept refugees fleeing from dangerous countries.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    }, // Added comma here
    {
        id: 19, // 3
        category: "social",
        text: "My country benefits from having unauthorized immigrants/refugees.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 20, // 4
        category: "social",
        text: "If a migrant is in my country, I expect them to assimilate into my country by learning the language and meaningfully integrating with the community.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    { //Immigrants should be given the same access to social services as citizens/PRs.
        id: 21, //5
        category: "social",
        text: "The government should provide support to refugees in my country.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 22, //6
        category: "social",
        text: "If a migrant entered my country without proper authorization today, I would want them deported as soon as possible.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 23, //7
        category: "social",
        text: "An unauthorized immigrant who has already integrated themselves in my country and has not caused any serious issues should be given a path to citizenship.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 24, //46
        category: "econ",
        text: "A top priority of the government should be to avoid sustained large fiscal deficits and taking on public debt.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 25, //47
        category: "econ",
        text: "Social services should be reduced during periods of overwhelming fiscal deficit.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 26, //51
        category: "econ",
        text: "A state planned economy would solve many of societies' problems.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 27, //51
        category: "econ",
        text: "The tax system should be structured so that no one can be a billionaire.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 28, //52
        category: "econ",
        text: "Social welfare should only be available to those who need it.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 29, //9
        category: "social",
        text: "Same sex marriage should be legal.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 30, //10
        category: "social",
        text: "Medical gender transitioning care should be permissible for minors.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 31, //11
        category: "social",
        text: "Transgender women should be allowed to compete in women's sports.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 32, //12
        category: "social",
        text: "Government money should be used to support gender transitioning care for individuals.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 33, //13
        category: "social",
        text: "Society has been too accommodating towards ideas around gender fluidity.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    }, // Added comma here
    {
        id: 34, //43
        category: "econ",
        text: "The first step to solving many of societies' problems is to increase tax revenue from the rich.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {// If my standard of living is low, the government is mostly to blame.
        id: 35, //44
        category: "econ",
        text: "It is likely that if someone's standard of living is low, it is more the result of inadequate government policy than individual choices.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 36, //45
        category: "econ",
        text: "Inheritance tax should be low.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 37, //49
        category: "econ",
        text: "When the government spends money to reduce poverty, the primary aim should be to provide opportunity not equality.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 38, //36
        category: "econ",
        text: "Healthcare should be primarily funded and run by the government.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 39, //37
        category: "econ",
        text: "The government should substantially fund post-secondary education for the public.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 40, //39
        category: "econ",
        text: "Foreign nationals residing in my country should receive a similar level of social welfare from the government.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 41, //17
        category: "social",
        text: "My country should issue an official apology for any past transgressions/injustices that it took part in.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 42, //18
        category: "social",
        text: "Financial reparations are necessary to make peace with past transgressions and injustices that may have persisted through society.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 43, //19
        category: "social",
        text: "The Western world has too much influence on global politics.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 44, //34
        category: "social",
        text: "Cooperation and compliance with international organisations (such as the United Nations) is beneficial for the overall population of my country.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 45, //Nil
        category: "social",
        text: "My country should provide aid to poorer countries.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 46, //23
        category: "social",
        text: "My government should incentivize students towards higher value degrees such as STEM, business, and law.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 47, //27
        category: "social",
        text: "In my country there are particular communities (race or religion) who cause too many problems to the community.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 48, //28
        category: "social",
        text: "Individual ownership of firearms should be heavily regulated by the state.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 49, //33
        category: "social",
        text: "The death penalty is a just punishment for certain crimes.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 50, //30
        category: "social",
        text: "Society would be better off if more people were religious.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 51, //29
        category: "social",
        text: "Being born in a country should be sufficient to become a citizen of that country.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    },
    {
        id: 52, //35
        category: "social",
        text: "It is beneficial for public safety when the criminal justice system focuses on punishing criminals more than rehabilitating them.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree", "Neutral"]
    }
];





