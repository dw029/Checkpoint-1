function createBook(id, title, author, price, rating) {

    const Book = {
        id: id,
        title: title,
        author: author,
        price: price,
        rating: new Array(),

        getPrice() {
            return this.price;
        },
        getInfo() {
            return this.title + " by " + this.author;
        },
        addRating(stars) {
            this.rating.push(stars);
        },
        getRating() {
            var totalstars = 0;
            for (var m of this.rating) {
                totalstars += m.length;
            }
            return (totalstars/this.rating.length);
        }
    };

    the_book = Object.create(Book);
    Object.assign(the_book, {id, title, author, price, rating: new Array()});
    return the_book;
}
