
class Theme {
    
    public whiteBackgroundColor: number
    public blackBackgroundColor: number
    private gameManager: GameManager

    constructor() {

        this.blackBackgroundColor = 0
        this.whiteBackgroundColor = 255
      
    }

    /**
     * colorTheme 
     */
    colorTheme(theme: string) {
        if (theme == 'blackTheme') {
            return this.blackBackgroundColor
        }
        if (theme == 'whiteTheme') {
            return this.whiteBackgroundColor
        }
        return(50)
    }

}