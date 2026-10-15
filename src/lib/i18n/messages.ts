/**
 * Bilingual message dictionary — the single source of every user-facing
 * string. Chinese is the schema owner (`MessageSchema = typeof zh`); the
 * English map is checked against it structurally, so a missing or extra key
 * fails typechecking. No `as const`: literal widening to `string` is what
 * makes the two locales mutually assignable.
 *
 * Style contract (agreed with the site owner): grounded in actual shipped
 * capabilities, free of translationese and AI marketing cliches; the brand
 * is never translated; "Yinyang Agent" stays as-is; Timing Cycles is 时机周期
 * and Companion is 伴读对话 (glossed on first mention where helpful).
 * Legal strings contain intentional inline markup and are consumed via
 * `TrustedHtml` — they are trusted, static, and authored here, never user input.
 */

export const SUPPORTED_LOCALES = ['zh', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'zh';

const zh = {
	common: {
		brand: 'memenow',
		home: '首页',
		products: '产品',
		company: '公司',
		legal: '条款',
		privacy: '隐私政策',
		terms: '使用条款',
		skipToContent: '跳至主要内容',
		navAriaLabel: '主导航',
		brandHomeAriaLabel: 'memenow 首页',
		rightsReserved: '© {year} memenow · 保留所有权利',
		theme: {
			switchToDark: '切换至暗色主题',
			switchToLight: '切换至明亮主题'
		},
		motion: {
			reduce: '减弱动效',
			allow: '允许动效'
		},
		locale: {
			switchToEnglish: 'Switch to English',
			switchToChinese: '切换至中文'
		}
	},
	home: {
		meta: {
			title: 'memenow — 让 AI 成为你的伙伴。',
			description:
				'memenow 是一家打造可核查、可回访的 AI 的工作室。首款公开发布的作品是 Yinyang Agent：一份推理有据、可随时重读并继续追问的八字解读。',
			ogTitle: 'memenow — 让 AI 成为你的伙伴。',
			ogDescription:
				'一家注册于特拉华州刘易斯的工作室，打造推演可查、随时可回访的 AI。首款作品是 Yinyang Agent。'
		},
		hero: {
			eyebrowLeft: '工作室 · 特拉华州刘易斯',
			eyebrowRight: '始于 2024',
			title: '让 AI 成为你的伙伴。',
			lede: '真正的伙伴会把推演过程摊开给你看，也会在你几个月后带着新问题回来时，接得上之前的话。我们的首款作品是 Yinyang Agent：一份把四柱八字写成平实长文、能随时重读并继续追问的解读。',
			cue: '向下阅读 · 01 工作室'
		},
		studio: {
			number: '01',
			label: '工作室',
			title: '我们打造自己愿意留存的 AI。',
			lede: '分量克制，让人看得懂全貌；推演透明，每一步都有据可查；不赶工期，把事情做扎实。',
			p1: '我们在 2024 年创立 memenow。彼时行业里最热闹的 AI 公司都在比拼声量和速度，却很少有人耐心把一件具体的事做透。我们想走另一条路：做一家安静的工作室，不追逐包罗万象的噱头，只做推理过程经得起审视、结论经得起时间检验的作品。',
			p2: '首款公开发布的作品 Yinyang Agent 就按这个标准打造。未来我们还会推出新的作品，但每一件都必须先跨过同一道门槛：在第一次打开的一个月后、一年后，依然对你有价值。'
		},
		pullquote: {
			quote: '好的伙伴会把推演摆在明处，并在你回来时依然在场。',
			attribution: 'memenow 工作室准则'
		},
		yinyang: {
			number: '02',
			label: 'Yinyang Agent',
			title: '一份可以反复重读的八字解读。',
			lede: '根据出生日期、时间与出生地时区，生成一篇四柱八字长文。像一位愿意把话讲透的老师，有理有据，不用查术语表就能读懂，并长久保存在你的账户里。',
			p1: 'Yinyang Agent 按真太阳节气排定四柱，融合子平的五行旺衰平衡与盲派的全局势能推演，将日主、格局、过往年份印证以及感情、事业、健康、家庭的脉络写成一篇连贯的叙事，无需你先破译满屏符号。',
			p2: '本命解读定下长期的底色，时机周期（Timing Cycles）则按日、周、月、年为你标注当下的顺势与谨慎窗口。当生活遇到新选择时，你还可以带着问题回到报告里继续对话，让每一次回访都有上下文可依。',
			cta: '打开 Yinyang Agent'
		},
		contact: {
			number: '03',
			label: '联系',
			title: '联系我们。',
			lede: '媒体采访、合作接洽或认真的探讨，请致信 ',
			ledeEnd: '。',
			p1: '每一封来信都由团队成员亲自阅读和回复。我们未必能立刻回信，但写给你的每一句话都来自真人，没有自动回复模板。',
			cta: '致信 hello@memenow.xyz'
		}
	},
	products: {
		meta: {
			title: '产品 — memenow',
			description:
				'memenow 已发布的作品。首款公开发布的产品是 Yinyang Agent：融汇子平与盲派推演、可随时重读与对话的八字解读。',
			ogTitle: '产品 — memenow',
			ogDescription:
				'memenow 工作室首款公开发布的作品：Yinyang Agent，一份推理可查、结合时机周期与伴读对话的八字解读。'
		},
		hero: {
			eyebrowLeft: '产品',
			eyebrowRight: '更新于 2026-10',
			title: '我们交付的作品。',
			lede: '我们按长久留存的标准打磨每一件作品。首款公开发布的产品是 Yinyang Agent，它也为工作室后续的作品立下了标尺。',
			cue: '向下阅读 · 01 Yinyang Agent'
		},
		yinyang: {
			number: '01',
			label: 'Yinyang Agent',
			title: '看清命盘结构，把握当下节奏。',
			lede: '以四柱八字探索出生时刻。从免费每日提示与基础排盘开始，深入子平与盲派合参的完整报告，并在日、周、月、年的时机周期与伴读对话中持续找到参考。',
			cta: '打开 Yinyang Agent',
			detailLink: '阅读产品详情'
		}
	},
	productYinyang: {
		meta: {
			title: 'Yinyang Agent — memenow',
			description: 'Yinyang Agent：融合子平与盲派推演、时机周期与伴读对话的四柱八字解读。',
			ogTitle: 'Yinyang Agent — memenow',
			ogDescription: '四柱八字长篇解读，附完整推理链、日周月年时机周期与懂命盘的伴读对话。'
		},
		hero: {
			eyebrowLeft: '产品 · Yinyang Agent',
			eyebrowRight: '已上线',
			title: '看清命盘地势，为选择留出空间。',
			lede: '八字是一种帮助反思的文化框架，而非宿命的断言。我们将四柱排盘、子平与盲派推演、时机周期与伴读对话融为一体，陪你按自己的节奏读懂当下。',
			cue: '向下阅读 · 01 解读与周期'
		},
		reading: {
			number: '01',
			label: '解读与周期',
			title: '不止于第一次解读。',
			lede: '从免费每日提示与每个自然月两次免费基础排盘开始。命盘与长文并排呈现：先看清日主、五行分布与核心信号，再按需深入完整章节。',
			p1: '在完整报告中，系统基于出生地时区与真太阳节气排定四柱，将过往具体年份的印证、十年大运与流年脉络，以及感情、事业、健康、家庭四章行动建议悉数展开。每一步推演均标注置信度与命理依据，并配有八字资料库供你随时查证术语与流派，还可生成专属命盘画像卡。',
			p2: '报告长久保存在你的账户中，不会因重新刷新而变样。随着时间推移，时机周期（Timing Cycles）会结合你的命盘推算日、周、月、年的顺势与谨慎窗口；你也可以在伴读对话（Companion）或事业、情感、健康频道中，带着眼前的具体决定随时回来继续提问。'
		},
		pullquote: {
			quote: '值得留存的解读，在送达你之前，都先经过一道全文核查。',
			attribution: 'Yinyang Agent 的审校准则'
		},
		discipline: {
			number: '02',
			label: '推演与核查',
			title: '为什么一份解读需要几分钟。',
			lede: '仓促生成的套话只适合一划而过。要把八字写成一份经得起反复对照的参考，推演与核查都省不得时间。',
			p1: '当你提交出生信息后，Yinyang Agent 会先按节气定盘，随后并行启动子平（权衡五行生克与调候）与盲派（推演全局势能与做功）两条推理轨，再熔铸为完整初稿。送达你之前，独立的审校环节会将初稿与排盘事实、年份边界逐条比对，剔除无据断言并完成定向修复。多花的这几分钟，是为了让你读到的每一段话都有迹可循。',
			cta: '前往 yinyang.memenow.xyz'
		}
	},
	company: {
		meta: {
			title: '公司 — memenow',
			description:
				'memenow 是一家注册于特拉华州刘易斯的工作室，成立于 2024 年，打造可核查、可回访的 AI。',
			ogTitle: '公司 — memenow',
			ogDescription: '一家注册于特拉华州刘易斯的工作室。成立于 2024 年。打造可核查、可回访的 AI。'
		},
		hero: {
			eyebrowLeft: '公司 · 特拉华州刘易斯',
			eyebrowRight: '始于 2024',
			title: '一家小工作室。',
			lede: '2024 年成立于特拉华州刘易斯。我们打造可核查、可回访的 AI；我们慢慢交付，因为这些作品应当持久。',
			cue: '向下阅读 · 01 工作室'
		},
		studio: {
			number: '01',
			label: '工作室',
			title: '我们在哪里。',
			lede: '2024 年成立于特拉华州刘易斯。一支分布在美国与大中华区的小型团队。',
			p1: '刘易斯是公司文书注册的地方。团队成员分布在美国与大中华区的不同时区，大家都不喜欢高调喧哗，更愿意安安静静把东西做好，是这一点把我们聚在了一起。',
			stats: {
				foundedYear: '2024',
				foundedLabel: '成立',
				foundedDesc: '注册于特拉华州刘易斯。',
				productCount: '1',
				productLabel: '旗舰作品',
				productDesc: 'Yinyang Agent：可核查、可回访的四柱八字解读。',
				teamRegion: 'US · CN',
				teamLabel: '分布式团队',
				teamDesc: '一支跨美国与大中华区的小团队。'
			}
		},
		work: {
			number: '02',
			label: '工作方式',
			title: '我们如何工作。',
			lede: '选一个值得认真对待的问题，用克制、可核查、经得起时间检验的方式把它答好。',
			p1: '我们只做 AI 真能成为长期伙伴的事：它给出的内容值得你留存、重读，并在生活变化时带着新问题回来对照。Yinyang Agent 就是这样一个起点。我们衡量每件作品的标准很简单，不是看打开的第一分钟有多惊艳，而是看一个月后你还会不会回来用它。',
			p2: '遇到不知道的，我们就说不知道。模型不好用了，我们就停用它。需要更长时间，我们就延长排期。这些都不崇高——只是让作品值得信任的纪律。',
			timeline: [
				{
					year: '2024',
					title: '工作室成立',
					body: 'memenow 在特拉华州刘易斯注册。先确立可核查、可回访的产品准则，再写下第一行代码。'
				},
				{
					year: '2024–2026',
					title: 'Yinyang Agent',
					body: '首款作品上线并持续演进：融合子平与盲派双轨推演、全文证据核查、日周月年时机周期（Timing Cycles）与伴读对话（Companion）。'
				}
			]
		},
		contact: {
			number: '03',
			label: '联系',
			title: '取得联系。',
			lede: '媒体采访、合作接洽或认真的探讨，请致信 ',
			ledeEnd: '。',
			p1: '每一封来信都由我们亲自阅读和回复，没有自动应答，也不发模板信件。',
			cta: '致信 hello@memenow.xyz'
		}
	},
	privacy: {
		meta: {
			title: '隐私政策 — memenow',
			description: 'memenow.xyz 隐私声明。'
		},
		hero: {
			eyebrowLeft: '法律 · 隐私',
			eyebrowRight: '更新于 2026-10-15',
			title: '我们收集什么，不收集什么。',
			lede: 'memenow.xyz 在本站几乎不收集任何信息。以下说明到底收集了什么，以及什么只留在你的浏览器里。',
			cue: '向下阅读 · 隐私声明'
		},
		scope: {
			number: '01',
			label: '适用范围',
			title: '本声明涵盖什么。',
			body: '适用于 <strong>memenow.xyz</strong> 的公开页面。具体产品可能在其各自页面上有单独的隐私声明。'
		},
		data: {
			number: '02',
			label: '数据',
			title: '我们收集什么。',
			p1: '本站不使用第三方分析，也不投放广告。你的主题与动效偏好（浏览器本地键 <code class="prose-code">memenow.theme</code> 与 <code class="prose-code">memenow.motion</code>）只保存在浏览器中，不会发送给我们；语言偏好（<code class="prose-code">memenow.locale</code>）以 cookie 保存并随请求发送，仅用于以你选择的语言呈现页面。',
			p2: 'Cloudflare 会记录标准的请求元数据（IP、User-Agent、时间戳、路径）用于运维与安全。我们不会把它与任何身份关联。'
		},
		email: {
			number: '03',
			label: '邮件',
			title: '邮件与联系。',
			body: '致信 <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a> 的邮件仅用于回复沟通，我们不会与任何第三方分享。'
		}
	},
	terms: {
		meta: {
			title: '使用条款 — memenow',
			description: 'memenow.xyz 使用条款。'
		},
		hero: {
			eyebrowLeft: '法律 · 条款',
			eyebrowRight: '更新于 2026-10-15',
			title: '简明的条款。',
			lede: '我们发布 memenow.xyz 所依据的条件。',
			cue: '向下阅读 · 使用条款'
		},
		scope: {
			number: '01',
			label: '适用范围',
			title: '本条款涵盖什么。',
			body: '适用于 <strong>memenow.xyz</strong> 的公开页面。访问或使用本站，即表示你知悉并同意本条款。具体产品（如 Yinyang Agent）可能在其各自页面上另有条款。'
		},
		disclaimer: {
			number: '02',
			label: '文化与 AI 免责',
			title: '文化探究属性与 AI 生成内容。',
			p1: 'memenow 旗下产品（包括 Yinyang Agent）提供的八字、四柱与五行内容源自中国传统哲学与文化遗产，仅供人文反思与自我探索之用，<strong>不构成、也不能替代专业的医疗、心理、法律或财务建议</strong>。',
			p2: '上述内容由人工智能模型生成，本质上属于叙事性演绎；我们不对其绝对准确性或任何预见性结果作出明示或暗示的承诺。你基于这些内容作出的任何决定，由你独立判断并自行承担责任。'
		},
		warranty: {
			number: '03',
			label: '不作保证',
			title: '按「原样」提供。',
			body: '本站按「原样」提供。我们努力保持内容准确与服务在线，但不对其适用性、完整性或时效性作出任何保证。'
		},
		offer: {
			number: '04',
			label: '非要约',
			title: '本站内容不构成金融要约。',
			body: '本站的任何内容均不构成出售任何证券、基金份额或金融工具的要约，也不构成购买邀约或相关建议。'
		},
		ip: {
			number: '05',
			label: '知识产权',
			title: '商标、版权与你的个人解读。',
			p1: '「memenow」名称与标志是 memenow 的商标；其他商标归其各自所有者。本站文字与设计 © memenow。',
			p2: '你在 Yinyang Agent 等产品中生成的个人解读，享有永久阅读、个人留存与非商业性分享的权利。'
		},
		law: {
			number: '06',
			label: '准据法律',
			title: '美国特拉华州。',
			p1: '本条款受特拉华州法律管辖，不考虑冲突法规则。',
			p2: '我们可能更新本条款；页首的「更新于」日期反映最近一次修订。如有疑问：<a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>。'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: '此路不通。',
		serverErrorTitle: '信号中断。',
		notFoundLede: '你找的页面可能已经移动、改名，或从未存在过。',
		serverErrorLede: '我们这边出了问题。请稍后再试。',
		returnHome: '返回首页',
		statusLabel: '状态 · {status}',
		notFoundLabel: '未找到',
		errorLabel: '错误',
		cueHome: '返回 · 首页'
	}
};

const en = {
	common: {
		brand: 'memenow',
		home: 'Home',
		products: 'Products',
		company: 'Company',
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
		locale: {
			switchToEnglish: 'Switch to English',
			switchToChinese: '切换至中文'
		}
	},
	home: {
		meta: {
			title: 'memenow — Make AI your partner.',
			description:
				'memenow is a studio building AI you can audit and return to. Our first public release is Yinyang Agent: a sourced BaZi reading you can revisit, question, and follow across time.',
			ogTitle: 'memenow — Make AI your partner.',
			ogDescription:
				'A studio incorporated in Lewes, Delaware, building AI that shows its reasoning and stays useful when you return. First release: Yinyang Agent.'
		},
		hero: {
			eyebrowLeft: 'Studio · Lewes, Delaware',
			eyebrowRight: 'Est. 2024',
			title: 'Make AI your partner.',
			lede: 'A real partner shows how it reached its conclusions and keeps the thread when you return months later with a new question. Our first release is Yinyang Agent: a long-form BaZi reading written in plain prose, saved to revisit and converse with over time.',
			cue: 'Scroll · 01 The studio'
		},
		studio: {
			number: '01',
			label: 'The studio',
			title: "We build the AI we'd want to keep.",
			lede: 'Scope small enough to hold in mind, methods open enough to verify, timelines patient enough to get right.',
			p1: 'We founded memenow in 2024 because the loudest AI companies kept scaling ambition while shipping away patience. We wanted the opposite: a quiet studio that trades sweeping claims for transparent reasoning and work that holds up over time.',
			p2: 'Our first public release, Yinyang Agent, is built to that standard. Every product that follows will have to earn its place the same way: still useful a month—and a year—after the first click.'
		},
		pullquote: {
			quote: 'A true partner puts its reasoning in the open, and is still there when you return.',
			attribution: 'memenow studio principle'
		},
		yinyang: {
			number: '02',
			label: 'Yinyang Agent',
			title: 'A BaZi reading you can return to.',
			lede: 'Begin with your birth date, time, and birth timezone; receive a long-form Four Pillars reading. Written in plain prose, grounded in classical reasoning, and saved to your account for good.',
			p1: 'Yinyang Agent charts your Four Pillars against astronomical solar terms, then synthesizes ZiPing elemental balance with MangPai structural flow. Day Master, chart pattern, past-year validations, and guidance across love, career, health, and family are written as clear narrative rather than a wall of symbols.',
			p2: 'Your natal report anchors the long arc, while Timing Cycles maps favorable and caution windows across days, weeks, months, and years. Whenever a new decision arises, you can return to Companion to ask follow-up questions grounded in your saved chart.',
			cta: 'Open Yinyang Agent'
		},
		contact: {
			number: '03',
			label: 'Contact',
			title: 'Get in touch.',
			lede: 'For press, partnerships, or thoughtful questions, write to ',
			ledeEnd: '.',
			p1: 'We read every message and reply in person. We may not answer right away, but you will always hear back from a human, never an auto-responder.',
			cta: 'Email hello@memenow.xyz'
		}
	},
	products: {
		meta: {
			title: 'Products — memenow',
			description:
				'Products from memenow. Our first public release is Yinyang Agent: a BaZi reading grounded in dual-school reasoning, Timing Cycles, and chart-aware dialogue.',
			ogTitle: 'Products — memenow',
			ogDescription:
				'Our first public release: Yinyang Agent, an auditable BaZi reading built to revisit across changing cycles.'
		},
		hero: {
			eyebrowLeft: 'Products',
			eyebrowRight: 'Updated 2026-10',
			title: "What we've shipped.",
			lede: 'We ship slowly and build to keep. Our first public release is Yinyang Agent—setting the bar that every subsequent work from the studio will share.',
			cue: 'Scroll · 01 Yinyang Agent'
		},
		yinyang: {
			number: '01',
			label: 'Yinyang Agent',
			title: 'See the structure. Find your rhythm.',
			lede: 'Explore your birth moment through the Four Pillars of BaZi. Start with free daily prompts and a base chart reading, unlock full dual-school synthesis, and return anytime through Timing Cycles and Companion dialogue.',
			cta: 'Open Yinyang Agent',
			detailLink: 'Read the product page'
		}
	},
	productYinyang: {
		meta: {
			title: 'Yinyang Agent — memenow',
			description:
				'Yinyang Agent: Four Pillars BaZi readings with dual-school synthesis, Timing Cycles, and Companion dialogue.',
			ogTitle: 'Yinyang Agent — memenow',
			ogDescription:
				'Long-form BaZi readings with full reasoning chains, multi-scale Timing Cycles, and chart-aware dialogue.'
		},
		hero: {
			eyebrowLeft: 'Product · Yinyang Agent',
			eyebrowRight: 'Live',
			title: 'Understand the terrain. Make room for your choices.',
			lede: 'BaZi is a cultural framework for reflection, not a fixed verdict on the future. Yinyang Agent brings together deterministic charting, dual-school synthesis, Timing Cycles, and Companion dialogue so you can read and reflect at your own pace.',
			cue: 'Scroll · 01 Reading & cycles'
		},
		reading: {
			number: '01',
			label: 'Reading & cycles',
			title: 'Built to live beyond the first reading.',
			lede: 'Start with a free daily prompt or two free base readings each calendar month. Your Four Pillars chart and narrative overview sit side by side—clear enough to grasp at a glance, ready to go deeper when the question calls for it.',
			p1: 'Unlocking the full report opens the complete reasoning chain with confidence scores, concrete past-year validations, ten-year DaYun cycles, and dedicated chapters for love, career, health, and family. A built-in BaZi Library lets you verify every term and school of thought, and you can generate a shareable Portrait Card of your chart.',
			p2: 'Your natal reading stays saved in your account as a stable reference. As time moves, Timing Cycles maps your day, week, month, and year windows alongside your chart, while Companion dialogue and thematic Channels let you return with new questions and decisions whenever you need perspective.'
		},
		pullquote: {
			quote:
				'A reading worth keeping deserves a second look—so every report is reviewed against your chart before it reaches you.',
			attribution: 'Yinyang Agent review discipline'
		},
		discipline: {
			number: '02',
			label: 'Synthesis & review',
			title: 'Why a reading takes a few minutes.',
			lede: 'Rushed output turns BaZi into generic fortune-telling. Writing a document you can trust and revisit requires both structured synthesis and verification.',
			p1: 'When you submit your birth details, Yinyang Agent casts your deterministic chart and runs two classical reasoning tracks in parallel: ZiPing (weighing elemental balance and climate) and MangPai (tracing structural momentum). After synthesizing the draft, a dedicated whole-document review checks every claim and year against the underlying chart data, repairing unsupported statements before publication. Those extra minutes are deliberate.',
			cta: 'Visit yinyang.memenow.xyz'
		}
	},
	company: {
		meta: {
			title: 'Company — memenow',
			description:
				'memenow is a studio incorporated in Lewes, Delaware, founded in 2024, building AI you can audit and return to.',
			ogTitle: 'Company — memenow',
			ogDescription:
				'A studio incorporated in Lewes, Delaware. Founded 2024. AI you can audit and return to.'
		},
		hero: {
			eyebrowLeft: 'Company · Lewes, Delaware',
			eyebrowRight: 'Est. 2024',
			title: 'A small studio.',
			lede: 'Founded 2024 in Lewes, Delaware. We build AI you can audit and return to, and we ship slowly because the work is meant to last.',
			cue: 'Scroll · 01 The studio'
		},
		studio: {
			number: '01',
			label: 'The studio',
			title: 'Where we are.',
			lede: 'Founded 2024 in Lewes, Delaware. A small distributed team across the United States and Greater China.',
			p1: 'Lewes is where the paperwork lives. Our team works across time zones in the United States and Greater China, brought together by a shared preference for quiet craft over loud announcements.',
			stats: {
				foundedYear: '2024',
				foundedLabel: 'Founded',
				foundedDesc: 'Incorporated in Lewes, Delaware.',
				productCount: '1',
				productLabel: 'Flagship product',
				productDesc: 'Yinyang Agent: an auditable BaZi reading you can return to.',
				teamRegion: 'US · CN',
				teamLabel: 'Distributed',
				teamDesc: 'A small team across the United States and Greater China.'
			}
		},
		work: {
			number: '02',
			label: 'The work',
			title: 'How we work.',
			lede: 'Choose a question worth asking, then make it quietly answerable—small in scope, auditable in method, and built with patience.',
			p1: 'We focus on problems where AI can be a genuine long-term partner—where the output is something you keep, revisit, and question again as life changes. Yinyang Agent is our first answer to that test. Every product has to earn its place by remaining useful a month after the first click, not just the first minute.',
			p2: "When we don't know something, we say so. When a model stops working, we stop it. When a timeline needs to be longer, we extend it. None of this is heroic — it's just the discipline that makes the work worth trusting.",
			timeline: [
				{
					year: '2024',
					title: 'Studio founded',
					body: 'memenow incorporated in Lewes, Delaware. First principles written down before the first line of code.'
				},
				{
					year: '2024–2026',
					title: 'Yinyang Agent',
					body: 'First product shipped and expanded: dual-school BaZi synthesis, whole-document verification, multi-scale Timing Cycles, and chart-aware Companion dialogue.'
				}
			]
		},
		contact: {
			number: '03',
			label: 'Contact',
			title: 'Get in touch.',
			lede: 'For press, partnerships, or thoughtful questions, write to ',
			ledeEnd: '.',
			p1: 'We read every message and answer it ourselves — no auto-responders, no form letters.',
			cta: 'Email hello@memenow.xyz'
		}
	},
	privacy: {
		meta: {
			title: 'Privacy — memenow',
			description: 'memenow.xyz privacy notice.'
		},
		hero: {
			eyebrowLeft: 'Legal · Privacy',
			eyebrowRight: 'Updated 2026-10-15',
			title: "What we collect. What we don't.",
			lede: 'memenow.xyz collects almost nothing on this site. Here is exactly what — and what stays in your browser.',
			cue: 'Scroll · Read the notice'
		},
		scope: {
			number: '01',
			label: 'Scope',
			title: 'What this notice covers.',
			body: 'Public pages on <strong>memenow.xyz</strong>. Products may have their own notices on their own surfaces.'
		},
		data: {
			number: '02',
			label: 'Data',
			title: 'What we collect.',
			p1: 'No third-party analytics, no advertising. Your theme and motion preferences (the browser-local keys <code class="prose-code">memenow.theme</code> and <code class="prose-code">memenow.motion</code>) never leave your browser. Your language preference (<code class="prose-code">memenow.locale</code>) lives in a cookie and is sent with each request — used only to render pages in the language you chose.',
			p2: "Cloudflare records standard request metadata (IP, user agent, timestamp, path) for operations and security. We don't link it to any identity."
		},
		email: {
			number: '03',
			label: 'Email',
			title: 'Email and contact.',
			body: 'Write to <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a> — the conversation is used only to reply, and we never share it with third parties.'
		}
	},
	terms: {
		meta: {
			title: 'Terms — memenow',
			description: 'memenow.xyz terms of use.'
		},
		hero: {
			eyebrowLeft: 'Legal · Terms',
			eyebrowRight: 'Updated 2026-10-15',
			title: 'Plain terms, short.',
			lede: 'The conditions under which we publish memenow.xyz.',
			cue: 'Scroll · Read the terms'
		},
		scope: {
			number: '01',
			label: 'Scope',
			title: 'What these terms cover.',
			body: 'Public pages on <strong>memenow.xyz</strong>. By accessing or using the site, you acknowledge and agree to these terms. Specific products (such as Yinyang Agent) may have their own terms on their own surfaces.'
		},
		disclaimer: {
			number: '02',
			label: 'Cultural & AI disclaimer',
			title: 'Cultural inquiry and AI-generated content.',
			p1: 'The Bazi, Four Pillars, and Five Elements content offered by memenow products (including Yinyang Agent) draws on classical Chinese philosophy and cultural heritage. It is offered for cultural reflection and self-exploration only, and <strong>does not constitute, and cannot replace, professional medical, psychological, legal, or financial advice</strong>.',
			p2: 'This content is generated by AI models and is narrative interpretation by nature; we make no promise, express or implied, of absolute accuracy or of any predictive outcome. Any decision you make based on it is your own judgment and your own responsibility.'
		},
		warranty: {
			number: '03',
			label: 'No warranty',
			title: 'Provided as is.',
			body: 'The site is provided on an "as is" basis. We work to keep it accurate and online but make no warranty as to fitness, completeness, or currency.'
		},
		offer: {
			number: '04',
			label: 'No offer',
			title: 'Nothing here is a financial offer.',
			body: 'Nothing on this site is an offer to sell, a solicitation to buy, or a recommendation regarding any security, fund interest, or financial instrument.'
		},
		ip: {
			number: '05',
			label: 'Intellectual property',
			title: 'Marks, copyright, and your personal readings.',
			p1: '"memenow" and the memenow mark are trademarks of memenow; other marks belong to their respective owners. Site text and design © memenow.',
			p2: 'Personal readings you generate in products such as Yinyang Agent are yours to read permanently, keep personally, and share non-commercially.'
		},
		law: {
			number: '06',
			label: 'Governing law',
			title: 'Delaware, United States.',
			p1: 'These terms are governed by Delaware law, without regard to conflict-of-laws principles.',
			p2: 'We may update these terms; the "Updated" date in the header reflects the most recent revision. Questions: <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>.'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: 'This path leads nowhere.',
		serverErrorTitle: 'A break in the signal.',
		notFoundLede: 'The page you were looking for has moved, been renamed, or never existed.',
		serverErrorLede: 'Something went wrong on our end. Try again in a moment.',
		returnHome: 'Return home',
		statusLabel: 'Status · {status}',
		notFoundLabel: 'Not found',
		errorLabel: 'Error',
		cueHome: 'Return · Home'
	}
};

export type MessageSchema = typeof zh;

export const messages: Record<Locale, MessageSchema> = { zh, en };
