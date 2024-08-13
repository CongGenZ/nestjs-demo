import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { v4 as uuidv4 } from 'uuid';
// import { encryptId, decryptId } from './utils/crypto.util';
@Controller()
export class AppController {
  // getHello(): any {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private readonly appService: AppService) {}
  private books = [
    { id: uuidv4(), title: 'Book One', author: 'Author One' },
    { id: uuidv4(), title: 'Book Two', author: 'Author Two' },
  ];
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get()
  // getAllBooks() {
  //   return this.books.map((book) => ({
  //     ...book,
  //     id: encryptId(book.id), // Mã hóa ID trước khi trả về
  //   }));
  // }
  // @Get(':id')
  // getBookById(@Param('id') id: string) {
  //   const decryptedId = decryptId(id); // Giải mã ID từ tham số
  //   const book = this.books.find((book) => book.id === decryptedId);
  //   return book ? book : `Thông tin chi tiết sách với id: ${id}`;
  // }
  // @Post()
  // addBook(@Body() newBook: { title: string; author: string }) {
  //   const id = uuidv4();
  //   const book = { id, ...newBook };
  //   this.books.push(book);
  //   return {
  //     ...book,
  //     id: encryptId(book.id), // Mã hóa ID trước khi trả về
  //   };
  // }
  // @Delete(':id')
  // deleteBook(@Param('id') id: string) {
  //   const decryptedId = decryptId(id); // Giải mã ID từ tham số
  //   this.books = this.books.filter((book) => book.id !== decryptedId);
  //   return `Xóa sách với id: ${id}`;
  // }
}
