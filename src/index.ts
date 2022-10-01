import { renderSearchFormBlock } from './search-form'
import { renderSearchStubBlock } from './search-results'
import { renderUserBlock } from './user'
import { renderToast } from './lib'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Kurmagali', 1, "https://twitter-clone-nextjs-and-tailwindcss-ki2dsxe4n.vercel.app/posts/HSr1LX2swP3erAEpOn5G")
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})

class Book {
  name: string
  genre: string
  pageAmount: number
  constructor (name: string, genre: string, pageAmount:number) {
  this.name  = name
  this.genre = genre
  this.pageAmount = pageAmount
  }
  }
  const books = [
  new Book('Harry Potter', 'fantasy', 980),
  new Book('Lord of the Ring', 'fantasy', 1001),
  new Book('How to be productive', 'lifestyle', 500),
  new Book('Game of Thrones', 'fantasy', 999)
  ]
  function findSuitableBook (genre: string, pagesLimit: number) {
  return books.find((book) => {
  return book.genre === genre && book.pageAmount <= pagesLimit
  })
  }
  console.log(findSuitableBook('fantasy', 1000))
  console.log(findSuitableBook('fantasy', 1000))