/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Hawking Radiation: The Black Hole Paradox",
    authors: "Stephen Hawking",
    conferences: "Nature & Physical Review D, 1974",
    researchYr: 1974,
    citebox: "popup1",
    image: "https://www.perfectspacetime.com/uploads/1/3/9/1/139199255/2bcj3hn_orig.png", // Ensure you have a Hawking-themed image here
    citation: {
      vancouver:
        "Hawking, S. W. (1974). Black hole explosions? Nature, 248, 30–31.",
    },
    abstract:
      "In this groundbreaking work, Hawking proposed that black holes are not entirely black but emit radiation due to quantum effects near the event horizon—a phenomenon now known as Hawking Radiation.",
    absbox: "absPopup1",
  },

  {
    title: "Singularity Theorems in Cosmology",
    authors: "Stephen Hawking & Roger Penrose",
    conferences: "Proc. Roy. Soc. Lond. A, 1970",
    researchYr: 1970,
    citebox: "popup2",
    image: "https://th.bing.com/th/id/OIP.DA7IZeuj5knxTK24rh2NGgHaFZ?rs=1&pid=ImgDetMain", // Replace with an appropriate image
    citation: {
      vancouver:
        "Penrose, R., & Hawking, S. W. (1970). The singularities of gravitational collapse and cosmology. Proc. Roy. Soc. Lond. A, 314, 529–548.",
    },
    abstract:
      "In collaboration with Roger Penrose, Hawking formulated the singularity theorems which fundamentally altered our understanding of black holes and the origin of the universe under general relativity.",
    absbox: "absPopup2",
  },

  {
    title: "The No-Boundary Proposal",
    authors: "Stephen Hawking & James Hartle",
    conferences: "Physical Review D, 1983",
    researchYr: 1983,
    citebox: "popup3",
    image: "https://th.bing.com/th/id/OIP.0GfHBTDeqVnvhD3dYZyTBwAAAA?rs=1&pid=ImgDetMain", // Update with an image relevant to the proposal
    citation: {
      vancouver:
        "Hartle, J. B., & Hawking, S. W. (1983). Wave function of the Universe. Physical Review D, 28(12), 2960–2975.",
    },
    abstract:
      "The no-boundary proposal suggests that the universe is finite yet unbounded, eliminating the need for a singular beginning. This revolutionary idea has had a profound impact on quantum cosmology.",
    absbox: "absPopup3",
  },

  {
    title: "Exploring the Information Paradox",
    authors: "Stephen Hawking",
    conferences: "Various Lectures & Publications, 1970s–2000s",
    researchYr: 2005,
    citebox: "popup4",
    image: "https://i.ytimg.com/vi/6s-Ji3Mywt4/maxresdefault.jpg", // Replace with an image symbolizing the paradox
    citation: {
      vancouver:
        "Hawking, S. W. (2005). Information loss in black holes. Physical Review D, 72(8), 084013.",
    },
    abstract:
      "Addressing one of the most perplexing puzzles in theoretical physics, Hawking’s work on the black hole information paradox has spurred extensive debate and research into the nature of quantum gravity.",
    absbox: "absPopup4",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
