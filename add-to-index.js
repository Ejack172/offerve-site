/**
 * Simple helper to add a new post entry to posts.json
 * Run this after creating a post via CMS
 * 
 * Usage: node add-to-index.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function addPost() {
    console.log('\n📝 Add Post to Index\n');

    const slug = await question('Slug (e.g., "upi-cashback-offer"): ');
    const title = await question('Title: ');
    const category = await question('Category (Free Loot/Coupons/App Offers/Shopping Deals): ');
    const summary = await question('Summary (short excerpt): ');
    const image = await question('Image path (e.g., "/assets/uploads/image.jpg"): ');
    const date = new Date().toISOString().split('T')[0];

    const newPost = {
        slug,
        title,
        category,
        summary,
        featured_image: image,
        date
    };

    // Read existing posts
    const postsPath = path.join(__dirname, 'posts', 'posts.json');
    let posts = [];

    try {
        const data = fs.readFileSync(postsPath, 'utf8');
        posts = JSON.parse(data);
    } catch (err) {
        console.log('No existing posts.json, creating new one');
    }

    // Add new post to beginning (most recent first)
    posts.unshift(newPost);

    // Write back
    fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2));

    console.log('\n✅ Post added to index!');
    console.log('\nNext steps:');
    console.log('1. git add posts/posts.json');
    console.log('2. git commit -m "Add new post to index"');
    console.log('3. git push\n');

    rl.close();
}

addPost();
