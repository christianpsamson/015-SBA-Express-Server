const artists = [
  {
    id: "fac3011d",
    artist: "The Weeknd",
    rank: 1,
  },
  {
    id: "0bcea2de",
    artist: "Ed Sheeran",
    rank: 2,
  },
  {
    id: "43d0bfbe",
    artist: "Lewis Capaldi",
    rank: 3,
  },
  {
    id: "73c07cc5",
    artist: "Post Malone and Swae Lee",
    rank: 4,
  },
  {
    id: "f7fd25ad",
    artist: "Tones and I",
    rank: 5,
  },
  {
    id: "7da8d035",
    artist: "Drake featuring Wizkid and Kyla",
    rank: 6,
  },
  {
    id: "8fddce8f",
    artist: "The Kid Laroi and Justin Bieber",
    rank: 7,
  },
  {
    id: "da6d4f8f",
    artist: "Post Malone featuring 21 Savage",
    rank: 8,
  },
  {
    id: "09a38a13",
    artist: "The Weeknd featuring Daft Punk",
    rank: 9,
  },
  {
    id: "a79be4c6",
    artist: "Harry Styles",
    rank: 10,
  },
  {
    id: "435f95ed",
    artist: "Imagine Dragons",
    rank: 11,
  },
  {
    id: "31997f79",
    artist: "Glass Animals",
    rank: 12,
  },
  {
    id: "87c96e20",
    artist: "Ed Sheeran",
    rank: 13,
  },
  {
    id: "6a629b18",
    artist: "The Chainsmokers featuring Halsey",
    rank: 14,
  },
  {
    id: "93f146a7",
    artist: "Shawn Mendes and Camila Cabello",
    rank: 15,
  },
  {
    id: "aff9b131",
    artist: "James Arthur",
    rank: 16,
  },
  {
    id: null,
    artist: "Billie Eilish and Khalid",
    rank: 17,
  },
  {
    id: "96af0809",
    artist: "The Neighbourhood",
    rank: 18,
  },
  {
    id: "48aab495",
    artist: "Harry Styles",
    rank: 19,
  },
  {
    id: "be30985b",
    artist: "Dua Lipa",
    rank: 20,
  },
  {
    id: "b4671a31",
    artist: "Billie Eilish",
    rank: 21,
  },
  {
    id: "ac07f5f2",
    artist: "Juice WRLD",
    rank: 22,
  },
  {
    id: "987372fd",
    artist: "Ed Sheeran",
    rank: 23,
  },
  {
    id: "d61777f4",
    artist: "Drake",
    rank: 24,
  },
  {
    id: "e4cebc52",
    artist: "Ed Sheeran",
    rank: 25,
  },
  {
    id: "83070d4e",
    artist: "The Chainsmokers and Coldplay",
    rank: 26,
  },
  {
    id: "5b2b4399",
    artist: "Queen",
    rank: 27,
  },
  {
    id: "b0a475f2",
    artist: "Hozier",
    rank: 28,
  },
  {
    id: "a21ceff6",
    artist: "Post Malone",
    rank: 29,
  },
  {
    id: "8041d22e",
    artist: "Lady Gaga and Bradley Cooper",
    rank: 30,
  },
  {
    id: "f501d5bc",
    artist: "Justin Bieber",
    rank: 31,
  },
  {
    id: "aa58bde9",
    artist: "John Legend",
    rank: 32,
  },
  {
    id: "b47866b3",
    artist: "Vance Joy",
    rank: 33,
  },
  {
    id: "8c676b84",
    artist: "Imagine Dragons",
    rank: 34,
  },
  {
    id: "3497d3c3",
    artist: "OneRepublic",
    rank: 35,
  },
  {
    id: 99607221,
    artist: "Travis Scott featuring Kendrick Lamar",
    rank: 36,
  },
  {
    id: "ec5473bf",
    artist: "Ariana Grande",
    rank: 37,
  },
  {
    id: "555d40d7",
    artist: "XXXTentacion",
    rank: 38,
  },
  {
    id: "15c342ae",
    artist: "Macklemore & Ryan Lewis featuring Ray Dalton",
    rank: 39,
  },
  {
    id: "cbce7069",
    artist: "Twenty One Pilots",
    rank: 40,
  },
  {
    id: "ae8cd097",
    artist: "Avicii",
    rank: 41,
  },
  {
    id: "4b6461e7",
    artist: "The Weeknd",
    rank: 42,
  },
  {
    id: "fc112f72",
    artist: "XXXTentacion",
    rank: 43,
  },
  {
    id: "879de214",
    artist: "Passenger",
    rank: 44,
  },
  {
    id: "74c3b637",
    artist: "Tom Odell",
    rank: 45,
  },
  {
    id: "6491c2bc",
    artist: "Kendrick Lamar",
    rank: 46,
  },
  {
    id: "815eae80",
    artist: "Calvin Harris and Dua Lipa",
    rank: 47,
  },
  {
    id: "3163a063",
    artist: "Lil Uzi Vert",
    rank: 48,
  },
  {
    id: "89fc403f",
    artist: "Olivia Rodrigo",
    rank: 49,
  },
  {
    id: "f02345e6",
    artist: "Imagine Dragons",
    rank: 50,
  },
  {
    id: "66232a1c",
    artist: "Olivia Rodrigo",
    rank: 51,
  },
  {
    id: "31d965dc",
    artist: "Travis Scott featuring Drake",
    rank: 52,
  },
  {
    id: "90ab2587",
    artist: "Dua Lipa",
    rank: 53,
  },
  {
    id: "aa7b970e",
    artist: "Camila Cabello featuring Young Thug",
    rank: 54,
  },
  {
    id: "8a45ff9f",
    artist: "Marshmello and Bastille",
    rank: 55,
  },
  {
    id: "cdacd152",
    artist: "Shawn Mendes",
    rank: 56,
  },
  {
    id: "0cb7bf88",
    artist: "Eminem",
    rank: 57,
  },
  {
    id: "d1ced53b",
    artist: "J. Cole",
    rank: 58,
  },
  {
    id: 16997078,
    artist: "DJ Snake featuring Justin Bieber",
    rank: 59,
  },
  {
    id: "663c38fb",
    artist: "Coldplay",
    rank: 60,
  },
  {
    id: 4.1275e29,
    artist: "Arctic Monkeys",
    rank: 61,
  },
  {
    id: "32ca0cc4",
    artist: "The Killers",
    rank: 62,
  },
  {
    id: "2854dd42",
    artist: "Justin Bieber",
    rank: 63,
  },
  {
    id: "052b4adc",
    artist: "Dua Lipa featuring DaBaby",
    rank: 64,
  },
  {
    id: "2e6cefba",
    artist: "Sam Smith",
    rank: 65,
  },
  {
    id: "03bf83c7",
    artist: "Lil Nas X featuring Jack Harlow",
    rank: 66,
  },
  {
    id: "6128581c",
    artist: "Halsey",
    rank: 67,
  },
  {
    id: "a7f98209",
    artist: "Sam Smith",
    rank: 68,
  },
  {
    id: "6396f7ca",
    artist: "Major Lazer and DJ Snake featuring MØ",
    rank: 69,
  },
  {
    id: "ec21d22f",
    artist: "The Weeknd",
    rank: 70,
  },
  {
    id: "b7c3802e",
    artist: "Post Malone featuring Quavo",
    rank: 71,
  },
  {
    id: "7c046719",
    artist: "Post Malone",
    rank: 72,
  },
  {
    id: "a1d5d546",
    artist: "Maroon 5",
    rank: 73,
  },
  {
    id: "c557cda8",
    artist: "Bad Bunny and Jhay Cortez",
    rank: 74,
  },
  {
    id: "c5e9b134",
    artist: "Mark Ronson featuring Bruno Mars",
    rank: 75,
  },
  {
    id: "1e9fa365",
    artist: "Saint Jhn with Imanbek",
    rank: 76,
  },
  {
    id: "07145915",
    artist: "Bruno Mars",
    rank: 77,
  },
  {
    id: "7933442d",
    artist: "Eminem",
    rank: 78,
  },
  {
    id: "9a6d81c1",
    artist: "Alan Walker",
    rank: 79,
  },
  {
    id: "002ce3a8",
    artist: "Shawn Mendes",
    rank: 80,
  },
  {
    id: "919cabf9",
    artist: "Mike Posner and Seeb",
    rank: 81,
  },
  {
    id: "e19485c0",
    artist: "French Montana featuring Swae Lee",
    rank: 82,
  },
  {
    id: "c6ad934c",
    artist: "Oasis",
    rank: 83,
  },
  {
    id: "3c5d8a25",
    artist: "Bruno Mars",
    rank: 84,
  },
  {
    id: "5403857f",
    artist: "Lil Nas X",
    rank: 85,
  },
  {
    id: "b404bf85",
    artist: "Nirvana",
    rank: 86,
  },
  {
    id: "f86cade3",
    artist: "Eminem featuring Nate Dogg",
    rank: 87,
  },
  {
    id: "950831a6",
    artist: "The Chainsmokers featuring Daya",
    rank: 88,
  },
  {
    id: "9dd3b294",
    artist: "Bruno Mars",
    rank: 89,
  },
  {
    id: 53512636,
    artist: "Ariana Grande",
    rank: 90,
  },
  {
    id: "f21f30b8",
    artist: "Coldplay",
    rank: 91,
  },
  {
    id: "c03bfee4",
    artist: "BTS",
    rank: 92,
  },
  {
    id: "b2b3ecfb",
    artist: "24kGoldn and Iann Dior",
    rank: 93,
  },
  {
    id: "d870f03b",
    artist: "Queen",
    rank: 94,
  },
  {
    id: "1d07d003",
    artist: "XXXTentacion",
    rank: 95,
  },
  {
    id: "e57bc4d7",
    artist: "Ed Sheeran and Justin Bieber",
    rank: 96,
  },
  {
    id: "6700ff2e",
    artist: "Shawn Mendes",
    rank: 97,
  },
  {
    id: "c3402097",
    artist: "Elton John and Dua Lipa with Pnau",
    rank: 98,
  },
  {
    id: "41bda425",
    artist: "Linkin Park",
    rank: 99,
  },
  {
    id: "f94af544",
    artist: "Roddy Ricch",
    rank: 100,
  },
];

module.exports = artists;
