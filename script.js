const videos = [
    {
        title: "S12 E10: Trump and Deportations & MiLB Teams: 5/4/25: Last Week Tonight with John Oliver",
        channel: "LastWeekTonight",
        isVerified: true,
        views: "267K views",
        date: "1 day ago",
        profilePic: "https://yt3.ggpht.com/Cz7P29Wuh5PaH8MhEA-I2MBPmOGjyCMr9QOHj-fyuXXzoe85gm-P6C8tmuUzZj23JzyvcbuIdA=s68-c-k-c0x00ffffff-no-rj",
        duration: "39:56",
        thumbnail: "https://i.ytimg.com/vi/TfgAd3Y0A3c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6nQFFlSjb2r6ZKpZV5ULl5LT1qg",
    },

    {
        title: "Aspect Ratios with Sinners Director Ryan Coogler",
        channel: "Kodak",
        isVerified: false,
        views: "539K views",
        date: "3 weeks ago",
        profilePic: "https://yt3.ggpht.com/ytc/AIdro_mzcOIftvcw3WHK-i69D3e7kMDrZ30OjEFE-MFDX07OX0Y=s68-c-k-c0x00ffffff-no-rj",
        duration: "10:42",
        thumbnail: "https://i.ytimg.com/vi/78Ru62uFM0s/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGH8gTSgTMA8=&rs=AOn4CLAHRh-iJX9GKwQuZQKjpyqpD5cvsQ",
    },

    {
        title: "Trump on Holding Constitution: 'I Don't Know' | The Daily Show",
        channel: "The Daily Show",
        isVerified: true,
        views: "2.4M views",
        date: "13 hours ago",
        profilePic: "https://yt3.ggpht.com/clBZ7D-wYk_ysfU_X0U2GAN3lAxkP5drwADfpuqvSrbPzkcemCXx9XQV8XEXqjSK3uMYiReJPQ=s68-c-k-c0x00ffffff-no-rj",
        duration: "19:46",
        thumbnail: "https://i.ytimg.com/vi/7MPBf6GEDYs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAg0Ndpy5oMOUm0fsIYcig9G_gHJg",
    },

    {
        title: "Doechii: Tiny Desk Concert",
        channel: "NPR Music",
        isVerified: true,
        views: "15M views",
        date: "4 months ago",
        profilePic: "https://yt3.ggpht.com/IXJZjJSYR9kfnUcHwIzAYjunIfovC2QYOOAseZxrDHBwvCKQEHBNcdC6PmNxn8EALE357U3vvhE=s68-c-k-c0x00ffffff-no-rj",
        duration: "23:41",
        thumbnail: "https://i.ytimg.com/vi/-91vymvIH0c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCUM5em9XHhNsF_nUHzYu6KojNRZg",
    },

    {
        title: "Hailee Steinfeld vs. Michael B. Jordan | Hot Ones Versus",
        channel: "First We Feast",
        isVerified: true,
        views: "4M views",
        date: "1 month ago",
        profilePic: "https://yt3.ggpht.com/HFfZisaVh7x0A_ZxfEObPrpAyDPqsuIJD0P4zE23jNL65Pdn58ixh7GsDaJcGw5797VChzybXQ=s68-c-k-c0x00ffffff-no-rj",
        duration: "14:38",
        thumbnail: "https://i.ytimg.com/vi/fmcm2HOAzn8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB0OEAjzVI_ZfnOmfKrpo-1VXlopw",
    },

    {
        title: "Snooze (feat. Ryuichi Sakamoto, 김우성 of The Rose)",
        channel: "SUGA -Topic",
        isVerified: false,
        views: "15M views",
        date: "2 years ago",
        profilePic: "https://yt3.ggpht.com/gUvVPo8UBT4dI6kUh4dTXzRXKsUXxozDq9utitbsR5qwMw4CXXSB88D-m8fh9ksLFe_zPsu8xDE=s68-c-k-c0x00ffffff-no-rj",
        duration: "4:25",
        thumbnail: "https://i.ytimg.com/vi/okfdIIUQOik/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBjZ6Xaw5Let8l3-R790A4ixaLmhQ",
    },
];



function filterByTitle(videos, searchedTitle) {
    return videos.filter((video) => video.title.toLowerCase().includes(searchedTitle.toLowerCase()));
};


function displayVideos(videos) {
    const container = document.getElementById("container");
    container.innerHTML = "";

    videos.forEach(video => {
        const videoElement = document.createElement("div");
        videoElement.classList.add("video");
        videoElement.innerHTML = `
            <div class="thumbnail-info">
                <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
                <span class="video-duration">${video.duration}</span>
            </div>
            <div class="video-info">
                <img src="${video.profilePic}" alt="${video.channel}" class="profile-pic">
                <div class="video-stats">
                    <h2 class="video-title">${video.title}</h2>
                    <p class="video-channel">
                        ${video.channel} 
                        ${video.isVerified ? '<span class="verified">✔</span>' : ''}
                    </p>
                    <p class="video-stats">${video.views} views • ${video.date}</p>
                </div>
            </div>
        `;
        container.appendChild(videoElement);
    });
};


function searchVideos(videos) {
    const searchBar = document.getElementById("search-bar");
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", () => {
        const searchedTitle = searchBar.value;
        const filteredVideos = filterByTitle(videos, searchedTitle);
        displayVideos(filteredVideos);
    });
};


displayVideos(videos);
searchVideos(videos);




