/**
 * Simplified Chinese dictionary — the schema owner. Every other locale is
 * annotated as `MessageSchema`, so a missing or extra key in any dictionary
 * fails typechecking. No `as const`: literal widening to `string` is what makes
 * the locales mutually assignable.
 *
 * Style contract: crafted for consumers seeking personal insight, life rhythm,
 * and calm clarity at everyday crossroads. Grounded in shipped capabilities,
 * free of translationese, engineering jargon, and AI hype. The brand is never
 * translated; "Yinyang Agent" stays as-is. Legal strings contain intentional
 * inline markup (`strong`, `code`, `a`) consumed via `TrustedHtml` — trusted,
 * static, authored here, never user input.
 */

export const zh = {
	common: {
		brand: 'memenow',
		home: '首页',
		products: '产品',
		company: '关于',
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
		language: {
			menuLabel: '切换语言',
			footerTitle: '语言'
		}
	},
	home: {
		meta: {
			title: 'memenow — 见天地节律，明当下心意',
			description:
				'memenow 是一家专注个人洞察与生活节律的 AI 工作室。首款作品 Yinyang Agent 将传统四柱八字化作温润平实的现代长文，陪你读懂自身底色，把握日周月年的时机节奏。',
			ogTitle: 'memenow — 见天地节律，明当下心意',
			ogDescription:
				'专注个人洞察与生活节律的 AI 工作室。首款作品 Yinyang Agent：一份随时可重读、可追问的四柱八字与时机解读。'
		},
		hero: {
			eyebrowLeft: 'MEMENOW · 个人洞察与生活节律',
			eyebrowRight: '旗舰作品 · YINYANG AGENT',
			title: '见天地节律，明当下心意',
			lede: '站在人生的岔路口，你需要的不是一句模棱两可的宿命断言，而是一面澄明、有据的镜子。我们的首款作品 Yinyang Agent 将传统四柱八字化作温润平实的现代长文，陪你读懂自身底色，在时间的起伏中从容落子。',
			primaryCta: '免费体验 Yinyang Agent',
			secondaryCta: '了解产品详情',
			cue: '向下阅读 · 01 旗舰作品'
		},
		yinyang: {
			number: '01',
			label: 'Yinyang Agent',
			title: '一份值得在人生不同阶段反复展卷的自我解读',
			lede: '从出生日期、时间与出生地时区开始，无需事先懂得任何命理术语。像一位通透而耐心的长者，把你的命盘脉络娓娓道来，并长久留存在你的私人空间里。',
			p1: 'Yinyang Agent 依真太阳节气排定四柱，融汇子平的五行调候与盲派的全局势能，将你的日主脾性、过往关键年份的印证，以及事业、情感、健康、家庭的长期线索写成一篇连贯透彻的长文，告别满屏晦涩符号与吓唬人的断语。',
			p2: '本命解读为你锚定长远的生命底色；而随着日子一天天向前，时机周期会结合你的命盘推演日、周、月、年的顺逆窗口，知己对话则让你在每一次犹豫不决时，都能带着具体处境回来继续深谈。',
			pillars: [
				{
					num: '01 · 本命长卷',
					title: '读懂与生俱来的底色',
					body: '不必翻阅古籍或查术语表。以平实细腻的现代叙事，讲透你的性格张力、天赋潜能与过往岁月的真实印证。'
				},
				{
					num: '02 · 四大生活切面',
					title: '照见情感、事业、健康与家庭',
					body: '不止于抽象的五行旺衰，而是落脚到你真正在意的日常课题——如何经营关系、何时蓄力突破、怎样安顿身心。'
				},
				{
					num: '03 · 时机周期',
					title: '把握日、周、月、年的进退',
					body: '顺风时不盲目冒进，逆水时不自我内耗。结合你的命盘动态标注眼前的发力窗口与留白时刻。'
				},
				{
					num: '04 · 知己对话',
					title: '每一次迷茫，都有人接得住话',
					body: '无需每次从头解释自己。无论是职场抉择还是深夜心事，随时带着新问题回来，围绕你的命盘继续推演。'
				}
			],
			cta: '免费查看我的命盘',
			detailLink: '深入了解 Yinyang Agent'
		},
		pullquote: {
			quote: '看清潮汐的方向，不是为了听凭风浪，而是为了在掌舵时多一份笃定。',
			attribution: 'memenow 产品理念'
		},
		studio: {
			number: '02',
			label: '工作室理念',
			title: '做慢一点，只为打磨真正经得起时间检验的陪伴',
			lede: '不造喧嚣的噱头，不用模棱两可的套话糊弄人，把每一件关乎内心的事做扎实。',
			p1: '我们在 2024 年创立 memenow。当外界都在比拼谁的模型更吵、生成得更快时，我们更在意另一件事：当一个人带着真实的生活困惑走近 AI，他能不能得到一份既有推导依据、又有温度的回答？',
			p2: '因此，我们选择做一家安静的工作室。首款作品 Yinyang Agent 为我们立下了标尺——衡量一件作品好不好，不是看打开的第一分钟有多炫目，而是看一个月后、一年后，当你遇到新的十字路口时，还会不会愿意打开它重读。'
		},
		contact: {
			number: '03',
			label: '联系',
			title: '与我们交谈',
			lede: '无论是产品体验反馈、合作交流，还是认真的探讨，欢迎致信 ',
			ledeEnd: '。',
			p1: '每一封来信都由团队成员亲自阅读与回复。我们或许无法秒回，但写给你的每一句话都来自屏幕另一端的真人，绝无敷衍的自动模板。',
			cta: '致信 hello@memenow.xyz'
		}
	},
	products: {
		meta: {
			title: '产品 — memenow',
			description:
				'memenow 旗下作品。首款产品 Yinyang Agent：从免费每日签与基础排盘，到子平盲派合参长卷、时机日历与知己对话。',
			ogTitle: '产品 — memenow',
			ogDescription:
				'为自我探索与日常抉择而作。首款产品 Yinyang Agent：读懂生辰脉络，把握当下节奏。'
		},
		hero: {
			eyebrowLeft: 'MEMENOW · 产品系列',
			eyebrowRight: '持续演进',
			title: '为自我探索与日常抉择而作',
			lede: '我们不堆砌浅尝辄止的工具，只打磨能长久陪伴你的作品。首款产品 Yinyang Agent 已全面开放——从零门槛的免费排盘与每日签开始，陪你走入深度的自我认知。',
			cue: '向下阅读 · 01 Yinyang Agent'
		},
		yinyang: {
			number: '01',
			label: 'Yinyang Agent',
			title: '读懂生辰脉络，找到属于你的进退节奏',
			lede: '以中国传统四柱八字为镜，照见性格底色与时间周期。无论你是第一次好奇排盘，还是正在为眼前的选择寻找参照，都能按自己的步调渐次深入。',
			steps: [
				{
					num: '第一步 · 免费初识',
					title: '基础排盘与每日签',
					body: '输入出生日期、时间与出生地时区，即刻生成四柱命盘与核心五行解读，每天还可免费抽取结合时令的每日时机灵感。'
				},
				{
					num: '第二步 · 深度识己',
					title: '子平盲派合参完整长卷',
					body: '解锁万字级深度报告：涵盖过往年份印证、十年大运与流年走势，以及感情、事业、健康、家庭四章贴合现实的行动参考与专属命盘画像卡。'
				},
				{
					num: '第三步 · 日常长伴',
					title: '时机日历与知己对话',
					body: '在日常中随时查看日、周、月、年的顺势与谨慎窗口；遇到具体纠结时，直接在对话中围绕你的命盘继续提问与梳理。'
				},
				{
					num: '第四步 · 随时求证',
					title: '内置八字资料库与透明推演',
					body: '每一处结论皆标注命理依据，配套通俗易懂的八字术语与流派资料库，让你不仅知其然，更看清背后的推演逻辑。'
				}
			],
			cta: '免费体验 Yinyang Agent',
			detailLink: '阅读完整产品介绍'
		}
	},
	productYinyang: {
		meta: {
			title: 'Yinyang Agent — 四柱八字与生活节律知己 · memenow',
			description:
				'Yinyang Agent：将古老的四柱八字写成照见当下的清澈长文。融合真太阳时排盘、子平盲派合参、日周月年时机周期与懂命盘的知己对话。',
			ogTitle: 'Yinyang Agent — 读懂生辰脉络，走好当下每一步',
			ogDescription:
				'免费开启四柱八字基础排盘与每日签，深入子平盲派合参长卷、时机日历与随时相伴的知己对话。'
		},
		hero: {
			eyebrowLeft: '产品 · YINYANG AGENT',
			eyebrowRight: '支持免费体验',
			title: '把古老的四柱八字，写成照见当下的清澈长文',
			lede: '八字不是用来替你下判决书的宿命论，而是一套历经千年的自我观察坐标系。Yinyang Agent 将严谨的天文节气排盘、子平盲派合参、时机周期与知己对话融为一体，陪你把复杂的当下理出头绪。',
			primaryCta: '免费查看我的命盘',
			cue: '向下阅读 · 01 体验与陪伴'
		},
		reading: {
			number: '01',
			label: '体验与陪伴',
			title: '从第一次惊艳的印证，到日常随时可依的参照',
			lede: '你可以从免费每日签或每月两次免费基础排盘轻松开始。命盘结构与现代长文并排呈现：一眼看清日主特质与五行平衡，再按自己的节奏读入深处。',
			p1: '当你解锁完整报告，系统会依出生地经纬时区与真太阳节气精准定盘，将过往具体年份的经历印证、十年大运与流年起伏，以及感情、事业、健康、家庭四章现世建议娓娓展开。你还可以随时翻阅内置的八字资料库，或生成一张值得珍藏与分享的专属命盘画像卡。',
			p2: '你的每一份解读都会长久保存在账户中，成为稳定的个人参照系。随着生活流转，时机周期会结合你的命盘标出日、周、月、年的顺逆窗口；而在知己对话及事业、情感、健康专属频道里，你随时可以带着眼前的新决定回来聊聊。',
			highlights: [
				{
					num: '01 · 零门槛上手',
					title: '盘文对照，不掉书袋',
					body: '把晦涩的天干地支、十神生克转化为贴近现代生活的清晰叙事，第一次接触八字也能轻松读懂。'
				},
				{
					num: '02 · 过往印证',
					title: '先验过往，再看未来',
					body: '通过梳理你过去关键年份的转折与体感来校准命盘脉络，让未来的大运与流年参考建立在真实可感的基础上。'
				},
				{
					num: '03 · 动态节律',
					title: '日、周、月、年时机日历',
					body: '将宏大的命盘落到具体的一天、一周与一月，帮你识别何时适合推进重要决定，何时宜收敛蓄力。'
				},
				{
					num: '04 · 持续深谈',
					title: '懂你上下文的知己对话',
					body: '对话助手完整通读你已保存的命盘报告，围绕你的真实性格与当前大运，陪你拆解每一个具体纠结。'
				}
			]
		},
		pullquote: {
			quote: '好的解读从不替你做决定，它只是替你拨开迷雾，让你听见自己内心的声音。',
			attribution: 'Yinyang Agent 设计准则'
		},
		discipline: {
			number: '02',
			label: '匠心与方法',
			title: '为什么我们愿意花几分钟，为你细细打磨一份报告',
			lede: '一秒钟弹出的算命套话，只适合一划而过。要把八字写成一份经得起岁月对照的人生长卷，推演与复核都省不得半点工夫。',
			p1: '当你提交出生信息后，Yinyang Agent 首先根据出生地时区与天文节气完成定盘，随后同时从子平（权衡五行生克与寒暖调候）与盲派（推演全局势能与做功效率）两个古典视角切入推演。在成文送达你之前，系统还会将全文结论与排盘事实、年份边界逐一交叉印证，剔除空洞夸张的套话。多等待的这几分钟，换来的是字字有据的安心。',
			comparison: {
				caption: '为什么 Yinyang Agent 与快餐式 AI 算命截然不同',
				genericLabel: '快餐式 AI 算命 / 通用聊天框',
				yinyangLabel: 'Yinyang Agent',
				rows: [
					{
						feature: '排盘基准',
						generic: '常忽略出生地时区与节气交接，甚至连四柱干支都排错',
						yinyang: '严格按出生地 IANA 时区与天文节气定盘，排盘事实确定不移'
					},
					{
						feature: '推演深度',
						generic: '单次提示词拼凑模棱两可的巴纳姆套话，千人一面',
						yinyang: '子平五行旺衰与盲派全局做功双视角合参，兼顾格局与细节'
					},
					{
						feature: '可信度检验',
						generic: '张口就来，前后矛盾，换个问法结论就变',
						yinyang: '结合过往年份印证，成文前经全文事实与年份边界交叉复核'
					},
					{
						feature: '后续陪伴',
						generic: '一次性网页快照，聊完即散，无法承接后续生活变化',
						yinyang: '报告永久留存，联动日周月年时机周期与懂命盘的知己对话'
					}
				]
			},
			cta: '前往 yinyang.memenow.xyz 开启解读'
		}
	},
	company: {
		meta: {
			title: '关于我们 — memenow',
			description:
				'memenow 创立于 2024 年，是一支横跨美国与大中华区的独立 AI 工作室，致力于将东方人文哲思与严谨透明的 AI 结合，打造长久陪伴用户的作品。',
			ogTitle: '关于我们 — memenow',
			ogDescription:
				'创立于 2024 年的独立 AI 工作室。连接东方人文哲思与现代工程匠心，打造值得长久重读的作品。'
		},
		hero: {
			eyebrowLeft: '关于 · MEMENOW 工作室',
			eyebrowRight: '始于 2024',
			title: '一家安静打磨作品的独立工作室',
			lede: '2024 年创立。我们横跨太平洋两岸，把东方传统哲思与可溯源的现代 AI 融为一体，慢工出细活，只做经得起时间检验的个人陪伴作品。',
			cue: '向下阅读 · 01 我们的团队'
		},
		studio: {
			number: '01',
			label: '我们的团队',
			title: '跨越时区，因同一份审美与克制而聚',
			lede: '公司创立于美国特拉华州，团队成员分布在美国与大中华区的不同城市。',
			p1: '我们之中既有深耕人工智能与分布式系统的工程师，也有长期研习东方传统文化的创作者。大家都不喜欢喧哗浮夸的营销，更愿意沉下心来，把复杂的技术化作温润、体贴、让人安心的日常体验——正是这份默契把我们聚在了一起。',
			stats: {
				foundedYear: '2024',
				foundedLabel: '工作室创立',
				foundedDesc: '确立“真诚有据、长久陪伴”的产品理念。',
				productCount: '1',
				productLabel: '旗舰作品',
				productDesc: 'Yinyang Agent：四柱八字长卷、时机周期与知己对话。',
				teamRegion: 'US · CN',
				teamLabel: '跨文化团队',
				teamDesc: '连接现代 AI 工程严谨度与东方人文洞察。'
			}
		},
		work: {
			number: '02',
			label: '行事准则',
			title: '我们如何打磨产品',
			lede: '选一个真正关乎人心的问题，用克制、透明、不赶工期的方式把它答好。',
			p1: '我们只做 AI 真能成为长期知己的事：它给出的内容值得你珍藏、重读，并在生活翻开新篇章时带着问题回来对照。Yinyang Agent 就是我们交出的第一份答卷。我们从不用刺眼的弹窗或制造焦虑的话术逼人付费，因为真正好的体验自然会让人愿意留下来。',
			p2: '有把握的推演，我们把依据摊开讲清；超出认知边界的，我们坦诚留白。模型表现不够稳，我们就反复打磨直到过关。这些原则并不高深，只是为了让屏幕前的你感到踏实与受尊重。',
			timeline: [
				{
					year: '2024',
					title: 'memenow 创立',
					body: '在写下第一行代码之前，先定下“不贩卖焦虑、不做一次性快餐玩具”的工作室准则。'
				},
				{
					year: '2024–2026',
					title: 'Yinyang Agent 上线与演进',
					body: '首款旗舰作品正式发布并持续迭代：完成真太阳时排盘、子平与盲派双视角合参、全文事实复核、日周月年时机周期与知己对话体验。'
				}
			]
		},
		contact: {
			number: '03',
			label: '联系',
			title: '期待听见你的声音',
			lede: '媒体采访、商务合作或产品心得交流，欢迎致信 ',
			ledeEnd: '。',
			p1: '每一封邮件都由我们亲自阅读并手写回复，没有冰冷的工单号，也没有千篇一律的自动应答。',
			cta: '致信 hello@memenow.xyz'
		}
	},
	privacy: {
		meta: {
			title: '隐私政策 — memenow',
			description: 'memenow.xyz 隐私保护声明。'
		},
		hero: {
			eyebrowLeft: '法律 · 隐私政策',
			eyebrowRight: '更新于 2026-10-15',
			title: '你的隐私，清晰透明',
			lede: 'memenow.xyz 官网几乎不收集任何个人信息。以下用最直白的话说明哪些偏好只留在你的设备里，哪些基础日志仅用于安全运维。',
			cue: '向下阅读 · 隐私声明'
		},
		scope: {
			number: '01',
			label: '适用范围',
			title: '本声明涵盖的范围',
			body: '本声明适用于 <strong>memenow.xyz</strong> 官方网站的公开页面。旗下具体产品（如 Yinyang Agent）在其各自应用界面内设有专门的隐私政策与数据管理选项。'
		},
		data: {
			number: '02',
			label: '数据说明',
			title: '我们收集什么，不收集什么',
			p1: '本站不接入任何第三方追踪分析脚本，也不投放任何广告。你的明暗主题与动效偏好（浏览器本地存储键 <code class="prose-code">memenow.theme</code> 与 <code class="prose-code">memenow.motion</code>）完全保留在你的本地浏览器中，从不上传；语言偏好（<code class="prose-code">memenow.locale</code>）以第一方 Cookie 保存，仅用于按你选择的语言呈现页面。',
			p2: '托管基础设施 Cloudflare 会按行业惯例记录基础请求元数据（IP 地址、User-Agent、时间戳与访问路径）以保障站点安全与稳定运行。我们从不将这些日志与任何个人身份相关联。'
		},
		email: {
			number: '03',
			label: '邮件沟通',
			title: '来信与联系方式',
			body: '当你致信 <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a> 时，你的邮件内容与地址仅用于我们向你回信沟通，绝不会出售或分享给任何第三方。'
		}
	},
	terms: {
		meta: {
			title: '使用条款 — memenow',
			description: 'memenow.xyz 使用条款。'
		},
		hero: {
			eyebrowLeft: '法律 · 使用条款',
			eyebrowRight: '更新于 2026-10-15',
			title: '简明平实的使用条款',
			lede: '欢迎访问 memenow.xyz。以下条款清晰说明了本站的服务边界、文化探索属性与你的合法权益。',
			cue: '向下阅读 · 使用条款'
		},
		scope: {
			number: '01',
			label: '适用范围',
			title: '本条款涵盖的范围',
			body: '本条款适用于 <strong>memenow.xyz</strong> 的所有公开页面。访问或使用本站即表示你已阅读并同意本条款。具体产品（如 Yinyang Agent）在其各自服务页面内提供独立的产品服务条款。'
		},
		disclaimer: {
			number: '02',
			label: '文化与 AI 免责',
			title: '文化探索属性与 AI 生成说明',
			p1: 'memenow 旗下产品（包括 Yinyang Agent）所呈现的四柱八字与五行内容源自中国传统哲学与人文遗产，旨在为自我觉察与日常反思提供文化视角，<strong>不构成、亦不能替代专业的医疗、心理咨询、法律或财务投资建议</strong>。',
			p2: '相关解读由人工智能模型辅助生成，本质上属于叙事性阐释；我们不对任何未来的确定性结果作出明示或暗示的承诺。命盘只是起点，生活中的每一项具体决定始终由你独立判断并自主负责。'
		},
		warranty: {
			number: '03',
			label: '服务状态',
			title: '按原样提供服务',
			body: '本站内容按「原样」提供。我们持续致力于保持信息准确与站点稳定在线，但不对其特定用途适用性、绝对完整性或实时性作出额外担保。'
		},
		offer: {
			number: '04',
			label: '非金融要约',
			title: '不构成任何金融或投资要约',
			body: '本站的任何文字或内容均不构成出售任何证券、基金份额或金融工具的要约，亦不构成任何投资邀约或财务建议。'
		},
		ip: {
			number: '05',
			label: '知识产权',
			title: '品牌标识与你的个人解读权益',
			p1: '「memenow」名称、图形标志及站点视觉设计均属 memenow 所有；提及的其他商标归各自权利人所有。',
			p2: '你在 Yinyang Agent 等产品中生成的个人命盘解读，始终归你永久阅读、私人珍藏与非商业性分享。'
		},
		law: {
			number: '06',
			label: '准据法律',
			title: '适用法律与修订说明',
			p1: '本条款受美国特拉华州法律管辖并据其解释（不含冲突法规则）。',
			p2: '我们可能随业务发展适时更新本条款，页首的「更新于」日期始终反映最近一次修订时间。如有任何疑问，欢迎致信 <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>。'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: '这一页隐入雾中了',
		serverErrorTitle: '连接暂时起了点波澜',
		notFoundLede:
			'你寻找的页面可能已经移步他处、更改了名称，或从未在此停留。不妨回到首页重新出发。',
		serverErrorLede: '服务暂时有些繁忙，请稍候片刻再试一次。',
		returnHome: '返回首页',
		statusLabel: '状态 · {status}',
		notFoundLabel: '页面未找到',
		errorLabel: '服务异常',
		cueHome: '返回 · 首页'
	}
};

export type MessageSchema = typeof zh;
