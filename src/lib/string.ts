export function splitParagraph(
    text: string,
    options: {
        lang?: 'zh' | 'en';
        token_max_n?: number;
        token_min_n?: number;
        merge_len?: number;
        comma_split?: boolean;
        tokenize?: (text: string) => string[];
    } = {},
): string[] {
    const {
        lang = 'en',
        token_max_n = 80,
        token_min_n = 60,
        merge_len = 20,
        comma_split = false,
        tokenize = (str) => str.split(/\s+/),
    } = options;

    const calcUttLength = (_text: string): number => {
        if (lang === 'zh') {
            return _text.length;
        } else {
            return tokenize(_text).length;
        }
    };

    const shouldMerge = (_text: string): boolean => {
        if (lang === 'zh') {
            return _text.length < merge_len;
        } else {
            return tokenize(_text).length < merge_len;
        }
    };

    let pounc: string[];
    if (lang === 'zh') {
        pounc = ['。', '？', '！', '；', '：', '、', '.', '?', '!', ';'];
    } else {
        pounc = ['.', '?', '!', ';', ':'];
    }
    if (comma_split) {
        pounc.push('，', ',');
    }

    if (!pounc.includes(text[text.length - 1])) {
        if (lang === 'zh') {
            text += '。';
        } else {
            text += '.';
        }
    }

    let st = 0;
    const utts: string[] = [];
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (pounc.includes(c)) {
            if (text.substring(st, i).length > 0) {
                utts.push(text.substring(st, i) + c);
            }
            if (i + 1 < text.length && ['"', '”'].includes(text[i + 1])) {
                const tmp = utts.pop();
                if (tmp) {
                    utts.push(tmp + text[i + 1]);
                }
                st = i + 2;
            } else {
                st = i + 1;
            }
        }
    }

    const finalUtts: string[] = [];
    let curUtt = '';
    for (const utt of utts) {
        if (
            calcUttLength(curUtt + utt) > token_max_n &&
            calcUttLength(curUtt) > token_min_n
        ) {
            finalUtts.push(curUtt);
            curUtt = '';
        }
        curUtt += utt;
    }

    if (curUtt.length > 0) {
        if (shouldMerge(curUtt) && finalUtts.length !== 0) {
            finalUtts[finalUtts.length - 1] += curUtt;
        } else {
            finalUtts.push(curUtt);
        }
    }

    return finalUtts;
}

export const formatCurrency = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}