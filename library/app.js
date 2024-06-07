class Media {
  constructor(title, isCheckedOut = false, ratings = []) {
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(newCheckedOut) {
    this._isCheckedOut = newCheckedOut;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    const sum = this.ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    return sum / this.ratings.length;
  }
  addRating(rating) {
    this.ratings.push(rating);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this.author = author;
    this.pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this.director = director;
    this.runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book(
  "A Short History of Nearly Everything",
  "Bill Bryson",
  544
);
