// Simple Post Loading for Offerve.com (No Build Process Required)

class PostManager {
    constructor() {
        this.posts = [];
        this.postsContainer = document.getElementById('posts-grid');
    }

    async loadPosts() {
        try {
            // Load posts from simple JSON index
            const response = await fetch('/posts/posts.json');
            if (response.ok) {
                this.posts = await response.json();
                if (this.posts.length > 0) {
                    this.renderPosts(this.posts);
                    return;
                }
            }
        } catch (error) {
            console.log('posts.json not found or empty, using static posts');
        }

        // Fallback to static posts
        this.loadStaticPosts();
    }

    loadStaticPosts() {
        // Default static posts (from existing HTML files)
        this.posts = [
            {
                slug: 'upi-cashback',
                title: '₹500 Cashback on UPI Payments',
                category: 'Free Loot',
                summary: 'Torem and ipsum dolor sit amet. Limited free lorem writer. Launch free claimeu to...',
                featured_image: 'images/upi-cashback.jpg',
                date: '2026-01-31'
            },
            {
                slug: 'netflix-sub',
                title: '1 Month Free Netflix Subscription',
                category: 'App Offers',
                summary: 'Subscribe one buy a netflix. Limited free lorem writer. Claim free offer...',
                featured_image: 'images/netflix-sub.jpg',
                date: '2026-01-30'
            },
            {
                slug: 'clothing-sale',
                title: 'Flat 80% Off on Clothing Sale',
                category: 'Shopping Deals',
                summary: 'Big pan, germany any brands! Limited time offer...',
                featured_image: 'images/clothing-sale.jpg',
                date: '2026-01-29'
            },
            {
                slug: 'amazon-prime',
                title: 'Amazon Prime Free for 30 Days',
                category: 'Free Loot',
                summary: 'Presto la tigers or free first more products dolor lamet...',
                featured_image: 'images/amazon-prime.jpg',
                date: '2026-01-28'
            },
            {
                slug: 'paytm-cashback',
                title: 'Get ₹300 Free Paytm Cash Now',
                category: 'Coupons',
                summary: 'Omniba, incesitetur. Pairing benefits to over lorem dolor lamet...',
                featured_image: 'images/paytm-cashback.jpg',
                date: '2026-01-27'
            },
            {
                slug: 'zomato-pro',
                title: 'Free Zomato Pro for 2 Months',
                category: 'App Offers',
                summary: 'More free ro tim, latest gourmet pro offer lorem dolor lamet...',
                featured_image: 'images/zomato-pro.jpg',
                date: '2026-01-26'
            }
        ];
        this.renderPosts(this.posts);
    }

    renderPosts(posts, limit = null) {
        if (!this.postsContainer) return;

        const postsToRender = limit ? posts.slice(0, limit) : posts;

        this.postsContainer.innerHTML = postsToRender.map(post => `
            <article class="card">
                <img src="${post.featured_image}" alt="${post.title}" class="card-image">
                <div class="card-content">
                    <span class="card-category">${post.category}</span>
                    <h3 class="card-title">${post.title}</h3>
                    <p class="card-excerpt">${post.summary}</p>
                    <a href="posts/${post.slug}.html" class="btn btn-small btn-pill">View Deal →</a>
                </div>
            </article>
        `).join('');
    }

    filterByCategory(category) {
        const filtered = this.posts.filter(post => post.category === category);
        this.renderPosts(filtered);
    }

    searchPosts(query) {
        const filtered = this.posts.filter(post =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.summary.toLowerCase().includes(query.toLowerCase())
        );
        this.renderPosts(filtered);
    }
}

// Initialize when DOM is loaded
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const postManager = new PostManager();
        postManager.loadPosts();

        // Make available globally for category filtering
        window.postManager = postManager;
    });
}
