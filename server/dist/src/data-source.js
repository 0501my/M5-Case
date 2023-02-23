"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const employer_1 = require("./models/employer");
const job_1 = require("./models/job");
const jobDetail_1 = require("./models/jobDetail");
const post_1 = require("./models/post");
const user_1 = require("./models/user");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: 'case-md5',
    synchronize: true,
    entities: [employer_1.Employer, job_1.Job, jobDetail_1.JobDetail, post_1.Post, user_1.User]
});
//# sourceMappingURL=data-source.js.map
