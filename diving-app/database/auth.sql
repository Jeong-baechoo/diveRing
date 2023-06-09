# 권한 설정
grant all privileges on  *.* to 'root'@'%' identified by '1234';
delete from mysql.user where host="localhost" and user="root";
