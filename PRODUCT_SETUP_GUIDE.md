# Product Setup Guide - Size as Separate Products

This guide will help you set up your products with separate products for each size, allowing you to have unique image galleries for Small and Large versions.

## Overview

Instead of using variants for sizes, each size will be its own product. Products will link to each other so customers can easily switch between sizes while staying in the same color.

**Example Structure:**
- 4 colors × 2 sizes = 8 total products
- Each product has its own complete image gallery
- Colors are linked via collections (already working)
- Sizes are linked via custom metafields (new)

---

## Step 1: Create Custom Metafields in Shopify Admin

You need to create 2 custom metafields for your products:

### Metafield 1: `size`
1. Go to **Settings > Custom data > Products**
2. Click **Add definition**
3. Fill in:
   - **Name:** `Size`
   - **Namespace and key:** `custom.size`
   - **Type:** Single line text
   - **Description:** "The size of this product (Small or Large)"
4. Click **Save**

### Metafield 2: `other_size_handle`
1. Click **Add definition** again
2. Fill in:
   - **Name:** `Other Size Handle`
   - **Namespace and key:** `custom.other_size_handle`
   - **Type:** Single line text
   - **Description:** "The product handle of the same product in the other size"
3. Click **Save**

---

## Step 2: Product Naming Convention

Use a clear naming structure for your products:

**Format:** `[Product Name] - [Size] - [Color]`

**Examples:**
```
SimSim Bag - Small - Red
SimSim Bag - Small - Blue
SimSim Bag - Small - Green
SimSim Bag - Small - Yellow
SimSim Bag - Large - Red
SimSim Bag - Large - Blue
SimSim Bag - Large - Green
SimSim Bag - Large - Yellow
```

---

## Step 3: Create Your Products

For each size/color combination:

1. Go to **Products > Add product**
2. Add product title (using naming convention above)
3. Upload all images for THIS specific size/color
4. Set price
5. Set inventory
6. **Important:** Each product should have only ONE variant (Default Title)
   - Don't add size or color as variants
7. Add to the appropriate collection (for color linking)

---

## Step 4: Set Product Handles

Shopify auto-generates handles from titles. Note them down:

**Example handles:**
```
simsim-bag-small-red
simsim-bag-small-blue
simsim-bag-small-green
simsim-bag-small-yellow
simsim-bag-large-red
simsim-bag-large-blue
simsim-bag-large-green
simsim-bag-large-yellow
```

**To find a product's handle:**
1. Go to the product in admin
2. Look at the URL: `admin.shopify.com/store/YOUR-STORE/products/[HANDLE]`
3. The handle is the last part of the URL

---

## Step 5: Fill in Metafields for Each Product

For each product, add the custom metafields:

### Example: SimSim Bag - Small - Red

1. Open the product in admin
2. Scroll to **Metafields** section
3. Fill in:
   - **Size:** `Small`
   - **Other Size Handle:** `simsim-bag-large-red`
4. Click **Save**

### Example: SimSim Bag - Large - Red

1. Open the product in admin
2. Scroll to **Metafields** section
3. Fill in:
   - **Size:** `Large`
   - **Other Size Handle:** `simsim-bag-small-red`
4. Click **Save**

**Repeat for all 8 products**, making sure each Small links to its Large counterpart.

---

## Step 6: Collection Setup (for Color Linking)

You already have this working, but here's a reminder:

1. Create a collection for each color family (or use one main collection)
2. Add all color variations to the same collection
3. Each product needs the `custom.color` metafield filled in

**Example:**
- Collection: "SimSim Bags"
- Products in collection: All 8 products
- Each product has `custom.color` set: "Red", "Blue", "Green", "Yellow"

---

## Quick Reference: Complete Metafield Matrix

| Product Handle | Size | Other Size Handle | Color |
|----------------|------|-------------------|-------|
| simsim-bag-small-red | Small | simsim-bag-large-red | Red |
| simsim-bag-large-red | Large | simsim-bag-small-red | Red |
| simsim-bag-small-blue | Small | simsim-bag-large-blue | Blue |
| simsim-bag-large-blue | Large | simsim-bag-small-blue | Blue |
| simsim-bag-small-green | Small | simsim-bag-large-green | Green |
| simsim-bag-large-green | Large | simsim-bag-small-green | Green |
| simsim-bag-small-yellow | Small | simsim-bag-large-yellow | Yellow |
| simsim-bag-large-yellow | Large | simsim-bag-small-yellow | Yellow |

---

## How It Works

### On the Product Page:

1. **Size Switcher**: Shows "Small" and "Large" as links
   - Current size is highlighted (opacity: 1)
   - Other size is clickable (opacity: 0.5)
   - Clicking switches to the other product page with different images

2. **Color Switcher**: Shows all colors in the collection
   - Links to the same size in different colors
   - Current color is highlighted

3. **Images**: Each product has its own complete gallery
   - Upload as many images as you want for each size

### Customer Journey Example:

1. Customer lands on "SimSim Bag - Small - Red"
2. Sees Small images in the gallery
3. Clicks "Blue" → goes to "SimSim Bag - Small - Blue" (same size, different color)
4. Clicks "Large" → goes to "SimSim Bag - Large - Blue" (same color, different size)
5. Now sees Large version images

---

## Testing Checklist

After setup, test each product:

- [ ] Size switcher shows both Small and Large
- [ ] Current size is highlighted
- [ ] Clicking other size navigates to correct product
- [ ] Color switcher shows all colors
- [ ] Current color is highlighted
- [ ] Images are specific to that size/color combination
- [ ] Add to cart works correctly
- [ ] Price displays correctly

---

## Troubleshooting

**Size switcher doesn't appear:**
- Check that `custom.size` metafield is filled in
- Check that `custom.other_size_handle` metafield is filled in
- Verify the handle in `other_size_handle` matches exactly (case-sensitive)

**Color switcher doesn't appear:**
- Check that products are in the same collection
- Check that `custom.color` metafield is filled in for each product

**Wrong product loads when clicking size:**
- Verify the product handle in `other_size_handle` is correct
- Check for typos in the handle (no spaces, all lowercase, dashes for spaces)

---

## Need Help?

If you run into issues, check:
1. Metafield spelling and namespace (must be exactly `custom.size` and `custom.other_size_handle`)
2. Product handles are correct (copy directly from admin URL)
3. Products are published and available
4. Collections are set up correctly

---

**Last Updated:** October 3, 2025

