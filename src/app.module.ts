import { Module } from '@nestjs/common';
import { UserModule } from './core/user/user.module';
import { PostModule } from './core/post/post.module';

@Module({
  imports: [UserModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
