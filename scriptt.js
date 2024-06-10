document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('nav a[data-section]');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const sectionToShow = event.target.getAttribute('data-section');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the selected section
            document.getElementById(sectionToShow).style.display = 'block';
        });
    });

    // Initially show the home section
    document.getElementById('home').style.display = 'block';
});
// Function to fetch dog images
function fetchDogs() {
    const apiUrl = 'https://freetestapi.com/api/v1/dogs';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayDogImages(data);
        })
        .catch(error => {
            console.error('Error fetching dog data:', error);
        });
}
// Function to display dog images in the gallery
function displayDogImages(dogs) {
    const gallery = document.querySelector('#dogs .gallery');
    gallery.innerHTML = ''; // Clear previous images
    
    // Adjust parsing according to the actual structure of the API response
    dogs.forEach(dog => {
        const imageUrl = dog.imageUrl; // Assuming the API response has an "imageUrl" field
        const name = dog.name; // Assuming the API response has a "name" field
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = name;
        gallery.appendChild(img);



        
    });
}


                       
                       


