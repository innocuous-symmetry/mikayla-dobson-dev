INSERT INTO music (name, shortDescription, longDescription, pathToEntry) VALUES (
    'Jisei',
    'My first major undertaking as a singer-songwriter',
    'Released in October 2020',
    'Jisei'
);

INSERT INTO tags (name) VALUES
(
    'indie-rock'
),
(
    'alternative'
),
(
    'guitar'
),
(
    'cello'
);

INSERT INTO music_tags (music_id, tag_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4);
