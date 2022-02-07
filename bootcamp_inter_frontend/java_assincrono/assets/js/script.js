const BASE_URL = 'https://api.thecatapi.com/v1/images/search/'
const catBtn = document.getElementById('change-cat')

const GET_CATS = async () => {
  let url = ''

  try {
    const data = await fetch(BASE_URL)
    const json = await data.json()
    url = json[0].url
  } catch (e) {
    console.log(e.message)
  }
  return url
}

const loadImg = async () => {
  const catImg = document.getElementById('cat')
  catImg.src = await GET_CATS()
}

catBtn.addEventListener('click', loadImg)

loadImg()
