const container = document.querySelector('.hero')

const rain = () => {

    let j = 0
    while(j <= 7){
      
      let gout = document.createElement('i')
	  let x = (innerWidth) * Math.random()/5
      let time = 1 * Math.random()
      gout.style.animationDuration = time + 's'
      gout.style.left = x + 'px'
      container.appendChild(gout)
      j++
    }
}

rain()