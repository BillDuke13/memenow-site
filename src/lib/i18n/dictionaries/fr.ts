/** French dictionary. Structure is enforced by `MessageSchema`. */

import type { MessageSchema } from './zh';

export const fr: MessageSchema = {
	common: {
		brand: 'memenow',
		home: 'Accueil',
		products: 'Produits',
		company: 'À propos',
		legal: 'Mentions',
		privacy: 'Confidentialité',
		terms: 'Conditions',
		skipToContent: 'Aller au contenu principal',
		navAriaLabel: 'Navigation principale',
		brandHomeAriaLabel: 'Accueil memenow',
		rightsReserved: '© {year} memenow · Tous droits réservés',
		theme: {
			switchToDark: 'Passer en mode sombre',
			switchToLight: 'Passer en mode clair'
		},
		motion: {
			reduce: 'Réduire les animations',
			allow: 'Autoriser les animations'
		},
		language: {
			menuLabel: 'Changer de langue',
			footerTitle: 'Langue'
		}
	},
	home: {
		meta: {
			title: 'memenow — Comprenez votre rythme. Choisissez en toute clarté.',
			description:
				'memenow est un studio d’IA indépendant qui conçoit des outils attentifs pour la réflexion sur soi et le rythme de la vie. Notre produit phare, Yinyang Agent, transforme le BaZi classique des Quatre Piliers en une prose chaleureuse et posée, à relire à chaque saison de votre vie.',
			ogTitle: 'memenow — Comprenez votre rythme. Choisissez en toute clarté.',
			ogDescription:
				'Un studio d’IA indépendant dédié à la connaissance de soi et au rythme de la vie. Premier lancement : Yinyang Agent, avec des lectures BaZi des Quatre Piliers, des cycles et une conversation.'
		},
		hero: {
			eyebrowLeft: 'MEMENOW · CONNAISSANCE DE SOI ET RYTHMES DE VIE',
			eyebrowRight: 'PRODUIT PHARE · YINYANG AGENT',
			title: 'Comprenez votre rythme. Choisissez en toute clarté.',
			lede: 'À la croisée des chemins, vous n’avez pas besoin de clichés divinatoires flous, mais d’un miroir calme et honnête. Notre produit phare, Yinyang Agent, traduit les Quatre Piliers classiques du BaZi en une prose chaleureuse et lisible, pour vous aider à comprendre votre nature et à traverser les saisons changeantes de la vie.',
			primaryCta: 'Essayer Yinyang Agent gratuitement',
			secondaryCta: 'Découvrir le produit',
			cue: 'Défiler · 01 Produit phare'
		},
		yinyang: {
			number: '01',
			label: 'Yinyang Agent',
			title: 'Une lecture personnelle écrite pour vous accompagner',
			lede: 'Commencez avec votre date, votre heure et votre fuseau horaire de naissance — aucune connaissance en astrologie n’est requise. Recevez un portrait approfondi de vos Quatre Piliers, rédigé dans une prose claire et moderne, et conservé pour de bon dans votre compte privé.',
			p1: 'Yinyang Agent calibre votre thème natal sur les termes solaires astronomiques, en associant l’équilibre élémentaire de ZiPing à la dynamique structurelle de MangPai. Plutôt que de vous noyer sous des symboles ésotériques, il réunit votre Maître du jour, les jalons de vos années passées et des repères pour l’amour, la carrière, la santé et la famille en un seul récit cohérent.',
			p2: 'Votre lecture natale ancre le long arc de qui vous êtes. À mesure que la vie avance, les cycles repèrent les périodes favorables et celles qui appellent à la prudence, au jour, à la semaine, au mois et à l’année — et la conversation vous permet de revenir à tout moment avec une vraie décision en tête.',
			pillars: [
				{
					num: '01 · Portrait natal',
					title: 'Comprendre votre tempérament profond',
					body: 'Nul besoin de glossaire. Lisez un récit nuancé, en langage simple, sur votre tempérament, vos forces naturelles et la façon dont se sont déroulées vos années charnières.'
				},
				{
					num: '02 · Quatre domaines de vie',
					title: 'Y voir clair en amour, carrière, santé et famille',
					body: 'Allez au-delà des scores élémentaires abstraits, vers une réflexion concrète sur les relations, les ambitions et les habitudes qui façonnent votre vie.'
				},
				{
					num: '03 · Cycles',
					title: 'Avancer au rythme des jours, semaines, mois et années',
					body: 'Sachez quand vous engager et quand vous reposer. Voyez comment les cycles en cours interagissent avec votre thème natal pour choisir le bon moment.'
				},
				{
					num: '04 · Conversation',
					title: 'Une conversation qui se souvient de vous',
					body: 'Inutile de tout reprendre depuis le début. Revenez dès qu’une nouvelle question ou un carrefour se présente, et parlez-en dans une conversation fondée sur votre thème.'
				}
			],
			cta: 'Lire mon thème gratuitement',
			detailLink: 'Voir comment fonctionne Yinyang Agent'
		},
		pullquote: {
			quote:
				'Lire la marée, ce n’est pas s’abandonner aux vagues — c’est tenir la barre avec une calme assurance.',
			attribution: 'La philosophie du studio memenow'
		},
		studio: {
			number: '02',
			label: 'Notre philosophie',
			title: 'Un artisanat discret pour les questions qui vous habitent',
			lede: 'Ni battage, ni horoscopes creux, ni raccourcis précipités — seulement un travail réfléchi, fait pour durer.',
			p1: 'Nous avons fondé memenow en 2024 à partir d’un constat simple : tandis que le monde de l’IA se ruait vers des chatbots toujours plus bruyants et plus rapides, très peu construisaient des espaces pour se comprendre en douceur. Lorsqu’une personne confie à l’IA une vraie question de vie, elle mérite un raisonnement transparent et de la chaleur humaine.',
			p2: 'C’est pourquoi nous travaillons comme un petit atelier d’artisans. Yinyang Agent fixe l’exigence de tout ce que nous créons : nous ne mesurons pas la réussite à trente premières secondes éblouissantes, mais au réconfort et à la clarté que vous y trouvez encore en revenant un mois — ou un an — plus tard.'
		},
		contact: {
			number: '03',
			label: 'Contact',
			title: 'Engageons la conversation',
			lede: 'Pour un retour sur le produit, une demande presse ou un partenariat qui a du sens, écrivez à ',
			ledeEnd: '.',
			p1: 'Chaque message est lu et traité personnellement par un membre de notre équipe. Nous prenons parfois un peu de temps pour répondre avec soin, mais c’est toujours une vraie personne qui vous répond — jamais un modèle automatique.',
			cta: 'Écrire à hello@memenow.xyz'
		}
	},
	products: {
		meta: {
			title: 'Produits — memenow',
			description:
				'Les créations de memenow. Commencez par notre produit phare, Yinyang Agent : messages quotidiens gratuits et thème BaZi de base, synthèse complète des deux écoles, cycles et conversation.',
			ogTitle: 'Produits — memenow',
			ogDescription:
				'Pensé pour la réflexion sur soi et les choix du quotidien. Découvrez Yinyang Agent : lectures BaZi des Quatre Piliers, cycles et conversations qui connaissent votre thème.'
		},
		hero: {
			eyebrowLeft: 'MEMENOW · PRODUITS',
			eyebrowRight: 'DÉJÀ DISPONIBLE',
			title: 'Pensé pour la réflexion et les choix du quotidien',
			lede: 'Nous ne créons pas de gadgets jetables. Nous concevons des compagnons calmes et durables pour mieux vous connaître. Notre produit phare, Yinyang Agent, est disponible — à commencer par un thème gratuit et des repères quotidiens.',
			cue: 'Défiler · 01 Yinyang Agent'
		},
		yinyang: {
			number: '01',
			label: 'Yinyang Agent',
			title: 'Comprenez votre structure. Avancez à votre rythme.',
			lede: 'Découvrez le moment de votre naissance à travers les Quatre Piliers du BaZi. Que vous vous intéressiez pour la première fois à votre équilibre élémentaire ou que vous envisagiez un grand tournant, vous pouvez avancer pas à pas.',
			steps: [
				{
					num: 'Étape 01 · Départ gratuit',
					title: 'Thème de base et message du jour',
					body: 'Saisissez votre date, votre heure et votre fuseau horaire de naissance pour voir aussitôt vos Quatre Piliers, l’équilibre de vos Cinq Éléments et des réflexions quotidiennes gratuites sur le moment présent.'
				},
				{
					num: 'Étape 02 · Portrait approfondi',
					title: 'Lecture complète des deux écoles',
					body: 'Déverrouillez votre rapport complet et détaillé : validations sur vos années passées, grands cycles décennaux (DaYun), chapitres consacrés à l’amour, à la carrière, à la santé et à la famille, et une carte portrait à partager.'
				},
				{
					num: 'Étape 03 · Rythme vivant',
					title: 'Cycles et conversation',
					body: 'Consultez vos périodes du jour, de la semaine, du mois et de l’année au fil des saisons, ou ouvrez une conversation pour réfléchir à de vraies décisions avec votre thème en contexte.'
				},
				{
					num: 'Étape 04 · Méthode ouverte',
					title: 'Bibliothèque BaZi intégrée et raisonnement clair',
					body: 'Chaque repère indique la base classique sur laquelle il s’appuie, avec une Bibliothèque BaZi accessible pour approfondir chaque notion à votre rythme.'
				}
			],
			cta: 'Essayer Yinyang Agent gratuitement',
			detailLink: 'Lire la présentation complète du produit'
		}
	},
	productYinyang: {
		meta: {
			title: 'Yinyang Agent — BaZi des Quatre Piliers et compagnon des rythmes de vie · memenow',
			description:
				'Yinyang Agent transforme le BaZi classique des Quatre Piliers en une prose claire et moderne : thème calculé selon les termes solaires, synthèse des écoles ZiPing et MangPai, cycles et conversation.',
			ogTitle: 'Yinyang Agent — Lire la structure de votre moment de naissance',
			ogDescription:
				'Commencez gratuitement avec votre thème BaZi de base et des messages quotidiens. Allez plus loin avec des lectures détaillées, des cycles à plusieurs échelles et des conversations qui connaissent votre thème.'
		},
		hero: {
			eyebrowLeft: 'PRODUIT · YINYANG AGENT',
			eyebrowRight: 'GRATUIT POUR COMMENCER',
			title: 'La sagesse ancienne des Quatre Piliers, dans une prose claire et moderne',
			lede: 'Le BaZi n’est pas un verdict fataliste sur votre avenir, mais une grille d’observation de soi éprouvée par le temps. Yinyang Agent réunit le calcul du thème selon les termes solaires, la synthèse classique de deux écoles, les cycles et la conversation pour vous aider à traverser le présent avec calme et clarté.',
			primaryCta: 'Lire mon thème gratuitement',
			cue: 'Défiler · 01 Expérience et rythme'
		},
		reading: {
			number: '01',
			label: 'Expérience et rythme',
			title: 'De la première reconnaissance à un repère au quotidien',
			lede: 'Commencez en douceur avec un message quotidien gratuit ou deux lectures gratuites de thème de base par mois. Votre thème des Quatre Piliers et sa synthèse narrative s’affichent côte à côte — clairs au premier regard, riches quand vous souhaitez approfondir.',
			p1: 'Lorsque vous déverrouillez le rapport complet, le système calibre votre thème sur votre fuseau horaire de naissance et les termes solaires astronomiques, puis déroule des validations concrètes sur vos années passées, les grands cycles décennaux (DaYun) et des chapitres pratiques sur l’amour, la carrière, la santé et la famille. Vous pouvez aussi consulter chaque notion dans la Bibliothèque BaZi intégrée ou enregistrer une carte portrait personnalisée de votre thème.',
			p2: 'Chaque lecture reste enregistrée dans votre compte comme une référence personnelle durable. Au fil du temps, les cycles repèrent vos périodes du jour, de la semaine, du mois et de l’année, tandis que la conversation et les canaux dédiés aux domaines de la vie vous permettent de revenir avec de nouvelles questions dès qu’une décision se présente.',
			highlights: [
				{
					num: '01 · Zéro jargon',
					title: 'Le thème et le récit, côte à côte',
					body: 'Les troncs, les branches et les dynamiques élémentaires les plus complexes sont traduits en une prose chaleureuse et actuelle, lisible par tous dès le premier jour.'
				},
				{
					num: '02 · Ancrée dans votre passé',
					title: 'Vérifiée sur des années que vous avez vécues',
					body: 'En retraçant vos années charnières avant de regarder devant, votre lecture ancre les cycles à venir dans la réalité vécue plutôt que dans des suppositions génériques.'
				},
				{
					num: '03 · Plusieurs échelles de temps',
					title: 'Périodes du jour, de la semaine, du mois et de l’année',
					body: 'Reliez votre structure natale de long terme au rythme d’aujourd’hui, de cette semaine ou de cette année — pour savoir quand avancer et quand vous ressourcer.'
				},
				{
					num: '04 · Conversation en contexte',
					title: 'Une conversation qui connaît votre thème',
					body: 'Confiez vos questions de couple, vos arbitrages professionnels ou vos pensées agitées à une conversation privée qui comprend déjà votre structure natale.'
				}
			]
		},
		pullquote: {
			quote:
				'Une bonne lecture ne choisit jamais à votre place. Elle dissipe le brouillard pour que vous entendiez ce que vous savez déjà.',
			attribution: 'Principe de conception de Yinyang Agent'
		},
		discipline: {
			number: '02',
			label: 'Savoir-faire et méthode',
			title: 'Pourquoi une lecture demande quelques minutes',
			lede: 'Les horoscopes instantanés sont faits pour être survolés puis oubliés. Rédiger un document personnel qui mérite d’être gardé exige une synthèse réfléchie et des vérifications croisées.',
			p1: 'Lorsque vous envoyez vos données de naissance, Yinyang Agent établit d’abord votre thème selon les termes solaires astronomiques, puis l’étudie en parallèle à travers deux écoles classiques complémentaires : ZiPing (équilibre des éléments et climat saisonnier) et MangPai (dynamique structurelle et œuvre de vie). Avant la finalisation de votre rapport, une relecture dédiée confronte chaque affirmation et chaque passage d’une année à l’autre aux données de votre thème, et supprime le remplissage vague. Ces quelques minutes de calme sont ce qui rend chaque paragraphe solide.',
			comparison: {
				caption: 'Yinyang Agent face aux horoscopes IA génériques',
				genericLabel: 'Horoscopes IA / chatbots génériques',
				yinyangLabel: 'Yinyang Agent',
				rows: [
					{
						feature: 'Base du thème',
						generic:
							'Ignore souvent le fuseau horaire de naissance et les termes solaires, et calcule mal les Quatre Piliers',
						yinyang:
							'Calibré sur le fuseau horaire IANA exact de naissance et les termes solaires astronomiques'
					},
					{
						feature: 'Profondeur',
						generic: 'Des énoncés Barnum en un seul prompt, identiques pour tout le monde',
						yinyang: 'Synthèse des écoles ZiPing + MangPai adaptée à votre structure précise'
					},
					{
						feature: 'Cohérence',
						generic: 'Se contredit d’une question à l’autre, avec des affirmations non vérifiées',
						yinyang:
							'Confronté aux données du thème et ancré dans des validations sur les années passées'
					},
					{
						feature: 'Suivi',
						generic: 'Une conversation ponctuelle qui disparaît dès que vous fermez l’onglet',
						yinyang:
							'Référence natale enregistrée, associée aux cycles en direct et à la conversation'
					}
				]
			},
			cta: 'Commencer votre lecture sur yinyang.memenow.xyz'
		}
	},
	company: {
		meta: {
			title: 'À propos — memenow',
			description:
				'Fondé en 2024, memenow est un studio d’IA indépendant présent aux États-Unis et en Grande Chine, qui relie la philosophie orientale classique à une IA moderne et transparente.',
			ogTitle: 'À propos — memenow',
			ogDescription:
				'Un studio indépendant fondé en 2024. Entre sagesse culturelle orientale et savoir-faire d’ingénierie discret, pour créer une IA à laquelle on a envie de revenir.'
		},
		hero: {
			eyebrowLeft: 'À PROPOS · STUDIO MEMENOW',
			eyebrowRight: 'DEPUIS 2024',
			title: 'Un studio indépendant fondé sur un artisanat discret',
			lede: 'Fondé en 2024 entre les États-Unis et la Grande Chine. Nous réunissons la sagesse culturelle classique et une IA moderne et transparente, en avançant avec soin pour que chaque création dure.',
			cue: 'Défiler · 01 Qui nous sommes'
		},
		studio: {
			number: '01',
			label: 'Qui nous sommes',
			title: 'Par-delà les fuseaux horaires, unis par la retenue et le soin',
			lede: 'Société immatriculée au Delaware, avec une petite équipe répartie entre les États-Unis et la Grande Chine.',
			p1: 'Notre équipe réunit des ingénieurs en systèmes d’IA et des passionnés de longue date de philosophie et de sciences humaines orientales. Nous partageons un même rejet du battage bruyant et de la croissance à coups d’interfaces trompeuses, et préférons travailler discrètement jusqu’à ce que la technologie complexe devienne chaleureuse, posée et réellement utile au quotidien.',
			stats: {
				foundedYear: '2024',
				foundedLabel: 'Création du studio',
				foundedDesc: 'Fondé sur un raisonnement honnête et un accompagnement durable.',
				productCount: '1',
				productLabel: 'Produit phare',
				productDesc: 'Yinyang Agent : lectures des Quatre Piliers, cycles et conversation.',
				teamRegion: 'US · CN',
				teamLabel: 'Équipe interculturelle',
				teamDesc: 'Entre rigueur de l’IA moderne et regard oriental classique.'
			}
		},
		work: {
			number: '02',
			label: 'Notre façon de travailler',
			title: 'Comment nous façonnons chaque lancement',
			lede: 'Choisir une question humaine qui compte, puis y répondre avec clarté, retenue et patience.',
			p1: 'Nous ne créons que là où l’IA peut être une vraie compagne au long cours — là où ce que vous lisez mérite d’être conservé, relu et réinterrogé à mesure que la vie change. Yinyang Agent est notre première réponse à cette exigence. Nous n’utilisons jamais d’accroches anxiogènes ni d’urgence artificielle, car un travail qui respecte son lecteur gagne naturellement sa confiance.',
			p2: 'Lorsque le raisonnement classique offre un signal clair, nous montrons comment nous y sommes parvenus. Lorsque la vie reste ouverte, nous laissons place à votre libre arbitre. Lorsqu’un modèle ou une fonctionnalité demande plus de soin, nous prenons le temps de bien faire.',
			timeline: [
				{
					year: '2024',
					title: 'Création du studio',
					body: 'memenow naît avec une charte claire : pas de divination fondée sur la peur, pas de gadgets IA jetables — seulement un travail solide, à relire.'
				},
				{
					year: '2024–2026',
					title: 'Yinyang Agent : lancement et évolution',
					body: 'Notre produit phare voit le jour et s’enrichit : thème calculé selon les termes solaires, synthèse des écoles ZiPing et MangPai, vérification du rapport complet, cycles à plusieurs échelles et conversation.'
				}
			]
		},
		contact: {
			number: '03',
			label: 'Contact',
			title: 'Nous serions ravis de vous lire',
			lede: 'Pour la presse, un partenariat ou un retour réfléchi, écrivez à ',
			ledeEnd: '.',
			p1: 'Nous lisons chaque message et répondons nous-mêmes — sans file de tickets, sans réponse automatique et sans lettre type.',
			cta: 'Écrire à hello@memenow.xyz'
		}
	},
	privacy: {
		meta: {
			title: 'Politique de confidentialité — memenow',
			description: 'Avis de confidentialité de memenow.xyz.'
		},
		hero: {
			eyebrowLeft: 'JURIDIQUE · CONFIDENTIALITÉ',
			eyebrowRight: 'MIS À JOUR LE 2026-10-15',
			title: 'Votre vie privée, en termes simples',
			lede: 'memenow.xyz ne collecte presque rien sur ce site. Voici clairement ce qui reste entièrement dans votre navigateur et quelles métadonnées minimales assurent le fonctionnement du site.',
			cue: 'Défiler · Avis de confidentialité'
		},
		scope: {
			number: '01',
			label: 'Champ d’application',
			title: 'Ce que couvre cet avis',
			body: 'Cet avis s’applique aux pages publiques de <strong>memenow.xyz</strong>. Chaque produit (comme Yinyang Agent) fournit son propre avis de confidentialité et ses propres paramètres de données sur ses interfaces respectives.'
		},
		data: {
			number: '02',
			label: 'Données',
			title: 'Ce que nous collectons et ce qui reste dans votre navigateur',
			p1: 'Nous n’utilisons sur ce site aucun outil d’analyse tiers ni aucun traceur publicitaire. Vos préférences d’affichage et d’animation (les clés locales du navigateur <code class="prose-code">memenow.theme</code> et <code class="prose-code">memenow.motion</code>) restent dans votre navigateur et ne nous sont jamais transmises. Votre préférence de langue (<code class="prose-code">memenow.locale</code>) est enregistrée dans un cookie propriétaire et sert uniquement à afficher les pages dans la langue que vous avez choisie.',
			p2: 'Notre fournisseur d’infrastructure, Cloudflare, enregistre des métadonnées de requête standard (adresse IP, agent utilisateur, horodatage et chemin) à des fins de sécurité et de fiabilité. Nous ne relions jamais ces journaux techniques à une quelconque identité personnelle.'
		},
		email: {
			number: '03',
			label: 'E-mail et contact',
			title: 'Quand vous nous écrivez',
			body: 'Si vous écrivez à <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>, votre message et votre adresse servent uniquement à vous répondre. Nous ne vendons ni ne partageons jamais votre correspondance avec des tiers.'
		}
	},
	terms: {
		meta: {
			title: 'Conditions d’utilisation — memenow',
			description: 'Conditions d’utilisation de memenow.xyz.'
		},
		hero: {
			eyebrowLeft: 'JURIDIQUE · CONDITIONS',
			eyebrowRight: 'MIS À JOUR LE 2026-10-15',
			title: 'Des conditions claires et simples',
			lede: 'Les conditions qui régissent votre utilisation de memenow.xyz, rédigées en langage clair.',
			cue: 'Défiler · Conditions d’utilisation'
		},
		scope: {
			number: '01',
			label: 'Champ d’application',
			title: 'Ce que couvrent ces conditions',
			body: 'Ces conditions régissent les pages publiques de <strong>memenow.xyz</strong>. En accédant à ce site ou en l’utilisant, vous reconnaissez et acceptez ces conditions. Chaque produit (comme Yinyang Agent) publie ses propres conditions spécifiques sur ses interfaces respectives.'
		},
		disclaimer: {
			number: '02',
			label: 'Avertissement culturel et IA',
			title: 'Réflexion culturelle et contenus générés par IA',
			p1: 'Les contenus sur le BaZi, les Quatre Piliers et les Cinq Éléments proposés par les produits memenow (dont Yinyang Agent) s’inspirent de la philosophie et du patrimoine culturel chinois classiques. Ils sont fournis uniquement à des fins de réflexion personnelle et de découverte culturelle, et <strong>ne constituent pas et ne peuvent remplacer un avis professionnel médical, psychologique, juridique ou financier</strong>.',
			p2: 'Les lectures sont générées par des modèles d’IA sous forme d’interprétations narratives ; nous ne donnons aucune garantie, expresse ou implicite, de certitude prédictive. Votre thème est une grille de réflexion : chaque décision concrète relève de votre seul jugement et de votre responsabilité.'
		},
		warranty: {
			number: '03',
			label: 'Nature du service',
			title: 'Fourni en l’état',
			body: 'Ce site est fourni « en l’état ». Bien que nous attachions une grande importance à l’exactitude et à la disponibilité, nous ne donnons aucune garantie quant à l’adéquation à un usage particulier, à l’exhaustivité ou à la disponibilité ininterrompue.'
		},
		offer: {
			number: '04',
			label: 'Aucune offre financière',
			title: 'Rien ici ne constitue une sollicitation financière',
			body: 'Rien sur ce site ne constitue une offre de vente, une sollicitation d’achat ou une recommandation concernant un titre, une part de fonds ou un instrument financier.'
		},
		ip: {
			number: '05',
			label: 'Propriété intellectuelle',
			title: 'Marques, design du site et vos lectures personnelles',
			p1: '« memenow » et la marque memenow sont des marques de memenow ; les autres marques appartiennent à leurs propriétaires respectifs. Textes et design visuel du site © memenow.',
			p2: 'Les lectures personnelles que vous générez dans des produits comme Yinyang Agent restent à vous : vous pouvez les lire de façon permanente, les conserver en privé et les partager à des fins non commerciales.'
		},
		law: {
			number: '06',
			label: 'Droit applicable',
			title: 'Droit applicable et mises à jour',
			p1: 'Ces conditions sont régies par le droit de l’État du Delaware, aux États-Unis, sans égard aux principes de conflit de lois.',
			p2: 'Nous pouvons mettre à jour ces conditions à mesure que notre studio évolue ; la date « Mis à jour le » indiquée en en-tête correspond à la dernière révision. Vos questions sont toujours les bienvenues à <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>.'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: 'Cette page s’est perdue de vue',
		serverErrorTitle: 'Un léger trouble dans le signal',
		notFoundLede:
			'La page que vous cherchiez a peut-être été déplacée, renommée, ou n’a jamais existé. Revenons en terrain connu.',
		serverErrorLede: 'Un problème est survenu de notre côté. Patientez un instant, puis réessayez.',
		returnHome: 'Retour à l’accueil',
		statusLabel: 'Statut · {status}',
		notFoundLabel: 'Page introuvable',
		errorLabel: 'Erreur du service',
		cueHome: 'Retour · Accueil'
	}
};
