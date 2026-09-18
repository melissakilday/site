#!/bin/bash

# Create directory for original downloads
mkdir -p public/images/original

# Download all images with meaningful names
echo "Downloading images from Google Storage..."

# Map images to meaningful names based on usage patterns
curl -o public/images/original/salon-exterior.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d3f671384b206baef377.png"
curl -o public/images/original/salon-interior.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d3eec7a01575d2d242f5.png"
curl -o public/images/original/melissa-professional.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45d12053d0241d2b806.png"
curl -o public/images/original/balayage-transformation.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a0157964d24379.png"
curl -o public/images/original/highlights-before-after.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a015f66ed24378.png"
curl -o public/images/original/blow-wave-styling.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56d71384b7b5faef45d.png"
curl -o public/images/original/professional-blowdry.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d201419a3c858.png"
curl -o public/images/original/foil-highlights.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d203cfaa3c859.png"
curl -o public/images/original/natural-balayage.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d20c16aa3c857.png"
curl -o public/images/original/kaukapakapa-village.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d20eb48a3c859.png"
curl -o public/images/original/keratin-treatment.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56dc7a0155e95d2446b.png"
curl -o public/images/original/color-transformation.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56dc7a0158170d2446c.png"
curl -o public/images/original/about-hero-bg.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d5e612053dfc63d2b5f6.png"
curl -o public/images/original/updo-styling.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d652c7a015cdb3d2453d.png"
curl -o public/images/original/blonde-balayage.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a12053d06f9d2b9fc.png"
curl -o public/images/original/dimensional-highlights.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a12053d8203d2b9fd.png"
curl -o public/images/original/hero-background.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a71384ba9e2aef5ee.png"
curl -o public/images/original/hair-care-general.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65ac7a0155bc1d24545.png"
curl -o public/images/original/keratin-before-after.png "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67ff7f22c7a01596d4dd377a.png"

echo "All images downloaded successfully!"