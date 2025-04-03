
function replaceRecursively(element: ChildNode) {
    
    if (element.childNodes.length) {
        element.childNodes.forEach(
            child => replaceRecursively(child)
        )

        return
    }

    if (element.nodeType !== Node.TEXT_NODE) {
        return
    }

    const txt = element.textContent
    if (!txt) {
        return
    }

    
    element.textContent = fix(txt)
}


// TODO: Duplicated functions now, fix.

function fix(txt: string): string {

    // nepomenik
    let out = txt.replaceAll(/(?:Predsedni(?:\p{L}{0,3}(?:republike)?\s*(?:srbije)?)\s+)?(?:Aleksand\p{L}{2,3}\s+)?Vu[čc]i[ćc]\p{L}{0,2}/gumi, replacer)

    // непоменик
    out = out.replaceAll(/(?:Председни(?:\p{L}{0,3}(?:републике)?\s*(?:србије)?)\s+)?(?:Александ\p{L}{2,3}\s+)?Вучић\p{L}{0,2}/gumi, replacer)

    return out
}

function replacer(match: string, ...args: any[]): string {

    switch (match.toLowerCase()) {
        // Latinica
        case 'aleksandar vučić':
        case 'predsednik aleksandar vučić':
        case 'predsednik srbije aleksandar vučić':
        case 'predsednik republike srbije aleksandar vučić':
        case 'predsednik vučić':
            return 'Nepomenik'

        case 'aleksandra vučića':
        case 'predsednika aleksandra vučića':
        case 'predsednika srbije aleksandra vučića':
        case 'predsednika republike srbije aleksandra vučića':
        case 'predsednika vučića':
            return 'Nepomenika'

        case 'aleksandru vučiću':
        case 'predsedniku aleksandru vučiću':
        case 'predsedniku aleksandru vučiću':
        case 'predsedniku srbije aleksandru vučiću':
        case 'predsedniku republike srbije aleksandru vučiću':
        case 'predsedniku vučiću':
            return 'Nepomeniku'

        case 'aleksandre vučiću':
        case 'predsedniče aleksandre vučiću':
        case 'predsedniče srbije aleksandre vučiću':
        case 'predsedniče republike srbije aleksandre vučiću':
        case 'predsedniče vučiću':
            return 'Nepomeniče'

        case 'aleksandrom vučićem':
        case 'predsednikom aleksandrom vučićem':
        case 'predsednikom srbije aleksandrom vučićem':
        case 'predsednikom republike srbije aleksandrom vučićem':
        case 'predsednikom vučićem':
            return 'Nepomenikom'

        // Ћирилица
        case 'александар вучић':
        case 'председник александар вучић':
        case 'председник србије александар вучић':
        case 'председник републике србије александар вучић':
        case 'председник вучић':
            return 'Непоменик'

        case 'александра вучића':
        case 'председника александра вучића':
        case 'председника србије александра вучића':
        case 'председника републике србије александра вучића':
        case 'председника вучића':
            return 'Непоменика'

        case 'александру вучићу':
        case 'председнику александру вучићу':
        case 'председнику србије александру вучићу':
        case 'председнику републике србије александру вучићу':
        case 'председнику вучићу':
            return 'Непоменику'

        case 'александре вучићу':
        case 'председниче александре вучићу':
        case 'председниче србије александре вучићу':
        case 'председниче републике србије александре вучићу':
        case 'председниче вучићу':
            return 'Непомениче'

        case 'александром вучићем':
        case 'председником александром вучићем':
        case 'председником србије александром вучићем':
        case 'председником републике србије александром вучићем':
        case 'председникоm вучићем':
            return 'Непомеником'
    }

    // If it's something we don't know, just skip it.
    return match
}




replaceRecursively(document.body)