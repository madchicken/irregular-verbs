export type VerbFields = 'base' | 'translation' | 'pastParticiple' | 'simplePast';
export const VERB_FIELDS: VerbFields[] = ['base', 'translation', 'pastParticiple', 'simplePast'];

export interface Verb {
    base: string;
    simplePast: string;
    pastParticiple: string;
    translation: string;
    altTranslation? : string;
    fixedField?: VerbFields;
}

export const verbs: Verb[] = [
    {
        base: 'read',
        simplePast: 'read',
        pastParticiple: 'read',
        translation: 'leggere'
    },
    {
        base: 'go',
        simplePast: 'went',
        pastParticiple: 'gone',
        translation: 'andare'
    },
    {
        base: 'do',
        simplePast: 'did',
        pastParticiple: 'done',
        translation: 'fare'
    },
    {
        base: 'see',
        simplePast: 'saw',
        pastParticiple: 'seen',
        translation: 'vedere'
    },
    {
        base: 'drink',
        simplePast: 'drank',
        pastParticiple: 'drunk',
        translation: 'bere'
    },
    {
        base: 'leave',
        simplePast: 'left',
        pastParticiple: 'left',
        translation: 'partire',
        altTranslation: 'lasciare'
    },
    {
        base: 'get',
        simplePast: 'got',
        pastParticiple: 'got',
        translation: 'ottenere'
    },
    {
        base: 'drive',
        simplePast: 'drove',
        pastParticiple: 'driven',
        translation: 'guidare'
    },
    {
        base: 'become',
        simplePast: 'became',
        pastParticiple: 'become',
        translation: 'diventare'
    },
    {
        base: 'break',
        simplePast: 'broke',
        pastParticiple: 'broken',
        translation: 'rompere'
    },
    {
        base: 'come',
        simplePast: 'came',
        pastParticiple: 'come',
        translation: 'venire'
    },
    {
        base: 'eat',
        simplePast: 'ate',
        pastParticiple: 'eaten',
        translation: 'mangiare'
    },
    {
        base: 'fall',
        simplePast: 'fell',
        pastParticiple: 'fallen',
        translation: 'cadere'
    },
    {
        base: 'feel',
        simplePast: 'felt',
        pastParticiple: 'felt',
        translation: 'provare una sensazione'
    },
    {
        base: 'know',
        simplePast: 'knew',
        pastParticiple: 'known',
        translation: 'sapere',
        altTranslation: 'conoscere'
    },
    {
        base: 'lose',
        simplePast: 'lost',
        pastParticiple: 'lost',
        translation: 'perdere'
    },
    {
        base: 'meet',
        simplePast: 'met',
        pastParticiple: 'met',
        translation: 'incontrare'
    },
    {
        base: 'run',
        simplePast: 'ran',
        pastParticiple: 'run',
        translation: 'correre'
    },
    {
        base: 'sleep',
        simplePast: 'slept',
        pastParticiple: 'slept',
        translation: 'dormire'
    },
    {
        base: 'speak',
        simplePast: 'spoke',
        pastParticiple: 'spoken',
        translation: 'parlare'
    },
    {
        base: 'buy',
        simplePast: 'bought',
        pastParticiple: 'bought',
        translation: 'comprare'
    },
    {
        base: 'cut',
        simplePast: 'cut',
        pastParticiple: 'cut',
        translation: 'tagliare'
    },
    {
        base: 'find',
        simplePast: 'found',
        pastParticiple: 'found',
        translation: 'trovare'
    },
    {
        base: 'fly',
        simplePast: 'flew',
        pastParticiple: 'flown',
        translation: 'volare'
    },
    {
        base: 'forget',
        simplePast: 'forgot',
        pastParticiple: 'forgotten',
        translation: 'dimenticare'
    },
    {
        base: 'make',
        simplePast: 'made',
        pastParticiple: 'made',
        translation: 'fare con le mani'
    },
    {
        base: 'send',
        simplePast: 'sent',
        pastParticiple: 'sent',
        translation: 'spedire'
    },
    {
        base: 'think',
        simplePast: 'thought',
        pastParticiple: 'thought',
        translation: 'pensare'
    },
    {
        base: 'wear',
        simplePast: 'wore',
        pastParticiple: 'worn',
        translation: 'indossare'
    },
    {
        base: 'give',
        simplePast: 'gave',
        pastParticiple: 'given',
        translation: 'dare'
    },
];
