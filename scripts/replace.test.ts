import { fix } from './replace'

describe('aleksandar vučić - nepomenik', () => {
    test('nominativ', () => {
        expect(
            fix('Aleksandar Vučić je završio u zatvoru.')).
            toBe('Nepomenik je završio u zatvoru.')
        expect(
            fix('Predsednik Aleksandar Vučić je u desetogodišnjoj poseti Zabeli.')).
            toBe('Nepomenik je u desetogodišnjoj poseti Zabeli.')
    })
    test('genitiv', () => {
        expect(
            fix('Stranka Aleksandra Vučića je sekta.')).
            toBe('Stranka Nepomenika je sekta.')
        expect(
            fix('Stranka predsednika Aleksandra Vučića je sekta.')).
            toBe('Stranka Nepomenika je sekta.')
    })
    test('dativ', () => {
        expect(
            fix('Dvadesetogodišnja presuda Aleksandru Vučiću')).
            toBe('Dvadesetogodišnja presuda Nepomeniku')
        expect(
            fix('Dvadesetogodišnja presuda Predsedniku Aleksandru Vučiću')).
            toBe('Dvadesetogodišnja presuda Nepomeniku')
    })
    test('akuzativ', () => {
        expect(
            fix('Vidimo Aleksandra Vučića iza rešetaka.')).
            toBe('Vidimo Nepomenika iza rešetaka.')
        expect(
            fix('Vidimo predsednika Aleksandra Vučića iza rešetaka.')).
            toBe('Vidimo Nepomenika iza rešetaka.')
    })
    test('vokativ', () => {
        expect(
            fix('Tišina tamo Aleksandre Vučiću')).
            toBe('Tišina tamo Nepomeniče')
        expect(
            fix('Tišina tamo predsedniče Aleksandre Vučiću')).
            toBe('Tišina tamo Nepomeniče')
    })
    test('instrumental', () => {
        expect(
            fix('Zajedno sa Aleksandrom Vučićem u zatvor ide i Siniša Mali')).
            toBe('Zajedno sa Nepomenikom u zatvor ide i Siniša Mali')
        expect(
            fix('Zajedno sa predsednikom Aleksandrom Vučićem u zatvor ide i Siniša Mali')).
            toBe('Zajedno sa Nepomenikom u zatvor ide i Siniša Mali')
    })
    test('lokativ', () => {
        expect(
            fix('Narodni zbor je rešio da više nema potrebe da se išta priča o Aleksandru Vučiću')).
            toBe('Narodni zbor je rešio da više nema potrebe da se išta priča o Nepomeniku')
        expect(
            fix('Narodni zbor je rešio da više nema potrebe da se išta priča o Predsedniku Aleksandru Vučiću')).
            toBe('Narodni zbor je rešio da više nema potrebe da se išta priča o Nepomeniku')
    })
})


describe('александар вучић - непоменик', () => {
    test('nominativ', () => {
        expect(
            fix('Александар Вучић је завршио у затвору')).
            toBe('Непоменик је завршио у затвору')
        expect(
            fix('Председник Александар Вучић је завршио у затвору')).
            toBe('Непоменик је завршио у затвору')
    })
    test('genitiv', () => {
        expect(
            fix('Странка Александра Вучића је секта')).
            toBe('Странка Непоменика је секта')
        expect(
            fix('Странка Председника Александра Вучића је секта')).
            toBe('Странка Непоменика је секта')
    })
    test('dativ', () => {
        expect(
            fix('Двадесетогодишња пресуда Александру Вучићу')).
            toBe('Двадесетогодишња пресуда Непоменику')
        expect(
            fix('Двадесетогодишња пресуда Председнику Александру Вучићу')).
            toBe('Двадесетогодишња пресуда Непоменику')
    })
    test('akuzativ', () => {
        expect(
            fix('Видимо Александра Вучића иза решетака')).
            toBe('Видимо Непоменика иза решетака')
        expect(
            fix('Видимо председника Александра Вучића иза решетака')).
            toBe('Видимо Непоменика иза решетака')
    })
    test('vokativ', () => {
        expect(
            fix('Тишина тамо Александре Вучићу')).
            toBe('Тишина тамо Непомениче')
        expect(
            fix('Тишина тамо председниче Александре Вучићу')).
            toBe('Тишина тамо Непомениче')
    })
    test('instrumental', () => {
        expect(
            fix('Заједно са Александром Вучићем у затвор иде и Синиша Мали')).
            toBe('Заједно са Непомеником у затвор иде и Синиша Мали')
        expect(
            fix('Заједно са председником Александром Вучићем у затвор иде и Синиша Мали')).
            toBe('Заједно са Непомеником у затвор иде и Синиша Мали')
    })
    test('lokativ', () => {
        expect(
            fix('Народни збор је решио да више нема потребе да се ишта прича о Александру Вучићу')).
            toBe('Народни збор је решио да више нема потребе да се ишта прича о Непоменику')
        expect(
            fix('Народни збор је решио да више нема потребе да се ишта прича о председнику Александру Вучићу')).
            toBe('Народни збор је решио да више нема потребе да се ишта прича о Непоменику')
    })
})