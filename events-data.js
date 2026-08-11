(() => {
    const LOGO_IMAGE = "content/Herd Logo.svg?v=20260501";

    const events = [
        {
            id: "why-not-2026",
            date: "2026-09-23",
            dateText: "September 23, 2026",
            title: "HERD: Why Not?",
            location: "O'Shaughnessy at St. Catherine University, St. Paul",
            imageMode: "logo",
            imageSrc: LOGO_IMAGE,
            imageAlt: "HERD logo",
            detailsBeforeLiveHtml: "<p>Tickets on sale soon</p>",
            detailsLiveAt: "2026-08-20T12:00:00-05:00",
            detailsAfterLiveHtml: '<p><a href="https://www.stkate.edu/oshaughnessy/events/herd-a-women-centered-story-telling-event" class="event-read-more-inline" target="_blank" rel="noopener">Get tickets</a></p>'
        },
        {
            id: "theme-tba-oct-2026",
            date: "2026-10-29",
            dateText: "October 29, 2026",
            title: "HERD: Theme TBA",
            location: "CHS Field, Saint Paul - 7pm",
            imageMode: "logo",
            imageSrc: LOGO_IMAGE,
            imageAlt: "HERD logo",
            detailsHtml: "<p>In partnership with Habitat for Humanity of Minnesota.</p>"
        },
        {
            id: "sports-edition-2026",
            date: "2026-11-13",
            dateText: "November 13, 2026",
            title: "HERD: Women's Sports Edition",
            location: "Huntington Bank Stadium - 7pm",
            imageMode: "logo",
            imageSrc: LOGO_IMAGE,
            imageAlt: "HERD logo"
        },
        {
            id: "theme-tba-dec-2026",
            date: "2026-12-02",
            dateText: "December 2, 2026",
            title: "HERD: Theme TBA",
            location: "O'Shaughnessy at St. Catherine University, St. Paul",
            imageMode: "logo",
            imageSrc: LOGO_IMAGE,
            imageAlt: "HERD logo"
        },
        {
            id: "theme-tba-feb-2027",
            date: "2027-02-10",
            dateText: "February 10, 2027",
            title: "HERD: Theme TBA",
            location: "The Parkway Theater",
            imageMode: "logo",
            imageSrc: LOGO_IMAGE,
            imageAlt: "HERD logo"
        },
        {
            id: "theme-tba-apr-2027",
            date: "2027-04-15",
            dateText: "April 15, 2027",
            title: "HERD: Theme TBA",
            location: "O'Shaughnessy at St. Catherine University, St. Paul",
            imageMode: "logo",
            imageSrc: LOGO_IMAGE,
            imageAlt: "HERD logo"
        },
        {
            id: "detour-2026",
            date: "2026-07-14",
            dateText: "July 14, 2026",
            title: "HERD: Detour",
            location: "The Parkway Theater",
            imageMode: "poster",
            imageSrc: "sports/detour.png",
            imageAlt: "HERD: Detour",
            detailsHtml: '<p><span class="event-sold-out">Sold out</span></p>'
        },
        {
            id: "pressure-2026",
            date: "2026-04-28",
            dateText: "April 28, 2026",
            titleHtml: "Herd: PRESSURE <br> Women's Sports Edition",
            location: "Minneapolis Institute of Art (MIA)",
            imageMode: "poster",
            imageSrc: "content/pressure_square.png",
            imageAlt: "Herd: PRESSURE Women's Sports Edition",
            eventLink: "pressure.html",
            titleLinkOnEventsPage: true,
            detailsHtml: '<p><a href="pressure.html" class="event-read-more-inline">Read more</a></p>'
        },
        {
            id: "outside-2026",
            date: "2026-04-22",
            dateText: "April 22, 2026",
            title: "HERD: OUTSIDE",
            location: "The Parkway Theater",
            imageMode: "poster",
            imageSrc: "content/outside_square.png",
            imageAlt: "HERD: OUTSIDE"
        },
        {
            id: "crush-2026",
            date: "2026-02-11",
            dateText: "Feb. 11, 2026",
            title: "CRUSH",
            location: "O'Shaughnessy at St. Catherine University, St. Paul",
            imageMode: "photo",
            imageSrc: "content/shag1.jpeg",
            imageAlt: "CRUSH"
        },
        {
            id: "present-2025",
            date: "2025-12-02",
            dateText: "Dec. 2, 2025",
            title: "PRESENT",
            location: "Herd at the Parkway",
            imageMode: "photo",
            imageSrc: "content/present.JPG",
            imageAlt: "PRESENT"
        },
        {
            id: "busted-2025",
            date: "2025-10-22",
            dateText: "Wednesday, Oct. 22, 2025",
            title: "BUSTED",
            location: "CHS Field, Saint Paul, MN",
            imageMode: "photo",
            imageSrc: "content/new.jpeg",
            imageAlt: "BUSTED"
        },
        {
            id: "boss-2025",
            date: "2025-08-09",
            dateText: "Aug. 9, 2025",
            title: "BOSS",
            location: "YMCA Camp St. Croix, Hudson, Wisconsin",
            imageMode: "photo",
            imageSrc: "content/slider31.jpeg",
            imageAlt: "BOSS"
        },
        {
            id: "hairy-2025",
            date: "2025-06-26",
            dateText: "Thursday, Jun. 26, 2025",
            title: "HAIRY",
            location: "Urban Growler Brewing Company, Saint Paul, MN",
            imageMode: "photo",
            imageSrc: "content/hairy.jpeg",
            imageAlt: "HAIRY"
        },
        {
            id: "crash-2025",
            date: "2025-04-10",
            dateText: "Apr. 10, 2025",
            title: "CRASH",
            location: "Urban Growler Brewing Company, Saint Paul, MN",
            imageMode: "photo",
            imageSrc: "content/crash.jpg",
            imageAlt: "CRASH"
        }
    ];

    function parseIsoDate(dateString) {
        const date = new Date(`${dateString}T00:00:00`);
        if (Number.isNaN(date.getTime())) return null;
        date.setHours(0, 0, 0, 0);
        return date;
    }

    function getEventsByDate() {
        return [...events].sort((a, b) => {
            const dateA = parseIsoDate(a.date);
            const dateB = parseIsoDate(b.date);
            return dateA - dateB;
        });
    }

    function getUpcomingAndPastEvents() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const upcoming = [];
        const past = [];

        getEventsByDate().forEach((event) => {
            const eventDate = parseIsoDate(event.date);
            if (!eventDate) return;

            if (eventDate < today) {
                past.push(event);
            } else {
                upcoming.push(event);
            }
        });

        past.reverse();
        return { upcoming, past };
    }

    function renderImageForEventsPage(event, labelText) {
        if (event.imageMode === "logo") {
            return `
                <div class="event-card-image">
                    <div class="event-image-placeholder">
                        <img src="${event.imageSrc}" alt="${event.imageAlt}">
                        <div class="event-category-label-small">${labelText}</div>
                    </div>
                </div>
            `;
        }

        const imageClass = event.imageMode === "poster"
            ? "event-card-image event-card-image-poster"
            : "event-card-image";

        const imageContent = `
            <div class="${imageClass}">
                <img src="${event.imageSrc}" alt="${event.imageAlt}">
                <div class="event-category-label-small">${labelText}</div>
            </div>
        `;

        if (event.eventLink) {
            return `<a href="${event.eventLink}" class="event-card-poster-link">${imageContent}</a>`;
        }

        return imageContent;
    }

    function renderTitleForEventsPage(event) {
        const titleMarkup = event.titleHtml || event.title;
        if (event.eventLink && event.titleLinkOnEventsPage) {
            return `<h3 class="event-card-title-small"><a href="${event.eventLink}" class="event-card-title-link">${titleMarkup}</a></h3>`;
        }
        return `<h3 class="event-card-title-small">${titleMarkup}</h3>`;
    }

    function renderDetails(event) {
        const detailsHtml = getDetailsHtml(event);
        if (!detailsHtml) return "";
        return `<div class="event-card-details-small event-card-details-compact">${detailsHtml}</div>`;
    }

    function getDetailsHtml(event) {
        if (!event.detailsLiveAt) {
            return event.detailsHtml || "";
        }

        const now = new Date();
        const goLiveDate = new Date(event.detailsLiveAt);
        if (Number.isNaN(goLiveDate.getTime())) {
            return event.detailsHtml || event.detailsBeforeLiveHtml || "";
        }

        if (now >= goLiveDate) {
            return event.detailsAfterLiveHtml || event.detailsHtml || "";
        }

        return event.detailsBeforeLiveHtml || event.detailsHtml || "";
    }

    function renderEventsPageCard(event, isPastEvent) {
        const labelText = isPastEvent ? "Past Event" : "Upcoming Event";
        const cardClass = isPastEvent ? "event-card-large past-event" : "event-card-large";

        return `
            <div class="${cardClass}">
                ${renderImageForEventsPage(event, labelText)}
                <div class="event-card-content">
                    <div class="event-title-row">
                        ${renderTitleForEventsPage(event)}
                    </div>
                    <div class="event-card-meta-small">
                        <span class="event-date-small">${event.dateText}</span>
                        <span class="event-time-small">${event.location}</span>
                    </div>
                    ${renderDetails(event)}
                </div>
            </div>
        `;
    }

    function renderIndexCard(event) {
        const indexImageHtml = event.imageMode === "logo"
            ? `
                <div class="event-image-placeholder">
                    <img src="${LOGO_IMAGE}" alt="HERD logo">
                </div>
            `
            : `<img src="${event.imageSrc}" alt="${event.imageAlt}">`;

        const indexImageClass = event.imageMode === "poster"
            ? "event-card-image-small event-card-image-poster"
            : "event-card-image-small";

        return `
            <div class="event-card-preview">
                <div class="${indexImageClass}">
                    ${indexImageHtml}
                    <div class="event-category-label-small">Upcoming Event</div>
                </div>
                <div class="event-card-content-small">
                    <div class="event-title-row">
                        <h3 class="event-card-title-small">${event.title}</h3>
                    </div>
                    <div class="event-card-meta-small">
                        <span class="event-date-small">${event.dateText}</span>
                        <span class="event-time-small">${event.location}</span>
                    </div>
                    ${renderDetails(event)}
                </div>
            </div>
        `;
    }

    function renderEventsPage() {
        const upcomingGrid = document.querySelector("#upcoming-events .events-cards-grid");
        const pastGrid = document.querySelector("#past-events .events-cards-grid");
        if (!upcomingGrid || !pastGrid) return;

        const { upcoming, past } = getUpcomingAndPastEvents();

        upcomingGrid.innerHTML = upcoming.map((event) => renderEventsPageCard(event, false)).join("");
        pastGrid.innerHTML = past.map((event) => renderEventsPageCard(event, true)).join("");
    }

    function renderIndexUpcomingPreview(maxItems = 4) {
        const previewContainer = document.getElementById("index-upcoming-events-preview");
        if (!previewContainer) return;

        const { upcoming } = getUpcomingAndPastEvents();
        previewContainer.innerHTML = upcoming
            .slice(0, maxItems)
            .map((event) => renderIndexCard(event))
            .join("");
    }

    window.HERDEvents = {
        renderEventsPage,
        renderIndexUpcomingPreview
    };
})();
