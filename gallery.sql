


-- DATABASE NAME: gallery_weekend_challenge

CREATE TABLE gallery_items (
	id SERIAL PRIMARY KEY,
	path text,
	description text,
	likes integer
);

INSERT INTO gallery_items (path, description, likes)
VALUES ( 'images/pic_one.jpeg', 'My dog Pal... Looking for treats.', 56 ),
	   ( 'images/pic_two.jpeg', 'My wife and I spent her birthday in Hawaii.', 30 ),
       ( 'images/pic_four.jpeg', 'They are best friends.', 12 ),
       ( 'images/pic_five.jpeg', 'Pal LOVES walks at the lake!', 20 ),
   	   ( 'images/pic_six.jpeg', 'A beautiful fall day, celebrating a friend.', 21 );
