import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export default (): TypeOrmModuleOptions => {
  const type = process.env.DATABASE_TYPE == 'postgres' ? 'postgres' : 'sqlite'
  const port = +process.env.DATABASE_PORT ?? 5432
  return {
    name: 'default',
    type: type,
    host: process.env.DATABASE_HOST,
    port: port,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_USER_PASSWORD,
    database: process.env.DATABASE,
    // entities: ['**/**.entity{.ts,.js}'],
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ['database/migrations/*.js', 'database/migrations/*.ts'],
    synchronize: true,
  }
}