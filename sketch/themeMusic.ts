// let buttonPunk: p5.Element
// let buttonMetal: p5.Element
// let buttonPop: p5.Element
// let buttonBlues: p5.Element

let sel: any

class MusicChoice {

    public createSelector() {
        sel = createSelect()
        sel.position(10, 10)
        sel.size(150, 50)
        sel.style('font-size', '18px')
        sel.option('silence')
        sel.option('punk')
        sel.option('metal')
        sel.option('pop')
        sel.option('blues')
        sel.changed(this.selectMusic)
    }

    private selectMusic() {
        if (sel.value() === 'punk') {
            punk.play()
            popp.stop()
            metal.stop()
            blues.stop()
        } else if (sel.value() === 'pop') {
            popp.play()
            punk.stop()
            metal.stop()
            blues.stop()
        } else if (sel.value() === 'metal') {
            metal.play()
            punk.stop()
            blues.stop()
            popp.stop()
        } else if (sel.value() === 'blues') {
            blues.play()
            popp.stop()
            punk.stop()
            metal.stop()
        } else if (sel.value() === 'silence') {
            popp.stop()
            punk.stop()
            metal.stop()
            blues.stop()
        }
    }
}
