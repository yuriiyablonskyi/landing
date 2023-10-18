const LIST = [
  {
    title: "Artistic Posters with Adorable Kittens",
    description: "Decorate your home with amazing posters featuring cute kittens. High-quality graphics and vibrant colors will create an atmosphere of warmth and joy.",
    src: "https://loremflickr.com/320/240?random=1"
  },
  {
    title: "Cat Collection in Hats",
    description: "A collectible series of cat photos wearing various hats. From Victorian-era headwear to modern styles, we have cats for every occasion.",
    src: "https://loremflickr.com/320/240?random=2"
  },
  {
    title: "Vector Cat Art",
    description: "Modern art representations of cats in vector format. Perfect for designers and cat enthusiasts.",
    src: "https://loremflickr.com/320/240?random=3"
  },
  {
    title: "Paintings of Artist Cats",
    description: "Discover how cats can be artists too! Our paintings showcase cats creating artistic masterpieces.",
    src: "https://loremflickr.com/320/240?random=4"
  },
  {
    title: "Traveling Cat Photography",
    description: "Travel the world through our collection of photos featuring globe-trotting cats in stunning destinations.",
    src: "https://loremflickr.com/320/240?random=5"
  },
  {
    title: "Whimsical Cat Portraits",
    description: "Elevate your home decor with whimsical cat portraits that capture the charming and playful nature of feline friends.",
    src: "https://loremflickr.com/320/240?random=6"
  },
  {
    title: "Cats in Vintage Attire",
    description: "Step back in time with our collection of cats dressed in vintage clothing. Perfect for those who appreciate retro charm.",
    src: "https://loremflickr.com/320/240?random=7"
  },
  {
    title: "Cat-themed Home Decor",
    description: "Give your space a feline touch with our cat-themed home decor items. Choose from cushions, rugs, and more to cozy up your home.",
    src: "https://loremflickr.com/320/240?random=8"
  },
  {
    title: "Cat Lovers' Mug Collection",
    description: "Sip your favorite beverages from our cat lover's mug collection. Each mug features a unique cat design that will make you smile.",
    src: "https://loremflickr.com/320/240?random=9"
  },
  {
    title: "Kitten Cuties Stickers",
    description: "Add a touch of cuteness to your belongings with our Kitten Cuties sticker collection. Perfect for laptops, water bottles, and more.",
    src: "https://loremflickr.com/320/240?random=10"
  },
  {
    title: "Catnip-Infused Cat Toys",
    description: "Treat your feline friend to hours of play with our catnip-infused cat toys. Watch them pounce, bat, and purr in delight.",
    src: "https://loremflickr.com/320/240?random=11"
  },
  {
    title: "Cats of the World Calendar",
    description: "Stay organized while celebrating global feline diversity with our 'Cats of the World' calendar. Each month showcases a different cat breed.",
    src: "https://loremflickr.com/320/240?random=12"
  },
  {
    title: "Cat Lover's Fashion Accessories",
    description: "Complete your look with our cat lover's fashion accessories, including cat-themed scarves, jewelry, and handbags.",
    src: "https://loremflickr.com/320/240?random=13"
  },
  {
    title: "Cat Books and Literary Gifts",
    description: "Explore our collection of cat-themed books and literary gifts for the bookworms who adore their furry companions.",
    src: "https://loremflickr.com/320/240?random=14"
  },
  {
    title: "Cat Yoga Apparel",
    description: "Find inner peace and relaxation with our cat yoga apparel. Discover unique yoga mats, leggings, and more.",
    src: "https://loremflickr.com/320/240?random=15"
  },
  {
    title: "Kittens in Teacups Art Print",
    description: "Add a touch of whimsy to your space with our 'Kittens in Teacups' art print. It's the perfect blend of charm and nostalgia.",
    src: "https://loremflickr.com/320/240?random=16"
  },
  {
    title: "Cat Cafe Wall Clocks",
    description: "Keep track of time in style with our cat cafe-themed wall clocks. The purrfect addition to any cat lover's decor.",
    src: "https://loremflickr.com/320/240?random=17"
  },
  {
    title: "Custom Cat Portraits",
    description: "Turn your beloved feline into a work of art with our custom cat portrait services. A one-of-a-kind keepsake for cat owners.",
    src: "https://loremflickr.com/320/240?random=18"
  },
  {
    title: "Cat Lover's Tech Accessories",
    description: "Personalize your gadgets with our cat lover's tech accessories, including phone cases and laptop sleeves.",
    src: "https://loremflickr.com/320/240?random=19"
  },
  {
    title: "Kitty Couture Fashion",
    description: "Elevate your fashion game with our Kitty Couture collection. Discover stylish clothing and accessories inspired by elegant felines.",
    src: "https://loremflickr.com/320/240?random=20"
  }
]

const btnLogin = document.getElementById('login')
const closeModalBtn = document.getElementById('close')
const modalAuth = document.querySelector('.authorization')
const toggleBtn = document.querySelector('.toggle')
const listWrapper = document.querySelector('.list')
const navMenu = document.querySelector('.nav')

const handleOpenModal = () => {
  modalAuth.classList.add('active')
  removeEventListener('click', handleOpenModal)
}

const handleCloseModal = () => {
  modalAuth.classList.remove('active')
  removeEventListener('click', handleCloseModal)
}

const handleToggleMenu = () => {
  toggleBtn.classList.toggle('active')
  navMenu.classList.toggle('active')
}

const createElement = (element, className) => {
  const el = document.createElement(element)
  el.classList.add(className)
  return el
}

const content = LIST.map(({ title, description, src }) => {
  const itemEl = createElement('li', 'list__item')

  const imgEl = createElement('img', 'list__img')
  imgEl.src = src
  imgEl.alt = 'cat'

  const titleEl = createElement('h3', 'list__title')
  titleEl.textContent = title

  const descriptionEl = document.createElement('p', 'list__desc')
  descriptionEl.textContent = description

  itemEl.append(imgEl, titleEl, descriptionEl)
  listWrapper.append(itemEl)
})

btnLogin.addEventListener('click', handleOpenModal)
closeModalBtn.addEventListener('click', handleCloseModal)
toggleBtn.addEventListener('click', handleToggleMenu)


