const songs = [
  {
    id: "015E7B62",
    rank: 1,
    title: "Blinding Lights",
    releaseDate: "29 November 2019",
    artist: "The Weeknd",
  },
  {
    id: "C137ED81",
    rank: 2,
    title: "Shape of You",
    releaseDate: "6 January 2017",
    artist: "Ed Sheeran",
  },
  {
    id: "52F67883",
    rank: 3,
    title: "Someone You Loved",
    releaseDate: "8 November 2018",
    artist: "Lewis Capaldi",
  },
  {
    id: "B600DE57",
    rank: 4,
    title: "Sunflower",
    releaseDate: "18 October 2018",
    artist: "Post Malone and Swae Lee",
  },
  {
    id: "7F264AA4",
    rank: 5,
    title: "Dance Monkey",
    releaseDate: "10 May 2019",
    artist: "Tones and I",
  },
  {
    id: "1077572A",
    rank: 6,
    title: "One Dance",
    releaseDate: "5 April 2016",
    artist: "Drake featuring Wizkid and Kyla",
  },
  {
    id: "F51D760A",
    rank: 7,
    title: "Stay",
    releaseDate: "9 July 2021",
    artist: "The Kid Laroi and Justin Bieber",
  },
  {
    id: "1670D1F1",
    rank: 8,
    title: "Rockstar",
    releaseDate: "15 September 2017",
    artist: "Post Malone featuring 21 Savage",
  },
  {
    id: "C509DB79",
    rank: 9,
    title: "Starboy",
    releaseDate: "21 September 2016",
    artist: "The Weeknd featuring Daft Punk",
  },
  {
    id: "2CE6534D",
    rank: 10,
    title: "As It Was",
    releaseDate: "1 April 2022",
    artist: "Harry Styles",
  },
  {
    id: "6E0EB372",
    rank: 11,
    title: "Believer",
    releaseDate: "1 February 2017",
    artist: "Imagine Dragons",
  },
  {
    id: "339E7F19",
    rank: 12,
    title: "Heat Waves",
    releaseDate: "29 June 2020",
    artist: "Glass Animals",
  },
  {
    id: "834A5F31",
    rank: 13,
    title: "Perfect",
    releaseDate: "3 March 2017",
    artist: "Ed Sheeran",
  },
  {
    id: "E22CCEAD",
    rank: 14,
    title: "Closer",
    releaseDate: "29 July 2016",
    artist: "The Chainsmokers featuring Halsey",
  },
  {
    id: "283CFEAC",
    rank: 15,
    title: "Señorita",
    releaseDate: "21 June 2019",
    artist: "Shawn Mendes and Camila Cabello",
  },
  {
    id: "FB6B0509",
    rank: 16,
    title: "Say You Won't Let Go",
    releaseDate: "9 September 2016",
    artist: "James Arthur",
  },
  {
    id: "C38D0337",
    rank: 17,
    title: "Lovely",
    releaseDate: "19 April 2018",
    artist: "Billie Eilish and Khalid",
  },
  {
    id: "B14F2E0D",
    rank: 18,
    title: "Sweater Weather",
    releaseDate: "28 March 2012",
    artist: "The Neighbourhood",
  },
  {
    id: "1D46315D",
    rank: 19,
    title: "Watermelon Sugar",
    releaseDate: "13 December 2019",
    artist: "Harry Styles",
  },
  {
    id: "9E51BD50",
    rank: 20,
    title: "Don't Start Now",
    releaseDate: "1 November 2019",
    artist: "Dua Lipa",
  },
  {
    id: "EE82C467",
    rank: 21,
    title: "Bad Guy",
    releaseDate: "29 March 2019",
    artist: "Billie Eilish",
  },
  {
    id: "A0BCA67B",
    rank: 22,
    title: "Lucid Dreams",
    releaseDate: "4 May 2018",
    artist: "Juice WRLD",
  },
  {
    id: "2B35AB58",
    rank: 23,
    title: "Thinking Out Loud",
    releaseDate: "20 June 2014",
    artist: "Ed Sheeran",
  },
  {
    id: "10757A27",
    rank: 24,
    title: "God's Plan",
    releaseDate: "19 January 2018",
    artist: "Drake",
  },
  {
    id: "AEC8101F",
    rank: 25,
    title: "Photograph",
    releaseDate: "20 June 2014",
    artist: "Ed Sheeran",
  },
  {
    id: "F661E373",
    rank: 26,
    title: "Something Just Like This",
    releaseDate: "22 February 2017",
    artist: "The Chainsmokers and Coldplay",
  },
  {
    id: "90AB9CD4",
    rank: 27,
    title: "Bohemian Rhapsody",
    releaseDate: "31 October 1975",
    artist: "Queen",
  },
  {
    id: "6EA7150C",
    rank: 28,
    title: "Take Me to Church",
    releaseDate: "13 September 2013",
    artist: "Hozier",
  },
  {
    id: 12263761,
    rank: 29,
    title: "Circles",
    releaseDate: "30 August 2019",
    artist: "Post Malone",
  },
  {
    id: "59F9FCC2",
    rank: 30,
    title: "Shallow",
    releaseDate: "27 September 2018",
    artist: "Lady Gaga and Bradley Cooper",
  },
  {
    id: "99B320CA",
    rank: 31,
    title: "Love Yourself",
    releaseDate: "9 November 2015",
    artist: "Justin Bieber",
  },
  {
    id: "2F3F4EE5",
    rank: 32,
    title: "All of Me",
    releaseDate: "12 August 2013",
    artist: "John Legend",
  },
  {
    id: "85A0B236",
    rank: 33,
    title: "Riptide",
    releaseDate: "21 May 2013",
    artist: "Vance Joy",
  },
  {
    id: "AB17BEE2",
    rank: 34,
    title: "Thunder",
    releaseDate: "27 April 2017",
    artist: "Imagine Dragons",
  },
  {
    id: "365127D7",
    rank: 35,
    title: "Counting Stars",
    releaseDate: "25 March 2013",
    artist: "OneRepublic",
  },
  {
    id: "67E5FBA3",
    rank: 36,
    title: "goosebumps",
    releaseDate: "2 September 2016",
    artist: "Travis Scott featuring Kendrick Lamar",
  },
  {
    id: "ABF83077",
    rank: 37,
    title: "7 Rings",
    releaseDate: "18 January 2019",
    artist: "Ariana Grande",
  },
  {
    id: "0BA13E4F",
    rank: 38,
    title: "SAD!",
    releaseDate: "1 March 2018",
    artist: "XXXTentacion",
  },
  {
    id: "8B163221",
    rank: 39,
    title: "Can't Hold Us",
    releaseDate: "16 August 2011",
    artist: "Macklemore & Ryan Lewis featuring Ray Dalton",
  },
  {
    id: "BAA0836B",
    rank: 40,
    title: "Stressed Out",
    releaseDate: "28 April 2015",
    artist: "Twenty One Pilots",
  },
  {
    id: "998D7D17",
    rank: 41,
    title: "Wake Me Up",
    releaseDate: "17 June 2013",
    artist: "Avicii",
  },
  {
    id: "3CB7C119",
    rank: 42,
    title: "The Hills",
    releaseDate: "27 May 2015",
    artist: "The Weeknd",
  },
  {
    id: "8B3CDAFE",
    rank: 43,
    title: "Jocelyn Flores",
    releaseDate: "31 October 2017",
    artist: "XXXTentacion",
  },
  {
    id: "ADC1AF64",
    rank: 44,
    title: "Let Her Go",
    releaseDate: "24 July 2012",
    artist: "Passenger",
  },
  {
    id: "B3CE3237",
    rank: 45,
    title: "Another Love",
    releaseDate: "24 June 2013",
    artist: "Tom Odell",
  },
  {
    id: "7145F3D4",
    rank: 46,
    title: "Humble",
    releaseDate: "30 March 2017",
    artist: "Kendrick Lamar",
  },
  {
    id: "531F31D0",
    rank: 47,
    title: "One Kiss",
    releaseDate: "6 April 2018",
    artist: "Calvin Harris and Dua Lipa",
  },
  {
    id: "4B94C8E9",
    rank: 48,
    title: "XO Tour Llif3",
    releaseDate: "24 March 2017",
    artist: "Lil Uzi Vert",
  },
  {
    id: "4D95380E",
    rank: 49,
    title: "Good 4 U",
    releaseDate: "14 May 2021",
    artist: "Olivia Rodrigo",
  },
  {
    id: "26AE7058",
    rank: 50,
    title: "Demons",
    releaseDate: "4 September 2012",
    artist: "Imagine Dragons",
  },
  {
    id: "490CE6AB",
    rank: 51,
    title: "Drivers License",
    releaseDate: "8 January 2021",
    artist: "Olivia Rodrigo",
  },
  {
    id: "E7DE0825",
    rank: 52,
    title: "Sicko Mode",
    releaseDate: "3 August 2018",
    artist: "Travis Scott featuring Drake",
  },
  {
    id: "1D291B5C",
    rank: 53,
    title: "New Rules",
    releaseDate: "2 June 2017",
    artist: "Dua Lipa",
  },
  {
    id: "6954947D",
    rank: 54,
    title: "Havana",
    releaseDate: "3 August 2017",
    artist: "Camila Cabello featuring Young Thug",
  },
  {
    id: "01CC4219",
    rank: 55,
    title: "Happier",
    releaseDate: "17 August 2018",
    artist: "Marshmello and Bastille",
  },
  {
    id: "D28A51F9",
    rank: 56,
    title: "Treat You Better",
    releaseDate: "3 June 2016",
    artist: "Shawn Mendes",
  },
  {
    id: "D3C22D1C",
    rank: 57,
    title: "Lose Yourself",
    releaseDate: "28 October 2002",
    artist: "Eminem",
  },
  {
    id: "27F9A780",
    rank: 58,
    title: "No Role Modelz",
    releaseDate: "4 August 2015",
    artist: "J. Cole",
  },
  {
    id: "854FF22B",
    rank: 59,
    title: "Let Me Love You",
    releaseDate: "5 August 2016",
    artist: "DJ Snake featuring Justin Bieber",
  },
  {
    id: "902846C1",
    rank: 60,
    title: "Yellow",
    releaseDate: "26 June 2000",
    artist: "Coldplay",
  },
  {
    id: "71C27632",
    rank: 61,
    title: "Do I Wanna Know?",
    releaseDate: "19 June 2013",
    artist: "Arctic Monkeys",
  },
  {
    id: "DE28531C",
    rank: 62,
    title: "Mr. Brightside",
    releaseDate: "7 June 2004",
    artist: "The Killers",
  },
  {
    id: "D76BA3B5",
    rank: 63,
    title: "Sorry",
    releaseDate: "22 October 2015",
    artist: "Justin Bieber",
  },
  {
    id: "EA04A1B7",
    rank: 64,
    title: "Levitating",
    releaseDate: "1 October 2020",
    artist: "Dua Lipa featuring DaBaby",
  },
  {
    id: "6E0979BE",
    rank: 65,
    title: "Stay with Me",
    releaseDate: "14 April 2014",
    artist: "Sam Smith",
  },
  {
    id: "EB28670F",
    rank: 66,
    title: "Industry Baby",
    releaseDate: "23 July 2021",
    artist: "Lil Nas X featuring Jack Harlow",
  },
  {
    id: "97916C62",
    rank: 67,
    title: "Without Me",
    releaseDate: "4 October 2018",
    artist: "Halsey",
  },
  {
    id: "C903E59C",
    rank: 68,
    title: "Too Good at Goodbyes",
    releaseDate: "8 September 2017",
    artist: "Sam Smith",
  },
  {
    id: "6A0DC70A",
    rank: 69,
    title: "Lean On",
    releaseDate: "2 March 2015",
    artist: "Major Lazer and DJ Snake featuring MØ",
  },
  {
    id: "6034F1A0",
    rank: 70,
    title: "Die for You",
    releaseDate: "25 November 2016",
    artist: "The Weeknd",
  },
  {
    id: "21E206DD",
    rank: 71,
    title: "Congratulations",
    releaseDate: "4 November 2016",
    artist: "Post Malone featuring Quavo",
  },
  {
    id: "57935D58",
    rank: 72,
    title: "Better Now",
    releaseDate: "27 April 2018",
    artist: "Post Malone",
  },
  {
    id: "F7A65E06",
    rank: 73,
    title: "Memories",
    releaseDate: "20 September 2019",
    artist: "Maroon 5",
  },
  {
    id: "EDEEA4B5",
    rank: 74,
    title: "Dakiti",
    releaseDate: "30 October 2020",
    artist: "Bad Bunny and Jhay Cortez",
  },
  {
    id: "DB19DB0E",
    rank: 75,
    title: "Uptown Funk",
    releaseDate: "10 November 2014",
    artist: "Mark Ronson featuring Bruno Mars",
  },
  {
    id: "584B6843",
    rank: 76,
    title: "Roses (Imanbek remix)",
    releaseDate: "18 September 2019",
    artist: "Saint Jhn with Imanbek",
  },
  {
    id: "E8ADDECD",
    rank: 77,
    title: "That's What I Like",
    releaseDate: "18 November 2016",
    artist: "Bruno Mars",
  },
  {
    id: "DE448DC6",
    rank: 78,
    title: "Without Me",
    releaseDate: "15 May 2002",
    artist: "Eminem",
  },
  {
    id: "3824DB78",
    rank: 79,
    title: "Faded",
    releaseDate: "3 December 2015",
    artist: "Alan Walker",
  },
  {
    id: "F81D1ACB",
    rank: 80,
    title: "There's Nothing Holdin' Me Back",
    releaseDate: "20 April 2017",
    artist: "Shawn Mendes",
  },
  {
    id: "BBE98EB3",
    rank: 81,
    title: "I Took a Pill in Ibiza (Seeb Remix)",
    releaseDate: "14 April 2015",
    artist: "Mike Posner and Seeb",
  },
  {
    id: "B54D1B79",
    rank: 82,
    title: "Unforgettable",
    releaseDate: "7 April 2017",
    artist: "French Montana featuring Swae Lee",
  },
  {
    id: "A1632BE7",
    rank: 83,
    title: "Wonderwall",
    releaseDate: "30 October 1995",
    artist: "Oasis",
  },
  {
    id: "A4252B4C",
    rank: 84,
    title: "When I Was Your Man",
    releaseDate: "7 December 2012",
    artist: "Bruno Mars",
  },
  {
    id: "FDDE28A9",
    rank: 85,
    title: "Montero (Call Me by Your Name)",
    releaseDate: "26 March 2021",
    artist: "Lil Nas X",
  },
  {
    id: "28C973A7",
    rank: 86,
    title: "Smells Like Teen Spirit",
    releaseDate: "10 September 1991",
    artist: "Nirvana",
  },
  {
    id: "88E89FC3",
    rank: 87,
    title: "'Till I Collapse",
    releaseDate: "26 May 2002",
    artist: "Eminem featuring Nate Dogg",
  },
  {
    id: "947E31BB",
    rank: 88,
    title: "Don't Let Me Down",
    releaseDate: "5 February 2016",
    artist: "The Chainsmokers featuring Daya",
  },
  {
    id: "DF7C8239",
    rank: 89,
    title: "Just The Way You Are",
    releaseDate: "10 August 2010",
    artist: "Bruno Mars",
  },
  {
    id: "9B4D1B04",
    rank: 90,
    title: "Thank U, Next",
    releaseDate: "3 November 2018",
    artist: "Ariana Grande",
  },
  {
    id: "EA4102F6",
    rank: 91,
    title: "Viva La Vida",
    releaseDate: "12 June 2008",
    artist: "Coldplay",
  },
  {
    id: "CEAC34A5",
    rank: 92,
    title: "Dynamite",
    releaseDate: "21 August 2020",
    artist: "BTS",
  },
  {
    id: "D7CFFB54",
    rank: 93,
    title: "Mood",
    releaseDate: "24 July 2020",
    artist: "24kGoldn and Iann Dior",
  },
  {
    id: "2D43EB93",
    rank: 94,
    title: "Don't Stop Me Now",
    releaseDate: "26 January 1979",
    artist: "Queen",
  },
  {
    id: "F18332D2",
    rank: 95,
    title: "Moonlight",
    releaseDate: "16 March 2018",
    artist: "XXXTentacion",
  },
  {
    id: "5B7B8A03",
    rank: 96,
    title: "I Don't Care",
    releaseDate: "10 May 2019",
    artist: "Ed Sheeran and Justin Bieber",
  },
  {
    id: "E118C30B",
    rank: 97,
    title: "Stitches",
    releaseDate: "14 April 2015",
    artist: "Shawn Mendes",
  },
  {
    id: "C35059BF",
    rank: 98,
    title: "Cold Heart (Pnau Remix)",
    releaseDate: "13 August 2021",
    artist: "Elton John and Dua Lipa with Pnau",
  },
  {
    id: "B6BD0B94",
    rank: 99,
    title: "In the End",
    releaseDate: "24 October 2000",
    artist: "Linkin Park",
  },
  {
    id: "4D6D03EC",
    rank: 100,
    title: "The Box",
    releaseDate: "6 December 2019",
    artist: "Roddy Ricch",
  },
];

module.exports = songs;
