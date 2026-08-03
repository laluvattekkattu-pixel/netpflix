/**
 * Netflix Web Experience & Scary Personalized Jumpscare Prank
 */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------
    // Friend Photo Configuration (Direct Link)
    // ----------------------------------------------------
    const FRIEND_PHOTO_URL = "https://i.imgur.com/yFHCK6h.jpg"; 

    // ----------------------------------------------------
    // 1. Dataset: High-Res Wikipedia Posters
    // ----------------------------------------------------
    const movieCategories = [
        {
            category: "Trending Now",
            movies: [
                { title: "Dune: Part Two", rating: "98% Match", age: "13+", img: "https://upload.wikimedia.org/wikipedia/en/b/b5/Dune_Part_Two_poster.jpeg" },
                { title: "Deadpool & Wolverine", rating: "96% Match", age: "18+", img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg" },
                { title: "Oppenheimer", rating: "99% Match", age: "18+", img: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg" },
                { title: "Interstellar", rating: "97% Match", age: "13+", img: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg" }
            ]
        },
        {
            category: "Upcoming & Highly Anticipated",
            movies: [
                { title: "Stranger Things 5", rating: "99% Match", age: "16+", img: "https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.png" },
                { title: "Spider-Man: Across the Spider-Verse", rating: "98% Match", age: "PG", img: "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg" },
                { title: "Avatar: The Way of Water", rating: "97% Match", age: "13+", img: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg" },
                { title: "The Batman", rating: "95% Match", age: "16+", img: "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg" }
            ]
        },
        {
            category: "Action & Blockbusters",
            movies: [
                { title: "The Dark Knight", rating: "99% Match", age: "13+", img: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg" },
                { title: "Mission: Impossible - Dead Reckoning", rating: "94% Match", age: "13+", img: "https://upload.wikimedia.org/wikipedia/en/e/ed/Mission_-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg" },
                { title: "John Wick: Chapter 4", rating: "95% Match", age: "18+", img: "https://upload.wikimedia.org/wikipedia/en/d/d0/John_Wick_-_Chapter_4_promotional_poster.jpg" },
                { title: "Top Gun: Maverick", rating: "97% Match", age: "13+", img: "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg" }
            ]
        },
        {
            category: "Sci-Fi & Cyberpunk Classics",
            movies: [
                { title: "Blade Runner 2049", rating: "93% Match", age: "18+", img: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png" },
                { title: "The Matrix", rating: "98% Match", age: "16+", img: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg" },
                { title: "Inception", rating: "97% Match", age: "13+", img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg" },
                { title: "Cyberpunk: Edgerunners", rating: "96% Match", age: "18+", img: "https://upload.wikimedia.org/wikipedia/en/1/12/Cyberpunk_Edgerunners_poster.jpg" }
            ]
        },
        {
            category: "Top TV Series",
            movies: [
                { title: "Breaking Bad", rating: "99% Match", age: "18+", img: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png" },
                { title: "The Last of Us", rating: "96% Match", age: "18+", img: "https://upload.wikimedia.org/wikipedia/en/4/46/The_Last_of_Us_season_1_poster.jpg" },
                { title: "Wednesday", rating: "95% Match", age: "13+", img: "https://upload.wikimedia.org/wikipedia/en/2/25/Wednesday_Netflix_series_poster.jpg" },
                { title: "Squid Game", rating: "94% Match", age: "18+", img: "https://upload.wikimedia.org/wikipedia/en/d/d7/Squid_Game_title_card.jpg" }
            ]
        }
    ];

    // SPAM GIF ARRAY (12 Total Bouncers including friend photos & scary GIFs)
    const prankGifs = [
        FRIEND_PHOTO_URL,
        FRIEND_PHOTO_URL, // Duplicate friend photo for double spam!
        "https://media.giphy.com/media/8C6oF8EXJHaJzQmtH6/giphy.gif",
        "https://media.giphy.com/media/05WdBm6EqtJKprcUt4/giphy.gif",
        "https://media.giphy.com/media/e9O3l1wHTvcNbBY4SN/giphy.gif",
        "https://media.giphy.com/media/TC46tIxvGtSmbvTOl9/giphy.gif",
        "https://media.giphy.com/media/BcX3ubwiEIZ89Vd0Ju/giphy.gif",
        "https://media.giphy.com/media/8C6oF8EXJHaJzQmtH6/giphy.gif",
        "https://media.giphy.com/media/05WdBm6EqtJKprcUt4/giphy.gif",
        "https://media.giphy.com/media/e9O3l1wHTvcNbBY4SN/giphy.gif",
        "https://media.giphy.com/media/TC46tIxvGtSmbvTOl9/giphy.gif",
        "https://media.giphy.com/media/BcX3ubwiEIZ89Vd0Ju/giphy.gif"
    ];

    // Scary Center Screen Messages
    const scaryMessages = [
        `⚠️ SYSTEM COMPROMISED!`,
        `💀 NO MOVIE FOR YOU TODAY!`,
        `👁️ WE ARE WATCHING YOU...`,
        `🏃 RUN WHILE YOU CAN!`,
        `🚨 ERROR 404: MOVIE NOT FOUND`,
        `🍿 YOUR SNACKS ARE OURS NOW!`
    ];

    // ----------------------------------------------------
    // 2. Audio Engine Setup (Mobile Optimized with Silent Unlock)
    // ----------------------------------------------------
    const tracksConfig = [
        { file: 'music.mp3',  volume: 0.6 },
        { file: 'meme.mp3',   volume: 1.0 },
        { file: 'sound3.mp3', volume: 0.8 },
        { file: 'sound4.mp3', volume: 0.9 }
    ];

    const prankTracks = tracksConfig.map(track => {
        const audio = new Audio();
        audio.src = track.file;
        audio.loop = true;
        audio.volume = track.volume;
        audio.preload = 'auto';
        return audio;
    });

    let audioUnlocked = false;

    // Mobile webkit audio unlocker
    function unlockMobileAudio() {
        if (audioUnlocked) return;
        
        prankTracks.forEach(track => {
            const playPromise = track.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    track.pause();
                    track.currentTime = 0;
                }).catch(err => console.log("Waiting for user tap...", err));
            }
        });

        audioUnlocked = true;
    }

    function playAudioTracks() {
        prankTracks.forEach(track => {
            track.currentTime = 0;
            const playPromise = track.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Mobile playback prevented:", error);
                });
            }
        });
    }

    function stopAudioTracks() {
        prankTracks.forEach(track => {
            track.pause();
            track.currentTime = 0;
        });
    }

    // ----------------------------------------------------
    // 3. Render Movie Cards
    // ----------------------------------------------------
    const rowsContainer = document.getElementById('rowsContainer');

    movieCategories.forEach(cat => {
        const rowElement = document.createElement('div');
        rowElement.className = 'movie-row';
        
        const titleElement = document.createElement('h2');
        titleElement.className = 'row-header';
        titleElement.textContent = cat.category;
        rowElement.appendChild(titleElement);

        const scroller = document.createElement('div');
        scroller.className = 'cards-scroller';

        cat.movies.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <img src="${movie.img}" alt="${movie.title}" loading="lazy" onerror="this.onerror=null; this.src='https://picsum.photos/seed/${encodeURIComponent(movie.title)}/300/450';">
                <div class="card-overlay">
                    <div class="card-title">${movie.title}</div>
                    <div class="card-meta">
                        <span>${movie.rating}</span>
                        <span>${movie.age}</span>
                    </div>
                    <button class="card-btn play-btn" data-title="${movie.title}" aria-label="Play">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="currentColor" d="M8 5v14l11-7z"/>
                        </svg>
                    </button>
                </div>
            `;
            scroller.appendChild(card);
        });

        rowElement.appendChild(scroller);
        rowsContainer.appendChild(rowElement);
    });

    // Navbar Scroll Background Effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ----------------------------------------------------
    // 4. Instant Prank Launch Handler
    // ----------------------------------------------------
    const fullscreenOverlay = document.getElementById('fullscreenOverlay');
    const prankContainer = document.getElementById('prankContainer');
    
    let dvdAnimFrame = null;
    let toastInterval = null;
    let bouncers = [];

    // Registered click/touch event for immediate mobile audio unlock
    document.addEventListener('click', (e) => {
        const playBtn = e.target.closest('.play-btn');
        const navLink = e.target.closest('.nav-links a');
        const movieCard = e.target.closest('.movie-card');
        const searchBox = e.target.closest('.search-box');
        const avatar = e.target.closest('.profile-menu');
        const heroInfoBtn = e.target.closest('.info-btn');

        if (playBtn || navLink || movieCard || searchBox || avatar || heroInfoBtn) {
            e.preventDefault();
            unlockMobileAudio();
            startPrankSequence();
        }
    });

    // ESC Key Exit Listener
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && fullscreenOverlay.classList.contains('active')) {
            exitPrankSequence();
        }
    });

    function startPrankSequence() {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {});
        }

        fullscreenOverlay.classList.add('active');
        prankContainer.classList.add('active');
        
        playAudioTracks();
        startConfetti();
        initMultipleBouncingGifs();
        startToastMessages();
    }

    // ----------------------------------------------------
    // 5. Multi-GIF High-Speed Spam Physics Engine
    // ----------------------------------------------------
    function initMultipleBouncingGifs() {
        document.querySelectorAll('.multi-bouncer').forEach(el => el.remove());

        bouncers = [];

        const isMobile = window.innerWidth < 768;

        prankGifs.forEach((gifUrl, index) => {
            const el = document.createElement('div');
            el.className = 'multi-bouncer';
            
            // Highlight friend photos (first 2 items) with bigger size & glowing red border
            const isFriendPhoto = (index === 0 || index === 1);
            const baseSize = isFriendPhoto ? 220 : 160;
            const bouncerSize = isMobile ? Math.round(baseSize * 0.65) : baseSize;

            el.style.position = 'absolute';
            el.style.width = `${bouncerSize}px`;
            el.style.height = `${bouncerSize}px`;
            el.style.pointerEvents = 'none';
            el.style.willChange = 'transform';
            el.style.zIndex = isFriendPhoto ? '10005' : '10001';

            const img = document.createElement('img');
            img.src = gifUrl;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '16px';
            img.style.border = isFriendPhoto ? '4px solid #ff0000' : 'none';
            img.style.filter = 'drop-shadow(0 0 25px rgba(255, 0, 0, 1))';

            el.appendChild(img);
            prankContainer.appendChild(el);

            // Faster high-speed bounce velocity
            const speedX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 6 + 6);
            const speedY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 6 + 6);

            bouncers.push({
                element: el,
                x: Math.random() * (window.innerWidth - (bouncerSize + 20)),
                y: Math.random() * (window.innerHeight - (bouncerSize + 20)),
                vx: speedX,
                vy: speedY,
                width: bouncerSize,
                height: bouncerSize
            });
        });

        function animateAllGifs() {
            const screenW = window.innerWidth;
            const screenH = window.innerHeight;

            bouncers.forEach(b => {
                b.x += b.vx;
                b.y += b.vy;

                if (b.x <= 0) {
                    b.x = 0;
                    b.vx = Math.abs(b.vx);
                } else if (b.x + b.width >= screenW) {
                    b.x = screenW - b.width;
                    b.vx = -Math.abs(b.vx);
                }

                if (b.y <= 0) {
                    b.y = 0;
                    b.vy = Math.abs(b.vy);
                } else if (b.y + b.height >= screenH) {
                    b.y = screenH - b.height;
                    b.vy = -Math.abs(b.vy);
                }

                b.element.style.transform = `translate3d(${b.x}px, ${b.y}px, 0)`;
            });

            dvdAnimFrame = requestAnimationFrame(animateAllGifs);
        }

        cancelAnimationFrame(dvdAnimFrame);
        dvdAnimFrame = requestAnimationFrame(animateAllGifs);
    }

    function startToastMessages() {
        const toastBanner = document.getElementById('toastBanner');
        const toastText = document.getElementById('toastText');
        
        function triggerToast() {
            const randomMsg = scaryMessages[Math.floor(Math.random() * scaryMessages.length)];
            toastText.textContent = randomMsg;
            toastBanner.classList.add('show');

            setTimeout(() => {
                toastBanner.classList.remove('show');
            }, 1800);
        }

        triggerToast();
        clearInterval(toastInterval);
        toastInterval = setInterval(triggerToast, 2400);
    }

    function exitPrankSequence() {
        fullscreenOverlay.classList.remove('active');
        prankContainer.classList.remove('active');
        
        stopAudioTracks();

        document.querySelectorAll('.multi-bouncer').forEach(el => el.remove());

        clearInterval(toastInterval);
        cancelAnimationFrame(dvdAnimFrame);
        stopConfetti();

        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
        }
    }

    // ----------------------------------------------------
    // 6. Particle System
    // ----------------------------------------------------
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    let confettiParticles = [];
    let confettiAnimFrame = null;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);

    function createParticle() {
        const colors = ['#ff0000', '#990000', '#660000', '#ff4d4d', '#000000', '#ffffff'];
        return {
            x: Math.random() * canvas.width,
            y: -20,
            size: Math.random() * 12 + 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 6 + 4,
            speedX: (Math.random() - 0.5) * 5,
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 12
        };
    }

    function startConfetti() {
        resizeCanvas();
        confettiParticles = Array.from({ length: 90 }, createParticle);
        
        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            confettiParticles.forEach((p, index) => {
                p.y += p.speedY;
                p.x += p.speedX;
                p.rotation += p.rotSpeed;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                ctx.restore();

                if (p.y > canvas.height + 20) {
                    confettiParticles[index] = createParticle();
                }
            });

            confettiAnimFrame = requestAnimationFrame(render);
        }

        cancelAnimationFrame(confettiAnimFrame);
        confettiAnimFrame = requestAnimationFrame(render);
    }

    function stopConfetti() {
        cancelAnimationFrame(confettiAnimFrame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});
