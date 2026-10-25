/** Spanish dictionary. Structure is enforced by `MessageSchema`. */

import type { MessageSchema } from './zh';

export const es: MessageSchema = {
	common: {
		brand: 'memenow',
		home: 'Inicio',
		products: 'Productos',
		company: 'Nosotros',
		legal: 'Legal',
		privacy: 'Privacidad',
		terms: 'Términos',
		skipToContent: 'Saltar al contenido principal',
		navAriaLabel: 'Navegación principal',
		brandHomeAriaLabel: 'Inicio de memenow',
		rightsReserved: '© {year} memenow · Todos los derechos reservados',
		theme: {
			switchToDark: 'Cambiar al tema oscuro',
			switchToLight: 'Cambiar al tema claro'
		},
		motion: {
			reduce: 'Reducir animaciones',
			allow: 'Permitir animaciones'
		},
		language: {
			menuLabel: 'Cambiar idioma',
			footerTitle: 'Idioma'
		}
	},
	home: {
		meta: {
			title: 'memenow — Conoce tu ritmo. Elige con claridad.',
			description:
				'memenow es un estudio independiente de IA que crea herramientas cuidadas para la reflexión personal y el ritmo de la vida. Nuestro producto estrella, Yinyang Agent, convierte el BaZi clásico de los Cuatro Pilares en una prosa cálida y sensata a la que puedes volver en cada etapa de tu vida.',
			ogTitle: 'memenow — Conoce tu ritmo. Elige con claridad.',
			ogDescription:
				'Un estudio independiente de IA dedicado al autoconocimiento y al ritmo de la vida. Primer lanzamiento: Yinyang Agent, con lecturas BaZi de los Cuatro Pilares, Ciclos de tiempo y conversación.'
		},
		hero: {
			eyebrowLeft: 'MEMENOW · AUTOCONOCIMIENTO Y RITMO VITAL',
			eyebrowRight: 'PRODUCTO ESTRELLA · YINYANG AGENT',
			title: 'Conoce tu ritmo. Elige con claridad.',
			lede: 'En una encrucijada vital no necesitas tópicos vagos sobre la suerte, sino un espejo sereno y honesto. Nuestro producto estrella, Yinyang Agent, traduce los Cuatro Pilares clásicos del BaZi a una prosa cálida y fácil de leer que te ayuda a entender tu naturaleza y a moverte entre las estaciones cambiantes de la vida.',
			primaryCta: 'Prueba Yinyang Agent gratis',
			secondaryCta: 'Conoce el producto',
			cue: 'Desplázate · 01 Producto estrella'
		},
		yinyang: {
			number: '01',
			label: 'Yinyang Agent',
			title: 'Una lectura personal escrita para acompañarte',
			lede: 'Empieza con tu fecha, hora y zona horaria de nacimiento; no necesitas saber nada de astrología. Recibe un retrato de tus Cuatro Pilares, razonado a fondo, escrito en una prosa clara y actual, y guardado para siempre en tu cuenta privada.',
			p1: 'Yinyang Agent calibra tu carta natal según los términos solares astronómicos y combina el equilibrio elemental de ZiPing con la dinámica estructural de MangPai. En lugar de soltarte un muro de símbolos esotéricos, entrelaza tu Maestro del Día, los hitos de años pasados y orientación sobre amor, carrera, salud y familia en un único relato coherente.',
			p2: 'Tu lectura natal ancla el gran arco de quién eres. A medida que la vida avanza, los Ciclos de tiempo señalan ventanas favorables y de precaución en días, semanas, meses y años, y la conversación te permite volver cuando quieras con una decisión real en mente.',
			pillars: [
				{
					num: '01 · Retrato natal',
					title: 'Entiende tu forma de ser innata',
					body: 'Sin glosarios. Lee un relato matizado y en lenguaje sencillo sobre tu temperamento, tus fortalezas naturales y cómo se desarrollaron los años decisivos de tu pasado.'
				},
				{
					num: '02 · Cuatro ámbitos de vida',
					title: 'Claridad en amor, carrera, salud y familia',
					body: 'Ve más allá de las puntuaciones elementales abstractas hacia una reflexión práctica sobre las relaciones, las ambiciones y los hábitos diarios que dan forma a tu vida.'
				},
				{
					num: '03 · Ciclos de tiempo',
					title: 'Avanza al ritmo de días, semanas, meses y años',
					body: 'Sabe cuándo impulsarte y cuándo descansar. Observa cómo los ciclos actuales interactúan con tu carta natal para marcar el ritmo de tu próximo paso.'
				},
				{
					num: '04 · Conversación',
					title: 'Una conversación que recuerda quién eres',
					body: 'Nunca empiezas de cero. Vuelve cuando surja una nueva pregunta o encrucijada y háblalo en una conversación basada en tu carta.'
				}
			],
			cta: 'Ver mi carta gratis',
			detailLink: 'Descubre cómo funciona Yinyang Agent'
		},
		pullquote: {
			quote: 'Leer la marea no es rendirse a las olas: es sostener el timón con serena convicción.',
			attribution: 'Filosofía del estudio memenow'
		},
		studio: {
			number: '02',
			label: 'Nuestra filosofía',
			title: 'Oficio sereno para las preguntas que te acompañan',
			lede: 'Sin bombo, sin horóscopos vacíos y sin atajos apresurados: solo trabajo cuidado, hecho para perdurar.',
			p1: 'Fundamos memenow en 2024 a partir de una observación sencilla: mientras gran parte del mundo de la IA competía por crear chatbots más ruidosos y rápidos, muy pocos construían espacios para comprenderse a uno mismo con calma. Cuando alguien lleva a la IA una pregunta vital genuina, merece un razonamiento transparente y calidez humana.',
			p2: 'Por eso trabajamos como un pequeño taller artesanal. Yinyang Agent marca la pauta de todo lo que creamos: no medimos el éxito por unos primeros treinta segundos deslumbrantes, sino por si sigues encontrando consuelo y claridad cuando vuelves un mes —o un año— después.'
		},
		contact: {
			number: '03',
			label: 'Contacto',
			title: 'Empecemos a conversar',
			lede: 'Para comentarios sobre el producto, consultas de prensa o colaboraciones con sentido, escribe a ',
			ledeEnd: '.',
			p1: 'Cada mensaje lo lee y responde personalmente alguien de nuestro equipo. Puede que tardemos un poco en contestar con calma, pero siempre te responderá una persona real, nunca una plantilla automática.',
			cta: 'Escribe a hello@memenow.xyz'
		}
	},
	products: {
		meta: {
			title: 'Productos — memenow',
			description:
				'Creaciones de memenow. Empieza con nuestro producto estrella, Yinyang Agent: mensajes diarios gratuitos y carta BaZi básica, síntesis completa de dos escuelas, Ciclos de tiempo y conversación.',
			ogTitle: 'Productos — memenow',
			ogDescription:
				'Creado para la reflexión personal y las decisiones cotidianas. Descubre Yinyang Agent: lecturas BaZi de los Cuatro Pilares, Ciclos de tiempo y conversaciones que conocen tu carta.'
		},
		hero: {
			eyebrowLeft: 'MEMENOW · PRODUCTOS',
			eyebrowRight: 'YA DISPONIBLE',
			title: 'Creado para la reflexión y las decisiones cotidianas',
			lede: 'No hacemos herramientas de usar y tirar. Creamos compañeros serenos y duraderos para conocerte mejor. Nuestro producto estrella, Yinyang Agent, ya está disponible, empezando por la carta gratuita y las reflexiones diarias.',
			cue: 'Desplázate · 01 Yinyang Agent'
		},
		yinyang: {
			number: '01',
			label: 'Yinyang Agent',
			title: 'Entiende tu patrón. Avanza a tu propio ritmo.',
			lede: 'Descubre el momento de tu nacimiento a través de los Cuatro Pilares del BaZi. Tanto si sientes curiosidad por tu equilibrio elemental por primera vez como si estás sopesando un gran cambio vital, puedes profundizar paso a paso.',
			steps: [
				{
					num: 'Paso 01 · Comienzo gratuito',
					title: 'Carta básica y mensaje diario',
					body: 'Introduce tu fecha, hora y zona horaria de nacimiento para ver al instante tus Cuatro Pilares, el equilibrio de tus Cinco Elementos y reflexiones diarias gratuitas sobre el momento.'
				},
				{
					num: 'Paso 02 · Retrato profundo',
					title: 'Lectura completa de dos escuelas',
					body: 'Desbloquea tu informe completo y extenso: validaciones de años pasados, arcos de los ciclos de diez años (DaYun), capítulos dedicados al amor, la carrera, la salud y la familia, y una tarjeta retrato para compartir.'
				},
				{
					num: 'Paso 03 · Ritmo vivo',
					title: 'Ciclos de tiempo y conversación',
					body: 'Consulta tus ventanas del día, la semana, el mes y el año a medida que cambian las estaciones, o abre una conversación para hablar de decisiones reales con tu carta como contexto.'
				},
				{
					num: 'Paso 04 · Método abierto',
					title: 'Biblioteca BaZi integrada y razonamiento claro',
					body: 'Cada idea muestra la base clásica que la sustenta, junto a una Biblioteca BaZi accesible para que descubras cada concepto a tu ritmo.'
				}
			],
			cta: 'Prueba Yinyang Agent gratis',
			detailLink: 'Lee la historia completa del producto'
		}
	},
	productYinyang: {
		meta: {
			title: 'Yinyang Agent — BaZi de los Cuatro Pilares y compañía para tu ritmo vital · memenow',
			description:
				'Yinyang Agent convierte el BaZi clásico de los Cuatro Pilares en una prosa clara y actual. Incluye carta calculada por términos solares, síntesis de las escuelas ZiPing y MangPai, Ciclos de tiempo y conversación.',
			ogTitle: 'Yinyang Agent — Lee el patrón del momento en que naciste',
			ogDescription:
				'Empieza gratis con tu carta BaZi básica y mensajes diarios. Profundiza con lecturas extensas, Ciclos de tiempo a varias escalas y conversaciones que conocen tu carta.'
		},
		hero: {
			eyebrowLeft: 'PRODUCTO · YINYANG AGENT',
			eyebrowRight: 'EMPIEZA GRATIS',
			title: 'La sabiduría ancestral de los Cuatro Pilares, en una prosa clara y actual',
			lede: 'El BaZi no es un veredicto fatalista sobre tu futuro, sino una lente probada por el tiempo para observarte. Yinyang Agent reúne la carta calculada por términos solares, la síntesis clásica de dos escuelas, los Ciclos de tiempo y la conversación para que vivas el presente con serena claridad.',
			primaryCta: 'Ver mi carta gratis',
			cue: 'Desplázate · 01 Experiencia y ritmo'
		},
		reading: {
			number: '01',
			label: 'Experiencia y ritmo',
			title: 'Del primer reconocimiento a una perspectiva para cada día',
			lede: 'Empieza sin esfuerzo con un mensaje diario gratuito o dos lecturas gratuitas de carta básica al mes. Tu carta de los Cuatro Pilares y el resumen narrativo aparecen lado a lado: claros a primera vista y ricos cuando quieras profundizar.',
			p1: 'Cuando desbloqueas el informe completo, el sistema calibra tu carta según tu zona horaria de nacimiento y los términos solares astronómicos, y despliega validaciones concretas de años pasados, los ciclos de diez años (DaYun) y capítulos prácticos sobre amor, carrera, salud y familia. También puedes consultar cualquier concepto en la Biblioteca BaZi integrada o guardar una tarjeta retrato personalizada de tu carta.',
			p2: 'Cada lectura queda guardada en tu cuenta como una referencia personal duradera. Con el paso del tiempo, los Ciclos de tiempo señalan tus ventanas del día, la semana, el mes y el año, mientras que la conversación y los canales dedicados a distintos ámbitos de la vida te permiten volver con nuevas preguntas cada vez que surja una decisión.',
			highlights: [
				{
					num: '01 · Sin muro de jerga',
					title: 'Carta y relato, lado a lado',
					body: 'Los complejos troncos, ramas y dinámicas elementales se traducen en una prosa cálida y actual que cualquiera puede leer desde el primer día.'
				},
				{
					num: '02 · Anclada en tu pasado',
					title: 'Validada con años que realmente viviste',
					body: 'Al repasar años decisivos de tu pasado antes de mirar hacia delante, tu lectura ancla los ciclos futuros en la realidad vivida y no en conjeturas genéricas.'
				},
				{
					num: '03 · Tiempo a varias escalas',
					title: 'Ventanas del día, la semana, el mes y el año',
					body: 'Conecta tu estructura natal de largo plazo con el ritmo de hoy, de esta semana o de este año, para saber cuándo avanzar y cuándo recargar energías.'
				},
				{
					num: '04 · Conversación con contexto',
					title: 'Una conversación que conoce tu carta',
					body: 'Lleva tus preguntas sobre relaciones, tus dilemas profesionales o tus inquietudes a una conversación privada que ya entiende tu patrón natal.'
				}
			]
		},
		pullquote: {
			quote:
				'Una buena lectura nunca elige por ti. Despeja la niebla para que escuches lo que ya sabes.',
			attribution: 'Principio de diseño de Yinyang Agent'
		},
		discipline: {
			number: '02',
			label: 'Oficio y método',
			title: 'Por qué una lectura tarda unos minutos en elaborarse',
			lede: 'Los horóscopos instantáneos están hechos para leerse por encima y olvidarse. Escribir un documento personal que valga la pena conservar exige una síntesis deliberada y verificaciones cruzadas.',
			p1: 'Cuando envías tus datos de nacimiento, Yinyang Agent primero fija tu carta según los términos solares astronómicos y luego la analiza en paralelo desde dos escuelas clásicas complementarias: ZiPing (equilibrio elemental y clima estacional) y MangPai (impulso estructural y obra vital). Antes de finalizar tu informe, una revisión específica contrasta cada afirmación y cada límite entre años con los datos de tu carta y elimina el relleno vago. Esos pocos minutos de calma son los que hacen que cada párrafo se sostenga.',
			comparison: {
				caption: 'Yinyang Agent frente a los horóscopos genéricos con IA',
				genericLabel: 'Horóscopos con IA / chatbots genéricos',
				yinyangLabel: 'Yinyang Agent',
				rows: [
					{
						feature: 'Base de la carta',
						generic:
							'A menudo ignora la zona horaria de nacimiento y los términos solares, y calcula mal los Cuatro Pilares',
						yinyang:
							'Calibrada con la zona horaria IANA exacta de nacimiento y los términos solares astronómicos'
					},
					{
						feature: 'Profundidad',
						generic: 'Frases de efecto Barnum en un solo prompt que suenan igual para todos',
						yinyang: 'Síntesis de las escuelas ZiPing + MangPai adaptada a tu estructura concreta'
					},
					{
						feature: 'Coherencia',
						generic: 'Se contradice de una pregunta a otra con afirmaciones sin verificar',
						yinyang:
							'Contrastada con los datos de la carta y anclada en validaciones de años pasados'
					},
					{
						feature: 'Continuidad',
						generic: 'Un chat puntual que desaparece al cerrar la pestaña',
						yinyang: 'Referencia natal guardada, junto a Ciclos de tiempo en vivo y conversación'
					}
				]
			},
			cta: 'Empieza tu lectura en yinyang.memenow.xyz'
		}
	},
	company: {
		meta: {
			title: 'Nosotros — memenow',
			description:
				'Fundado en 2024, memenow es un estudio independiente de IA con presencia en Estados Unidos y la Gran China, que une la filosofía oriental clásica con una IA moderna y transparente.',
			ogTitle: 'Nosotros — memenow',
			ogDescription:
				'Un estudio independiente fundado en 2024. Unimos la sabiduría cultural oriental y un oficio de ingeniería sereno para crear una IA a la que valga la pena volver.'
		},
		hero: {
			eyebrowLeft: 'NOSOTROS · ESTUDIO MEMENOW',
			eyebrowRight: 'DESDE 2024',
			title: 'Un estudio independiente construido sobre un oficio sereno',
			lede: 'Fundado en 2024 entre Estados Unidos y la Gran China. Unimos la sabiduría cultural clásica y una IA moderna y transparente, y lanzamos con cuidado para que cada creación perdure.',
			cue: 'Desplázate · 01 Quiénes somos'
		},
		studio: {
			number: '01',
			label: 'Quiénes somos',
			title: 'Entre husos horarios, unidos por la mesura y el cuidado',
			lede: 'Constituida en Delaware, con un pequeño equipo que trabaja entre Estados Unidos y la Gran China.',
			p1: 'Nuestro equipo reúne a ingenieros de sistemas de IA y a estudiosos veteranos de la filosofía y las humanidades orientales. Compartimos el rechazo al bombo ruidoso y al crecimiento basado en patrones oscuros, y preferimos trabajar en silencio hasta que la tecnología compleja resulte cálida, sensata y realmente útil en el día a día.',
			stats: {
				foundedYear: '2024',
				foundedLabel: 'Fundación del estudio',
				foundedDesc:
					'Nacido del principio de un razonamiento honesto y un acompañamiento duradero.',
				productCount: '1',
				productLabel: 'Producto estrella',
				productDesc:
					'Yinyang Agent: lecturas de los Cuatro Pilares, Ciclos de tiempo y conversación.',
				teamRegion: 'US · CN',
				teamLabel: 'Equipo intercultural',
				teamDesc: 'Unimos el rigor de la IA moderna con la perspectiva oriental clásica.'
			}
		},
		work: {
			number: '02',
			label: 'Cómo trabajamos',
			title: 'Cómo damos forma a cada lanzamiento',
			lede: 'Elegir una pregunta humana que importe y responderla con claridad, mesura y paciencia.',
			p1: 'Solo creamos donde la IA puede ser una verdadera compañía a largo plazo: donde lo que lees merece guardarse, releerse y volver a cuestionarse a medida que cambia la vida. Yinyang Agent es nuestra primera respuesta a ese desafío. Nunca usamos ganchos basados en el miedo ni urgencias artificiales, porque el trabajo que respeta a quien lo lee se gana la confianza de forma natural.',
			p2: 'Cuando el razonamiento clásico ofrece una señal clara, mostramos cómo llegamos a ella. Cuando la vida sigue abierta, dejamos espacio para tus propias decisiones. Cuando un modelo o una función necesita más cuidado, nos tomamos el tiempo de hacerlo bien.',
			timeline: [
				{
					year: '2024',
					title: 'Fundación del estudio',
					body: 'Nace memenow con un propósito claro: nada de adivinación basada en el miedo ni de novedades de IA de usar y tirar; solo trabajo sólido al que se pueda volver.'
				},
				{
					year: '2024–2026',
					title: 'Yinyang Agent: lanzamiento y evolución',
					body: 'Nuestro producto estrella se lanza y crece con la carta calculada por términos solares, la síntesis de las escuelas ZiPing y MangPai, la verificación del informe completo, los Ciclos de tiempo a varias escalas y la conversación.'
				}
			]
		},
		contact: {
			number: '03',
			label: 'Contacto',
			title: 'Nos encantará saber de ti',
			lede: 'Para prensa, colaboraciones o comentarios con sentido, escribe a ',
			ledeEnd: '.',
			p1: 'Leemos cada mensaje y respondemos nosotros mismos: sin colas de tickets, sin respuestas automáticas y sin cartas prefabricadas.',
			cta: 'Escribe a hello@memenow.xyz'
		}
	},
	privacy: {
		meta: {
			title: 'Política de privacidad — memenow',
			description: 'Aviso de privacidad de memenow.xyz.'
		},
		hero: {
			eyebrowLeft: 'LEGAL · PRIVACIDAD',
			eyebrowRight: 'ACTUALIZADO 2026-10-15',
			title: 'Tu privacidad, en palabras sencillas',
			lede: 'memenow.xyz no recopila casi nada en este sitio web. Aquí te explicamos con claridad qué se queda por completo en tu navegador y qué metadatos mínimos mantienen el sitio en funcionamiento.',
			cue: 'Desplázate · Aviso de privacidad'
		},
		scope: {
			number: '01',
			label: 'Alcance',
			title: 'Qué cubre este aviso',
			body: 'Este aviso se aplica a las páginas públicas de <strong>memenow.xyz</strong>. Cada producto (como Yinyang Agent) ofrece su propio aviso de privacidad y sus propios controles de datos en sus respectivas plataformas.'
		},
		data: {
			number: '02',
			label: 'Tratamiento de datos',
			title: 'Qué recopilamos y qué se queda en tu navegador',
			p1: 'No usamos analítica de terceros ni rastreadores publicitarios en este sitio. Tus preferencias de tema y de animación (las claves locales del navegador <code class="prose-code">memenow.theme</code> y <code class="prose-code">memenow.motion</code>) se quedan en tu navegador y nunca se nos transmiten. Tu preferencia de idioma (<code class="prose-code">memenow.locale</code>) se guarda en una cookie propia y se usa únicamente para mostrarte las páginas en el idioma que elegiste.',
			p2: 'Nuestro proveedor de infraestructura, Cloudflare, registra metadatos estándar de las solicitudes (dirección IP, agente de usuario, marca de tiempo y ruta) por motivos de seguridad y fiabilidad. Nunca vinculamos esos registros operativos con ninguna identidad personal.'
		},
		email: {
			number: '03',
			label: 'Correo y contacto',
			title: 'Cuando nos escribes',
			body: 'Si escribes a <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>, tu mensaje y tu dirección se usan solo para responderte. Nunca vendemos ni compartimos tu correspondencia con terceros.'
		}
	},
	terms: {
		meta: {
			title: 'Términos de uso — memenow',
			description: 'Términos de uso de memenow.xyz.'
		},
		hero: {
			eyebrowLeft: 'LEGAL · TÉRMINOS',
			eyebrowRight: 'ACTUALIZADO 2026-10-15',
			title: 'Términos claros y directos',
			lede: 'Los términos que rigen tu uso de memenow.xyz, escritos en lenguaje sencillo.',
			cue: 'Desplázate · Términos de uso'
		},
		scope: {
			number: '01',
			label: 'Alcance',
			title: 'Qué cubren estos términos',
			body: 'Estos términos rigen las páginas públicas de <strong>memenow.xyz</strong>. Al acceder a este sitio o usarlo, reconoces y aceptas estos términos. Cada producto (como Yinyang Agent) publica sus propios términos específicos en sus respectivas plataformas.'
		},
		disclaimer: {
			number: '02',
			label: 'Aviso cultural y sobre IA',
			title: 'Reflexión cultural y contenido generado por IA',
			p1: 'El contenido sobre BaZi, los Cuatro Pilares y los Cinco Elementos que ofrecen los productos de memenow (incluido Yinyang Agent) se basa en la filosofía y el patrimonio cultural chinos clásicos. Se ofrece únicamente para la reflexión personal y la exploración cultural, y <strong>no constituye ni puede sustituir el asesoramiento profesional médico, psicológico, jurídico o financiero</strong>.',
			p2: 'Las lecturas se generan con modelos de IA como interpretaciones narrativas; no ofrecemos ninguna garantía, expresa ni implícita, de certeza predictiva. Tu carta es una lente para la reflexión: cada decisión en el mundo real sigue dependiendo de tu propio criterio y es tu responsabilidad.'
		},
		warranty: {
			number: '03',
			label: 'Base del servicio',
			title: 'Se ofrece tal cual',
			body: 'Este sitio se ofrece “tal cual”. Aunque nos importan mucho la exactitud y la disponibilidad, no ofrecemos garantías sobre su idoneidad para un fin concreto, su integridad ni su disponibilidad ininterrumpida.'
		},
		offer: {
			number: '04',
			label: 'Sin oferta financiera',
			title: 'Nada aquí es una solicitud financiera',
			body: 'Nada de lo que aparece en este sitio constituye una oferta de venta, una solicitud de compra ni una recomendación sobre ningún valor, participación en fondos o instrumento financiero.'
		},
		ip: {
			number: '05',
			label: 'Propiedad intelectual',
			title: 'Marcas, diseño del sitio y tus lecturas personales',
			p1: '“memenow” y la marca memenow son marcas comerciales de memenow; las demás marcas pertenecen a sus respectivos titulares. Textos y diseño visual del sitio © memenow.',
			p2: 'Las lecturas personales que generas en productos como Yinyang Agent siguen siendo tuyas para leerlas de forma permanente, conservarlas en privado y compartirlas con fines no comerciales.'
		},
		law: {
			number: '06',
			label: 'Ley aplicable',
			title: 'Ley aplicable y actualizaciones',
			p1: 'Estos términos se rigen por las leyes del Estado de Delaware, Estados Unidos, sin tener en cuenta sus principios sobre conflictos de leyes.',
			p2: 'Podemos actualizar estos términos a medida que evoluciona nuestro estudio; la fecha de “Actualizado” en el encabezado refleja la revisión más reciente. Las preguntas siempre son bienvenidas en <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>.'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: 'Esta página se ha perdido de vista',
		serverErrorTitle: 'Una breve interferencia en la señal',
		notFoundLede:
			'Puede que la página que buscabas se haya movido, haya cambiado de nombre o nunca haya existido. Te llevamos de vuelta a terreno conocido.',
		serverErrorLede: 'Algo salió mal por nuestra parte. Espera un momento y vuelve a intentarlo.',
		returnHome: 'Volver al inicio',
		statusLabel: 'Estado · {status}',
		notFoundLabel: 'Página no encontrada',
		errorLabel: 'Error del servicio',
		cueHome: 'Volver · Inicio'
	}
};
