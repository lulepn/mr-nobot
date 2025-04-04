"use strict";
function replaceRecursively(element) {
    if (element.childNodes.length) {
        element.childNodes.forEach(child => replaceRecursively(child));
        return;
    }
    if (element.nodeType !== Node.TEXT_NODE) {
        return;
    }
    const txt = element.textContent;
    if (!txt) {
        return;
    }
    element.textContent = fix(txt);
}
// TODO: Duplicated functions now, fix.
function fix(txt) {
    // nepomenik
    let out = txt.replaceAll(/(?:Predsedni(?:\p{L}{0,3}(?:republike)?\s*(?:srbije)?)\s+)?(?:Aleksand\p{L}{2,3}\s+)?Vu[čc]i[ćc]\p{L}{0,2}/gumi, replacer);
    // непоменик
    out = out.replaceAll(/(?:Председни(?:\p{L}{0,3}(?:републике)?\s*(?:србије)?)\s+)?(?:Александ\p{L}{2,3}\s+)?Вучић\p{L}{0,2}/gumi, replacer);
    return out;
}
function replacer(match, ...args) {
    switch (match.toLowerCase()) {
        // Latinica
        case 'aleksandar vučić':
        case 'predsednik aleksandar vučić':
        case 'predsednik srbije aleksandar vučić':
        case 'predsednik republike srbije aleksandar vučić':
        case 'predsednik vučić':
            return getRandomNickname(1, false);
        case 'aleksandra vučića':
        case 'predsednika aleksandra vučića':
        case 'predsednika srbije aleksandra vučića':
        case 'predsednika republike srbije aleksandra vučića':
        case 'predsednika vučića':
            return getRandomNickname(2, false);
        case 'aleksandru vučiću':
        case 'predsedniku aleksandru vučiću':
        case 'predsedniku aleksandru vučiću':
        case 'predsedniku srbije aleksandru vučiću':
        case 'predsedniku republike srbije aleksandru vučiću':
        case 'predsedniku vučiću':
            return getRandomNickname(3, false);
        case 'aleksandre vučiću':
        case 'predsedniče aleksandre vučiću':
        case 'predsedniče srbije aleksandre vučiću':
        case 'predsedniče republike srbije aleksandre vučiću':
        case 'predsedniče vučiću':
            return getRandomNickname(4, false);
        case 'aleksandrom vučićem':
        case 'predsednikom aleksandrom vučićem':
        case 'predsednikom srbije aleksandrom vučićem':
        case 'predsednikom republike srbije aleksandrom vučićem':
        case 'predsednikom vučićem':
            return getRandomNickname(5, false);
        // Ћирилица
        case 'александар вучић':
        case 'председник александар вучић':
        case 'председник србије александар вучић':
        case 'председник републике србије александар вучић':
        case 'председник вучић':
            return getRandomNickname(1, true);
        case 'александра вучића':
        case 'председника александра вучића':
        case 'председника србије александра вучића':
        case 'председника републике србије александра вучића':
        case 'председника вучића':
            return getRandomNickname(2, true);
        case 'александру вучићу':
        case 'председнику александру вучићу':
        case 'председнику србије александру вучићу':
        case 'председнику републике србије александру вучићу':
        case 'председнику вучићу':
            return getRandomNickname(3, true);
        case 'александре вучићу':
        case 'председниче александре вучићу':
        case 'председниче србије александре вучићу':
        case 'председниче републике србије александре вучићу':
        case 'председниче вучићу':
            return getRandomNickname(4, true);
        case 'александром вучићем':
        case 'председником александром вучићем':
        case 'председником србије александром вучићем':
        case 'председником републике србије александром вучићем':
        case 'председникоm вучићем':
            return getRandomNickname(5, true);
    }
    // If it's something we don't know, just skip it.
    return match;
}

function getRandomNickname(padez, cyr) {
    const random = Math.floor(Math.random() * 5);
    if (random == 0) {
        if (padez == 1 && cyr == false)
            return 'Nepomenik'
        if (padez == 2 && cyr == false)
            return 'Nepomenika'
        if (padez == 3 && cyr == false)
            return 'Nepomeniku'
        if (padez == 4 && cyr == false)
            return 'Nepomeniče'
        if (padez == 5 && cyr == false)
            return 'Nepomenikom'
        if (padez == 1 && cyr == true)
            return 'Непоменик'
        if (padez == 2 && cyr == true)
            return 'Непоменика'
        if (padez == 3 && cyr == true)
            return 'Непоменику'
        if (padez == 4 && cyr == true)
            return 'Непомениче'
        if (padez == 5 && cyr == true)
            return 'Непомеником'
    }
    else if (random == 1) {
        if (padez == 1 && cyr == false)
            return 'Hulja'
        if (padez == 2 && cyr == false)
            return 'Hulju'
        if (padez == 3 && cyr == false)
            return 'Hulji'
        if (padez == 4 && cyr == false)
            return 'Huljo'
        if (padez == 5 && cyr == false)
            return 'Huljom'
        if (padez == 1 && cyr == true)
            return 'Хуља'
        if (padez == 2 && cyr == true)
            return 'Хуљу'
        if (padez == 3 && cyr == true)
            return 'Хуљи'
        if (padez == 4 && cyr == true)
            return 'Хуљо'
        if (padez == 5 && cyr == true)
            return 'Хуљом'
    }
    else if (random == 2) {
        if (padez == 1 && cyr == false)
            return 'Nenadležna predmetna institucija (mahom ceremonijalnih nadležnosti)'
        if (padez == 2 && cyr == false)
            return 'Nenadležnu predmetnu instituciju (mahom ceremonijalnih nadležnosti)'
        if (padez == 3 && cyr == false)
            return 'Nenadležnoj predmetnoj instituciji (mahom ceremonijalnih nadležnosti)'
        if (padez == 4 && cyr == false)
            return 'Nenadležna predmetna institucijo (mahom ceremonijalnih nadležnosti)'
        if (padez == 5 && cyr == false)
            return 'Nenadležnom predmetnom institucijom (mahom ceremonijalnih nadležnosti)'
        if (padez == 1 && cyr == true)
            return 'Ненадлежна предметна институција (махом церемонијалних надлежности)'
        if (padez == 2 && cyr == true)
            return 'Ненадлежну предметну институцију (махом церемонијалних надлежности)'
        if (padez == 3 && cyr == true)
            return 'Ненадлежној предметној институцији (махом церемонијалних надлежности)'
        if (padez == 4 && cyr == true)
            return 'Ненадлежна предметна институцијо (махом церемонијалних надлежности)'
        if (padez == 5 && cyr == true)
            return 'Ненадлежном предметном институцијом (махом церемонијалних надлежности)'
    }
    else if (random == 3) {
        if (padez == 1 && cyr == false)
            return 'Manje voljeni sin Angeline'
        if (padez == 2 && cyr == false)
            return 'Manje voljenog sina Angeline'
        if (padez == 3 && cyr == false)
            return 'Manje voljenom sinu Angeline'
        if (padez == 4 && cyr == false)
            return 'Manje voljeni sine Angeline'
        if (padez == 5 && cyr == false)
            return 'Manje voljenim sinom Angeline'
        if (padez == 1 && cyr == true)
            return 'Мање вољени син Ангелине'
        if (padez == 2 && cyr == true)
            return 'Мање вољеног сина Ангелине'
        if (padez == 3 && cyr == true)
            return 'Мање вољеном сину Ангелине'
        if (padez == 4 && cyr == true)
            return 'Мање вољени сине Ангелине'
        if (padez == 5 && cyr == true)
            return 'Мање вољеним сином Ангелине'
    }
    else if (random == 4) {
        if (padez == 1 && cyr == false)
            return 'Neandrej'
        if (padez == 2 && cyr == false)
            return 'Neandreja'
        if (padez == 3 && cyr == false)
            return 'Neandreju'
        if (padez == 4 && cyr == false)
            return 'Neandreje'
        if (padez == 5 && cyr == false)
            return 'Neandrejom'
        if (padez == 1 && cyr == true)
            return 'Неандреј'
        if (padez == 2 && cyr == true)
            return 'Неандреја'
        if (padez == 3 && cyr == true)
            return 'Неандреју'
        if (padez == 4 && cyr == true)
            return 'Неандреје'
        if (padez == 5 && cyr == true)
            return 'Неандрејом'
    }
}
replaceRecursively(document.body);
