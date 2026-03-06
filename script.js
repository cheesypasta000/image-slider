// Image Slider Script
//
let images = [
  // These are the URLs of the images to be displayed in the slider
  "https://images.unsplash.com/photo-1549693578-d683be217e58",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
];

// Initialize the current index to 0, which will keep track of the currently displayed image
let currentIndex = 0;

// Get the image element from the HTML where the slider images will be displayed
let sliderImage = document.getElementById("sliderImage");

// Function to change the slide // SLIDER
function changeSlide() {
    // Add the fade class to the image to trigger the fade-out effect
  sliderImage.classList.add("fade");

  // Use setTimeout to delay the execution of the code that changes the image source and removes the fade class
  setTimeout(function () {
    // Increment the current index to move to the next image
    currentIndex++;

    // If the current index exceeds the number of images, reset it to 0 to loop back to the first image
    if (currentIndex >= images.length) {
        // Reset the current index to 0 to loop back to the first image
      currentIndex = 0;
    }
 // Update the source of the slider image to the new image based on the current index
    sliderImage.src = images[currentIndex];
    // Remove the fade class to trigger the fade-in effect for the new image
    sliderImage.classList.remove("fade");

  }, 400); // The delay of 400 milliseconds allows the fade-out effect to complete before changing the image and starting the fade-in effect
}

/* auto slider every 3 seconds */

setInterval(changeSlide, 3000);
