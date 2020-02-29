
class Theme {
    
    // private imageCategory: string
    // private backgroundColor: string
    // private foregroundColor: string
    // private primaryColor: string
    // private secondaryColor: string
    // private neutralColor: string
    // private warningColor: string

    private gameManager: GameManager
    // private avatar: Avatar
    private whiteBackgroundColor: number
    private blackBackgroundColor: number

    constructor(gameManager) {
        this.gameManager = gameManager
        // this.avatar = new Avatar()
        this.blackBackgroundColor = 0
        this.whiteBackgroundColor = 255
    }

    // public get whiteBackgroundColor() {
    //     return this._whiteBackgroundColor
    // }

    /**
     * colorTheme 
     */
    public setColorTheme(theme: 'cartoon' | 'water' | 'trees') {
        if (theme == 'blackTheme') {
            this.blackBackgroundColor = "#7A7545"
            this.whiteBackgroundColor = "#7A7545"
            this.blackBackgroundColor = "#7A7545"
        }
        if (theme == 'whiteTheme') {
            return this.whiteBackgroundColor
        }
        return(50)
    }

 private backgroundUpdate(){
   
        if (this.gameManager.selectedAvatar == avatar.redAvatar){
            return (0)
        }  else if (this.gameManager.selectedAvatar == avatar.blueAvatar){
            return (color('#99CCFF'))
        }  else if (this.gameManager.selectedAvatar == avatar.greenAvatar){
            return (color('#9ACD32'))
        }  else{  
            return (25)
        }
    }

    private textFillUpdate(){
        if (this.selectedAvatar == avatar.redAvatar){
            return ('red')
        }  else if (this.selectedAvatar == avatar.blueAvatar){
            return ('blue')
        }  else if (this.selectedAvatar == avatar.greenAvatar){
            return ('green')
        }  else{  
            return ('white')
        }
    }


}