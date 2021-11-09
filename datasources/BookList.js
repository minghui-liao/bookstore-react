export default class BookList {
  bookList = [
    {
      "id": 1,
      "title": "Too Much Never Enough",
      "description": "description",
      "price": 16.80,
      "rating": 4,
      "imageUrl": "./too_much_never_enough.jpg",
    },
    {
      "id": 2,
      "title": "Where The Crawdads Sing",
      "description": "description",
      "price": 5.79,
      "rating": 4,
      "imageUrl": "./where_the_crawdads_sing.jpg",
    },
    {
      "id": 3,
      "title": "My First Learn to Write Workbook",
      "description": "description",
      "price": 5.58,
      "rating": 5,
      "imageUrl": "./My_First_Learn_to_Write_Workbook.jpg",
    },
    {
      "id": 4,
      "title": "Midnight Sun",
      "description": "description",
      "price": 16.79,
      "rating": 4,
      "imageUrl": "./Midnight_Sun.jpg",
    }
  ];

  getAll = () => this.bookList;

  searchByKeyword = (keyword) => this.bookList.filter(
    book => book.title.toLowerCase().includes(keyword.toLowerCase())
  );

  filterByRating = (rating) => this.bookList.filter(
    book => book.rating >= rating
  );

  filterByPrice = (price) => this.bookList.filter(
    book => book.price >= price
  );
}