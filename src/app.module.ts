import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
// import { AppController } from './app.controller';

// import { AppService } from './app.service';

@Module({
  imports: [BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
