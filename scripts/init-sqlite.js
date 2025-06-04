const Database = require('better-sqlite3');
const db = new Database('career-recommend-service/db/jobs.db');

db.exec(`
CREATE TABLE IF NOT EXISTS jobs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  work_environment TEXT,
  required_education TEXT,
  required_certificates TEXT,
  required_skills TEXT,
  personality_traits TEXT,
  education_cost TEXT,
  certificate_cost TEXT,
  employment_path TEXT,
  application_timing TEXT,
  salary TEXT,
  career_salary TEXT,
  employment_rate TEXT,
  growth TEXT
);
`);

console.log('SQLite 테이블 생성 완료!');
db.close();