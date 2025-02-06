AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Black Hole Radiation (Hawking Radiation)",
    cardImage: "https://th.bing.com/th/id/R.65e9a30007e481d877a9e25e1919453f?rik=VGiMJn9o7BzEJQ&riu=http%3a%2f%2fwww.perfectspacetime.com%2fuploads%2f1%2f3%2f9%2f1%2f139199255%2f1-ontxlmd3chdq-zd9s-ev8w_orig.jpeg&ehk=oQGsVaA1gDUhsBdCN4CUGpO6oUHAOdS0AUjQ236X87Y%3d&risl=&pid=ImgRaw&r=0assets/images/experience-page/flipkart.jpg",
    place: "Theoretical Physics",
    time: "(1974)",
    desp: "<li>Proposed that black holes emit radiation due to quantum effects near the event horizon.</li> <li>Revolutionized understanding of black hole thermodynamics.</li>",
  },
  {
    title: "Singularity Theorems",
    cardImage: "https://4.bp.blogspot.com/-y-MyzhJYWRc/UdKONwU6uFI/AAAAAAAABeM/rQg8SFwdN1Y/s527/Singularity+theorems.PNG",
    place: "Collaboration with Roger Penrose",
    time: "(1970)",
    desp: "<li>Demonstrated that singularities are an inevitable feature of general relativity.</li> <li>Provided a mathematical foundation for the Big Bang theory.</li>",
  },
  {
    title: "No-Boundary Proposal",
    cardImage: "https://www.cinemazed.be/sites/default/files/styles/video_still/public/stills/o/thenoboundaryproposal-3843.png?itok=S7aWHWpk",
    place: "Quantum Cosmology",
    time: "(1983)",
    desp: "<li>Suggested that the universe has no initial singularity and no boundaries in time.</li> <li>Formulated with physicist James Hartle.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Presidential Medal of Freedom",
    cardImage: "https://people.com/thmb/INBM5a3Cm5w2L7ykKU-RRygTqU8=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(715x0:717x2)/hawking-obama-1-2000-1-54235e5228d043109d212ed1a361a62b.jpg",
    description:
      "Awarded in 2009 by U.S. President Barack Obama for contributions to theoretical physics.",
  },
  {
    title: "Copley Medal",
    cardImage: "https://th.bing.com/th/id/R.45732549b13f4dca344f61449cbb32fa?rik=3sveChIRk2JCAg&riu=http%3a%2f%2fwww.indesciences.com%2fwp-content%2fuploads%2f2020%2f06%2fStephen-Hawking-Medalla-734x479.jpg&ehk=MIF2oR098v8oiQkAjlLhe1AhOZdohEurd%2b6ppdlNDcE%3d&risl=&pid=ImgRaw&r=0",
    description:
      "Awarded by the Royal Society in 2006 for outstanding achievements in science.",
  },
  {
    title: "Fundamental Physics Prize",
    cardImage: "https://breakthroughprize.org/Uploads/photo610.jpg",
    description:
      "Received in 2012 for lifetime contributions to theoretical physics and black hole science.",
  },
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "A Brief History of Time",
    subtitle: "Bestselling Science Book",
    image: "https://pictures.abebooks.com/inventory/30861395989.jpg",
    desp: "Published in 1988, explaining complex physics concepts for general audiences.",
    href: "https://en.wikipedia.org/wiki/A_Brief_History_of_Time",
  },
  {
    title: "The Grand Design",
    subtitle: "Exploring the Universe",
    image: "https://th.bing.com/th/id/OIP.xfiJiD9Gzv37yr4mugeIOgHaHa?rs=1&pid=ImgDetMain",
    desp: "Written with Leonard Mlodinow, discussing the nature of the universe and multiverse theories.",
    href: "https://en.wikipedia.org/wiki/The_Grand_Design_(book)",
  },
  {
    title: "Black Holes and Baby Universes",
    subtitle: "Collection of Essays",
    image: "https://cdn2.penguin.com.au/covers/original/9780857503572.jpg",
    desp: "A collection of Hawking’s thoughts on black holes, time travel, and the cosmos.",
    href: "https://en.wikipedia.org/wiki/Black_Holes_and_Baby_Universes_and_Other_Essays",
  },
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
