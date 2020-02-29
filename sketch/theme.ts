
class Theme {

    private gameManager: GameManager
    private i: number
    private lightBlue: p5.color 
    private limeGreen: p5.color

    constructor(gameManager) {
        this.lightBlue = color('#99CCFF')
        this.limeGreen = color('#9ACD32')
        this.gameManager = gameManager
        this.blackBackgroundColor = 0
        this.whiteBackgroundColor = 255
        this.i = 0
    }

  /** Runs every frame update. Changes background color based on integer i. */
 private backgroundUpdate(){
        if (this.i == 0){
            return (0)
        }  else if (this.i == 1){
            return (this.lightBlue)
        }  else if (this.i == 2){
            return (this.limeGreen)
        }  else{  
            return (25)
        }
    }

   /** Runs every frame update. Changes text color based on integer i. */
    private textFillUpdate(){
        if (this.i == 0){
            return ('red')
        }  else if (this.i == 1){
            return ('blue')
        }  else if (this.i == 2){
            return ('green')
        }  else{  
            return ('white')
        }
    }

 /** Runs every time button "Change theme" is pressed. */
    private changeTheme(){
       this.i++
       if (this.i == 3){
           this.i = 0
       }
    }
}