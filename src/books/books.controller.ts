import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  NotFoundException,
} from '@nestjs/common';
import { createBookDTO } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { v4 as uuidv4 } from 'uuid';
@Controller('books')
export class BooksController {
  private books = [];
  @Get()
  getAllBooks() {
    return this.books;
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new NotFoundException('book not found');
    }
    return book;
  }
  @Post()
  create(@Body() createBookDTO: createBookDTO) {
    const newBook = {
      id: uuidv4(),
      ...createBookDTO,
    };
    this.books.push(newBook);
  }
  @Put(':id')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDTO: UpdateBookDto) {
    const BookIndex = this.books.findIndex((book) => book.id === id);
    if (!BookIndex) {
      throw new NotFoundException('Book not found');
    }
    const updatebook = {
      ...this.books[BookIndex],
      updateBookDTO,
    };
    this.books[BookIndex] = updatebook;
    return updatebook;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException('Book not found');
    }
    const deletedBook = this.books.splice(bookIndex, 1);
    return deletedBook;
  }
}
