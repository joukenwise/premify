const products = [
  {
    name: "Netflix Premium", 
    category: "streaming", 
    img: "https://i.ibb.co.com/2YMSpYCB/images-7.png",
    variants: [
      { variant: "Sharing 1p2u", durasi: "1 Bulan", price: 18000 },
      { variant: "Sharing 1p2u", durasi: "1 Bulan", price: 25000 },
      { variant: "Semi Private", durasi: "1 Bulan", price: 28000 }
    ]
  },
  {
    name: "Canva", 
    category: "editing", 
    img: "https://i.ibb.co.com/nK2LsBG/download-8.jpg",
    variants: [
      { variant: "Member Pro", durasi: "2 Bulan", price: 3000 },
      { variant: "Member Pro", durasi: "1 Tahun", price: 14000 },
     { variant: "Member Edu", durasi: "LIFETIME", price: 19000 },
     { variant: "Member Pro Admin", durasi: "1 Bulan", price: 8000 },
     { variant: "Member Pro Admin", durasi: "2 Bulan", price: 17000 },
     { variant: "Head", durasi: "1 Bulan", price: 13000 },
     { variant: "Head", durasi: "2 Bulan", price: 20000 }
    ]
  },
  {
    name: "Spotify Premium", 
    category: "streaming", 
    img: "https://i.ibb.co.com/WpHBbTqn/images-22.png",
    variants: [
      { variant: "Student No Garansi", durasi: "1 Bulan", price: 15000 },
      { variant: "Student Garansi 7d", durasi: "1 Bulan", price: 20000 },
      { variant: "Student Garansi Full", durasi: "1 Bulan", price: 32000 },
      { variant: "Student IndPlan No Garansi", durasi: "4 Bulan", price: 34000 }
    ]
  },
  {
    name: "HBO Max", 
    category: "streaming", 
    img: "https://i.ibb.co/jd1234/hbomax.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 55000 }
    ]
  },
  {
    name: "Amazon Prime Video", 
    category: "streaming", 
    img: "https://i.ibb.co/abc987/prime.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 48000 },
      { variant: "12 Bulan", durasi: "365 Hari", price: 500000 }
    ]
  },
  {
    name: "YouTube Premium", 
    category: "streaming", 
    img: "https://i.ibb.co/yt123/youtube.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 55000 }
    ]
  },
  // --- Editing Tools ---
  {
    name: "Adobe Photoshop", 
    category: "editing", 
    img: "https://i.ibb.co/def456/photoshop.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 75000 },
      { variant: "12 Bulan", durasi: "365 Hari", price: 850000 }
    ]
  },
  {
    name: "Adobe Premiere Pro", 
    category: "editing", 
    img: "https://i.ibb.co/pqr456/premiere.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 95000 },
      { variant: "6 Bulan", durasi: "180 Hari", price: 500000 }
    ]
  },
  {
    name: "Final Cut Pro", 
    category: "editing", 
    img: "https://i.ibb.co/finalcut.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 100000 }
    ]
  },
  {
    name: "Canva Pro", 
    category: "editing", 
    img: "https://i.ibb.co/canva.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 60000 },
      { variant: "12 Bulan", durasi: "365 Hari", price: 650000 }
    ]
  },
  {
    name: "Filmora", 
    category: "editing", 
    img: "https://i.ibb.co/filmora.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 55000 }
    ]
  },
  {
    name: "CorelDRAW", 
    category: "editing", 
    img: "https://i.ibb.co/coreldraw.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 70000 }
    ]
  },
  // --- Other Services ---
  {
    name: "VPN Premium", 
    category: "other", 
    img: "https://i.ibb.co/vpn.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 35000 },
      { variant: "6 Bulan", durasi: "180 Hari", price: 200000 }
    ]
  },
  {
    name: "NordVPN", 
    category: "other", 
    img: "https://i.ibb.co/nordvpn.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 40000 }
    ]
  },
  {
    name: "ExpressVPN", 
    category: "other", 
    img: "https://i.ibb.co/expressvpn.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 45000 }
    ]
  },
  {
    name: "Mega Cloud Storage", 
    category: "other", 
    img: "https://i.ibb.co/mega.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 25000 },
      { variant: "12 Bulan", durasi: "365 Hari", price: 250000 }
    ]
  },
  {
    name: "Google One 100GB", 
    category: "other", 
    img: "https://i.ibb.co/googleone.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 15000 }
    ]
  },
  {
    name: "iCloud 50GB", 
    category: "other", 
    img: "https://i.ibb.co/icloud.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 20000 }
    ]
  },
  {
    name: "VPN Unlimited", 
    category: "other", 
    img: "https://i.ibb.co/vpnunl.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 30000 }
    ]
  },
  {
    name: "Notion Pro", 
    category: "other", 
    img: "https://i.ibb.co/notion.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 50000 }
    ]
  },
  {
    name: "Trello Premium", 
    category: "other", 
    img: "https://i.ibb.co/trello.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 40000 }
    ]
  },
  {
    name: "Figma Professional", 
    category: "editing", 
    img: "https://i.ibb.co/figma.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 70000 }
    ]
  },
  {
    name: "Canva Enterprise", 
    category: "editing", 
    img: "https://i.ibb.co/canva-ent.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 90000 }
    ]
  },
  {
    name: "Disney+ Kids", 
    category: "streaming", 
    img: "https://i.ibb.co/disneykids.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 35000 }
    ]
  },
  {
    name: "Hulu", 
    category: "streaming", 
    img: "https://i.ibb.co/hulu.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 42000 }
    ]
  },
  {
    name: "Paramount+", 
    category: "streaming", 
    img: "https://i.ibb.co/paramount.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 40000 }
    ]
  },
  {
    name: "Apple Music", 
    category: "streaming", 
    img: "https://i.ibb.co/applemusic.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 50000 }
    ]
  },
  {
    name: "Audible", 
    category: "other", 
    img: "https://i.ibb.co/audible.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 45000 }
    ]
  },
  {
    name: "Skillshare", 
    category: "other", 
    img: "https://i.ibb.co/skillshare.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 35000 }
    ]
  },
  {
    name: "Coursera Plus", 
    category: "other", 
    img: "https://i.ibb.co/coursera.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 60000 }
    ]
  },
  {
    name: "Udemy Pro", 
    category: "other", 
    img: "https://i.ibb.co/udemy.jpg",
    variants: [
      { variant: "1 Bulan", durasi: "30 Hari", price: 40000 }
    ]
  }
];