// Initial ratings
const ratings = {
  sony: 4.7,
  samsung: 4.2,
  vizio: 3.7,
  panasonic: 2.5,
  phillips: 2.1
};

// Total Stars
const starsTotal = 5;

// Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

// Get Ratings
function getRatings() {
  for (let rating in ratings) {
    // Get Percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round((starPercentage / 10) * 10)}%`;

    console.log(starPercentageRounded);

    //   Set width of stars-inner to percentage
    document.querySelector(
      `.${rating}`.stars - inner
    ).style.width = starPercentageRounded;
  }
}
