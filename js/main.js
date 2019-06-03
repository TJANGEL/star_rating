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

// Form Elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Init product
let product;

// Product select change
productSelect.addEventListener('change', e => {
  product = e.target.value;
  // enable rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

// Rating Control change
ratingControl.addEventListener('blur', e => {
  const rating = e.target.value;

  // Confirm rating <= 5
  if (rating > 5) {
    alert('Only Rate 1 - 5');
    return;
  }

  // change rating
  ratings[product] = rating;

  getRatings();
});

// Get Ratings
function getRatings() {
  for (let rating in ratings) {
    // Get Percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round((starPercentage / 10) * 10)}%`;

    // Set width of stars-inner to percentage
    document.querySelector(
      `.${rating} .stars-inner`
    ).style.width = starPercentageRounded;

    // Add Number Rating
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}
