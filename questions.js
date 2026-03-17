  const questions = [
    {
        id: 1,
        text: "My country should put significant effort into bringing legal economic migrants.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 2,
        text: "My country has a moral responsibility to accept refugees fleeing from dangerous countries.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    }, // Added comma here
    {
        id: 3,
        text: "My country benefits from having illegal immigrants/refugees",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 4,
        text: "If a migrant is in my country, I expect them to assimilate into my country by learning the language and meaningfully integrating with the community",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    { //Immigrants should be given the same access to social services as citizens/PRs.
        id: 5,
        text: "Government money should be used to provide significant support to refugees in my country.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 6,
        text: "If a migrant entered my country illegally today, I would want them deported as soon as possible.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 7,
        text: "An illegal immigrant who has already integrated themselves in my country and has not caused any serious issues should be given a path to citizenship.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 8,
        text: "Any immigrant found to have committed a serious crime should be deported.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    }, // Added comma here
    {
        id: 9,
        text: "Same sex marriage should be legal.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 10,
        text: "Gender transitioning care should be permissible for minors.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 11,
        text: "Transgender women should be allowed to compete in women's sports.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 12,
        text: "Government money should be used to support gender transitioning care for individuals.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 13,
        text: "Society has been too accommodating towards ideas around gender fluidity.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    }, // Added comma here
    {
        id: 14,
        text: "In normal circumstances, abortion should be legal uptil:",
        options: ["Never Legal", "6 weeks (Fetal Heartbeat)", "12 weeks (First Trimester)", "16 weeks (EU Average)", "24 weeks (Fetal Viability)", "No gestational limit"]
    },
    {
        id: 15,
        text: "Abortion laws should have greater flexibility in cases of rape or incest.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 16,
        text: "Abortion laws should have greater flexibility in the case of medical danger to the mother.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    }, // Added comma here
    {
        id: 17,
        text: "My country should issue an official apology for any past transgressions/injustices that it took part in.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 18,
        text: "Significant financial reparations are necessary to make peace with past transgressions and injustices that may have persisted through society",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 19,
        text: "The Western world has too much influence on global politics.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    }, // Added comma here
    {
        id: 20,
        text: "My country has just found a vast oil deposit. It is imperative that my country should start drilling and selling oil on the global markets.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 21,
        text: "The environmental transition should be accomplished with investments in technology as opposed to regulation.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 22,
        text: "The government should prioritize environmental protection and climate action, even if it results in slower economic growth.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 23,
        text: "A STEM/business/law student is more valuable to society than a non STEM/business/law student.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 24,
        text: "An employed person's salary is a good indicator of their value to society.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 25,
        text: "When it comes to public infrastructure projects, the needs of the many outweigh the woes of the few.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 26,
        text: "Public Infrastructure projects should do as much as possible to not disrupt the environment/local population, even if it means massively adding to the costs",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 27,
        text: "The sale and purchase of sexual services should be legal.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 28,
        text: "In my country there are particular communities (race or religion) who cause too many problems to the community.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 29,
        text: "Individual ownership of firearms should heavily regulated by the state.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 30,
        text: "Being born in a country should be sufficient to become a citizen of that country.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 31,
        text: "Society would be better off if more people were religious.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 32,
        text: "Alongside merit, diversity should also be taken into account for an individual's acceptance into an institution.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 33,
        text: "It is an acceptable infringement on free speech to prohibit hate speech.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 34,
        text: "The death penalty is a just punishment for certain crimes.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 35,
        text: "Cooperation and compliance with international organisations (such as the United Nations) is beneficial for the overall population of my country.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 36,
        text: "It is beneficial for public safety when the criminal justice system focuses on punishing criminals more than rehabilitating them.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 37,
        text: "Healthcare should be primarily funded and run by the government.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 38,
        text: "The government should fully fund or substantially fund post-secondary education for the public.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 39,
        text: "The government should provide significant social services for foreign nationals residing in my country.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 40,
        text: "Incentivizing business growth via lower corporate tax and deregulation is beneficial for the overall population.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 41,
        text: "Society ultimately benefits when corporations maximise value for shareholders.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 42,
        text: "A world with less protectionism and more free trade would make my country better off in the long run.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 43,
        text: "Strong anti-trust regulations are necessary to regulate large firms, for the ultimate benefit of the consumer.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 44,
        text: "The first step to solving many of societies' problems is to significantly increase taxes on the rich.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {// If my standard of living is low, the government is mostly to blame.
        id: 45,
        text: "It is likely that if someone's standard of living is low, it is more the result of inadequate government policy than individual choices.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 46,
        text: "Inheritance tax should be low.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 47,
        text: "A top priority of the government should be to avoid sustained large fiscal deficits.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 48,
        text: "Social services should be reduced during periods of overwhelming fiscal deficit",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 49,
        text: "When the government spends money to reduce poverty, the primary aim should be to provide opportunity not equality.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
    {
        id: 50,
        text: "A labor union is necessary to prevent worker exploitation and ultimately good for workers.",
        options: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]
    },
  ];




