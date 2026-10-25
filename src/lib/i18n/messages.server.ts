/**
 * Server-only aggregate of every locale dictionary. The `.server.ts` suffix is
 * load-bearing: SvelteKit refuses to bundle this module into client code, so
 * the browser only ever receives the active locale's dictionary — serialized
 * by `+layout.server.ts` and read through `useMessages()`.
 */

import type { Locale } from './locale-registry';
import { en } from './dictionaries/en';
import { es } from './dictionaries/es';
import { fr } from './dictionaries/fr';
import { ja } from './dictionaries/ja';
import { ko } from './dictionaries/ko';
import { zh, type MessageSchema } from './dictionaries/zh';
import { zhTW } from './dictionaries/zh-TW';

export const messages: Record<Locale, MessageSchema> = {
	zh,
	'zh-TW': zhTW,
	en,
	ja,
	ko,
	es,
	fr
};
