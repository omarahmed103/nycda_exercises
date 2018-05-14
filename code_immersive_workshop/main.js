// an array of image file names on the server
const pics = ['han0.jpg', 'han1.jpg', 'han2.jpg', 'han3.jpg', 'han4.jpg']
// 'han5.jpg', 'han6.jpg',  'han7.jpg',
// "tang0.jpg","tang1.jpg", "tang2.jpg", "tang3.jpg", "tang4.jpg","tang5.jpg","tang6.jpg",
// 'song0.jpg'];

//import the one and only div on the page
var slideshow = document.getElementById('slideshow');

// make a big div to hold the big pic
var bigPicDiv = document.createElement('div');
bigPicDiv.id = "bigPicDiv";

// output the div to the page (inside "divvy")
slideshow.appendChild(bigPicDiv);

// make a starter image for the big pic div
const bigPic = new Image();
bigPic.src = "http://www.codeimmersive.com/images/chinese-porcelain/han0.jpg";

// output the image to
bigPicDiv.appendChild(bigPic);


//make a tall skinny div for thumbs
const thumbDiv = document.createElement('div');
thumbDiv.id = "thumbDiv";
slideshow.appendChild(thumbDiv);

const thumbPic = new Image();
// thumbPic.src = "http://www.codeimmersive.com/images/chinese-porcelain/han0.jpg";
// thumbDiv.appendChild(thumbPic);

// loop through the pics array
// each time through make another image
for(let i = 0; i < pics.length; i++){

  // make a thumb
  let thumbPic = new Image();

  // thumb div
  thumbPic.src = "http://www.codeimmersive.com/images/chinese-porcelain/" + pics[i];
  thumbDiv.appendChild(thumbPic);

  // make the thumbs clickable

} // end loop here ----

thumbDiv.addEventListener('click', swapPic);

function swapPic() {
  // what happens when user clicks thumb pic
  // event.target = " thinkg that got clicked on the image"
  bigPic.src = event.target.src; // copy the bigPic src and paste it here

}
