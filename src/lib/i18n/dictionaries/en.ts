/** American English dictionary. Structure is enforced by `MessageSchema`. */

import type { MessageSchema } from './zh';

export const en: MessageSchema = {
	common: {
		brand: 'memenow',
		home: 'Home',
		products: 'Products',
		company: 'About',
		legal: 'Legal',
		privacy: 'Privacy',
		terms: 'Terms',
		skipToContent: 'Skip to main content',
		navAriaLabel: 'Primary navigation',
		brandHomeAriaLabel: 'memenow home',
		rightsReserved: '© {year} memenow · All rights reserved',
		theme: {
			switchToDark: 'Switch to dark theme',
			switchToLight: 'Switch to light theme'
		},
		motion: {
			reduce: 'Reduce motion',
			allow: 'Allow motion'
		},
		language: {
			menuLabel: 'Change language',
			footerTitle: 'Language'
		}
	},
	home: {
		meta: {
			title: 'memenow — Know your rhythm. Choose with clarity.',
			description:
				'memenow is an independent AI studio crafting thoughtful tools for self-reflection and life timing. Our flagship product, Yinyang Agent, turns classical Four Pillars BaZi into warm, grounded prose you can revisit across every season of life.',
			ogTitle: 'memenow — Know your rhythm. Choose with clarity.',
			ogDescription:
				'An independent AI studio for personal insight and life rhythm. First release: Yinyang Agent — Four Pillars BaZi readings, Timing Cycles, and Companion dialogue.'
		},
		hero: {
			eyebrowLeft: 'MEMENOW · PERSONAL INSIGHT STUDIO',
			eyebrowRight: 'FLAGSHIP · YINYANG AGENT',
			title: 'Know your rhythm. Choose with clarity.',
			lede: 'At life’s crossroads, you don’t need vague fortune-telling clichés—you need a calm, honest mirror. Our flagship release, Yinyang Agent, translates the classical Four Pillars of BaZi into warm, readable prose that helps you understand your nature and navigate changing seasons.',
			primaryCta: 'Try Yinyang Agent Free',
			secondaryCta: 'Explore the product',
			cue: 'Scroll · 01 Flagship product'
		},
		yinyang: {
			number: '01',
			label: 'Yinyang Agent',
			title: 'A personal reading written to live with you',
			lede: 'Begin with your birth date, time, and birth timezone—no astrology background required. Receive a deeply reasoned Four Pillars portrait written in clear modern prose and saved to your private account for good.',
			p1: 'Yinyang Agent calibrates your birth chart against astronomical solar terms, blending ZiPing elemental balance with MangPai structural flow. Instead of dumping a wall of esoteric symbols, it weaves your Day Master, past-year milestones, and guidance for love, career, health, and family into a single cohesive narrative.',
			p2: 'Your natal reading anchors the long arc of who you are. As life unfolds, Timing Cycles maps favorable and caution windows across days, weeks, months, and years—and Companion dialogue lets you return anytime with a real decision on your mind.',
			pillars: [
				{
					num: '01 · Natal Portrait',
					title: 'Understand your innate wiring',
					body: 'No glossary needed. Read a nuanced, plain-language narrative of your core temperament, natural strengths, and how past pivotal years played out.'
				},
				{
					num: '02 · Four Life Domains',
					title: 'Clarity across love, career, health & family',
					body: 'Move beyond abstract elemental scores into practical reflection for the relationships, ambitions, and daily habits that shape your life.'
				},
				{
					num: '03 · Timing Cycles',
					title: 'Move in sync with days, weeks, months & years',
					body: 'Know when to lean in and when to rest. See how current temporal cycles interact with your natal chart so you can pace your next move.'
				},
				{
					num: '04 · Companion Dialogue',
					title: 'A conversation that remembers who you are',
					body: 'Never start from scratch. Come back whenever a new question or crossroads arises and talk it through with a companion grounded in your chart.'
				}
			],
			cta: 'Read My Chart Free',
			detailLink: 'See how Yinyang Agent works'
		},
		pullquote: {
			quote:
				'Reading the tide isn’t about surrendering to the waves—it’s about holding the helm with calm conviction.',
			attribution: 'memenow studio ethos'
		},
		studio: {
			number: '02',
			label: 'Our Philosophy',
			title: 'Quiet craft for questions that stay with you',
			lede: 'No hype, no hollow horoscopes, and no rushed shortcuts—just thoughtful work built to hold up over time.',
			p1: 'We founded memenow in 2024 with a simple observation: while most of the AI world raced to build louder, faster chatbots, very few were building spaces for quiet self-understanding. When someone brings a genuine life question to AI, they deserve transparent reasoning and human warmth.',
			p2: 'That is why we work like a small craft studio. Yinyang Agent sets the standard for everything we build: we don’t measure success by a flashy first thirty seconds, but by whether you still find comfort and clarity when you return a month—or a year—later.'
		},
		contact: {
			number: '03',
			label: 'Contact',
			title: 'Start a conversation',
			lede: 'For product thoughts, press inquiries, or meaningful partnerships, write to ',
			ledeEnd: '.',
			p1: 'Every note is read and answered personally by a member of our team. We may take a little time to reply thoughtfully, but you will always hear back from a real person—never an automated template.',
			cta: 'Email hello@memenow.xyz'
		}
	},
	products: {
		meta: {
			title: 'Products — memenow',
			description:
				'Works crafted by memenow. Start with our flagship release, Yinyang Agent: free daily prompts and base BaZi charting, full dual-school synthesis, Timing Cycles, and Companion dialogue.',
			ogTitle: 'Products — memenow',
			ogDescription:
				'Crafted for self-reflection and everyday choices. Explore Yinyang Agent: Four Pillars BaZi readings, Timing Cycles, and chart-aware dialogue.'
		},
		hero: {
			eyebrowLeft: 'MEMENOW · PRODUCTS',
			eyebrowRight: 'LIVE NOW',
			title: 'Crafted for reflection and everyday choices',
			lede: 'We don’t build disposable novelty tools. We craft calm, enduring companions for self-discovery. Our flagship product, Yinyang Agent, is live—starting with free charting and daily insights.',
			cue: 'Scroll · 01 Yinyang Agent'
		},
		yinyang: {
			number: '01',
			label: 'Yinyang Agent',
			title: 'Understand your pattern. Move at your own pace.',
			lede: 'Explore your birth moment through the Four Pillars of BaZi. Whether you are curious about your elemental balance for the first time or weighing a major life transition, you can explore step by step.',
			steps: [
				{
					num: 'Step 01 · Free Start',
					title: 'Base Chart & Daily Prompt',
					body: 'Enter your birth date, time, and birth timezone to see your Four Pillars, Five Elements balance, and free daily timing reflections right away.'
				},
				{
					num: 'Step 02 · Deep Portrait',
					title: 'Full Dual-School Reading',
					body: 'Unlock your complete long-form report: past-year validations, ten-year DaYun arcs, dedicated chapters for love, career, health, and family, plus a shareable Portrait Card.'
				},
				{
					num: 'Step 03 · Living Rhythm',
					title: 'Timing Cycles & Companion',
					body: 'Check your day, week, month, and year windows as seasons change, or open Companion dialogue to talk through real-life decisions with your chart in context.'
				},
				{
					num: 'Step 04 · Open Method',
					title: 'Built-In BaZi Library & Clear Reasoning',
					body: 'Every insight shows the classical basis behind it, paired with an approachable BaZi Library so you can explore every concept at your own pace.'
				}
			],
			cta: 'Try Yinyang Agent Free',
			detailLink: 'Read full product story'
		}
	},
	productYinyang: {
		meta: {
			title: 'Yinyang Agent — Four Pillars BaZi & Life Rhythm Companion · memenow',
			description:
				'Yinyang Agent turns classical Four Pillars BaZi into clear modern prose. Featuring solar-term charting, dual-school ZiPing & MangPai synthesis, Timing Cycles, and Companion dialogue.',
			ogTitle: 'Yinyang Agent — Read the pattern in your birth moment',
			ogDescription:
				'Start free with base BaZi charting and daily prompts. Go deeper with long-form readings, multi-scale Timing Cycles, and chart-aware Companion dialogue.'
		},
		hero: {
			eyebrowLeft: 'PRODUCT · YINYANG AGENT',
			eyebrowRight: 'FREE TO START',
			title: 'Ancient Four Pillars wisdom, written in clear modern prose',
			lede: 'BaZi is not a fatalistic verdict on your future—it is a time-tested lens for self-observation. Yinyang Agent brings together solar-term charting, dual-school classical synthesis, Timing Cycles, and Companion dialogue so you can navigate the present with calm clarity.',
			primaryCta: 'Read My Chart Free',
			cue: 'Scroll · 01 Experience & rhythm'
		},
		reading: {
			number: '01',
			label: 'Experience & Rhythm',
			title: 'From first recognition to everyday perspective',
			lede: 'Start effortlessly with a free daily prompt or two free base chart readings each month. Your Four Pillars chart and narrative overview sit side by side—clear at first glance, rich when you want to dive deeper.',
			p1: 'When you unlock the full report, the system calibrates your chart to your birth timezone and astronomical solar terms, unfolding concrete past-year validations, ten-year DaYun cycles, and practical chapters on love, career, health, and family. You can also explore any concept in the built-in BaZi Library or save a custom Portrait Card of your chart.',
			p2: 'Every reading stays saved in your account as a lasting personal reference. As time moves forward, Timing Cycles maps your day, week, month, and year windows, while Companion dialogue and dedicated life Channels let you return with new questions whenever a decision arises.',
			highlights: [
				{
					num: '01 · Zero Jargon Wall',
					title: 'Chart and story, side by side',
					body: 'Complex stems, branches, and elemental dynamics are translated into warm, contemporary prose anyone can read on day one.'
				},
				{
					num: '02 · Grounded in Your Past',
					title: 'Validated against real years you lived',
					body: 'By tracing pivotal past years before looking ahead, your reading anchors future cycles in lived reality rather than generic guesswork.'
				},
				{
					num: '03 · Multi-Scale Timing',
					title: 'Day, week, month & year windows',
					body: 'Connect your long-term natal structure to the rhythm of today, this week, or this year—so you know when to push forward and when to recharge.'
				},
				{
					num: '04 · Context-Aware Dialogue',
					title: 'A companion that knows your chart',
					body: 'Bring relationship questions, career trade-offs, or restless thoughts into a private conversation that already understands your natal pattern.'
				}
			]
		},
		pullquote: {
			quote:
				'A good reading never makes the choice for you. It clears the fog so you can hear what you already know.',
			attribution: 'Yinyang Agent design principle'
		},
		discipline: {
			number: '02',
			label: 'Craft & Method',
			title: 'Why a reading takes a few minutes to craft',
			lede: 'Instant one-second horoscopes are built to be skimmed and forgotten. Writing a personal document worth keeping takes deliberate synthesis and cross-checking.',
			p1: 'When you submit your birth details, Yinyang Agent first locks in your astronomical solar-term chart, then explores it through two complementary classical schools in parallel: ZiPing (elemental balance and seasonal climate) and MangPai (structural momentum and life work). Before your report is finalized, a dedicated review pass cross-checks every claim and year boundary against your chart facts, removing vague filler. Those few quiet minutes are what make every paragraph hold up.',
			comparison: {
				caption: 'How Yinyang Agent compares to generic AI horoscopes',
				genericLabel: 'Generic AI Horoscopes / Chatbots',
				yinyangLabel: 'Yinyang Agent',
				rows: [
					{
						feature: 'Chart Foundation',
						generic:
							'Often ignores birth timezone and solar terms, miscalculating the Four Pillars',
						yinyang: 'Calibrated to exact birth IANA timezone and astronomical solar terms'
					},
					{
						feature: 'Interpretive Depth',
						generic: 'Single-prompt Barnum statements that sound the same for everyone',
						yinyang: 'Dual-school ZiPing + MangPai synthesis tailored to your specific structure'
					},
					{
						feature: 'Consistency & Trust',
						generic: 'Contradicts itself across prompts with unverified claims',
						yinyang: 'Cross-checked against chart facts and anchored in past-year validations'
					},
					{
						feature: 'Ongoing Companion',
						generic: 'One-off chat transcript that disappears once you close the tab',
						yinyang: 'Saved natal reference paired with live Timing Cycles and Companion dialogue'
					}
				]
			},
			cta: 'Start Your Reading at yinyang.memenow.xyz'
		}
	},
	company: {
		meta: {
			title: 'About — memenow',
			description:
				'Founded in 2024, memenow is an independent AI studio across the United States and Greater China, bridging classical Eastern philosophy with transparent modern AI.',
			ogTitle: 'About — memenow',
			ogDescription:
				'An independent studio founded in 2024. Bridging Eastern cultural wisdom and quiet engineering craft to build AI worth returning to.'
		},
		hero: {
			eyebrowLeft: 'ABOUT · MEMENOW STUDIO',
			eyebrowRight: 'EST. 2024',
			title: 'An independent studio built on quiet craft',
			lede: 'Founded in 2024 across the United States and Greater China. We bring together classical cultural wisdom and transparent modern AI—shipping thoughtfully so every work endures.',
			cue: 'Scroll · 01 Who we are'
		},
		studio: {
			number: '01',
			label: 'Who We Are',
			title: 'Across time zones, united by restraint and care',
			lede: 'Incorporated in Delaware, with a small team working across the United States and Greater China.',
			p1: 'Our team brings together AI systems engineers and longtime students of Eastern philosophy and humanities. We share a distaste for noisy hype and dark-pattern growth, preferring to work quietly until complex technology feels warm, grounded, and genuinely helpful in everyday life.',
			stats: {
				foundedYear: '2024',
				foundedLabel: 'Studio Founded',
				foundedDesc: 'Built on the principle of honest reasoning and lasting companionship.',
				productCount: '1',
				productLabel: 'Flagship Release',
				productDesc: 'Yinyang Agent: Four Pillars readings, Timing Cycles, and Companion dialogue.',
				teamRegion: 'US · CN',
				teamLabel: 'Cross-Cultural Team',
				teamDesc: 'Bridging modern AI rigor with classical Eastern perspective.'
			}
		},
		work: {
			number: '02',
			label: 'How We Work',
			title: 'How we shape every release',
			lede: 'Choose a human question worth caring about, then answer it with clarity, restraint, and patience.',
			p1: 'We only build where AI can be a genuine long-term companion—where what you read is worth saving, revisiting, and questioning again as life changes. Yinyang Agent is our first answer to that test. We never use fear-mongering hooks or artificial urgency, because work that respects the reader earns trust naturally.',
			p2: 'Where classical reasoning offers clear signal, we show how we got there. Where life remains open, we leave room for your own agency. When a model or feature needs more care, we take the time to get it right.',
			timeline: [
				{
					year: '2024',
					title: 'Studio Founded',
					body: 'memenow established with a clear charter: no fear-based fortune-telling, no disposable AI novelties—only grounded, revisitable work.'
				},
				{
					year: '2024–2026',
					title: 'Yinyang Agent Live & Evolving',
					body: 'Our flagship product launches and expands with solar-term charting, dual-school ZiPing and MangPai synthesis, whole-report verification, multi-scale Timing Cycles, and Companion dialogue.'
				}
			]
		},
		contact: {
			number: '03',
			label: 'Contact',
			title: 'We would love to hear from you',
			lede: 'For press, partnerships, or thoughtful feedback, write to ',
			ledeEnd: '.',
			p1: 'We read every message and reply ourselves—no ticket queues, no auto-responders, and no canned form letters.',
			cta: 'Email hello@memenow.xyz'
		}
	},
	privacy: {
		meta: {
			title: 'Privacy Policy — memenow',
			description: 'Privacy notice for memenow.xyz.'
		},
		hero: {
			eyebrowLeft: 'LEGAL · PRIVACY',
			eyebrowRight: 'UPDATED 2026-10-15',
			title: 'Your privacy, in plain words',
			lede: 'memenow.xyz collects almost nothing on this website. Here is a clear breakdown of what stays entirely in your browser and what minimal metadata keeps the site running.',
			cue: 'Scroll · Privacy notice'
		},
		scope: {
			number: '01',
			label: 'Scope',
			title: 'What this notice covers',
			body: 'This notice applies to the public pages on <strong>memenow.xyz</strong>. Individual products (such as Yinyang Agent) provide their own dedicated privacy notices and data controls on their respective surfaces.'
		},
		data: {
			number: '02',
			label: 'Data Practices',
			title: 'What we collect and what stays local',
			p1: 'We run no third-party analytics and no advertising trackers on this site. Your theme and motion preferences (the browser-local keys <code class="prose-code">memenow.theme</code> and <code class="prose-code">memenow.motion</code>) stay inside your browser and are never transmitted to us. Your language preference (<code class="prose-code">memenow.locale</code>) is stored in a first-party cookie and used solely to serve pages in the language you selected.',
			p2: 'Our infrastructure provider, Cloudflare, logs standard request metadata (IP address, user agent, timestamp, and path) for security and reliability. We never link those operational logs to any personal identity.'
		},
		email: {
			number: '03',
			label: 'Email & Contact',
			title: 'When you write to us',
			body: 'If you email <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>, your message and address are used only to reply to you. We never sell or share your correspondence with third parties.'
		}
	},
	terms: {
		meta: {
			title: 'Terms of Use — memenow',
			description: 'Terms of use for memenow.xyz.'
		},
		hero: {
			eyebrowLeft: 'LEGAL · TERMS',
			eyebrowRight: 'UPDATED 2026-10-15',
			title: 'Clear, straightforward terms',
			lede: 'The terms that govern your use of memenow.xyz, written in plain language.',
			cue: 'Scroll · Terms of use'
		},
		scope: {
			number: '01',
			label: 'Scope',
			title: 'What these terms cover',
			body: 'These terms govern the public pages on <strong>memenow.xyz</strong>. By accessing or using this site, you acknowledge and agree to these terms. Individual products (such as Yinyang Agent) publish their own product-specific terms on their respective surfaces.'
		},
		disclaimer: {
			number: '02',
			label: 'Cultural & AI Disclaimer',
			title: 'Cultural reflection and AI-generated content',
			p1: 'The BaZi, Four Pillars, and Five Elements content offered by memenow products (including Yinyang Agent) draws on classical Chinese philosophy and cultural heritage. It is provided for personal reflection and cultural exploration only, and <strong>does not constitute, and cannot replace, professional medical, psychological, legal, or financial advice</strong>.',
			p2: 'Readings are generated with AI models as narrative interpretations; we make no guarantee, express or implied, of predictive certainty. Your chart is a lens for reflection—every real-world decision remains your own judgment and responsibility.'
		},
		warranty: {
			number: '03',
			label: 'Service Basis',
			title: 'Provided as is',
			body: 'This site is provided on an "as is" basis. While we care deeply about accuracy and uptime, we make no warranties regarding fitness for a particular purpose, completeness, or uninterrupted availability.'
		},
		offer: {
			number: '04',
			label: 'No Financial Offer',
			title: 'Nothing here is a financial solicitation',
			body: 'Nothing on this site constitutes an offer to sell, a solicitation to buy, or a recommendation regarding any security, fund interest, or financial instrument.'
		},
		ip: {
			number: '05',
			label: 'Intellectual Property',
			title: 'Trademarks, site design, and your personal readings',
			p1: '"memenow" and the memenow mark are trademarks of memenow; other marks belong to their respective owners. Site copy and visual design © memenow.',
			p2: 'Personal readings you generate in products such as Yinyang Agent remain yours to read permanently, keep privately, and share for non-commercial purposes.'
		},
		law: {
			number: '06',
			label: 'Governing Law',
			title: 'Applicable law and updates',
			p1: 'These terms are governed by the laws of the State of Delaware, United States, without regard to conflict-of-laws principles.',
			p2: 'We may update these terms as our studio evolves; the "Updated" date in the header reflects the latest revision. Questions are always welcome at <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>.'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: 'This page has drifted out of view',
		serverErrorTitle: 'A momentary ripple in the signal',
		notFoundLede:
			'The page you were looking for may have moved, changed its name, or never existed. Let’s take you back to familiar ground.',
		serverErrorLede: 'Something went wrong on our end. Please give it a moment and try again.',
		returnHome: 'Return Home',
		statusLabel: 'Status · {status}',
		notFoundLabel: 'Page not found',
		errorLabel: 'Service error',
		cueHome: 'Return · Home'
	}
};
