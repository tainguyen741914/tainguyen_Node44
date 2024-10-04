# tạo DATABASE
CREATE DATABASE node44;
USE node44;
# tạo table
CREATE TABLE users(
user_id INT,
full_name VARCHAR(50),
email VARCHAR(50),
pass_word VARCHAR(255)
)
#  tạo data
INSERT INTO users (user_id, full_name, email, pass_word, age) VALUES
(1, 'John Doe', 'john.doe@example.com', 'password123', 28),
(2, 'Jane Smith', 'jane.smith@example.com', 'mypassword', 32),
(3, 'Michael Johnson', 'michael.j@example.com', 'pass456', 25),
(4, 'Emily Davis', 'emily.d@example.com', 'secret789', 30),
(5, 'William Brown', 'will.brown@example.com', 'brownpass', 35),
(6, 'Sophia Wilson', 'sophia.w@example.com', 'sophiapass', 27),
(7, 'James Garcia', 'james.g@example.com', 'garciapass', 40),
(8, 'Olivia Martinez', 'olivia.m@example.com', 'oliv1234', 22),
(9, 'Benjamin Lee', 'ben.lee@example.com', 'leeben2021', 29),
(10, 'Lucas Taylor', 'lucas.t@example.com', 'lucastaypass', 31),
(11, 'Isabella Harris', 'isabella.h@example.com', 'harrissec', 26),
(12, 'Mason Clark', 'mason.c@example.com', 'clarkpass', 33),
(13, 'Ava Lewis', 'ava.lewis@example.com', 'avalewpass', 24),
(14, 'Ethan Walker', 'ethan.w@example.com', 'walkersecure', 28),
(15, 'Mia Hall', 'mia.h@example.com', 'hallpass99', 37),
(16, 'Alexander Young', 'alex.young@example.com', 'youngpass456', 21),
(17, 'Charlotte King', 'charlotte.k@example.com', 'kingsecret', 38),
(18, 'Daniel Wright', 'daniel.w@example.com', 'wright123', 34),
(19, 'Grace Scott', 'grace.s@example.com', 'scott123', 29),
(20, 'Matthew Green', 'matt.green@example.com', 'greenpass', 27);
# tương  tác với data
# Query ( lấy dữ liệu )
# thêm , xóa , sửa
# Query :
SELECT * FROM users
SELECT full_name as 'Họ tên' from users

# tìm những người có tuổi tư 25-30 ( cách 1)
SELECT * from users
WHERE age <= 30 and age >=25

# tìm những người có tuổi tư 25-30 ( cách 2)
SELECT * from users
WHERE age BETWEEN 25 and 30

# filter những ngươi tên John
SELECT * from users
WHERE (full_name like '%John%') and (age BETWEEN 25 and 30)

# sắp xếp tuổi theo thứ tự giảm dần
SELECT * from users
ORDER BY age DESC
LIMIT 5

# thêm column tuổi cho table users
ALTER TABLE users
ADD COLUMN age INT

# đổi kiểu dữ liệu cho column full_name
ALTER TABLE users
MODIFY COLUMN full_name VARCHAR(255)

# thêm constraint ( ràng buộc) cho column
ALTER TABLE users
MODIFY COLUMN full_name VARCHAR(255) NOT NULL,
MODIFY COLUMN email VARCHAR(50) NOT NULL,
MODIFY COLUMN pass_word VARCHAR(255) NOT NULL

# thên khóa chính (primary key) cho column user_id
ALTER TABLE users
MODIFY COLUMN user_id INT PRIMARY KEY AUTO_INCREMENT

# update  data ( đã update thì không quay lại được)
UPDATE users
SET full_name = 'Tài Nguyễn'
WHERE user_id = 1 

SELECT * FROM users
WHERE user_id=1

# delete data
# hard delete - xóa hẳn data khỏi hệ thống
DELETE FROM users
WHERE user_id=2

# soft delete -> thêm flag is_deleted để không show data
ALTER TABLE users
ADD COLUMN is_deleted INT NOT NULL DEFAULT 1

# 1 số câu query nâng cao
# tìm những người có tuổi lớn nhất
# B1: tìm tuổi lớn nhất
# B2: Query những người có tuổi lớn nhất
SELECT * from users
WHERE age=(
SELECT age from users
ORDER BY age DESC
LIMIT 1
)