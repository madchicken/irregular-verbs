export type VerbFields = 'base' | 'translations' | 'pastParticiple' | 'simplePast';
export const VERB_FIELDS: VerbFields[] = ['base', 'translations', 'pastParticiple', 'simplePast'];
export type VerbsSet = { [k: string]: Verb[] };

export interface Verb {
    base: string;
    simplePast: string;
    pastParticiple: string;
    translations: string[];
    fixedField?: VerbFields;
}

export interface TestVerb extends Verb {
    fixedField: VerbFields;
    input: { [k: string]: string };
}

const verbs: Verb[] = [
    {
        base: 'read',
        simplePast: 'read',
        pastParticiple: 'read',
        translations: ['leggere']
    },
    {
        base: 'go',
        simplePast: 'went',
        pastParticiple: 'gone',
        translations: ['andare']
    },
    {
        base: 'do',
        simplePast: 'did',
        pastParticiple: 'done',
        translations: ['fare']
    },
    {
        base: 'see',
        simplePast: 'saw',
        pastParticiple: 'seen',
        translations: ['vedere']
    },
    {
        base: 'drink',
        simplePast: 'drank',
        pastParticiple: 'drunk',
        translations: ['bere']
    },
    {
        base: 'leave',
        simplePast: 'left',
        pastParticiple: 'left',
        translations: ['partire', 'lasciare'],
    },
    {
        base: 'get',
        simplePast: 'got',
        pastParticiple: 'got',
        translations: ['ottenere']
    },
    {
        base: 'drive',
        simplePast: 'drove',
        pastParticiple: 'driven',
        translations: ['guidare']
    },
    {
        base: 'become',
        simplePast: 'became',
        pastParticiple: 'become',
        translations: ['diventare']
    },
    {
        base: 'break',
        simplePast: 'broke',
        pastParticiple: 'broken',
        translations: ['rompere']
    },
    {
        base: 'come',
        simplePast: 'came',
        pastParticiple: 'come',
        translations: ['venire']
    },
    {
        base: 'eat',
        simplePast: 'ate',
        pastParticiple: 'eaten',
        translations: ['mangiare']
    },
    {
        base: 'fall',
        simplePast: 'fell',
        pastParticiple: 'fallen',
        translations: ['cadere']
    },
    {
        base: 'feel',
        simplePast: 'felt',
        pastParticiple: 'felt',
        translations: ['provare una sensazione']
    },
    {
        base: 'know',
        simplePast: 'knew',
        pastParticiple: 'known',
        translations: ['sapere', 'conoscere'],
    },
    {
        base: 'lose',
        simplePast: 'lost',
        pastParticiple: 'lost',
        translations: ['perdere']
    },
    {
        base: 'meet',
        simplePast: 'met',
        pastParticiple: 'met',
        translations: ['incontrare']
    },
    {
        base: 'run',
        simplePast: 'ran',
        pastParticiple: 'run',
        translations: ['correre']
    },
    {
        base: 'sleep',
        simplePast: 'slept',
        pastParticiple: 'slept',
        translations: ['dormire']
    },
    {
        base: 'speak',
        simplePast: 'spoke',
        pastParticiple: 'spoken',
        translations: ['parlare']
    },
    {
        base: 'buy',
        simplePast: 'bought',
        pastParticiple: 'bought',
        translations: ['comprare']
    },
    {
        base: 'cut',
        simplePast: 'cut',
        pastParticiple: 'cut',
        translations: ['tagliare']
    },
    {
        base: 'find',
        simplePast: 'found',
        pastParticiple: 'found',
        translations: ['trovare']
    },
    {
        base: 'fly',
        simplePast: 'flew',
        pastParticiple: 'flown',
        translations: ['volare']
    },
    {
        base: 'forget',
        simplePast: 'forgot',
        pastParticiple: 'forgotten',
        translations: ['dimenticare']
    },
    {
        base: 'make',
        simplePast: 'made',
        pastParticiple: 'made',
        translations: ['fare con le mani']
    },
    {
        base: 'send',
        simplePast: 'sent',
        pastParticiple: 'sent',
        translations: ['spedire']
    },
    {
        base: 'think',
        simplePast: 'thought',
        pastParticiple: 'thought',
        translations: ['pensare']
    },
    {
        base: 'wear',
        simplePast: 'wore',
        pastParticiple: 'worn',
        translations: ['indossare']
    },
    {
        base: 'give',
        simplePast: 'gave',
        pastParticiple: 'given',
        translations: ['dare']
    },
];

const verbs2: Verb[] = [
    {
        base: 'be',
        simplePast: 'was/were',
        pastParticiple: 'been',
        translations: ['essere']
    },
    {
        base: 'begin',
        simplePast: 'began',
        pastParticiple: 'begun',
        translations: ['incominciare']
    },
    {
        base: 'bet',
        simplePast: 'bet',
        pastParticiple: 'bet',
        translations: ['scommettere']
    },
    {
        base: 'blow',
        simplePast: 'blew',
        pastParticiple: 'blown',
        translations: ['soffiare']
    },
    {
        base: 'bring',
        simplePast: 'brought',
        pastParticiple: 'brought',
        translations: ['portare con se', 'portare con sè']
    },
    {
        base: 'build',
        simplePast: 'built',
        pastParticiple: 'built',
        translations: ['costruire']
    },
    {
        base: 'catch',
        simplePast: 'caught',
        pastParticiple: 'caught',
        translations: ['prendere', 'afferrare'],
    },
    {
        base: 'choose',
        simplePast: 'chose',
        pastParticiple: 'chosen',
        translations: ['scegliere']
    },
    {
        base: 'feed',
        simplePast: 'fed',
        pastParticiple: 'fed',
        translations: ['dare da mangiare']
    },
    {
        base: 'grow',
        simplePast: 'grew',
        pastParticiple: 'grown',
        translations: ['crescere']
    },
    {
        base: 'hang',
        simplePast: 'hung',
        pastParticiple: 'hung',
        translations: ['appendere']
    },
    {
        base: 'hear',
        simplePast: 'heard',
        pastParticiple: 'heard',
        translations: ['sentire', 'sentire con le orecchie']
    },
    {
        base: 'hide',
        simplePast: 'hid',
        pastParticiple: 'hidden',
        translations: ['nascondere']
    },
    {
        base: 'hit',
        simplePast: 'hit',
        pastParticiple: 'hit',
        translations: ['colpire']
    },
    {
        base: 'hold',
        simplePast: 'held',
        pastParticiple: 'held',
        translations: ['tenere in mano']
    },
    {
        base: 'hurt',
        simplePast: 'hurt',
        pastParticiple: 'hurt',
        translations: ['farsi male']
    },
    {
        base: 'keep',
        simplePast: 'kept',
        pastParticiple: 'kept',
        translations: ['mantenere']
    },
];

const verbs3 = [
    {
        base: 'learn',
        simplePast: 'learnt',
        pastParticiple: 'learnt',
        translations: ['imparare']
    },
    {
        base: 'pay',
        simplePast: 'paid',
        pastParticiple: 'paid',
        translations: ['pagare']
    },
    {
        base: 'put',
        simplePast: 'put',
        pastParticiple: 'put',
        translations: ['mettere']
    },
    {
        base: 'ride',
        simplePast: 'rode',
        pastParticiple: 'ridden',
        translations: ['andare a cavallo', 'andare in bici', 'andare a cavallo, in bici']
    },
    {
        base: 'ring',
        simplePast: 'rang',
        pastParticiple: 'rung',
        translations: ['suonare il campanello']
    },
    {
        base: 'say',
        simplePast: 'said',
        pastParticiple: 'said',
        translations: ['dire']
    },
    {
        base: 'sell',
        simplePast: 'sold',
        pastParticiple: 'sold',
        translations: ['vendere']
    },
    {
        base: 'sing',
        simplePast: 'sang',
        pastParticiple: 'sung',
        translations: ['cantare']
    },
    {
        base: 'sit',
        simplePast: 'sat',
        pastParticiple: 'sat',
        translations: ['stare seduti']
    },
    {
        base: 'stand',
        simplePast: 'stood',
        pastParticiple: 'stood',
        translations: ['stare in piedi']
    },
    {
        base: 'spend',
        simplePast: 'spent',
        pastParticiple: 'spent',
        translations: ['trascorrere']
    },
    {
        base: 'steal',
        simplePast: 'stole',
        pastParticiple: 'stolen',
        translations: ['rubare']
    },
    {
        base: 'swim',
        simplePast: 'swam',
        pastParticiple: 'swum',
        translations: ['nuotare']
    },
    {
        base: 'take',
        simplePast: 'took',
        pastParticiple: 'taken',
        translations: ['prendere', 'portare']
    },
    {
        base: 'teach',
        simplePast: 'taught',
        pastParticiple: 'taught',
        translations: ['insegnare']
    },
    {
        base: 'tell',
        simplePast: 'told',
        pastParticiple: 'told',
        translations: ['dire', 'raccontare']
    },
    {
        base: 'throw',
        simplePast: 'threw',
        pastParticiple: 'thrown',
        translations: ['lanciare', 'gettare']
    },
    {
        base: 'understand',
        simplePast: 'understood',
        pastParticiple: 'understood',
        translations: ['capire']
    },
    {
        base: 'wake',
        simplePast: 'woke',
        pastParticiple: 'woken',
        translations: ['svegliarsi']
    },
    {
        base: 'win',
        simplePast: 'won',
        pastParticiple: 'won',
        translations: ['vincere']
    },
    {
        base: 'write',
        simplePast: 'wrote',
        pastParticiple: 'written',
        translations: ['scrivere']
    },
];

export const verbsMap: VerbsSet = {
    'Set 1 (30 verbi)': verbs,
    'Set 2 (18 verbi)': verbs2,
    'Set 3 (21 verbi)': verbs3,
    'Set 1 + Set 2': [...verbs, ...verbs2],
    'Set 2 + Set 3': [...verbs2, ...verbs3],
    'Tutti': [...verbs, ...verbs2, ...verbs3],
}