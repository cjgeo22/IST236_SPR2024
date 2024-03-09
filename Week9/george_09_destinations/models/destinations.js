class Destination {
  constructor(id, countryId, name, visitCost, foundedYear, rating, imageUrl, desc) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.visitCost = visitCost;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.imageUrl = imageUrl;
    this.desc = desc;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Avg. Cost to Visit: ${this.visitCost}, Avg. Rating: ${this.rating}`;
  }
}

export default Destination;
