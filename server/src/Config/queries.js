const queries = {
    SELECT : {
        GetUserByEmail:     "SELECT users.* FROM users WHERE users.email = ?",
        GetUserById:        "SELECT * FROM users  WHERE users.id = ?",
        GetUserByUsername:  "SELECT users.* FROM users WHERE users.username = ?",
        GetUserByOmni:      "SELECT users.* FROM users WHERE users.omni_id = ?",
        GetUserByToken:     "SELECT * FROM users WHERE verif_token = ?",
        CheckEditUsername:  "SELECT username from users where username = ? AND id != ?",
        CheckEditEmail:     "SELECT email from users where email = ? AND id != ?",
        GetComments:        "SELECT content, firstname, username, lastname, image FROM comments,users WHERE imdb = ? \
                            AND comments.user_id = users.id",
    },
    INSERT : {
        AddUser:            'INSERT INTO users (lastname, firstname, username, email, password,image,omni_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        insertComment:      "INSERT INTO comments (user_id, imdb, content) VALUES (?, ?, ?)",
    },
    UPDATE : {
        Update:             'UPDATE users SET name = ?, email = ?, sex = ? WHERE id = ?',
        UpdateToken:        'UPDATE users SET verif_token = ? WHERE email = ?',
        ResetPassword:      'UPDATE users SET password = ? WHERE verif_token = ?',
        Confirmed:          'UPDATE users SET confirmed = 1 WHERE email = ?',
        notConfirmed:       'UPDATE users SET confirmed = 0 WHERE email = ?',
        UpdateProfile:      "UPDATE users SET firstname = ?, lastname = ?, username = ?, email = ?, langue = ? WHERE id = ?",
        UpdateImage:        "UPDATE users SET image = ? WHERE id = ?",
        UpdatePassword:     "UPDATE users SET password = ? WHERE id = ?",
    },
    DELETE : {
       
    },
}

module.exports = queries;