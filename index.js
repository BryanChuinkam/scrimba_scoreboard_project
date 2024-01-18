function increaseScore(ele) {
/*
  Function takes in element (button) that was clicked as argument
  Based off the id it will check what scoreboard the value is to be added to. 
  It check what value needs to be added by taking the last char of the ID and 
  converting it to a number. 

*/
  let eleID = ele.id

  if (eleID.includes('home')) {
    //get element
    let homeScoreEle = document.getElementById("home_score-p")

    //convert to number
    homeScoreVal = Number(homeScoreEle.textContent) 

    //calculate new value
    let newScore = homeScoreVal + Number(eleID.slice(-1))

    //apply newScore
    homeScoreEle.textContent = newScore
    
  } else {
        //get element
        let guestScoreEle = document.getElementById("guest_score-p")

        //convert to number
        guestScoreVal = Number(guestScoreEle.textContent) 
    
        //calculate new value
        let newScore = guestScoreVal + Number(eleID.slice(-1))
    
        //apply newScore
        guestScoreEle.textContent = newScore

  }

}


