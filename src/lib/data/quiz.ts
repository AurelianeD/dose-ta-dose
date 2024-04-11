export type QuizData = {
	index: number;
	question: string;
	choices: {
		text: string;
		isGoodAnswer: boolean;
	}[];
	answer: string;
};

export const quizData: QuizData[] = [
	{
		index: 1,
		question:
			'A partir de combien de verres par jour observe-t-on une consommation d’alcool à risque ?',
		choices: [
			{ text: 'Dès le premier verre', isGoodAnswer: true },
			{ text: 'Dès deux verre', isGoodAnswer: false },
			{ text: 'Dès trois verre', isGoodAnswer: false }
		],
		answer:
			'Il n’existe pas de consommation d’alcool sans risque : les risques pour la santé et de dépendance existent dès le premier verre. Les autorités sanitaires ont ainsi établi une valeur repère de consommation d’alcool, quotidienne et hebdomadaire, pour limiter ces risques.'
	},
	{
		index: 2,
		question:
			"Quel est l'organe principal responsable de la décomposition de l'alcool dans le corps ?",
		choices: [
			{ text: 'Le cœur', isGoodAnswer: false },
			{ text: 'Les reins', isGoodAnswer: false },
			{ text: 'Le foie', isGoodAnswer: true }
		],
		answer:
			'Le rôle du foie et de ses enzymes, qui par plusieurs étapes de transformation, finissent par éliminer l’alcool. Il devient de l’acétaldéhyde, puis de l’acide acétique, non nocif pour le corps. Il faut savoir qu’à partir d’une certaine dose d’alcool ingérée, le foie n’arrive plus à faire son travail correctement. Il ne détruit pas l’alcool aussi rapidement qu’il entre dans l’organisme, et c’est ce qui fait croître la concentration alcoolique dans le sang.'
	},
	{
		index: 3,
		question: 'Quelle quantité d’alcool un Français consomme-t-il en moyenne sur un an ?',
		choices: [
			{ text: '12,1 litres par an', isGoodAnswer: false },
			{ text: '6,3 litres par an', isGoodAnswer: false },
			{ text: '10,4 litres par an', isGoodAnswer: true }
		],
		answer:
			'Les Français de plus de 15 ans consomment en moyenne 10,4 litres d’alcool par an, selon les dernières données de l’Organisation de coopération et de développement économiques (OCDE) (sur 2018-2021). Même si la consommation d’alcool a été fortement réduite en France depuis 60 ans – en 1961, chaque habitant consommait en moyenne 26 litres par an –, elle reste à un très fort niveau en comparaison de nos voisins européens ou des pays membres de l’OCDE. Ainsi, parmi les 27 pays de l’Union européenne, les Français se classent en milieu de tableau, à la 11e place, à égalité avec les Portugais et les Hongrois et très proches de la consommation des Allemands (10,6 litres par an). Au sein du classement des 38 pays membres de l’OCDE, la France occupe à égalité la 9e place, soit la queue de peloton.'
	},
	{
		index: 4,
		question: 'En moyenne, à quel âge consomme-t-on son premier verre d’alcool en France ?',
		choices: [
			{ text: 'Autour de 13 ans', isGoodAnswer: true },
			{ text: 'Autour de 15 ans', isGoodAnswer: false },
			{ text: 'Autour de 17 ans', isGoodAnswer: false }
		],
		answer:
			"Selon le volet français de la dernière enquête Health Behaviour in School-aged Children (HBSC) datant de 2018 et mise en place par l’Organisation mondiale de la santé (OMS), en France, près d'un jeune sur deux a déjà consommé de l'alcool dès l'âge de 13 ans. Les élèves interrogés sont en effet 32,1 % à déclarer avoir déjà bu de l’alcool à 11 ans et 48,6 % à l’âge de 13 ans. A 15 ans, ils sont 70 % à avoir déjà essayé l’alcool. Si cette expérimentation de l’alcool a nettement reculé dans le pays depuis quinze ans, la diffusion de l’alcool parmi les adolescents en France « se révèle encore très importante lorsqu’on la compare à celle mesurée dans d’autres pays », note l’enquête. « Ainsi, à 11 ans, les jeunes Français, filles comme garçons, sont par leur niveau d’expérimentation en tête du classement des pays de l’enquête HBSC.»"
	},
	{
		index: 5,
		question: 'Quel pourcentage de la population française est considéré en consommation abusive ?',
		choices: [
			{ text: '6 %', isGoodAnswer: false },
			{ text: '10 %', isGoodAnswer: false },
			{ text: '24 %', isGoodAnswer: true }
		],
		answer:
			"En 2020, près d’un Français sur quatre (24 %) âgé entre 18 et 75 ans a dépassé « les repères de consommation d’alcool », selon l’Assurance-maladie. Ces consommations à risque étaient « davantage le fait des hommes (plus de 33 % d'entre eux) que des femmes (près de 15 %) », note-t-elle. Au quotidien, ce sont 10 % des adultes âgés entre 18 et 75 ans qui ont une consommation excessive."
	},
	{
		index: 6,
		question: 'Un verre de whisky à 40° contient plus d’alcool pur qu’un verre de bière à 5°. Vrai ou faux ?',
		choices: [
			{ text: 'Vrai', isGoodAnswer: false },
			{ text: 'Faux', isGoodAnswer: true }
		],
		answer:
			'Faux ! Un verre de bière (25cl), un verre de whisky ou de rhum (3cl), un verre de vin (10cl) tels qu’on les sert dans les bars contiennent tous approximativement la même quantité d’alcool pur : environ 10 g. C’est ce que l’on appelle un verre standard ou encore unité d’alcool.'
	},
	{
		index: 7,
		question: 'Qu’est-ce qui permet d’accélérer l’élimination de l’alcool dans le sang ?',
		choices: [
			{ text: 'Rien', isGoodAnswer: true },
			{ text: "Boire un verre d'eau entre chaque verre", isGoodAnswer: false },
			{ text: 'Faire du sport', isGoodAnswer: false }
		],
		answer:
			'Nous ne sommes pas tous constitués de la même façon. Le poids, le sexe, les enzymes présents dans le foie, la vitesse de consommation, l’âge, etc. sont autant d’éléments qui peuvent influer sur la durée d’élimination. En revanche, inutile d’user de certains stratagèmes pour réduire l’absorption ou éliminer plus rapidement. Boire une tisane, faire une sieste ou encore prendre une douche froide n’agira en rien sur le taux d’alcool dans le sang, même si cela pourra vous aider à vous sentir mieux après une consommation excessive.'
	},
	{
		index: 8,
		question: 'Combien de verres d’alcool est-il recommandé de ne pas dépasser chaque semaine ?',
		choices: [
			{
				text: 'Pas plus de dix verres standards (contenant 10 grammes d’alcool)',
				isGoodAnswer: true
			},
			{ text: 'Pas plus de cinq verres standards', isGoodAnswer: false },
			{ text: 'Pas plus de huit verres standards', isGoodAnswer: false }
		],
		answer:
			"Santé publique France et l’Institut national du cancer ont élaboré, en 2017, de nouveaux repères de consommation d’alcool à moindre risque. Les recommandations sont de ne pas boire plus de deux verres d’alcool par jour dans la limite de dix verres par semaine. Ces deux organismes recommandent par ailleurs de ne pas consommer d’alcool pendant plusieurs jours d'affilée pour limiter les risques sur la santé."
	},
	{
		index: 9,
		question:
			"Combien de morts sont causées par la consommation d’alcool chaque année en France ?",
		choices: [
			{ text: 'Environ 32 000', isGoodAnswer: false },
			{ text: 'Plus de 40 000', isGoodAnswer: true },
			{ text: 'Environ 23 000', isGoodAnswer: false }
		],
		answer:
			"L’alcool a été à l'origine de 41 000 morts en France en 2015, représentant une « des trois premières causes de mortalité évitables », selon Santé publique France. Cela représente 7 % des morts chez les plus de 15 ans. Environ 74 % de ces morts liées à l’alcool, et dont les causes directes sont principalement des cancers, des maladies cardio-vasculaires ou digestives, des accidents ou des suicides, surviennent chez des hommes, dont la consommation d’alcool est plus forte que celle des femmes."
	},
	{
		index: 10,
		question:
			'Qu’est-ce que le « binge drinking » ?',
		choices: [
			{ text: 'Boire beaucoup et de manière régulière', isGoodAnswer: false },
			{ text: 'Boire beaucoup dans un temps très court', isGoodAnswer: true },
			{ text: 'Boire peu mais tous les jours', isGoodAnswer: false }
		],
		answer:
			'Le « binge drinking » est un terme anglo-saxon traduit par « alcoolisation ponctuelle importante » (API). Il renvoie à la consommation massive d’alcool dans un temps très court avec une recherche intentionnelle d’état d’ivresse. Selon la Haute Autorité de santé, il peut être défini comme la consommation d’au moins six verres d’alcool (soit 60 g d’alcool pur) par occasion. Cette pratique concerne principalement les jeunes. '
	}
];
