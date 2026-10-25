/** Traditional Chinese (Taiwan) dictionary. Structure is enforced by `MessageSchema`. */

import type { MessageSchema } from './zh';

export const zhTW: MessageSchema = {
	common: {
		brand: 'memenow',
		home: '首頁',
		products: '產品',
		company: '關於',
		legal: '條款',
		privacy: '隱私權政策',
		terms: '使用條款',
		skipToContent: '跳至主要內容',
		navAriaLabel: '主導覽',
		brandHomeAriaLabel: 'memenow 首頁',
		rightsReserved: '© {year} memenow · 保留所有權利',
		theme: {
			switchToDark: '切換至深色主題',
			switchToLight: '切換至淺色主題'
		},
		motion: {
			reduce: '減少動態效果',
			allow: '允許動態效果'
		},
		language: {
			menuLabel: '切換語言',
			footerTitle: '語言'
		}
	},
	home: {
		meta: {
			title: 'memenow — 見天地節律，明當下心意',
			description:
				'memenow 是一間專注個人洞察與生活節律的 AI 工作室。首款作品 Yinyang Agent 將傳統四柱八字化為溫潤平實的現代長文，陪你讀懂自身底色，掌握日、週、月、年的時機節奏。',
			ogTitle: 'memenow — 見天地節律，明當下心意',
			ogDescription:
				'專注個人洞察與生活節律的 AI 工作室。首款作品 Yinyang Agent：一份隨時可重讀、可追問的四柱八字與時機解讀。'
		},
		hero: {
			eyebrowLeft: 'MEMENOW · 個人洞察與生活節律',
			eyebrowRight: '旗艦作品 · YINYANG AGENT',
			title: '見天地節律，明當下心意',
			lede: '站在人生的岔路口，你需要的不是一句模稜兩可的宿命斷言，而是一面澄明、有據的鏡子。我們的首款作品 Yinyang Agent 將傳統四柱八字化為溫潤平實的現代長文，陪你讀懂自身底色，在時間的起伏中從容落子。',
			primaryCta: '免費體驗 Yinyang Agent',
			secondaryCta: '了解產品詳情',
			cue: '向下閱讀 · 01 旗艦作品'
		},
		yinyang: {
			number: '01',
			label: 'Yinyang Agent',
			title: '一份值得在人生不同階段反覆展讀的自我解讀',
			lede: '從出生日期、時間與出生地時區開始，不需要事先懂任何命理術語。像一位通透而耐心的長者，把你的命盤脈絡娓娓道來，並長久保存在你的私人空間裡。',
			p1: 'Yinyang Agent 依真太陽節氣排定四柱，融匯子平的五行調候與盲派的全局勢能，將你的日主性情、過往關鍵年份的印證，以及事業、感情、健康、家庭的長期線索寫成一篇連貫透徹的長文，告別滿版艱澀符號與嚇唬人的斷語。',
			p2: '本命解讀為你錨定長遠的生命底色；而隨著日子一天天向前，時機週期會結合你的命盤推演日、週、月、年的順逆窗口，知己對話則讓你在每一次猶豫不決時，都能帶著具體處境回來繼續深談。',
			pillars: [
				{
					num: '01 · 本命長卷',
					title: '讀懂與生俱來的底色',
					body: '不必翻閱古籍或查術語表。以平實細膩的現代敘事，講透你的性格張力、天賦潛能與過往歲月的真實印證。'
				},
				{
					num: '02 · 四大生活面向',
					title: '照見感情、事業、健康與家庭',
					body: '不止於抽象的五行旺衰，而是落到你真正在意的日常課題——如何經營關係、何時蓄力突破、怎樣安頓身心。'
				},
				{
					num: '03 · 時機週期',
					title: '掌握日、週、月、年的進退',
					body: '順風時不盲目冒進，逆水時不自我內耗。結合你的命盤動態標示眼前的發力窗口與留白時刻。'
				},
				{
					num: '04 · 知己對話',
					title: '每一次迷惘，都有人接得住話',
					body: '不必每次從頭解釋自己。無論是職場抉擇還是深夜心事，隨時帶著新問題回來，圍繞你的命盤繼續推演。'
				}
			],
			cta: '免費查看我的命盤',
			detailLink: '深入了解 Yinyang Agent'
		},
		pullquote: {
			quote: '看清潮汐的方向，不是為了聽憑風浪，而是為了在掌舵時多一分篤定。',
			attribution: 'memenow 產品理念'
		},
		studio: {
			number: '02',
			label: '工作室理念',
			title: '做慢一點，只為打磨真正經得起時間考驗的陪伴',
			lede: '不製造喧囂的噱頭，不用模稜兩可的套話敷衍人，把每一件關乎內心的事做紮實。',
			p1: '我們在 2024 年創立 memenow。當外界都在比拚誰的模型更吵、生成得更快時，我們更在意另一件事：當一個人帶著真實的生活困惑走近 AI，他能不能得到一份既有推導依據、又有溫度的回答？',
			p2: '因此，我們選擇做一間安靜的工作室。首款作品 Yinyang Agent 為我們立下了標竿——衡量一件作品好不好，不是看打開的第一分鐘有多炫目，而是看一個月後、一年後，當你遇到新的十字路口時，還願不願意打開它重讀。'
		},
		contact: {
			number: '03',
			label: '聯絡',
			title: '與我們聊聊',
			lede: '無論是產品體驗回饋、合作交流，還是認真的探討，歡迎來信 ',
			ledeEnd: '。',
			p1: '每一封來信都由團隊成員親自閱讀與回覆。我們或許無法秒回，但寫給你的每一句話都來自螢幕另一端的真人，絕無敷衍的自動範本。',
			cta: '來信 hello@memenow.xyz'
		}
	},
	products: {
		meta: {
			title: '產品 — memenow',
			description:
				'memenow 旗下作品。首款產品 Yinyang Agent：從免費每日籤與基礎排盤，到子平盲派合參長卷、時機日曆與知己對話。',
			ogTitle: '產品 — memenow',
			ogDescription:
				'為自我探索與日常抉擇而作。首款產品 Yinyang Agent：讀懂生辰脈絡，掌握當下節奏。'
		},
		hero: {
			eyebrowLeft: 'MEMENOW · 產品系列',
			eyebrowRight: '持續演進',
			title: '為自我探索與日常抉擇而作',
			lede: '我們不堆砌淺嘗即止的工具，只打磨能長久陪伴你的作品。首款產品 Yinyang Agent 已全面開放——從零門檻的免費排盤與每日籤開始，陪你走入深度的自我認識。',
			cue: '向下閱讀 · 01 Yinyang Agent'
		},
		yinyang: {
			number: '01',
			label: 'Yinyang Agent',
			title: '讀懂生辰脈絡，找到屬於你的進退節奏',
			lede: '以中國傳統四柱八字為鏡，照見性格底色與時間週期。無論你是第一次好奇排盤，還是正在為眼前的選擇尋找參照，都能依自己的步調逐步深入。',
			steps: [
				{
					num: '第一步 · 免費初識',
					title: '基礎排盤與每日籤',
					body: '輸入出生日期、時間與出生地時區，立即產生四柱命盤與核心五行解讀，每天還可免費抽取結合時令的每日時機靈感。'
				},
				{
					num: '第二步 · 深度識己',
					title: '子平盲派合參完整長卷',
					body: '解鎖萬字級深度報告：涵蓋過往年份印證、十年大運與流年走勢，以及感情、事業、健康、家庭四章貼近現實的行動參考與專屬命盤畫像卡。'
				},
				{
					num: '第三步 · 日常長伴',
					title: '時機日曆與知己對話',
					body: '在日常中隨時查看日、週、月、年的順勢與謹慎窗口；遇到具體糾結時，直接在對話中圍繞你的命盤繼續提問與梳理。'
				},
				{
					num: '第四步 · 隨時求證',
					title: '內建八字資料庫與透明推演',
					body: '每一處結論皆標註命理依據，搭配淺白易懂的八字術語與流派資料庫，讓你不只知其然，更看清背後的推演邏輯。'
				}
			],
			cta: '免費體驗 Yinyang Agent',
			detailLink: '閱讀完整產品介紹'
		}
	},
	productYinyang: {
		meta: {
			title: 'Yinyang Agent — 四柱八字與生活節律知己 · memenow',
			description:
				'Yinyang Agent：將古老的四柱八字寫成照見當下的清澈長文。融合真太陽時排盤、子平盲派合參、日週月年時機週期與懂命盤的知己對話。',
			ogTitle: 'Yinyang Agent — 讀懂生辰脈絡，走好當下每一步',
			ogDescription:
				'免費開啟四柱八字基礎排盤與每日籤，深入子平盲派合參長卷、時機日曆與隨時相伴的知己對話。'
		},
		hero: {
			eyebrowLeft: '產品 · YINYANG AGENT',
			eyebrowRight: '可免費體驗',
			title: '把古老的四柱八字，寫成照見當下的清澈長文',
			lede: '八字不是用來替你下判決書的宿命論，而是一套歷經千年的自我觀察座標系。Yinyang Agent 將嚴謹的天文節氣排盤、子平盲派合參、時機週期與知己對話融為一體，陪你把複雜的當下理出頭緒。',
			primaryCta: '免費查看我的命盤',
			cue: '向下閱讀 · 01 體驗與陪伴'
		},
		reading: {
			number: '01',
			label: '體驗與陪伴',
			title: '從第一次驚豔的印證，到日常隨時可依的參照',
			lede: '你可以從免費每日籤或每月兩次免費基礎排盤輕鬆開始。命盤結構與現代長文並排呈現：一眼看清日主特質與五行平衡，再依自己的節奏讀入深處。',
			p1: '當你解鎖完整報告，系統會依出生地時區與真太陽節氣精準定盤，將過往具體年份的經歷印證、十年大運與流年起伏，以及感情、事業、健康、家庭四章現世建議娓娓展開。你還可以隨時翻閱內建的八字資料庫，或產生一張值得珍藏與分享的專屬命盤畫像卡。',
			p2: '你的每一份解讀都會長久保存在帳戶中，成為穩定的個人參照系。隨著生活流轉，時機週期會結合你的命盤標出日、週、月、年的順逆窗口；而在知己對話及事業、感情、健康專屬頻道裡，你隨時可以帶著眼前的新決定回來聊聊。',
			highlights: [
				{
					num: '01 · 零門檻上手',
					title: '盤文對照，不掉書袋',
					body: '把艱澀的天干地支、十神生剋轉化為貼近現代生活的清晰敘事，第一次接觸八字也能輕鬆讀懂。'
				},
				{
					num: '02 · 過往印證',
					title: '先驗過往，再看未來',
					body: '透過梳理你過去關鍵年份的轉折與體感來校準命盤脈絡，讓未來的大運與流年參考建立在真實可感的基礎上。'
				},
				{
					num: '03 · 動態節律',
					title: '日、週、月、年時機日曆',
					body: '將宏大的命盤落到具體的一天、一週與一月，幫你辨識何時適合推進重要決定，何時宜收斂蓄力。'
				},
				{
					num: '04 · 持續深談',
					title: '懂你脈絡的知己對話',
					body: '對話助理完整通讀你已保存的命盤報告，圍繞你的真實性格與當前大運，陪你拆解每一個具體糾結。'
				}
			]
		},
		pullquote: {
			quote: '好的解讀從不替你做決定，它只是替你撥開迷霧，讓你聽見自己內心的聲音。',
			attribution: 'Yinyang Agent 設計準則'
		},
		discipline: {
			number: '02',
			label: '匠心與方法',
			title: '為什麼我們願意花幾分鐘，為你細細打磨一份報告',
			lede: '一秒鐘跳出的算命套話，只適合滑過就忘。要把八字寫成一份經得起歲月對照的人生長卷，推演與複核都省不得半點工夫。',
			p1: '當你送出出生資訊後，Yinyang Agent 首先依出生地時區與天文節氣完成定盤，隨後同時從子平（權衡五行生剋與寒暖調候）與盲派（推演全局勢能與做功效率）兩個古典視角切入推演。在成文送達你之前，系統還會將全文結論與排盤事實、年份邊界逐一交叉印證，剔除空洞誇張的套話。多等待的這幾分鐘，換來的是字字有據的安心。',
			comparison: {
				caption: '為什麼 Yinyang Agent 與速食式 AI 算命截然不同',
				genericLabel: '速食式 AI 算命 / 通用聊天機器人',
				yinyangLabel: 'Yinyang Agent',
				rows: [
					{
						feature: '排盤基準',
						generic: '常忽略出生地時區與節氣交接，甚至連四柱干支都排錯',
						yinyang: '嚴格依出生地 IANA 時區與天文節氣定盤，排盤事實確定不移'
					},
					{
						feature: '推演深度',
						generic: '單次提示詞拼湊模稜兩可的巴納姆式套話，千人一面',
						yinyang: '子平五行旺衰與盲派全局做功雙視角合參，兼顧格局與細節'
					},
					{
						feature: '可信度檢驗',
						generic: '張口就來，前後矛盾，換個問法結論就變',
						yinyang: '結合過往年份印證，成文前經全文事實與年份邊界交叉複核'
					},
					{
						feature: '後續陪伴',
						generic: '一次性網頁快照，聊完即散，無法承接後續生活變化',
						yinyang: '報告永久保存，連動日週月年時機週期與懂命盤的知己對話'
					}
				]
			},
			cta: '前往 yinyang.memenow.xyz 開啟解讀'
		}
	},
	company: {
		meta: {
			title: '關於我們 — memenow',
			description:
				'memenow 創立於 2024 年，是一支橫跨美國與大中華區的獨立 AI 工作室，致力於將東方人文哲思與嚴謹透明的 AI 結合，打造長久陪伴使用者的作品。',
			ogTitle: '關於我們 — memenow',
			ogDescription:
				'創立於 2024 年的獨立 AI 工作室。連結東方人文哲思與現代工程匠心，打造值得長久重讀的作品。'
		},
		hero: {
			eyebrowLeft: '關於 · MEMENOW 工作室',
			eyebrowRight: '始於 2024',
			title: '一間安靜打磨作品的獨立工作室',
			lede: '2024 年創立。我們橫跨太平洋兩岸，把東方傳統哲思與可溯源的現代 AI 融為一體，慢工出細活，只做經得起時間考驗的個人陪伴作品。',
			cue: '向下閱讀 · 01 我們的團隊'
		},
		studio: {
			number: '01',
			label: '我們的團隊',
			title: '跨越時區，因同一份審美與克制而聚',
			lede: '公司設立於美國德拉瓦州，團隊成員分布在美國與大中華區的不同城市。',
			p1: '我們之中既有深耕人工智慧與分散式系統的工程師，也有長期研習東方傳統文化的創作者。大家都不喜歡喧嘩浮誇的行銷，更願意沉下心來，把複雜的技術化為溫潤、體貼、令人安心的日常體驗——正是這份默契把我們聚在了一起。',
			stats: {
				foundedYear: '2024',
				foundedLabel: '工作室創立',
				foundedDesc: '確立「真誠有據、長久陪伴」的產品理念。',
				productCount: '1',
				productLabel: '旗艦作品',
				productDesc: 'Yinyang Agent：四柱八字長卷、時機週期與知己對話。',
				teamRegion: 'US · CN',
				teamLabel: '跨文化團隊',
				teamDesc: '連結現代 AI 工程的嚴謹與東方人文洞察。'
			}
		},
		work: {
			number: '02',
			label: '行事準則',
			title: '我們如何打磨產品',
			lede: '選一個真正關乎人心的問題，用克制、透明、不趕工期的方式把它答好。',
			p1: '我們只做 AI 真能成為長期知己的事：它給出的內容值得你珍藏、重讀，並在生活翻開新篇章時帶著問題回來對照。Yinyang Agent 就是我們交出的第一份答卷。我們從不用刺眼的彈出視窗或製造焦慮的話術逼人付費，因為真正好的體驗自然會讓人願意留下來。',
			p2: '有把握的推演，我們把依據攤開講清楚；超出認知邊界的，我們坦誠留白。模型表現不夠穩，我們就反覆打磨直到過關。這些原則並不高深，只是為了讓螢幕前的你感到踏實與受尊重。',
			timeline: [
				{
					year: '2024',
					title: 'memenow 創立',
					body: '在寫下第一行程式碼之前，先定下「不販賣焦慮、不做一次性速食玩具」的工作室準則。'
				},
				{
					year: '2024–2026',
					title: 'Yinyang Agent 上線與演進',
					body: '首款旗艦作品正式發布並持續迭代：完成真太陽時排盤、子平與盲派雙視角合參、全文事實複核、日週月年時機週期與知己對話體驗。'
				}
			]
		},
		contact: {
			number: '03',
			label: '聯絡',
			title: '期待聽見你的聲音',
			lede: '媒體採訪、商務合作或產品心得交流，歡迎來信 ',
			ledeEnd: '。',
			p1: '每一封郵件都由我們親自閱讀並回覆，沒有冰冷的工單號碼，也沒有千篇一律的自動回覆。',
			cta: '來信 hello@memenow.xyz'
		}
	},
	privacy: {
		meta: {
			title: '隱私權政策 — memenow',
			description: 'memenow.xyz 隱私權保護聲明。'
		},
		hero: {
			eyebrowLeft: '法律 · 隱私權政策',
			eyebrowRight: '更新於 2026-10-15',
			title: '你的隱私，清楚透明',
			lede: 'memenow.xyz 官網幾乎不蒐集任何個人資料。以下用最直白的話說明哪些偏好只留在你的裝置裡，哪些基礎紀錄僅用於安全維運。',
			cue: '向下閱讀 · 隱私權聲明'
		},
		scope: {
			number: '01',
			label: '適用範圍',
			title: '本聲明涵蓋的範圍',
			body: '本聲明適用於 <strong>memenow.xyz</strong> 官方網站的公開頁面。旗下具體產品（如 Yinyang Agent）在其各自的應用介面內設有專門的隱私權政策與資料管理選項。'
		},
		data: {
			number: '02',
			label: '資料說明',
			title: '我們蒐集什麼，不蒐集什麼',
			p1: '本站不使用任何第三方追蹤分析指令碼，也不投放任何廣告。你的深淺色主題與動態效果偏好（瀏覽器本機儲存鍵 <code class="prose-code">memenow.theme</code> 與 <code class="prose-code">memenow.motion</code>）完全保留在你的瀏覽器中，從不上傳；語言偏好（<code class="prose-code">memenow.locale</code>）以第一方 Cookie 保存，僅用於依你選擇的語言呈現頁面。',
			p2: '代管基礎設施 Cloudflare 會依業界慣例記錄基本請求中繼資料（IP 位址、User-Agent、時間戳記與存取路徑），以確保網站安全與穩定運作。我們從不將這些紀錄與任何個人身分相連結。'
		},
		email: {
			number: '03',
			label: '電子郵件聯絡',
			title: '來信與聯絡方式',
			body: '當你來信 <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a> 時，你的郵件內容與地址僅用於我們回信聯繫，絕不會出售或分享給任何第三方。'
		}
	},
	terms: {
		meta: {
			title: '使用條款 — memenow',
			description: 'memenow.xyz 使用條款。'
		},
		hero: {
			eyebrowLeft: '法律 · 使用條款',
			eyebrowRight: '更新於 2026-10-15',
			title: '簡明平實的使用條款',
			lede: '歡迎造訪 memenow.xyz。以下條款清楚說明本站的服務範圍、文化探索屬性與你的合法權益。',
			cue: '向下閱讀 · 使用條款'
		},
		scope: {
			number: '01',
			label: '適用範圍',
			title: '本條款涵蓋的範圍',
			body: '本條款適用於 <strong>memenow.xyz</strong> 的所有公開頁面。造訪或使用本站即表示你已閱讀並同意本條款。具體產品（如 Yinyang Agent）在其各自服務頁面內另有獨立的產品服務條款。'
		},
		disclaimer: {
			number: '02',
			label: '文化與 AI 免責',
			title: '文化探索屬性與 AI 生成說明',
			p1: 'memenow 旗下產品（包括 Yinyang Agent）所呈現的四柱八字與五行內容源自中國傳統哲學與人文遺產，旨在為自我覺察與日常反思提供文化視角，<strong>不構成、亦不能取代專業的醫療、心理諮商、法律或財務投資建議</strong>。',
			p2: '相關解讀由人工智慧模型輔助生成，本質上屬於敘事性詮釋；我們不對任何未來的確定性結果作出明示或默示的承諾。命盤只是起點，生活中的每一項具體決定始終由你獨立判斷並自行負責。'
		},
		warranty: {
			number: '03',
			label: '服務狀態',
			title: '依現狀提供服務',
			body: '本站內容依「現狀」提供。我們持續致力於維持資訊正確與網站穩定運作，但不對其特定用途之適用性、絕對完整性或即時性作出額外擔保。'
		},
		offer: {
			number: '04',
			label: '非金融要約',
			title: '不構成任何金融或投資要約',
			body: '本站的任何文字或內容均不構成出售任何證券、基金份額或金融工具的要約，亦不構成任何投資邀約或財務建議。'
		},
		ip: {
			number: '05',
			label: '智慧財產權',
			title: '品牌標識與你的個人解讀權益',
			p1: '「memenow」名稱、圖形標誌及網站視覺設計均屬 memenow 所有；所提及的其他商標歸各自權利人所有。',
			p2: '你在 Yinyang Agent 等產品中產生的個人命盤解讀，始終歸你永久閱讀、私人珍藏與非商業性分享。'
		},
		law: {
			number: '06',
			label: '準據法',
			title: '適用法律與修訂說明',
			p1: '本條款受美國德拉瓦州法律管轄並依其解釋（不適用衝突法規則）。',
			p2: '我們可能隨業務發展適時更新本條款，頁首的「更新於」日期始終反映最近一次修訂時間。如有任何疑問，歡迎來信 <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>。'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: '這一頁隱入霧中了',
		serverErrorTitle: '連線暫時起了點波瀾',
		notFoundLede:
			'你尋找的頁面可能已經移往他處、更改了名稱，或從未在此停留。不妨回到首頁重新出發。',
		serverErrorLede: '服務暫時有些忙碌，請稍候片刻再試一次。',
		returnHome: '返回首頁',
		statusLabel: '狀態 · {status}',
		notFoundLabel: '找不到頁面',
		errorLabel: '服務異常',
		cueHome: '返回 · 首頁'
	}
};
