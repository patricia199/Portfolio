/**READ BOOK*/

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  
  function isBookRead(libro, title){
  
     let reversed = libro.reverse();
     
     for ( let book of reversed){
       if(book.title === title){
          return imprime(book);
        }
    }
            function imprime(book){
               if(book.isRead === book.isRead){
                 return book.isRead;
               }else if(book.isRead != book.isRead){
                 return false;
               };
            }
  
  }
  
  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false