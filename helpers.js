// Clamp/trim a number between a min and max value
const clamp = (val, min, max) => {
    return Math.min(Math.max(val, min), max);
}

// Calculate distance between two points (hypotenuse)
const distance = (x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;

    return Math.sqrt((dx * dx) + (dy * dy));
}

// Check whether a value is within a min and max range
const isWithinRange = (val, min, max) => {
    // Return boolean
    return val >= min && val <= max;
}

// Linear interpolation // LERP
const lerp = (start, end, amount) => {
    // Clamp the amount between 0 and 1
    amount = Math.min(1, Math.max(0, amount));

    // Return the calculated interpolated value
    return start + amount * (end - start);
}

// Random number within range (lower-bound inclusive, upper-bound exclusive)
const random = (min, max) => {
    // Return integer
    return Math.floor(Math.random() * (max - min)) + min;
}

// Convert input text to Unicode normalized, lowercase, hyphenated string (borrowed from studio freight)
const slugify = (text) => {
    return text
    .toString() // Cast to string
    .normalize('NFKD') // Normalize by decomposing characters into their Unicode compatibility forms
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

const Utilis = { clamp, distance, isWithinRange, lerp, random, slugify };

export default Utilis;