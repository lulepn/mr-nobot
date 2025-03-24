

export function fix(txt: string): string {

    // nepomenik
    let out = txt.replaceAll(/(?:Predsedni(?:\p{L}{0,3})\s+)?Aleksand\p{L}{2,3}\s+Vu[čc]i[ćc]\p{L}{0,2}/gumi, replacer)

    // непоменик
    out = out.replaceAll(/(?:Председни(?:\p{L}{0,3})\s+)?Александ\p{L}{2,3}\s+Вучић\p{L}{0,2}/gumi, replacer)

    return out
}

function replacer(match: string, ...args: any[]): string {

    switch (match.toLowerCase()) {
        // Latinica
        case 'aleksandar vučić':
        case 'predsednik aleksandar vučić':
            return 'Nepomenik'

        case 'aleksandra vučića':
        case 'predsednika aleksandra vučića':
            return 'Nepomenika'

        case 'aleksandru vučiću':
        case 'predsedniku aleksandru vučiću':
            return 'Nepomeniku'

        case 'aleksandre vučiću':
        case 'predsedniče aleksandre vučiću':
            return 'Nepomeniče'

        case 'aleksandrom vučićem':
        case 'predsednikom aleksandrom vučićem':
            return 'Nepomenikom'

        // Ћирилица
        case 'александар вучић':
        case 'председник александар вучић':
            return 'Непоменик'

        case 'александра вучића':
        case 'председника александра вучића':
            return 'Непоменика'

        case 'александру вучићу':
        case 'председнику александру вучићу':
            return 'Непоменику'

        case 'александре вучићу':
        case 'председниче александре вучићу':
            return 'Непомениче'

        case 'александром вучићем':
        case 'председником александром вучићем':
            return 'Непомеником'
    }

    // If it's something we don't know, just skip it.
    return match
}

