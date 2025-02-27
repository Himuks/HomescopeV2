document.addEventListener('DOMContentLoaded', function() {
    const listings = [
                {id: 1, bhk: 2, rent: "₹12,000", size: "900", floor: "Ground", areaType: "Super", location: "Ganj", furnished: "Yes", tenant: "Family", phone: "+919876543210"},
                {id: 2, bhk: 3, rent: "₹18,000", size: "1500", floor: "1-1 of 2", areaType: "Good", location: "Ganj", furnished: "No", tenant: "Both", phone: "+918765432109"},
                {id: 3, bhk: 1, rent: "₹8,000", size: "600", floor: "Ground", areaType: "Normal", location: "Ganj", furnished: "Yes", tenant: "Bachelor", phone: "+917654321098"},
                {id: 4, bhk: 2, rent: "₹10,000", size: "1000", floor: "1-1 of 1", areaType: "Moderate", location: "Nehru Colony", furnished: "No", tenant: "Both", phone: "+916543210987"},
                {id: 5, bhk: 3, rent: "₹15,000", size: "1400", floor: "1-1 of 3", areaType: "Normal", location: "Nehru Colony", furnished: "Yes", tenant: "Family", phone: "+915432109876"},
                {id: 6, bhk: 1, rent: "₹7,000", size: "500", floor: "Ground", areaType: "Moderate", location: "Nehru Colony", furnished: "No", tenant: "Bachelor", phone: "+914321098765"},
                {id: 7, bhk: 2, rent: "₹9,000", size: "950", floor: "1-1 of 2", areaType: "Moderate", location: "Railway Station", furnished: "No", tenant: "Family", phone: "+913210987654"},
                {id: 8, bhk: 3, rent: "₹20,000", size: "1700", floor: "1-1 of 3", areaType: "Good", location: "Railway Station", furnished: "Yes", tenant: "Both", phone: "+912109876543"},
                {id: 9, bhk: 1, rent: "₹7,500", size: "650", floor: "Ground", areaType: "Normal", location: "Railway Station", furnished: "Yes", tenant: "Bachelor", phone: "+911098765432"},
                {id: 10, bhk: 2, rent: "₹12,000", size: "1100", floor: "1-1 of 2", areaType: "Moderate", location: "Mandi Road", furnished: "No", tenant: "Family", phone: "+919087654321"},
                {id: 11, bhk: 1, rent: "₹8,500", size: "750", floor: "Ground", areaType: "Normal", location: "Mandi Road", furnished: "Yes", tenant: "Both", phone: "+918076543219"},
                {id: 12, bhk: 3, rent: "₹17,000", size: "1600", floor: "1-1 of 3", areaType: "Moderate", location: "Mandi Road", furnished: "No", tenant: "Family", phone: "+917065432198"},
                {id: 13, bhk: 2, rent: "₹14,000", size: "1300", floor: "Ground", areaType: "Super", location: "Chanakyapuri", furnished: "Yes", tenant: "Family", phone: "+916054321987"},
                {id: 14, bhk: 3, rent: "₹20,000", size: "1800", floor: "1-1 of 2", areaType: "Good", location: "Chanakyapuri", furnished: "No", tenant: "Both", phone: "+915043219876"},
                {id: 15, bhk: 1, rent: "₹9,500", size: "700", floor: "Ground", areaType: "Good", location: "Chanakyapuri", furnished: "Yes", tenant: "Bachelor", phone: "+914032198765"},
                {id: 16, bhk: 2, rent: "₹15,000", size: "1200", floor: "1-1 of 2", areaType: "Super", location: "Cresent", furnished: "No", tenant: "Family", phone: "+913021987654"},
                {id: 17, bhk: 3, rent: "₹22,000", size: "2000", floor: "1-1 of 3", areaType: "Good", location: "Cresent", furnished: "Yes", tenant: "Both", phone: "+912019876543"},
                {id: 18, bhk: 1, rent: "₹10,000", size: "800", floor: "Ground", areaType: "Super", location: "Cresent", furnished: "No", tenant: "Bachelor", phone: "+911234567890"},
                {id: 19, bhk: 2, rent: "₹13,000", size: "1350", floor: "1-1 of 2", areaType: "Moderate", location: "Mandi Road", furnished: "No", tenant: "Both", phone: "+919345678901"},
                {id: 20, bhk: 3, rent: "₹24,000", size: "2200", floor: "1-1 of 3", areaType: "Super", location: "Cresent", furnished: "Yes", tenant: "Family", phone: "+918456789012"},
                {id: 21, bhk: 1, rent: "₹8,000", size: "550", floor: "Ground", areaType: "Normal", location: "Railway Station", furnished: "Yes", tenant: "Bachelor", phone: "+917567890123"},
                {id: 22, bhk: 3, rent: "₹21,000", size: "1900", floor: "1-1 of 2", areaType: "Super", location: "Ganj", furnished: "No", tenant: "Both", phone: "+916678901234"},
                {id: 23, bhk: 2, rent: "₹11,000", size: "1150", floor: "Ground", areaType: "Normal", location: "Nehru Colony", furnished: "Yes", tenant: "Family", phone: "+915789012345"},
                {id: 24, bhk: 1, rent: "₹9,000", size: "720", floor: "1-1 of 2", areaType: "Good", location: "Chanakyapuri", furnished: "Yes", tenant: "Bachelor", phone: "+914890123456"},
                {id: 25, bhk: 3, rent: "₹26,000", size: "2100", floor: "1-1 of 3", areaType: "Super", location: "Cresent", furnished: "No", tenant: "Both", phone: "+913901234567"},
                {id: 26, bhk: 2, rent: "₹12,000", size: "900", floor: "Ground", areaType: "Super", location: "Ganj", furnished: "Yes", tenant: "Family", phone: "+912190384756"},
                {id: 27, bhk: 3, rent: "₹18,000", size: "1500", floor: "1-1 of 2", areaType: "Good", location: "Ganj", furnished: "No", tenant: "Both", phone: "+913289574610"},
                {id: 28, bhk: 1, rent: "₹8,000", size: "600", floor: "Ground", areaType: "Normal", location: "Ganj", furnished: "Yes", tenant: "Bachelor", phone: "+914378659201"},
                {id: 29, bhk: 2, rent: "₹10,000", size: "1000", floor: "1-1 of 1", areaType: "Moderate", location: "Nehru Colony", furnished: "No", tenant: "Both", phone: "+915467928130"},
                {id: 30, bhk: 3, rent: "₹15,000", size: "1400", floor: "1-1 of 3", areaType: "Normal", location: "Nehru Colony", furnished: "Yes", tenant: "Family", phone: "+916598017423"},
                {id: 31, bhk: 1, rent: "₹7,000", size: "500", floor: "Ground", areaType: "Moderate", location: "Nehru Colony", furnished: "No", tenant: "Bachelor", phone: "+917609123548"},
                {id: 32, bhk: 2, rent: "₹9,000", size: "950", floor: "1-1 of 2", areaType: "Moderate", location: "Railway Station", furnished: "No", tenant: "Family", phone: "+918710234659"},
                {id: 33, bhk: 3, rent: "₹20,000", size: "1700", floor: "1-1 of 3", areaType: "Good", location: "Railway Station", furnished: "Yes", tenant: "Both", phone: "+919821345760"},
                {id: 34, bhk: 1, rent: "₹7,500", size: "650", floor: "Ground", areaType: "Normal", location: "Railway Station", furnished: "Yes", tenant: "Bachelor", phone: "+911932456871"},
                {id: 35, bhk: 2, rent: "₹12,000", size: "1100", floor: "1-1 of 2", areaType: "Moderate", location: "Mandi Road", furnished: "No", tenant: "Family", phone: "+912043567982"},
                {id: 36, bhk: 1, rent: "₹8,500", size: "750", floor: "Ground", areaType: "Normal", location: "Mandi Road", furnished: "Yes", tenant: "Both", phone: "+913154678093"},
                {id: 37, bhk: 3, rent: "₹17,000", size: "1600", floor: "1-1 of 3", areaType: "Moderate", location: "Mandi Road", furnished: "No", tenant: "Family", phone: "+914265789104"},
                {id: 38, bhk: 2, rent: "₹14,000", size: "1300", floor: "Ground", areaType: "Super", location: "Chanakyapuri", furnished: "Yes", tenant: "Family", phone: "+915376890215"},
                {id: 39, bhk: 3, rent: "₹20,000", size: "1800", floor: "1-1 of 2", areaType: "Good", location: "Chanakyapuri", furnished: "No", tenant: "Both", phone: "+916487901326"},
                {id: 40, bhk: 1, rent: "₹9,500", size: "700", floor: "Ground", areaType: "Good", location: "Chanakyapuri", furnished: "Yes", tenant: "Bachelor", phone: "+917598012437"},
                {id: 41, bhk: 2, rent: "₹15,000", size: "1200", floor: "1-1 of 2", areaType: "Super", location: "Cresent", furnished: "No", tenant: "Family", phone: "+918609123548"},
                {id: 42, bhk: 3, rent: "₹22,000", size: "2000", floor: "1-1 of 3", areaType: "Good", location: "Cresent", furnished: "Yes", tenant: "Both", phone: "+919710234659"},
                {id: 43, bhk: 1, rent: "₹10,000", size: "800", floor: "Ground", areaType: "Super", location: "Cresent", furnished: "No", tenant: "Bachelor", phone: "+911821345760"},
                {id: 44, bhk: 2, rent: "₹13,000", size: "1350", floor: "1-1 of 2", areaType: "Moderate", location: "Mandi Road", furnished: "No", tenant: "Family", phone: "+912932456871"},
                {id: 45, bhk: 3, rent: "₹24,000", size: "2200", floor: "1-1 of 3", areaType: "Super", location: "Cresent", furnished: "Yes", tenant: "Family", phone: "+913043567982"},
                {id: 46, bhk: 1, rent: "₹8,000", size: "550", floor: "Ground", areaType: "Normal", location: "Railway Station", furnished: "Yes", tenant: "Bachelor", phone: "+914154678093"},
                {id: 47, bhk: 3, rent: "₹21,000", size: "1900", floor: "1-1 of 2", areaType: "Super", location: "Ganj", furnished: "No", tenant: "Both", phone: "+915265789104"},
                {id: 48, bhk: 2, rent: "₹11,000", size: "1150", floor: "Ground", areaType: "Normal", location: "Nehru Colony", furnished: "Yes", tenant: "Family", phone: "+916376890215"},
                {id: 49, bhk: 1, rent: "₹9,000", size: "720", floor: "1-1 of 2", areaType: "Good", location: "Chanakyapuri", furnished: "Yes", tenant: "Bachelor", phone: "+917487901326"},
                {id: 50, bhk: 3, rent: "₹26,000", size: "2100", floor: "1-1 of 3", areaType: "Super", location: "Cresent", furnished: "No", tenant: "Both", phone: "+918598012437"},
            {id: 51, bhk: 2, rent: "₹13,000", size: "1050", floor: "1-1 of 2", areaType: "Moderate", location: "Mandi Road", furnished: "Yes", tenant: "Family", phone: "+919609123548"},
            {id: 52, bhk: 1, rent: "₹8,500", size: "680", floor: "Ground", areaType: "Normal", location: "Nehru Colony", furnished: "No", tenant: "Bachelor", phone: "+911710234659"},
            {id: 53, bhk: 3, rent: "₹24,000", size: "1950", floor: "1-1 of 3", areaType: "Good", location: "Railway Station", furnished: "Yes", tenant: "Both", phone: "+912821345760"},
            {id: 54, bhk: 2, rent: "₹12,000", size: "920", floor: "1-1 of 2", areaType: "Moderate", location: "Ganj", furnished: "No", tenant: "Family", phone: "+913932456871"},
            {id: 55, bhk: 1, rent: "₹7,500", size: "580", floor: "Ground", areaType: "Normal", location: "Chanakyapuri", furnished: "Yes", tenant: "Bachelor", phone: "+914043567982"},
            {id: 56, bhk: 3, rent: "₹25,000", size: "2000", floor: "1-1 of 3", areaType: "Super", location: "Cresent", furnished: "No", tenant: "Both", phone: "+915154678093"},
            {id: 57, bhk: 2, rent: "₹11,000", size: "1000", floor: "1-1 of 2", areaType: "Moderate", location: "Nehru Colony", furnished: "Yes", tenant: "Family", phone: "+916265789104"},
            {id: 58, bhk: 1, rent: "₹8,000", size: "650", floor: "Ground", areaType: "Normal", location: "Railway Station", furnished: "No", tenant: "Bachelor", phone: "+917376890215"},
            {id: 59, bhk: 3, rent: "₹23,000", size: "1850", floor: "1-1 of 3", areaType: "Good", location: "Ganj", furnished: "Yes", tenant: "Both", phone: "+918487901326"},
            {id: 60, bhk: 2, rent: "₹13,000", size: "1100", floor: "1-1 of 2", areaType: "Moderate", location: "Mandi Road", furnished: "No", tenant: "Family", phone: "+919598012437"},
            {id: 61, bhk: 1, rent: "₹9,000", size: "700", floor: "Ground", areaType: "Normal", location: "Chanakyapuri", furnished: "Yes", tenant: "Bachelor", phone: "+911609123548"},
            {id: 62, bhk: 3, rent: "₹26,000", size: "2050", floor: "1-1 of 3", areaType: "Super", location: "Cresent", furnished: "No", tenant: "Both", phone: "+912710234659"},
            {id: 63, bhk: 2, rent: "₹12,500", size: "1020", floor: "1-1 of 2", areaType: "Moderate", location: "Mandi Road", furnished: "Yes", tenant: "Family", phone: "+913821345760"},
            {id: 64, bhk: 1, rent: "₹8,500", size: "680", floor: "Ground", areaType: "Normal", location: "Nehru Colony", furnished: "No", tenant: "Bachelor", phone: "+914932456871"},
            {id: 65, bhk: 3, rent: "₹24,000", size: "1900", floor: "1-1 of 3", areaType: "Good", location: "Railway Station", furnished: "Yes", tenant: "Both", phone: "+915043567982"},
            {id: 66, bhk: 2, rent: "₹11,500", size: "950", floor: "1-1 of 2", areaType: "Moderate", location: "Ganj", furnished: "No", tenant: "Family", phone: "+916154678093"},
            {id: 67, bhk: 1, rent: "₹8,000", size: "620", floor: "Ground", areaType: "Normal", location: "Chanakyapuri", furnished: "Yes", tenant: "Bachelor", phone: "+917265789104"},
            {id: 68, bhk: 3, rent: "₹25,000", size: "2000", floor: "1-1 of 3", areaType: "Super", location: "Cresent", furnished: "No", tenant: "Both", phone: "+918376890215"},
            {id: 69, bhk: 2, rent: "₹12,000", size: "1000", floor: "1-1 of 2", areaType: "Moderate", location: "Nehru Colony", furnished: "Yes", tenant: "Family", phone: "+919487901326"},
            {id: 70, bhk: 1, rent: "₹8,500", size: "680", floor: "Ground", areaType: "Normal", location: "Railway Station", furnished: "No", tenant: "Bachelor", phone: "+911598012437"},
            {id: 71, bhk: 3, rent: "₹23,000", size: "1850", floor: "1-1 of 3", areaType: "Good", location: "Ganj", furnished: "Yes", tenant: "Both", phone: "+912609123548"},
            {id: 72, bhk: 2, rent: "₹13,000", size: "1100", floor: "1-1 of 2", areaType: "Moderate", location: "Mandi Road", furnished: "No", tenant: "Family", phone: "+913710234659"},
            {id: 73, bhk: 1, rent: "₹9,000", size: "700", floor: "Ground", areaType: "Normal", location: "Chanakyapuri", furnished: "Yes", tenant: "Bachelor", phone: "+914821345760"},
            {id: 74, bhk: 3, rent: "₹26,000", size: "2050", floor: "1-1 of 3", areaType: "Super", location: "Cresent", furnished: "No", tenant: "Both", phone: "+915932456871"},
            {id: 75, bhk: 2, rent: "₹12,500", size: "1020", floor: "1-1 of 2", areaType: "Moderate", location: "Mandi Road", furnished: "Yes", tenant: "Family", phone: "+916043567982"},
            {id: 76, bhk: 1, rent: "₹8,500", size: "680", floor: "Ground", areaType: "Normal", location: "Nehru Colony", furnished: "No", tenant: "Bachelor", phone: "+917154678093"},
            {id: 77, bhk: 3, rent: "₹24,000", size: "1900", floor: "1-1 of 3", areaType: "Good", location: "Railway Station", furnished: "Yes", tenant: "Both", phone: "+918265789104"},
            {id: 78, bhk: 2, rent: "₹11,500", size: "950", floor: "1-1 of 2", areaType: "Moderate", location: "Ganj", furnished: "No", tenant: "Family", phone: "+919376890215"},
            {id: 79, bhk: 1, rent: "₹8,000", size: "620", floor: "Ground", areaType: "Normal", location: "Chanakyapuri", furnished: "Yes", tenant: "Bachelor", phone: "+911487901326"},
            {id: 80, bhk: 3, rent: "₹25,000", size: "2000", floor: "1-1 of 3", areaType: "Super", location: "Cresent", furnished: "No", tenant: "Both", phone: "+912598012437"},
            {id: 81, bhk: 2, rent: "₹12,000", size: "1000", floor: "1-1 of 2", areaType: "Moderate", location: "Nehru Colony", furnished: "Yes", tenant: "Family", phone: "+913609123548"},
            {id: 82, bhk: 1, rent: "₹8,500", size: "680", floor: "Ground", areaType: "Normal", location: "Railway Station", furnished: "No", tenant: "Bachelor", phone: "+914710234659"},
            {id: 83, bhk: 3, rent: "₹23,000", size: "1850", floor: "1-1 of 3", areaType: "Good", location: "Ganj", furnished: "Yes", tenant: "Both", phone: "+915821345760"},
            {id: 84, bhk: 2, rent: "₹13,000", size: "1100", floor: "1-1 of 2", areaType: "Moderate", location: "Mandi Road", furnished: "No", tenant: "Family", phone: "+916932456871"},
            {id: 85, bhk: 1, rent: "₹9,000", size: "700", floor: "Ground", areaType: "Normal", location: "Chanakyapuri", furnished: "Yes", tenant: "Bachelor", phone: "+917043567982"},
            {id: 86, bhk: 3, rent: "₹26,000", size: "2050", floor: "1-1 of 3", areaType: "Super", location: "Cresent", furnished: "No", tenant: "Both", phone: "+918154678093"},
            ];

    // Function to generate a unique random phone number
    function generateUniquePhoneNumber(existingNumbers) {
        let randomNumber;
        do {
            randomNumber = "+91" + Math.floor(1000000000 + Math.random() * 9000000000);
        } while (existingNumbers.includes(randomNumber));
        return randomNumber;
    }

    //Create a set of existing Phone Numbers
    const existingPhoneNumbers = new Set();
    listings.forEach(listing => {
        existingPhoneNumbers.add(listing.phone)
    })


    // Add random unique phone numbers to listings, only if they do not have the proper +91 format
    listings.forEach(listing => {
        if (!/^\+91\d{10}$/.test(listing.phone)) {  //Regular expression to check phone number format
            listing.phone = generateUniquePhoneNumber(existingPhoneNumbers);
            existingPhoneNumbers.add(listing.phone); //Add to Set, to check for uniqueness in the next iteration.
        }
    });


    const listingsPerPage = 5; // Number of listings per page
    let currentPage = 1; // Current page number

    const listingsContainer = document.getElementById('listings-container');
    const detailsSection = document.getElementById('details-section');
    const detailsContainer = document.getElementById('details-container');
    const backToListingsButton = document.getElementById('back-to-listings');
    const paginationContainer = document.getElementById('pagination-container');

    const urlParams = new URLSearchParams(window.location.search);
    const listingId = urlParams.get('id');

    if (listingId) {
        const listing = listings.find(l => l.id == listingId);

        if (listing) {
            // Hide listings section and show details section
            document.getElementById('listings').style.display = 'none';
            detailsSection.style.display = 'block';

            // Populate details section
            detailsContainer.innerHTML = `
                <div class="listing-info">
                    <h3>${listing.bhk}BHK in ${listing.location}</h3>
                    <p><strong>Rent:</strong> ${listing.rent}/month</p>
                    <p><strong>Size:</strong> ${listing.size} sq. ft.</p>
                    <p><strong>Floor:</strong> ${listing.floor}</p>
                    <p><strong>Area Type:</strong> ${listing.areaType}</p>
                    <p><strong>Furnished:</strong> ${listing.furnished}</p>
                    <p><strong>Tenant Preference:</strong> ${listing.tenant}</p>
                    <p><strong>Location:</strong> ${listing.location}</p>
                    <p><strong>Phone:</strong> ${listing.phone}</p>
                </div>
                <div class="listing-image">
                    <img src="listingimage1.jpg" alt="Property Image">
                </div>
            `;
        }
    }


    backToListingsButton.addEventListener('click', () => {
        detailsSection.style.display = 'none';
        document.getElementById('listings').style.display = 'block';
    });

    // Global Filters Object
    const filters = {
        location: [],
        bhk: [],
        furnished: [],
        tenant: [],
        priceRange: {
            min: null,
            max: null
        }
    };

    // Function to filter listings
    function filterListings() {
        return listings.filter(listing => {
            const listingPrice = parseInt(listing.rent.replace(/[₹,]/g, ''));
            const priceInRange = (filters.priceRange.min === null || listingPrice >= filters.priceRange.min) &&
                                (filters.priceRange.max === null || listingPrice <= filters.priceRange.max);

            return (filters.location.length === 0 || filters.location.includes(listing.location)) &&
                   (filters.bhk.length === 0 || filters.bhk.includes(listing.bhk.toString())) &&
                   (filters.furnished.length === 0 || filters.furnished.includes(listing.furnished)) &&
                   (filters.tenant.length === 0 || filters.tenant.includes(listing.tenant)) &&
                   priceInRange;
        });
    }

    // Function to sort listings
    function sortListings(listings, sortBy) {
        const sortedListings = [...listings]; // Create a copy to avoid modifying the original array

        switch (sortBy) {
            case 'rent-asc':
                sortedListings.sort((a, b) => parseInt(a.rent.replace(/[₹,]/g, '')) - parseInt(b.rent.replace(/[₹,]/g, '')));
                break;
            case 'rent-desc':
                sortedListings.sort((a, b) => parseInt(b.rent.replace(/[₹,]/g, '')) - parseInt(a.rent.replace(/[₹,]/g, '')));
                break;
            case 'size-asc':
                sortedListings.sort((a, b) => parseInt(a.size) - parseInt(b.size));
                break;
            case 'size-desc':
                sortedListings.sort((a, b) => parseInt(b.size) - parseInt(a.size));
                break;
            case 'location-asc':
                sortedListings.sort((a, b) => a.location.localeCompare(b.location));
                break;
            case 'location-desc':
                sortedListings.sort((a, b) => b.location.localeCompare(a.location));
                break;
        }

        return sortedListings;
    }

    // Function to display listings for a given page
    function displayListings(page) {
        listingsContainer.innerHTML = ''; // Clear current listings

        const filteredListings = filterListings();
        const sortedListings = sortListings(filteredListings, document.getElementById('sort-select').value);

        const startIndex = (page - 1) * listingsPerPage;
        const endIndex = startIndex + listingsPerPage;
        const listingsToDisplay = sortedListings.slice(startIndex, endIndex);

        listingsToDisplay.forEach(listing => {
            const listingDiv = document.createElement('div');
            listingDiv.className = 'listing';
            listingDiv.setAttribute('data-id', listing.id);
            listingDiv.innerHTML = `
                <h3>${listing.bhk}BHK Apartment in ${listing.location}</h3>
                <p>Price: ${listing.rent}/month</p>
                <p>Location: ${listing.location}</p>
                <button class="view-details">View Details</button>
            `;
            listingsContainer.appendChild(listingDiv);
        });

        updatePagination(page, sortedListings.length);
    }

    // Function to update pagination controls
    function updatePagination(currentPage, totalListings) {
        paginationContainer.innerHTML = ''; // Clear current pagination

        const totalPages = Math.ceil(totalListings / listingsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = 'page-button';
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', () => {
                displayListings(i);
            });
            paginationContainer.appendChild(pageButton);
        }
    }

    // Add event listener for sort select
    document.getElementById('sort-select').addEventListener('change', () => {
        displayListings(1); // Go back to the first page when sorting
    });

    // Add event listeners for filter checkboxes
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const filterType = checkbox.dataset.filterType;
            const filterValue = checkbox.value;

            if (checkbox.checked) {
                filters[filterType].push(filterValue);
            } else {
                filters[filterType] = filters[filterType].filter(value => value !== filterValue);
            }

            displayListings(1); // Go back to the first page when filtering
        });
    });

    // Add price range event listeners
    document.getElementById('apply-price-filter').addEventListener('click', () => {
        const minPrice = document.getElementById('min-price').value;
        const maxPrice = document.getElementById('max-price').value;
        
        filters.priceRange.min = minPrice ? parseInt(minPrice) : null;
        filters.priceRange.max = maxPrice ? parseInt(maxPrice) : null;
        
        displayListings(1);
    });

    // Predefined range buttons
    document.querySelectorAll('.price-range-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.price-range-btn').forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Update price range inputs
            document.getElementById('min-price').value = btn.dataset.min;
            document.getElementById('max-price').value = btn.dataset.max;
            
            // Update filters
            filters.priceRange.min = parseInt(btn.dataset.min);
            filters.priceRange.max = parseInt(btn.dataset.max);
            
            displayListings(1);
        });
    });

    // Clear price range when inputs are cleared
    document.getElementById('min-price').addEventListener('input', function() {
        if (!this.value) {
            filters.priceRange.min = null;
            displayListings(1);
        }
    });

    document.getElementById('max-price').addEventListener('input', function() {
        if (!this.value) {
            filters.priceRange.max = null;
            displayListings(1);
        }
    });

    // Show initial listings
    displayListings(currentPage);

    // Handle view details button
    listingsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('view-details')) {
            const listingId = event.target.closest('.listing').dataset.id;
            const listing = listings.find(l => l.id == listingId);
            
            // Hide listings section and show details section
            document.getElementById('listings').style.display = 'none';
            detailsSection.style.display = 'block';
            
            // Populate details section
            detailsContainer.innerHTML = `
            <div class="listing-info">
                <h3>${listing.bhk}BHK in ${listing.location}</h3>
                <p><strong>Rent:</strong> ${listing.rent}/month</p>
                <p><strong>Size:</strong> ${listing.size} sq. ft.</p>
                <p><strong>Floor:</strong> ${listing.floor}</p>
                <p><strong>Area Type:</strong> ${listing.areaType}</p>
                <p><strong>Furnished:</strong> ${listing.furnished}</p>
                <p><strong>Tenant Preference:</strong> ${listing.tenant}</p>
                <p><strong>Location:</strong> ${listing.location}</p>
                <p><strong>Phone:</strong> ${listing.phone}</p>
            </div>
            <div class="listing-image">
                <img src="listingimage1.jpg" alt="Property Image">
            </div>
        `;
        }
    });

    // Back to listings
    backToListingsButton.addEventListener('click', () => {
        detailsSection.style.display = 'none';
        document.getElementById('listings').style.display = 'block';
    });
});