import "reflect-metadata"
import {DataSource} from "typeorm";
import {Employer} from "./models/employer";
import {Job} from "./models/job";
import {JobDetail} from "./models/jobDetail";
import {Post} from "./models/post";
import {User} from "./models/user";



export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: 'case-md5',
    synchronize: true,
    entities: [Employer,Job,JobDetail,Post,User]
})
