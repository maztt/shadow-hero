const optionControl = document.querySelector('#option-control')

const containerBox = document.querySelector('.container__box-shadow')
const containerText = document.querySelector('.container__text-shadow')
const containerImg = document.querySelector('.container__image-filter')


optionControl.addEventListener("change", (e) => {

  if (optionControl.value == 'textshadow') {
    
    containerText.classList.remove('display')
    containerImg.classList.add('display')
    containerBox.classList.add('display')


  } else if (optionControl.value == 'imagefilter') {

    containerImg.classList.remove('display')
    containerText.classList.add('display')
    containerBox.classList.add('display')

  } else {

    containerBox.classList.remove('display')
    containerText.classList.add('display')
    containerImg.classList.add('display')

  }

})