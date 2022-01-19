//Blogovi

let blog1 = {
    title: "Osnovni HTML tagovi!",
    likes: 30,
    dislikes: 9
};

let blog2 = {
    title: "Osnovni CSS selektori!",
    likes: 70,
    dislikes: 39
};

let blog3 = {
    title: "Osnovni JS tipovi podataka!",
    likes: 50,
    dislikes: 129
};

let blog4 = {
    title: "React",
    likes: 150,
    dislikes: 20
};

let blog5 = {
    title: "Zavrsni projekat",
    likes: 250,
    dislikes: 40
}

//Korisnici

let user1 = {
    username: "DarkoSimic",
    age: 17,
    blogs: [blog1, blog2, blog3]
};

let user2 = {
    username: "JelenaMatejic",
    age: 27,
    blogs: [blog4, blog5]
};

//Niz korisnika

let users = [user1, user2];

// Ispisati imena onih autora koji imaju ispod 18 godina

let ispisImena = niz => {
    niz.forEach(objekat => {
        if (objekat.age < 18) {
            console.log(objekat.username);
        }
    });
}

ispisImena(users);

// Ispisati naslove onih blogova koji imaju više od 50 lajkova

let ispisBlogova = niz => {
    niz.forEach(user => {
        let userBlogs = user.blogs;
        userBlogs.forEach(blog => {
            if (blog.likes > 50) {
                console.log(blog.title);
            }
        });
    });
}
ispisBlogova(users);
    
//4. Ispisati sve blogove autora čiji je username ’JohnDoe’

let JohnDoe = niz => {
    niz.forEach(user => {
        if (user.username == "JohnDoe") {
            let userBlogs = user.blogs;
            userBlogs.forEach(blog => {
                console.log(blog.title);
            });
        }
    });
}

JohnDoe(users);

//5. Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

let lajkova100 = niz => {
    niz.forEach(user => {
        let userBlogs = user.blogs;
        let sumaLajkova = 0;
        userBlogs.forEach(blog => {
            sumaLajkova += blog.likes;
        });
        if (sumaLajkova > 100) {
            console.log(`Korisnik ${user.username} ima vise od 100 lajkova za blogove koje je napisao.`)
        }
    });
}

lajkova100(users)

//6. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

let prosek = niz => {
    sumaLajkova = 0;
    brojLajkova = 0;
    niz.forEach(user => {
        user.blogs.forEach(blog => {
            sumaLajkova += blog.likes;
        });
        brojLajkova += user.blogs.length;
    });
    return sumaLajkova / brojLajkova;
}

let iznadProseka = niz => {
    prosecanLajk = prosek(niz);
    niz.forEach(user => {
        user.blogs.forEach(blog => {
            if (blog.likes > prosecanLajk) {
                console.log(`Korisnik ${user.username} poseduje blog ${blog.title} koji ima lajkova iznad proseka.`)
            }
        });
    });
}


iznadProseka(users)

// //7. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena


let prosekLike_Dislike = niz => {
    sumaLajkova = 0;
    sumaDislajkova = 0;
    brojLajkova = 0;
    brojDislajkova = 0;
    niz.forEach(user => {
        user.blogs.forEach(blog => {
            sumaLajkova += blog.likes;
            sumaDislajkova += blog.dislikes;
        });
        brojLajkova += user.blogs.length;
        brojDislajkova += user.blogs.length;
    });
    return [sumaLajkova / brojLajkova, sumaDislajkova / brojDislajkova];
}

let iznad_ispodProseka = niz => {
    
    let [like, dislike] = prosekLike_Dislike(niz);
    let prosek = [like, dislike];
    niz.forEach(user => {
        user.blogs.forEach(blog => {
            if (blog.likes > prosek[0] && blog.dislikes < prosek[1]) {
                console.log(`Korisnik ${user.username} poseduje blog ${blog.title} koji ima lajkova iznad proseka i dislajkova ispod proseka.`)
            }
        });
    });
}


iznad_ispodProseka(users)