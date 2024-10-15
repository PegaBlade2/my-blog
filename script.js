document.addEventListener('DOMContentLoaded', function() {
    // Array of HTML pages for random navigation
    const pages = [
        'placeholder.html',    // Pages to navigate to from root
        'introduction.html'
    ];

    // Array of HTML pages for random navigation within the Blogs folder
    const blogPages = [
        'Blogs/placeholder.html',
        'Blogs/introduction.html'
    ];

    // Function to navigate to a specific page
    function navigateToPage(page) {
        window.location.href = page;
    }

    // Attach click event listeners to buttons with class 'button'
    const buttonsByClass = document.querySelectorAll('.button');
    
    buttonsByClass.forEach(button => {
        button.addEventListener('click', function() {
            // Check if this button has a data-page attribute
            const page = this.getAttribute('data-page');
            if (page) {
                navigateToPage(page); // Navigate to the specified page
            }
        });
    });

    // Attach click event listener to buttons with ID 'button'
    const buttonsById = document.querySelectorAll('#button');
    
    buttonsById.forEach(button => {
        button.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page) {
                navigateToPage(page); // Navigate to the specified page
            }
        });
    });

    // Function for random navigation for random1
    function navigateToRandomBlogPage() {
        const randomBlogPage = blogPages[Math.floor(Math.random() * blogPages.length)];
        console.log('Navigating to random blog page:', randomBlogPage); // Debugging line
        navigateToPage(randomBlogPage); // Redirect to the randomly selected blog page
    }

    // Function for random navigation for random2
    function navigateToRandomPage() {
        const randomPage = pages[Math.floor(Math.random() * pages.length)];
        console.log('Navigating to random root page:', randomPage); // Debugging line
        navigateToPage(randomPage); // Redirect to the randomly selected root page
    }

    // Attach the random navigation function to the buttons, with conditional checks
    const random1Button = document.getElementById('random1');
    if (random1Button) {
        random1Button.addEventListener('click', navigateToRandomBlogPage);
    } else {
        console.warn('random1 button does not exist on this page.'); // Optional debug message
    }

    const random2Button = document.getElementById('random2');
    if (random2Button) {
        random2Button.addEventListener('click', navigateToRandomPage);
    } else {
        console.warn('random2 button does not exist on this page.'); // Optional debug message
    }
});
