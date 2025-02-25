-- Database: database_web_learning
CREATE DATABASE IF NOT EXISTS database_web_learning;
USE database_web_learning;

-- Bảng Users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') NOT NULL DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng Courses
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    cover_video VARCHAR(255),
    total_videos INT DEFAULT 0,
    total_tests INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng Lessons (Video bài học)
CREATE TABLE lessons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    video_url VARCHAR(255) NOT NULL,
    lesson_order INT NOT NULL,
    progress_percentage FLOAT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Bảng Sections (Phần trong khóa học)
CREATE TABLE sections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    section_order INT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Bảng Small Tests (Bài test nhỏ sau mỗi video)
CREATE TABLE small_tests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lesson_id INT NOT NULL,
    FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE
);

-- Bảng Big Tests (Bài test lớn sau mỗi phần trong khóa học)
CREATE TABLE big_tests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    section_id INT NOT NULL,
    FOREIGN KEY (section_id) REFERENCES sections(id) ON DELETE CASCADE
);

-- Bảng Questions (Câu hỏi trong bài test)
CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    test_id INT NOT NULL,
    question_text TEXT NOT NULL,
    type ENUM('small', 'big') NOT NULL,
    FOREIGN KEY (test_id) REFERENCES small_tests(id) ON DELETE CASCADE
);

-- Bảng Answers (Đáp án cho câu hỏi)
CREATE TABLE answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question_id INT NOT NULL,
    answer_text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);

-- Bảng User Progress (Theo dõi tiến trình học)
CREATE TABLE user_progress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    lesson_id INT,
    section_id INT,
    test_id INT,
    progress_percentage FLOAT DEFAULT 0,
    completed_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE,
    FOREIGN KEY (section_id) REFERENCES sections(id) ON DELETE CASCADE,
    FOREIGN KEY (test_id) REFERENCES questions(id) ON DELETE CASCADE
);
